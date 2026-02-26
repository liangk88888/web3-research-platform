'use client';

import React, { useState, useEffect } from 'react';
import { Wallet, X, ChevronRight, Loader2, Star, Crown, Ticket, LogOut } from 'lucide-react';
import { useUser, UserTier } from '@/contexts/UserContext';

interface Props {
    dict: Record<string, string>;
    buttonText: string;
}

export default function ConnectWalletButton({ dict, buttonText }: Props) {
    const { tier, setTier, isHydrated } = useUser();
    const [isOpen, setIsOpen] = useState(false);
    const [connectingId, setConnectingId] = useState<string | null>(null);

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const handleConnect = (id: string, simulatedTier?: UserTier) => {
        setConnectingId(id);
        // Simulate connection delay
        setTimeout(() => {
            if (simulatedTier) {
                setTier(simulatedTier);
            }
            setConnectingId(null);
            setIsOpen(false);
        }, 1200);
    };

    const handleDisconnect = () => {
        setTier('GUEST');
        setIsOpen(false);
    };

    const wallets = [
        { id: 'metamask', name: dict.metamask, color: 'bg-[#F6851B]' },
        { id: 'walletconnect', name: dict.walletConnect, color: 'bg-[#3B99FC]' },
        { id: 'coinbase', name: dict.coinbase, color: 'bg-[#0052FF]' },
        { id: 'phantom', name: dict.phantom, color: 'bg-[#AB9FF2]' },
    ];

    const mockTiers = [
        { id: 'mock-free', name: 'Free Account (Simulated)', tier: 'FREE' as UserTier, icon: <Star size={20} className="text-white" />, color: 'bg-blue-500' },
        { id: 'mock-paid', name: 'Paid Premium (Simulated)', tier: 'PAID' as UserTier, icon: <Crown size={20} className="text-white" />, color: 'bg-yellow-500' },
        { id: 'mock-nft', name: 'NFT Holder (Simulated)', tier: 'NFT_HOLDER' as UserTier, icon: <Ticket size={20} className="text-white" />, color: 'bg-purple-500' },
    ];

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className={`flex items-center gap-2 border px-4 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 cursor-pointer 
                    ${tier !== 'GUEST' ? 'bg-indigo-600/20 text-indigo-400 border-indigo-500/50 hover:bg-indigo-600/30' : 'bg-white/5 hover:bg-white/10 border-white/10 text-white'}`}
            >
                {tier === 'GUEST' ? <Wallet size={16} /> : <Crown size={16} />}
                <span className="hidden sm:inline">
                    {!isHydrated ? buttonText : tier === 'GUEST' ? buttonText : `Tier: ${tier}`}
                </span>
            </button>

            {/* Modal Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Modal Content */}
                    <div className="relative bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-md shadow-2xl overflow-hidden animate-fade-in-up">
                        <div className="p-6 border-b border-white/5 flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-white">{dict.title}</h3>
                                <p className="text-sm text-gray-400 mt-1">{dict.subtitle}</p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="p-4 space-y-4 overflow-y-auto max-h-[60vh] custom-scrollbar">

                            {/* Connected State Options */}
                            {tier !== 'GUEST' && (
                                <div className="space-y-2 mb-6">
                                    <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider px-2">Current Active Tier</div>
                                    <div className="w-full flex items-center justify-between p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 cursor-default">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-indigo-500">
                                                <Crown size={20} className="text-white" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-white">{tier}</div>
                                                <div className="text-xs text-indigo-400 flex items-center gap-1">Connected <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span></div>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleDisconnect}
                                        className="w-full flex items-center justify-center gap-2 p-3 mt-2 rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors font-bold text-sm border border-red-500/20"
                                    >
                                        <LogOut size={16} /> Disconnect & Reset
                                    </button>
                                </div>
                            )}

                            {/* Simulated Tier Selectors */}
                            {tier === 'GUEST' && (
                                <div className="space-y-2">
                                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-2 mb-2">Simulated Testing Modes</div>
                                    {mockTiers.map((mock) => (
                                        <button
                                            key={mock.id}
                                            onClick={() => handleConnect(mock.id, mock.tier)}
                                            disabled={connectingId !== null}
                                            className="w-full flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-white/5 to-transparent hover:from-white/10 border border-white/5 overflow-hidden relative transition-all group disabled:opacity-50"
                                        >
                                            <div className="flex items-center gap-4 z-10">
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${mock.color} shadow-lg`}>
                                                    {mock.icon}
                                                </div>
                                                <span className="font-bold text-sm text-gray-200 group-hover:text-white transition-colors">
                                                    {mock.name}
                                                </span>
                                            </div>
                                            {connectingId === mock.id ? (
                                                <Loader2 size={16} className="text-gray-400 animate-spin z-10" />
                                            ) : (
                                                <ChevronRight size={16} className="text-gray-600 group-hover:text-white transition-colors z-10" />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {/* Standard Wallets */}
                            {tier === 'GUEST' && (
                                <div className="space-y-2 pt-4 border-t border-white/5">
                                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-2 mb-2">Standard Connect</div>
                                    {wallets.map((wallet) => (
                                        <button
                                            key={wallet.id}
                                            onClick={() => handleConnect(wallet.id)}
                                            disabled={connectingId !== null}
                                            className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group disabled:opacity-50"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${wallet.color}`}>
                                                    <Wallet size={16} className="text-white" />
                                                </div>
                                                <span className="font-bold text-sm text-gray-300 group-hover:text-white transition-colors">
                                                    {wallet.name}
                                                </span>
                                            </div>

                                            {connectingId === wallet.id ? (
                                                <Loader2 size={16} className="text-gray-400 animate-spin" />
                                            ) : (
                                                <ChevronRight size={16} className="text-gray-600 group-hover:text-white transition-colors" />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="p-4 bg-black/20 text-center border-t border-white/5">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-sm text-gray-500 hover:text-white transition-colors"
                            >
                                {dict.cancel}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
