'use client';

import React, { useState } from 'react';
import { Terminal, Copy, CheckCircle2, Cpu } from 'lucide-react';

interface Topic {
    id: string;
    title: string;
    content: string;
    codeSnippet?: string;
}

interface Props {
    topics: Topic[];
}

export default function TechArticle({ topics }: Props) {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const handleCopy = (code: string, index: number) => {
        navigator.clipboard.writeText(code);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    // Helper to render markdown bold syntax as strong tags
    const renderContent = (content: string) => {
        const parts = content.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return (
                    <strong key={i} className="text-white font-semibold">
                        {part.slice(2, -2)}
                    </strong>
                );
            }
            return <span key={i}>{part}</span>;
        });
    };

    return (
        <div className="space-y-12 w-full">
            {topics.map((topic, index) => (
                <article
                    key={topic.id}
                    className="bg-zinc-900/40 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl animate-fade-in-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                >
                    <div className="p-8 md:p-10">
                        <header className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-blue-500/30">
                                <Cpu className="text-cyan-400" size={24} />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                                {topic.title}
                            </h2>
                        </header>

                        <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed space-y-4">
                            {topic.content.split('\n').map((paragraph, idx) => (
                                <p key={idx} className="mb-4">{renderContent(paragraph)}</p>
                            ))}
                        </div>
                    </div>

                    {topic.codeSnippet && (
                        <div className="bg-black/60 border-t border-white/5 p-6 md:p-8">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2 text-gray-400 text-sm font-semibold uppercase tracking-wider">
                                    <Terminal size={16} />
                                    <span>Example Code</span>
                                </div>
                                <button
                                    onClick={() => handleCopy(topic.codeSnippet!, index)}
                                    className="flex items-center gap-2 text-xs font-semibold bg-white/5 hover:bg-white/10 text-gray-300 px-3 py-1.5 rounded-lg border border-white/10 transition-colors"
                                >
                                    {copiedIndex === index ? (
                                        <>
                                            <CheckCircle2 size={14} className="text-green-400" />
                                            <span className="text-green-400">Copied!</span>
                                        </>
                                    ) : (
                                        <>
                                            <Copy size={14} />
                                            <span>Copy</span>
                                        </>
                                    )}
                                </button>
                            </div>
                            <div className="relative group rounded-xl overflow-hidden border border-white/5 bg-[#0d1117] p-4 text-sm font-mono text-gray-300 overflow-x-auto shadow-inner">
                                <pre className="!bg-transparent !m-0 !p-0">
                                    <code>{topic.codeSnippet}</code>
                                </pre>
                            </div>
                        </div>
                    )}
                </article>
            ))}
        </div>
    );
}
