import React, { createContext, useContext, useState, useEffect } from "react";

export type Lang = "en" | "ru";

export interface Translations {
  nav: {
    about: string;
    certifications: string;
    gallery: string;
    diamonds: string;
    d2c: string;
    manufacturing: string;
    services: string;
    enquire: string;
    enquireNow: string;
  };
  hero: {
    overline: string;
    h1line1: string;
    h1line2: string;
    h1line3: string;
    h1line4: string;
    subline: string;
    cta1: string;
    cta2: string;
    stat1label: string;
    stat2label: string;
    stat3label: string;
    scroll: string;
    marquee: string[];
  };
  about: {
    overline: string;
    h2line1: string;
    h2line2: string;
    p1: string;
    p2: string;
    bullets: string[];
    cta: string;
    pillar1title: string;
    pillar1desc: string;
    pillar2title: string;
    pillar2desc: string;
    pillar3title: string;
    pillar3desc: string;
  };
  certifications: {
    overline: string;
    h2line1: string;
    h2line2: string;
    subtext: string;
    gradingTitle: string;
    gradingDesc: string;
    gradingStandards: string[];
    imageLabel: string;
    imageTitle: string;
    certNote: string;
  };
  ethical: {
    overline: string;
    h2line1: string;
    h2line2: string;
    intro: string;
    points: { num: string; title: string; abbr?: string; desc: string }[];
    tags: string[];
  };
  manufacturing: {
    overline: string;
    h2line1: string;
    h2line2: string;
    p1: string;
    p2: string;
    steps: { num: string; title: string; desc: string }[];
    efficiency: { label: string; title: string; desc: string }[];
  };
  services: {
    overline: string;
    h2line1: string;
    h2line2: string;
    h2line3: string;
    subtext: string;
    items: { num: string; title: string; desc: string; tags: string[] }[];
    supportTitle: string;
    supportTitleItalic: string;
    supportDesc: string;
    supportItems: { t: string; d: string }[];
  };
  whyus: {
    overline: string;
    h2line1: string;
    h2line2: string;
    benefits: { title: string; desc: string }[];
    quote: string;
    quoteLabel: string;
  };
  diamonds: {
    overline: string;
    h2: string;
    subtext: string;
    enquireCta: string;
    categories: {
      id: string;
      label: string;
      subtitle: string;
      tag: string;
      description: string;
      badge: string;
      specs: string[];
    }[];
  };
  missionVision: {
    missionOverline: string;
    missionH2line1: string;
    missionH2line2: string;
    missionText: string;
    visionOverline: string;
    visionH2line1: string;
    visionH2line2: string;
    visionText: string;
    values: string[];
    cta: string;
  };
  contact: {
    overline: string;
    h2line1: string;
    h2line2: string;
    subtext: string;
    labelEmail: string;
    labelPhone: string;
    labelLocation: string;
    waBtn: string;
    tgBtn: string;
    igBtn: string;
    fields: {
      name: string;
      namePlaceholder: string;
      company: string;
      companyPlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      message: string;
      messagePlaceholder: string;
    };
    submit: string;
    notice: string;
    alertMsg: string;
  };
  footer: {
    tagline: string;
    follow: string;
    navigate: string;
    servicesLabel: string;
    complianceLabel: string;
    navItems: { l: string; id: string }[];
    serviceItems: string[];
    complianceItems: string[];
    waBtn: string;
    copyright: string;
    b2bLine: string;
    specialisations: string;
    keywords: string[];
  };
  d2c: {
    overline: string;
    h2: string;
    h2italic: string;
    subtext: string;
    badge: string;
    whyOverline: string;
    whyTitle: string;
    whyTitleItalic: string;
    ctaOverline: string;
    ctaTitle: string;
    ctaTitleItalic: string;
    ctaDesc: string;
    waBtn: string;
    tgBtn: string;
    availability: string;
    offerings: { label: string; detail: string; tag: string }[];
    highlights: { title: string; desc: string }[];
  };
  gallery: {
    overline: string;
    h2: string;
    h2italic: string;
    subtext: string;
    b2bPanel: string;
    b2bSub: string;
    ctaText: string;
    catalogueBtn: string;
    items: { label: string; tag: string }[];
  };
  globalMap: {
    overline: string;
    h2: string;
    h2italic: string;
    legendHQ: string;
    legendMfg: string;
    legendSales: string;
    mfgLabel: string;
    salesLabel: string;
    mainSalesLabel: string;
    loadingMap: string;
  };
}

