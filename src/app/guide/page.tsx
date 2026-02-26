import React from 'react';

import { getLocale } from '@/i18n/getLocale';
import { getDictionary } from '@/i18n/dictionaries';
import { BookOpen, HelpCircle } from 'lucide-react';
import EducationalArticle from '@/components/EducationalArticle';
import QuizCard from '@/components/QuizCard';

export default async function GuidePage() {
    const locale = await getLocale();
    const dict = getDictionary(locale);

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
            

            <main className="flex-1 w-full pt-24 pb-20">
                {/* Hero Section */}
                <div className="relative border-b border-white/10 bg-zinc-900/50 py-16 mb-12 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 pointer-events-none" />
                    <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
                        <div className="inline-block p-4 bg-indigo-500/20 rounded-2xl mb-6">
                            <BookOpen size={48} className="text-indigo-400" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
                            {dict.guide.title}
                        </h1>
                        <p className="text-xl text-gray-400">
                            {dict.guide.subtitle}
                        </p>
                    </div>
                </div>

                <div className="container mx-auto px-4 max-w-4xl gap-12 flex flex-col">
                    {/* Educational Articles */}
                    <section className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                        <div className="flex items-center gap-3 mb-8">
                            <BookOpen className="text-indigo-400" size={28} />
                            <h2 className="text-2xl font-bold text-white">基礎知識コンテンツ</h2>
                        </div>
                        <EducationalArticle courses={dict.guide.courses} />
                    </section>

                    {/* Quiz Section */}
                    <section className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                        <div className="flex items-center gap-3 mb-8">
                            <HelpCircle className="text-purple-400" size={28} />
                            <h2 className="text-2xl font-bold text-white">確認テスト</h2>
                        </div>
                        <QuizCard
                            title={dict.guide.quizTitle}
                            correctText={dict.guide.quizCorrect}
                            incorrectText={dict.guide.quizIncorrect}
                            quizzes={dict.guide.quizzes}
                        />
                    </section>
                </div>
            </main>

            <footer className="border-t border-white/10 py-12 text-center text-gray-500 mt-auto">
                <p className="text-sm">© 2024 Web3Research. {dict.common.footerRights}</p>
                <p className="text-xs mt-2 opacity-50">{dict.common.footerData}</p>
            </footer>
        </div>
    );
}
