'use client';

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { DefiLlamaChain } from '@/services/defillama';

interface TvlPieChartProps {
    data: DefiLlamaChain[];
}

const COLORS = [
    '#6366f1', // Indigo
    '#8b5cf6', // Violet
    '#d946ef', // Fuchsia
    '#0ea5e9', // Light Blue
    '#10b981', // Emerald
    '#f59e0b', // Amber
    '#ef4444', // Red
    '#64748b', // Slate
    '#14b8a6', // Teal
    '#eab308', // Yellow
    '#f43f5e', // Rose
    '#3b82f6', // Blue
    '#84cc16', // Lime
    '#22c55e', // Green
    '#a855f7', // Purple
];

const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
            <div className="bg-slate-800 p-4 border border-white/10 rounded-xl shadow-xl">
                <p className="text-white font-bold mb-1">{data.name}</p>
                <p className="text-gray-300 text-sm">
                    TVL: <span className="font-mono text-cyan-400">${(data.tvl / 1e9).toFixed(2)}B</span>
                </p>
            </div>
        );
    }
    return null;
};

export default function TvlPieChart({ data }: TvlPieChartProps) {
    return (
        <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={140}
                        paddingAngle={2}
                        dataKey="tvl"
                        stroke="none"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                    <Legend
                        layout="vertical"
                        verticalAlign="middle"
                        align="right"
                        wrapperStyle={{ color: '#cbd5e1', fontSize: '12px' }}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