const en: Translations = {
  nav: {
    about: "About",
    certifications: "Certifications",
    gallery: "Gallery",
    diamonds: "Diamonds",
    d2c: "D2C",
    manufacturing: "Manufacturing",
    services: "Services",
    enquire: "Enquire",
    enquireNow: "Enquire Now",
  },
  hero: {
    overline: "Vertically Integrated Diamond Manufacturer",
    h1line1: "Shaped",
    h1line2: "by Hand,",
    h1line3: "Perfected",
    h1line4: "in Every Facet",
    subline: "From rough stone to radiant jewellery — JNK DIAM brings precision craftsmanship and certified quality directly to B2B partners worldwide.",
    cta1: "Partner With Us",
    cta2: "View Collection",
    stat1label: "B2B Partners",
    stat2label: "Clients",
    stat3label: "Conflict-Free",
    scroll: "Scroll",
    marquee: [
      "GIA Certified", "◆", "IGI Certified", "◆", "HRD Antwerp", "◆",
      "Kimberley Process", "◆", "Conflict-Free Diamonds", "◆", "B2B Direct Supply", "◆",
      "Ethically Sourced", "◆", "Zero Middlemen", "◆", "Loose Diamonds Wholesale", "◆",
      "Diamond Jewellery Manufacturer", "◆", "Engagement Rings", "◆", "Custom Diamond Jewellery", "◆",
      "Round Brilliant Cut", "◆", "VVS · VS · SI Clarity", "◆", "D–Z Colour Range", "◆",
      "Dubai Diamond Supplier", "◆", "AML Compliant", "◆", "Factory Direct", "◆",
    ],
  },
  about: {
    overline: "About JNK DIAM",
    h2line1: "Manufacturers,",
    h2line2: "Not Middlemen",
    p1: "We operate strictly as manufacturers and direct suppliers. JNK DIAM supplies certified loose diamonds, finished diamond jewellery, and — on jewellery orders — both the set piece and the accompanying certified loose stones together.",
    p2: "Every diamond we supply — whether loose or set — carries internationally recognized GIA, IGI, or HRD certification, backed by full documentation and ethical provenance from source to delivery.",
    bullets: [
      "Certified loose diamonds — any cut, carat & clarity",
      "Finished diamond jewellery — set with certified stones",
      "Jewellery + loose certified diamonds supplied together",
      "Zero intermediaries — direct from our factory",
    ],
    cta: "Start a Partnership",
    pillar1title: "Loose Certified Diamonds",
    pillar1desc: "GIA, IGI & HRD certified loose diamonds supplied in any cut, carat, colour, and clarity — entirely as per your specification.",
    pillar2title: "Finished Diamond Jewellery",
    pillar2desc: "In-house crafted diamond jewellery — rings, necklaces, earrings, bracelets — with certified diamonds set to your design.",
    pillar3title: "Jewellery + Stones Together",
    pillar3desc: "Order jewellery and receive the finished piece along with certified loose diamonds — full traceability and documentation included.",
  },
  certifications: {
    overline: "Quality Assurance",
    h2line1: "Every Diamond,",
    h2line2: "Certified",
    subtext: "Each stone is backed by internationally recognized laboratory certification — ensuring accuracy, authenticity, and global trade confidence for every B2B partner.",
    gradingTitle: "Grading Standards",
    gradingDesc: "Each certified diamond is assessed across the full 4C framework plus additional optical precision criteria used by all three labs.",
    gradingStandards: ["Cut", "Color", "Clarity", "Carat Weight", "Symmetry & Polish", "Proportions", "Fluorescence"],
    imageLabel: "Multi-Stage Process",
    imageTitle: "Quality Inspection",
    certNote: "Certification guarantees resale confidence, international trade acceptance, and transparent valuation — the foundation of every trusted B2B partnership.",
  },
  ethical: {
    overline: "Ethics & Compliance",
    h2line1: "Sourced",
    h2line2: "Responsibly",
    intro: "Integrity is not a compliance checkbox — it is central to everything we build. JNK DIAM is fully aligned with all international ethical sourcing standards.",
    points: [
      { num: "01", title: "Kimberley Process", abbr: "KPCS", desc: "Ensuring conflict-free diamonds through international certification standards adopted by 85 countries." },
      { num: "02", title: "AML Compliance", desc: "Adhering to global anti-money laundering standards across all transactions and supply chain operations." },
      { num: "03", title: "Ethical Procurement", desc: "Responsible sourcing exclusively from verified, audited, and transparent supply channels." },
      { num: "04", title: "Full Traceability", desc: "Complete documentation providing a paper trail from rough stone to polished, certified delivery." },
    ],
    tags: ["Conflict-Free Diamonds", "Kimberley Process Certified", "AML Compliant", "Ethically Sourced", "International Standards"],
  },
  manufacturing: {
    overline: "How We Work",
    h2line1: "Vertical",
    h2line2: "Manufacturing",
    p1: "Our fully integrated model eliminates unnecessary cost layers while maintaining certified, internationally accepted quality standards at every stage.",
    p2: "From selecting rough diamonds to delivering finished jewellery — every step is under our direct control.",
    steps: [
      { num: "01", title: "Ethical Rough Sourcing", desc: "KP-certified rough diamonds from verified, responsible supply channels globally." },
      { num: "02", title: "Precision Cutting & Polishing", desc: "Advanced techniques and master craftsmanship maximizing brilliance and light return in every stone." },
      { num: "03", title: "Quality Inspection", desc: "Each stone passes multiple internal inspection checkpoints before certification." },
      { num: "04", title: "Laboratory Certification", desc: "GIA, IGI, or HRD grading reports issued for every polished diamond we supply." },
      { num: "05", title: "Diamond Jewellery Setting", desc: "In-house setting and manufacturing of certified diamond jewellery — rings, pendants, earrings, and bracelets — for wholesale partners." },
      { num: "06", title: "Loose Diamond Supply", desc: "Certified loose diamonds supplied to spec — any cut, carat, colour, and clarity as per customer requirement." },
    ],
    efficiency: [
      { label: "01", title: "Lean Manufacturing", desc: "Streamlined production processes for maximum efficiency and minimum waste." },
      { label: "02", title: "Scalable Capacity", desc: "Flexible output structures that adapt to your volume requirements." },
      { label: "03", title: "Custom Development", desc: "Bespoke design and manufacturing solutions for unique brand requirements." },
    ],
  },
  services: {
    overline: "What We Supply",
    h2line1: "Complete",
    h2line2: "Manufacturing",
    h2line3: "Services",
    subtext: "Loose certified diamonds. Finished diamond jewellery. Or both together — with full certification for every stone. All supplied direct, as per your requirement.",
    items: [
      { num: "01", title: "Loose Certified Diamonds", desc: "We supply GIA, IGI, and HRD certified loose diamonds in any cut, carat, colour, and clarity — entirely as per customer requirement. Single stones to bulk lots.", tags: ["GIA · IGI · HRD certified", "All shapes & carat weights", "As per customer spec"] },
      { num: "02", title: "Finished Diamond Jewellery", desc: "Precision-crafted diamond jewellery — rings, necklaces, pendants, earrings, and bracelets — manufactured in-house with certified diamonds set to your design brief.", tags: ["Rings, pendants & earrings", "Custom design briefs", "Certified stones set in-house"] },
      { num: "03", title: "Jewellery + Certified Stones Together", desc: "When you order diamond jewellery, we also supply the accompanying certified loose diamonds — giving your business complete traceability and grading documentation for every piece.", tags: ["Full certification per stone", "Loose + set together", "Complete documentation"] },
      { num: "04", title: "Custom Collections & Private Label", desc: "Bespoke diamond jewellery design and manufacturing fully tailored to your brand — from prototype to high-volume production, with certified diamonds throughout.", tags: ["Design consultation", "Prototype development", "Scalable production"] },
      { num: "05", title: "B2B Bulk & Wholesale Supply", desc: "High-volume supply of certified loose diamonds and finished diamond jewellery for wholesalers, brands, and retailers requiring consistent, demand-driven output.", tags: ["Volume-based pricing", "Consistent graded quality", "Flexible lead times"] },
    ],
    supportTitle: "Educational &",
    supportTitleItalic: "Strategic Support",
    supportDesc: "Informed partners build stronger businesses. We support clients with diamond knowledge, quality optimization, and market trend intelligence.",
    supportItems: [
      { t: "Certification Guidance", d: "Understanding lab grading standards and their market impact" },
      { t: "Quality Optimization", d: "Balancing visual quality with profitability for your segment" },
      { t: "Market Insights", d: "Trends in sizes, clarities, cuts, and consumer demand" },
    ],
  },
  whyus: {
    overline: "Our Advantage",
    h2line1: "Why Partner",
    h2line2: "With JNK DIAM",
    benefits: [
      { title: "Vertically Integrated Manufacturing", desc: "Complete control from rough sourcing to finished product" },
      { title: "GIA, IGI & HRD Certified", desc: "Internationally recognized certification for every stone" },
      { title: "Ethical Sourcing Compliance", desc: "Kimberley Process certified and conflict-free diamonds" },
      { title: "No Middleman Margins", desc: "Direct from manufacturer to your business" },
      { title: "Transparent Documentation", desc: "Complete traceability and clear paperwork" },
      { title: "Competitive Global Pricing", desc: "Cost-efficient pricing without compromising quality" },
      { title: "Long-Term B2B Focus", desc: "Building sustainable relationships with our partners" },
      { title: "Scalable Production Capacity", desc: "Flexible manufacturing to meet your growing needs" },
    ],
    quote: "From mine to market, with nothing hidden in between.",
    quoteLabel: "JNK DIAM Promise",
  },
  diamonds: {
    overline: "Loose Diamond Supply",
    h2: "Diamond Categories",
    subtext: "From colourless investment stones to rare fancy colours — we supply certified loose diamonds across every category for B2B buyers worldwide.",
    enquireCta: "Enquire About",
    categories: [
      { id: "white", label: "White Diamonds", subtitle: "D–Z Colour Range", tag: "Classic · Colourless · Near-Colourless", description: "The timeless benchmark of brilliance. Available in all shapes and cuts from D (colourless) through Z, certified by GIA, IGI & HRD for absolute transparency.", specs: ["Rounds, Ovals, Cushions, Emeralds", "0.01 ct to 10.00 ct+", "GIA · IGI · HRD Certified"], badge: "Most Popular" },
      { id: "brown", label: "Brown Diamonds", subtitle: "Champagne · Cognac · Chocolate", tag: "Warm · Earthy · Affordable Luxury", description: "Rich, warm tones ranging from light champagne to deep cognac and chocolate brown. An increasingly sought-after choice for bespoke jewellery at competitive price points.", specs: ["C1–C7 Colour Grades", "Natural Fancy Brown", "Excellent Value per Carat"], badge: "Best Value" },
      { id: "yellow", label: "Yellow Diamonds", subtitle: "Fancy Light to Fancy Vivid", tag: "Canary · Vivid · Intense", description: "From delicate Fancy Light Yellow to the iconic Fancy Vivid Canary — yellow diamonds offer rare warmth and exceptional investment-grade appeal for premium B2B clients.", specs: ["Fancy Light to Fancy Vivid", "Natural & Treated Options", "IGI · GIA Certified"], badge: "Premium" },
      { id: "coloured", label: "Coloured Diamonds", subtitle: "Pink · Blue · Green · Red · Orange", tag: "Rare · Fancy Colour · Investment Grade", description: "The rarest diamonds on earth. Fancy coloured diamonds in pink, blue, green, red and orange — sourced ethically and certified for colour intensity, ensuring genuine provenance.", specs: ["Natural Fancy Colour", "Pink, Blue, Green, Red, Orange", "Kimberley Process Certified"], badge: "Ultra Rare" },
    ],
  },
  missionVision: {
    missionOverline: "Our Mission",
    missionH2line1: "Purpose-Driven",
    missionH2line2: "Supply",
    missionText: "To supply certified, ethically sourced diamonds and precision-crafted jewellery through a fully integrated and transparent manufacturing system.",
    visionOverline: "Our Vision",
    visionH2line1: "Global",
    visionH2line2: "Leadership",
    visionText: "To become a globally trusted diamond manufacturing company recognized for certified quality, unwavering integrity, and direct supply excellence.",
    values: ["Quality", "Integrity", "Excellence"],
    cta: "Begin a Partnership",
  },
  contact: {
    overline: "B2B Enquiries",
    h2line1: "Partner",
    h2line2: "With Us",
    subtext: "We partner exclusively with diamond jewellery manufacturers, wholesalers, and loose diamond buyers. Tell us about your requirements.",
    labelEmail: "Email",
    labelPhone: "Phone",
    labelLocation: "Location",
    waBtn: "WhatsApp Direct",
    tgBtn: "Telegram Direct",
    igBtn: "@jnkdiam",
    fields: {
      name: "Full Name",
      namePlaceholder: "John Smith",
      company: "Company",
      companyPlaceholder: "Your Company",
      email: "Email Address",
      emailPlaceholder: "john@company.com",
      phone: "Phone Number",
      phonePlaceholder: "+1 555 000 0000",
      message: "Message",
      messagePlaceholder: "Tell us about your requirements — loose diamonds, finished jewellery, jewellery + certified stones together, quantities, specs...",
    },
    submit: "Send Enquiry",
    notice: "B2B enquiries only · Minimum order quantities apply",
    alertMsg: "Thank you for your enquiry. Our team will be in touch shortly.",
  },
  footer: {
    tagline: "Vertically integrated diamond manufacturing and jewellery production — precision, certified quality, and transparent B2B supply.",
    follow: "Follow",
    navigate: "Navigate",
    servicesLabel: "Services",
    complianceLabel: "Compliance",
    navItems: [
      { l: "About Us", id: "about" },
      { l: "Certifications", id: "certifications" },
      { l: "Gallery", id: "gallery" },
      { l: "Manufacturing", id: "manufacturing" },
      { l: "Services", id: "services" },
      { l: "Contact", id: "contact" },
    ],
    serviceItems: ["Loose Certified Diamonds", "Finished Diamond Jewellery", "Jewellery + Stones Together", "Custom Collections", "B2B Bulk & Wholesale Supply"],
    complianceItems: ["Kimberley Process Certified", "AML Compliant", "Ethical Sourcing", "International Trade Ready", "Conflict-Free Diamonds"],
    waBtn: "WhatsApp Us",
    copyright: "All rights reserved.",
    b2bLine: "B2B Diamond Manufacturing & Jewellery Production",
    specialisations: "Specialisations",
    keywords: [
      "GIA Certified Diamonds", "IGI Certified Diamonds", "HRD Antwerp Certified",
      "Loose Diamonds Wholesale", "Diamond Jewellery Manufacturer", "Custom Diamond Rings",
      "Diamond Engagement Rings", "Diamond Necklaces", "Diamond Bracelets", "Diamond Earrings",
      "Round Brilliant Cut", "Princess Cut Diamonds", "Oval Cut Diamonds", "Cushion Cut Diamonds",
      "Emerald Cut Diamonds", "Pear Shape Diamonds", "VVS Diamonds", "VS Diamonds",
      "Natural Diamonds", "Conflict-Free Diamonds", "Kimberley Process", "Ethically Sourced",
      "B2B Diamond Supplier", "Diamond Factory Dubai", "Wholesale Diamond Jewellery",
      "Pavé Diamond Jewellery", "Halo Rings", "Solitaire Diamonds", "Diamond Melee",
      "White Gold Diamond Jewellery", "Yellow Gold Diamonds", "Platinum Diamond Rings",
      "Diamond Parcels", "Vertically Integrated Manufacturer", "AML Compliant",
    ],
  },
  d2c: {
    overline: "Direct to Consumer",
    h2: "Buy Direct from the",
    h2italic: "Manufacturer",
    subtext: "JNK DIAM is not just for businesses. Individual buyers can now access factory-direct certified diamonds and bespoke jewellery — at trade pricing, with full certification.",
    badge: "D2C — No Middleman. Factory Prices. Certified Diamonds.",
    whyOverline: "Why Buy Direct",
    whyTitle: "The",
    whyTitleItalic: "JNK DIAM D2C Advantage",
    ctaOverline: "Start Your Journey",
    ctaTitle: "Ready to Buy a Certified Diamond",
    ctaTitleItalic: "Directly from the Source?",
    ctaDesc: "Message us on WhatsApp or Telegram. Our experts will help you choose the right certified diamond or design your bespoke piece — at factory pricing, with zero compromises on quality.",
    waBtn: "Chat on WhatsApp",
    tgBtn: "Message on Telegram",
    availability: "+971 58 130 7969 · Available 7 days a week",
    offerings: [
      { label: "Loose Certified Diamonds", detail: "Choose your own GIA / IGI / HRD certified stone — round, oval, cushion, emerald and more. Any carat, any budget.", tag: "From 0.20 ct" },
      { label: "Bespoke Engagement Rings", detail: "Tell us your dream ring. Our craftsmen design and set it in-house with the certified diamond of your choice.", tag: "Fully Custom" },
      { label: "Fine Diamond Jewellery", detail: "Necklaces, pendants, earrings, bracelets — finished pieces crafted in-house, set with certified diamonds, ready to wear or gift.", tag: "Ready to Gift" },
      { label: "Gift with Premium Packaging", detail: "Surprise someone special. Every D2C order is presented in luxurious jewellery packaging — a complete gifting experience.", tag: "Luxury Boxed" },
    ],
    highlights: [
      { title: "Factory-Direct Pricing", desc: "No middlemen. You buy directly from the manufacturer — the same quality supplied to jewellery brands worldwide, now available to individual buyers." },
      { title: "Certified Every Time", desc: "Every diamond sold D2C comes with its original GIA, IGI, or HRD certificate. You see exactly what you're buying — cut, colour, clarity, carat." },
      { title: "Bespoke Jewellery Made for You", desc: "Share your vision — we design and manufacture your custom piece in-house. Engagement rings, pendants, bracelets — crafted to your specification." },
      { title: "Luxury Packaging & Presentation", desc: "Every order ships in premium jewellery packaging — ready to gift. Perfect for engagements, anniversaries, and special occasions." },
      { title: "Worldwide Shipping", desc: "Securely insured and discreetly delivered worldwide. From our manufacturing facility directly to your door." },
      { title: "Personal Consultation", desc: "Speak directly with our diamond experts via WhatsApp or Telegram. We guide you from stone selection to the finished piece." },
    ],
  },
  gallery: {
    overline: "Our Craftsmanship",
    h2: "The",
    h2italic: "Collection",
    subtext: "Each piece manufactured in-house with certified stones, precision setting, and attention to lasting quality. All available for wholesale B2B supply.",
    b2bPanel: "B2B",
    b2bSub: "Wholesale Supply",
    ctaText: "All pieces available for B2B wholesale — certified, crafted, and ready to ship.",
    catalogueBtn: "Request Wholesale Catalogue",
    items: [
      { label: "Engagement Rings", tag: "Signature Collection" },
      { label: "Diamond Necklaces", tag: "Pendant Series" },
      { label: "Chandelier Earrings", tag: "Drop Collection" },
      { label: "Halo Solitaire", tag: "Premium" },
      { label: "Tennis Bracelets", tag: "Eternity" },
      { label: "Bespoke Pieces", tag: "Luxury" },
      { label: "Loose Diamonds", tag: "GIA · IGI · HRD" },
      { label: "Jewellery Sets", tag: "Bridal" },
    ],
  },
  globalMap: {
    overline: "Our Reach",
    h2: "Global",
    h2italic: "Sales Network",
    legendHQ: "Main Sales Office — Dubai",
    legendMfg: "Manufacturing Hub — Mumbai",
    legendSales: "Sales Offices",
    mfgLabel: "Manufacturing Hub",
    salesLabel: "Sales Offices",
    mainSalesLabel: "Main Sales Office",
    loadingMap: "Loading map…",
  },
};

