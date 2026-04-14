import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix } from './navigation';

export default createMiddleware({
  locales,
  localePrefix,
  defaultLocale: 'zh'
});

export const config = {
  // Match only internationalized pathnames, exclude static files and API routes
  matcher: ['/((?!_next|_vercel|.*\\..*).*)']
};
