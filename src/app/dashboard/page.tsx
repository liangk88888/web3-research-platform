import React from 'react';
import { getLocale } from '@/i18n/getLocale';
import { getDictionary } from '@/i18n/dictionaries';
import { getDefiLlamaChains, getDefiLlamaProtocols } from '@/services/defillama';
import TvlPieChart from '@/components/charts/TvlPieChart';
import ProtocolBarChart from '@/components/charts/ProtocolBarChart';
import { Activity, LayoutDashboard } from 'lucide-react';
import TierGuard from '@/components/TierGuard';

export const metadata = {
    title: 'On-chain Dashboard | Web3 Research Platform',
    description: 'Real-time on-chain data and TVL analytics',
};

export default async function DashboardPage() {
    const locale = await getLocale();
    const dict = getDictionary(locale);

    // Fetch data in parallel
    const [chains, protocols] = await Promise.all([
        getDefiLlamaChains(),
        getDefiLlamaProtocols()
    ]);

    return (
        <TierGuard requiredTier="PAID" dict={dict}>
            <div className="min-h-screen bg-background pt-24 pb-12 relative overflow-hidden">
                {/* Background elements */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[128px] pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    {/* Header */}
                    <div className="mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-4">
                            <Activity className="w-4 h-4" />
                            Live Data by DefiLlama
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                            {dict.dashboard.title}
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl">
                            {dict.dashboard.subtitle}
                        </p>
                    </div>

                    {/* Charts Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Chains TVL Pie Chart */}
                        <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 backdrop-blur-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
                                    <LayoutDashboard className="w-5 h-5" />
                                </div>
                                <h2 className="text-xl font-bold text-white">
                                    {dict.dashboard.chainsTitle}
                                </h2>
                            </div>
                            <TvlPieChart data={chains} />
                        </div>

                        {/* Protocols TVL Bar Chart */}
                        <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 backdrop-blur-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                                    <Activity className="w-5 h-5" />
                                </div>
                                <h2 className="text-xl font-bold text-white">
                                    {dict.dashboard.protocolsTitle}
                                </h2>
                            </div>
                            <ProtocolBarChart data={protocols} />
                        </div>
                    </div>
                </div>
            </div>
        </TierGuard>
    );
}
