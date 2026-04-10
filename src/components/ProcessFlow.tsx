'use client'

import { motion } from 'framer-motion'
import { PackageSearch, FileCheck, Plane, Building2, MapPin } from 'lucide-react'
import { useTranslations } from 'next-intl'

const icons = [PackageSearch, FileCheck, Plane, Building2, MapPin]

export default function ProcessFlow() {
  const t = useTranslations('Index.process')
  
  const stepsKeys = ['collection', 'clearance', 'transport', 'distribution', 'delivery']

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('title')}</h2>
          <p className="text-gray-400">{t('subtitle')}</p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 z-0" />
          
          {stepsKeys.map((key, index) => {
            const Icon = icons[index]
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 glass rounded-full flex items-center justify-center border-2 border-border mb-6 group hover:border-accent transition-colors">
                    <Icon className="w-8 h-8 text-gray-400 group-hover:text-accent transition-colors" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-1">{t(`steps.${key}.title`)}</h3>
                    <p className="text-sm text-gray-500 max-w-[200px] mx-auto">{t(`steps.${key}.desc`)}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
      <div className="absolute top-1/2 left-0 w-1/4 h-full bg-accent/5 blur-[100px] -z-10" />
    </section>
  )
}
