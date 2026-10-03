import { useId, useState } from 'react';

/**
 * Magic UI inspired Animated & Interactive Grid Pattern
 * Displays a subtle technical grid with pulsing highlighted cells
 */
function generateSquares(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.floor(Math.random() * 24) - 2,
    y: Math.floor(Math.random() * 20) - 2,
    duration: Math.floor(Math.random() * 4) + 3,
    delay: Math.floor(Math.random() * 4),
    isRed: Math.random() > 0.65,
  }));
}

export function AnimatedGrid({
  width = 44,
  height = 44,
  numSquares = 36,
  className = '',
}) {
  const id = useId();
  const [squares] = useState(() => generateSquares(numSquares));

  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full stroke-white/[0.04] [mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_75%)] ${className}`}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x="-1"
          y="-1"
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray="0"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      <svg x="-1" y="-1" className="overflow-visible">
        {squares.map(({ id: sqId, x, y, duration, delay, isRed }) => (
          <rect
            key={sqId}
            strokeWidth="0"
            width={width - 1}
            height={height - 1}
            x={x * width + 1}
            y={y * height + 1}
            fill={isRed ? 'rgba(229, 9, 20, 0.22)' : 'rgba(255, 255, 255, 0.08)'}
            className="animate-pulse"
            style={{
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              animationIterationCount: 'infinite',
            }}
          />
        ))}
      </svg>
    </svg>
  );
}

/**
 * Fine Film Grain / Noise Overlay
 */
export function NoiseOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 opacity-[0.025] mix-blend-screen"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}
