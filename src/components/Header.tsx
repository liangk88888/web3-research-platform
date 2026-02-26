import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { getLocale } from '@/i18n/getLocale';
import { getDictionary } from '@/i18n/dictionaries';
import Link from 'next/link';
import ConnectWalletButton from './ConnectWalletButton';
import MobileNav from './MobileNav';
import { ChevronDown } from 'lucide-react';

export default async function Header() {
    const locale = await getLocale();
    const dict = getDictionary(locale);

    return (
        <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer z-50">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">W</span>
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Web3Research
                    </span>
                </Link>

                {/* Desktop Navigation - Grouped */}
                <nav className="hidden md:flex items-center gap-6">
                    {/* Discover Group */}
                    <div className="relative group">
                        <button className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white py-2 transition-colors">
                            {dict.navGroups.discover} <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                        </button>
                        <div className="absolute top-full left-0 mt-2 w-48 bg-slate-900 border border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform origin-top-left -translate-y-2 group-hover:translate-y-0">
                            <div className="py-2 flex flex-col">
                                <Link href="/" className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5">{dict.nav.projects}</Link>
                                <Link href="/dashboard" className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5">{dict.nav.dashboard}</Link>
                                <Link href="/airdrop" className="px-4 py-2 text-sm text-green-400 hover:bg-white/5 flex items-center justify-between">
                                    {dict.nav.airdrop} <span className="bg-green-500/20 text-[10px] px-1.5 py-0.5 rounded text-green-400">HOT</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Learn Group */}
                    <div className="relative group">
                        <button className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white py-2 transition-colors">
                            {dict.navGroups.learn} <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                        </button>
                        <div className="absolute top-full left-0 mt-2 w-48 bg-slate-900 border border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform origin-top-left -translate-y-2 group-hover:translate-y-0">
                            <div className="py-2 flex flex-col">
                                <Link href="/guide" className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5">{dict.nav.manual}</Link>
                                <Link href="/advanced" className="px-4 py-2 text-sm text-cyan-400 hover:text-cyan-300 hover:bg-white/5">{dict.nav.techDive}</Link>
                            </div>
                        </div>
                    </div>

                    {/* Services Group */}
                    <div className="relative group">
                        <button className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white py-2 transition-colors">
                            {dict.navGroups.services} <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                        </button>
                        <div className="absolute top-full left-0 mt-2 w-48 bg-slate-900 border border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform origin-top-left -translate-y-2 group-hover:translate-y-0">
                            <div className="py-2 flex flex-col">
                                <Link href="/portfolio" className="px-4 py-2 text-sm text-yellow-500 hover:bg-white/5">{dict.nav.portfolio}</Link>
                                <Link href="/request" className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5">{dict.nav.request}</Link>
                                <Link href="/pricing" className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5">{dict.nav.pricing}</Link>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Actions & Mobile Nav */}
                <div className="flex items-center gap-3 md:gap-4 z-50">
                    <div className="hidden sm:block">
                        <LanguageSwitcher initialLocale={locale} />
                    </div>
                    <div className="hidden sm:block">
                        <ConnectWalletButton dict={dict.wallet} buttonText={dict.nav.connect} />
                    </div>
                    {/* Mobile Hamburger component */}
                    <MobileNav dict={dict} locale={locale} />
                </div>
            </div>
        </header>
    );
}
