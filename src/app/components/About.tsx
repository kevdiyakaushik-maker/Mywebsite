import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLang } from "./LanguageContext";

const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };

export function About() {
  const { t } = useLang();
  const a = t.about;

  return (
    <section id="about" className="overflow-hidden" style={{ background: "#F7F2EA" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-14 pt-28 pb-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center"
        >
          {/* Text */}
          <div>
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
              <span className="text-xs tracking-[0.45em] uppercase" style={{ color: "#C9A96E", fontFamily: "'Jost', sans-serif", fontWeight: 400 }}>
                {a.overline}
              </span>
              <div className="h-px flex-1" style={{ background: "rgba(26,17,8,0.12)" }} />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mb-8 leading-none"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, color: "#1A1108", fontSize: "clamp(38px, 5.5vw, 72px)", lineHeight: 1.0 }}
            >
              {a.h2line1}
              <br />
              <em style={{ color: "#C9A96E" }}>{a.h2line2}</em>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-lg leading-relaxed mb-5" style={{ color: "#5A4A35", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
              {a.p1}
            </motion.p>
            <motion.p variants={fadeUp} className="leading-relaxed mb-10" style={{ color: "#8C7B65", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
              {a.p2}
            </motion.p>

            <motion.div variants={fadeUp} className="space-y-3 mb-12">
              {a.bullets.map((pt) => (
                <div key={pt} className="flex items-center gap-4">
                  <span style={{ color: "#C9A96E", fontSize: "10px" }}>◆</span>
                  <span className="text-sm" style={{ color: "#5A4A35", fontFamily: "'Jost', sans-serif", fontWeight: 400 }}>{pt}</span>
                </div>
              ))}
            </motion.div>

            <motion.button
              variants={fadeUp}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group inline-flex items-center gap-4 text-xs tracking-[0.3em] uppercase transition-colors"
              style={{ color: "#1A1108", fontFamily: "'Jost', sans-serif", fontWeight: 500 }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#C9A96E"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#1A1108"; }}
            >
              <span className="w-8 h-px" style={{ background: "#C9A96E" }} />
              {a.cta}
              <span className="group-hover:translate-x-1 transition-transform" style={{ color: "#C9A96E" }}>→</span>
            </motion.button>
          </div>

          {/* Image */}
          <motion.div variants={fadeUp} className="relative">
            <div className="aspect-[3/4] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1617135945830-aad51a29ef50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwamV3ZWxsZXJ5JTIwbHV4dXJ5JTIwY3JhZnRzbWFuc2hpcCUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzcyNTI0MjMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Diamond jewellery craftsmanship by JNK DIAM"
                className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
              />
            </div>
            {/* Floating GIA badge */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 w-32 h-32 flex-col items-center justify-center shadow-2xl" style={{ background: "#1A1108" }}>
              <div className="text-[10px] tracking-[0.3em] uppercase mb-1.5" style={{ color: "#C9A96E", fontFamily: "'Jost', sans-serif" }}>Lab</div>
              <div className="text-2xl text-white" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>GIA</div>
              <div className="text-[9px] tracking-[0.25em] uppercase mt-1" style={{ color: "#9A8B65", fontFamily: "'Jost', sans-serif" }}>Certified</div>
            </div>
            {/* Corner ornament */}
            <div className="absolute -top-4 -right-4">
              <div className="w-16 h-16 relative">
                <div className="absolute top-0 right-0 w-full h-px" style={{ background: "#C9A96E" }} />
                <div className="absolute top-0 right-0 w-px h-full" style={{ background: "#C9A96E" }} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Three pillars */}
      <div style={{ background: "#1A1108" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-14">
          <div className="grid md:grid-cols-3">
            {[
              { num: "01", title: a.pillar1title, desc: a.pillar1desc },
              { num: "02", title: a.pillar2title, desc: a.pillar2desc },
              { num: "03", title: a.pillar3title, desc: a.pillar3desc },
            ].map(({ num, title, desc }, i) => (
              <div
                key={num}
                className="py-14 px-10 border-b md:border-b-0 group cursor-default transition-colors duration-300"
                style={{ borderRight: i < 2 ? "1px solid rgba(201,169,110,0.1)" : "none", borderColor: "rgba(201,169,110,0.1)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "rgba(201,169,110,0.04)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "transparent"; }}
              >
                <div className="text-xs mb-5" style={{ color: "#C9A96E", fontFamily: "'Jost', sans-serif", letterSpacing: "0.3em" }}>{num}</div>
                <h3 className="text-xl mb-4 group-hover:text-[#E8D5A8] transition-colors" style={{ fontFamily: "'Playfair Display', serif", color: "#FEFCF8", fontWeight: 400 }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#9A8B65", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}