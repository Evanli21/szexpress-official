'use client'

import MapHero from '@/components/MapHero'
import ProcessFlow from '@/components/ProcessFlow'
import Footer from '@/components/Footer'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, Search, ChevronDown } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useState, useRef, useEffect } from 'react'

export default function Home() {
  const t = useTranslations('Index')
  const [servicesOpen, setServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const serviceItems = [
    { key: 'logistics', icon: '🚢' },
    { key: 'payment',  icon: '💳' },
    { key: 'agent',    icon: '🤖' },
    { key: 'token',    icon: '⚡' },
  ] as const

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

            {/* Services dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setServicesOpen(v => !v)}
                className="flex items-center gap-1 hover:text-accent transition-colors focus:outline-none"
              >
                {t('nav.services')}
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-64 flex flex-col gap-2 p-3 rounded-xl bg-[#1a1a1a] border border-white/10 shadow-2xl z-50"
                  >
                    {serviceItems.map(({ key, icon }) => (
                      <button
                        key={key}
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center gap-3 w-full px-4 py-3 rounded-lg bg-accent text-black font-bold text-sm text-left hover:brightness-110 active:scale-95 transition-all"
                      >
                        <span className="text-base">{icon}</span>
                        <span>{t(`nav.servicesMenu.${key}`)}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#" className="hover:text-accent transition-colors">{t('nav.rates')}</a>
            <a href="#" className="hover:text-accent transition-colors">{t('nav.tracking')}</a>
            <a href="#contact" className="hover:text-accent transition-colors">{t('nav.contact')}</a>
          </nav>
          <div className="flex items-center gap-6">
            <LanguageSwitcher />
            
            <Search className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            <div className="w-8 h-8 flex items-center justify-center glass rounded-md hover:bg-surface cursor-pointer">
              <Menu className="w-5 h-5 text-white" />
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
