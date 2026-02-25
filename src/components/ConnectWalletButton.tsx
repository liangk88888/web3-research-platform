'use client';

import React, { useState, useEffect } from 'react';
import { Wallet, X, ChevronRight, Loader2 } from 'lucide-react';

interface Props {
    dict: Record<string, string>;
    buttonText: string;
}

export default function ConnectWalletButton({ dict, buttonText }: Props) {
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

    const handleConnect = (id: string) => {
        setConnectingId(id);
        // Simulate connection delay
        setTimeout(() => {
            setConnectingId(null);
            setIsOpen(false);
        }, 1500);
    };

    const wallets = [
        { id: 'metamask', name: dict.metamask, color: 'bg-[#F6851B]' },
        { id: 'walletconnect', name: dict.walletConnect, color: 'bg-[#3B99FC]' },
        { id: 'coinbase', name: dict.coinbase, color: 'bg-[#0052FF]' },
        { id: 'phantom', name: dict.phantom, color: 'bg-[#AB9FF2]' },
    ];

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
                <Wallet size={16} />
                <span className="hidden sm:inline">{buttonText}</span>
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

                        <div className="p-4 space-y-2">
                            {wallets.map((wallet) => (
                                <button
                                    key={wallet.id}
                                    onClick={() => handleConnect(wallet.id)}
                                    disabled={connectingId !== null}
                                    className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${wallet.color}`}>
                                            <Wallet size={20} className="text-white" />
                                        </div>
                                        <span className="font-bold text-white group-hover:text-indigo-400 transition-colors">
                                            {wallet.name}
                                        </span>
                                    </div>

                                    {connectingId === wallet.id ? (
                                        <Loader2 size={20} className="text-indigo-400 animate-spin" />
                                    ) : (
                                        <ChevronRight size={20} className="text-gray-600 group-hover:text-white transition-colors" />
                                    )}
                                </button>
                            ))}
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
