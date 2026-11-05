import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function Logo({ className, iconOnly = false }: LogoProps) {
  return (
    <div className={cn("relative flex items-center group select-none", className)}>
      {/* Hover glow - no background on the logo itself */}
      <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/15 via-blue-400/5 to-blue-500/15 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

      {iconOnly ? (
        /* Icon only - just the owl mark */
        <svg
          viewBox="0 0 64 64"
          className="h-10 w-10 drop-shadow-[0_0_10px_rgba(96,165,250,0.6)] transition-all duration-300 group-hover:drop-shadow-[0_0_18px_rgba(96,165,250,0.9)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <OwlMark />
        </svg>
      ) : (
        /* Full logo - owl + wordmark in one SVG, fully transparent */
        <svg
          viewBox="0 0 260 64"
          className="h-14 w-auto drop-shadow-[0_0_14px_rgba(96,165,250,0.45)] transition-all duration-300 group-hover:drop-shadow-[0_0_22px_rgba(96,165,250,0.7)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Owl mark - centered vertically in 64-tall viewbox, left-anchored */}
          <g transform="translate(2, 0)">
            <OwlMark />
          </g>

          {/* Wordmark - "SOWA" + "MARKETING AGENCY" stacked */}
          {/* SOWA - bold primary text */}
          <text
            x="76"
            y="36"
            fontFamily="'Segoe UI', Arial, sans-serif"
            fontWeight="900"
            fontSize="26"
            letterSpacing="3"
            fill="white"
          >
            SOWA
          </text>
          {/* MARKETING AGENCY - small caps tracked subtitle */}
          <text
            x="77"
            y="52"
            fontFamily="'Segoe UI', Arial, sans-serif"
            fontWeight="700"
            fontSize="9"
            letterSpacing="4.5"
            fill="#60a5fa"
          >
            MARKETING AGENCY
          </text>

          {/* Thin vertical divider between owl and text */}
          <line x1="70" y1="12" x2="70" y2="52" stroke="#60a5fa" strokeWidth="1" strokeOpacity="0.4" />
        </svg>
      )}
    </div>
  );
}

/* Reusable owl SVG paths - fits inside a 64×64 viewBox */
function OwlMark() {
  return (
    <>
      <defs>
        <radialGradient id="eyeGrad" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#93c5fd" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </radialGradient>
      </defs>

      {/* Body outline */}
      <path
        d="M32 10C23 10 16 17 16 27C16 37 23 44 32 44C41 44 48 37 48 27C48 17 41 10 32 10Z"
        stroke="#60a5fa"
        strokeWidth="2.5"
        fill="none"
      />

      {/* Ear tufts */}
      <path d="M20 22C20 22 23 16 27 16" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M44 22C44 22 41 16 37 16" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Left eye */}
      <circle cx="26" cy="26" r="5" stroke="#60a5fa" strokeWidth="1.8" fill="none" />
      <circle cx="26" cy="26" r="2.5" fill="url(#eyeGrad)" />
      <circle cx="24.8" cy="24.8" r="0.9" fill="white" opacity="0.9" />

      {/* Right eye */}
      <circle cx="38" cy="26" r="5" stroke="#60a5fa" strokeWidth="1.8" fill="none" />
      <circle cx="38" cy="26" r="2.5" fill="url(#eyeGrad)" />
      <circle cx="36.8" cy="24.8" r="0.9" fill="white" opacity="0.9" />

      {/* Beak */}
      <path d="M32 32L29 28H35L32 32Z" fill="#fbbf24" />

      {/* Wing sweep / base */}
      <path
        d="M17 32C12 32 8 39 8 47C8 55 17 59 32 59C47 59 56 55 56 47C56 39 52 32 47 32"
        stroke="#60a5fa"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeDasharray="3 2"
        fill="none"
      />

      {/* Left foot */}
      <path d="M24 44L22 54M24 44L24 54M24 44L26 54" stroke="#60a5fa" strokeWidth="1.2" strokeLinecap="round" />
      {/* Right foot */}
      <path d="M40 44L38 54M40 44L40 54M40 44L42 54" stroke="#60a5fa" strokeWidth="1.2" strokeLinecap="round" />
    </>
  );
}
