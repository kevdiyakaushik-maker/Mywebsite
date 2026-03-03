import { motion } from "motion/react";
import { useEffect, useState } from "react";

const locations = [
  {
    country: "India",
    city: "Mumbai",
    district: "Bharat Diamond Bourse, BKC",
    role: "Manufacturing HQ",
    tz: "Asia/Kolkata",
    flag: "🇮🇳",
    color: "#FF9933",
    desc: "Our primary diamond cutting, polishing, and jewellery manufacturing hub — vertically integrated from rough to finished.",
    code: "IN",
    address: null,
  },
  {
    country: "UAE",
    city: "Dubai",
    district: "DMCC Free Zone",
    role: "Trading Hub",
    tz: "Asia/Dubai",
    flag: "🇦🇪",
    color: "#00732F",
    desc: "Regional B2B trading and distribution centre for the Middle East, Africa, and European diamond markets.",
    code: "AE",
    address: {
      line1: "Office 2203, Jewellery & Gemplex 3",
      line2: "Plot No. DMCC-PH2-J&GPlexS Jewellery",
      line3: "DMCC Free Zone, Dubai, UAE",
      po: "P.O. Box 123456",
      phone: "+971 58 130 7969",
      email: "info@jnkdiam.com",
    },
  },
  {
    country: "Hong Kong",
    city: "Hong Kong",
    district: "Wan Chai Diamond District",
    role: "Asia Pacific",
    tz: "Asia/Hong_Kong",
    flag: "🇭🇰",
    color: "#DE2910",
    desc: "Strategic gateway for Asia-Pacific partners — sourcing, trading, and certified diamond supply across the Far East.",
    code: "HK",
    address: null,
  },
  {
    country: "Turkey",
    city: "Istanbul",
    district: "Grand Bazaar Jewellery Quarter",
    role: "European Bridge",
    tz: "Europe/Istanbul",
    flag: "🇹🇷",
    color: "#E30A17",
    desc: "A key node connecting our supply chain to European fine jewellery manufacturers and wholesale distributors.",
    code: "TR",
    address: null,
  },
  {
    country: "USA",
    city: "New York",
    district: "Diamond District, 47th Street",
    role: "Americas Office",
    tz: "America/New_York",
    flag: "🇺🇸",
    color: "#3C3B6E",
    desc: "Serving North and South American jewellery retailers, designers, and B2B buyers with certified diamonds and finished pieces.",
    code: "US",
    address: null,
  },
];

