'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { LANGUAGES, translations } from '@/lib/translations';

export type LanguageCode = keyof typeof translations;

interface LanguageContextValue {
    language: LanguageCode;
    setLanguage: (code: LanguageCode) => void;
    t: (key: string) => string;
    languages: { code: LanguageCode; label: string }[];
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<LanguageCode>('en');

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const stored = window.localStorage.getItem('donorhub_language');
        if (stored && stored in translations) {
            setLanguageState(stored as LanguageCode);
        }
    }, []);

    const setLanguage = (code: LanguageCode) => {
        setLanguageState(code);
        if (typeof window !== 'undefined') {
            window.localStorage.setItem('donorhub_language', code);
        }
    };

    const t = (key: string) => {
        const langPack = translations[language] || translations.en;
        return langPack[key] || translations.en[key] || '';
    };

    const value: LanguageContextValue = {
        language,
        setLanguage,
        t,
        languages: LANGUAGES,
    };

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
    const ctx = useContext(LanguageContext);
    if (!ctx) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return ctx;
};
