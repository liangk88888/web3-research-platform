import React from 'react';
import { CoinGeckoMarketData, CATEGORY_MAP } from '../services/api';
import { ArrowUpRight, TrendingUp, TrendingDown } from 'lucide-react';
import Link from 'next/link';

interface Props {
    project: CoinGeckoMarketData;
    category?: string;
    dict?: any;
}

export default function ProjectCard({ project, category, dict }: Props) {
    const isPositive = project.price_change_percentage_24h >= 0;
    const priceColor = isPositive ? 'text-green-400' : 'text-red-400';
    const TrendIcon = isPositive ? TrendingUp : TrendingDown;

    // Format currency
    const formattedPrice = new Intl.NumberFormat('ja-JP', {
        style: 'currency',
        currency: 'JPY',
        maximumFractionDigits: 2
    }).format(project.current_price);

    const formattedMarketCap = new Intl.NumberFormat('ja-JP', {
        notation: 'compact',
        maximumFractionDigits: 1
    }).format(project.market_cap);

    return (
        <Link href={`/projects/${project.id}`} className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] cursor-pointer flex flex-col h-full block">

            {/* Top Section with Logo and Rank */}
            <div className="p-5 pb-0 flex justify-between items-start">
                <div className="flex items-center gap-3">
                    <img src={project.image} alt={project.name} className="w-10 h-10 rounded-full bg-white/10 p-0.5" />
                    <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors line-clamp-1">
                            {project.name}
                        </h3>
                        <span className="text-xs text-gray-400 uppercase tracking-widest">{project.symbol}</span>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <ArrowUpRight className="text-gray-500 group-hover:text-indigo-400 transition-colors mb-2" size={20} />
                    <span className="bg-white/10 text-white text-xs font-bold px-2 py-0.5 rounded-full border border-white/5">
                        {dict?.rank || 'Rank'} #{project.market_cap_rank}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1 mt-2">

                {/* Price & Change Details */}
                <div className="bg-black/30 rounded-xl p-4 border border-white/5 mb-4 group-hover:bg-indigo-500/5 transition-colors">
                    <div className="flex justify-between items-end mb-1">
                        <span className="text-xs text-zinc-500 font-medium">{dict?.currentPrice || '現在価格'}</span>
                        <span className="text-xs text-zinc-500 font-medium">{dict?.change24h || '24h変動'}</span>
                    </div>
                    <div className="flex justify-between items-end">
                        <span className="text-lg font-bold text-white">{formattedPrice}</span>
                        <div className={`flex items-center gap-1 text-sm font-bold ${priceColor}`}>
                            <TrendIcon size={14} />
                            {Math.abs(project.price_change_percentage_24h).toFixed(2)}%
                        </div>
                    </div>
                </div>

                {/* Additional Stats */}
                <div className="flex items-center justify-between text-xs text-gray-400 mt-auto pt-4 border-t border-zinc-800">
                    <div className="flex flex-col">
                        <span className="text-zinc-600 mb-0.5">{dict?.marketCap || '時価総額'}</span>
                        <span className="font-semibold text-gray-300">¥ {formattedMarketCap}</span>
                    </div>
                    {category && (
                        <span className="bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-md border border-indigo-500/30">
                            {CATEGORY_MAP[category] || category}
                        </span>
                    )}
                </div>
            </div>
        </Link>
    );
}
