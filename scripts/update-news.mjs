import Parser from 'rss-parser';
import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';

// Load environment variables if running locally, otherwise GitHub Actions will provide them
import dotenv from 'dotenv';
dotenv.config();

const parser = new Parser();
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
    console.error('Error: GEMINI_API_KEY is not defined.');
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

// Target RSS Feeds
const FEEDS = [
    'https://cointelegraph.com/rss'
];

// File path for output
const NEWS_JSON_PATH = path.join(process.cwd(), 'src/data/news.json');

// System prompt for Gemini
const SYSTEM_PROMPT = `
You are a professional crypto and Web3 journalist.
Summarize the following news article into a concise, punchy translated summary (max 3 sentences) in the requested language.
Only return the summary text. Do not add any introductory or concluding remarks.
`;

async function summarizeAndTranslate(text, lang, retries = 3) {
    const langInstructions = {
        'ja': 'Translate and summarize in Japanese.',
        'en': 'Summarize in English.',
        'zh': 'Translate and summarize in Simplified Chinese.'
    };

    const prompt = `${SYSTEM_PROMPT}\n${langInstructions[lang]}\n\nArticle Text:\n${text}`;

    for (let i = 0; i < retries; i++) {
        try {
            const result = await model.generateContent(prompt);
            return result.response.text().trim();
        } catch (error) {
            if (error.status === 429) {
                const waitTime = Math.pow(2, i) * 15000; // 15s, 30s, 60s
                console.log(`    [Rate Limit 429] Waiting ${waitTime / 1000}s before retry ${i + 1}/${retries} for ${lang}...`);
                await new Promise(resolve => setTimeout(resolve, waitTime));
            } else {
                console.error(`Error translating to ${lang}:`, error);
                return "Translation failed. Please read the original article.";
            }
        }
    }
    return "Translation failed due to rate limits.";
}

async function fetchAndProcessNews() {
    console.log('Fetching news...');
    let allItems = [];

    for (const feedUrl of FEEDS) {
        try {
            const feed = await parser.parseURL(feedUrl);
            allItems = [...allItems, ...feed.items];
        } catch (error) {
            console.error(`Error fetching feed ${feedUrl}:`, error);
        }
    }

    // Sort by pubDate descending and take top 2 to avoid API rate limits and keep it fresh
    allItems.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
    const topItems = allItems.slice(0, 2);

    const translatedNews = {
        ja: [],
        en: [],
        zh: [],
        lastUpdated: new Date().toISOString()
    };

    console.log(`Processing ${topItems.length} articles...`);

    for (let i = 0; i < topItems.length; i++) {
        const item = topItems[i];
        console.log(`Processing [${i + 1}/${topItems.length}]: ${item.title}`);

        // Clean up text content for AI processing (remove HTML tags if any)
        const contentToSummarize = (item.contentSnippet || item.content || item.title).replace(/<[^>]*>?/gm, '');

        // Fetch translations/summaries sequentially to avoid 429 Too Many Requests
        // The Free Tier allows 15 requests per minute (1 request every 4 seconds)
        const delayMs = 4500;

        console.log(`  - Translating summary (ja)...`);
        const jaDesc = await summarizeAndTranslate(contentToSummarize, 'ja');
        await new Promise(resolve => setTimeout(resolve, delayMs));

        console.log(`  - Translating summary (en)...`);
        const enDesc = await summarizeAndTranslate(contentToSummarize, 'en');
        await new Promise(resolve => setTimeout(resolve, delayMs));

        console.log(`  - Translating summary (zh)...`);
        const zhDesc = await summarizeAndTranslate(contentToSummarize, 'zh');
        await new Promise(resolve => setTimeout(resolve, delayMs));

        console.log(`  - Translating title (ja)...`);
        const jaTitle = await summarizeAndTranslate(item.title, 'ja');
        await new Promise(resolve => setTimeout(resolve, delayMs));

        console.log(`  - Translating title (zh)...`);
        const zhTitle = await summarizeAndTranslate(item.title, 'zh');
        await new Promise(resolve => setTimeout(resolve, delayMs));

        const id = item.guid || item.link || Date.now().toString();
        const date = new Date(item.pubDate).toISOString();

        translatedNews.ja.push({
            id,
            title: jaTitle,
            description: jaDesc,
            url: item.link,
            date: date
        });

        translatedNews.en.push({
            id,
            title: item.title, // Keep original English title
            description: enDesc,
            url: item.link,
            date: date
        });

        translatedNews.zh.push({
            id,
            title: zhTitle,
            description: zhDesc,
            url: item.link,
            date: date
        });

        // Longer delay between articles to allow token buckets to replenish
        await new Promise(resolve => setTimeout(resolve, 3000));
    }

    // Save to JSON
    fs.writeFileSync(NEWS_JSON_PATH, JSON.stringify(translatedNews, null, 2));
    console.log(`Successfully saved updated news to ${NEWS_JSON_PATH}`);
}

fetchAndProcessNews().catch(console.error);
