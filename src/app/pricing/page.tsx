import React from 'react';
import { getLocale } from '@/i18n/getLocale';
import { getDictionary } from '@/i18n/dictionaries';
import { CreditCard, Check, Sparkles } from 'lucide-react';
import PricingClient from './PricingClient';

export const metadata = {
    title: 'Pricing | Web3 Research',
    description: 'Membership plans for Web3 Research platform',
};

export default async function PricingPage() {
    const locale = await getLocale();
    const dict = getDictionary(locale);

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
            <main className="flex-1 w-full pt-32 pb-24 relative">
                {/* Background effects */}
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[128px] pointer-events-none" />
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] pointer-events-none" />

                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
                            <Sparkles className="w-4 h-4" />
                            Premium Access
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                            {dict.pricing.title}
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            {dict.pricing.subtitle}
                        </p>
                    </div>

                    <PricingClient dict={dict.pricing} />
                </div>
            </main>

            <footer className="border-t border-white/10 py-12 text-center text-gray-500 mt-auto bg-[#0a0a0a]">
                <p className="text-sm font-mono">© 2024 Web3Research. {dict.common.footerRights}</p>
                <div className="flex items-center justify-center gap-2 mt-4 opacity-50">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
                    <span className="text-xs font-mono">System Online</span>
                </div>
            </footer>
        </div>
    );
}
