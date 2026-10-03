import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth springs for fluid, restrained lag
  const mouseX = useSpring(0, { stiffness: 450, damping: 35 });
  const mouseY = useSpring(0, { stiffness: 450, damping: 35 });

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isPointerFine = window.matchMedia('(pointer: fine)').matches;
    if (!isPointerFine) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleElementHover = (e) => {
      const target = e.target;
      if (!target) return;
      const clickable = target.closest('button, a, input, [role="button"], .cursor-pointer');
      setIsHovered(!!clickable);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleElementHover, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleElementHover);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-50 rounded-full border border-white/20 transition-all duration-200"
      style={{
        x: mouseX,
        y: mouseY,
        translateX: '-50%',
        translateY: '-50%',
        width: isHovered ? 44 : 26,
        height: isHovered ? 44 : 26,
        borderColor: isHovered ? 'rgba(229, 9, 20, 0.7)' : 'rgba(255, 255, 255, 0.25)',
        backgroundColor: isHovered ? 'rgba(229, 9, 20, 0.06)' : 'transparent',
        boxShadow: isHovered ? '0 0 15px rgba(229, 9, 20, 0.3)' : 'none',
      }}
    />
  );
}
