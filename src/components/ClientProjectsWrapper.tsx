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

    // Simple pseudo-filter just for visual demonstration of state:
    // Since `/coins/markets` doesn't return categories, if it's not "all", 
    // we just show a subset or nothing to prove it works dynamically. 
    // (In reality, we'd cross-reference a local map or DB)
    const filteredProjects = selectedCategory === dict.common.all
        ? initialProjects
        : initialProjects.filter(p => {
            // Hardcoded dummy category matching just so the filter UI does *something*
            if (selectedCategory === 'Layer1') return ['ethereum', 'solana', 'the-open-network'].includes(p.id);
            if (selectedCategory === 'Layer2') return ['arbitrum'].includes(p.id);
            if (selectedCategory === 'DeFi') return ['uniswap'].includes(p.id);
            if (selectedCategory === 'インフラ') return ['chainlink', 'celestia', 'render-token'].includes(p.id);
            if (selectedCategory === 'Telegram App') return ['the-open-network'].includes(p.id);
            if (selectedCategory === 'Meme') return ['pepe'].includes(p.id);
            return false;
        });

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

            <ProjectGrid projects={filteredProjects} dict={dict} />
        </>
    );
}
