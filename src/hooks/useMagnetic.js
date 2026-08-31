import { useRef, useCallback } from 'react';
import { lerp } from '@/utils/helpers.js';

/**
 * Hook for magnetic hover effect on elements.
 * Returns ref and event handlers to attach to the element.
 */
export default function useMagnetic(strength = 0.3) {
  const ref = useRef(null);

  const handleMouseMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      el.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      el.style.transition = 'transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)';
    },
    [strength]
  );

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate(0px, 0px)';
    el.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
  }, []);

  return {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };
}
