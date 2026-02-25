import Parser from 'rss-parser';

export interface TrendingCoin {
    item: {
        id: string;
        coin_id: number;
        name: string;
        symbol: string;
        market_cap_rank: number;
        thumb: string;
        small: string;
        large: string;
        slug: string;
        price_btc: number;
        score: number;
    };
}

export interface NewsItem {
    title: string;
    link: string;
    pubDate: string;
    contentSnippet?: string;
}

export interface CoinGeckoMarketData {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    price_change_percentage_24h: number;
}

export interface CoinGeckoCoinDetails {
    id: string;
    symbol: string;
    name: string;
    description: {
        en: string;
        ja: string;
    };
    image: {
        thumb: string;
        small: string;
        large: string;
    };
    market_cap_rank: number;
    market_data: {
        current_price: { jpy: number; usd: number };
        price_change_percentage_24h: number;
        market_cap: { jpy: number; usd: number };
    };
    categories: string[];
}

export const CATEGORY_MAP: Record<string, string> = {
    'smart-contract-platform': 'Layer1',
    'layer-2': 'Layer2',
    'decentralized-finance-defi': 'DeFi',
    'gaming': 'GameFi',
    'infrastructure': 'インフラ',
    'telegram-apps': 'Telegram App',
    'artificial-intelligence': 'AI',
    'meme-token': 'Meme'
};

const API_BASE_URL = 'https://api.coingecko.com/api/v3';

// Mock list of interesting project IDs we want to feature
export const FEATURED_COINS = [
    'ethereum',
    'solana',
    'uniswap',
    'arbitrum',
    'celestia',
    'the-open-network',
    'chainlink',
    'render-token',
    'pepe'
];

/**
 * Fetch market data for our featured coins
 */
export async function getTrendingProjects(): Promise<CoinGeckoMarketData[]> {
    // Revalidate every 1 hour (3600 seconds) for ISR
    const res = await fetch(
        `${API_BASE_URL}/coins/markets?vs_currency=jpy&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=ja`,
        { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
        throw new Error('Failed to fetch data from CoinGecko');
    }

    return res.json();
}

/**
 * Fetch detailed data for a specific coin
 */
export async function getProjectDetails(id: string): Promise<CoinGeckoCoinDetails> {
    // We specify localization to get Japanese descriptions if available
    const res = await fetch(
        `${API_BASE_URL}/coins/${id}?localization=true&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
        { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
        throw new Error(`Failed to fetch details for ${id}`);
    }

    return res.json();
}

/**
 * Fetch currently trending coins from CoinGecko
 */
export async function getTrendingSearch(): Promise<TrendingCoin[]> {
    try {
        const res = await fetch(`${API_BASE_URL}/search/trending`, {
            next: { revalidate: 3600 } // Revalidate 1 hour
        });
        if (!res.ok) throw new Error('Trending API fell');
        const data = await res.json();
        return data.coins.slice(0, 8); // Return top 8
    } catch (error) {
        console.error("Failed to fetch trending coins:", error);
        return [];
    }
}

/**
 * Fetch latest crypto news using RSS Feed (CoinTelegraph EN as example)
 */
export async function getNewsFeed(): Promise<NewsItem[]> {
    try {
        const parser = new Parser();
        const feed = await parser.parseURL('https://cointelegraph.com/rss');
        return feed.items.slice(0, 4).map(item => ({
            title: item.title || '',
            link: item.guid || item.link || '',
            pubDate: item.pubDate || '',
            contentSnippet: item.contentSnippet || ''
        }));
    } catch (error) {
        console.error("Failed to fetch news feed:", error);
        return [];
    }
}

/**
 * Search coins via CoinGecko Search API
 */
export async function searchCoins(query: string) {
    if (!query) return [];
    try {
        const res = await fetch(`${API_BASE_URL}/search?query=${encodeURIComponent(query)}`);
        if (!res.ok) throw new Error('Search API fell');
        const data = await res.json();
        // Return top 20 results and format them to match TrendingCoin structure broadly
        return data.coins.slice(0, 20).map((coin: any) => ({
            item: {
                id: coin.id,
                name: coin.name,
                symbol: coin.symbol,
                market_cap_rank: coin.market_cap_rank,
                thumb: coin.thumb,
                small: coin.thumb, // Use thumb as small fallback
                large: coin.large
            }
        }));
    } catch (error) {
        console.error("Search API failed", error);
        return [];
    }
}
