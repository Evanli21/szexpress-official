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

  // China-Vietnam guide pages
  const vnGuideLocales = ['zh', 'en', 'vi']
  const vnGuideEntries: MetadataRoute.Sitemap = vnGuideLocales.map((locale) => ({
    url: `${baseUrl}/${locale}/guide/china-vietnam`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.9,
    alternates: {
      languages: Object.fromEntries(
        vnGuideLocales.map((l) => [l, `${baseUrl}/${l}/guide/china-vietnam`])
      ),
    },
  }))

  // China-Russia guide pages
  const ruGuideLocales = ['zh', 'en', 'ru']
  const ruGuideEntries: MetadataRoute.Sitemap = ruGuideLocales.map((locale) => ({
    url: `${baseUrl}/${locale}/guide/china-russia`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.9,
    alternates: {
      languages: Object.fromEntries(
        ruGuideLocales.map((l) => [l, `${baseUrl}/${l}/guide/china-russia`])
      ),
    },
  }))

  return [...homeEntries, ...vnGuideEntries, ...ruGuideEntries]
}
