import React from 'react';
import { TrendingCoin } from '@/services/api';
import { Flame } from 'lucide-react';

export default function TrendingMiniGrid({ coins, title }: { coins: TrendingCoin[], title: string }) {
    if (!coins || coins.length === 0) return null;

    return (
        <div className="w-full mb-16">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-orange-500/20 rounded-xl flex items-center justify-center">
                    <Flame className="text-orange-500" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white">{title}</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {coins.map((coin, idx) => (
                    <div
                        key={coin.item.id}
                        className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 p-4 rounded-2xl hover:border-orange-500/50 transition-colors animate-fade-in-up"
                        style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'both' }}
                    >
                        <img src={coin.item.small} alt={coin.item.name} className="w-10 h-10 rounded-full bg-white/10 p-0.5 object-cover" />
                        <div className="overflow-hidden">
                            <h3 className="text-white font-bold leading-tight truncate">{coin.item.name}</h3>
                            <p className="text-xs text-gray-400 font-medium tracking-wider uppercase truncate">{coin.item.symbol} <span className="text-zinc-600 ml-1">#{coin.item.market_cap_rank}</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
