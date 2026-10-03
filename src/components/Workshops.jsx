import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { WORKSHOPS_DATA } from '../data/festivalData';
import { CardSpotlight } from './ui/CardSpotlight';

export function Workshops({ onRegisterClick }) {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 380;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="workshops"
      className="relative py-28 md:py-36 px-6 md:px-12 bg-[#050505] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background Watermark Typography */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-12 select-none text-[18vw] font-black font-['Space_Grotesk'] text-white/[0.015] leading-none"
      >
        TRACKS
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header with Left/Right Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-[0.3em] text-[#e50914] mb-3">
              <span className="w-1.5 h-1.5 bg-[#e50914]" />
              <span>04 / LEARNING TRACKS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white font-['Space_Grotesk'] leading-[0.95]">
              LEARN <br />
              <span className="text-neutral-400">WHAT&apos;S NEXT.</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase hidden sm:inline">
              SLIDE TO EXPLORE
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                className="h-11 w-11 flex items-center justify-center border border-white/10 text-white hover:border-[#e50914] hover:text-[#e50914] transition-colors cursor-pointer"
                aria-label="Previous workshops"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="h-11 w-11 flex items-center justify-center border border-white/10 text-white hover:border-[#e50914] hover:text-[#e50914] transition-colors cursor-pointer"
                aria-label="Next workshops"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scrolling Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-none scroll-smooth -mx-6 px-6 md:-mx-12 md:px-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {WORKSHOPS_DATA.map((ws, idx) => (
            <div
              key={ws.id}
              className="min-w-[310px] sm:min-w-[360px] md:min-w-[400px] flex-shrink-0 snap-start"
            >
              <CardSpotlight
                className="h-full p-8 flex flex-col justify-between group min-h-[360px]"
                spotlightColor="rgba(229, 9, 20, 0.15)"
                borderColor="rgba(229, 9, 20, 0.4)"
              >
                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-5 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-neutral-400">
                        #{String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#e50914] uppercase">
                        {ws.category}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase border border-white/10 px-2 py-0.5">
                      {ws.level}
                    </span>
                  </div>

                  {/* Workshop Title */}
                  <h3 className="text-xl md:text-2xl font-bold font-['Space_Grotesk'] text-white tracking-tight leading-snug mb-3 group-hover:text-white">
                    {ws.title}
                  </h3>

                  {/* Thematic Description */}
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans mb-6">
                    {ws.description}
                  </p>

                  {/* Focus Topic Pills */}
                  <div className="space-y-2 mb-6">
                    {ws.focus.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-xs text-neutral-400 font-sans"
                      >
                        <span className="h-1 w-1 bg-[#e50914]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Thematic Action */}
                <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-400">
                    LEARNING DOMAIN
                  </span>

                  <button
                    onClick={onRegisterClick}
                    className="text-xs font-mono uppercase tracking-wider text-white group-hover:text-[#e50914] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>VIEW TRACK</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
              </CardSpotlight>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
