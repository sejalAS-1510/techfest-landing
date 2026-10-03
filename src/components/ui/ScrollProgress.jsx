import { motion, useScroll } from 'motion/react';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#990008] via-[#e50914] to-[#ff3b3b] z-50 origin-left pointer-events-none shadow-[0_0_8px_rgba(229,9,20,0.7)]"
    />
  );
}
