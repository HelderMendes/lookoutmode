'use client';

import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from 'react';

type Season = 'spring' | 'summer' | 'autumn' | 'winter';

interface SeasonalContextType {
    currentSeason: Season;
    seasonalColors: {
        primary: string;
        secondary: string;
        accent: string;
    };
}

const SeasonalContext = createContext<SeasonalContextType | undefined>(
    undefined
);

export function SeasonalProvider({ children }: { children: ReactNode }) {
    const [currentSeason, setCurrentSeason] = useState<Season>('summer');

    useEffect(() => {
        const getCurrentSeason = (): Season => {
            const month = new Date().getMonth();
            if (month >= 2 && month <= 4) return 'spring';
            if (month >= 5 && month <= 7) return 'summer';
            if (month >= 8 && month <= 10) return 'autumn';
            return 'winter';
        };

        setCurrentSeason(getCurrentSeason());
    }, []);

    const seasonalColors = {
        spring: {
            primary: 'hsl(var(--spring-primary))',
            secondary: 'hsl(var(--spring-secondary))',
            accent: 'hsl(var(--spring-accent))',
        },
        summer: {
            primary: 'hsl(var(--summer-primary))',
            secondary: 'hsl(var(--summer-secondary))',
            accent: 'hsl(var(--summer-accent))',
        },
        autumn: {
            primary: 'hsl(var(--autumn-primary))',
            secondary: 'hsl(var(--autumn-secondary))',
            accent: 'hsl(var(--autumn-accent))',
        },
        winter: {
            primary: 'hsl(var(--winter-primary))',
            secondary: 'hsl(var(--winter-secondary))',
            accent: 'hsl(var(--winter-accent))',
        },
    };

    return (
        <SeasonalContext.Provider
            value={{
                currentSeason,
                seasonalColors: seasonalColors[currentSeason],
            }}
        >
            {children}
        </SeasonalContext.Provider>
    );
}

export function useSeasonal() {
    const context = useContext(SeasonalContext);
    if (context === undefined) {
        throw new Error('useSeasonal must be used within a SeasonalProvider');
    }
    return context;
}
