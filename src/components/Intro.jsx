import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';

export function Intro() {
  return (
    <section
      id="intro"
      className="relative py-32 md:py-44 px-6 md:px-12 bg-[#050505] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Oversized Background Architectural Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-4 -top-8 select-none text-[16vw] font-black leading-none tracking-tighter text-white/[0.018] font-['Space_Grotesk'] z-0"
      >
        MANIFESTO
      </div>

      {/* Background Accent Grid Hint */}
      <div className="pointer-events-none absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-white/[0.015] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Metadata Tag */}
        <div className="flex items-center space-x-3 mb-14 text-[11px] font-mono uppercase tracking-[0.3em] text-[#e50914]">
          <Terminal className="w-3.5 h-3.5" />
          <span>01 / MANIFESTO</span>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Huge Typography Heading */}
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-white font-['Space_Grotesk'] leading-[1.02]"
            >
              <span className="block text-neutral-400 font-medium">THE FUTURE</span>
              <span className="block text-white">DOESN&apos;T WAIT.</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#e50914] via-white to-white">
                IT&apos;S BUILT.
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex items-center space-x-4"
            >
              <div className="h-0.5 w-16 bg-[#e50914]" />
              <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">
                ESTABLISHED 1998 // POWAI
              </span>
            </motion.div>
          </div>

          {/* Right Aligned Paragraph & Editorial Commentary */}
          <div className="lg:col-span-5 lg:pt-4">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 text-neutral-400 font-sans text-base md:text-lg leading-relaxed"
            >
              <p className="text-neutral-200 font-medium text-lg md:text-xl leading-relaxed">
                Techfest is Asia&apos;s largest science and technology festival. 
                For three decades, it has served as the global melting pot where visionary thinkers, engineers, and creators converge.
              </p>

              <p className="text-sm md:text-base leading-relaxed text-neutral-400">
                From international robotics warfare and frontier artificial intelligence 
                to hands-on masterclasses and thought-provoking keynotes, Techfest brings together technology, 
                innovation, competitions, workshops, and revolutionary ideas into an electric three-day celebration.
              </p>

              <div className="pt-8 border-t border-white/[0.08] grid grid-cols-2 gap-6 text-left">
                <div>
                  <div className="text-3xl font-bold font-['Space_Grotesk'] text-white">
                    1,80,000+
                  </div>
                  <div className="text-[10px] font-mono tracking-wider uppercase text-neutral-400 mt-1">
                    ESTIMATED FOOTFALL
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold font-['Space_Grotesk'] text-[#e50914]">
                    2,500+
                  </div>
                  <div className="text-[10px] font-mono tracking-wider uppercase text-neutral-400 mt-1">
                    INDIAN COLLEGES CA NETWORK
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
