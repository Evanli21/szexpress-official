import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['zh', 'en', 'vi', 'ko', 'ru'] as const;
export const localePrefix = 'as-needed'; // Default locale prefix

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
