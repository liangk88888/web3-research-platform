'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

interface ContactFormProps {
    dict: {
        nameLabel: string;
        namePlaceholder: string;
        emailLabel: string;
        emailPlaceholder: string;
        projectLabel: string;
        projectPlaceholder: string;
        messageLabel: string;
        messagePlaceholder: string;
        submitButton: string;
        submitting: string;
        successTitle: string;
        successMessage: string;
        errorRequired: string;
    };
}

export default function ContactForm({ dict }: ContactFormProps) {
    const [formData, setFormData] = useState({ name: '', email: '', project: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setError(dict.errorRequired);
            return;
        }

        setStatus('submitting');

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 2000));

        setStatus('success');
        setFormData({ name: '', email: '', project: '', message: '' });
    };

    if (status === 'success') {
        return (
            <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8 max-w-xl mx-auto text-center w-full shadow-[0_8px_32px_rgba(0,0,0,0.5)] animate-fade-in-up">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 text-green-400 mb-6">
                    <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{dict.successTitle}</h3>
                <p className="text-gray-400 text-lg">{dict.successMessage}</p>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-8 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-3 rounded-full font-bold transition-all hover:scale-105"
                >
                    Return to Form
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-zinc-900/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-10 shadow-2xl text-left w-full max-w-2xl mx-auto">
            {error && (
                <div className="mb-6 bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex items-center gap-3 text-red-400 text-sm">
                    <AlertCircle size={20} />
                    <p className="font-medium">{error}</p>
                </div>
            )}

            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">{dict.nameLabel} <span className="text-red-400">*</span></label>
                        <input
                            type="text"
                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-medium"
                            placeholder={dict.namePlaceholder}
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">{dict.emailLabel} <span className="text-red-400">*</span></label>
                        <input
                            type="email"
                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-medium"
                            placeholder={dict.emailPlaceholder}
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">{dict.projectLabel}</label>
                    <input
                        type="text"
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-medium"
                        placeholder={dict.projectPlaceholder}
                        value={formData.project}
                        onChange={e => setFormData({ ...formData, project: e.target.value })}
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">{dict.messageLabel} <span className="text-red-400">*</span></label>
                    <textarea
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all min-h-[160px] resize-y font-medium"
                        placeholder={dict.messagePlaceholder}
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg mt-4"
                >
                    {status === 'submitting' ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                        <Send size={18} />
                    )}
                    <span className="text-lg">{status === 'submitting' ? dict.submitting : dict.submitButton}</span>
                </button>
            </div>
        </form>
    );
}
