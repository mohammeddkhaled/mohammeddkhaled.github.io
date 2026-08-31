import useMediaQuery from './useMediaQuery.js';

/**
 * Hook that detects if user prefers reduced motion.
 * When true, all animations should be disabled or minimized.
 */
export default function useReducedMotion() {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
}
