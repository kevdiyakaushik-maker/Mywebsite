import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { useLang } from "./LanguageContext";

// Leaflet loaded dynamically to avoid SSR issues
declare global {
  interface Window {
    L: typeof import("leaflet");
  }
}

const ALL_LOCATIONS = [
  {
    city: "Dubai",
    country: "UAE",
    lat: 25.2048,
    lng: 55.2708,
    type: "headquarters" as const,
    flag: "🇦🇪",
    role: "Main Sales Office",
    address: "M05, Max Gold Building, Al Dhagaya, Gold Souk, Dubai, UAE",
    color: "#C9A96E",
  },
  {
    city: "Mumbai",
    country: "India",
    lat: 19.076,
    lng: 72.8777,
    type: "manufacturing" as const,
    flag: "🇮🇳",
    role: "Manufacturing Hub",
    address: "Bharat Diamond Bourse, BKC, Mumbai",
    color: "#E8D5A8",
  },
  {
    city: "Hong Kong",
    country: "Hong Kong",
    lat: 22.3193,
    lng: 114.1694,
    type: "sales" as const,
    flag: "🇭🇰",
    role: "Sales Office",
    address: "Wan Chai Diamond District, Hong Kong",
    color: "#9A8B65",
  },
  {
    city: "Istanbul",
    country: "Turkey",
    lat: 41.0082,
    lng: 28.9784,
    type: "sales" as const,
    flag: "🇹🇷",
    role: "Sales Office",
    address: "Grand Bazaar Jewellery Quarter, Istanbul",
    color: "#9A8B65",
  },
  {
    city: "New York",
    country: "USA",
    lat: 40.7128,
    lng: -74.006,
    type: "sales" as const,
    flag: "🇺🇸",
    role: "Sales Office",
    address: "Diamond District, 47th Street, New York",
    color: "#9A8B65",
  },
  {
    city: "Moscow",
    country: "Russia",
    lat: 55.7558,
    lng: 37.6176,
    type: "sales" as const,
    flag: "🇷🇺",
    role: "Sales Office",
    address: "Moscow Jewellery District, Russia",
    color: "#9A8B65",
  },
];

