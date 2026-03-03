import logoImg from "figma:asset/9455a08665c296b9c5622a03f5e87c8ee3a9cf55.png";
import { useLang } from "./LanguageContext";

function InstagramIcon() { return <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>; }
function WhatsAppIconSm() { return <svg viewBox="0 0 32 32" fill="currentColor" width="14" height="14"><path d="M16.004 2.667C8.641 2.667 2.667 8.641 2.667 16c0 2.354.636 4.558 1.738 6.461L2.667 29.333l7.07-1.706A13.27 13.27 0 0016.004 29.333C23.367 29.333 29.333 23.359 29.333 16S23.367 2.667 16.004 2.667zm0 2.4c5.982 0 10.929 4.946 10.929 10.933 0 5.988-4.947 10.933-10.929 10.933a10.88 10.88 0 01-5.546-1.52l-.398-.238-4.196 1.013 1.044-4.082-.261-.413A10.872 10.872 0 015.075 16c0-5.987 4.946-10.933 10.929-10.933zm-3.29 5.2c-.229 0-.601.086-.916.43-.315.343-1.2 1.172-1.2 2.857 0 1.686 1.228 3.315 1.4 3.544.171.229 2.4 3.658 5.828 4.986 2.886 1.1 3.429.882 4.044.826.614-.057 1.985-.814 2.271-1.6.286-.786.286-1.457.2-1.6-.086-.143-.315-.229-.658-.4-.344-.172-2.028-1-2.343-1.115-.315-.114-.543-.172-.772.172-.229.343-.885 1.115-1.085 1.343-.2.229-.4.258-.743.086-.343-.172-1.45-.535-2.762-1.704-1.02-.91-1.71-2.035-1.91-2.378-.2-.343-.022-.529.15-.7.155-.154.343-.4.514-.6.171-.2.229-.343.343-.572.114-.228.057-.429-.029-.6-.086-.172-.757-1.864-1.057-2.557-.257-.6-.524-.6-.714-.6z" /></svg>; }
function TelegramIcon() { return <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>; }

