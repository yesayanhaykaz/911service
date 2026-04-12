'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { hy, en, ru, type Locale, type Lang } from '@/locales';

const locales = { hy, en, ru };

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Locale;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'hy',
  setLang: () => {},
  t: hy,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('hy');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('911s_lang') as Lang;
      if (saved && locales[saved]) setLangState(saved);
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem('911s_lang', l); } catch {}
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: locales[lang] as Locale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
