import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Spotlight, RedSpotlight } from './ui/Spotlight';
import { AnimatedGrid } from './ui/AnimatedGrid';

export function FinalCTA({ onRegisterClick }) {
  return (
    <section
      id="register"
      className="relative py-32 md:py-48 px-6 md:px-12 bg-[#050505] border-t border-white/[0.06] overflow-hidden flex flex-col items-center text-center"
    >
      {/* Visual FX Layers */}
      <Spotlight className="top-[-20%] left-[20%]" fill="#ffffff" intensity={0.12} />
      <RedSpotlight className="top-1/3 left-1/2 -translate-x-1/2 opacity-25" />
      <AnimatedGrid numSquares={32} className="opacity-50" />

      {/* Subtle Linear Gradients */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] z-[2]" />

      {/* Background Watermark Typography */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-10 select-none text-[20vw] font-black font-['Space_Grotesk'] text-white/[0.015] leading-none"
      >
        INITIATE
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Kicker Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-2 mb-8"
        >
          <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-[0.3em] text-[#e50914]">
            <span className="w-1.5 h-1.5 bg-[#e50914]" />
            <span>08 / INITIATION</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.04] border border-white/10 text-neutral-300 text-xs font-mono tracking-[0.25em] uppercase">
            <span className="w-1.5 h-1.5 bg-[#e50914] animate-ping" />
            <span>TECHFEST 2026 // CA TASK CONCEPT</span>
          </div>
        </motion.div>

        {/* Dramatic Huge Typography */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white font-['Space_Grotesk'] leading-[0.94] max-w-4xl"
        >
          YOUR NEXT <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-neutral-500">
            IDEA STARTS
          </span>{' '}
          <span className="text-[#e50914]">HERE.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 text-neutral-400 font-sans text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
        >
          Experience the intersection of technology, creative engineering, and innovation. A student-designed landing page celebrating 30 editions of Techfest.
        </motion.p>

        {/* Editorial Interactive CTA Trigger */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 w-full max-w-xl"
        >
          <button
            onClick={onRegisterClick}
            className="group relative w-full p-6 sm:p-8 border border-white/15 md:hover:border-[#e50914] bg-[#09090b]/90 backdrop-blur-sm transition-all duration-300 flex items-center justify-between cursor-pointer overflow-hidden text-left md:hover:-translate-y-1 md:hover:shadow-[0_10px_40px_-15px_rgba(229,9,20,0.3)] active:scale-[0.98] active:border-[#e50914]"
          >
            {/* Subtle hover gradient sweep (Desktop) */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#e50914]/15 via-[#e50914]/5 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />

            {/* Bottom red progress accent line - persistent on mobile, expands on hover for desktop */}
            <div className="absolute bottom-0 left-0 h-[2px] w-full md:w-0 md:group-hover:w-full bg-[#e50914] transition-all duration-500" />

            <div className="relative z-10 space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#e50914] block font-bold">
                ACCID // EXPLORER ACCESS
              </span>
              <span className="text-xl sm:text-2xl md:text-3xl font-black uppercase font-['Space_Grotesk'] text-white tracking-tight block">
                EXPLORE TECHFEST
              </span>
              <span className="text-xs text-neutral-400 font-sans block">
                Launch accreditation & interest registration
              </span>
            </div>

            <div className="relative z-10 ml-4 flex-shrink-0 h-12 w-12 sm:h-14 sm:w-14 rounded-full border border-[#e50914]/50 bg-[#e50914]/10 md:border-white/20 md:bg-transparent md:group-hover:border-[#e50914] md:group-hover:bg-[#e50914] flex items-center justify-center transition-all duration-300">
              <ArrowRight className="w-5 h-5 text-white transition-transform duration-300 md:group-hover:translate-x-1" />
            </div>
          </button>
        </motion.div>

        {/* Student Concept Metadata */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs font-mono uppercase tracking-wider text-neutral-400">
          <span>TECHFEST 2026</span>
          <span className="text-neutral-700">•</span>
          <span>30TH EDITION</span>
          <span className="text-neutral-700">•</span>
          <span>COLLEGE AMBASSADOR TASK</span>
        </div>
      </div>
    </section>
  );
}
