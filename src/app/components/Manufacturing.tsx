import jewelleryWorkshopImg from 'figma:asset/64a0cf2a95b25ba9d1a8577b0ac414dd982bc690.png';
import diamondSettingImg from 'figma:asset/01fdea4f8d1e6b9ac57a04a0ff8696dac28a7611.png';
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useLang } from "./LanguageContext";

export function Manufacturing() {
  const { t } = useLang();
  const m = t.manufacturing;

  return (
    <section id="manufacturing" className="overflow-hidden" style={{ background: "#F7F2EA" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-14 pt-28 pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
          className="grid lg:grid-cols-2 gap-16 mb-20 items-end"
        >
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs tracking-[0.45em] uppercase" style={{ color: "#C9A96E", fontFamily: "'Jost', sans-serif", fontWeight: 400 }}>{m.overline}</span>
              <div className="h-px flex-1" style={{ background: "rgba(26,17,8,0.12)" }} />
            </div>
            <h2 className="leading-none" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, color: "#1A1108", fontSize: "clamp(38px, 5.5vw, 72px)", lineHeight: 1.0 }}>
              {m.h2line1}
              <br />
              <em style={{ color: "#C9A96E" }}>{m.h2line2}</em>
            </h2>
          </div>
          <div className="pb-2">
            <p className="text-lg leading-relaxed mb-4" style={{ color: "#5A4A35", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>{m.p1}</p>
            <p className="leading-relaxed" style={{ color: "#8C7B65", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>{m.p2}</p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Process timeline */}
          <div className="relative">
            <div className="absolute left-3 top-4 bottom-4 w-px" style={{ background: "linear-gradient(180deg, #C9A96E, rgba(201,169,110,0.1))" }} />
            {m.steps.map(({ num, title, desc }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }}
                className="flex gap-8 pb-10 group relative"
              >
                <div className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center relative z-10 mt-0.5 transition-all duration-300 group-hover:scale-110" style={{ background: "#F7F2EA", border: "1.5px solid #C9A96E" }}>
                  <div className="w-2 h-2 rounded-full" style={{ background: "#C9A96E" }} />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: "#C9A96E", fontFamily: "'Jost', sans-serif" }}>{num}</div>
                  <h3 className="text-xl mb-2 group-hover:text-[#C9A96E] transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif", color: "#1A1108", fontWeight: 400 }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#8C7B65", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stacked images */}
          <div className="space-y-4">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="aspect-video overflow-hidden group">
              <ImageWithFallback src="https://images.unsplash.com/photo-1654076847645-b72b3b66d576?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwY3V0dGluZyUyMHBvbGlzaGluZyUyMHdvcmtzaG9wJTIwcHJlY2lzaW9uJTIwdG9vbHN8ZW58MXx8fHwxNzcyMzA4NjczfDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Diamond precision cutting" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.15 }} className="aspect-video overflow-hidden group">
              <ImageWithFallback src={jewelleryWorkshopImg} alt="Jewellery workshop" className="w-full h-full object-cover object-center transition-transform duration-[2s] group-hover:scale-105" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.3 }} className="aspect-video overflow-hidden group">
              <ImageWithFallback src={diamondSettingImg} alt="Diamond stone setting" className="w-full h-full object-cover object-center transition-transform duration-[2s] group-hover:scale-105" />
            </motion.div>
          </div>
        </div>

        {/* Efficiency strip */}
        <div className="mt-16 border-t grid md:grid-cols-3" style={{ borderColor: "rgba(26,17,8,0.1)" }}>
          {m.efficiency.map(({ label, title, desc }, i) => (
            <div
              key={label}
              className="py-10 px-8 group cursor-default border-b md:border-b-0"
              style={{
                borderRight: i < 2 ? "1px solid rgba(26,17,8,0.1)" : "none",
                borderBottomColor: "rgba(26,17,8,0.1)",
              }}
            >
              <div className="text-xs tracking-[0.25em] mb-3" style={{ color: "#C9A96E", fontFamily: "'Jost', sans-serif" }}>{label}</div>
              <h4 className="mb-2 group-hover:text-[#C9A96E] transition-colors" style={{ fontFamily: "'Playfair Display', serif", color: "#1A1108" }}>{title}</h4>
              <p className="text-sm" style={{ color: "#8C7B65", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}