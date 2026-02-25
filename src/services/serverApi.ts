import fs from 'fs';
import path from 'path';
import { NewsItem } from './api';

/**
 * Fetch latest crypto news from our auto-generated JSON
 * This function handles server-side Node.js fs modules
 */
export async function getNewsFeed(locale: 'ja' | 'en' | 'zh' = 'ja'): Promise<NewsItem[]> {
    try {
        const filePath = path.join(process.cwd(), 'src/data/news.json');

        // Return empty if file doesn't exist yet (before first cron run)
        if (!fs.existsSync(filePath)) {
            return [];
        }

        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const data = JSON.parse(fileContent);

        // Fallback to English if the requested language array is empty or missing
        const newsArray = data[locale]?.length > 0 ? data[locale] : data.en;

        if (!newsArray) return [];

        return newsArray.slice(0, 4).map((item: any) => ({
            title: item.title || '',
            link: item.url || '',
            pubDate: item.date || '',
            contentSnippet: item.description || ''
        }));
    } catch (error) {
        console.error("Failed to load news feed from JSON:", error);
        return [];
    }
}
