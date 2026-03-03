import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useState } from "react";
import contactImage from "figma:asset/463841557056dfd22e23a546453264aae27ae828.png";
import { useLang } from "./LanguageContext";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" width="18" height="18">
      <path d="M16.004 2.667C8.641 2.667 2.667 8.641 2.667 16c0 2.354.636 4.558 1.738 6.461L2.667 29.333l7.07-1.706A13.27 13.27 0 0016.004 29.333C23.367 29.333 29.333 23.359 29.333 16S23.367 2.667 16.004 2.667zm0 2.4c5.982 0 10.929 4.946 10.929 10.933 0 5.988-4.947 10.933-10.929 10.933a10.88 10.88 0 01-5.546-1.52l-.398-.238-4.196 1.013 1.044-4.082-.261-.413A10.872 10.872 0 015.075 16c0-5.987 4.946-10.933 10.929-10.933zm-3.29 5.2c-.229 0-.601.086-.916.43-.315.343-1.2 1.172-1.2 2.857 0 1.686 1.228 3.315 1.4 3.544.171.229 2.4 3.658 5.828 4.986 2.886 1.1 3.429.882 4.044.826.614-.057 1.985-.814 2.271-1.6.286-.786.286-1.457.2-1.6-.086-.143-.315-.229-.658-.4-.344-.172-2.028-1-2.343-1.115-.315-.114-.543-.172-.772.172-.229.343-.885 1.115-1.085 1.343-.2.229-.4.258-.743.086-.343-.172-1.45-.535-2.762-1.704-1.02-.91-1.71-2.035-1.91-2.378-.2-.343-.022-.529.15-.7.155-.154.343-.4.514-.6.171-.2.229-.343.343-.572.114-.228.057-.429-.029-.6-.086-.172-.757-1.864-1.057-2.557-.257-.6-.524-.6-.714-.6z" />
    </svg>
  );
}
function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export function Contact() {
  const { t } = useLang();
  const c = t.contact;

  const [formData, setFormData] = useState({ name: "", company: "", email: "", phone: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(c.alertMsg);
    setFormData({ name: "", company: "", email: "", phone: "", message: "" });
  };

  const fieldBase: React.CSSProperties = {
    background: "transparent",
    border: "none",
    borderBottom: "1px solid",
    borderBottomColor: "rgba(26,17,8,0.2)",
    color: "#1A1108",
    width: "100%",
    padding: "12px 0",
    outline: "none",
    fontFamily: "'Jost', sans-serif",
    fontWeight: 300,
    fontSize: "15px",
    transition: "border-color 0.3s",
  };

  return (
    <section id="contact" className="overflow-hidden" style={{ background: "#F7F2EA" }}>
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left — image + info */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }}
          className="relative overflow-hidden min-h-[60vh] lg:min-h-full flex flex-col justify-end group"
        >
          <div className="absolute inset-0">
            <ImageWithFallback src={contactImage} alt="Diamond jewellery" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,7,3,0.95) 0%, rgba(10,7,3,0.3) 60%)" }} />
          </div>

          <div className="relative z-10 p-10 md:p-14">
            <div className="space-y-0 mb-10">
              {[
                { label: c.labelEmail, value: "info@jnkdiam.com", href: "mailto:info@jnkdiam.com" },
                { label: c.labelPhone, value: "+971 58 130 7969", href: "tel:+971581307969" },
                { label: c.labelLocation, value: "M05, Max Gold Building, Al Dhagaya, Gold Souk, Dubai, UAE", href: "https://share.google/7hS1UzeL7NeAAQj8i" },
              ].map(({ label, value, href }) => (
                <div key={label} className="flex gap-8 py-5 border-b" style={{ borderColor: "rgba(201,169,110,0.15)" }}>
                  <span className="text-xs uppercase tracking-[0.25em] w-20 flex-shrink-0 pt-0.5" style={{ color: "#C9A96E", fontFamily: "'Jost', sans-serif", fontWeight: 400 }}>{label}</span>
                  {href ? (
                    <a href={href} className="text-sm hover:text-[#C9A96E] transition-colors" style={{ color: "#E8D5A8", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>{value}</a>
                  ) : (
                    <span className="text-sm" style={{ color: "#E8D5A8", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>{value}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="https://wa.me/971581307969" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 text-xs uppercase tracking-[0.2em] text-white transition-all hover:scale-[1.02]"
                style={{ background: "#25D366", fontFamily: "'Jost', sans-serif", fontWeight: 600 }}>
                <WhatsAppIcon />{c.waBtn}
              </a>
              <a href="https://t.me/Jnkdiam" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 text-xs uppercase tracking-[0.2em] text-white transition-all hover:scale-[1.02]"
                style={{ background: "#229ED9", fontFamily: "'Jost', sans-serif", fontWeight: 600 }}>
                <TelegramIcon />{c.tgBtn}
              </a>
              <a href="https://www.instagram.com/jnkdiam/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 text-xs uppercase tracking-[0.2em] text-white transition-all hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)", fontFamily: "'Jost', sans-serif", fontWeight: 600 }}>
                <InstagramIcon />{c.igBtn}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
          className="flex flex-col justify-center p-10 md:p-16 lg:p-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-8" style={{ background: "#C9A96E" }} />
            <span className="text-xs tracking-[0.45em] uppercase" style={{ color: "#C9A96E", fontFamily: "'Jost', sans-serif", fontWeight: 400 }}>{c.overline}</span>
          </div>

          <h2 className="mb-4 leading-none" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, color: "#1A1108", fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.05 }}>
            {c.h2line1}
            <br />
            <em style={{ color: "#C9A96E" }}>{c.h2line2}</em>
          </h2>

          <p className="mb-12 text-sm leading-relaxed" style={{ color: "#8C7B65", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>{c.subtext}</p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-2 gap-8">
              {[
                { name: "name", label: c.fields.name, placeholder: c.fields.namePlaceholder, type: "text", required: true },
                { name: "company", label: c.fields.company, placeholder: c.fields.companyPlaceholder, type: "text", required: true },
              ].map(({ name, label, placeholder, type, required }) => (
                <div key={name}>
                  <label className="block text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: focused === name ? "#C9A96E" : "#8C7B65", fontFamily: "'Jost', sans-serif", fontWeight: 400, transition: "color 0.3s" }}>
                    {label}{required && " *"}
                  </label>
                  <input
                    type={type} name={name}
                    value={formData[name as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
                    placeholder={placeholder} required={required}
                    onFocus={() => setFocused(name)} onBlur={() => setFocused(null)}
                    style={{ ...fieldBase, borderBottomColor: focused === name ? "#C9A96E" : "rgba(26,17,8,0.2)" }}
                  />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-8">
              {[
                { name: "email", label: c.fields.email, placeholder: c.fields.emailPlaceholder, type: "email", required: true },
                { name: "phone", label: c.fields.phone, placeholder: c.fields.phonePlaceholder, type: "tel", required: false },
              ].map(({ name, label, placeholder, type, required }) => (
                <div key={name}>
                  <label className="block text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: focused === name ? "#C9A96E" : "#8C7B65", fontFamily: "'Jost', sans-serif", fontWeight: 400, transition: "color 0.3s" }}>
                    {label}{required && " *"}
                  </label>
                  <input
                    type={type} name={name}
                    value={formData[name as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
                    placeholder={placeholder} required={required}
                    onFocus={() => setFocused(name)} onBlur={() => setFocused(null)}
                    style={{ ...fieldBase, borderBottomColor: focused === name ? "#C9A96E" : "rgba(26,17,8,0.2)" }}
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: focused === "message" ? "#C9A96E" : "#8C7B65", fontFamily: "'Jost', sans-serif", fontWeight: 400, transition: "color 0.3s" }}>
                {c.fields.message} *
              </label>
              <textarea
                name="message" value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required rows={5} placeholder={c.fields.messagePlaceholder}
                onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                style={{ ...fieldBase, resize: "none", borderBottomColor: focused === "message" ? "#C9A96E" : "rgba(26,17,8,0.2)" }}
              />
            </div>

            <button
              type="submit"
              className="w-full py-5 text-xs tracking-[0.35em] uppercase transition-all duration-300"
              style={{ background: "#1A1108", color: "#FEFCF8", fontFamily: "'Jost', sans-serif", fontWeight: 600 }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#C9A96E"; (e.currentTarget as HTMLButtonElement).style.color = "#1A1108"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#1A1108"; (e.currentTarget as HTMLButtonElement).style.color = "#FEFCF8"; }}
            >
              {c.submit}
            </button>

            <p className="text-xs text-center" style={{ color: "#9A8B65", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>{c.notice}</p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
