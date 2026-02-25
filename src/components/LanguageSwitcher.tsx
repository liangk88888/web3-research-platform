'use client';
import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Locale } from '@/i18n/dictionaries';

export default function LanguageSwitcher({ initialLocale }: { initialLocale: Locale }) {
    const router = useRouter();
    const [locale, setLocale] = useState<Locale>(initialLocale);

    const switchLanguage = (newLocale: Locale) => {
        setLocale(newLocale);
        // Set 1 year expiration for cookie
        document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
        router.refresh();
    };

    return (
        <div className="relative group">
            <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors bg-zinc-900/50 hover:bg-zinc-800 px-3 py-2 rounded-xl border border-zinc-800">
                <Globe size={18} />
                <span className="text-sm font-medium uppercase">{locale}</span>
            </button>

            {/* Dropdown Menu */}
            <div className="absolute right-0 top-full mt-2 w-32 bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
                <div className="flex flex-col">
                    <button
                        onClick={() => switchLanguage('ja')}
                        className={`px-4 py-2.5 text-sm text-left hover:bg-zinc-800 transition-colors ${locale === 'ja' ? 'text-pink-400 font-bold' : 'text-gray-300'}`}
                    >
                        日本語 (JA)
                    </button>
                    <button
                        onClick={() => switchLanguage('en')}
                        className={`px-4 py-2.5 text-sm text-left hover:bg-zinc-800 transition-colors ${locale === 'en' ? 'text-pink-400 font-bold' : 'text-gray-300'}`}
                    >
                        English (EN)
                    </button>
                    <button
                        onClick={() => switchLanguage('zh')}
                        className={`px-4 py-2.5 text-sm text-left hover:bg-zinc-800 transition-colors ${locale === 'zh' ? 'text-pink-400 font-bold' : 'text-gray-300'}`}
                    >
                        中文 (ZH)
                    </button>
                </div>
            </div>
        </div>
    );
}
