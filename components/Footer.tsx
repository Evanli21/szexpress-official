'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Send, X, BookOpen, ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import { useState } from 'react'
import Link from 'next/link'

export default function Footer() {
  const t = useTranslations('Index.footer')
  const locale = useLocale()
  const [showWeChat, setShowWeChat] = useState(false)
  const [showGuides, setShowGuides] = useState(false)

  const qrCodeUrl = "/wechat-qr.png"

  // Routes data driven by translations
  const routes = t.raw('guidesModal.routes') as Array<{
    flag: string
    title: string
    desc: string
    path: string
  }>

  return (
    <footer id="contact" className="py-20 border-t border-border bg-background relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold mb-4">szexpress.org</h3>
            <p className="text-gray-400 max-w-sm mb-8">
              {t('description')}
            </p>
          </div>
          
          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-semibold mb-2">{t('connect')}</h4>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setShowWeChat(true)}
                className="flex items-center gap-3 bg-[#07C160] hover:bg-opacity-80 text-white px-6 py-3 rounded-full font-bold transition-all transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t('wechat')}</span>
              </button>
              <a 
                href="https://t.me/bayc2983laowangtou" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#0088CC] hover:bg-opacity-80 text-white px-6 py-3 rounded-full font-bold transition-all transform hover:scale-105"
              >
                <Send className="w-5 h-5" />
                <span>{t('telegram')}</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>© 2026 szexpress.org. All Rights Reserved.</p>
          <div className="flex gap-8 flex-wrap justify-center">
            <a href="#" className="hover:text-white">{t('privacy')}</a>
            <a href="#" className="hover:text-white">{t('terms')}</a>
            <a href="#" className="hover:text-white">{t('track')}</a>
            {/* 指南入口 — 单一按钮，点击展开弹窗 */}
            <button
              onClick={() => setShowGuides(true)}
              className="flex items-center gap-1 hover:text-accent transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              {t('guides')}
            </button>
          </div>
        </div>
      </div>

      {/* Guides Hub Modal */}
      <AnimatePresence>
        {showGuides && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowGuides(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-surface border border-border/50 p-8 rounded-2xl max-w-lg w-full shadow-2xl"
            >
              <button
                onClick={() => setShowGuides(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-6">
                <h4 className="text-2xl font-bold text-white mb-2">{t('guidesModal.title')}</h4>
                <p className="text-gray-400 text-sm">{t('guidesModal.subtitle')}</p>
              </div>

              {/* Route Cards Grid — 2列，未来加更多自动换行 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {routes.map((route) => (
                  <Link
                    key={route.path}
                    href={`/${locale}/guide/${route.path}`}
                    onClick={() => setShowGuides(false)}
                    className="group flex flex-col gap-2 bg-background border border-border hover:border-accent rounded-xl p-5 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-3xl">{route.flag}</span>
                      <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-white font-semibold text-sm">{route.title}</p>
                    <p className="text-gray-400 text-xs leading-relaxed">{route.desc}</p>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* WeChat Modal */}
      <AnimatePresence>
        {showWeChat && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowWeChat(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-surface border border-border/50 p-8 rounded-2xl max-w-sm w-full shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setShowWeChat(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="text-center">
                <h4 className="text-2xl font-bold mb-2 text-white">Scan to Chat</h4>
                <p className="text-gray-400 text-sm mb-6">Connect with our logistics expert via WeChat (ID: Cigarlogs)</p>
                <div className="bg-white p-4 rounded-xl inline-block shadow-inner mb-2">
                  <img 
                    src={qrCodeUrl} 
                    alt="WeChat QR Code" 
                    className="w-64 h-64 object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  )
}
