'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { ArrowLeft, Plane, Ship, Clock, DollarSign, CheckCircle, AlertCircle, MessageCircle, Train } from 'lucide-react'

const content = {
  zh: {
    back: '返回首页',
    badge: '深圳 → 俄罗斯 | 专线指南',
    title: '中俄物流专线指南',
    subtitle: '2026年最全面的中国到俄罗斯货运指南，涵盖空运、海运、铁路、时效、费用及清关注意事项。',
    updated: '最后更新：2026年4月',
    intro: {
      title: '什么是中俄物流专线？',
      body: '中俄物流专线是指从中国（以深圳为主要货源地）直达俄罗斯（莫斯科、圣彼得堡等主要城市）的专属货运通道。受国际形势影响，中俄之间已形成多条成熟的替代物流走廊，包括经哈萨克斯坦的陆运专线、中欧班列（铁路）以及空运专线，是对俄贸易企业和跨境卖家的核心物流选择。'
    },
    modes: {
      title: '运输方式对比',
      air: {
        title: '空运专线',
        desc: '适合高价值、紧急货物。深圳经中转直达莫斯科/圣彼得堡，全程7-14个工作日。',
        pros: ['时效最快，7-14个工作日', '适合电子产品、高价值货物', '安全性高，货损率低'],
        cons: ['费用最高', '受航班和制裁影响，航线较少'],
        time: '7-14 工作日',
        price: '按重量计费'
      },
      rail: {
        title: '铁路专线（中欧班列）',
        desc: '中俄主流运输方式。经满洲里或阿拉山口出境，适合中大型批量货物，性价比最优。',
        pros: ['价格适中，优于空运', '运力稳定，不受海运港口影响', '支持整柜/拼柜'],
        cons: ['时效20-35天', '目的地以莫斯科为主'],
        time: '20-35 天',
        price: '按重量/体积计费'
      },
      sea: {
        title: '海运专线',
        desc: '适合超大批量货物。经远东港口（海参崴/符拉迪沃斯托克）或绕道其他港口进入俄罗斯。',
        pros: ['费用最低，适合超大货', '承重无限制'],
        cons: ['时效最长，35-55天', '受制裁影响，部分航线受限'],
        time: '35-55 天',
        price: '按CBM/重量计费'
      }
    },
    routes: {
      title: '主要运输路线',
      items: [
        { from: '深圳', to: '莫斯科 (SVO)', air: '7-10天', rail: '20-30天', sea: '40-55天' },
        { from: '深圳', to: '圣彼得堡 (LED)', air: '10-14天', rail: '25-35天', sea: '45-55天' },
        { from: '深圳', to: '叶卡捷琳堡', air: '10-14天', rail: '22-32天', sea: '45-55天' },
      ]
    },
    customs: {
      title: '清关注意事项',
      items: [
        '俄罗斯海关对商品分类（HS编码）审查严格，建议提前做好品类归类，避免扣关。',
        '个人清关（白清）与商业清关税率差异巨大，B2C货物需特别注意单票价值限额（通常€200以内）。',
        '商业发票、装箱单、货物照片是基本必备单据，部分商品还需合规证书。',
        '俄罗斯对部分进口商品实施配额或许可证制度，如食品、化妆品、电子产品等需提前核查。',
        'SZ Express 提供专业对俄报关辅助服务，协助您规避清关风险。'
      ]
    },
    faq: {
      title: '常见问题',
      items: [
        {
          q: '从深圳发货到俄罗斯需要多长时间？',
          a: '空运最快7-14工作日；铁路（中欧班列）20-35天；海运（经远东港口）35-55天。实际时效受清关、节假日及路线因素影响。'
        },
        {
          q: '中俄专线可以寄什么货物？',
          a: '可寄服装、电子产品、日用百货、机械配件、建材等。危险品、受制裁商品及仿牌产品不在承运范围内。'
        },
        {
          q: '对俄出口受制裁影响大吗？',
          a: '目前中俄之间贸易量持续增长，但部分双用途商品（如特定电子元器件）受出口管制。SZ Express 可协助您评估货物合规性。'
        },
        {
          q: '费用怎么计算？',
          a: '空运按实重或体积重（取大值）计费；铁路/海运按CBM或重量计费。联系SZ Express获取即时报价。'
        },
        {
          q: 'SZ Express 支持对俄门到门服务吗？',
          a: '支持。从深圳上门提货，到俄罗斯目的地城市（莫斯科、圣彼得堡等）送货入仓或上门，全程一站式服务。'
        }
      ]
    },
    cta: {
      title: '准备好向俄罗斯发货了吗？',
      desc: '联系SZ Express获取免费报价，我们的中俄专线顾问将在24小时内回复。',
      telegram: 'Telegram咨询',
      email: '发送邮件'
    }
  },
  en: {
    back: 'Back to Home',
    badge: 'Shenzhen → Russia | Shipping Guide',
    title: 'China to Russia Freight Guide',
    subtitle: 'The most comprehensive 2026 guide to shipping from China to Russia — covering air freight, rail (China-Europe Express), sea freight, transit times, costs, and customs tips.',
    updated: 'Last updated: April 2026',
    intro: {
      title: 'What is a China-Russia Special Line?',
      body: 'A China-Russia special line is a dedicated freight corridor from China (primarily Shenzhen) to major Russian cities (Moscow, St. Petersburg, etc.). Due to shifts in the international logistics landscape, multiple mature alternative corridors have emerged, including land routes via Kazakhstan, China-Europe Railway Express (rail), and air freight lines — making them the go-to logistics solutions for businesses trading with Russia.'
    },
    modes: {
      title: 'Shipping Methods Compared',
      air: {
        title: 'Air Freight',
        desc: 'Best for high-value or urgent cargo. Routed from Shenzhen via transit hubs to Moscow/St. Petersburg. Transit: 7-14 business days.',
        pros: ['Fastest option: 7-14 business days', 'Ideal for electronics and high-value goods', 'High security, low cargo damage rate'],
        cons: ['Highest cost', 'Fewer direct routes due to airspace restrictions'],
        time: '7-14 Business Days',
        price: 'Charged by weight'
      },
      rail: {
        title: 'Railway (China-Europe Express)',
        desc: 'The most popular China-Russia freight mode. Departs via Manzhouli or Alashankou border crossings. Best cost-efficiency for medium to large cargo.',
        pros: ['Mid-range pricing — much cheaper than air', 'Stable capacity, unaffected by port congestion', 'Supports FCL and LCL'],
        cons: ['Transit: 20-35 days', 'Primarily serves Moscow hub'],
        time: '20-35 Days',
        price: 'Charged by weight/CBM'
      },
      sea: {
        title: 'Sea Freight',
        desc: 'Best for very large cargo volumes. Routed via Far East ports (Vladivostok) or alternative routes into Russia.',
        pros: ['Lowest cost for bulk cargo', 'No weight restrictions'],
        cons: ['Longest transit: 35-55 days', 'Some routes affected by sanctions'],
        time: '35-55 Days',
        price: 'Charged by CBM/weight'
      }
    },
    routes: {
      title: 'Key Shipping Routes',
      items: [
        { from: 'Shenzhen', to: 'Moscow (SVO)', air: '7-10 days', rail: '20-30 days', sea: '40-55 days' },
        { from: 'Shenzhen', to: 'St. Petersburg (LED)', air: '10-14 days', rail: '25-35 days', sea: '45-55 days' },
        { from: 'Shenzhen', to: 'Yekaterinburg', air: '10-14 days', rail: '22-32 days', sea: '45-55 days' },
      ]
    },
    customs: {
      title: 'Customs & Clearance Tips',
      items: [
        'Russian customs strictly scrutinizes HS code classification — ensure your goods are correctly categorized to avoid holds.',
        'Personal (informal) vs. commercial clearance tax rates differ significantly — B2C shipments must be mindful of per-parcel value limits (usually under €200).',
        'A Commercial Invoice, Packing List, and cargo photos are the baseline documents; some goods require compliance certificates.',
        'Russia maintains quotas or import licenses for certain categories (food, cosmetics, electronics) — verify requirements before shipping.',
        'SZ Express provides professional Russia customs clearance support to help you minimize risk.'
      ]
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          q: 'How long does shipping from Shenzhen to Russia take?',
          a: 'Air freight: 7-14 business days. Rail (China-Europe Express): 20-35 days. Sea freight (via Far East ports): 35-55 days. Actual times may vary due to customs and holidays.'
        },
        {
          q: 'What goods can be shipped to Russia via special line?',
          a: 'Clothing, electronics, daily goods, machinery parts, building materials, and more. Dangerous goods, sanctioned products, and counterfeit goods are excluded.'
        },
        {
          q: 'How do international sanctions affect China-Russia shipping?',
          a: 'China-Russia trade volumes continue to grow, but certain dual-use goods (e.g. specific electronics components) are subject to export controls. SZ Express can help you assess compliance for your cargo.'
        },
        {
          q: 'How are shipping costs calculated?',
          a: 'Air freight is charged by actual weight or volumetric weight (whichever is greater). Rail/sea freight is charged by CBM or weight. Contact SZ Express for an instant quote.'
        },
        {
          q: 'Does SZ Express offer door-to-door service to Russia?',
          a: 'Yes. We provide full door-to-door service from pickup in Shenzhen to warehouse or doorstep delivery in Russian cities (Moscow, St. Petersburg, etc.) — a complete one-stop solution.'
        }
      ]
    },
    cta: {
      title: 'Ready to ship to Russia?',
      desc: 'Contact SZ Express for a free quote. Our China-Russia specialists will respond within 24 hours.',
      telegram: 'Telegram Inquiry',
      email: 'Send Email'
    }
  },
  ru: {
    back: 'На главную',
    badge: 'Шэньчжэнь → Россия | Руководство по доставке',
    title: 'Грузоперевозки из Китая в Россию',
    subtitle: 'Полное руководство 2026 года по доставке товаров из Китая в Россию — авиа, ж/д (поезд Китай-Европа), морской фрахт, сроки, стоимость и таможенные советы.',
    updated: 'Последнее обновление: апрель 2026',
    intro: {
      title: 'Что такое специальная линия Китай-Россия?',
      body: 'Специальная линия Китай-Россия — это выделенный грузовой коридор из Китая (преимущественно из Шэньчжэня) в крупные города России (Москва, Санкт-Петербург и др.). В условиях изменений международной логистики сформировались несколько надёжных маршрутов: наземный через Казахстан, железнодорожный экспресс Китай-Европа и авиаперевозки — это основные логистические решения для бизнеса, торгующего с Россией.'
    },
    modes: {
      title: 'Сравнение способов доставки',
      air: {
        title: 'Авиаперевозки',
        desc: 'Лучший вариант для дорогостоящих или срочных грузов. Из Шэньчжэня через транзитные хабы до Москвы/Санкт-Петербурга. Срок: 7-14 рабочих дней.',
        pros: ['Самый быстрый: 7-14 рабочих дней', 'Идеально для электроники и ценных товаров', 'Высокая безопасность, низкий риск повреждений'],
        cons: ['Самая высокая стоимость', 'Меньше прямых рейсов из-за ограничений воздушного пространства'],
        time: '7-14 рабочих дней',
        price: 'По весу'
      },
      rail: {
        title: 'Ж/д экспресс (Китай-Европа)',
        desc: 'Самый популярный способ доставки из Китая в Россию. Через Маньчжурию или Алашанькоу. Оптимальное соотношение цены и качества для средних и крупных партий.',
        pros: ['Средняя цена — значительно дешевле авиа', 'Стабильная вместимость, не зависит от портовых задержек', 'Поддерживает FCL и LCL'],
        cons: ['Срок: 20-35 дней', 'Основной хаб — Москва'],
        time: '20-35 дней',
        price: 'По весу/объёму'
      },
      sea: {
        title: 'Морские перевозки',
        desc: 'Лучший вариант для очень крупных партий. Через порты Дальнего Востока (Владивосток) или альтернативные маршруты в Россию.',
        pros: ['Самая низкая стоимость для крупных грузов', 'Без ограничений по весу'],
        cons: ['Самый долгий срок: 35-55 дней', 'Часть маршрутов затронута санкциями'],
        time: '35-55 дней',
        price: 'По CBM/весу'
      }
    },
    routes: {
      title: 'Основные маршруты доставки',
      items: [
        { from: 'Шэньчжэнь', to: 'Москва (SVO)', air: '7-10 дней', rail: '20-30 дней', sea: '40-55 дней' },
        { from: 'Шэньчжэнь', to: 'Санкт-Петербург (LED)', air: '10-14 дней', rail: '25-35 дней', sea: '45-55 дней' },
        { from: 'Шэньчжэнь', to: 'Екатеринбург', air: '10-14 дней', rail: '22-32 дней', sea: '45-55 дней' },
      ]
    },
    customs: {
      title: 'Советы по таможенному оформлению',
      items: [
        'Российская таможня строго проверяет классификацию по кодам ТН ВЭД — убедитесь в правильной категоризации товаров, чтобы избежать задержек.',
        'Ставки таможенных пошлин для физических и юридических лиц существенно различаются — при B2C-поставках учитывайте лимит стоимости на одну посылку (как правило, до €200).',
        'Коммерческий инвойс, упаковочный лист и фотографии груза — базовые документы; для некоторых товаров требуются сертификаты соответствия.',
        'На ряд категорий товаров (продукты питания, косметика, электроника) в России действуют квоты или лицензионные требования — проверьте заранее.',
        'SZ Express оказывает профессиональную поддержку по таможенному оформлению для России и помогает минимизировать риски.'
      ]
    },
    faq: {
      title: 'Часто задаваемые вопросы',
      items: [
        {
          q: 'Сколько времени занимает доставка из Шэньчжэня в Россию?',
          a: 'Авиадоставка: 7-14 рабочих дней. Ж/д экспресс (Китай-Европа): 20-35 дней. Морской фрахт (через Дальний Восток): 35-55 дней. Фактические сроки могут варьироваться из-за таможни и праздников.'
        },
        {
          q: 'Какие товары можно отправить в Россию по специальной линии?',
          a: 'Одежда, электроника, товары повседневного спроса, запчасти, стройматериалы и многое другое. Опасные грузы, санкционные товары и контрафакт — не принимаются.'
        },
        {
          q: 'Как международные санкции влияют на доставку из Китая в Россию?',
          a: 'Объём торговли между Китаем и Россией продолжает расти, однако некоторые товары двойного назначения (например, отдельные электронные компоненты) подпадают под экспортный контроль. SZ Express поможет оценить соответствие вашего груза требованиям.'
        },
        {
          q: 'Как рассчитывается стоимость доставки?',
          a: 'Авиафрахт рассчитывается по фактическому или объёмному весу (берётся большее значение). Ж/д и морской фрахт — по CBM или весу. Свяжитесь с SZ Express для получения мгновенной цитаты.'
        },
        {
          q: 'Предоставляет ли SZ Express услугу доставки «от двери до двери» в Россию?',
          a: 'Да. Мы обеспечиваем полный цикл: забор груза в Шэньчжэне и доставка на склад или по адресу в городах России (Москва, Санкт-Петербург и др.) — комплексный сервис «под ключ».'
        }
      ]
    },
    cta: {
      title: 'Готовы отправить груз в Россию?',
      desc: 'Свяжитесь с SZ Express для получения бесплатного расчёта. Наши специалисты по линии Китай-Россия ответят в течение 24 часов.',
      telegram: 'Написать в Telegram',
      email: 'Отправить письмо'
    }
  }
}

