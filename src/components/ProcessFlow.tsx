'use client'

import { motion } from 'framer-motion'
import { PackageSearch, FileCheck, Plane, Building2, MapPin } from 'lucide-react'

const steps = [
  {
    title: 'Cargo Collection',
    titleCn: '货物集货',
    desc: 'Nationwide efficient pick-up and consolidation.',
    icon: PackageSearch,
  },
  {
    title: 'Customs Clearance',
    titleCn: '报关安检',
    desc: 'Expert handling of export procedures and documentation.',
    icon: FileCheck,
  },
  {
    title: 'Mainline Transport',
    titleCn: '干线运输',
    desc: 'Scheduled air and sea routes for reliable delivery.',
    icon: Plane,
  },
  {
    title: 'Distribution',
    titleCn: '到站分拨',
    desc: 'Quick sorting and handling at overseas hubs.',
    icon: Building2,
  },
  {
    title: 'Final Delivery',
    titleCn: '末端配送',
    desc: 'Door-to-door delivery with real-time tracking.',
    icon: MapPin,
  },
]

export default function ProcessFlow() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Logistics Process</h2>
          <p className="text-gray-400">Our 5-step end-to-end logistics cycle for a seamless experience.</p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 z-0" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 glass rounded-full flex items-center justify-center border-2 border-border mb-6 group hover:border-accent transition-colors">
                  <step.icon className="w-8 h-8 text-gray-400 group-hover:text-accent transition-colors" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                  <span className="text-accent text-sm mb-4 block font-semibold">{step.titleCn}</span>
                  <p className="text-sm text-gray-500 max-w-[200px] mx-auto">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-1/4 h-full bg-accent/5 blur-[100px] -z-10" />
    </section>
  )
}
