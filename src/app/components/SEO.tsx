import { useEffect } from "react";
import { useLang } from "./LanguageContext";

export function SEO() {
  const { lang } = useLang();

  useEffect(() => {
    const isRu = lang === "ru";

    // Title
    document.title = isRu
      ? "JNK DIAM | Производитель бриллиантов GIA IGI HRD — B2B поставщик ювелирных украшений Дубай"
      : "JNK DIAM | GIA IGI HRD Certified Diamond Manufacturer & Jewellery Supplier – B2B Dubai";

    // Meta description
    let desc = document.querySelector("meta[name='description']");
    if (!desc) { desc = document.createElement("meta"); desc.setAttribute("name", "description"); document.head.appendChild(desc); }
    desc.setAttribute("content", isRu
      ? "JNK DIAM — вертикально интегрированный производитель бриллиантов и B2B поставщик ювелирных украшений в Дубае. Поставляем сертифицированные GIA, IGI и HRD россыпные бриллианты, готовые украшения с бриллиантами, обручальные кольца, колье, браслеты, серьги и оптовые партии бриллиантов. Без посредников, прямо с завода. Кимберлийский процесс, 100% без конфликтов."
      : "JNK DIAM is a vertically integrated diamond manufacturer and B2B jewellery supplier based in Dubai. We supply GIA, IGI & HRD certified loose diamonds, custom finished diamond jewellery, engagement rings, diamond necklaces, bracelets, earrings, and wholesale diamond parcels — conflict-free, Kimberley Process certified, AML compliant. Zero middlemen. Direct from factory."
    );

    // Keywords
    let kw = document.querySelector("meta[name='keywords']");
    if (!kw) { kw = document.createElement("meta"); kw.setAttribute("name", "keywords"); document.head.appendChild(kw); }
    kw.setAttribute("content", isRu
      ? "производитель бриллиантов, сертифицированные бриллианты, бриллианты GIA, бриллианты IGI, бриллианты HRD Антверпен, россыпные бриллианты оптом, B2B поставщик бриллиантов, производитель ювелирных украшений, готовые украшения с бриллиантами, кольца с бриллиантами на заказ, обручальные кольца с бриллиантами, колье с бриллиантами оптом, производитель браслетов с бриллиантами, поставщик серёг с бриллиантами, бриллианты без конфликтов, Кимберлийский процесс, этичный источник, натуральные бриллианты, партии бриллиантов, мелее бриллианты, круглая бриллиантовая огранка, принцесса, овал, подушка, изумруд, груша, солитер, павé, гало, украшения из белого золота, жёлтое золото с бриллиантами, платиновые кольца, ювелирный завод Дубай, оптовый поставщик украшений ОАЭ, прямые поставки с завода, экспорт бриллиантов, вертикально интегрированный производитель, 4C бриллианты, карат цвет чистота огранка, VS1 VS2 бриллианты, VVS бриллианты, SI бриллианты, бриллианты цвета D E F, люксовые украшения, производитель ювелирных украшений на заказ, соответствие ПОД"
      : "diamond manufacturer, certified diamonds, GIA certified diamonds, IGI certified diamonds, HRD Antwerp diamonds, loose diamonds wholesale, B2B diamond supplier, diamond jewellery manufacturer, finished diamond jewellery, custom diamond rings, diamond engagement rings, diamond necklace wholesale, diamond bracelet manufacturer, diamond earrings supplier, conflict-free diamonds, Kimberley Process diamonds, ethically sourced diamonds, natural diamonds, diamond parcels, diamond melee, brilliant cut diamonds, princess cut diamonds, round brilliant, oval diamonds, pear diamonds, cushion cut, emerald cut, diamond solitaire, pavé diamonds, halo diamond jewellery, diamond jewellery Dubai, jewellery manufacturer UAE, diamond factory Dubai, wholesale jewellery supplier, B2B jewellery wholesale, direct diamond factory, vertically integrated jewellery, certified diamond jewellery, 4C diamonds, carat colour clarity cut, VS1 VS2 diamonds, VVS diamonds, D E F colour diamonds, luxury diamond jewellery, AML compliant diamond supplier"
    );

    // Open Graph
    const ogTags: Record<string, string> = {
      "og:title": isRu
        ? "JNK DIAM | Производитель бриллиантов B2B — Дубай"
        : "JNK DIAM | Certified Diamond Manufacturer & B2B Jewellery Supplier",
      "og:description": isRu
        ? "Вертикально интегрированный производитель бриллиантов, поставляющий сертифицированные GIA, IGI и HRD россыпные бриллианты и готовые украшения. Без посредников."
        : "Vertically integrated diamond manufacturer supplying GIA, IGI & HRD certified loose diamonds and finished diamond jewellery to B2B partners worldwide. Zero middlemen. Conflict-free.",
      "og:type": "website",
      "og:site_name": "JNK DIAM",
      "og:locale": isRu ? "ru_RU" : "en_US",
      "og:locale:alternate": isRu ? "en_US" : "ru_RU",
    };
    Object.entries(ogTags).forEach(([prop, content]) => {
      let tag = document.querySelector(`meta[property='${prop}']`);
      if (!tag) { tag = document.createElement("meta"); tag.setAttribute("property", prop); document.head.appendChild(tag); }
      tag.setAttribute("content", content);
    });

    // Twitter Card
    const twitterTags: Record<string, string> = {
      "twitter:card": "summary_large_image",
      "twitter:title": isRu
        ? "JNK DIAM | Производитель бриллиантов GIA IGI HRD"
        : "JNK DIAM | GIA IGI HRD Certified Diamond Manufacturer",
      "twitter:description": isRu
        ? "B2B производитель бриллиантов и украшений — GIA, IGI, HRD. Без конфликтов. Прямые поставки с завода по всему миру."
        : "B2B diamond & jewellery manufacturer — GIA, IGI, HRD certified. Conflict-free. Direct factory supply worldwide.",
    };
    Object.entries(twitterTags).forEach(([name, content]) => {
      let tag = document.querySelector(`meta[name='${name}']`);
      if (!tag) { tag = document.createElement("meta"); tag.setAttribute("name", name); document.head.appendChild(tag); }
      tag.setAttribute("content", content);
    });

    // Robots
    let robots = document.querySelector("meta[name='robots']");
    if (!robots) { robots = document.createElement("meta"); robots.setAttribute("name", "robots"); document.head.appendChild(robots); }
    robots.setAttribute("content", "index, follow");

    // Hreflang links
    ["en", "ru"].forEach((l) => {
      const existing = document.querySelector(`link[hreflang='${l}']`);
      if (!existing) {
        const link = document.createElement("link");
        link.setAttribute("rel", "alternate");
        link.setAttribute("hreflang", l);
        link.setAttribute("href", `https://jnkdiam.com${l === "en" ? "/" : "/?lang=ru"}`);
        document.head.appendChild(link);
      }
    });
    // x-default
    if (!document.querySelector("link[hreflang='x-default']")) {
      const xd = document.createElement("link");
      xd.setAttribute("rel", "alternate");
      xd.setAttribute("hreflang", "x-default");
      xd.setAttribute("href", "https://jnkdiam.com/");
      document.head.appendChild(xd);
    }

    // Schema.org JSON-LD (bilingual)
    const existingSchema = document.getElementById("jnk-schema");
    if (existingSchema) existingSchema.remove();
    const script = document.createElement("script");
    script.id = "jnk-schema";
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "JewelryStore",
      "name": "JNK DIAM",
      "alternateName": "JNK DIAM — Производитель бриллиантов",
      "description": isRu
        ? "Вертикально интегрированный производитель бриллиантов и B2B поставщик украшений. Сертифицированные GIA, IGI, HRD россыпные бриллианты и готовые украшения. Без конфликтов, Кимберлийский процесс."
        : "Vertically integrated diamond manufacturer and B2B jewellery supplier. GIA, IGI, HRD certified loose diamonds and finished diamond jewellery. Conflict-free, Kimberley Process certified.",
      "url": "https://jnkdiam.com",
      "telephone": "+971581307969",
      "email": "info@jnkdiam.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "M05, Max Gold Building, Al Dhagaya, Gold Souk",
        "addressLocality": "Dubai",
        "addressCountry": "AE",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.2854",
        "longitude": "55.3047",
      },
      "priceRange": "$$$$",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": isRu ? "Бриллианты и ювелирные украшения" : "Diamond & Jewellery Products",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": isRu ? "Россыпные бриллианты GIA" : "GIA Certified Loose Diamonds", "description": isRu ? "Сертифицированные россыпные бриллианты в любой огранке, карате и чистоте." : "Certified loose diamonds in all cuts, carats and clarities." }},
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": isRu ? "Готовые украшения с бриллиантами" : "Finished Diamond Jewellery", "description": isRu ? "Кольца, колье, серьги и браслеты с бриллиантами собственного производства." : "Custom finished diamond rings, necklaces, earrings, bracelets and bangles manufactured in-house." }},
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": isRu ? "Украшения + россыпные бриллианты вместе" : "Jewellery + Certified Loose Diamonds Together", "description": isRu ? "Полный B2B-пакет — готовые украшения с сертифицированными камнями." : "Complete B2B package — finished diamond jewellery supplied with individually certified loose stones." }},
        ],
      },
      "sameAs": [
        "https://wa.me/971581307969",
        "https://t.me/Jnkdiam",
        "https://www.instagram.com/jnkdiam/",
      ],
    });
    document.head.appendChild(script);
  }, [lang]);

  return null;
}
