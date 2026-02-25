'use client';
import React, { useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

export default function SocialFeed({ title }: { title: string }) {
    useEffect(() => {
        // Dynamically inject Twitter script for embedding
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div className="w-full h-full">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-500/20 rounded-xl">
                    <MessageCircle className="text-blue-400" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white">{title}</h2>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden min-h-[500px] h-[calc(100%-80px)] overflow-y-auto no-scrollbar relative">
                <div className="absolute inset-0 bg-transparent loading-bg animate-pulse -z-10" />
                <a
                    className="twitter-timeline"
                    data-theme="dark"
                    data-tweet-limit="3"
                    data-chrome="noheader nofooter noborders transparent"
                    href="https://twitter.com/Cointelegraph?ref_src=twsrc%5Etfw"
                >
                    Tweets by Cointelegraph
                </a>
            </div>
        </div>
    );
}
