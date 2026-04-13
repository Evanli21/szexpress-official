'use client'

import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function MapHero() {
  const t = useTranslations('Index.hero')

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      />
      {/* Dark overlay to keep text readable */}
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="container mx-auto px-4 z-10 flex flex-col items-start justify-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 glass rounded-full text-accent text-sm font-semibold mb-6">
            <Globe className="w-4 h-4" />
            <span>{t('badge')}</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-white">{t('title')}</span>
            <br />
            <span className="text-accent italic">{t('subtitle')}</span>
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-lg">
            {t('description')}
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact"
              className="bg-accent text-black px-8 py-4 rounded-md font-bold hover:bg-white transition-colors"
            >
              {t('quote')}
            </a>
            <button className="glass text-white px-8 py-4 rounded-md font-bold hover:bg-surface transition-colors">
              {t('track')}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
