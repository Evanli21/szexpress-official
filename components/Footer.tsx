'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Send, Phone, Mail, X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

export default function Footer() {
  const t = useTranslations('Index.footer')
  const [showWeChat, setShowWeChat] = useState(false)

  const qrCodeUrl = "/wechat-qr.png"

  return (
    <footer className="py-20 border-t border-border bg-background relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold mb-4">szexpress.org</h3>
            <p className="text-gray-400 max-w-sm mb-8">
              {t('description')}
            </p>
            <div className="flex gap-4">
              <a href="mailto:support@szexpress.org" className="flex items-center gap-2 text-white hover:text-accent transition-colors">
                <Mail className="w-5 h-5" />
                <span>support@szexpress.org</span>
              </a>
              <a href="tel:+861234567890" className="flex items-center gap-2 text-white hover:text-accent transition-colors">
                <Phone className="w-5 h-5" />
                <span>+86 123 456 7890</span>
              </a>
            </div>
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
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">{t('privacy')}</a>
            <a href="#" className="hover:text-white">{t('terms')}</a>
            <a href="#" className="hover:text-white">{t('track')}</a>
          </div>
        </div>
      </div>

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
