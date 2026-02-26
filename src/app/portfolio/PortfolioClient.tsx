'use client';

import React, { useEffect, useState } from 'react';
import { useWatchlist } from '@/hooks/useWatchlist';
import ProjectCard from '@/components/ProjectCard';
import { Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Simple types matching api.ts structure for rendering
interface MiniProjectData {
    id: string;
    name: string;
    symbol: string;
    image: string;
    current_price: number;
    price_change_percentage_24h: number;
    market_cap: number;
    market_cap_rank: number;
}

export default function PortfolioPage({ translations }: { translations: any }) {
    const { watchlist, isMounted } = useWatchlist();
    const [savedProjects, setSavedProjects] = useState<MiniProjectData[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchWatchlistData = async () => {
            if (!isMounted || watchlist.length === 0) {
                setSavedProjects([]);
                setIsLoading(false);
                return;
            }

            try {
                // Fetch coin data for IDs in watchlist directly via client
                const ids = watchlist.join(',');
                const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=jpy&ids=${ids}&order=market_cap_desc&sparkline=false`);
                if (!res.ok) throw new Error("Failed to fetch watchlist data");
                const data = await res.json();
                setSavedProjects(data);
            } catch (error) {
                console.error("Watchlist fetch error:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchWatchlistData();
    }, [isMounted, watchlist]);

    if (!isMounted) return <div className="min-h-screen"></div>;

    return (
        <div className="min-h-screen bg-background pt-24 pb-12 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium mb-4">
                        <Star className="w-4 h-4 fill-yellow-400" />
                        Watchlist
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                        {translations.portfolio.title}
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl">
                        {translations.portfolio.subtitle}
                    </p>
                </div>

                {isLoading ? (
                    <div className="flex justify-center py-20">
                        <div className="w-8 h-8 rounded-full border-2 border-yellow-500 border-t-transparent animate-spin"></div>
                    </div>
                ) : savedProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {savedProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project as any}
                                dict={translations.common}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-slate-900/50 border border-white/5 rounded-2xl backdrop-blur-sm">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-6">
                            <Star className="w-8 h-8 text-gray-500" />
                        </div>
                        <h2 className="text-xl font-bold text-white mb-2">{translations.portfolio.emptyState}</h2>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold hover:brightness-110 transition-all"
                        >
                            {translations.portfolio.exploreButton}
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
