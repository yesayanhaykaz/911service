'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';
import type { Lang } from '@/locales';

const langs: { code: Lang; label: string; native: string }[] = [
  { code: 'hy', label: 'Հայ.', native: 'Հայերեն' },
  { code: 'en', label: 'Eng.', native: 'English' },
  { code: 'ru', label: 'Рус.', native: 'Русский' },
];

export default function LanguageSwitcher({ dark = false }: { dark?: boolean }) {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const current = langs.find((l) => l.code === lang)!;

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all duration-150 ${
          dark
            ? 'bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        {current.label}
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          role="listbox"
          className="absolute right-0 top-full mt-2 w-36 rounded-2xl overflow-hidden bg-white shadow-2xl border border-gray-100 z-50 py-1"
        >
          {langs.map(({ code, label, native }) => (
            <button
              key={code}
              role="option"
              aria-selected={lang === code}
              onClick={() => {
                setLang(code);
                setOpen(false);
              }}
              className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                lang === code
                  ? 'bg-blue-50 text-blue-600 font-semibold'
                  : 'text-gray-700 hover:bg-gray-50 font-medium'
              }`}
            >
              <span>{native}</span>
              {lang === code && <Check className="w-3.5 h-3.5" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
