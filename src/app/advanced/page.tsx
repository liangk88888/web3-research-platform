import React from 'react';

import { getLocale } from '@/i18n/getLocale';
import { getDictionary } from '@/i18n/dictionaries';
import { Cpu, Terminal } from 'lucide-react';
import TechArticle from '@/components/TechArticle';
import TierGuard from '@/components/TierGuard';

export default async function AdvancedPage() {
    const locale = await getLocale();
    const dict = getDictionary(locale);

    return (
        <TierGuard requiredTier="PAID" dict={dict}>
            <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">


                <main className="flex-1 w-full pt-24 pb-20">
                    {/* Hero Section */}
                    <div className="relative border-b border-white/10 bg-[#0a0a0a] py-16 mb-12 overflow-hidden">
                        {/* Matrix/Cyberpunk inspired background effect */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05)_0%,transparent_100%)] pointer-events-none" />
                        <div className="absolute w-full h-full inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiMwMDAiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMjIyIi8+PC9zdmc+')] opacity-50 pointer-events-none" />

                        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
                            <div className="inline-flex p-4 bg-cyan-500/10 rounded-2xl mb-6 ring-1 ring-cyan-500/30 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                                <Terminal size={48} className="text-cyan-400" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
                                {dict.advanced.title}
                            </h1>
                            <p className="text-xl text-cyan-100/60 font-mono">
                                {dict.advanced.subtitle}
                            </p>
                        </div>
                    </div>

                    <div className="container mx-auto px-4 max-w-4xl gap-12 flex flex-col relative z-10">
                        <section>
                            <TechArticle topics={dict.advanced.topics} />
                        </section>
                    </div>
                </main>

                <footer className="border-t border-white/10 py-12 text-center text-gray-500 mt-auto bg-[#0a0a0a]">
                    <p className="text-sm font-mono">© 2024 Web3Research. {dict.common.footerRights}</p>
                    <div className="flex items-center justify-center gap-2 mt-4 opacity-50">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                        <span className="text-xs font-mono">System Online</span>
                    </div>
                </footer>
            </div>
        </TierGuard>
    );
}