export function Footer() {
  const { t } = useLang();
  const f = t.footer;
  const year = new Date().getFullYear();

  const socials = [
    { label: "Instagram", href: "https://www.instagram.com/jnkdiam/", Icon: InstagramIcon, hoverColor: "#E1306C" },
    { label: "WhatsApp", href: "https://wa.me/971581307969", Icon: WhatsAppIconSm, hoverColor: "#25D366" },
    { label: "Telegram", href: "https://t.me/Jnkdiam", Icon: TelegramIcon, hoverColor: "#229ED9" },
  ];

  return (
    <footer style={{ background: "#0A0703" }}>
      <div className="h-px" style={{ background: "linear-gradient(90deg, transparent 0%, #A8834A 25%, #E8D5A8 50%, #A8834A 75%, transparent 100%)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-14 py-20">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-4">
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex flex-col mb-6 group text-left">
              <img src={logoImg} alt="JNK DIAM" style={{ height: "70px", width: "auto", objectFit: "contain", marginBottom: "4px", filter: "brightness(0) invert(1) contrast(1.5) drop-shadow(0 0 8px rgba(255,255,255,0.6))" }} />
              <span className="text-[10px] tracking-[0.5em] uppercase" style={{ color: "#C9A96E", fontFamily: "'Jost', sans-serif", fontWeight: 300, letterSpacing: "0.45em" }}>Certified Excellence</span>
            </button>

            <p className="text-sm leading-relaxed mb-8 max-w-xs" style={{ color: "#9A8B65", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>{f.tagline}</p>

            <div className="flex gap-2 mb-8">
              {[{ l: "GIA", bg: "#003087", c: "white" }, { l: "IGI", bg: "#6b1919", c: "white" }, { l: "HRD", bg: "transparent", c: "#C9A96E", border: true }].map(({ l, bg, c, border }) => (
                <span key={l} className="px-3 py-1.5 text-xs tracking-[0.15em]" style={{ background: bg, color: c, fontFamily: "'Jost', sans-serif", fontWeight: 700, border: border ? "1px solid rgba(201,169,110,0.4)" : "none" }}>{l}</span>
              ))}
            </div>

            <div className="text-[10px] tracking-[0.35em] uppercase mb-3" style={{ color: "#7A6B55", fontFamily: "'Jost', sans-serif" }}>{f.follow}</div>
            <div className="flex gap-2">
              {socials.map(({ label, href, Icon, hoverColor }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-8 h-8 flex items-center justify-center border transition-all duration-300 hover:scale-110"
                  style={{ borderColor: "rgba(201,169,110,0.15)", color: "#7A6B55" }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = hoverColor; el.style.borderColor = hoverColor + "50"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = "#7A6B55"; el.style.borderColor = "rgba(201,169,110,0.15)"; }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.35em] mb-7" style={{ color: "#C9A96E", fontFamily: "'Jost', sans-serif" }}>{f.navigate}</h4>
            <ul className="space-y-3.5">
              {f.navItems.map(({ l, id }) => (
                <li key={id}>
                  <button
                    onClick={() => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
                    className="text-sm transition-colors group flex items-center gap-2"
                    style={{ color: "#7A6B55", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#E8D5A8"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#7A6B55"; }}
                  >
                    <span className="w-0 h-px group-hover:w-4 transition-all duration-300" style={{ background: "#C9A96E" }} />
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.35em] mb-7" style={{ color: "#C9A96E", fontFamily: "'Jost', sans-serif" }}>{f.servicesLabel}</h4>
            <ul className="space-y-3.5">
              {f.serviceItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1" style={{ color: "#C9A96E", fontSize: "7px" }}>◆</span>
                  <span className="text-sm" style={{ color: "#7A6B55", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.35em] mb-7" style={{ color: "#C9A96E", fontFamily: "'Jost', sans-serif" }}>{f.complianceLabel}</h4>
            <ul className="space-y-3.5 mb-8">
              {f.complianceItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1" style={{ color: "#C9A96E", fontSize: "7px" }}>◆</span>
                  <span className="text-sm" style={{ color: "#7A6B55", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>{item}</span>
                </li>
              ))}
            </ul>
            <a href="https://wa.me/971581307969" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-xs tracking-[0.2em] uppercase text-white transition-all hover:scale-[1.03]"
              style={{ background: "#128C7E", fontFamily: "'Jost', sans-serif", fontWeight: 500 }}
            >
              <WhatsAppIconSm />{f.waBtn}
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: "rgba(201,169,110,0.1)" }}>
          <p className="text-xs" style={{ color: "#7A6B55", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
            © {year} <span style={{ color: "#E8D5A8" }}>JNK DIAM</span>. {f.copyright}
          </p>
          <div className="flex items-center gap-2">
            <span style={{ color: "#C9A96E", fontSize: "8px" }}>◆</span>
            <p className="text-xs" style={{ color: "#7A6B55", fontFamily: "'Jost', sans-serif", fontWeight: 300, letterSpacing: "0.1em" }}>{f.b2bLine}</p>
            <span style={{ color: "#C9A96E", fontSize: "8px" }}>◆</span>
          </div>
        </div>

        {/* SEO Keyword Cloud */}
        <div className="mt-10 pt-8 border-t" style={{ borderColor: "rgba(201,169,110,0.06)" }}>
          <p className="text-[10px] tracking-[0.25em] uppercase mb-4" style={{ color: "rgba(122,107,85,0.5)", fontFamily: "'Jost', sans-serif" }}>{f.specialisations}</p>
          <div className="flex flex-wrap gap-2">
            {f.keywords.map((kw) => (
              <span key={kw} className="px-2.5 py-1 text-[10px] tracking-[0.12em]" style={{ border: "1px solid rgba(201,169,110,0.1)", color: "rgba(122,107,85,0.55)", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
                {kw}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
