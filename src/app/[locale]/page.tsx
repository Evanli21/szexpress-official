'use client'

import MapHero from '@/components/MapHero'
import ProcessFlow from '@/components/ProcessFlow'
import Footer from '@/components/Footer'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { motion } from 'framer-motion'
import { Menu, Search } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('Index')

  // Version: 1.0.1 - Multilingual Final
  return (
    <main className="flex min-h-screen flex-col bg-background text-white selection:bg-accent selection:text-black">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 glass border-b border-border/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black text-accent tracking-tighter"
          >
            {t('title')}
          </motion.div>
          <nav className="hidden md:flex items-center gap-10 text-sm font-bold uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-accent transition-colors">{t('nav.home')}</a>
            <a href="#" className="hover:text-accent transition-colors">{t('nav.services')}</a>
            <a href="#" className="hover:text-accent transition-colors">{t('nav.rates')}</a>
            <a href="#" className="hover:text-accent transition-colors">{t('nav.tracking')}</a>
            <a href="#" className="hover:text-accent transition-colors">{t('nav.contact')}</a>
          </nav>
          <div className="flex items-center gap-6">
            <LanguageSwitcher />
            
            <Search className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            <div className="w-8 h-8 flex items-center justify-center glass rounded-md hover:bg-surface cursor-pointer">
              <Menu className="w-5 h-5" />
            </div>
          </div>
        </div>
      </header>
      
      {/* Sections */}
      <MapHero />
      <ProcessFlow />
      <Footer />
    </main>
  )
}
