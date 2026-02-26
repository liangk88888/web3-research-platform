'use client';

import React from 'react';
import { useUser, UserTier } from '@/contexts/UserContext';
import { Lock, Crown, Star, Ticket } from 'lucide-react';
import ConnectWalletButton from './ConnectWalletButton';

interface Props {
    children: React.ReactNode;
    requiredTier: UserTier;
    dict: any; // Passed from server component
}

const TIER_LEVELS: Record<UserTier, number> = {
    'GUEST': 0,
    'FREE': 1,
    'PAID': 2,
    'NFT_HOLDER': 3
};

const TIER_ICONS: Record<UserTier, React.ReactNode> = {
    'GUEST': <Lock className="text-gray-500 w-12 h-12 mb-4" />,
    'FREE': <Star className="text-blue-400 w-12 h-12 mb-4" />,
    'PAID': <Crown className="text-yellow-400 w-12 h-12 mb-4" />,
    'NFT_HOLDER': <Ticket className="text-purple-400 w-12 h-12 mb-4" />
};

export default function TierGuard({ children, requiredTier, dict }: Props) {
    const { tier, isHydrated } = useUser();

    // Prevent hydration mismatch flashes
    if (!isHydrated) {
        return <div className="min-h-[400px] flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin"></div>
        </div>;
    }

    const hasAccess = TIER_LEVELS[tier] >= TIER_LEVELS[requiredTier];

    if (hasAccess) {
        return <>{children}</>;
    }

    // Access Denied UI
    return (
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
            <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 max-w-md w-full animate-fade-in-up">
                <div className="flex justify-center">
                    {TIER_ICONS[requiredTier]}
                </div>

                <h2 className="text-2xl font-bold text-white mb-2">
                    {dict.tierGuard?.title || 'Access Restricted'}
                </h2>

                <p className="text-gray-400 text-sm mb-6">
                    {dict.tierGuard?.description || `This feature requires ${requiredTier} access. Please upgrade your membership or connect an eligible wallet.`}
                </p>

                <div className="bg-white/5 rounded-2xl p-4 mb-6 text-left">
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                        {dict.tierGuard?.requirements || 'Requirements'}
                    </h4>
                    <ul className="text-sm text-gray-300 space-y-2">
                        <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                            {requiredTier === 'PAID' ? (dict.tierGuard?.paidReq || 'Active Premium Subscription') : (dict.tierGuard?.nftReq || 'Hold 1x Official NFT')}
                        </li>
                    </ul>
                </div>

                {tier === 'GUEST' ? (
                    <div className="flex justify-center w-full">
                        <div className="w-full">
                            {/* We re-use ConnectWalletButton for the upsell action */}
                            <ConnectWalletButton dict={dict.wallet} buttonText={dict.nav?.connect || 'Connect Wallet'} />
                        </div>
                    </div>
                ) : (
                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg hover:shadow-indigo-500/25">
                        {dict.tierGuard?.upgradeBtn || 'Upgrade Membership'}
                    </button>
                )}
            </div>
        </div>
    );
}
