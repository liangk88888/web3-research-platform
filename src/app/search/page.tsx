import React from 'react';
import Header from '@/components/Header';
import { searchCoins } from '@/services/api';
import TrendingMiniGrid from '@/components/TrendingMiniGrid';
import { getLocale } from '@/i18n/getLocale';
import { getDictionary } from '@/i18n/dictionaries';
import { Search } from 'lucide-react';
import Link from 'next/link';

interface Props {
    searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ searchParams }: Props) {
    const { q } = await searchParams;
    const locale = await getLocale();
    const dict = getDictionary(locale);
    const query = q || '';

    const results = query ? await searchCoins(query) : [];

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
            <Header />

            <main className="flex-1 w-full relative pt-32 pb-20">
                <div className="container mx-auto px-4 max-w-7xl">

                    <div className="mb-12 border-b border-white/10 pb-8">
                        <h1 className="text-3xl font-bold flex items-center gap-3">
                            <Search className="text-indigo-400" />
                            <span>「{query}」の検索結果</span>
                        </h1>
                        <p className="text-gray-400 mt-2">
                            {results.length} 件のプロジェクトが見つかりました
                        </p>
                    </div>

                    {results.length > 0 ? (
                        <TrendingMiniGrid coins={results} title="検索結果 (Search Results)" />
                    ) : (
                        <div className="text-center py-20 bg-zinc-900/50 rounded-3xl border border-white/5">
                            <p className="text-xl text-gray-400 mb-4">該当するプロジェクトが見つかりません。</p>
                            <Link href="/" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4">
                                ホームに戻る
                            </Link>
                        </div>
                    )}

                </div>
            </main>

            <footer className="border-t border-white/10 py-12 text-center text-gray-500 mt-auto">
                <p className="text-sm">© 2024 Web3Research. {dict.common.footerRights}</p>
                <p className="text-xs mt-2 opacity-50">{dict.common.footerData}</p>
            </footer>
        </div>
    );
}