export function GlobalMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<import("leaflet").Map | null>(null);
  const [activePin, setActivePin] = useState<string | null>(null);
  const [leafletReady, setLeafletReady] = useState(false);
  const { t } = useLang();
  const gm = t.globalMap;

  useEffect(() => {
    // Inject Leaflet CSS
    if (!document.getElementById("leaflet-css")) {
      const link = document.createElement("link");
      link.id = "leaflet-css";
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }

    // Inject dark map override styles
    if (!document.getElementById("leaflet-dark-css")) {
      const style = document.createElement("style");
      style.id = "leaflet-dark-css";
      style.textContent = `
        .leaflet-tile { filter: brightness(0.18) sepia(0.4) hue-rotate(10deg) saturate(0.6) !important; }
        .leaflet-container { background: #0C0905 !important; }
        .leaflet-control-zoom a { background: #1A1108 !important; color: #C9A96E !important; border-color: rgba(201,169,110,0.2) !important; }
        .leaflet-control-zoom a:hover { background: #C9A96E !important; color: #0C0905 !important; }
        .leaflet-control-attribution { background: rgba(12,9,5,0.8) !important; color: rgba(201,169,110,0.3) !important; font-size: 9px !important; }
        .leaflet-control-attribution a { color: rgba(201,169,110,0.4) !important; }
        .leaflet-popup-content-wrapper { background: #1A1108 !important; border: 1px solid rgba(201,169,110,0.25) !important; border-radius: 0 !important; box-shadow: 0 8px 40px rgba(0,0,0,0.7) !important; }
        .leaflet-popup-tip { background: #1A1108 !important; }
        .leaflet-popup-close-button { color: #C9A96E !important; }
      `;
      document.head.appendChild(style);
    }

    import("leaflet").then((L) => {
      if (!mapRef.current || mapInstanceRef.current) return;

      const map = L.map(mapRef.current, {
        center: [25, 30],
        zoom: 2.5,
        zoomControl: true,
        scrollWheelZoom: false,
        attributionControl: true,
      });

      mapInstanceRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18,
      }).addTo(map);

      ALL_LOCATIONS.forEach((loc) => {
        const isHQ = loc.type === "headquarters";
        const isMfg = loc.type === "manufacturing";
        const size = isHQ ? 18 : isMfg ? 16 : 12;
        const pulseSize = isHQ ? 36 : isMfg ? 30 : 24;
        const dotColor = isHQ ? "#C9A96E" : isMfg ? "#E8D5A8" : "rgba(201,169,110,0.55)";
        const borderColor = isHQ ? "2px solid #E8D5A8" : isMfg ? "2px solid #C9A96E" : "1.5px solid rgba(201,169,110,0.5)";
        const glowOpacity = isHQ ? "0.6" : isMfg ? "0.45" : "0.3";
        const glowSize = isHQ ? "16px" : isMfg ? "12px" : "8px";

        const markerHtml = `
          <div style="position:relative; width:${pulseSize}px; height:${pulseSize}px; display:flex; align-items:center; justify-content:center;">
            ${isHQ || isMfg ? `<div style="position:absolute; width:${pulseSize}px; height:${pulseSize}px; border-radius:50%; background:rgba(201,169,110,0.12); animation:jnk-pulse ${isMfg ? "2.5s" : "2s"} ease-in-out infinite;"></div>` : ""}
            <div style="
              width:${size}px; height:${size}px; border-radius:50%;
              background: ${dotColor};
              border: ${borderColor};
              box-shadow: 0 0 ${glowSize} rgba(201,169,110,${glowOpacity});
              position:relative; z-index:2;
            "></div>
          </div>
        `;

        const icon = L.divIcon({
          html: markerHtml,
          className: "",
          iconSize: [pulseSize, pulseSize],
          iconAnchor: [pulseSize / 2, pulseSize / 2],
          popupAnchor: [0, -(pulseSize / 2 + 4)],
        });

        const popupContent = `
          <div style="font-family:'Jost',sans-serif; padding:12px 4px 4px; min-width:200px;">
            <div style="font-size:9px; letter-spacing:0.3em; text-transform:uppercase; color:#C9A96E; margin-bottom:6px;">${loc.flag} ${loc.role}</div>
            <div style="font-size:18px; color:#FEFCF8; font-family:'Playfair Display',serif; font-weight:400; margin-bottom:2px;">${loc.city}</div>
            <div style="font-size:10px; color:rgba(201,169,110,0.6); letter-spacing:0.15em; text-transform:uppercase; margin-bottom:8px;">${loc.country}</div>
            ${isHQ ? `
              <div style="width:100%; height:1px; background:rgba(201,169,110,0.15); margin-bottom:8px;"></div>
              <div style="font-size:11px; color:rgba(254,252,248,0.5); font-weight:300; line-height:1.5;">${loc.address}</div>
              <div style="margin-top:10px; font-size:10px; color:#C9A96E; letter-spacing:0.1em;">+971 58 130 7969</div>
              <a href="https://share.google/7hS1UzeL7NeAAQj8i" target="_blank" rel="noopener noreferrer" style="display:inline-block; margin-top:12px; padding:7px 14px; background:rgba(201,169,110,0.12); border:1px solid rgba(201,169,110,0.45); color:#C9A96E; font-size:10px; letter-spacing:0.2em; text-transform:uppercase; text-decoration:none; font-family:'Jost',sans-serif; transition:background 0.2s;" onmouseover="this.style.background='rgba(201,169,110,0.25)'" onmouseout="this.style.background='rgba(201,169,110,0.12)'">↗ Get Directions</a>
            ` : ""}
          </div>
        `;

        const marker = L.marker([loc.lat, loc.lng], { icon })
          .addTo(map)
          .bindPopup(popupContent, { maxWidth: 240, minWidth: 200 });

        if (isHQ) {
          marker.openPopup();
        }
      });

      // Inject pulse animation
      if (!document.getElementById("jnk-pulse-style")) {
        const s = document.createElement("style");
        s.id = "jnk-pulse-style";
        s.textContent = `@keyframes jnk-pulse { 0%,100%{transform:scale(1);opacity:0.6} 50%{transform:scale(1.6);opacity:0} }`;
        document.head.appendChild(s);
      }

      setLeafletReady(true);
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section id="global-map" className="relative overflow-hidden" style={{ background: "#0C0905" }}>
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-14 pt-20 pb-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px" style={{ background: "#C9A96E" }} />
              <span className="text-xs tracking-[0.45em] uppercase" style={{ color: "#C9A96E", fontFamily: "'Jost', sans-serif", fontWeight: 400 }}>{gm.overline}</span>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, color: "#FEFCF8", fontSize: "clamp(32px, 4.5vw, 58px)", lineHeight: 1.0 }}>
              {gm.h2} <em style={{ color: "#C9A96E" }}>{gm.h2italic}</em>
            </h2>
          </div>

          {/* Legend */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full flex-shrink-0" style={{ background: "#C9A96E", boxShadow: "0 0 10px rgba(201,169,110,0.6)" }} />
              <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "#C9A96E", fontFamily: "'Jost', sans-serif", fontWeight: 400 }}>{gm.legendHQ}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3.5 h-3.5 rounded-full flex-shrink-0" style={{ background: "#E8D5A8", border: "2px solid #C9A96E", boxShadow: "0 0 8px rgba(201,169,110,0.4)" }} />
              <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "#E8D5A8", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>{gm.legendMfg}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: "rgba(201,169,110,0.5)", border: "1.5px solid rgba(201,169,110,0.5)" }} />
              <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(201,169,110,0.55)", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>{gm.legendSales}</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Map */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.2 }} className="relative mx-6 lg:mx-14 mb-10" style={{ border: "1px solid rgba(201,169,110,0.12)", boxShadow: "0 0 80px rgba(0,0,0,0.6)" }}>
        <div ref={mapRef} style={{ height: "480px", width: "100%", background: "#0C0905" }} />
        {!leafletReady && (
          <div className="absolute inset-0 flex items-center justify-center" style={{ background: "#0C0905" }}>
            <div className="text-xs tracking-[0.35em] uppercase" style={{ color: "rgba(201,169,110,0.4)", fontFamily: "'Jost', sans-serif" }}>{gm.loadingMap}</div>
          </div>
        )}
      </motion.div>

      {/* Pill rows */}
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4 }} className="max-w-7xl mx-auto px-6 lg:px-14 pb-20">
        <p className="text-[10px] tracking-[0.35em] uppercase mb-4" style={{ color: "rgba(232,213,168,0.5)", fontFamily: "'Jost', sans-serif" }}>{gm.mfgLabel}</p>
        <div className="flex flex-wrap gap-3 mb-8">
          {ALL_LOCATIONS.filter((l) => l.type === "manufacturing").map((loc) => (
            <div key={loc.city} className="flex items-center gap-3 px-5 py-3 transition-all duration-300 cursor-default" style={{ border: "1px solid rgba(232,213,168,0.25)", background: "rgba(232,213,168,0.05)" }} onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(232,213,168,0.5)"; (e.currentTarget as HTMLDivElement).style.background = "rgba(232,213,168,0.1)"; }} onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(232,213,168,0.25)"; (e.currentTarget as HTMLDivElement).style.background = "rgba(232,213,168,0.05)"; }}>
              <span className="text-lg leading-none">{loc.flag}</span>
              <div className="flex flex-col">
                <span className="text-xs" style={{ color: "#E8D5A8", fontFamily: "'Playfair Display', serif", fontWeight: 400 }}>{loc.city}</span>
                <span className="text-[10px] tracking-[0.15em] uppercase" style={{ color: "rgba(232,213,168,0.5)", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>{loc.role}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[10px] tracking-[0.35em] uppercase mb-4" style={{ color: "rgba(201,169,110,0.4)", fontFamily: "'Jost', sans-serif" }}>{gm.salesLabel}</p>
        <div className="flex flex-wrap gap-3">
          {ALL_LOCATIONS.filter((l) => l.type === "sales" || l.type === "headquarters").map((loc) => {
            const isMainSales = loc.type === "headquarters";
            return (
              <div key={loc.city} className="flex items-center gap-3 px-5 py-3 transition-all duration-300 cursor-default" style={{ border: isMainSales ? "1px solid rgba(201,169,110,0.6)" : "1px solid rgba(201,169,110,0.12)", background: isMainSales ? "rgba(201,169,110,0.1)" : "rgba(201,169,110,0.03)", boxShadow: isMainSales ? "0 0 18px rgba(201,169,110,0.12), inset 0 0 12px rgba(201,169,110,0.04)" : "none" }} onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,169,110,0.35)"; (e.currentTarget as HTMLDivElement).style.background = "rgba(201,169,110,0.07)"; }} onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = isMainSales ? "rgba(201,169,110,0.6)" : "rgba(201,169,110,0.12)"; (e.currentTarget as HTMLDivElement).style.background = isMainSales ? "rgba(201,169,110,0.1)" : "rgba(201,169,110,0.03)"; }}>
                <span className="text-lg leading-none">{loc.flag}</span>
                <div className="flex flex-col">
                  <span className="text-xs" style={{ color: isMainSales ? "#C9A96E" : "#FEFCF8", fontFamily: "'Playfair Display', serif", fontWeight: 400 }}>{loc.city}</span>
                  <span className="text-[10px] tracking-[0.15em] uppercase" style={{ color: isMainSales ? "rgba(201,169,110,0.7)" : "rgba(201,169,110,0.45)", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
                    {isMainSales ? gm.mainSalesLabel : loc.country}
                  </span>
                  {isMainSales && <span className="text-[10px] mt-1" style={{ color: "rgba(254,252,248,0.45)", fontFamily: "'Jost', sans-serif", fontWeight: 300, letterSpacing: "0.03em" }}>{loc.address}</span>}
                </div>
                {isMainSales && <div className="ml-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#C9A96E", boxShadow: "0 0 6px rgba(201,169,110,0.8)" }} />}
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}