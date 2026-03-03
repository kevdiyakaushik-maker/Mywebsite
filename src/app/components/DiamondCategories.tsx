import whiteDiamondImg from "figma:asset/3d68a922461735ab9baf9e52abd62d5397166463.png";
import brownDiamondImg from "figma:asset/e08fc139c98cd8f5c421a09a7436520238c7f4d8.png";
import colouredDiamondImg from "figma:asset/1c70d7abf457586d0fe48d440f64e83e22b66b28.png";
import yellowDiamondImg from "figma:asset/5763be90403daff7c61da2a875c667e7fabeffd3.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useState } from "react";
import { useLang } from "./LanguageContext";

const srcMap: Record<string, string> = {
  white: whiteDiamondImg,
  brown: brownDiamondImg,
  yellow: yellowDiamondImg,
  coloured: colouredDiamondImg,
};

const accentMap: Record<string, { accent: string; accentText: string }> = {
  white: { accent: "#E8E4DC", accentText: "#C9A96E" },
  brown: { accent: "#7B4F2E", accentText: "#D4A574" },
  yellow: { accent: "#C9A96E", accentText: "#A07D3A" },
  coloured: { accent: "#8B6DB0", accentText: "#B89FD4" },
};

export function DiamondCategories() {
  const [active, setActive] = useState<string>("white");
  const { t } = useLang();
  const d = t.diamonds;
  const categories = d.categories;
  const activeCategory = categories.find((c) => c.id === active)!;

  return (
    <section id="diamond-categories" style={{ background: "#0C0905" }} className="overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-14 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-4"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs tracking-[0.45em] uppercase" style={{ color: "#C9A96E", fontFamily: "'Jost', sans-serif", fontWeight: 400 }}>{d.overline}</span>
              <div className="h-px flex-1 max-w-16" style={{ background: "rgba(201,169,110,0.25)" }} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, color: "#FAF6EF", fontSize: "clamp(36px, 5vw, 68px)", lineHeight: 1.05 }}>
              {d.h2.split(" ")[0]}{" "}
              <em style={{ color: "#C9A96E" }}>{d.h2.split(" ").slice(1).join(" ")}</em>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed md:text-right" style={{ color: "#8C7B65", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>{d.subtext}</p>
        </motion.div>
      </div>

      {/* Tab Selector */}
      <div className="max-w-7xl mx-auto px-6 lg:px-14 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {categories.map((cat, i) => (
            <motion.button
              key={cat.id}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setActive(cat.id)}
              className="relative group text-left p-5 border transition-all duration-400 overflow-hidden"
              style={{ borderColor: active === cat.id ? "#C9A96E" : "rgba(255,255,255,0.08)", background: active === cat.id ? "rgba(201,169,110,0.08)" : "rgba(255,255,255,0.02)" }}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 transition-transform duration-400" style={{ background: "#C9A96E", transform: active === cat.id ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left" }} />
              <div className="text-[10px] tracking-[0.35em] uppercase mb-2" style={{ fontFamily: "'Jost', sans-serif", color: active === cat.id ? "#C9A96E" : "#5A4F40", transition: "color 0.3s" }}>
                {cat.tag.split(" · ")[0]}
              </div>
              <div className="text-base" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, color: active === cat.id ? "#FAF6EF" : "#8C7B65", transition: "color 0.3s" }}>
                {cat.label}
              </div>
              <div className="text-[10px] mt-1 tracking-wider" style={{ fontFamily: "'Jost', sans-serif", color: active === cat.id ? "#C9A96E" : "#3A3027", transition: "color 0.3s" }}>
                {cat.badge}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Active Detail */}
      <div className="max-w-7xl mx-auto px-6 lg:px-14 pb-28">
        <motion.div
          key={activeCategory.id}
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-0 overflow-hidden"
          style={{ border: "1px solid rgba(201,169,110,0.15)" }}
        >
          {/* Image */}
          <div className="relative overflow-hidden" style={{ minHeight: "420px" }}>
            <ImageWithFallback src={srcMap[activeCategory.id]} alt={activeCategory.label} className="w-full h-full object-cover" style={{ minHeight: "420px" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,7,3,0.55) 0%, rgba(10,7,3,0.15) 100%)" }} />
            <div className="absolute top-6 left-6">
              <span className="px-4 py-1.5 text-[10px] tracking-[0.4em] uppercase" style={{ background: "rgba(10,7,3,0.75)", color: "#C9A96E", fontFamily: "'Jost', sans-serif", border: "1px solid rgba(201,169,110,0.4)", backdropFilter: "blur(8px)" }}>
                {activeCategory.badge}
              </span>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-[10px] tracking-[0.4em] uppercase mb-1" style={{ color: "#C9A96E", fontFamily: "'Jost', sans-serif" }}>{activeCategory.tag}</div>
              <div className="text-2xl" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, color: "#FAF6EF" }}>{activeCategory.label}</div>
            </div>
          </div>

          {/* Info Panel */}
          <div className="flex flex-col justify-between p-10 lg:p-14" style={{ background: "rgba(255,255,255,0.025)" }}>
            <div>
              <div className="text-xs tracking-[0.35em] uppercase mb-5" style={{ color: "#C9A96E", fontFamily: "'Jost', sans-serif", fontWeight: 400 }}>{activeCategory.subtitle}</div>
              <p className="text-base leading-relaxed mb-10" style={{ color: "#BFB5A5", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>{activeCategory.description}</p>
              <div className="space-y-4 mb-12">
                {activeCategory.specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#C9A96E" }} />
                    <span className="text-sm" style={{ color: "#8C7B65", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="h-px mb-8" style={{ background: "rgba(201,169,110,0.15)" }} />
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="group inline-flex items-center gap-5 text-xs tracking-[0.35em] uppercase transition-colors"
                style={{ color: "#C9A96E", fontFamily: "'Jost', sans-serif", fontWeight: 500 }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#FAF6EF"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#C9A96E"; }}
              >
                <span className="h-px w-8 group-hover:w-14 transition-all duration-300" style={{ background: "currentColor" }} />
                {d.enquireCta} {activeCategory.label}
                <span className="h-px w-8 group-hover:w-14 transition-all duration-300" style={{ background: "currentColor" }} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Colour swatches */}
        <div className="grid grid-cols-4 mt-3 gap-3">
          {categories.map((cat) => (
            <button key={cat.id} onClick={() => setActive(cat.id)} className="relative overflow-hidden transition-all duration-300" style={{ height: "6px", background: "rgba(255,255,255,0.06)" }}>
              <div className="absolute inset-0 transition-transform duration-400" style={{ background: cat.id === "white" ? "linear-gradient(90deg, #E8E4DC, #F5F2EC)" : cat.id === "brown" ? "linear-gradient(90deg, #7B4F2E, #C8895A)" : cat.id === "yellow" ? "linear-gradient(90deg, #C9A96E, #F0D080)" : "linear-gradient(90deg, #C084DC, #60A5FA, #34D399)", transform: active === cat.id ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left" }} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
