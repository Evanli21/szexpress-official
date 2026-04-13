'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { ArrowLeft, Plane, Ship, Clock, DollarSign, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react'

const content = {
  zh: {
    back: '返回首页',
    badge: '深圳 → 越南 | 专线指南',
    title: '中越物流专线指南',
    subtitle: '2026年最全面的中国到越南货运指南，涵盖空运、海运、时效、费用及注意事项。',
    updated: '最后更新：2026年4月',
    intro: {
      title: '什么是中越物流专线？',
      body: '中越物流专线是指从中国（以深圳为主要货源地）直达越南（河内、胡志明市等主要城市）的专属货运通道。相比传统国际快递，专线物流具备价格透明、时效稳定、支持大货和杂货等显著优势，是跨境电商卖家和贸易企业的首选方案。'
    },
    modes: {
      title: '运输方式对比',
      air: {
        title: '空运专线',
        desc: '适合小批量、高价值、时效要求高的货物。深圳直飞河内/胡志明市，全程3-7个工作日。',
        pros: ['时效快，3-7个工作日', '适合电商小包、样品', '安全性高，货损率低'],
        cons: ['费用相对较高', '单件重量限制'],
        time: '3-7 工作日',
        price: '按重量计费'
      },
      sea: {
        title: '海运专线',
        desc: '适合大批量、重货、体积货。整柜（FCL）或拼柜（LCL）均可，性价比最高。',
        pros: ['费用低，适合大货', '整柜/拼柜灵活选择', '承重无限制'],
        cons: ['时效较长，15-25天', '受天气和港口因素影响'],
        time: '15-25 天',
        price: '按体积/重量计费'
      }
    },
    routes: {
      title: '主要运输路线',
      items: [
        { from: '深圳', to: '河内 (HAN)', air: '3-5天', sea: '15-20天' },
        { from: '深圳', to: '胡志明市 (SGN)', air: '4-7天', sea: '18-25天' },
        { from: '深圳', to: '岘港 (DAD)', air: '5-7天', sea: '20-25天' },
      ]
    },
    customs: {
      title: '清关注意事项',
      items: [
        '越南进口关税根据商品HS编码不同而差异较大，建议提前确认税率。',
        '商业发票（Commercial Invoice）和装箱单（Packing List）是必备单据。',
        '部分商品需要越南进口许可证，如食品、化妆品、电子产品等。',
        '越南海关对申报价值审核较严，建议据实申报，避免扣货风险。',
        'SZ Express 提供专业报关辅助服务，协助您准备齐全单据。'
      ]
    },
    faq: {
      title: '常见问题',
      items: [
        {
          q: '从深圳发货到越南需要多长时间？',
          a: '空运专线一般3-7个工作日到达，海运拼柜约15-25天，整柜约15-20天。具体时效受清关、节假日等因素影响。'
        },
        {
          q: '中越物流专线可以寄什么货物？',
          a: '可寄服装、电子产品、日用品、机械配件、食品（需许可证）等。危险品、仿牌商品不在承运范围内。'
        },
        {
          q: '费用怎么计算？',
          a: '空运按实重或体积重（取大值）计费，海运按CBM（立方米）或重量计费。联系SZ Express获取即时报价。'
        },
        {
          q: 'SZ Express 支持门到门服务吗？',
          a: '支持。从深圳上门提货，到越南目的地送货入仓或上门，全程一站式服务。'
        },
        {
          q: '如何追踪我的货物？',
          a: '发货后我们会提供运单号，您可通过微信或Telegram联系我们的客服实时查询货物状态。'
        }
      ]
    },
    cta: {
      title: '准备好开始发货了吗？',
      desc: '联系SZ Express获取免费报价，我们的专线顾问将在24小时内回复。',
      wechat: '微信咨询',
      telegram: 'Telegram咨询',
      email: '发送邮件'
    }
  },
  en: {
    back: 'Back to Home',
    badge: 'Shenzhen → Vietnam | Shipping Guide',
    title: 'China to Vietnam Freight Guide',
    subtitle: 'The most comprehensive 2026 guide to shipping from China to Vietnam — covering air freight, sea freight, transit time, costs, and customs tips.',
    updated: 'Last updated: April 2026',
    intro: {
      title: 'What is a China-Vietnam Special Line?',
      body: 'A China-Vietnam special line is a dedicated freight route from China (primarily Shenzhen) to major Vietnamese cities (Hanoi, Ho Chi Minh City, etc.). Compared to standard international express, special line freight offers transparent pricing, stable transit times, and supports both small parcels and bulk cargo — making it the preferred choice for cross-border e-commerce sellers and trading companies.'
    },
    modes: {
      title: 'Shipping Methods Compared',
      air: {
        title: 'Air Freight',
        desc: 'Ideal for small, high-value, or time-sensitive shipments. Direct flights from Shenzhen to Hanoi/Ho Chi Minh City. Transit: 3-7 business days.',
        pros: ['Fast: 3-7 business days', 'Great for e-commerce parcels and samples', 'High security, low damage rate'],
        cons: ['Higher cost', 'Weight restrictions per piece'],
        time: '3-7 Business Days',
        price: 'Charged by weight'
      },
      sea: {
        title: 'Sea Freight',
        desc: 'Ideal for large volumes and heavy cargo. Available as FCL (Full Container Load) or LCL (Less than Container Load) — the most cost-effective option.',
        pros: ['Low cost for bulk cargo', 'Flexible FCL/LCL options', 'No weight limit'],
        cons: ['Longer transit: 15-25 days', 'Subject to weather and port conditions'],
        time: '15-25 Days',
        price: 'Charged by CBM/weight'
      }
    },
    routes: {
      title: 'Key Shipping Routes',
      items: [
        { from: 'Shenzhen', to: 'Hanoi (HAN)', air: '3-5 days', sea: '15-20 days' },
        { from: 'Shenzhen', to: 'Ho Chi Minh City (SGN)', air: '4-7 days', sea: '18-25 days' },
        { from: 'Shenzhen', to: 'Da Nang (DAD)', air: '5-7 days', sea: '20-25 days' },
      ]
    },
    customs: {
      title: 'Customs & Clearance Tips',
      items: [
        'Vietnam import duties vary significantly by HS code — confirm the applicable tax rate in advance.',
        'A Commercial Invoice and Packing List are mandatory documents for all shipments.',
        'Some goods require a Vietnamese import license (e.g. food, cosmetics, electronics).',
        'Vietnamese customs closely scrutinizes declared values — always declare accurately to avoid holds.',
        'SZ Express provides professional customs clearance support to help you prepare all required documents.'
      ]
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          q: 'How long does shipping from Shenzhen to Vietnam take?',
          a: 'Air freight typically takes 3-7 business days. LCL sea freight takes around 15-25 days, and FCL around 15-20 days. Actual times may vary due to customs and holidays.'
        },
        {
          q: 'What goods can be shipped via the China-Vietnam special line?',
          a: 'Clothing, electronics, daily goods, machinery parts, food (with permits), and more. Dangerous goods and counterfeit products are excluded.'
        },
        {
          q: 'How are shipping costs calculated?',
          a: 'Air freight is charged by actual weight or volumetric weight (whichever is greater). Sea freight is charged by CBM or weight. Contact SZ Express for an instant quote.'
        },
        {
          q: 'Does SZ Express offer door-to-door service?',
          a: 'Yes. We provide door-to-door service from pickup in Shenzhen to warehouse or doorstep delivery in Vietnam — a complete one-stop solution.'
        },
        {
          q: 'How can I track my shipment?',
          a: 'After dispatch, we provide a tracking number. You can contact our customer service via WeChat or Telegram for real-time updates on your cargo status.'
        }
      ]
    },
    cta: {
      title: 'Ready to ship to Vietnam?',
      desc: 'Contact SZ Express for a free quote. Our logistics consultants will respond within 24 hours.',
      wechat: 'WeChat Inquiry',
      telegram: 'Telegram Inquiry',
      email: 'Send Email'
    }
  }
}

