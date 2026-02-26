import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
    console.error('Error: GEMINI_API_KEY is not defined.');
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

const DATA_JSON_PATH = path.join(process.cwd(), 'src/data/sentiment.json');

const SYSTEM_PROMPT = `
You are a top-tier Web3 Market Analyst. 
Given the following snapshot of the top cryptocurrencies (price and 24h change) and recent news headlines, 
write a concise, professional, and insightful "Daily Market Sentiment Report". 
Limit the report to a short paragraph (3-4 sentences maximum).
Focus on macro trends, overall bullish/bearish sentiment, and notable movers. Do not list individual coin prices.
`;

async function fetchMarketData() {
    try {
        console.log('Fetching Top 10 Market Data from CoinGecko...');
        const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
        if (!res.ok) throw new Error(`CoinGecko API returned ${res.status}`);
        const data = await res.json();

        let marketContext = 'Top 10 Crypto Snapshot:\n';
        data.forEach(coin => {
            marketContext += `- ${coin.symbol.toUpperCase()}: $${coin.current_price} (24h: ${coin.price_change_percentage_24h.toFixed(2)}%)\n`;
        });
        return marketContext;
    } catch (error) {
        console.error('Failed to fetch market data:', error);
        return 'Market data unavailable.';
    }
}

async function fetchRecentNewsContext() {
    try {
        const newsPath = path.join(process.cwd(), 'src/data/news.json');
        if (fs.existsSync(newsPath)) {
            const rawData = fs.readFileSync(newsPath, 'utf8');
            const newsData = JSON.parse(rawData);

            // Extract just the English titles from the latest news
            const titles = newsData.en.map(n => n.title).slice(0, 3).join(' | ');
            return `\nRecent Headlines:\n${titles}`;
        }
    } catch (error) {
        console.error('Failed to read news data:', error);
    }
    return '';
}

async function generateReport(marketContext, newsContext, lang, retries = 3) {
    const langInstructions = {
        'ja': 'Write the report in Japanese.',
        'en': 'Write the report in English.',
        'zh': 'Write the report in Simplified Chinese.'
    };

    const prompt = `${SYSTEM_PROMPT}\n${langInstructions[lang]}\n\nContext:\n${marketContext}\n${newsContext}`;

    for (let i = 0; i < retries; i++) {
        try {
            const result = await model.generateContent(prompt);
            return result.response.text().trim();
        } catch (error) {
            if (error.status === 429) {
                const waitTime = Math.pow(2, i) * 15000;
                console.log(`    [Rate Limit 429] Waiting ${waitTime / 1000}s before retry ${i + 1}/${retries} for ${lang}...`);
                await new Promise(resolve => setTimeout(resolve, waitTime));
            } else {
                console.error(`Error generating report in ${lang}:`, error);
                return "Failed to generate AI report.";
            }
        }
    }
    return "Failed to generate report due to rate limitations.";
}

async function analyzeSentiment() {
    console.log('--- Starting Daily Market Sentiment Analysis ---');

    const marketContext = await fetchMarketData();
    const newsContext = await fetchRecentNewsContext();

    const delayMs = 4500; // Free tier rate limit padding

    const sentimentData = {
        lastUpdated: new Date().toISOString(),
        reports: {
            ja: '',
            en: '',
            zh: ''
        }
    };

    console.log(`Generating English Report...`);
    sentimentData.reports.en = await generateReport(marketContext, newsContext, 'en');
    await new Promise(resolve => setTimeout(resolve, delayMs));

    console.log(`Generating Japanese Report...`);
    sentimentData.reports.ja = await generateReport(marketContext, newsContext, 'ja');
    await new Promise(resolve => setTimeout(resolve, delayMs));

    console.log(`Generating Chinese Report...`);
    sentimentData.reports.zh = await generateReport(marketContext, newsContext, 'zh');

    // Make sure the directory exists
    const dir = path.dirname(DATA_JSON_PATH);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(DATA_JSON_PATH, JSON.stringify(sentimentData, null, 2));
    console.log(`\n✅ Successfully saved AI Market Sentiment to ${DATA_JSON_PATH}`);
}

analyzeSentiment().catch(console.error);
