import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useState } from "react";
import tennisBraceletImg from "figma:asset/e94c926dc25220ed004196652f16faaf8c9671ca.png";
import engagementRingImg from "figma:asset/e6f85eb8bfec25b9d3412e25e454dde3bf8d8485.png";
import bespokePiecesImg from "figma:asset/3f42e42ffa3029d3c3340184601992dae1ecaee4.png";
import diamondNecklaceImg from "figma:asset/51026394223576831f4f2782b1c64ba63bceed18.png";
import looseDiamondsImg from "figma:asset/e4b56a6986e6f4dfe8fe1569bf2af0d040ccd4f8.png";
import bridalSetImg from "figma:asset/934dc0b7c4efef2366bdad15c064b06aa8724299.png";

import { useLang } from "./LanguageContext";

const imageSrcs = [
  engagementRingImg,
  diamondNecklaceImg,
  "https://images.unsplash.com/photo-1625516152414-8f33eef3d660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwZHJvcCUyMGVhcnJpbmdzJTIwZ29sZCUyMGx1eHVyeSUyMGpld2Vscnl8ZW58MXx8fHwxNzcyMzcyMjUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1652434329242-645c771240ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwaGFsbyUyMHNvbGl0YWlyZSUyMHJpbmclMjBwbGF0aW51bSUyMGx1eHVyeSUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzcyMzcyMjg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  tennisBraceletImg,
  bespokePiecesImg,
  looseDiamondsImg,
  bridalSetImg,
];

export function JewelleryGallery() {
  const [hovered, setHovered] = useState<number | null>(null);
  const { t } = useLang();
  const g = t.gallery;

  const items = g.items.map((item, i) => ({ ...item, id: i + 1, src: imageSrcs[i] }));

  return (
    <section id="gallery" className="overflow-hidden" style={{ background: "#F7F2EA" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-14 pt-28 pb-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs tracking-[0.45em] uppercase" style={{ color: "#C9A96E", fontFamily: "'Jost', sans-serif", fontWeight: 400 }}>{g.overline}</span>
              <div className="h-px flex-1 max-w-16" style={{ background: "rgba(26,17,8,0.15)" }} />
            </div>
            <h2 className="leading-none" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, color: "#1A1108", fontSize: "clamp(38px, 5.5vw, 72px)", lineHeight: 1.0 }}>
              {g.h2}{g.h2 ? " " : ""}<em style={{ color: "#C9A96E" }}>{g.h2italic}</em>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed md:text-right" style={{ color: "#8C7B65", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>{g.subtext}</p>
        </motion.div>
      </div>

      {/* Editorial grid */}
      <div className="grid grid-cols-2 md:grid-cols-4" style={{ gridAutoRows: "280px" }}>
        {items.slice(0, 4).map((item, i) => {
          const isTall = i === 0;
          return (
            <div key={item.id} className="relative overflow-hidden cursor-pointer group" style={{ gridRow: isTall ? "span 2" : "span 1" }} onMouseEnter={() => setHovered(item.id)} onMouseLeave={() => setHovered(null)}>
              <ImageWithFallback src={item.src} alt={item.label} className="w-full h-full object-cover transition-transform duration-[1.5s]" style={{ transform: hovered === item.id ? "scale(1.08)" : "scale(1)" }} />
              <div className="absolute inset-0 transition-opacity duration-500" style={{ background: "linear-gradient(to top, rgba(10,7,3,0.82) 0%, rgba(10,7,3,0.08) 50%, transparent 100%)", opacity: hovered === item.id ? 1 : 0.55 }} />
              <div className="absolute bottom-0 left-0 right-0 h-px transition-all duration-500" style={{ background: "#C9A96E", transform: hovered === item.id ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left" }} />
              <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-500" style={{ transform: hovered === item.id ? "translateY(0)" : "translateY(8px)", opacity: hovered === item.id ? 1 : 0.85 }}>
                <div className="text-[10px] tracking-[0.35em] uppercase mb-1.5" style={{ color: "#C9A96E", fontFamily: "'Jost', sans-serif" }}>{item.tag}</div>
                <div className="text-white text-lg" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}>{item.label}</div>
              </div>
            </div>
          );
        })}

        {/* B2B text panel */}
        <div className="relative flex items-center justify-center p-10" style={{ background: "#1A1108" }}>
          <div className="text-center">
            <div className="text-[10px] tracking-[0.4em] uppercase mb-4" style={{ color: "#C9A96E", fontFamily: "'Jost', sans-serif" }}>All Available</div>
            <div className="text-4xl text-white mb-3" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}>{g.b2bPanel}</div>
            <div className="text-xs tracking-widest uppercase mb-6" style={{ color: "#9A8B65", fontFamily: "'Jost', sans-serif" }}>{g.b2bSub}</div>
            <div className="w-8 h-px mx-auto" style={{ background: "#C9A96E" }} />
          </div>
        </div>

        {items.slice(4).map((item) => (
          <div key={item.id} className="relative overflow-hidden cursor-pointer group" onMouseEnter={() => setHovered(item.id)} onMouseLeave={() => setHovered(null)}>
            <ImageWithFallback src={item.src} alt={item.label} className="w-full h-full object-cover transition-transform duration-[1.5s]" style={{ transform: hovered === item.id ? "scale(1.08)" : "scale(1)" }} />
            <div className="absolute inset-0 transition-opacity duration-500" style={{ background: "linear-gradient(to top, rgba(10,7,3,0.1) 0%, rgba(10,7,3,0.1) 60%)", opacity: hovered === item.id ? 1 : 0.5 }} />
            <div className="absolute bottom-0 left-0 right-0 h-px transition-all duration-500" style={{ background: "#C9A96E", transform: hovered === item.id ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left" }} />
            <div className="absolute bottom-0 left-0 right-0 p-5 transition-all duration-500" style={{ transform: hovered === item.id ? "translateY(0)" : "translateY(8px)", opacity: hovered === item.id ? 1 : 0.7 }}>
              <div className="text-[10px] tracking-[0.3em] uppercase mb-1" style={{ color: "#C9A96E", fontFamily: "'Jost', sans-serif" }}>{item.tag}</div>
              <div className="text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{item.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 lg:px-14 py-16 text-center">
        <p className="mb-6 text-sm" style={{ color: "#8C7B65", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>{g.ctaText}</p>
        <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="group inline-flex items-center gap-5 text-xs tracking-[0.35em] uppercase transition-colors" style={{ color: "#1A1108", fontFamily: "'Jost', sans-serif", fontWeight: 500 }} onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#C9A96E"; }} onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#1A1108"; }}>
          <span className="h-px w-10 group-hover:w-16 transition-all duration-300" style={{ background: "#C9A96E" }} />
          {g.catalogueBtn}
          <span className="h-px w-10 group-hover:w-16 transition-all duration-300" style={{ background: "#C9A96E" }} />
        </button>
      </div>
    </section>
  );
}