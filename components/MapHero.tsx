'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Globe, X, Bot } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

export default function MapHero() {
  const t = useTranslations('Index.hero')
  const [showPayModal, setShowPayModal] = useState(false)
  const [showAgentModal, setShowAgentModal] = useState(false)

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
            <button
              onClick={() => setShowPayModal(true)}
              className="bg-accent text-black px-8 py-4 rounded-md font-bold hover:bg-white transition-colors"
            >
              {t('pay')}
            </button>
            <button
              onClick={() => setShowAgentModal(true)}
              className="flex items-center gap-2 glass text-white px-8 py-4 rounded-md font-bold hover:bg-surface transition-colors border border-accent/50"
            >
              <Bot className="w-5 h-5 text-accent" />
              {t('agent')}
            </button>
          </div>
        </motion.div>
      </div>

      {/* 一键部署 Agent 弹窗 */}
      <AnimatePresence>
        {showAgentModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={() => setShowAgentModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 30 }}
              transition={{ duration: 0.3 }}
              className="relative bg-[#0d1117] border border-accent/30 rounded-2xl p-10 max-w-md mx-4 text-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowAgentModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="text-accent text-4xl mb-4">🤖</div>
              <div className="border border-accent/40 rounded-xl p-5 mb-6 text-left">
                <h2 className="text-xl font-bold text-white mb-3">{t('agentModal.title')}</h2>
                <p className="text-sm text-gray-300 leading-relaxed">{t('agentModal.desc')}</p>
              </div>
              <button className="w-full bg-accent text-black font-bold py-4 rounded-xl hover:bg-white transition-colors text-base">
                {t('agentModal.cta')}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 跨境收款弹窗 */}
      <AnimatePresence>
        {showPayModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={() => setShowPayModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 30 }}
              transition={{ duration: 0.3 }}
              className="relative bg-[#0d1117] border border-accent/30 rounded-2xl p-10 max-w-md mx-4 text-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowPayModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="text-accent text-4xl mb-4">💳</div>
              {/* 上方：标题 + 提示文字 */}
              <div className="border border-accent/40 rounded-xl p-5 mb-6 text-left">
                <h2 className="text-xl font-bold text-white mb-3">{t('payModal.title')}</h2>
                <p className="text-sm text-gray-300 leading-relaxed">{t('payModal.line1')}</p>
                <p className="text-sm text-gray-300 leading-relaxed">{t('payModal.line2')}</p>
                <p className="text-sm text-gray-300 leading-relaxed">{t('payModal.line3')}</p>
              </div>
              {/* 下方：开通按钮 */}
              <button className="w-full bg-accent text-black font-bold py-4 rounded-xl hover:bg-white transition-colors text-base">
                {t('payModal.cta')}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
