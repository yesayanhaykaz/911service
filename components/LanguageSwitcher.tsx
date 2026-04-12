'use client';

import { useLang } from '@/contexts/LanguageContext';
import type { Lang } from '@/locales';

const langs: { code: Lang; label: string }[] = [
  { code: 'hy', label: 'ՀԱՅ' },
  { code: 'en', label: 'ENG' },
  { code: 'ru', label: 'РУС' },
];

export default function LanguageSwitcher({ dark = false }: { dark?: boolean }) {
  const { lang, setLang } = useLang();

  return (
    <div className={`flex items-center gap-0.5 rounded-xl p-1 ${dark ? 'bg-white/5 border border-white/10' : 'bg-gray-100'}`}>
      {langs.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all duration-150 ${
            lang === code
              ? dark
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white text-gray-900 shadow-sm'
              : dark
              ? 'text-white/40 hover:text-white/70'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
