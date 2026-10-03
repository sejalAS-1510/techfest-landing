import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { COMPETITIONS_DATA } from '../data/festivalData';
import { CardSpotlight } from './ui/CardSpotlight';

export function Competitions({ onRegisterClick }) {
  return (
    <section
      id="competitions"
      className="relative py-32 md:py-44 px-6 md:px-12 bg-[#050505] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Oversized Background Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-8 -top-12 select-none text-[18vw] font-black leading-none tracking-tighter text-white/[0.015] font-['Space_Grotesk'] z-0"
      >
        FRONTIER
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#e50914] mb-3">
              03 / COMPETITIVE DOMAINS
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white font-['Space_Grotesk'] leading-[0.95]">
              EXPLORE THE <br />
              <span className="text-neutral-400">FRONTIER.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-md text-sm text-neutral-400 font-sans leading-relaxed"
          >
            Broad innovation domains inspiring students to push hardware systems, intelligent code, and creative engineering beyond conventional boundaries.
          </motion.div>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {COMPETITIONS_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15, margin: '0px 0px -40px 0px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={item.span}
            >
              <CardSpotlight
                className="h-full p-8 md:p-10 flex flex-col justify-between group min-h-[320px]"
                spotlightColor="rgba(229, 9, 20, 0.18)"
                borderColor="rgba(229, 9, 20, 0.5)"
              >
                <div>
                  {/* Top Bar with Number and Arrow */}
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-6 mb-8">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl md:text-5xl font-black font-['Space_Grotesk'] text-neutral-500 md:text-neutral-700 md:group-hover:text-[#e50914] transition-colors duration-300">
                        {item.id}
                      </span>
                      <span className="h-1.5 w-1.5 bg-[#e50914] md:bg-neutral-800 md:group-hover:bg-[#e50914] transition-colors" />
                    </div>

                    <button
                      onClick={onRegisterClick}
                      className="h-10 w-10 flex items-center justify-center border border-white/10 text-neutral-300 md:text-neutral-400 md:group-hover:text-white md:group-hover:border-[#e50914] md:group-hover:bg-[#e50914] active:bg-[#e50914] active:text-white transition-all duration-300 cursor-pointer"
                      aria-label={`Explore ${item.category}`}
                    >
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-300 md:group-hover:translate-x-1 md:group-hover:-translate-y-1" />
                    </button>
                  </div>

                  {/* Category Title */}
                  <div className="space-y-1 mb-4">
                    <div className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">
                      {item.subheading}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black font-['Space_Grotesk'] text-white uppercase tracking-tight md:group-hover:text-white transition-colors">
                      {item.category}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-neutral-400 font-sans leading-relaxed mb-6 md:group-hover:text-neutral-300 transition-colors">
                    {item.description}
                  </p>
                </div>

                {/* Thematic Tags with Hover Glow */}
                <div className="pt-6 border-t border-white/[0.06] flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-neutral-300 md:text-neutral-400 bg-white/[0.03] border border-white/[0.06] md:group-hover:border-white/20 md:group-hover:text-neutral-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardSpotlight>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
