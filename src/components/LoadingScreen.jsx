import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('BOOTING');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete?.();
          }, 400);
          return 100;
        }
        const step = Math.floor(Math.random() * 8) + 4;
        const next = Math.min(prev + step, 100);
        if (next > 70) setPhase('SYNCHRONIZING');
        else if (next > 35) setPhase('LOADING ASSETS');
        return next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex flex-col justify-between bg-[#050505] p-8 md:p-14 font-mono select-none"
    >
      {/* Top Header Bar */}
      <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.25em] text-neutral-500">
        <div className="flex items-center space-x-2">
          <span className="inline-block h-1.5 w-1.5 bg-[#e50914] animate-pulse" />
          <span>INITIALIZING EXPERIENCE...</span>
        </div>
        <div className="hidden sm:block">EDITION XXX // 2026</div>
      </div>

      {/* Center Display Typography */}
      <div className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          <div className="text-[12px] uppercase tracking-[0.3em] text-[#e50914] font-semibold">
            TECHFEST // IIT BOMBAY
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-white font-['Space_Grotesk'] uppercase">
            AN AETHERIAL <br />
            RENAISSANCE
          </h1>
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            30 YEARS OF BUILDING TOMORROW
          </p>
        </motion.div>
      </div>

      {/* Bottom Loading Bar & Metrics */}
      <div className="space-y-3">
        <div className="flex justify-between items-end text-xs text-neutral-400 tracking-wider">
          <div className="flex items-center space-x-3">
            <span className="text-[#e50914] font-bold">[{phase}]</span>
            <span className="hidden sm:inline text-neutral-600">// POWAI CAMPUS GATEWAY</span>
          </div>
          <div className="text-lg font-bold text-white font-mono">
            {progress.toString().padStart(2, '0')}%
          </div>
        </div>

        {/* Minimal Progress Bar */}
        <div className="relative h-[2px] w-full bg-neutral-900 overflow-hidden">
          <motion.div
            className="h-full bg-[#e50914]"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut' }}
          />
        </div>

        <div className="flex justify-between text-[10px] text-neutral-600 tracking-widest uppercase">
          <span>POWAI · MUMBAI // INDIA</span>
          <span>EST. 1998</span>
        </div>
      </div>
    </motion.div>
  );
}
