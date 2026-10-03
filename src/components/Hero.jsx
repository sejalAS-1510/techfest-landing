import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Spotlight, RedSpotlight } from './ui/Spotlight';
import { AnimatedGrid } from './ui/AnimatedGrid';

export function Hero({ onExploreClick, onRegisterClick }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 md:pt-36 pb-8 md:pb-12 px-6 md:px-12 overflow-hidden bg-[#050505]"
    >
      {/* Background Visual Effects */}
      <Spotlight className="top-[-15%] left-[-10%]" fill="#ffffff" intensity={0.12} />
      <RedSpotlight className="top-1/4 right-[12%] opacity-20" />
      <AnimatedGrid numSquares={42} className="opacity-70" />

      {/* Restrained Mouse-Follow Spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] transition-opacity duration-300 opacity-70 hidden md:block"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(229, 9, 20, 0.08), transparent 70%)`,
        }}
      />

      {/* Subtle Linear Vignettes */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505] z-[2]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,#050505_95%)] z-[2]" />

      {/* Massive Oversized "30" Visual Focal Point */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-4%] md:right-[2%] top-1/2 -translate-y-1/2 z-[1] select-none text-[34vw] md:text-[28vw] font-black leading-none tracking-tighter font-['Space_Grotesk'] text-transparent"
        style={{
          WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.09)',
          textShadow: '0 0 100px rgba(229, 9, 20, 0.16)',
        }}
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block relative"
        >
          30
          {/* Subtle animated red scanline across the 30 */}
          <span className="absolute left-0 bottom-1/3 w-full h-[1px] bg-gradient-to-r from-transparent via-[#e50914]/40 to-transparent block animate-pulse" />
        </motion.span>
      </div>

      {/* Top Meta Bar with Thin Animated Red Accent Line */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400 pb-4"
        >
          <div className="flex items-center space-x-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e50914] animate-ping" />
            <span className="text-white font-semibold">TECHFEST 2026</span>
            <span className="text-neutral-600">//</span>
            <span className="text-neutral-400">ASIA&apos;S LARGEST SCIENCE & TECH FESTIVAL</span>
          </div>
          <div className="flex items-center space-x-6 text-neutral-400">
            <span className="text-white font-bold">30TH EDITION</span>
            <span className="hidden sm:inline">POWAI · MUMBAI</span>
          </div>
        </motion.div>

        {/* Thin Animated Red Accent Hairline */}
        <div className="relative h-[1px] w-full bg-white/[0.06] overflow-hidden">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '200%' }}
            transition={{
              repeat: Infinity,
              duration: 3.5,
              ease: 'easeInOut',
              repeatDelay: 1,
            }}
            className="absolute inset-y-0 w-48 bg-gradient-to-r from-transparent via-[#e50914] to-transparent"
          />
        </div>
      </div>

      {/* Central Editorial Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12 md:py-16">
        <div className="max-w-4xl">
          {/* Edition Tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="px-3 py-1 text-[10px] font-mono font-bold tracking-[0.25em] uppercase bg-white/[0.04] border border-white/10 text-white flex items-center gap-2">
              <span className="h-1 w-1 bg-[#e50914]" />
              <span>30TH LANDMARK EDITION</span>
            </div>
            <div className="h-px w-10 bg-[#e50914]" />
            <span className="text-[11px] font-mono tracking-widest text-[#e50914] uppercase">
              16—18 DECEMBER // IIT BOMBAY · MUMBAI
            </span>
          </motion.div>

          {/* Main Huge Display Typography with Strong Hierarchy */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black uppercase tracking-tight text-white font-['Space_Grotesk'] leading-[0.92] select-none"
          >
            <span className="block text-neutral-400 font-light text-2xl sm:text-4xl md:text-5xl mb-2 tracking-[0.18em]">
              AN
            </span>
            <span className="block text-white">AETHERIAL</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-neutral-400">
              RENAISSANCE
            </span>
          </motion.h1>

          {/* Location and Date Metadata */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 md:mt-12 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12"
          >
            <div className="border-l-2 border-[#e50914] pl-4 space-y-0.5">
              <div className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-white">
                16—18 DECEMBER
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                IIT BOMBAY · MUMBAI
              </div>
            </div>

            {/* CTA Buttons with Refined Hover Micro-Interactions */}
            <div className="flex items-center gap-4">
              <button
                onClick={onExploreClick}
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black font-mono font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 md:hover:bg-[#e50914] md:hover:text-white md:hover:shadow-[0_0_25px_rgba(229,9,20,0.4)] active:bg-[#e50914] active:text-white cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  EXPLORE TECHFEST
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 md:group-hover:translate-x-1.5" />
                </span>
              </button>

              <button
                onClick={onRegisterClick}
                className="inline-flex items-center justify-center px-6 py-4 border border-white/20 text-neutral-300 font-mono text-xs uppercase tracking-[0.2em] transition-all duration-300 md:hover:border-white md:hover:text-white md:hover:bg-white/[0.04] active:bg-white/[0.08] cursor-pointer"
              >
                REGISTER
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator with Smooth Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between pt-6 border-t border-white/[0.06]"
      >
        <button
          onClick={onExploreClick}
          className="group flex items-center space-x-3 text-left focus:outline-none cursor-pointer"
        >
          <div className="flex flex-col">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500 group-hover:text-white transition-colors">
              SCROLL TO EXPLORE
            </span>
            <span className="text-[11px] font-mono text-[#e50914] group-hover:underline">
              DISCOVER CHAPTERS
            </span>
          </div>
          <div className="h-8 w-8 flex items-center justify-center border border-white/10 group-hover:border-[#e50914] group-hover:bg-[#e50914]/10 transition-colors">
            <ChevronDown className="w-4 h-4 text-white animate-bounce" />
          </div>
        </button>

        <div className="hidden md:flex items-center space-x-6 text-[10px] font-mono uppercase tracking-widest text-neutral-500">
          <span>FESTIVAL VENUE // POWAI · MUMBAI</span>
          <span className="text-white">EST. 1998</span>
        </div>
      </motion.div>
    </section>
  );
}
