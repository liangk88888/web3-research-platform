import React from 'react';
import sentimentData from '@/data/sentiment.json';
import { BrainCircuit, TrendingUp, TrendingDown, Clock } from 'lucide-react';

export default function SentimentWidget({ locale, dict }: { locale: 'ja' | 'en' | 'zh', dict: any }) {
    // Determine overall mood heuristically based on keyword (simple fallback if AI doesn't explicitly state it)
    const reportText = sentimentData.reports[locale] || sentimentData.reports.en;

    // Simplistic heuristic to color-code the widget
    const isBullish = reportText.toLowerCase().includes('bullish') || reportText.includes('強気') || reportText.includes('看涨') || reportText.includes('上昇');
    const isBearish = reportText.toLowerCase().includes('bearish') || reportText.includes('弱気') || reportText.includes('看跌') || reportText.includes('下落');

    let ThemeIcon = BrainCircuit;
    let themeColor = 'text-indigo-400';
    let themeBg = 'bg-indigo-500/10 border-indigo-500/20';

    if (isBullish && !isBearish) {
        ThemeIcon = TrendingUp;
        themeColor = 'text-green-400';
        themeBg = 'bg-green-500/10 border-green-500/20';
    } else if (isBearish && !isBullish) {
        ThemeIcon = TrendingDown;
        themeColor = 'text-red-400';
        themeBg = 'bg-red-500/10 border-red-500/20';
    }

    const lastUpdated = new Date(sentimentData.lastUpdated);
    const timeString = new Intl.DateTimeFormat(locale, {
        month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
    }).format(lastUpdated);

    return (
        <section className="mb-12">
            <div className={`rounded-3xl border p-6 md:p-8 backdrop-blur-md relative overflow-hidden transition-all duration-500 ${themeBg}`}>

                {/* Background flare */}
                <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] pointer-events-none opacity-50 ${themeColor.replace('text-', 'bg-')}`} />

                <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center">

                    {/* Icon and Title */}
                    <div className="flex-shrink-0 flex items-center gap-4 border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0 md:pr-10 w-full md:w-auto">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-black/50 border border-white/10 ${themeColor}`}>
                            <ThemeIcon size={28} />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-white mb-1">
                                {dict.sentiment?.title || 'AI Market Sentiment'}
                            </h2>
                            <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                                <Clock size={12} /> {timeString}
                            </div>
                        </div>
                    </div>

                    {/* AI Report Content */}
                    <div className="flex-1">
                        <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                            {reportText}
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
