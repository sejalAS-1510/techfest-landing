import { motion } from 'motion/react';
import { FESTIVAL_STATS } from '../data/festivalData';

export function Stats() {
  return (
    <section className="relative bg-[#050505] border-y border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
          {FESTIVAL_STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative p-8 md:p-12 flex flex-col justify-between transition-colors duration-300 md:hover:bg-white/[0.02]"
            >
              {/* Huge Number */}
              <div className="mb-4">
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter font-['Space_Grotesk'] text-white md:group-hover:text-[#e50914] transition-colors duration-300 block">
                  {stat.number}
                </span>
              </div>

              {/* Minimal Label & Details */}
              <div className="pt-4 border-t border-white/[0.06] space-y-1.5">
                <div className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-neutral-300">
                  {stat.label}
                </div>
                <div className="text-xs text-neutral-400 font-sans leading-relaxed">
                  {stat.detail}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
