import React from 'react';
import Header from '@/components/Header';
import { getLocale } from '@/i18n/getLocale';
import { getDictionary } from '@/i18n/dictionaries';
import { MessageSquarePlus } from 'lucide-react';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export default async function RequestPage() {
    const locale = await getLocale();
    const dict = getDictionary(locale);

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
            <Header />

            <main className="flex-1 w-full flex items-center justify-center relative pt-32 pb-20">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent pointer-events-none" />
                <div className="container mx-auto px-4 max-w-2xl text-center">
                    <div className="inline-block p-4 bg-purple-500/20 rounded-2xl mb-6">
                        <MessageSquarePlus size={48} className="text-purple-400" />
                    </div>
                    <h1 className="text-4xl text-white font-bold mb-4">{dict.nav.request}</h1>
                    <div className="mt-10 relative z-10 w-full animate-fade-in-up">
                        <ContactForm dict={dict.contact} />
                    </div>
                </div>
            </main>

            <footer className="border-t border-white/10 py-12 text-center text-gray-500 mt-auto">
                <p className="text-sm">© 2024 Web3Research. {dict.common.footerRights}</p>
                <p className="text-xs mt-2 opacity-50">{dict.common.footerData}</p>
            </footer>
        </div>
    );
}
