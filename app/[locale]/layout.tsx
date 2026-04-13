import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SZ Express - China to Vietnam & Russia Freight | Air & Sea Shipping from Shenzhen',
  description: 'SZ Express provides reliable air and sea freight from Shenzhen, China to Vietnam and Russia. B2B and B2C cross-border logistics, cargo consolidation, and last-mile delivery. Get a quote today at szexpress.org.',
  keywords: 'China to Vietnam freight, China to Russia shipping, Shenzhen logistics, air freight Vietnam, sea freight Russia, cross-border shipping, cargo consolidation Shenzhen, SZ Express, 中越专线, 中俄专线, 深圳货运, 国际物流',
  openGraph: {
    title: 'SZ Express - China to Vietnam & Russia Freight',
    description: 'Reliable air and sea freight from Shenzhen to Vietnam and Russia. Transparent pricing, fast delivery, B2B & B2C.',
    url: 'https://szexpress.org',
    siteName: 'SZ Express',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://szexpress.org',
    languages: {
      'zh': 'https://szexpress.org/zh',
      'en': 'https://szexpress.org/en',
      'vi': 'https://szexpress.org/vi',
      'ko': 'https://szexpress.org/ko',
      'ru': 'https://szexpress.org/ru',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        {/* Schema.org Structured Data for GEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://szexpress.org/#organization",
                  "name": "SZ Express",
                  "url": "https://szexpress.org",
                  "logo": "https://szexpress.org/logo.png",
                  "description": "SZ Express is a Shenzhen-based international freight forwarder specializing in air and sea freight from China to Vietnam and Russia, serving both B2B and B2C customers.",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Bao'an District",
                    "addressRegion": "Shenzhen",
                    "addressCountry": "CN"
                  },
                  "contactPoint": [
                    {
                      "@type": "ContactPoint",
                      "contactType": "customer service",
                      "email": "Business@szexpress.org",
                      "availableLanguage": ["Chinese", "English", "Vietnamese", "Russian", "Korean"]
                    }
                  ],
                  "sameAs": [
                    "https://t.me/bayc2983laowangtou"
                  ]
                },
                {
                  "@type": "Service",
                  "@id": "https://szexpress.org/#service-air",
                  "name": "Air Freight from China to Vietnam and Russia",
                  "provider": { "@id": "https://szexpress.org/#organization" },
                  "serviceType": "Air Freight",
                  "description": "Fast and reliable air freight service from Shenzhen, China to Vietnam (Hanoi, Ho Chi Minh City) and Russia (Moscow, St. Petersburg). Suitable for urgent shipments, B2B and B2C.",
                  "areaServed": [
                    { "@type": "Country", "name": "Vietnam" },
                    { "@type": "Country", "name": "Russia" }
                  ],
                  "url": "https://szexpress.org"
                },
                {
                  "@type": "Service",
                  "@id": "https://szexpress.org/#service-sea",
                  "name": "Sea Freight from China to Vietnam and Russia",
                  "provider": { "@id": "https://szexpress.org/#organization" },
                  "serviceType": "Sea Freight",
                  "description": "Cost-effective sea freight (FCL and LCL) from Shenzhen port to Vietnam and Russia. Ideal for large cargo and bulk shipments.",
                  "areaServed": [
                    { "@type": "Country", "name": "Vietnam" },
                    { "@type": "Country", "name": "Russia" }
                  ],
                  "url": "https://szexpress.org"
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "How long does air freight from Shenzhen to Vietnam take?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Air freight from Shenzhen to Vietnam (Hanoi or Ho Chi Minh City) typically takes 3-5 business days with SZ Express, including customs clearance and last-mile delivery."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How long does sea freight from China to Russia take?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sea freight from Shenzhen to Russia (Moscow or St. Petersburg) typically takes 25-40 days depending on the route and port of destination. SZ Express offers both FCL and LCL options."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Does SZ Express handle both B2B and B2C shipments?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. SZ Express serves both business (B2B) and individual (B2C) customers for cross-border freight from China to Vietnam and Russia, with flexible cargo consolidation and door-to-door delivery options."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How to get a freight quote from SZ Express?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You can contact SZ Express via WeChat (ID: Cigarlogs), Telegram (@bayc2983laowangtou), or email at Business@szexpress.org to get a free freight quote."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What is SZ Express?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "SZ Express (szexpress.org) is an international freight forwarder based in Bao'an District, Shenzhen, China. We specialize in air and sea freight special lines from China to Vietnam and Russia, offering transparent pricing, cargo consolidation, customs clearance, and last-mile delivery for B2B and B2C customers."
                      }
                    }
                  ]
                }
              ]
            })
          }}
        />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3L4N93BL5R"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3L4N93BL5R');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="scanline" />
          </div>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
