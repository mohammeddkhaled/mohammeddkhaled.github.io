import React, { useRef, useState } from 'react';
import { cn } from '@/utils/cn.js';

export default function GlowCard({
  children,
  className = '',
  glowColor = 'rgba(212, 168, 83, 0.15)',
  ...props
}) {
  const cardRef = useRef(null);
  const [cursor, setCursor] = useState({ x: -1000, y: -1000, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCursor({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setCursor((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'relative overflow-hidden rounded-2xl bg-midnight-900/80 border border-midnight-700/60 p-6 md:p-8 backdrop-blur-xl transition-all duration-300 hover:border-gold-500/40 hover:shadow-xl group',
        className
      )}
      {...props}
    >
      {/* Mouse gradient spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-500 rounded-2xl"
        style={{
          opacity: cursor.opacity,
          background: `radial-gradient(600px circle at ${cursor.x}px ${cursor.y}px, ${glowColor}, transparent 40%)`,
        }}
      />
      
      {/* Subtle border glow overlay */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 rounded-2xl border border-gold-400/20"
        style={{ opacity: cursor.opacity }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