const ru: Translations = {
  nav: {
    about: "О нас",
    certifications: "Сертификаты",
    gallery: "Галерея",
    diamonds: "Бриллианты",
    d2c: "D2C",
    manufacturing: "Производство",
    services: "Услуги",
    enquire: "Запрос",
    enquireNow: "Отправить запрос",
  },
  hero: {
    overline: "Вертикально интегрированный производитель бриллиантов",
    h1line1: "Создано",
    h1line2: "руками,",
    h1line3: "Доведено",
    h1line4: "до совершенства",
    subline: "От необработанного камня до сияющего украшения — JNK DIAM обеспечивает точное мастерство и сертифицированное качество напрямую B2B-партнёрам по всему миру.",
    cta1: "Стать партнёром",
    cta2: "Смотреть коллекцию",
    stat1label: "B2B Партнёры",
    stat2label: "Клиентов",
    stat3label: "Без конфликтов",
    scroll: "Листать",
    marquee: [
      "Сертификат GIA", "◆", "Сертификат IGI", "◆", "HRD Антверпен", "◆",
      "Кимберлийский процесс", "◆", "Бриллианты без конфликтов", "◆", "Прямые поставки B2B", "◆",
      "Этичные закупки", "◆", "Без посредников", "◆", "Оптовые россыпные бриллианты", "◆",
      "Производитель ювелирных украшений", "◆", "Обручальные кольца", "◆", "Украшения на заказ", "◆",
      "Круглая бриллиантовая огранка", "◆", "Чистота VVS · VS · SI", "◆", "Цвета D–Z", "◆",
      "Поставщик бриллиантов — Дубай", "◆", "Соответствие ПОД/ФТ", "◆", "Прямо с завода", "◆",
    ],
  },
  about: {
    overline: "О компании JNK DIAM",
    h2line1: "Производители,",
    h2line2: "а не посредники",
    p1: "Мы работаем исключительно как производители и прямые поставщики. JNK DIAM поставляет сертифицированные россыпные бриллианты, готовые ювелирные украшения с бриллиантами, а также — при заказе украшений — и готовое изделие, и сопроводительные сертифицированные камни вместе.",
    p2: "Каждый бриллиант, который мы поставляем — россыпной или в изделии — сопровождается международно признанным сертификатом GIA, IGI или HRD, полной документацией и подтверждённым этичным происхождением от источника до доставки.",
    bullets: [
      "Сертифицированные россыпные бриллианты — любая огранка, карат и чистота",
      "Готовые украшения с бриллиантами — с сертифицированными камнями",
      "Украшения + россыпные сертифицированные бриллианты вместе",
      "Ноль посредников — напрямую с нашего завода",
    ],
    cta: "Начать партнёрство",
    pillar1title: "Россыпные сертифицированные бриллианты",
    pillar1desc: "Сертифицированные GIA, IGI и HRD россыпные бриллианты в любой огранке, карате, цвете и чистоте — полностью по вашим требованиям.",
    pillar2title: "Готовые украшения с бриллиантами",
    pillar2desc: "Украшения с бриллиантами собственного производства — кольца, колье, серьги, браслеты — с сертифицированными камнями по вашему дизайну.",
    pillar3title: "Украшения + камни вместе",
    pillar3desc: "Закажите украшения и получите готовое изделие вместе с сертифицированными россыпными бриллиантами — полная прослеживаемость и документация включены.",
  },
  certifications: {
    overline: "Гарантия качества",
    h2line1: "Каждый бриллиант",
    h2line2: "сертифицирован",
    subtext: "Каждый камень подтверждён международно признанным лабораторным сертификатом — обеспечивая точность, подлинность и уверенность в международной торговле для каждого B2B-партнёра.",
    gradingTitle: "Стандарты оценки",
    gradingDesc: "Каждый сертифицированный бриллиант оценивается по полной системе 4C, а также дополнительным критериям оптической точности, применяемым во всех трёх лабораториях.",
    gradingStandards: ["Огранка", "Цвет", "Чистота", "Вес в каратах", "Симметрия и полировка", "Пропорции", "Флуоресценция"],
    imageLabel: "Многоэтапный контроль",
    imageTitle: "Контроль качества",
    certNote: "Сертификация гарантирует уверенность при перепродаже, международное признание в торговле и прозрачную оценку стоимости — основу каждого надёжного B2B-партнёрства.",
  },
  ethical: {
    overline: "Этика и соответствие",
    h2line1: "Ответственные",
    h2line2: "закупки",
    intro: "Честность — это не просто формальное требование, это основа всего, что мы создаём. JNK DIAM полностью соответствует всем международным стандартам этичных закупок.",
    points: [
      { num: "01", title: "Кимберлийский процесс", abbr: "КП", desc: "Обеспечение поставок бриллиантов без конфликтов в рамках международной системы сертификации, принятой 85 странами мира." },
      { num: "02", title: "Соответствие требованиям ПОД", desc: "Соблюдение глобальных стандартов противодействия отмыванию денег во всех транзакциях и операциях цепочки поставок." },
      { num: "03", title: "Этичные закупки", desc: "Ответственное снабжение исключительно из проверенных, прошедших аудит и прозрачных каналов поставок." },
      { num: "04", title: "Полная прослеживаемость", desc: "Исчерпывающая документация, обеспечивающая отслеживание пути камня от необработанного сырья до полированной сертифицированной поставки." },
    ],
    tags: ["Бриллианты без конфликтов", "Кимберлийский процесс", "Соответствие ПОД", "Этичные закупки", "Международные стандарты"],
  },
  manufacturing: {
    overline: "Как мы работаем",
    h2line1: "Вертикальное",
    h2line2: "производство",
    p1: "Наша полностью интегрированная модель устраняет излишние затратные звенья, сохраняя сертифицированные, международно признанные стандарты качества на каждом этапе.",
    p2: "От выбора необработанных бриллиантов до доставки готовых украшений — каждый этап находится под нашим прямым контролем.",
    steps: [
      { num: "01", title: "Этичная закупка сырья", desc: "Необработанные бриллианты, сертифицированные по КП, из проверенных и ответственных каналов поставок по всему миру." },
      { num: "02", title: "Точная огранка и полировка", desc: "Передовые технологии и профессиональное мастерство, обеспечивающие максимальный блеск и светоотдачу каждого камня." },
      { num: "03", title: "Контроль качества", desc: "Каждый камень проходит несколько внутренних контрольных точек проверки перед отправкой на сертификацию." },
      { num: "04", title: "Лабораторная сертификация", desc: "Отчёты о грейдинге GIA, IGI или HRD, оформляемые для каждого полированного бриллианта, который мы поставляем." },
      { num: "05", title: "Вставка бриллиантов в украшения", desc: "Вставка и производство сертифицированных украшений с бриллиантами — кольца, подвески, серьги и браслеты — для оптовых партнёров." },
      { num: "06", title: "Поставка россыпных бриллиантов", desc: "Сертифицированные россыпные бриллианты, поставляемые по спецификации — любая огранка, карат, цвет и чистота по требованию клиента." },
    ],
    efficiency: [
      { label: "01", title: "Бережливое производство", desc: "Оптимизированные производственные процессы для максимальной эффективности и минимальных потерь." },
      { label: "02", title: "Масштабируемые мощности", desc: "Гибкая производственная структура, адаптирующаяся к вашим объёмным требованиям." },
      { label: "03", title: "Разработка на заказ", desc: "Индивидуальные решения по дизайну и производству для уникальных требований вашего бренда." },
    ],
  },
  services: {
    overline: "Что мы поставляем",
    h2line1: "Полный",
    h2line2: "комплекс",
    h2line3: "услуг",
    subtext: "Россыпные сертифицированные бриллианты. Готовые украшения с бриллиантами. Или и то, и другое — с полной сертификацией каждого камня. Всё поставляется напрямую, по вашим требованиям.",
    items: [
      { num: "01", title: "Россыпные сертифицированные бриллианты", desc: "Мы поставляем сертифицированные GIA, IGI и HRD россыпные бриллианты в любой огранке, карате, цвете и чистоте — полностью по требованию клиента. От отдельных камней до крупных партий.", tags: ["Сертификаты GIA · IGI · HRD", "Все формы и весовые категории", "По спецификации клиента"] },
      { num: "02", title: "Готовые украшения с бриллиантами", desc: "Ювелирные украшения с бриллиантами точного изготовления — кольца, колье, подвески, серьги и браслеты — производятся на нашем заводе с сертифицированными камнями по вашему техническому заданию.", tags: ["Кольца, подвески и серьги", "Дизайн по запросу", "Камни вставляются на нашем производстве"] },
      { num: "03", title: "Украшения + сертифицированные камни вместе", desc: "При заказе украшений мы также поставляем сопроводительные сертифицированные россыпные бриллианты — обеспечивая вашему бизнесу полную прослеживаемость и грейдинговую документацию для каждого изделия.", tags: ["Полная сертификация каждого камня", "Россыпной + в изделии вместе", "Полный пакет документов"] },
      { num: "04", title: "Авторские коллекции и собственный бренд", desc: "Индивидуальный дизайн и производство украшений с бриллиантами, полностью адаптированные под ваш бренд — от прототипа до крупносерийного производства с сертифицированными бриллиантами.", tags: ["Дизайн-консультация", "Разработка прототипа", "Масштабируемое производство"] },
      { num: "05", title: "B2B оптовые поставки", desc: "Крупнообъёмные поставки сертифицированных россыпных бриллиантов и готовых украшений для оптовиков, брендов и розничных сетей, требующих стабильного производства под спрос.", tags: ["Ценообразование по объёму", "Стабильное качество грейдинга", "Гибкие сроки поставки"] },
    ],
    supportTitle: "Образовательная и",
    supportTitleItalic: "стратегическая поддержка",
    supportDesc: "Информированные партнёры строят более сильный бизнес. Мы поддерживаем клиентов знаниями о бриллиантах, оптимизацией качества и аналитикой рыночных тенденций.",
    supportItems: [
      { t: "Руководство по сертификации", d: "Понимание стандартов лабораторного грейдинга и их влияния на рынок" },
      { t: "Оптимизация качества", d: "Баланс визуального качества и рентабельности для вашего сегмента" },
      { t: "Рыночная аналитика", d: "Тренды в размерах, чистоте, огранках и потребительском спросе" },
    ],
  },
  whyus: {
    overline: "Наше преимущество",
    h2line1: "Почему",
    h2line2: "JNK DIAM",
    benefits: [
      { title: "Вертикально интегрированное производство", desc: "Полный контроль от закупки сырья до готового изделия" },
      { title: "Сертификаты GIA, IGI и HRD", desc: "Международно признанная сертификация для каждого камня" },
      { title: "Этичные закупки и соответствие нормам", desc: "Кимберлийский процесс и бриллианты без конфликтов" },
      { title: "Никаких наценок посредников", desc: "Напрямую от производителя к вашему бизнесу" },
      { title: "Прозрачная документация", desc: "Полная прослеживаемость и чёткое оформление документов" },
      { title: "Конкурентные мировые цены", desc: "Экономичное ценообразование без ущерба для качества" },
      { title: "Долгосрочный B2B-фокус", desc: "Построение устойчивых и взаимовыгодных отношений с партнёрами" },
      { title: "Масштабируемые производственные мощности", desc: "Гибкое производство, растущее вместе с вашими потребностями" },
    ],
    quote: "От шахты до рынка — без скрытых звеньев между ними.",
    quoteLabel: "Обещание JNK DIAM",
  },
  diamonds: {
    overline: "Поставка россыпных бриллиантов",
    h2: "Категории бриллиантов",
    subtext: "От бесцветных инвестиционных камней до редких цветных — мы поставляем сертифицированные россыпные бриллианты всех категорий для B2B-покупателей по всему миру.",
    enquireCta: "Запрос о",
    categories: [
      { id: "white", label: "Белые бриллианты", subtitle: "Цвета D–Z", tag: "Классика · Бесцветные · Почти бесцветные", description: "Вечный эталон блеска. Доступны во всех формах и огранках от D (бесцветный) до Z, сертифицированные GIA, IGI и HRD для абсолютной прозрачности.", specs: ["Круглые, овальные, подушки, изумруды", "0,01 кт до 10,00 кт+", "Сертификаты GIA · IGI · HRD"], badge: "Самый популярный" },
      { id: "brown", label: "Коричневые бриллианты", subtitle: "Шампанское · Коньяк · Шоколад", tag: "Тёплые · Земные · Доступная роскошь", description: "Богатые тёплые тона от светлого шампанского до глубокого коньяка и шоколадно-коричневого. Всё более востребованный выбор для эксклюзивных украшений по конкурентным ценам.", specs: ["Цветовые градации C1–C7", "Натуральный фантазийный коричневый", "Отличная стоимость за карат"], badge: "Лучшая цена" },
      { id: "yellow", label: "Жёлтые бриллианты", subtitle: "От Fancy Light до Fancy Vivid", tag: "Канарейка · Vivid · Насыщенный", description: "От нежного Fancy Light Yellow до легендарного Fancy Vivid Canary — жёлтые бриллианты предлагают редкую теплоту и исключительную инвестиционную привлекательность для премиальных B2B-клиентов.", specs: ["От Fancy Light до Fancy Vivid", "Натуральные и облагороженные варианты", "Сертификаты IGI · GIA"], badge: "Премиум" },
      { id: "coloured", label: "Цветные бриллианты", subtitle: "Розовые · Синие · Зелёные · Красные · Оранжевые", tag: "Редкие · Фантазийный цвет · Инвестиционный класс", description: "Самые редкие бриллианты на Земле. Фантазийные цветные бриллианты розового, синего, зелёного, красного и оранжевого цветов — этично добытые и сертифицированные по интенсивности окраски.", specs: ["Натуральный фантазийный цвет", "Розовый, синий, зелёный, красный, оранжевый", "Кимберлийский процесс"], badge: "Ультра редкие" },
    ],
  },
  missionVision: {
    missionOverline: "Наша миссия",
    missionH2line1: "Целеустремлённые",
    missionH2line2: "поставки",
    missionText: "Поставлять сертифицированные, этично добытые бриллианты и украшения точного производства через полностью интегрированную и прозрачную производственную систему.",
    visionOverline: "Наше видение",
    visionH2line1: "Глобальное",
    visionH2line2: "лидерство",
    visionText: "Стать всемирно признанной компанией по производству бриллиантов, известной сертифицированным качеством, безупречной честностью и превосходством прямых поставок.",
    values: ["Качество", "Честность", "Совершенство"],
    cta: "Начать партнёрство",
  },
  contact: {
    overline: "B2B запросы",
    h2line1: "Партнёрство",
    h2line2: "с нами",
    subtext: "Мы сотрудничаем исключительно с производителями ювелирных украшений, оптовиками и покупателями россыпных бриллиантов. Расскажите нам о ваших требованиях.",
    labelEmail: "Email",
    labelPhone: "Телефон",
    labelLocation: "Адрес",
    waBtn: "Написать в WhatsApp",
    tgBtn: "Написать в Telegram",
    igBtn: "@jnkdiam",
    fields: {
      name: "Полное имя",
      namePlaceholder: "Иван Иванов",
      company: "Компания",
      companyPlaceholder: "Название компании",
      email: "Email адрес",
      emailPlaceholder: "ivan@company.com",
      phone: "Номер телефона",
      phonePlaceholder: "+7 999 000 0000",
      message: "Сообщение",
      messagePlaceholder: "Расскажите о ваших требованиях — россыпные бриллианты, готовые украшения, украшения + сертифицированные камни, количество, характеристики...",
    },
    submit: "Отправить запрос",
    notice: "Только B2B запросы · Минимальный объём заказа применяется",
    alertMsg: "Спасибо за ваш запрос. Наша команда свяжется с вами в ближайшее время.",
  },
  footer: {
    tagline: "Вертикально интегрированное производство бриллиантов и ювелирных украшений — точность, сертифицированное качество и прозрачные B2B-поставки.",
    follow: "Мы в соцсетях",
    navigate: "Навигация",
    servicesLabel: "Услуги",
    complianceLabel: "Соответствие",
    navItems: [
      { l: "О нас", id: "about" },
      { l: "Сертификаты", id: "certifications" },
      { l: "Галерея", id: "gallery" },
      { l: "Производство", id: "manufacturing" },
      { l: "Услуги", id: "services" },
      { l: "Контакты", id: "contact" },
    ],
    serviceItems: ["Россыпные сертифицированные бриллианты", "Готовые украшения с бриллиантами", "Украшения + камни вместе", "Авторские коллекции", "B2B оптовые поставки"],
    complianceItems: ["Кимберлийский процесс", "Соответствие ПОД", "Этичные закупки", "Международная торговля", "Бриллианты без конфликтов"],
    waBtn: "Telegram",
    copyright: "Все права защищены.",
    b2bLine: "B2B производство бриллиантов и ювелирных украшений",
    specialisations: "Специализации",
    keywords: [
      "Сертифицированные бриллианты GIA", "Сертифицированные бриллианты IGI", "Сертификат HRD Антверпен",
      "Оптовые россыпные бриллианты", "Производитель ювелирных украшений", "Кольца с бриллиантами на заказ",
      "Обручальные кольца с бриллиантами", "Колье с бриллиантами", "Браслеты с бриллиантами", "Серьги с бриллиантами",
      "Круглая бриллиантовая огранка", "Огранка Принцесса", "Овальная огранка", "Огранка Подушка",
      "Изумрудная огранка", "Огранка Груша", "Бриллианты VVS", "Бриллианты VS",
      "Натуральные бриллианты", "Бриллианты без конфликтов", "Кимберлийский процесс", "Этичные закупки",
      "Поставщик бриллиантов B2B", "Завод бриллиантов Дубай", "Оптовые ювелирные украшения",
      "Украшения с паве", "Украшения Гало", "Солитер с бриллиантом", "Меле бриллианты",
      "Украшения из белого золота", "Украшения из жёлтого золота", "Кольца из платины с бриллиантами",
      "Партии бриллиантов", "Вертикально интегрированный производитель", "Соответствие требованиям ПОД",
    ],
  },
  d2c: {
    overline: "Прямо потребителю",
    h2: "Купить напрямую у",
    h2italic: "производителя",
    subtext: "JNK DIAM — не только для бизнеса. Частные покупатели теперь могут приобрести сертифицированные бриллианты и эксклюзивные украшения напрямую с завода — по оптовым ценам, с полной сертификацией.",
    badge: "D2C — Без посредников. Заводские цены. Сертифицированные бриллианты.",
    whyOverline: "Зачем покупать напрямую",
    whyTitle: "Преимущество",
    whyTitleItalic: "JNK DIAM D2C",
    ctaOverline: "Начните свой путь",
    ctaTitle: "Готовы купить сертифицированный бриллиант",
    ctaTitleItalic: "напрямую от производителя?",
    ctaDesc: "Напишите нам в Telegram. Наши эксперты помогут выбрать подходящий сертифицированный бриллиант или разработать эксклюзивное изделие — по заводским ценам, без компромиссов по качеству.",
    waBtn: "Написать в WhatsApp",
    tgBtn: "Написать в Telegram",
    availability: "+971 58 130 7969 · На связи 7 дней в неделю",
    offerings: [
      { label: "Россыпные сертифицированные бриллианты", detail: "Выберите свой GIA / IGI / HRD сертифицированный камень — круглый, овальный, подушка, изумруд и другие. Любой карат, любой бюджет.", tag: "От 0,20 кт" },
      { label: "Эксклюзивные обручальные кольца", detail: "Расскажите нам о своей мечте. Наши мастера разработают и выполнят вставку на нашем производстве с сертифицированным бриллиантом по вашему выбору.", tag: "Полностью на заказ" },
      { label: "Ювелирные украшения с бриллиантами", detail: "Колье, подвески, серьги, браслеты — готовые изделия собственного производства с сертифицированными бриллиантами, готовые к носке или дарению.", tag: "Готово к подарку" },
      { label: "Подарок в премиальной упаковке", detail: "Удивите кого-то особенного. Каждый D2C заказ упакован в роскошную ювелирную коробку — законченный опыт дарения.", tag: "Люксовая коробка" },
    ],
    highlights: [
      { title: "Цены прямо с завода", desc: "Никаких посредников. Вы покупаете напрямую у производителя — то же качество, что поставляется ювелирным брендам по всему миру, теперь доступно частным покупателям." },
      { title: "Сертификат на каждый камень", desc: "Каждый бриллиант продаётся с оригинальным сертификатом GIA, IGI или HRD. Вы видите именно то, что покупаете — огранка, цвет, чистота, карат." },
      { title: "Эксклюзивные украшения для вас", desc: "Поделитесь своим видением — мы разработаем и изготовим ваше изделие на нашем производстве. Обручальные кольца, подвески, браслеты — по вашим требованиям." },
      { title: "Люксовая упаковка и презентация", desc: "Каждый заказ поставляется в премиальной ювелирной упаковке — готово к подарку. Идеально для помолвок, юбилеев и особых случаев." },
      { title: "Доставка по всему миру", desc: "Безопасная застрахованная и дискретная доставка по всему миру. С нашего производства — прямо к вашей двери." },
      { title: "Личная консультация", desc: "Общайтесь напрямую с нашими экспертами по бриллиантам через Telegram или WhatsApp. Мы ведём вас от выбора камня до готового изделия." },
    ],
  },
  gallery: {
    overline: "Наше мастерство",
    h2: "",
    h2italic: "Коллекция",
    subtext: "Каждое изделие произведено на нашем заводе с сертифицированными камнями, точной закрепкой и вниманием к долговечному качеству. Всё доступно для B2B оптовых поставок.",
    b2bPanel: "B2B",
    b2bSub: "Оптовые поставки",
    ctaText: "Все изделия доступны для B2B оптовых продаж — сертифицированы, изготовлены и готовы к отправке.",
    catalogueBtn: "Запросить оптовый каталог",
    items: [
      { label: "Обручальные кольца", tag: "Фирменная коллекция" },
      { label: "Колье с бриллиантами", tag: "Серия подвесок" },
      { label: "Серьги-люстры", tag: "Коллекция Drop" },
      { label: "Гало-солитер", tag: "Премиум" },
      { label: "Теннисные браслеты", tag: "Вечность" },
      { label: "Эксклюзивные изделия", tag: "Люкс" },
      { label: "Россыпные бриллианты", tag: "GIA · IGI · HRD" },
      { label: "Ювелирные наборы", tag: "Свадебный" },
    ],
  },
  globalMap: {
    overline: "Наш охват",
    h2: "Глобальная",
    h2italic: "сеть продаж",
    legendHQ: "Главный офис продаж — Дубай",
    legendMfg: "Производственный центр — Мумбаи",
    legendSales: "Офисы продаж",
    mfgLabel: "Производственный центр",
    salesLabel: "Офисы продаж",
    mainSalesLabel: "Главный офис продаж",
    loadingMap: "Загрузка карты…",
  },
};

