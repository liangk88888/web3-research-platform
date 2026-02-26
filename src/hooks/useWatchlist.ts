'use client';

import { useState, useEffect } from 'react';

const WATCHLIST_KEY = 'web3_research_watchlist';

export function useWatchlist() {
    const [watchlist, setWatchlist] = useState<string[]>([]);
    const [isMounted, setIsMounted] = useState(false);

    // Load watchlist from local storage on mount
    useEffect(() => {
        setIsMounted(true);
        try {
            const saved = localStorage.getItem(WATCHLIST_KEY);
            if (saved) {
                setWatchlist(JSON.parse(saved));
            }
        } catch (error) {
            console.error('Failed to load watchlist from local storage:', error);
        }
    }, []);

    const toggleWatchlist = (id: string, e?: React.MouseEvent) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }

        setWatchlist((prev) => {
            let newWatchlist;
            if (prev.includes(id)) {
                newWatchlist = prev.filter((item) => item !== id);
            } else {
                newWatchlist = [...prev, id];
            }

            try {
                localStorage.setItem(WATCHLIST_KEY, JSON.stringify(newWatchlist));
                // Dispatch a custom event so other components can sync
                window.dispatchEvent(new Event('watchlist-updated'));
            } catch (error) {
                console.error('Failed to save watchlist to local storage:', error);
            }

            return newWatchlist;
        });
    };

    // Listen for cross-tab or cross-component updates
    useEffect(() => {
        const syncWatchlist = () => {
            try {
                const saved = localStorage.getItem(WATCHLIST_KEY);
                if (saved) {
                    setWatchlist(JSON.parse(saved));
                }
            } catch (error) {
                // ignore
            }
        };

        window.addEventListener('watchlist-updated', syncWatchlist);
        window.addEventListener('storage', syncWatchlist);

        return () => {
            window.removeEventListener('watchlist-updated', syncWatchlist);
            window.removeEventListener('storage', syncWatchlist);
        };
    }, []);

    const isInWatchlist = (id: string) => watchlist.includes(id);

    return {
        watchlist,
        toggleWatchlist,
        isInWatchlist,
        isMounted
    };
}
