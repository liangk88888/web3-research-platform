import React from 'react';

import { getProjectDetails, FEATURED_COINS } from '@/services/api';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, TrendingUp, TrendingDown, Target, Globe, MessageCircle, Send, Code, Calendar } from 'lucide-react';
import Link from 'next/link';
import { getLocale } from '@/i18n/getLocale';
import { getDictionary } from '@/i18n/dictionaries';

interface Props {
    params: Promise<{ id: string }>;
}

// Ensure pages can be generated statically at build time using the known list
export async function generateStaticParams() {
    return FEATURED_COINS.map((id) => ({
        id: id,
    }));
}

export default async function ProjectDetail({ params }: Props) {
    const { id } = await params;
    const locale = await getLocale();
    const dict = getDictionary(locale);

    let project;
    try {
        project = await getProjectDetails(id);
    } catch (e) {
        notFound();
    }

    const isPositive = project.market_data.price_change_percentage_24h >= 0;
    const TrendIcon = isPositive ? TrendingUp : TrendingDown;
    const priceColor = isPositive ? 'text-green-400' : 'text-red-400';

    const formattedPrice = new Intl.NumberFormat('ja-JP', {
        style: 'currency',
        currency: 'JPY',
        maximumFractionDigits: 2
    }).format(project.market_data.current_price.jpy);

    // Use localized description if available, fallback to English
    const rawDescription = (project.description as any)[locale] || project.description.ja || project.description.en || "";

    // Convert line breaks to <br /> for proper HTML rendering, keeping existing tags
    const htmlDescription = rawDescription
        ? rawDescription.replace(/\r\n|\n/g, '<br />')
        : null;

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
            

            <main className="flex-1 w-full relative pt-24 pb-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    {/* Back Button */}
                    <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group">
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span>{dict.common.backToList}</span>
                    </Link>

                    {/* Details Header Card */}
                    <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 mb-8 flex flex-col md:flex-row items-center md:items-start gap-8 shadow-2xl relative overflow-hidden">
                        {/* Background glow based on trend */}
                        <div className={`absolute -top-32 -right-32 w-64 h-64 blur-[100px] rounded-full opacity-20 pointer-events-none ${isPositive ? 'bg-green-500' : 'bg-red-500'}`} />

                        <div className="w-32 h-32 flex-shrink-0 bg-white/5 rounded-2xl p-4 border border-white/10">
                            <img src={project.image.large} alt={project.name} className="w-full h-full object-contain" />
                        </div>

                        <div className="flex-1 text-center md:text-left z-10">
                            <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-4 mb-4">
                                <div>
                                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none mb-2">
                                        {project.name}
                                    </h1>
                                    <span className="text-gray-400 font-medium uppercase tracking-widest bg-white/5 px-3 py-1 rounded-lg border border-white/5">
                                        {project.symbol}
                                    </span>
                                </div>

                                <div className="text-right flex flex-col items-center md:items-end bg-black/40 p-3 rounded-xl border border-white/5">
                                    <span className="text-xs text-gray-500 font-bold mb-1">{dict.common.currentPrice} (JPY)</span>
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl font-bold text-white">{formattedPrice}</span>
                                        <span className={`flex items-center gap-1 text-sm font-bold bg-white/5 px-2 py-1 rounded-md ${priceColor}`}>
                                            <TrendIcon size={14} />
                                            {Math.abs(project.market_data.price_change_percentage_24h).toFixed(2)}%
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-6">
                                <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm font-semibold border border-indigo-500/30 flex items-center gap-1">
                                    <Target size={14} />
                                    {dict.common.rank}: #{project.market_cap_rank}
                                </span>
                                {project.genesis_date && (
                                    <span className="bg-white/5 text-gray-300 px-3 py-1 rounded-full text-sm font-semibold border border-white/10 flex items-center gap-1">
                                        <Calendar size={14} />
                                        Genesis: {project.genesis_date}
                                    </span>
                                )}
                            </div>

                            {/* Official Links */}
                            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
                                {project.links?.homepage?.[0] && project.links.homepage[0] !== "" && (
                                    <a href={project.links.homepage[0]} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs md:text-sm text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/5 transition-colors">
                                        <Globe size={16} />
                                        Website
                                    </a>
                                )}
                                {project.links?.twitter_screen_name && (
                                    <a href={`https://twitter.com/${project.links.twitter_screen_name}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs md:text-sm text-gray-400 hover:text-[#1DA1F2] bg-white/5 hover:bg-[#1DA1F2]/10 px-3 py-1.5 rounded-lg border border-white/5 transition-colors">
                                        <MessageCircle size={16} />
                                        X (Twitter)
                                    </a>
                                )}
                                {project.links?.telegram_channel_identifier && (
                                    <a href={`https://t.me/${project.links.telegram_channel_identifier}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs md:text-sm text-gray-400 hover:text-[#0088cc] bg-white/5 hover:bg-[#0088cc]/10 px-3 py-1.5 rounded-lg border border-white/5 transition-colors">
                                        <Send size={16} />
                                        Telegram
                                    </a>
                                )}
                                {project.links?.repos_url?.github?.[0] && (
                                    <a href={project.links.repos_url.github[0]} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs md:text-sm text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/5 transition-colors">
                                        <Code size={16} />
                                        GitHub
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Project Description */}
                    <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                        <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 flex items-center gap-2">
                            {dict.common.descriptionTitle}
                        </h2>
                        {htmlDescription ? (
                            <div
                                className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed space-y-4 prose-a:text-indigo-400 hover:prose-a:text-indigo-300 prose-a:underline"
                                dangerouslySetInnerHTML={{ __html: htmlDescription }}
                            />
                        ) : (
                            <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed">
                                <p className="text-gray-500 italic">概要情報が提供されていません。</p>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <footer className="border-t border-white/10 py-12 text-center text-gray-500 mt-auto">
                <p className="text-sm">© 2024 Web3Research. {dict.common.footerRights}</p>
                <p className="text-xs mt-2 opacity-50">{dict.common.footerData}</p>
            </footer>
        </div>
    );
}
