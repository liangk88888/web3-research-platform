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
    const ids = FEATURED_COINS.join('%2C');
    // Revalidate every 1 hour (3600 seconds) for ISR
    const res = await fetch(
        `${API_BASE_URL}/coins/markets?vs_currency=jpy&ids=${ids}&order=market_cap_desc&sparkline=false&locale=ja`,
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