export default function ChinaVietnamGuidePage() {
  const locale = useLocale()
  const t = (content as any)[locale] || content.en

  return (
    <main className="min-h-screen bg-background text-white">
      {/* Header */}
      <div className="bg-surface border-b border-border sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link href={`/${locale}`} className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" />
            {t.back}
          </Link>
          <span className="text-gray-600">|</span>
          <span className="text-accent text-sm font-semibold">{t.badge}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">

        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16">
          <p className="text-gray-400 text-sm mb-3">{t.updated}</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">{t.title}</h1>
          <p className="text-xl text-gray-300 leading-relaxed">{t.subtitle}</p>
        </motion.div>

        {/* Intro */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-16">
          <h2 className="text-2xl font-bold text-accent mb-4">{t.intro.title}</h2>
          <p className="text-gray-300 leading-relaxed text-lg">{t.intro.body}</p>
        </motion.section>

        {/* Shipping Modes */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">{t.modes.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Air */}
            <div className="bg-surface border border-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-accent/10 p-2 rounded-lg"><Plane className="w-6 h-6 text-accent" /></div>
                <h3 className="text-xl font-bold text-white">{t.modes.air.title}</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">{t.modes.air.desc}</p>
              <div className="flex gap-4 mb-4">
                <div className="text-center">
                  <div className="flex items-center gap-1 text-accent text-sm font-semibold"><Clock className="w-4 h-4" />{t.modes.air.time}</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center gap-1 text-accent text-sm font-semibold"><DollarSign className="w-4 h-4" />{t.modes.air.price}</div>
                </div>
              </div>
              <ul className="space-y-2 mb-3">
                {t.modes.air.pros.map((p: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />{p}</li>
                ))}
              </ul>
              <ul className="space-y-2">
                {t.modes.air.cons.map((c: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-400"><AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />{c}</li>
                ))}
              </ul>
            </div>
            {/* Sea */}
            <div className="bg-surface border border-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-accent/10 p-2 rounded-lg"><Ship className="w-6 h-6 text-accent" /></div>
                <h3 className="text-xl font-bold text-white">{t.modes.sea.title}</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">{t.modes.sea.desc}</p>
              <div className="flex gap-4 mb-4">
                <div className="flex items-center gap-1 text-accent text-sm font-semibold"><Clock className="w-4 h-4" />{t.modes.sea.time}</div>
                <div className="flex items-center gap-1 text-accent text-sm font-semibold"><DollarSign className="w-4 h-4" />{t.modes.sea.price}</div>
              </div>
              <ul className="space-y-2 mb-3">
                {t.modes.sea.pros.map((p: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />{p}</li>
                ))}
              </ul>
              <ul className="space-y-2">
                {t.modes.sea.cons.map((c: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-400"><AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Routes Table */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">{t.routes.title}</h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-surface">
                <tr>
                  <th className="px-6 py-4 text-left text-gray-400">出发地 / Origin</th>
                  <th className="px-6 py-4 text-left text-gray-400">目的地 / Destination</th>
                  <th className="px-6 py-4 text-left text-accent"><Plane className="inline w-4 h-4 mr-1" />空运</th>
                  <th className="px-6 py-4 text-left text-accent"><Ship className="inline w-4 h-4 mr-1" />海运</th>
                </tr>
              </thead>
              <tbody>
                {t.routes.items.map((row: any, i: number) => (
                  <tr key={i} className="border-t border-border hover:bg-surface/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">{row.from}</td>
                    <td className="px-6 py-4 text-white">{row.to}</td>
                    <td className="px-6 py-4 text-gray-300">{row.air}</td>
                    <td className="px-6 py-4 text-gray-300">{row.sea}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Customs */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">{t.customs.title}</h2>
          <div className="space-y-3">
            {t.customs.items.map((item: string, i: number) => (
              <div key={i} className="flex items-start gap-3 bg-surface border border-border rounded-xl px-5 py-4">
                <span className="text-accent font-bold text-sm shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">{t.faq.title}</h2>
          <div className="space-y-4">
            {t.faq.items.map((item: any, i: number) => (
              <div key={i} className="bg-surface border border-border rounded-xl p-6">
                <h3 className="text-white font-semibold mb-2">Q: {item.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">A: {item.a}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
          <div className="bg-accent/10 border border-accent/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">{t.cta.title}</h2>
            <p className="text-gray-300 mb-8">{t.cta.desc}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://t.me/bayc2983laowangtou" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-accent text-black font-bold px-6 py-3 rounded-lg hover:bg-white transition-colors">
                <MessageCircle className="w-5 h-5" />
                {t.cta.telegram}
              </a>
              <a href="mailto:Business@szexpress.org"
                className="flex items-center gap-2 bg-surface border border-accent text-accent font-bold px-6 py-3 rounded-lg hover:bg-accent hover:text-black transition-colors">
                {t.cta.email}
              </a>
            </div>
          </div>
        </motion.section>

      </div>
    </main>
  )
}
