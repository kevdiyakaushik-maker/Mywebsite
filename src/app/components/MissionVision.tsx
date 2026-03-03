import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import diamondCuttingImg from "figma:asset/c89cb68c50ec0af8927001550a3938aa4bb53d73.png";
import { useLang } from "./LanguageContext";

export function MissionVision() {
  const { t } = useLang();
  const mv = t.missionVision;

  return (
    <section className="overflow-hidden" style={{ background: "#0A0703" }}>
      <div className="grid md:grid-cols-2 min-h-[80vh]">
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }}
          className="relative overflow-hidden flex flex-col justify-end group min-h-[480px]"
        >
          <div className="absolute inset-0">
            <ImageWithFallback src={diamondCuttingImg} alt="Diamond cutting" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" style={{ opacity: 0.7 }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,7,3,0.96) 0%, rgba(10,7,3,0.4) 60%, rgba(10,7,3,0.1) 100%)" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(201,169,110,0.1) 0%, transparent 50%)" }} />
          </div>
          <div className="relative z-10 p-10 md:p-16">
            <div className="flex items-center gap-3 mb-6">
              <span style={{ color: "#C9A96E", fontSize: "10px" }}>◆</span>
              <span className="text-xs tracking-[0.4em] uppercase" style={{ color: "#C9A96E", fontFamily: "'Jost', sans-serif", fontWeight: 400 }}>{mv.missionOverline}</span>
            </div>
            <h2 className="text-white mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.1 }}>
              {mv.missionH2line1}
              <br />
              <em style={{ color: "#C9A96E" }}>{mv.missionH2line2}</em>
            </h2>
            <p className="text-lg leading-relaxed max-w-md" style={{ color: "#E8D5A8", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>{mv.missionText}</p>
            <div className="mt-10 w-16 h-px" style={{ background: "linear-gradient(90deg, #C9A96E, transparent)" }} />
          </div>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
          className="flex flex-col justify-between p-10 md:p-16 min-h-[480px]"
          style={{ background: "#120E08", borderLeft: "1px solid rgba(201,169,110,0.1)" }}
        >
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span style={{ color: "#C9A96E", fontSize: "10px" }}>◆</span>
              <span className="text-xs tracking-[0.4em] uppercase" style={{ color: "#C9A96E", fontFamily: "'Jost', sans-serif", fontWeight: 400 }}>{mv.visionOverline}</span>
            </div>
            <h2 className="leading-tight mb-8" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, color: "#FEFCF8", fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.1 }}>
              {mv.visionH2line1}
              <br />
              <em style={{ color: "#C9A96E" }}>{mv.visionH2line2}</em>
            </h2>
            <p className="text-lg leading-relaxed max-w-md" style={{ color: "#E8D5A8", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>{mv.visionText}</p>
          </div>

          <div>
            <div className="pt-10 pb-10 border-t border-b mb-8" style={{ borderColor: "rgba(201,169,110,0.15)" }}>
              <div className="grid grid-cols-3 gap-4">
                {mv.values.map((v) => (
                  <div key={v} className="text-center">
                    <div className="w-4 h-px mx-auto mb-3" style={{ background: "#C9A96E" }} />
                    <div className="text-xs tracking-[0.2em] uppercase" style={{ color: "#9A8B65", fontFamily: "'Jost', sans-serif", fontWeight: 400 }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-4 text-xs tracking-[0.3em] uppercase group transition-colors"
              style={{ color: "#C9A96E", fontFamily: "'Jost', sans-serif", fontWeight: 500 }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#E8D5A8"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#C9A96E"; }}
            >
              <span className="h-px w-6 group-hover:w-12 transition-all duration-300" style={{ background: "#C9A96E" }} />
              {mv.cta}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
