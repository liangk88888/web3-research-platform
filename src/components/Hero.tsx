import React from 'react';
import { getLocale } from '@/i18n/getLocale';
import { getDictionary } from '@/i18n/dictionaries';
import HeroSearch from './HeroSearch';

export default async function Hero() {
    const locale = await getLocale();
    const dict = getDictionary(locale);

    return (
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="container mx-auto max-w-4xl text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 animate-fade-in-up whitespace-pre-wrap">
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                        {dict.hero.title.split('\n')[0]}
                    </span>
                    {dict.hero.title.split('\n')[1] && (
                        <span className="block mt-2 text-white">{dict.hero.title.split('\n')[1]}</span>
                    )}
                </h1>

                <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                    {dict.hero.subtitle}
                </p>

                <HeroSearch
                    placeholder={dict.hero.searchPlaceholder}
                    buttonText={dict.hero.searchButton}
                />
            </div>
        </section>
    );
}
