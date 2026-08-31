import { ReactLenis } from 'lenis/react';

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        syncTouch: true,
        touchMultiplier: 2,
        wheelMultiplier: 1,
      }}
    >
      {children}
    </ReactLenis>
  );
}
