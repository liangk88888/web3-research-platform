'use client';

import React, { useState } from 'react';
import CategoryTags from './CategoryTags';
import ProjectGrid from './ProjectGrid';
import { CoinGeckoMarketData } from '../services/api';

// For this simplified mockup filtering with API data, 
// we'll simulate category filtering since we aren't fetching categories per coin in the main list API.
// In a full app with database, we'd map these properly. Here we just show how state wraps the grid.
interface Props {
    initialProjects: CoinGeckoMarketData[];
    dict: any;
}

export default function ClientProjectsWrapper({ initialProjects, dict }: Props) {
    const [selectedCategory, setSelectedCategory] = useState<string>(dict.common.all);

    // Top 50 classification heuristic for visual demonstration
    const filteredProjects = selectedCategory === dict.common.all
        ? initialProjects
        : initialProjects.filter(p => {
            if (selectedCategory === 'Layer1') return ['bitcoin', 'ethereum', 'solana', 'cardano', 'avalanche-2', 'polkadot', 'sui', 'aptos', 'tron', 'the-open-network', 'near'].includes(p.id);
            if (selectedCategory === 'Layer2') return ['matic-network', 'polygon-ecosystem-token', 'arbitrum', 'optimism', 'mantle', 'immutable-x', 'base'].includes(p.id);
            if (selectedCategory === 'DeFi') return ['uniswap', 'aave', 'maker', 'lido-dao', 'chainlink', 'synthetix-network-token', 'thorchain', 'pancakeswap-token'].includes(p.id);
            if (selectedCategory === 'インフラ') return ['chainlink', 'filecoin', 'arweave', 'render-token', 'the-graph', 'cosmos', 'celestia', 'injective-protocol'].includes(p.id);
            if (selectedCategory === 'Telegram App') return ['the-open-network', 'notcoin'].includes(p.id);
            if (selectedCategory === 'Meme') return ['dogecoin', 'shiba-inu', 'pepe', 'bonk', 'dogwifcoin', 'floki'].includes(p.id);
            return false;
        });

    const displayProjects = filteredProjects.slice(0, 16);

    return (
        <>
            <div className="flex flex-col items-center mb-8">
                <h2 className="text-2xl font-bold mb-6 select-none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                    {dict.sections.trendingProjects}
                </h2>
                <CategoryTags
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                    allText={dict.common.all}
                />
            </div>

            <ProjectGrid projects={displayProjects} dict={dict} />
        </>
    );
}
