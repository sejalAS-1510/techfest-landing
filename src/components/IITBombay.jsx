import { motion } from 'motion/react';
import { MapPin, Compass } from 'lucide-react';

export function IITBombay() {
  return (
    <section
      id="campus"
      className="relative py-28 md:py-36 px-6 md:px-12 bg-[#050505] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background Watermark Typography */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 top-10 select-none text-[18vw] font-black font-['Space_Grotesk'] text-white/[0.015] leading-none"
      >
        CAMPUS
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-8 text-[11px] font-mono uppercase tracking-[0.3em] text-[#e50914]">
          <Compass className="w-3.5 h-3.5" />
          <span>06 / VENUE & HERITAGE</span>
        </div>

        {/* Large Visual Section: Original Abstract Architectural Visual + Text */}
        <div className="relative border border-white/10 bg-[#09090b] overflow-hidden">
          <div className="relative min-h-[580px] sm:min-h-[640px] md:min-h-[680px] w-full overflow-hidden flex flex-col justify-between p-8 sm:p-12 md:p-16">
            {/* Background Original Abstract Campus Architecture Matrix */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
              {/* Subtle ambient lighting */}
              <div className="absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-[#e50914]/15 blur-[120px]" />
              <div className="absolute bottom-0 right-10 w-[500px] h-[500px] rounded-full bg-white/[0.03] blur-[150px]" />

              {/* Original Geometric Perspective & Architectural Wireframe SVG */}
              <svg
                className="absolute right-0 top-0 h-full w-full md:w-3/4 opacity-30 object-cover"
                viewBox="0 0 800 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="arch-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
                    <stop offset="60%" stopColor="#e50914" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#050505" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="line-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#e50914" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
                  </linearGradient>
                </defs>

                {/* Perspective Horizon & Geometry */}
                <path
                  d="M100 480 Q 300 420 500 450 T 800 400"
                  stroke="url(#line-grad)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <path
                  d="M120 520 Q 350 460 550 490 T 850 440"
                  stroke="url(#line-grad)"
                  strokeWidth="1"
                />

                {/* Modern Pavilion / Architectural Isometric Lines */}
                <polygon
                  points="450,140 720,220 720,440 450,360"
                  stroke="url(#arch-grad)"
                  strokeWidth="1.2"
                  fill="rgba(255,255,255,0.015)"
                />
                <polygon
                  points="250,220 450,140 450,360 250,440"
                  stroke="url(#arch-grad)"
                  strokeWidth="1.2"
                  fill="rgba(229,9,20,0.02)"
                />
                <polygon
                  points="250,220 450,140 720,220 520,300"
                  stroke="url(#arch-grad)"
                  strokeWidth="1.5"
                  fill="rgba(255,255,255,0.03)"
                />

                {/* Structural Ribs */}
                <line x1="300" y1="200" x2="300" y2="420" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                <line x1="350" y1="180" x2="350" y2="400" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                <line x1="400" y1="160" x2="400" y2="380" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                <line x1="500" y1="155" x2="500" y2="375" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                <line x1="560" y1="172" x2="560" y2="395" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                <line x1="630" y1="193" x2="630" y2="415" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />

                {/* Coordinate Nodes */}
                <circle cx="450" cy="140" r="3.5" fill="#e50914" />
                <circle cx="720" cy="220" r="2.5" fill="#ffffff" />
                <circle cx="250" cy="220" r="2.5" fill="#ffffff" />
                <circle cx="450" cy="360" r="3" fill="#e50914" />
              </svg>

              {/* Background gradient fade */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-[#09090b]/85 to-transparent md:w-2/3" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent" />
            </div>

            {/* Top Campus Meta */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-[0.2em] text-neutral-300">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#e50914]" />
                <span>POWAI · MUMBAI</span>
              </div>
              <div className="px-3 py-1 bg-black/60 border border-white/10 backdrop-blur-sm text-[10px]">
                FESTIVAL VENUE
              </div>
            </div>

            {/* Central Editorial Heading */}
            <div className="relative z-10 max-w-2xl my-auto py-10">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4"
              >
                <div>
                  <div className="text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-[#e50914] font-semibold">
                    IIT BOMBAY
                  </div>
                  <div className="text-xs font-mono tracking-[0.25em] uppercase text-neutral-400 mt-1">
                    POWAI · MUMBAI
                  </div>
                </div>

                <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white font-['Space_Grotesk'] leading-[0.98]">
                  WHERE IDEAS, <br />
                  PEOPLE AND <br />
                  <span className="text-[#e50914]">TECHNOLOGY</span> <br />
                  COME TOGETHER.
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 text-neutral-300 font-sans text-sm sm:text-base leading-relaxed max-w-lg bg-black/40 backdrop-blur-xs p-3 rounded-none border-l-2 border-white/20"
              >
                The iconic campus setting the stage for Techfest. Nestled in Powai, the venue brings together students, creators, and innovators for three days of celebration and technological discovery.
              </motion.p>
            </div>

            {/* Bottom Technical Coordinates */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10 text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
              <span>CAMPUS LOCATION // POWAI · MUMBAI</span>
              <span>TECHFEST 2026 VENUE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
