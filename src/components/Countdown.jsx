import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Timer } from 'lucide-react';

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-12-16T09:00:00+05:30').getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: 'DAYS', value: timeLeft.days.toString().padStart(2, '0') },
    { label: 'HOURS', value: timeLeft.hours.toString().padStart(2, '0') },
    { label: 'MINUTES', value: timeLeft.minutes.toString().padStart(2, '0') },
    { label: 'SECONDS', value: timeLeft.seconds.toString().padStart(2, '0') },
  ];

  return (
    <section className="relative py-28 md:py-36 px-6 md:px-12 bg-[#050505] border-t border-white/[0.06] overflow-hidden">
      {/* Background Watermark Typography */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-12 top-10 select-none text-[18vw] font-black font-['Space_Grotesk'] text-white/[0.015] leading-none"
      >
        TIMELINE
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-[0.3em] text-[#e50914] mb-3">
              <Timer className="w-3.5 h-3.5" />
              <span>07 / SYNCHRONIZATION</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white font-['Space_Grotesk'] leading-[0.95]">
              THE CLOCK <br />
              <span className="text-[#e50914]">IS RUNNING.</span>
            </h2>
          </div>

          <div className="text-sm font-mono text-neutral-400 space-y-1">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#e50914] animate-pulse" />
              <span className="text-white font-bold">16 DECEMBER 2026 // 09:00 IST</span>
            </div>
            <div>FESTIVAL COMMENCEMENT // IIT BOMBAY · MUMBAI</div>
          </div>
        </div>

        {/* Minimal High-Impact Countdown Block */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {timeBlocks.map((block, idx) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 md:p-12 border border-white/10 bg-[#08080a] flex flex-col justify-between group hover:border-[#e50914]/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="my-3">
                <span className="text-5xl sm:text-7xl md:text-8xl font-black font-['Space_Grotesk'] text-white tracking-tighter group-hover:text-[#e50914] transition-colors tabular-nums">
                  {block.value}
                </span>
              </div>

              <div className="pt-6 border-t border-white/[0.04]">
                <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-neutral-400">
                  {block.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
