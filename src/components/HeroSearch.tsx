'use client';

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Props {
    placeholder: string;
    buttonText: string;
}

export default function HeroSearch({ placeholder, buttonText }: Props) {
    const [query, setQuery] = useState('');
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/search?q=${encodeURIComponent(query.trim())}`);
        }
    };

    return (
        <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
            <div className="relative flex items-center bg-zinc-900/80 border border-zinc-800 rounded-full p-2 backdrop-blur-sm">
                <div className="pl-4 pr-3 text-gray-400">
                    <Search size={20} />
                </div>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={placeholder}
                    className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-gray-600 focus:ring-0 text-base"
                />
                <button
                    type="submit"
                    className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors ml-2 cursor-pointer"
                >
                    {buttonText}
                </button>
            </div>
        </form>
    );
}
