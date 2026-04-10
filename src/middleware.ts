import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix } from './navigation';

export default createMiddleware({
  locales,
  localePrefix,
  defaultLocale: 'zh'
});

export const config = {
  // Skip all internal paths (_next, api, assets) and dot files
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