const translations: Record<Lang, Translations> = { en, ru };

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  t: en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {

  // Russian-speaking browser locales
  const RU_LOCALES = ["ru", "be", "kk", "uk", "ky", "tg", "uz", "az", "hy"];
  // Russian-speaking country codes (ISO 3166-1 alpha-2)
  const RU_COUNTRIES = new Set([
    "RU","BY","KZ","UA","KG","TJ","UZ","AZ","AM","GE","MD",
    "LV","LT","EE","TM","MN",
  ]);

  const detectBrowserLang = (): Lang | null => {
    try {
      const langs = navigator.languages || [navigator.language];
      for (const l of langs) {
        const code = l.split("-")[0].toLowerCase();
        if (RU_LOCALES.includes(code)) return "ru";
      }
    } catch {}
    return null;
  };

  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const stored = localStorage.getItem("jnk_lang") as Lang;
      if (stored === "ru" || stored === "en") return stored;
    } catch {}
    return detectBrowserLang() ?? "en";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("jnk_lang", l); } catch {}
    document.documentElement.lang = l === "ru" ? "ru" : "en";
  };

  useEffect(() => {
    document.documentElement.lang = lang === "ru" ? "ru" : "en";
  }, [lang]);

  // IP geolocation — only runs if user has NO stored preference and browser didn't already resolve to RU
  useEffect(() => {
    try {
      const stored = localStorage.getItem("jnk_lang");
      if (stored === "ru" || stored === "en") return;
      if (detectBrowserLang() === "ru") return;
    } catch {}

    fetch("https://ipapi.co/json/", { signal: AbortSignal.timeout(4000) })
      .then((r) => r.json())
      .then((data) => {
        if (data && RU_COUNTRIES.has(String(data.country_code).toUpperCase())) {
          setLangState("ru");
          document.documentElement.lang = "ru";
        }
      })
      .catch(() => {
        return fetch("http://ip-api.com/json/?fields=countryCode", { signal: AbortSignal.timeout(4000) })
          .then((r) => r.json())
          .then((data) => {
            if (data && RU_COUNTRIES.has(String(data.countryCode).toUpperCase())) {
              setLangState("ru");
              document.documentElement.lang = "ru";
            }
          })
          .catch(() => {});
      });
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
