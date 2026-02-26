'use client';

import React, { useState } from 'react';
import { Menu, X, ChevronRight, Globe, Star, Gift, Wallet } from 'lucide-react';
import Link from 'next/link';

interface MobileNavProps {
    dict: any;
    locale: string;
}

export default function MobileNav({ dict, locale }: MobileNavProps) {
    const [isOpen, setIsOpen] = useState(false);

    // Re-use logic from LanguageSwitcher but simplify for mobile
    const switchLanguage = (newLocale: string) => {
        document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
        window.location.reload();
    };

    return (
        <div className="md:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-300 hover:text-white bg-white/5 rounded-lg transition-colors"
                aria-label="Menu"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Full screen overlay menu */}
            {isOpen && (
                <div className="fixed inset-0 top-16 bg-background/95 backdrop-blur-xl z-40 overflow-y-auto pb-4 fade-in-up">
                    <div className="flex flex-col p-4 gap-4">

                        {/* Discover Group */}
                        <div className="space-y-2">
                            <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{dict.navGroups.discover}</h3>
                            <div className="flex flex-col gap-1.5">
                                <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 text-gray-200 active:bg-white/10 text-sm">
                                    <span>{dict.nav.projects}</span> <ChevronRight size={16} className="text-gray-500" />
                                </Link>
                                <Link href="/dashboard" onClick={() => setIsOpen(false)} className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 text-gray-200 active:bg-white/10 text-sm">
                                    <span>{dict.nav.dashboard}</span> <ChevronRight size={16} className="text-gray-500" />
                                </Link>
                                <Link href="/airdrop" onClick={() => setIsOpen(false)} className="flex items-center justify-between p-2.5 rounded-xl bg-green-500/10 text-green-400 active:bg-green-500/20 border border-green-500/20 text-sm">
                                    <div className="flex items-center gap-2"><Gift size={16} /> {dict.nav.airdrop}</div> <ChevronRight size={16} className="text-green-500/50" />
                                </Link>
                            </div>
                        </div>

                        {/* Learn Group */}
                        <div className="space-y-2">
                            <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{dict.navGroups.learn}</h3>
                            <div className="flex flex-col gap-1.5">
                                <Link href="/guide" onClick={() => setIsOpen(false)} className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 text-gray-200 active:bg-white/10 text-sm">
                                    <span>{dict.nav.manual}</span> <ChevronRight size={16} className="text-gray-500" />
                                </Link>
                                <Link href="/advanced" onClick={() => setIsOpen(false)} className="flex items-center justify-between p-2.5 rounded-xl bg-gradient-to-r from-indigo-500/10 to-transparent border border-indigo-500/20 text-cyan-400 active:bg-indigo-500/20 text-sm">
                                    <span>{dict.nav.techDive}</span> <ChevronRight size={16} className="text-indigo-400/50" />
                                </Link>
                            </div>
                        </div>

                        {/* Services Group */}
                        <div className="space-y-2">
                            <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{dict.navGroups.services}</h3>
                            <div className="flex flex-col gap-1.5">
                                <Link href="/portfolio" onClick={() => setIsOpen(false)} className="flex items-center justify-between p-2.5 rounded-xl bg-yellow-500/10 text-yellow-400 active:bg-yellow-500/20 border border-yellow-500/20 text-sm">
                                    <div className="flex items-center gap-2"><Star size={16} /> {dict.nav.portfolio}</div> <ChevronRight size={16} className="text-yellow-500/50" />
                                </Link>
                                <Link href="/request" onClick={() => setIsOpen(false)} className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 text-gray-200 active:bg-white/10 text-sm">
                                    <span>{dict.nav.request}</span> <ChevronRight size={16} className="text-gray-500" />
                                </Link>
                                <Link href="/pricing" onClick={() => setIsOpen(false)} className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 text-gray-200 active:bg-white/10 text-sm">
                                    <span>{dict.nav.pricing}</span> <ChevronRight size={16} className="text-gray-500" />
                                </Link>
                            </div>
                        </div>

                        {/* Language switcher for mobile */}
                        <div className="mt-4 pt-4 border-t border-white/10 flex justify-center gap-4">
                            <button onClick={() => switchLanguage('ja')} className={`px-4 py-2 rounded-lg text-sm font-bold ${locale === 'ja' ? 'bg-indigo-500 text-white' : 'bg-white/5 text-gray-400'}`}>JP</button>
                            <button onClick={() => switchLanguage('en')} className={`px-4 py-2 rounded-lg text-sm font-bold ${locale === 'en' ? 'bg-indigo-500 text-white' : 'bg-white/5 text-gray-400'}`}>EN</button>
                            <button onClick={() => switchLanguage('zh')} className={`px-4 py-2 rounded-lg text-sm font-bold ${locale === 'zh' ? 'bg-indigo-500 text-white' : 'bg-white/5 text-gray-400'}`}>ZH</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
