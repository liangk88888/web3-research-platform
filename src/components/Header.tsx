import React from 'react';
import { Wallet } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { getLocale } from '@/i18n/getLocale';
import { getDictionary } from '@/i18n/dictionaries';

export default async function Header() {
    const locale = await getLocale();
    const dict = getDictionary(locale);

    return (
        <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">W</span>
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Web3Research
                    </span>
                </div>

                {/* Navigation - Hidden on Mobile */}
                <nav className="hidden md:flex items-center gap-8">
                    <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        {dict.nav.projects}
                    </a>
                    <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        {dict.nav.manual}
                    </a>
                    <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        {dict.nav.request}
                    </a>
                    <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        {dict.nav.pricing}
                    </a>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <LanguageSwitcher initialLocale={locale} />
                    <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 cursor-pointer">
                        <Wallet size={16} />
                        <span className="hidden sm:inline">{dict.nav.connect}</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
