import React from 'react';
import { Globe, Wallet } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { getLocale } from '@/i18n/getLocale';
import { getDictionary } from '@/i18n/dictionaries';
import Link from 'next/link';
import ConnectWalletButton from './ConnectWalletButton';

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
                    <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        {dict.nav.projects}
                    </Link>
                    <Link href="/guide" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        {dict.nav.manual}
                    </Link>
                    <Link href="/advanced" className="text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1">
                        {dict.nav.techDive}
                    </Link>
                    <Link href="/request" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        {dict.nav.request}
                    </Link>
                    <Link href="/pricing" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        {dict.nav.pricing}
                    </Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <LanguageSwitcher initialLocale={locale} />
                    <ConnectWalletButton dict={dict.wallet} buttonText={dict.nav.connect} />
                </div>
            </div>
        </header>
    );
}
