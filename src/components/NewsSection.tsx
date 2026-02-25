import React from 'react';
import { NewsItem } from '@/services/api';
import { Newspaper, ExternalLink } from 'lucide-react';

export default function NewsSection({ news, title }: { news: NewsItem[], title: string }) {
    if (!news || news.length === 0) return null;

    return (
        <div className="w-full">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-pink-500/20 rounded-xl">
                    <Newspaper className="text-pink-400" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white">{title}</h2>
            </div>

            <div className="flex flex-col gap-4">
                {news.map((item, idx) => (
                    <a
                        key={idx}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block p-5 bg-zinc-900 border border-zinc-800 hover:border-pink-500/50 rounded-2xl transition-all hover:shadow-[0_0_20px_rgba(236,72,153,0.1)] relative"
                    >
                        <div className="flex justify-between items-start gap-4">
                            <div className="flex-1">
                                <h3 className="text-white font-bold group-hover:text-pink-400 transition-colors leading-snug line-clamp-2 mb-2">
                                    {item.title}
                                </h3>
                                {item.contentSnippet && (
                                    <p className="text-gray-400 text-sm line-clamp-2 mb-3">
                                        {item.contentSnippet}
                                    </p>
                                )}
                                <span className="text-xs text-gray-500 font-medium">
                                    {new Date(item.pubDate).toLocaleDateString('ja-JP')}
                                </span>
                            </div>
                            <ExternalLink size={18} className="text-gray-600 group-hover:text-pink-400 flex-shrink-0 mt-1" />
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