export default function ChinaRussiaGuidePage() {
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

        {/* Shipping Modes — 3 columns for Russia (air + rail + sea) */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">{t.modes.title}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Air */}
            <div className="bg-surface border border-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-accent/10 p-2 rounded-lg"><Plane className="w-6 h-6 text-accent" /></div>
                <h3 className="text-lg font-bold text-white">{t.modes.air.title}</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">{t.modes.air.desc}</p>
              <div className="flex flex-col gap-2 mb-4">
                <div className="flex items-center gap-1 text-accent text-sm font-semibold"><Clock className="w-4 h-4" />{t.modes.air.time}</div>
                <div className="flex items-center gap-1 text-accent text-sm font-semibold"><DollarSign className="w-4 h-4" />{t.modes.air.price}</div>
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
            {/* Rail */}
            <div className="bg-surface border border-accent/40 rounded-2xl p-6 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-black text-xs font-bold px-3 py-1 rounded-full">推荐 / Recommended</div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-accent/10 p-2 rounded-lg"><Train className="w-6 h-6 text-accent" /></div>
                <h3 className="text-lg font-bold text-white">{t.modes.rail.title}</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">{t.modes.rail.desc}</p>
              <div className="flex flex-col gap-2 mb-4">
                <div className="flex items-center gap-1 text-accent text-sm font-semibold"><Clock className="w-4 h-4" />{t.modes.rail.time}</div>
                <div className="flex items-center gap-1 text-accent text-sm font-semibold"><DollarSign className="w-4 h-4" />{t.modes.rail.price}</div>
              </div>
              <ul className="space-y-2 mb-3">
                {t.modes.rail.pros.map((p: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />{p}</li>
                ))}
              </ul>
              <ul className="space-y-2">
                {t.modes.rail.cons.map((c: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-400"><AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />{c}</li>
                ))}
              </ul>
            </div>
            {/* Sea */}
            <div className="bg-surface border border-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-accent/10 p-2 rounded-lg"><Ship className="w-6 h-6 text-accent" /></div>
                <h3 className="text-lg font-bold text-white">{t.modes.sea.title}</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">{t.modes.sea.desc}</p>
              <div className="flex flex-col gap-2 mb-4">
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
                  <th className="px-6 py-4 text-left text-accent"><Train className="inline w-4 h-4 mr-1" />铁路</th>
                  <th className="px-6 py-4 text-left text-accent"><Ship className="inline w-4 h-4 mr-1" />海运</th>
                </tr>
              </thead>
              <tbody>
                {t.routes.items.map((row: any, i: number) => (
                  <tr key={i} className="border-t border-border hover:bg-surface/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">{row.from}</td>
                    <td className="px-6 py-4 text-white">{row.to}</td>
                    <td className="px-6 py-4 text-gray-300">{row.air}</td>
                    <td className="px-6 py-4 text-gray-300">{row.rail}</td>
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
