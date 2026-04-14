import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://szexpress.org'
  const locales = ['zh', 'en', 'vi', 'ko', 'ru']
  const lastModified = new Date('2026-04-14')

  // Homepage entries for each locale
  const homeEntries: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: locale === 'zh' || locale === 'en' ? 1.0 : 0.9,
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, `${baseUrl}/${l}`])
      ),
    },
  }))

  // Guide pages
  const guideLocales = ['zh', 'en', 'vi']
  const guideEntries: MetadataRoute.Sitemap = guideLocales.map((locale) => ({
    url: `${baseUrl}/${locale}/guide/china-vietnam`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.9,
    alternates: {
      languages: Object.fromEntries(
        guideLocales.map((l) => [l, `${baseUrl}/${l}/guide/china-vietnam`])
      ),
    },
  }))

  return [...homeEntries, ...guideEntries]
}
