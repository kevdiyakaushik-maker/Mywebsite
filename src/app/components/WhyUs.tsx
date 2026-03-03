import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import necklaceImg from "figma:asset/5bbb02870d939ba7ffe8b5ffafb390fa0902b45e.png";
import { useLang } from "./LanguageContext";

export function WhyUs() {
  const { t } = useLang();
  const w = t.whyus;

  return (
    <section className="overflow-hidden" style={{ background: "#F7F2EA" }}>
      <div style={{ background: "#1A1108" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-14 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Benefits list */}
          <div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-xs tracking-[0.45em] uppercase" style={{ color: "#C9A96E", fontFamily: "'Jost', sans-serif", fontWeight: 400 }}>{w.overline}</span>
                <div className="h-px flex-1" style={{ background: "rgba(26,17,8,0.12)" }} />
              </div>
              <h2 className="mb-12 leading-none" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, color: "#1A1108", fontSize: "clamp(38px, 5vw, 64px)", lineHeight: 1.0 }}>
                {w.h2line1}
                <br />
                <em style={{ color: "#C9A96E" }}>{w.h2line2}</em>
              </h2>
            </motion.div>

            <div className="border-t" style={{ borderColor: "rgba(26,17,8,0.1)" }}>
              {w.benefits.map(({ title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.07 }}
                  className="flex gap-5 py-5 border-b group cursor-default transition-all duration-300 hover:pl-3"
                  style={{ borderColor: "rgba(26,17,8,0.08)" }}
                >
                  <span className="flex-shrink-0 mt-1.5" style={{ color: "#C9A96E", fontSize: "8px" }}>◆</span>
                  <div>
                    <div className="mb-0.5 group-hover:text-[#C9A96E] transition-colors" style={{ fontFamily: "'Playfair Display', serif", color: "#1A1108", fontWeight: 400 }}>{title}</div>
                    <div className="text-sm" style={{ color: "#8C7B65", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>{desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image + pull quote */}
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="relative aspect-[3/4] overflow-hidden group">
              <ImageWithFallback src={necklaceImg} alt="Diamond tennis necklace" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,17,8,0.5) 0%, transparent 60%)" }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="p-8 border"
              style={{ background: "#1A1108", borderColor: "rgba(201,169,110,0.2)" }}
            >
              <div className="text-4xl mb-4" style={{ color: "#C9A96E", fontFamily: "'Playfair Display', serif", opacity: 0.5 }}>"</div>
              <p className="text-lg mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "#FEFCF8", fontWeight: 400, fontStyle: "italic", lineHeight: 1.5 }}>
                {w.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-6 h-px" style={{ background: "#C9A96E" }} />
                <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "#9A8B65", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>{w.quoteLabel}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