function LiveClock({ tz }: { tz: string }) {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: tz,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
      setDate(
        now.toLocaleDateString("en-US", {
          timeZone: tz,
          weekday: "short",
          month: "short",
          day: "numeric",
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [tz]);

  return (
    <div className="flex flex-col items-end">
      <span
        style={{
          fontFamily: "'Jost', sans-serif",
          fontWeight: 300,
          fontSize: "13px",
          color: "#C9A96E",
          letterSpacing: "0.05em",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {time}
      </span>
      <span
        style={{
          fontFamily: "'Jost', sans-serif",
          fontWeight: 300,
          fontSize: "10px",
          color: "rgba(201,169,110,0.5)",
          letterSpacing: "0.1em",
        }}
      >
        {date}
      </span>
    </div>
  );
}

export function Locations() {
  return (
    <section
      id="locations"
      className="relative overflow-hidden"
      style={{ background: "#0C0905" }}
    >
      {/* Top border line */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #A8834A 25%, #E8D5A8 50%, #A8834A 75%, transparent 100%)",
        }}
      />

      {/* World map watermark */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 500'%3E%3Cellipse cx='500' cy='250' rx='490' ry='240' fill='none' stroke='%23C9A96E' stroke-width='1'/%3E%3Cellipse cx='500' cy='250' rx='390' ry='240' fill='none' stroke='%23C9A96E' stroke-width='0.5'/%3E%3Cellipse cx='500' cy='250' rx='290' ry='240' fill='none' stroke='%23C9A96E' stroke-width='0.5'/%3E%3Cellipse cx='500' cy='250' rx='190' ry='240' fill='none' stroke='%23C9A96E' stroke-width='0.5'/%3E%3Cellipse cx='500' cy='250' rx='90' ry='240' fill='none' stroke='%23C9A96E' stroke-width='0.5'/%3E%3Cline x1='10' y1='250' x2='990' y2='250' stroke='%23C9A96E' stroke-width='0.5'/%3E%3Cline x1='500' y1='10' x2='500' y2='490' stroke='%23C9A96E' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-14 py-24 md:py-32">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px" style={{ background: "#C9A96E" }} />
            <span
              className="text-xs tracking-[0.45em] uppercase"
              style={{
                color: "#C9A96E",
                fontFamily: "'Jost', sans-serif",
                fontWeight: 400,
              }}
            >
              Global Presence
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 400,
                color: "#FEFCF8",
                fontSize: "clamp(38px, 5.5vw, 70px)",
                lineHeight: 1.0,
              }}
            >
              Where We
              <br />
              <em style={{ color: "#C9A96E" }}>Operate</em>
            </h2>
            <p
              className="max-w-sm text-sm leading-relaxed"
              style={{
                color: "rgba(254,252,248,0.5)",
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
              }}
            >
              Five strategic locations across three continents — ensuring seamless B2B supply, local expertise, and on-ground support for our partners worldwide.
            </p>
          </div>
        </motion.div>

        {/* Location cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-px" style={{ background: "rgba(201,169,110,0.08)" }}>
          {locations.map((loc, i) => (
            <motion.div
              key={loc.code}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative flex flex-col p-7 group cursor-default transition-all duration-500"
              style={{ background: "#0C0905" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background =
                  "rgba(201,169,110,0.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background =
                  "#0C0905";
              }}
            >
              {/* Gold top accent line on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-500 opacity-0 group-hover:opacity-100"
                style={{ background: loc.color }}
              />

              {/* Flag + Clock row */}
              <div className="flex items-start justify-between mb-6">
                <div
                  className="text-3xl leading-none select-none"
                  style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.5))" }}
                >
                  {loc.flag}
                </div>
                <LiveClock tz={loc.tz} />
              </div>

              {/* Role badge */}
              <div
                className="inline-flex self-start px-2.5 py-1 text-[9px] tracking-[0.25em] uppercase mb-5"
                style={{
                  border: `1px solid ${loc.color}40`,
                  color: loc.color,
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 500,
                }}
              >
                {loc.role}
              </div>

              {/* City */}
              <h3
                className="mb-1"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 400,
                  color: "#FEFCF8",
                  fontSize: "clamp(20px, 2vw, 26px)",
                  lineHeight: 1.1,
                }}
              >
                {loc.city}
              </h3>

              {/* Country */}
              <p
                className="text-xs tracking-[0.2em] uppercase mb-2"
                style={{
                  color: "#C9A96E",
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 400,
                }}
              >
                {loc.country}
              </p>

              {/* District */}
              <p
                className="text-xs mb-5"
                style={{
                  color: "rgba(201,169,110,0.45)",
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 300,
                  letterSpacing: "0.05em",
                }}
              >
                {loc.district}
              </p>

              {/* Divider */}
              <div
                className="w-full h-px mb-5 transition-all duration-500"
                style={{
                  background: "rgba(201,169,110,0.1)",
                }}
              />

              {/* Description */}
              <p
                className="text-xs leading-relaxed flex-1"
                style={{
                  color: "rgba(254,252,248,0.38)",
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 300,
                }}
              >
                {loc.desc}
              </p>

              {/* Dubai full address block */}
              {loc.address && (
                <div className="mt-5 pt-5 border-t space-y-2" style={{ borderColor: "rgba(201,169,110,0.12)" }}>
                  <p className="text-[9px] tracking-[0.3em] uppercase mb-3" style={{ color: "#C9A96E", fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>
                    Full Address
                  </p>
                  {[loc.address.line1, loc.address.line2, loc.address.line3, loc.address.po].map((line) => (
                    <p key={line} className="text-[11px] leading-snug" style={{ color: "rgba(254,252,248,0.55)", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
                      {line}
                    </p>
                  ))}
                  <div className="pt-2 space-y-1.5">
                    <a
                      href={`tel:${loc.address.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-2 text-[11px] transition-colors hover:text-[#C9A96E]"
                      style={{ color: "rgba(201,169,110,0.7)", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
                    >
                      <span style={{ color: "#C9A96E", fontSize: "8px" }}>◆</span>
                      {loc.address.phone}
                    </a>
                    <a
                      href={`mailto:${loc.address.email}`}
                      className="flex items-center gap-2 text-[11px] transition-colors hover:text-[#C9A96E]"
                      style={{ color: "rgba(201,169,110,0.7)", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
                    >
                      <span style={{ color: "#C9A96E", fontSize: "8px" }}>◆</span>
                      {loc.address.email}
                    </a>
                  </div>
                </div>
              )}

              {/* Country code watermark */}
              <div
                className="mt-6 text-right select-none"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "42px",
                  color: "rgba(201,169,110,0.04)",
                  lineHeight: 1,
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  transition: "color 0.5s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.color =
                    "rgba(201,169,110,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.color =
                    "rgba(201,169,110,0.04)";
                }}
              >
                {loc.code}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 pt-10 border-t grid grid-cols-2 md:grid-cols-4 gap-8"
          style={{ borderColor: "rgba(201,169,110,0.1)" }}
        >
          {[
            { num: "5", label: "Countries" },
            { num: "3", label: "Continents" },
            { num: "24/7", label: "B2B Support" },
            { num: "Global", label: "Certified Supply" },
          ].map(({ num, label }) => (
            <div key={label} className="flex flex-col gap-1.5">
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(22px, 3vw, 32px)",
                  color: "#FEFCF8",
                  fontWeight: 400,
                }}
              >
                {num}
              </div>
              <div
                className="text-xs tracking-[0.25em] uppercase"
                style={{
                  color: "#9A8B65",
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 300,
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom border line */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #A8834A 25%, #E8D5A8 50%, #A8834A 75%, transparent 100%)",
        }}
      />
    </section>
  );
}