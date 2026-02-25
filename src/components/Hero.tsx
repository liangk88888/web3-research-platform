import React from 'react';
import { Search } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="container mx-auto max-w-4xl text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 animate-fade-in-up">
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                        プロレベルのWeb3リサーチを、
                    </span>
                    <span className="block mt-2 text-white">あなたの手に</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                    最新のDeFi、GameFi、レイヤー1/2プロジェクトを網羅。データドリブンな分析と独自の視点で、次世代のイノベーションを発見しよう。
                </p>

                {/* Search Bar Placeholder */}
                <div className="relative max-w-2xl mx-auto group">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                    <div className="relative flex items-center bg-zinc-900/80 border border-zinc-800 rounded-full p-2 backdrop-blur-sm">
                        <div className="pl-4 pr-3 text-gray-400">
                            <Search size={20} />
                        </div>
                        <input
                            type="text"
                            placeholder="プロジェクト名、カテゴリ、キーワードで検索..."
                            className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-gray-600 focus:ring-0 text-base"
                            disabled
                        />
                        <button className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors ml-2 cursor-pointer">
                            検索
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
