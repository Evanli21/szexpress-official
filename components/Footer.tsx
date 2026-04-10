'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Send, Phone, Mail } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('Index.footer')

  return (
    <footer className="py-20 border-t border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold mb-4">szexpress.org</h3>
            <p className="text-gray-400 max-w-sm mb-8">
              {t('description')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="flex items-center gap-2 text-white hover:text-accent transition-colors">
                <Mail className="w-5 h-5" />
                <span>support@szexpress.org</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-white hover:text-accent transition-colors">
                <Phone className="w-5 h-5" />
                <span>+86 123 456 7890</span>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-semibold mb-2">{t('connect')}</h4>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-3 bg-[#07C160] hover:bg-opacity-80 text-white px-6 py-3 rounded-full font-bold transition-all transform hover:scale-105">
                <MessageCircle className="w-5 h-5" />
                <span>{t('wechat')}</span>
              </button>
              <button className="flex items-center gap-3 bg-[#0088CC] hover:bg-opacity-80 text-white px-6 py-3 rounded-full font-bold transition-all transform hover:scale-105">
                <Send className="w-5 h-5" />
                <span>{t('telegram')}</span>
              </button>
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
    </footer>
  )
}
