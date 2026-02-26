'use client';

import React, { useState, useEffect } from 'react';
import { AirdropTask, AirdropStep } from '@/data/airdrops';
import { CheckCircle2, Circle, ExternalLink, Trophy, Flame } from 'lucide-react';

interface Props {
    task: AirdropTask;
    locale: 'ja' | 'en' | 'zh';
    dict: any;
}

export default function AirdropCard({ task, locale, dict }: Props) {
    const [completedSteps, setCompletedSteps] = useState<string[]>([]);

    // Load state from local storage
    useEffect(() => {
        const saved = localStorage.getItem(`airdrop_${task.id}`);
        if (saved) {
            setCompletedSteps(JSON.parse(saved));
        }
    }, [task.id]);

    const toggleStep = (stepId: string) => {
        setCompletedSteps(prev => {
            let next;
            if (prev.includes(stepId)) {
                next = prev.filter(id => id !== stepId);
            } else {
                next = [...prev, stepId];
            }
            localStorage.setItem(`airdrop_${task.id}`, JSON.stringify(next));
            return next;
        });
    };

    const steps = task.steps[locale] || task.steps.en;
    const desc = task.description[locale] || task.description.en;

    const isAllComplete = completedSteps.length === steps.length;

    return (
        <div className={`p-6 rounded-2xl border transition-all ${isAllComplete
                ? 'bg-green-500/5 border-green-500/30 shadow-[0_0_20px_rgba(34,197,94,0.1)]'
                : 'bg-slate-900 border-white/10 hover:border-white/20'
            }`}>
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                    <img src={task.logo} alt={task.protocol} className="w-12 h-12 rounded-full border border-white/10 bg-black" />
                    <div>
                        <div className="flex items-center gap-2">
                            <h3 className="text-xl font-bold text-white">{task.title}</h3>
                            {isAllComplete && <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded uppercase">{dict.completed || 'Done'}</span>}
                        </div>
                        <p className="text-gray-400 text-sm">{task.protocol} • {task.category}</p>
                    </div>
                </div>

                <div className="flex flex-col items-end gap-2 text-right">
                    <div className="flex items-center gap-1 text-xs font-medium text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded">
                        <Trophy size={14} /> {task.potentialReward}
                    </div>
                    <div className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded ${task.difficulty === 'Low' ? 'text-green-400 bg-green-400/10' :
                            task.difficulty === 'Medium' ? 'text-orange-400 bg-orange-400/10' :
                                'text-red-400 bg-red-400/10'
                        }`}>
                        <Flame size={14} /> {task.difficulty}
                    </div>
                </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                {desc}
            </p>

            {/* Checklists */}
            <div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 pb-2 border-b border-white/10">
                    {dict.stepsLabel || 'Tasks'}
                </div>
                <div className="space-y-3">
                    {steps.map((step, idx) => {
                        const isDone = completedSteps.includes(step.id);
                        return (
                            <div key={step.id} className="flex gap-3 group">
                                <button
                                    onClick={() => toggleStep(step.id)}
                                    className="mt-0.5 flex-shrink-0 focus:outline-none"
                                >
                                    {isDone
                                        ? <CheckCircle2 size={20} className="text-green-500 transition-colors" />
                                        : <Circle size={20} className="text-gray-500 group-hover:text-white transition-colors" />
                                    }
                                </button>
                                <div className={`flex-1 text-sm ${isDone ? 'text-gray-500 line-through' : 'text-gray-200'} transition-all`}>
                                    <span className="font-mono text-gray-500 mr-2">{idx + 1}.</span>
                                    {step.description}
                                    {step.url && (
                                        <a
                                            href={step.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-1 ml-2 text-indigo-400 hover:text-indigo-300 no-underline"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <ExternalLink size={12} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
