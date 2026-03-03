import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useLang } from "./LanguageContext";

export function EthicalSourcing() {
  const { t } = useLang();
  const e = t.ethical;

  return (
    <section className="overflow-hidden" style={{ background: "#0A0703" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-14 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="h-px w-8" style={{ background: "#C9A96E" }} />
          <span className="text-xs tracking-[0.45em] uppercase" style={{ color: "#C9A96E", fontFamily: "'Jost', sans-serif", fontWeight: 400 }}>{e.overline}</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
              className="mb-10 leading-none"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, color: "#FEFCF8", fontSize: "clamp(38px, 5vw, 64px)", lineHeight: 1.0 }}
            >
              {e.h2line1}
              <br />
              <em style={{ color: "#C9A96E" }}>{e.h2line2}</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.1 }}
              className="text-lg leading-relaxed mb-12"
              style={{ color: "#9A8B65", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
            >
              {e.intro}
            </motion.p>

            <div className="border-t" style={{ borderColor: "rgba(201,169,110,0.15)" }}>
              {e.points.map(({ num, title, abbr, desc }, i) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className="flex gap-7 py-7 border-b group cursor-default"
                  style={{ borderColor: "rgba(201,169,110,0.12)" }}
                >
                  <span className="text-xs flex-shrink-0 mt-0.5 w-6" style={{ color: "#C9A96E", fontFamily: "'Jost', sans-serif", letterSpacing: "0.15em" }}>{num}</span>
                  <div>
                    <h3 className="mb-1.5 group-hover:text-[#E8D5A8] transition-colors" style={{ fontFamily: "'Playfair Display', serif", color: "#FEFCF8", fontWeight: 400 }}>
                      {title}{abbr && <span className="text-sm ml-2" style={{ color: "#9A8B65", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>({abbr})</span>}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#9A8B65", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1771922654039-93bbda6f1c84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3VnaCUyMGRpYW1vbmQlMjBnZW1zdG9uZSUyMG1pbmluZyUyMGV0aGljYWx8ZW58MXx8fHwxNzcyMzA4NjczfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Ethical diamond sourcing"
                className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,7,3,0.5) 0%, transparent 60%)" }} />
            </div>
            <div className="absolute -bottom-4 -right-4">
              <div className="w-20 h-20 relative">
                <div className="absolute bottom-0 right-0 w-full h-px" style={{ background: "#C9A96E" }} />
                <div className="absolute bottom-0 right-0 w-px h-full" style={{ background: "#C9A96E" }} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tags strip */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="mt-16 pt-10 border-t flex flex-wrap gap-3"
          style={{ borderColor: "rgba(201,169,110,0.15)" }}
        >
          {e.tags.map((tag) => (
            <span
              key={tag}
              className="px-5 py-2.5 text-xs tracking-[0.15em] uppercase border transition-all hover:border-[#C9A96E] hover:text-[#E8D5A8] cursor-default"
              style={{ borderColor: "rgba(201,169,110,0.2)", color: "#9A8B65", fontFamily: "'Jost', sans-serif", fontWeight: 400 }}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
