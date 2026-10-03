import { useState, useRef } from 'react';

/**
 * Aceternity-style Card Spotlight
 * Creates a dynamic cursor-following spotlight effect on hover
 * with sharp, minimal editorial framing and subtle lift translation.
 */
export function CardSpotlight({
  children,
  className = '',
  spotlightColor = 'rgba(229, 9, 20, 0.12)',
  borderColor = 'rgba(255, 255, 255, 0.18)',
  radius = 340,
}) {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden border border-white/[0.08] bg-[#09090c] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 ${className}`}
    >
      {/* Dynamic Cursor Spotlight Layer */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(${radius}px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />

      {/* Subtle Border Spotlight Line Highlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 border border-transparent"
        style={{
          opacity,
          maskImage: `radial-gradient(${radius * 0.7}px circle at ${position.x}px ${position.y}px, black, transparent 80%)`,
          WebkitMaskImage: `radial-gradient(${radius * 0.7}px circle at ${position.x}px ${position.y}px, black, transparent 80%)`,
          borderColor: borderColor,
        }}
      />

      {/* Card Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
