'use client'

import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function MapHero() {
  const t = useTranslations('Index.hero')

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
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
          <p className="text-xl text-gray-300 mb-10 max-w-lg">
            {t('description')}
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-accent text-black px-8 py-4 rounded-md font-bold hover:bg-white transition-colors">
              {t('quote')}
            </button>
            <button className="glass text-white px-8 py-4 rounded-md font-bold hover:bg-surface transition-colors">
              {t('track')}
            </button>
          </div>
        </motion.div>
        
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full aspect-square max-w-xl mx-auto glass rounded-full flex items-center justify-center p-8 overflow-hidden"
          >
            <svg viewBox="0 0 1000 600" className="w-full h-full opacity-60">
              <path
                d="M100 200 L150 180 L200 150 L250 140 L300 150 L350 180 L400 200 L450 180 L500 150 L550 140 L600 150 L650 180 L700 200"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="10"
              />
              <circle cx="780" cy="300" r="10" fill="#FF9F1C" />
              <motion.path
                d="M780 300 Q600 150 400 250"
                fill="none"
                stroke="#FF9F1C"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.path
                d="M780 300 Q900 150 950 250"
                fill="none"
                stroke="#FF9F1C"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.5, delay: 0.5, repeat: Infinity }}
              />
              <motion.path
                d="M780 300 Q850 450 750 550"
                fill="none"
                stroke="#FF9F1C"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, delay: 1, repeat: Infinity }}
              />
            </svg>
          </motion.div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-accent/20 blur-[120px] rounded-full -z-10" />
        </div>
      </div>
    </section>
  )
}
