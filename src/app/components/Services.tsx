import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useState } from "react";
import { useLang } from "./LanguageContext";

export function Services() {
  const [activeRow, setActiveRow] = useState<number | null>(null);
  const { t } = useLang();
  const s = t.services;

  return (
    <section id="services" className="overflow-hidden" style={{ background: "#0A0703" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-14 pt-28 pb-20">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20 items-end">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-8" style={{ background: "#C9A96E" }} />
              <span className="text-xs tracking-[0.45em] uppercase" style={{ color: "#C9A96E", fontFamily: "'Jost', sans-serif", fontWeight: 400 }}>{s.overline}</span>
            </div>
            <h2 className="leading-none" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, color: "#FEFCF8", fontSize: "clamp(38px, 5.5vw, 72px)", lineHeight: 1.0 }}>
              {s.h2line1}
              <br />
              <em style={{ color: "#C9A96E" }}>{s.h2line2}</em>
              <br />
              {s.h2line3}
            </h2>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.2 }} className="space-y-6">
            <div className="aspect-[16/9] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1766910699521-eab05158a2a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwcmluZyUyMGVuZ2FnZW1lbnQlMjBsdXh0cnl8ZW58MXx8fHwxNzcyMzA2MDUyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Diamond jewellery luxury"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#9A8B65", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>{s.subtext}</p>
          </motion.div>
        </div>

        {/* Service rows */}
        <div className="border-t" style={{ borderColor: "rgba(201,169,110,0.15)" }}>
          {s.items.map(({ num, title, desc, tags }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.08 }}
              className="grid md:grid-cols-12 gap-6 py-8 border-b cursor-default transition-all duration-300"
              style={{ borderColor: "rgba(201,169,110,0.1)", background: activeRow === i ? "rgba(201,169,110,0.04)" : "transparent", paddingLeft: activeRow === i ? "16px" : "0px" }}
              onMouseEnter={() => setActiveRow(i)}
              onMouseLeave={() => setActiveRow(null)}
            >
              <div className="md:col-span-1 pt-0.5">
                <span className="text-xs" style={{ color: "#C9A96E", fontFamily: "'Jost', sans-serif", letterSpacing: "0.2em" }}>{num}</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-xl transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, color: activeRow === i ? "#E8D5A8" : "#FEFCF8" }}>{title}</h3>
              </div>
              <div className="md:col-span-4">
                <p className="text-sm leading-relaxed" style={{ color: "#9A8B65", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>{desc}</p>
              </div>
              <div className="md:col-span-3 flex flex-wrap gap-2 items-start">
                {tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 border" style={{ borderColor: "rgba(201,169,110,0.18)", color: "#9A8B65", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
          className="mt-16 p-8 sm:p-12 md:p-16 border grid md:grid-cols-2 gap-12 items-center"
          style={{ borderColor: "rgba(201,169,110,0.2)", background: "rgba(201,169,110,0.04)" }}
        >
          <div>
            <h3 className="text-3xl text-white mb-4" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, lineHeight: 1.15 }}>
              {s.supportTitle}<br /><em style={{ color: "#C9A96E" }}>{s.supportTitleItalic}</em>
            </h3>
            <p className="leading-relaxed" style={{ color: "#9A8B65", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>{s.supportDesc}</p>
          </div>
          <div className="space-y-6">
            {s.supportItems.map(({ t: title, d: desc }) => (
              <div key={title} className="flex gap-5">
                <span className="flex-shrink-0 mt-1" style={{ color: "#C9A96E", fontSize: "10px" }}>◆</span>
                <div>
                  <div className="text-white mb-0.5" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}>{title}</div>
                  <div className="text-sm" style={{ color: "#9A8B65", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}