import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { Package, Star, Shield, Truck, MessageCircle, Gem } from "lucide-react";
import looseCertifiedDiamondsImg from "figma:asset/46a58686f6323697c632358924a339ae39aa5e80.png";
import { useLang } from "./LanguageContext";

const iconMap = [Gem, Shield, Star, Package, Truck, MessageCircle];

const offeringImages = [
  looseCertifiedDiamondsImg,
  "https://images.unsplash.com/photo-1761717410058-5a2c296d0893?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwcmluZyUyMGVuZ2FnZW1lbnQlMjBwcm9wb3NhbCUyMHJvbWFudGljJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NzIzNjE4NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1718698028514-7b5029017de5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwbmVja2xhY2UlMjBwZW5kYW50JTIwd29tYW4lMjB3ZWFyaW5nJTIwbHV4dXJ5fGVufDF8fHx8MTc3MjM2MTg0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1734779527847-36b505579c85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkaWFtb25kJTIwamV3ZWxsZXJ5JTIwZ2lmdCUyMGJveCUyMHBhY2thZ2luZyUyMGVsZWdhbnR8ZW58MXx8fHwxNzcyMzYxODQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
];

export function D2CSection() {
  const { t } = useLang();
  const d = t.d2c;
  const whatsapp = () => window.open("https://wa.me/971581307969", "_blank");
  const telegram = () => window.open("https://t.me/+971581307969", "_blank");

  return (
    <section id="d2c" className="overflow-hidden" style={{ background: "#FAF6EF" }}>
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-14 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-4"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span
                className="text-xs tracking-[0.45em] uppercase"
                style={{ color: "#C9A96E", fontFamily: "'Jost', sans-serif", fontWeight: 400 }}
              >
                {d.overline}
              </span>
              <div className="h-px flex-1 max-w-16" style={{ background: "rgba(26,17,8,0.15)" }} />
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 400,
                color: "#1A1108",
                fontSize: "clamp(36px, 5vw, 68px)",
                lineHeight: 1.05,
              }}
            >
              {d.h2}{" "}
              <em style={{ color: "#C9A96E" }}>{d.h2italic}</em>
            </h2>
          </div>
          <p
            className="max-w-sm text-sm leading-relaxed md:text-right"
            style={{ color: "#8C7B65", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
          >
            {d.subtext}
          </p>
        </motion.div>

        {/* D2C Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-3 mt-6 px-6 py-3 border"
          style={{ borderColor: "#C9A96E", background: "rgba(201,169,110,0.06)" }}
        >
          <span className="text-sm" style={{ color: "#C9A96E", fontFamily: "'Jost', sans-serif", fontWeight: 500, letterSpacing: "0.15em" }}>
            {d.badge}
          </span>
        </motion.div>
      </div>

      {/* Offerings */}
      <div className="max-w-7xl mx-auto px-6 lg:px-14 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {d.offerings.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative overflow-hidden cursor-pointer"
              style={{ height: "360px" }}
            >
              <ImageWithFallback
                src={offeringImages[i]}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-[1.6s]"
                style={{ transform: "scale(1)", objectPosition: "center center" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.08)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
              />
              {/* Overlay */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(10,7,3,0.88) 0%, rgba(10,7,3,0.15) 45%, transparent 100%)" }}
              />
              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span
                  className="text-[10px] px-3 py-1.5 tracking-[0.3em] uppercase"
                  style={{
                    background: "rgba(201,169,110,0.9)",
                    color: "#1A1108",
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {item.tag}
                </span>
              </div>
              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div
                  className="text-base mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, color: "#FAF6EF" }}
                >
                  {item.label}
                </div>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "rgba(250,246,239,0.65)", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
                >
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Buy Direct */}
      <div style={{ background: "#1A1108" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="text-xs tracking-[0.45em] uppercase mb-5" style={{ color: "#C9A96E", fontFamily: "'Jost', sans-serif" }}>
              {d.whyOverline}
            </div>
            <h3
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, color: "#FAF6EF", fontSize: "clamp(28px, 4vw, 52px)" }}
            >
              {d.whyTitle} <em style={{ color: "#C9A96E" }}>{d.whyTitleItalic}</em>
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(201,169,110,0.1)" }}>
            {d.highlights.map((item, i) => {
              const Icon = iconMap[i];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="group p-10 transition-colors duration-300"
                  style={{ background: "#1A1108" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "rgba(201,169,110,0.06)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#1A1108"; }}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center mb-6 border"
                    style={{ borderColor: "rgba(201,169,110,0.25)" }}
                  >
                    <Icon size={18} style={{ color: "#C9A96E" }} />
                  </div>
                  <h4
                    className="mb-3"
                    style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, color: "#FAF6EF", fontSize: "18px" }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#8C7B65", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
                  >
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div style={{ background: "#FAF6EF" }} className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="text-xs tracking-[0.45em] uppercase mb-6" style={{ color: "#C9A96E", fontFamily: "'Jost', sans-serif" }}>
              {d.ctaOverline}
            </div>
            <h3
              className="mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, color: "#1A1108", fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.1 }}
            >
              {d.ctaTitle}<br /><em style={{ color: "#C9A96E" }}>{d.ctaTitleItalic}</em>
            </h3>
            <p
              className="mb-12 text-sm leading-relaxed max-w-xl mx-auto"
              style={{ color: "#8C7B65", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
            >
              {d.ctaDesc}
            </p>

            {/* Divider */}
            <div className="flex items-center gap-6 justify-center mb-12">
              <div className="h-px w-16" style={{ background: "rgba(26,17,8,0.15)" }} />
              <span style={{ color: "#C9A96E", fontSize: "10px" }}>◆</span>
              <div className="h-px w-16" style={{ background: "rgba(26,17,8,0.15)" }} />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={whatsapp}
                className="inline-flex items-center justify-center gap-3 px-10 py-4 text-xs tracking-[0.3em] uppercase transition-all duration-300"
                style={{ background: "#25D366", color: "#fff", fontFamily: "'Jost', sans-serif", fontWeight: 600 }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#1DA851"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#25D366"; }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {d.waBtn}
              </button>
              <button
                onClick={telegram}
                className="inline-flex items-center justify-center gap-3 px-10 py-4 text-xs tracking-[0.3em] uppercase border transition-all duration-300"
                style={{ borderColor: "#1A1108", color: "#1A1108", fontFamily: "'Jost', sans-serif", fontWeight: 500 }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#1A1108";
                  (e.currentTarget as HTMLButtonElement).style.color = "#FAF6EF";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  (e.currentTarget as HTMLButtonElement).style.color = "#1A1108";
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                {d.tgBtn}
              </button>
            </div>

            <p
              className="mt-8 text-xs"
              style={{ color: "#B5A48A", fontFamily: "'Jost', sans-serif", fontWeight: 300, letterSpacing: "0.05em" }}
            >
              {d.availability}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}