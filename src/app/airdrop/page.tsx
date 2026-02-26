import React from 'react';
import { getLocale } from '@/i18n/getLocale';
import { getDictionary } from '@/i18n/dictionaries';
import { AIRDROP_TASKS } from '@/data/airdrops';
import AirdropCard from '@/components/AirdropCard';
import { Gift } from 'lucide-react';

export const metadata = {
    title: 'Airdrop & Testnet Hub | Web3 Research',
    description: 'Track your airdrop farming progress',
};

export default async function AirdropPage() {
    const locale = await getLocale();
    const dict = getDictionary(locale);

    return (
        <div className="w-full h-full relative overflow-hidden pb-24">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 pt-12">
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-4">
                        <Gift className="w-4 h-4" />
                        Airdrop & Testnet
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                        {dict.airdrop.title}
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl">
                        {dict.airdrop.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {AIRDROP_TASKS.map(task => (
                        <AirdropCard
                            key={task.id}
                            task={task}
                            locale={locale}
                            dict={dict.airdrop}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
