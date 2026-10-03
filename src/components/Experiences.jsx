import { motion } from 'motion/react';
import { ArrowUpRight, Trophy, Cpu, BookOpen, Compass } from 'lucide-react';
import { EXPERIENCES_DATA } from '../data/festivalData';
import { CardSpotlight } from './ui/CardSpotlight';

const ICONS = [Trophy, Cpu, BookOpen, Compass];

export function Experiences() {
  return (
    <section className="relative py-32 md:py-40 px-6 md:px-12 bg-[#050505] overflow-hidden">
      {/* Oversized Background Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 -top-10 select-none text-[16vw] font-black leading-none tracking-tighter text-white/[0.015] font-['Space_Grotesk'] z-0"
      >
        PILLARS
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
              02 / EXPERIENCES
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white font-['Space_Grotesk'] leading-[0.95]">
              MORE THAN <br />
              <span className="text-neutral-400">AN EVENT.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-md text-sm text-neutral-400 font-sans leading-relaxed"
          >
            Four dimensions of exploration designed to push the boundaries of engineering, creativity, and intellectual rigor.
          </motion.div>
        </div>

        {/* 4 Spotlight Cards with Asymmetric Accent & Micro-interactions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {EXPERIENCES_DATA.map((exp, idx) => {
            const Icon = ICONS[idx] || Trophy;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15, margin: '0px 0px -40px 0px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <CardSpotlight
                  className="h-full p-8 md:p-9 flex flex-col justify-between group min-h-[350px]"
                  spotlightColor="rgba(229, 9, 20, 0.16)"
                  borderColor="rgba(229, 9, 20, 0.45)"
                >
                  {/* Top Bar with Number & Icon */}
                  <div>
                    <div className="flex items-center justify-between border-b border-white/[0.08] pb-5 mb-8">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold tracking-[0.25em] text-[#e50914]">
                          {exp.id}
                        </span>
                        <span className="h-1.5 w-1.5 rounded-full bg-[#e50914] md:bg-neutral-700 md:group-hover:bg-[#e50914] transition-colors" />
                      </div>
                      <div className="h-9 w-9 flex items-center justify-center border border-white/10 text-neutral-300 md:text-neutral-400 md:group-hover:text-white md:group-hover:border-[#e50914] md:group-hover:bg-[#e50914]/10 transition-all duration-300">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <div className="space-y-1 mb-4">
                      <div className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                        {exp.tagline}
                      </div>
                      <h3 className="text-2xl font-black font-['Space_Grotesk'] text-white uppercase tracking-tight md:group-hover:text-white transition-colors">
                        {exp.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-neutral-400 leading-relaxed font-sans md:group-hover:text-neutral-300 transition-colors">
                      {exp.description}
                    </p>
                  </div>

                  {/* Card Bottom Meta with Secondary Hover Reveal */}
                  <div className="pt-6 mt-8 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-300 md:text-neutral-400 md:group-hover:text-[#e50914] transition-colors">
                      {exp.metrics}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-mono text-neutral-300 md:text-white md:group-hover:text-[#e50914] transition-colors">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 md:group-hover:translate-x-1 md:group-hover:-translate-y-1" />
                    </div>
                  </div>
                </CardSpotlight>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
