import React from 'react';
import useMagnetic from '@/hooks/useMagnetic.js';

export default function MagneticElement({ children, strength = 0.3, className = '' }) {
  const { ref, onMouseMove, onMouseLeave } = useMagnetic(strength);

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
    >
      {children}
    </div>
  );
}
