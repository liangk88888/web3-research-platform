export interface DefiLlamaChain {
    geckoid: string;
    tvl: number;
    tokenSymbol: string;
    cmcId: string;
    name: string;
    chainId: number;
}

export interface DefiLlamaProtocol {
    id: string;
    name: string;
    address: string;
    symbol: string;
    url: string;
    description: string;
    chain: string;
    logo: string;
    audits: string;
    audit_note: string;
    geckoid: string;
    tvl: number;
    chainTvls: Record<string, number>;
    change_1d: number;
    change_7d: number;
    mcap: number;
    category: string;
}

const BASE_URL = 'https://api.llama.fi';

/**
 * Fetch current TVL of all chains
 */
export async function getDefiLlamaChains(): Promise<DefiLlamaChain[]> {
    try {
        const res = await fetch(`${BASE_URL}/v2/chains`, {
            next: { revalidate: 3600 } // Revalidate 1 hour
        });
        if (!res.ok) throw new Error('Failed to fetch DefiLlama chains');
        const data = await res.json();
        // Sort by TVL descending and return top 15 for visualization
        return data.sort((a: DefiLlamaChain, b: DefiLlamaChain) => b.tvl - a.tvl).slice(0, 15);
    } catch (error) {
        console.error("DefiLlama Chains fetch error:", error);
        return [];
    }
}

/**
 * List all protocols on defillama along with their tvl
 */
export async function getDefiLlamaProtocols(): Promise<DefiLlamaProtocol[]> {
    try {
        const res = await fetch(`${BASE_URL}/protocols`, {
            next: { revalidate: 3600 } // Revalidate 1 hour
        });
        if (!res.ok) throw new Error('Failed to fetch DefiLlama protocols');
        const data = await res.json();
        // Filter out cex and sort by TVL descending
        const protocols = data.filter((p: DefiLlamaProtocol) => p.category !== 'CEX');
        return protocols.sort((a: DefiLlamaProtocol, b: DefiLlamaProtocol) => b.tvl - a.tvl).slice(0, 20);
    } catch (error) {
        console.error("DefiLlama Protocols fetch error:", error);
        return [];
    }
}
