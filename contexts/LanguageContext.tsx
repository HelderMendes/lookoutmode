'use client';

import translations from '@/lib/translations';
import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from 'react';

type Language = 'nl' | 'en';

type Translations = {
    [lang in Language]: {
        [key: string]: string;
    };
};

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string; // Translation function
}

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('nl');

    useEffect(() => {
        // Check for saved language preference or browser language
        const savedLanguage = localStorage.getItem(
            'lookout-language'
        ) as Language;
        if (
            savedLanguage &&
            (savedLanguage === 'nl' || savedLanguage === 'en')
        ) {
            setLanguage(savedLanguage);
        } else {
            // Default to Dutch as mother language
            const browserLang = navigator.language.toLowerCase();
            if (browserLang.startsWith('en')) {
                setLanguage('en');
            } else {
                setLanguage('nl');
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('lookout-language', language);
    }, [language]);

    // Fallback
    const t: (key: string) => string = (key: string): string => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
