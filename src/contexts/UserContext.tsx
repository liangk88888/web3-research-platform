'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserTier = 'GUEST' | 'FREE' | 'PAID' | 'NFT_HOLDER';

interface UserContextType {
    tier: UserTier;
    setTier: (tier: UserTier) => void;
    isHydrated: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [tier, setTierState] = useState<UserTier>('GUEST');
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        // Hydrate from localStorage on client mount
        const savedTier = localStorage.getItem('userTier') as UserTier;
        if (savedTier && ['GUEST', 'FREE', 'PAID', 'NFT_HOLDER'].includes(savedTier)) {
            setTierState(savedTier);
        }
        setIsHydrated(true);
    }, []);

    const setTier = (newTier: UserTier) => {
        setTierState(newTier);
        localStorage.setItem('userTier', newTier);
    };

    return (
        <UserContext.Provider value={{ tier, setTier, isHydrated }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}
