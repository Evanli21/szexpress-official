import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'szexpress.org - Global Logistics Special Line | Shenzhen Express',
  description: 'szexpress.org provides premium global logistics special lines. One-Stop Cross-Border Solutions including Air & Sea Freight, Cargo Consolidation, and Last-Mile Delivery. Reliable, Efficient, and Transparent.',
  keywords: 'Global Logistics, szexpress.org, Shenzhen Express, Cross-border shipping, Air & Sea Freight, Cargo Consolidation, Freight Forwarding',
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
