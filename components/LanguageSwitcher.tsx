'use client';

import { useRouter, usePathname, locales } from '@/navigation';
import { useLocale } from 'next-intl';
import { ChevronDown, Globe } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const localeLabels: Record<string, string> = {
  zh: '中文',
  en: 'EN',
  vi: 'Tiếng Việt',
  ko: '한국어',
  ru: 'Русский'
};

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const switchLocale = (nextLocale: string) => {
    router.replace(pathname, { locale: nextLocale });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 glass rounded-md hover:bg-surface transition-all text-sm font-bold text-white"
      >
        <Globe className="w-4 h-4 text-accent" />
        <span>{localeLabels[locale] || locale.toUpperCase()}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-32 glass border border-border/20 rounded-md overflow-hidden z-50 animate-in fade-in zoom-in duration-200 origin-top-right">
          {locales.map((cur) => (
            <button
              key={cur}
              onClick={() => switchLocale(cur)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-accent hover:text-black transition-colors ${
                locale === cur ? 'bg-accent/10 text-accent' : 'text-gray-300'
              }`}
            >
              {localeLabels[cur]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
