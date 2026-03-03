import { motion } from "motion/react";
import { useEffect, useState } from "react";
import heroBg from "figma:asset/c2c6816a4f9f56c1bd17373e8c8bf750a1de387c.png";
import { useLang } from "./LanguageContext";

const DiamondIcon = ({ size = 10 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 10 10" fill="none">
    <polygon points="5,0 10,5 5,10 0,5" fill="#C9A96E" />
  </svg>
);

export function Hero() {
  const [loaded, setLoaded] = useState(false);
  const { t } = useLang();

  useEffect(() => { const timer = setTimeout(() => setLoaded(true), 100); return () => clearTimeout(timer); }, []);

  const [customerCount, setCustomerCount] = useState(0);
  useEffect(() => {
    if (!loaded) return;
    const target = 500;
    const duration = 2400;
    const stepTime = 16;
    const steps = Math.ceil(duration / stepTime);
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCustomerCount(target); clearInterval(timer); }
      else { setCustomerCount(Math.floor(current)); }
    }, stepTime);
    return () => clearInterval(timer);
  }, [loaded]);

  const [clientCount, setClientCount] = useState(0);
  useEffect(() => {
    if (!loaded) return;
    const target = 5000;
    const duration = 2800;
    const stepTime = 16;
    const steps = Math.ceil(duration / stepTime);
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setClientCount(target); clearInterval(timer); }
      else { setClientCount(Math.floor(current)); }
    }, stepTime);
    return () => clearInterval(timer);
  }, [loaded]);

  const marqueeItems = t.hero.marquee;

  return (
    <>
      <section
        className="relative flex flex-col justify-end overflow-hidden"
        style={{ background: "#020106", minHeight: "100vh" }}
      >
        {/* Full-bleed image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="JNK DIAM diamond rings collection"
            className="w-full h-full object-cover"
            style={{
              opacity: loaded ? 1 : 0,
              transform: "scale(1.06)",
              objectPosition: "62% 52%",
              transition: "opacity 1.2s ease",
            }}
          />
          <div className="absolute inset-0" style={{ background: "rgba(2,1,6,0.38)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(2,1,6,1) 0%, rgba(2,1,6,0.82) 22%, rgba(2,1,6,0.3) 50%, rgba(2,1,6,0.0) 72%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(2,1,6,0.88) 0%, rgba(2,1,6,0.55) 30%, rgba(2,1,6,0.12) 55%, transparent 72%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(2,1,6,0.55) 0%, transparent 25%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 55% 55% at 64% 55%, rgba(201,169,110,0.11) 0%, transparent 70%)" }} />
        </div>

        {/* Corner accent */}
        <div className="absolute top-8 left-8 z-10 hidden md:block">
          <div className="flex flex-col gap-1">
            <div className="w-12 h-px" style={{ background: "rgba(201,169,110,0.5)" }} />
            <div className="w-6 h-px" style={{ background: "rgba(201,169,110,0.3)" }} />
          </div>
        </div>

        {/* Vertical ornament */}
        <div className="absolute right-10 top-28 bottom-28 w-px z-10 hidden xl:block" style={{ background: "linear-gradient(180deg, transparent 0%, rgba(201,169,110,0.35) 25%, rgba(201,169,110,0.35) 75%, transparent 100%)" }} />

        {/* Certification pill */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: loaded ? 1 : 0, x: loaded ? 0 : 20 }}
          transition={{ duration: 0.9, delay: 1.4 }}
          className="absolute top-24 right-14 z-10 hidden lg:flex items-center gap-3 px-5 py-3"
          style={{ background: "rgba(201,169,110,0.08)", border: "1px solid rgba(201,169,110,0.22)", backdropFilter: "blur(8px)" }}
        >
          {["GIA", "IGI", "HRD"].map((cert, i) => (
            <span key={cert} className="text-xs tracking-[0.25em] uppercase" style={{ color: "#C9A96E", fontFamily: "'Jost', sans-serif", fontWeight: 500, paddingLeft: i > 0 ? "12px" : 0, borderLeft: i > 0 ? "1px solid rgba(201,169,110,0.25)" : "none" }}>
              {cert}
            </span>
          ))}
        </motion.div>

        {/* Main content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-14 pb-16 md:pb-24 w-full" style={{ paddingTop: "120px" }}>
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 12 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="flex items-center gap-4 mb-10"
          >
            <DiamondIcon size={7} />
            <span className="text-xs tracking-[0.42em] uppercase" style={{ color: "#C9A96E", fontFamily: "'Jost', sans-serif", fontWeight: 400 }}>
              {t.hero.overline}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 36 }}
            transition={{ duration: 1.1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, color: "#FEFCF8", fontSize: "clamp(50px, 8.5vw, 124px)", lineHeight: 0.93, letterSpacing: "-0.015em", maxWidth: "780px" }}
          >
            {t.hero.h1line1}
            <br />
            <em style={{ color: "#E8D5A8", fontStyle: "italic" }}>{t.hero.h1line2}</em>
            <br />
            <span>{t.hero.h1line3}</span>
            <br />
            <em style={{ color: "#C9A96E", fontStyle: "italic" }}>{t.hero.h1line4}</em>
          </motion.h1>

          {/* Subline + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 22 }}
            transition={{ duration: 0.9, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col md:flex-row md:items-end gap-8 md:gap-14"
          >
            <div className="max-w-xs">
              <div className="w-8 h-px mb-5" style={{ background: "rgba(201,169,110,0.5)" }} />
              <p className="text-base leading-relaxed" style={{ color: "rgba(254,252,248,0.6)", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
                {t.hero.subline}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="relative px-9 py-4 text-xs tracking-[0.32em] uppercase overflow-hidden transition-all duration-300"
                style={{ background: "#C9A96E", color: "#0C0905", fontFamily: "'Jost', sans-serif", fontWeight: 600 }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#DEC07E"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#C9A96E"; }}
              >
                {t.hero.cta1}
              </button>
              <button
                onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
                className="px-9 py-4 text-xs tracking-[0.32em] uppercase border transition-all duration-300"
                style={{ borderColor: "rgba(254,252,248,0.22)", color: "rgba(254,252,248,0.7)", fontFamily: "'Jost', sans-serif", fontWeight: 400, background: "rgba(255,255,255,0.03)", backdropFilter: "blur(6px)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#C9A96E"; (e.currentTarget as HTMLButtonElement).style.color = "#C9A96E"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(254,252,248,0.22)"; (e.currentTarget as HTMLButtonElement).style.color = "rgba(254,252,248,0.7)"; }}
              >
                {t.hero.cta2}
              </button>
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 10 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16 pt-8 flex gap-8 md:gap-14 border-t overflow-x-auto"
            style={{ borderColor: "rgba(201,169,110,0.15)", scrollbarWidth: "none" }}
          >
            {[
              { num: `${customerCount}+`, label: t.hero.stat1label },
              { num: `${clientCount}+`, label: t.hero.stat2label },
              { num: "100%", label: t.hero.stat3label },
            ].map(({ num, label }) => (
              <div key={label} className="flex flex-col gap-1.5">
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(22px, 2.8vw, 34px)", color: "#E8D5A8", fontWeight: 400, lineHeight: 1 }}>
                  {num}
                </div>
                <div className="text-xs tracking-[0.28em] uppercase" style={{ color: "rgba(154,139,101,0.8)", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 1 : 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        >
          <span className="text-xs tracking-[0.35em] uppercase" style={{ color: "rgba(201,169,110,0.5)", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
            {t.hero.scroll}
          </span>
          <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, rgba(201,169,110,0.6), transparent)", animation: "scrollPulse 2s ease-in-out infinite" }} />
          <style>{`@keyframes scrollPulse { 0%, 100% { opacity: 0.4; transform: scaleY(1); } 50% { opacity: 1; transform: scaleY(0.7); } }`}</style>
        </motion.div>
      </section>

      {/* Marquee strip */}
      <div className="overflow-hidden" style={{ background: "#C9A96E" }}>
        <div className="flex whitespace-nowrap" style={{ animation: "marquee 32s linear infinite" }}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="inline-block px-5 py-3 text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500, color: item === "◆" ? "rgba(26,17,8,0.4)" : "#1A1108", letterSpacing: item === "◆" ? "0.1em" : "0.3em" }}
            >
              {item}
            </span>
          ))}
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
      </div>
    </>
  );
}