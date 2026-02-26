'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DefiLlamaProtocol } from '@/services/defillama';

interface ProtocolBarChartProps {
    data: DefiLlamaProtocol[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
            <div className="bg-slate-800 p-4 border border-white/10 rounded-xl shadow-xl z-50">
                <div className="flex items-center gap-3 border-b border-white/10 pb-2 mb-2">
                    {data.logo && <img src={data.logo} alt={data.name} className="w-8 h-8 rounded-full bg-slate-700" />}
                    <div>
                        <p className="text-white font-bold">{data.name}</p>
                        <p className="text-xs text-gray-400">{data.category} • {data.chain}</p>
                    </div>
                </div>
                <div className="space-y-1">
                    <p className="text-sm text-gray-300 flex justify-between gap-4">
                        <span>TVL:</span>
                        <span className="font-mono text-cyan-400">${(data.tvl / 1e9).toFixed(2)}B</span>
                    </p>
                    <p className="text-sm text-gray-300 flex justify-between gap-4">
                        <span>24h Change:</span>
                        <span className={`font-mono ${data.change_1d >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                            {data.change_1d >= 0 ? '+' : ''}{data.change_1d?.toFixed(2)}%
                        </span>
                    </p>
                </div>
            </div>
        );
    }
    return null;
};

export default function ProtocolBarChart({ data }: ProtocolBarChartProps) {
    return (
        <div className="h-[500px] w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={true} vertical={false} />
                    <XAxis
                        type="number"
                        tickFormatter={(value) => `$${(value / 1e9).toFixed(0)}B`}
                        stroke="#94a3b8"
                        fontSize={12}
                    />
                    <YAxis
                        type="category"
                        dataKey="name"
                        width={120}
                        stroke="#94a3b8"
                        fontSize={12}
                        tick={{ fill: '#e2e8f0' }}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: '#1e293b' }} />
                    <Bar
                        dataKey="tvl"
                        fill="#6366f1"
                        radius={[0, 4, 4, 0]}
                        barSize={20}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
