'use client';

import React, { useState } from 'react';
import { KeyRound, ShieldCheck, AlertCircle } from 'lucide-react';

export default function SetupPage() {
    const [apiKey, setApiKey] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSave = async () => {
        if (!apiKey) return;

        setStatus('loading');
        try {
            const res = await fetch('/api/setup-env', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ apiKey }),
            });

            if (res.ok) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4 font-sans">
            <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                {/* Background glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

                <div className="flex flex-col items-center text-center mb-8 relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-4 border border-white/5">
                        <KeyRound size={32} className="text-cyan-400" />
                    </div>
                    <h1 className="text-2xl font-bold text-white mb-2">APIキーのセットアップ</h1>
                    <p className="text-sm text-gray-400">
                        AIニュースエージェントを動かすための Gemini APIキー を入力してください。
                    </p>
                </div>

                <div className="space-y-4 relative z-10">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Gemini API Key
                        </label>
                        <input
                            type="password"
                            value={apiKey}
                            onChange={(e) => setApiKey(e.target.value)}
                            placeholder="AIzaSy..."
                            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                        />
                    </div>

                    <button
                        onClick={handleSave}
                        disabled={!apiKey || status === 'loading' || status === 'success'}
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {status === 'loading' ? (
                            <span className="animate-pulse">保存中...</span>
                        ) : status === 'success' ? (
                            <>
                                <ShieldCheck size={20} />
                                安全に保存されました
                            </>
                        ) : (
                            'キーを保存する'
                        )}
                    </button>

                    {status === 'success' && (
                        <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-sm mt-4 text-center">
                            保存が完了しました！この画面を閉じて、チャットに戻り「終わったよ」と教えてください。
                        </div>
                    )}

                    {status === 'error' && (
                        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm mt-4 text-center flex items-center justify-center gap-2">
                            <AlertCircle size={16} />
                            エラーが発生しました。もう一度お試しください。
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
