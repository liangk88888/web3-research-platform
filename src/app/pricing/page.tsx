import React from 'react';

import { getLocale } from '@/i18n/getLocale';
import { getDictionary } from '@/i18n/dictionaries';
import { CreditCard } from 'lucide-react';
import Link from 'next/link';

export default async function PricingPage() {
    const locale = await getLocale();
    const dict = getDictionary(locale);

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
            

            <main className="flex-1 w-full flex items-center justify-center relative pt-32 pb-20">
                <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 to-transparent pointer-events-none" />
                <div className="container mx-auto px-4 max-w-2xl text-center">
                    <div className="inline-block p-4 bg-pink-500/20 rounded-2xl mb-6">
                        <CreditCard size={48} className="text-pink-400" />
                    </div>
                    <h1 className="text-4xl font-bold mb-4">{dict.nav.pricing}</h1>
                    <p className="text-xl text-gray-400 mb-8">{dict.common.comingSoon}</p>

                    <Link href="/" className="inline-block bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
                        {dict.common.backToList}
                    </Link>
                </div>
            </main>

            <footer className="border-t border-white/10 py-12 text-center text-gray-500 mt-auto">
                <p className="text-sm">© 2024 Web3Research. {dict.common.footerRights}</p>
                <p className="text-xs mt-2 opacity-50">{dict.common.footerData}</p>
            </footer>
        </div>
    );
}
