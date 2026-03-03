import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "figma:asset/9455a08665c296b9c5622a03f5e87c8ee3a9cf55.png";
import { useLang } from "./LanguageContext";

function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  return (
    <div
      className="flex items-center rounded-sm overflow-hidden"
      style={{ border: "1px solid rgba(201,169,110,0.25)" }}
    >
      {(["en", "ru"] as const).map((l, i) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className="px-3 py-1.5 text-[10px] tracking-[0.15em] uppercase transition-all duration-300"
          style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 500,
            background: lang === l ? "#C9A96E" : "transparent",
            color: lang === l ? "#0C0905" : "rgba(254,252,248,0.45)",
            borderLeft: i > 0 ? "1px solid rgba(201,169,110,0.2)" : "none",
          }}
          onMouseEnter={(e) => {
            if (lang !== l) (e.currentTarget as HTMLButtonElement).style.color = "#C9A96E";
          }}
          onMouseLeave={(e) => {
            if (lang !== l) (e.currentTarget as HTMLButtonElement).style.color = "rgba(254,252,248,0.45)";
          }}
        >
          {l === "en" ? "EN" : "РУ"}
        </button>
      ))}
    </div>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const navLinks = [
    { label: t.nav.about, id: "about" },
    { label: t.nav.certifications, id: "certifications" },
    { label: t.nav.gallery, id: "gallery" },
    { label: t.nav.diamonds, id: "diamond-categories" },
    { label: t.nav.d2c, id: "d2c" },
    { label: t.nav.manufacturing, id: "manufacturing" },
    { label: t.nav.services, id: "services" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
      style={{
        background: scrolled
          ? "rgba(10,7,3,0.97)"
          : "linear-gradient(to bottom, rgba(10,7,3,0.88) 0%, rgba(10,7,3,0.55) 60%, transparent 100%)",
        ...(scrolled ? { backdropFilter: "blur(20px)" } : {}),
        borderBottom: scrolled ? "1px solid rgba(201,169,110,0.15)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center group shrink-0"
          >
            <img
              src={logoImg}
              alt="JNK DIAM"
              style={{
                height: "80px",
                width: "auto",
                objectFit: "contain",
                display: "block",
                filter: "brightness(0) invert(1) contrast(2) drop-shadow(0 0 12px rgba(255,255,255,0.9))",
              }}
            />
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="relative px-4 py-2 text-xs tracking-[0.18em] uppercase transition-colors duration-300 group"
                style={{ color: "rgba(254,252,248,0.6)", fontFamily: "'Jost', sans-serif", fontWeight: 400 }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#FEFCF8"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "rgba(254,252,248,0.6)"; }}
              >
                {label}
                <span
                  className="absolute bottom-0 left-4 right-4 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ background: "#C9A96E" }}
                />
              </button>
            ))}

            <div className="ml-3 flex items-center gap-3">
              <LanguageSwitcher />
              <button
                onClick={() => scrollTo("contact")}
                className="px-6 py-2.5 text-xs tracking-[0.2em] uppercase border transition-all duration-300"
                style={{
                  borderColor: "#C9A96E",
                  color: "#C9A96E",
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#C9A96E";
                  (e.currentTarget as HTMLButtonElement).style.color = "#1A1108";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  (e.currentTarget as HTMLButtonElement).style.color = "#C9A96E";
                }}
              >
                {t.nav.enquire}
              </button>
            </div>
          </nav>

          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 transition-colors"
              style={{ color: "rgba(254,252,248,0.7)" }}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="md:hidden"
          style={{ background: "rgba(10,7,3,0.98)", borderTop: "1px solid rgba(201,169,110,0.12)" }}
        >
          <nav className="px-6 py-8 space-y-1">
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="block w-full text-left px-0 py-4 text-sm tracking-[0.2em] uppercase border-b transition-colors"
                style={{ color: "rgba(254,252,248,0.6)", fontFamily: "'Jost', sans-serif", fontWeight: 300, borderColor: "rgba(201,169,110,0.1)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#C9A96E"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "rgba(254,252,248,0.6)"; }}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="block w-full text-center py-4 mt-4 text-xs tracking-[0.25em] uppercase"
              style={{ background: "#C9A96E", color: "#1A1108", fontFamily: "'Jost', sans-serif", fontWeight: 600 }}
            >
              {t.nav.enquireNow}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
