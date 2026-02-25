import React from 'react';
// We'll hardcode categories that make sense for our featured API coins
interface Props {
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
    allText: string;
}

export default function CategoryTags({ selectedCategory, onSelectCategory, allText }: Props) {
    const API_CATEGORIES = [
        allText,
        "Layer1",
        "Layer2",
        "DeFi",
        "インフラ",
        "Telegram App",
        "Meme"
    ];
    return (
        <div className="w-full overflow-x-auto py-4 no-scrollbar">
            <div className="flex items-center gap-3 px-4 min-w-max mx-auto justify-center">
                {API_CATEGORIES.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => onSelectCategory(cat)}
                        className={`
              px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300
              border cursor-pointer flex-shrink-0
              ${selectedCategory === cat
                                ? 'bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                                : 'bg-zinc-900/60 text-gray-400 border-zinc-800 hover:bg-zinc-800 hover:text-white'}
            `}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
    );
}
