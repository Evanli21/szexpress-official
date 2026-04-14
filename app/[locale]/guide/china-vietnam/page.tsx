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
      origin: '出发地',
      destination: '目的地',
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
      origin: 'Origin',
      destination: 'Destination',
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
,
  vi: {
    back: 'Về trang chủ',
    badge: 'Thâm Quyến → Việt Nam | Hướng dẫn vận chuyển',
    title: 'Hướng dẫn vận chuyển Trung Quốc - Việt Nam',
    subtitle: 'Hướng dẫn toàn diện nhất năm 2026 về vận chuyển hàng hóa từ Trung Quốc sang Việt Nam — bao gồm hàng không, đường biển, thời gian, chi phí và lưu ý thông quan.',
    updated: 'Cập nhật lần cuối: Tháng 4/2026',
    intro: {
      title: 'Tuyến vận chuyển đặc biệt Trung-Việt là gì?',
      body: 'Tuyến vận chuyển đặc biệt Trung-Việt là hành lang vận chuyển hàng hóa chuyên dụng từ Trung Quốc (chủ yếu từ Thâm Quyến) đến các thành phố lớn của Việt Nam (Hà Nội, TP. Hồ Chí Minh...). So với chuyển phát quốc tế thông thường, vận tải đặc biệt có giá minh bạch, thời gian ổn định, hỗ trợ cả hàng nhỏ lẻ và hàng lớn.'
    },
    modes: {
      title: 'So sánh các phương thức vận chuyển',
      air: {
        title: 'Hàng không',
        desc: 'Phù hợp cho hàng nhỏ, giá trị cao hoặc cần giao nhanh. Bay thẳng từ Thâm Quyến đến Hà Nội/TP.HCM. Thời gian: 3-7 ngày làm việc.',
        pros: ['Nhanh nhất: 3-7 ngày làm việc', 'Phù hợp hàng TMĐT và mẫu', 'An toàn, tỷ lệ hư hỏng thấp'],
        cons: ['Chi phí cao hơn', 'Giới hạn trọng lượng mỗi kiện'],
        time: '3-7 ngày làm việc',
        price: 'Tính theo trọng lượng'
      },
      sea: {
        title: 'Đường biển',
        desc: 'Phù hợp cho hàng khối lớn, hàng nặng. Nguyên container (FCL) hoặc hàng lẻ (LCL) — tiết kiệm chi phí nhất.',
        pros: ['Chi phí thấp cho hàng lớn', 'Linh hoạt FCL/LCL', 'Không giới hạn trọng lượng'],
        cons: ['Thời gian dài hơn: 15-25 ngày', 'Phụ thuộc thời tiết và cảng'],
        time: '15-25 ngày',
        price: 'Tính theo CBM/trọng lượng'
      }
    },
    routes: {
      title: 'Các tuyến vận chuyển chính',
      origin: 'Điểm xuất phát',
      destination: 'Điểm đến',
      items: [
        { from: 'Thâm Quyến', to: 'Hà Nội (HAN)', air: '3-5 ngày', sea: '15-20 ngày' },
        { from: 'Thâm Quyến', to: 'TP. Hồ Chí Minh (SGN)', air: '4-7 ngày', sea: '18-25 ngày' },
        { from: 'Thâm Quyến', to: 'Đà Nẵng (DAD)', air: '5-7 ngày', sea: '20-25 ngày' },
      ]
    },
    customs: {
      title: 'Lưu ý thông quan',
      items: [
        'Thuế nhập khẩu Việt Nam khác nhau đáng kể theo mã HS — xác nhận mức thuế áp dụng trước.',
        'Hóa đơn thương mại và danh sách đóng gói là tài liệu bắt buộc cho tất cả lô hàng.',
        'Một số hàng hóa cần giấy phép nhập khẩu Việt Nam (thực phẩm, mỹ phẩm, điện tử...).',
        'Hải quan Việt Nam kiểm tra kỹ giá trị khai báo — luôn khai báo trung thực để tránh bị giữ hàng.',
        'SZ Express hỗ trợ thủ tục thông quan chuyên nghiệp, giúp bạn chuẩn bị đầy đủ hồ sơ.'
      ]
    },
    faq: {
      title: 'Câu hỏi thường gặp',
      items: [
        { q: 'Gửi hàng từ Thâm Quyến sang Việt Nam mất bao lâu?', a: 'Hàng không: 3-7 ngày làm việc. Đường biển LCL: 15-25 ngày, FCL: 15-20 ngày. Thực tế có thể thay đổi do thông quan và ngày lễ.' },
        { q: 'Có thể gửi hàng gì qua tuyến đặc biệt Trung-Việt?', a: 'Quần áo, điện tử, hàng tiêu dùng, phụ tùng máy móc, thực phẩm (cần giấy phép)... Hàng nguy hiểm và hàng giả không được chấp nhận.' },
        { q: 'Chi phí vận chuyển được tính như thế nào?', a: 'Hàng không tính theo trọng lượng thực hoặc thể tích (lấy giá trị lớn hơn). Đường biển tính theo CBM hoặc trọng lượng. Liên hệ SZ Express để báo giá ngay.' },
        { q: 'SZ Express có dịch vụ giao tận nơi không?', a: 'Có. Chúng tôi cung cấp dịch vụ từ cửa đến cửa: lấy hàng tại Thâm Quyến và giao đến kho hoặc địa chỉ tại Việt Nam.' },
        { q: 'Làm thế nào để theo dõi lô hàng của tôi?', a: 'Sau khi gửi hàng, chúng tôi cung cấp mã vận đơn. Bạn có thể liên hệ qua WeChat hoặc Telegram để cập nhật tình trạng hàng hóa theo thời gian thực.' }
      ]
    },
    cta: {
      title: 'Sẵn sàng gửi hàng sang Việt Nam?',
      desc: 'Liên hệ SZ Express để nhận báo giá miễn phí. Chuyên viên của chúng tôi sẽ phản hồi trong vòng 24 giờ.',
      wechat: 'Tư vấn WeChat',
      telegram: 'Tư vấn Telegram',
      email: 'Gửi Email'
    }
  },
  ko: {
    back: '홈으로 돌아가기',
    badge: '선전 → 베트남 | 배송 가이드',
    title: '중국-베트남 화물 운송 가이드',
    subtitle: '2026년 가장 완벽한 중국-베트남 화물 운송 가이드 — 항공, 해운, 운송 시간, 비용 및 통관 팁을 포함합니다.',
    updated: '마지막 업데이트: 2026년 4월',
    intro: {
      title: '중국-베트남 특수 노선이란?',
      body: '중국-베트남 특수 노선은 중국(주로 선전)에서 베트남 주요 도시(하노이, 호치민시 등)까지의 전용 화물 운송 통로입니다. 일반 국제 특급 배송에 비해 투명한 가격, 안정적인 운송 시간, 소량 및 대량 화물 지원이 특징입니다.'
    },
    modes: {
      title: '운송 방법 비교',
      air: {
        title: '항공 화물',
        desc: '소량, 고가 또는 긴급 화물에 적합합니다. 선전에서 하노이/호치민시까지 직항. 운송 기간: 3-7 영업일.',
        pros: ['가장 빠름: 3-7 영업일', '전자상거래 소포 및 샘플에 적합', '높은 안전성, 낮은 손상률'],
        cons: ['높은 비용', '개당 무게 제한'],
        time: '3-7 영업일',
        price: '무게 기준 요금'
      },
      sea: {
        title: '해상 화물',
        desc: '대량 및 중량 화물에 적합. FCL(전체 컨테이너) 또는 LCL(혼재 화물) 가능 — 가장 경제적인 옵션.',
        pros: ['대량 화물에 저렴한 비용', '유연한 FCL/LCL 옵션', '무게 제한 없음'],
        cons: ['긴 운송 시간: 15-25일', '날씨 및 항구 상황에 따라 달라질 수 있음'],
        time: '15-25일',
        price: 'CBM/무게 기준 요금'
      }
    },
    routes: {
      title: '주요 운송 노선',
      origin: '출발지',
      destination: '목적지',
      items: [
        { from: '선전', to: '하노이 (HAN)', air: '3-5일', sea: '15-20일' },
        { from: '선전', to: '호치민시 (SGN)', air: '4-7일', sea: '18-25일' },
        { from: '선전', to: '다낭 (DAD)', air: '5-7일', sea: '20-25일' },
      ]
    },
    customs: {
      title: '통관 주의사항',
      items: [
        '베트남 수입 관세는 HS 코드에 따라 크게 다릅니다 — 사전에 적용 세율을 확인하세요.',
        '상업 송장과 포장 명세서는 모든 화물의 필수 서류입니다.',
        '일부 상품은 베트남 수입 허가증이 필요합니다(식품, 화장품, 전자제품 등).',
        '베트남 세관은 신고 가치를 엄격히 심사합니다 — 압류를 피하기 위해 정확하게 신고하세요.',
        'SZ Express는 전문적인 통관 지원 서비스를 제공하여 필요한 서류 준비를 도와드립니다.'
      ]
    },
    faq: {
      title: '자주 묻는 질문',
      items: [
        { q: '선전에서 베트남까지 배송에 얼마나 걸리나요?', a: '항공 화물은 보통 3-7 영업일 걸립니다. LCL 해상 화물은 약 15-25일, FCL은 약 15-20일 걸립니다. 실제 시간은 통관 및 휴일에 따라 다를 수 있습니다.' },
        { q: '중국-베트남 특수 노선으로 어떤 화물을 배송할 수 있나요?', a: '의류, 전자제품, 생활용품, 기계 부품, 식품(허가증 필요) 등을 배송할 수 있습니다. 위험물 및 위조품은 제외됩니다.' },
        { q: '배송 비용은 어떻게 계산되나요?', a: '항공 화물은 실제 무게 또는 부피 무게(더 큰 값) 기준으로 요금이 부과됩니다. 해상 화물은 CBM 또는 무게 기준입니다. 즉시 견적을 받으려면 SZ Express에 문의하세요.' },
        { q: 'SZ Express는 문 앞 배송 서비스를 제공하나요?', a: '네. 선전에서 픽업부터 베트남 창고 또는 문 앞까지 배송까지 완전한 원스톱 솔루션을 제공합니다.' },
        { q: '화물을 어떻게 추적할 수 있나요?', a: '발송 후 운송장 번호를 제공합니다. WeChat 또는 Telegram을 통해 고객 서비스에 문의하여 실시간 화물 상태를 확인할 수 있습니다.' }
      ]
    },
    cta: {
      title: '베트남으로 배송할 준비가 되셨나요?',
      desc: 'SZ Express에 연락하여 무료 견적을 받으세요. 물류 전문가가 24시간 내에 답변드립니다.',
      wechat: 'WeChat 문의',
      telegram: 'Telegram 문의',
      email: '이메일 보내기'
    }
  },
  ru: {
    back: 'На главную',
    badge: 'Шэньчжэнь → Вьетнам | Руководство по доставке',
    title: 'Грузоперевозки из Китая во Вьетнам',
    subtitle: 'Самое полное руководство 2026 года по доставке товаров из Китая во Вьетнам — авиадоставка, морской фрахт, сроки, стоимость и советы по таможенному оформлению.',
    updated: 'Последнее обновление: апрель 2026',
    intro: {
      title: 'Что такое специальная линия Китай-Вьетнам?',
      body: 'Специальная линия Китай-Вьетнам — это выделенный грузовой маршрут из Китая (преимущественно из Шэньчжэня) в крупные города Вьетнама (Ханой, Хошимин и др.). По сравнению со стандартной международной экспресс-доставкой, специальные линии предлагают прозрачные цены, стабильные сроки и поддержку как мелких, так и крупных отправлений.'
    },
    modes: {
      title: 'Сравнение способов доставки',
      air: {
        title: 'Авиадоставка',
        desc: 'Идеально для небольших, дорогостоящих или срочных грузов. Прямые рейсы из Шэньчжэня в Ханой/Хошимин. Срок: 3-7 рабочих дней.',
        pros: ['Самый быстрый: 3-7 рабочих дней', 'Отлично для e-commerce посылок и образцов', 'Высокая безопасность, низкий риск повреждений'],
        cons: ['Более высокая стоимость', 'Ограничения веса на единицу'],
        time: '3-7 рабочих дней',
        price: 'По весу'
      },
      sea: {
        title: 'Морской фрахт',
        desc: 'Идеально для крупных объёмов и тяжёлых грузов. FCL (полный контейнер) или LCL (сборный) — самый экономичный вариант.',
        pros: ['Низкая стоимость для крупных грузов', 'Гибкие варианты FCL/LCL', 'Без ограничений по весу'],
        cons: ['Длительный срок: 15-25 дней', 'Зависит от погоды и состояния портов'],
        time: '15-25 дней',
        price: 'По CBM/весу'
      }
    },
    routes: {
      title: 'Основные маршруты доставки',
      origin: 'Откуда',
      destination: 'Куда',
      items: [
        { from: 'Шэньчжэнь', to: 'Ханой (HAN)', air: '3-5 дней', sea: '15-20 дней' },
        { from: 'Шэньчжэнь', to: 'Хошимин (SGN)', air: '4-7 дней', sea: '18-25 дней' },
        { from: 'Шэньчжэнь', to: 'Дананг (DAD)', air: '5-7 дней', sea: '20-25 дней' },
      ]
    },
    customs: {
      title: 'Советы по таможенному оформлению',
      items: [
        'Импортные пошлины Вьетнама существенно различаются в зависимости от кода HS — заранее уточните применимую ставку.',
        'Коммерческий инвойс и упаковочный лист — обязательные документы для всех отправлений.',
        'Для некоторых товаров требуется вьетнамская импортная лицензия (продукты питания, косметика, электроника и др.).',
        'Вьетнамская таможня тщательно проверяет задекларированную стоимость — всегда декларируйте точно, чтобы избежать задержания груза.',
        'SZ Express оказывает профессиональную поддержку по таможенному оформлению и помогает подготовить все необходимые документы.'
      ]
    },
    faq: {
      title: 'Часто задаваемые вопросы',
      items: [
        { q: 'Сколько времени занимает доставка из Шэньчжэня во Вьетнам?', a: 'Авиадоставка: 3-7 рабочих дней. LCL морской фрахт: около 15-25 дней, FCL: около 15-20 дней. Фактические сроки могут варьироваться из-за таможни и праздников.' },
        { q: 'Какие товары можно отправить по специальной линии Китай-Вьетнам?', a: 'Одежда, электроника, товары повседневного спроса, запчасти, продукты питания (с разрешением) и многое другое. Опасные грузы и контрафактная продукция исключены.' },
        { q: 'Как рассчитывается стоимость доставки?', a: 'Авиафрахт рассчитывается по фактическому или объёмному весу (берётся большее значение). Морской фрахт — по CBM или весу. Свяжитесь с SZ Express для получения мгновенной цитаты.' },
        { q: 'Предоставляет ли SZ Express услугу доставки «от двери до двери»?', a: 'Да. Мы обеспечиваем полный цикл: забор груза в Шэньчжэне и доставка на склад или по адресу во Вьетнаме — комплексный сервис «под ключ».' },
        { q: 'Как отследить мою посылку?', a: 'После отправки мы предоставляем номер накладной. Вы можете связаться с нашей службой поддержки через WeChat или Telegram для получения актуальной информации о статусе груза.' }
      ]
    },
    cta: {
      title: 'Готовы отправить груз во Вьетнам?',
      desc: 'Свяжитесь с SZ Express для получения бесплатного расчёта. Наши специалисты ответят в течение 24 часов.',
      wechat: 'Написать в WeChat',
      telegram: 'Написать в Telegram',
      email: 'Отправить письмо'
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
                  <th className="px-6 py-4 text-left text-gray-400">{t.routes.origin}</th>
                  <th className="px-6 py-4 text-left text-gray-400">{t.routes.destination}</th>
                  <th className="px-6 py-4 text-left text-accent"><Plane className="inline w-4 h-4 mr-1" />{t.modes.air.title}</th>
                  <th className="px-6 py-4 text-left text-accent"><Ship className="inline w-4 h-4 mr-1" />{t.modes.sea.title}</th>
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
