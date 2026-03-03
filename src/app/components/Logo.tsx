interface LogoProps {
  /** "light" = gold text on dark bg (default), "dark" = dark text on light bg */
  variant?: "light" | "dark";
  height?: number;
}

export function Logo({ variant = "light", height = 60 }: LogoProps) {
  const primary = variant === "light" ? "#FEFCF8" : "#1A1108";
  const gold = "#C9A96E";
  const sub = variant === "light" ? "rgba(201,169,110,0.75)" : "#8C7B65";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 260 72"
      height={height}
      width="auto"
      aria-label="JNK DIAM"
      style={{ display: "block" }}
    >
      {/* Diamond facet icon */}
      <g transform="translate(0, 8)">
        {/* Top facets */}
        <polygon points="14,0 28,0 36,14 22,14" fill={gold} opacity="0.9" />
        <polygon points="0,14 14,0 22,14" fill={gold} opacity="0.55" />
        <polygon points="28,0 42,14 36,14" fill={gold} opacity="0.65" />
        {/* Bottom facets */}
        <polygon points="0,14 22,14 14,44" fill={gold} opacity="0.7" />
        <polygon points="22,14 36,14 14,44" fill={gold} opacity="0.95" />
        <polygon points="36,14 42,14 14,44" fill={gold} opacity="0.45" />
      </g>

      {/* JNK */}
      <text
        x="54"
        y="40"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="34"
        fontWeight="400"
        fill={primary}
        letterSpacing="6"
      >
        JNK
      </text>

      {/* DIAM */}
      <text
        x="56"
        y="58"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="14"
        fontWeight="400"
        fill={gold}
        letterSpacing="12"
        fontStyle="italic"
      >
        DIAM
      </text>

      {/* Thin rule under DIAM */}
      <line x1="54" y1="64" x2="250" y2="64" stroke={gold} strokeWidth="0.6" opacity="0.4" />

      {/* Tagline */}
      <text
        x="54"
        y="72"
        fontFamily="'Jost', Arial, sans-serif"
        fontSize="7"
        fontWeight="300"
        fill={sub}
        letterSpacing="4"
      >
        CERTIFIED EXCELLENCE
      </text>
    </svg>
  );
}
