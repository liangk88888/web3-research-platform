'use client';

import React, from 'react';
import { useUser, UserTier } from '@/contexts/UserContext';
import { Check, Star, Crown, Ticket } from 'lucide-react';

interface PricingClientProps {
    dict: any;
}

const TIER_LEVELS: Record<UserTier, number> = {
    'GUEST': 0,
    'FREE': 1,
    'PAID': 2,
    'NFT_HOLDER': 3
};

export default function PricingClient({ dict }: PricingClientProps) {
    const { tier, isHydrated } = useUser();

    // Mapping for UI purposes (GUEST is treated as FREE for display)
    const displayTier = tier === 'GUEST' ? 'FREE' : tier;

    if (!isHydrated) return null; // Avoid hydration mismatch on initial render

    const plans = [
        {
            id: 'free',
            name: dict.free.name,
            price: dict.free.price,
            period: '',
            description: dict.free.description,
            features: dict.free.features,
            icon: <Star className="w-6 h-6 text-gray-400" />,
            level: TIER_LEVELS['FREE'],
            tierIdent: 'FREE',
            badge: null,
            buttonStyle: 'bg-white/10 hover:bg-white/20 text-white',
            borderColor: 'border-white/10'
        },
        {
            id: 'paid',
            name: dict.paid.name,
            price: dict.paid.price,
            period: dict.monthly,
            description: dict.paid.description,
            features: dict.paid.features,
            icon: <Crown className="w-6 h-6 text-yellow-500" />,
            level: TIER_LEVELS['PAID'],
            tierIdent: 'PAID',
            badge: 'Most Popular',
            buttonStyle: 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white shadow-lg shadow-indigo-500/25',
            borderColor: 'border-indigo-500 sm:scale-105 shadow-2xl relative z-10 bg-zinc-900/80'
        },
        {
            id: 'nft',
            name: dict.nft.name,
            price: dict.nft.price,
            period: ` / ${dict.lifetime}`,
            description: dict.nft.description,
            features: dict.nft.features,
            icon: <Ticket className="w-6 h-6 text-pink-500" />,
            level: TIER_LEVELS['NFT_HOLDER'],
            tierIdent: 'NFT_HOLDER',
            badge: 'Limited',
            buttonStyle: 'bg-white text-black hover:bg-gray-200',
            borderColor: 'border-white/10'
        }
    ];

    const handleActionClick = (targetTier: string) => {
        // Trigger generic mock login modal alert since Stripe isn't integrated yet
        alert('To simulate different membership tiers, please use the "Connect Wallet" button in the top right header and select a Simulated Testing Mode.');
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => {
                const isCurrentPlan = TIER_LEVELS[displayTier as UserTier] === plan.level;
                const isDowngrade = TIER_LEVELS[displayTier as UserTier] > plan.level;

                return (
                    <div
                        key={plan.id}
                        className={`rounded-3xl p-8 border backdrop-blur-sm transition-all duration-300 hover:border-white/30 flex flex-col 
                            ${plan.borderColor} ${plan.badge ? '' : 'bg-black/40'}`}
                    >
                        {plan.badge && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                                {plan.badge}
                            </div>
                        )}

                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-white/5 rounded-2xl">
                                {plan.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                        </div>

                        <div className="mb-6">
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-black text-white">{plan.price}</span>
                                <span className="text-gray-400 font-medium">{plan.period}</span>
                            </div>
                            <p className="text-gray-400 mt-4 text-sm h-12">
                                {plan.description}
                            </p>
                        </div>

                        <div className="flex-1">
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature: string, idx: number) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                                        <span className="text-sm text-gray-300 leading-tight">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button
                            onClick={() => handleActionClick(plan.tierIdent)}
                            disabled={isCurrentPlan || isDowngrade}
                            className={`w-full py-4 rounded-xl font-bold transition-all ${isCurrentPlan
                                    ? 'bg-green-500/20 text-green-400 border border-green-500/50 cursor-default'
                                    : isDowngrade
                                        ? 'bg-white/5 text-gray-500 cursor-not-allowed'
                                        : plan.buttonStyle
                                }`}
                        >
                            {isCurrentPlan
                                ? dict.currentPlan
                                : isDowngrade
                                    ? 'Included'
                                    : plan.id === 'paid'
                                        ? dict.upgradeToPaid
                                        : plan.id === 'nft'
                                            ? dict.mintNft
                                            : 'Select Plan'}
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
