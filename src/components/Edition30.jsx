import { motion } from 'motion/react';

export function Edition30() {
  return (
    <section
      id="edition30"
      className="relative min-h-[95vh] py-28 md:py-36 px-6 md:px-12 bg-[#050505] border-t border-white/[0.06] flex flex-col justify-center items-center overflow-hidden text-center"
    >
      {/* Background Red Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
      >
        <div className="w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-[#e50914] opacity-[0.14] blur-[160px]" />
      </div>

      {/* Background Watermark Typography */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-10 select-none text-[22vw] font-black font-['Space_Grotesk'] text-white/[0.015] leading-none"
      >
        LEGACY
      </div>

      {/* Subtle Technical Grid Lines */}
      <div className="pointer-events-none absolute inset-0 bg-tech-grid opacity-30 z-0" />

      {/* Main Massive "30" Visual Anchor */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        {/* Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-2 mb-8"
        >
          <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-[0.3em] text-[#e50914]">
            <span className="w-1.5 h-1.5 bg-[#e50914]" />
            <span>05 / THREE DECADES</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.04] border border-white/10 text-neutral-300 text-xs font-mono tracking-[0.25em] uppercase">
            <span>1998 — 2026 // HISTORIC 30TH EDITION</span>
          </div>
        </motion.div>

        {/* Huge "30" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="select-none leading-none -mb-8 sm:-mb-14 md:-mb-20 text-[35vw] sm:text-[30vw] md:text-[25vw] font-black font-['Space_Grotesk'] tracking-tighter text-transparent"
          style={{
            WebkitTextStroke: '2px rgba(255, 255, 255, 0.22)',
            textShadow: '0 0 100px rgba(229, 9, 20, 0.3)',
          }}
        >
          30
        </motion.div>

        {/* Main Editorial Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-3xl space-y-4"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white font-['Space_Grotesk'] leading-[1.02]">
            THIRTY YEARS <br />
            OF BUILDING <br />
            <span className="text-[#e50914]">TOMORROW.</span>
          </h2>

          <p className="text-neutral-400 font-sans text-sm sm:text-base md:text-lg max-w-2xl mx-auto pt-4 leading-relaxed">
            Three decades of scientific curiosity, nurturing technological breakthroughs, and empowering the next generation of builders, coders, and creators.
          </p>
        </motion.div>

        {/* Minimal Landmark Epochs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left max-w-5xl"
        >
          <div className="p-6 border border-white/[0.08] bg-[#08080a] space-y-2 hover:border-[#e50914]/40 hover:-translate-y-1 transition-all duration-300">
            <div className="text-[11px] font-mono text-[#e50914] font-bold tracking-widest uppercase">
              1998 // GENESIS
            </div>
            <div className="text-white font-bold font-['Space_Grotesk'] text-lg">
              The First Edition
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Founded by students with a vision to foster scientific inquiry, innovation, and hands-on technological exploration.
            </p>
          </div>

          <div className="p-6 border border-white/[0.08] bg-[#08080a] space-y-2 hover:border-[#e50914]/40 hover:-translate-y-1 transition-all duration-300">
            <div className="text-[11px] font-mono text-[#e50914] font-bold tracking-widest uppercase">
              MILESTONES // GROWTH
            </div>
            <div className="text-white font-bold font-['Space_Grotesk'] text-lg">
              Expanding Horizons
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Evolving across three decades into Asia&apos;s largest annual technology festival, connecting student builders and thought leaders.
            </p>
          </div>

          <div className="p-6 border border-white/[0.08] bg-[#08080a] space-y-2 hover:border-[#e50914]/40 hover:-translate-y-1 transition-all duration-300">
            <div className="text-[11px] font-mono text-[#e50914] font-bold tracking-widest uppercase">
              2026 // 30TH EDITION
            </div>
            <div className="text-white font-bold font-['Space_Grotesk'] text-lg">
              An Aetherial Era
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Celebrating three decades of student ingenuity, creative engineering, and forward-looking concepts at the historic venue.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
