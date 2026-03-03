import qualityImg from "figma:asset/2241546fcfa9a67d7324e456cf09dd93efc25516.png";
import giaLogo from "figma:asset/256ae0fb2f05ae3e83c912f49067a5572fe6708e.png";
import hrdLogo from "figma:asset/3a10c3a6c4f797b8cb37de6a32b3ce03a6d06b4c.png";
import igiLogo from "figma:asset/10db3f406d3f19bda8fbb924c2bd689cfc2b5347.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useLang } from "./LanguageContext";

const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } };

function GIABadge() {
  return (
    <div className="flex flex-col items-center justify-center h-full" style={{ background: "#FFFFFF" }}>
      <img src={giaLogo} alt="GIA" className="w-auto h-16 object-contain" />
    </div>
  );
}
function IGIBadge() {
  return (
    <div className="flex flex-col items-center justify-center h-full overflow-hidden" style={{ background: "#FFFFFF" }}>
      <img src={hrdLogo} alt="HRD Antwerp" className="w-full h-full object-cover object-center" />
    </div>
  );
}
function HRDBadge() {
  return (
    <div className="flex flex-col items-center justify-center h-full" style={{ background: "#FFFFFF" }}>
      <img src={igiLogo} alt="IGI" className="w-auto h-16 object-contain" />
    </div>
  );
}

const certs = [
  { Badge: GIABadge, abbr: "GIA" },
  { Badge: IGIBadge, abbr: "IGI" },
  { Badge: HRDBadge, abbr: "HRD" },
];

export function Certifications() {
  const { t } = useLang();
  const c = t.certifications;

  return (
    <section id="certifications" className="overflow-hidden" style={{ background: "#0A0703" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-14 pt-28 pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-8" style={{ background: "#C9A96E" }} />
            <span className="text-xs tracking-[0.45em] uppercase" style={{ color: "#C9A96E", fontFamily: "'Jost', sans-serif", fontWeight: 400 }}>{c.overline}</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-end">
            <h2 className="leading-none" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, color: "#FEFCF8", fontSize: "clamp(38px, 5.5vw, 72px)", lineHeight: 1.0 }}>
              {c.h2line1}
              <br />
              <em style={{ color: "#C9A96E" }}>{c.h2line2}</em>
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "#9A8B65", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
              {c.subtext}
            </p>
          </div>
        </motion.div>

        {/* Certification cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-20">
          {certs.map(({ Badge, abbr }, i) => (
            <motion.div
              key={abbr}
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.15 }}
              className="group cursor-default border transition-all duration-500"
              style={{ borderColor: "rgba(201,169,110,0.1)", background: "rgba(255,255,255,0.015)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,169,110,0.45)"; (e.currentTarget as HTMLDivElement).style.background = "rgba(201,169,110,0.04)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,169,110,0.1)"; (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.015)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}
            >
              <div className="h-28"><Badge /></div>
              <div className="px-8 py-5" />
            </motion.div>
          ))}
        </div>

        {/* Image + grading grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
            className="relative overflow-hidden min-h-96 group"
          >
            <ImageWithFallback src={qualityImg} alt="Diamond inspection" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,7,3,0.9) 0%, rgba(10,7,3,0.2) 60%)" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(201,169,110,0.08) 0%, transparent 50%)" }} />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="text-xs tracking-[0.3em] uppercase mb-2" style={{ color: "#C9A96E", fontFamily: "'Jost', sans-serif" }}>{c.imageLabel}</div>
              <div className="text-2xl text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{c.imageTitle}</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
            className="border p-10 flex flex-col justify-between"
            style={{ borderColor: "rgba(201,169,110,0.15)", background: "rgba(255,255,255,0.02)" }}
          >
            <div>
              <h3 className="text-2xl text-white mb-2" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}>{c.gradingTitle}</h3>
              <p className="text-sm mb-8 leading-relaxed" style={{ color: "#9A8B65", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>{c.gradingDesc}</p>
              <div className="grid grid-cols-2 gap-y-4">
                {c.gradingStandards.map((s) => (
                  <div key={s} className="flex items-center gap-3">
                    <span style={{ color: "#C9A96E", fontSize: "8px" }}>◆</span>
                    <span className="text-sm" style={{ color: "#E8D5A8", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 p-6 border" style={{ borderColor: "rgba(201,169,110,0.2)", background: "rgba(201,169,110,0.05)" }}>
              <p className="text-sm leading-relaxed" style={{ color: "#E8D5A8", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>{c.certNote}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
