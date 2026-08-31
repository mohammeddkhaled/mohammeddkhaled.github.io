import { gsap, ScrollTrigger } from './gsapConfig.js';

/**
 * Create a scroll-triggered fade-in animation.
 */
export function createScrollFadeIn(element, options = {}) {
  const {
    y = 60,
    duration = 0.8,
    delay = 0,
    start = 'top 85%',
    end = 'top 20%',
  } = options;

  return gsap.from(element, {
    y,
    opacity: 0,
    duration,
    delay,
    ease: 'expo.out',
    scrollTrigger: {
      trigger: element,
      start,
      end,
      toggleActions: 'play none none reverse',
    },
  });
}

/**
 * Create a scroll-triggered reveal using clipPath.
 */
export function createScrollReveal(element, options = {}) {
  const {
    direction = 'up',
    duration = 1,
    start = 'top 80%',
  } = options;

  const clipPaths = {
    up: { from: 'inset(100% 0% 0% 0%)', to: 'inset(0% 0% 0% 0%)' },
    down: { from: 'inset(0% 0% 100% 0%)', to: 'inset(0% 0% 0% 0%)' },
    left: { from: 'inset(0% 100% 0% 0%)', to: 'inset(0% 0% 0% 0%)' },
    right: { from: 'inset(0% 0% 0% 100%)', to: 'inset(0% 0% 0% 0%)' },
  };

  const clip = clipPaths[direction] || clipPaths.up;

  return gsap.fromTo(
    element,
    { clipPath: clip.from },
    {
      clipPath: clip.to,
      duration,
      ease: 'circ.inOut',
      scrollTrigger: {
        trigger: element,
        start,
        toggleActions: 'play none none reverse',
      },
    }
  );
}

/**
 * Create a horizontal scroll pin section.
 */
export function createHorizontalScroll(container, panels, options = {}) {
  const { scrub = 1 } = options;

  return gsap.to(panels, {
    xPercent: -100 * (panels.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: container,
      pin: true,
      scrub,
      snap: 1 / (panels.length - 1),
      end: () => `+=${container.offsetWidth}`,
      anticipatePin: 1,
    },
  });
}

/**
 * Create a parallax effect on scroll.
 */
export function createParallax(element, options = {}) {
  const { speed = 0.5, start = 'top bottom', end = 'bottom top' } = options;

  return gsap.to(element, {
    y: () => speed * 100,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start,
      end,
      scrub: true,
    },
  });
}

/**
 * Stagger animate children on scroll.
 */
export function createStaggerReveal(container, children, options = {}) {
  const {
    y = 40,
    stagger = 0.1,
    duration = 0.7,
    start = 'top 80%',
  } = options;

  return gsap.from(children, {
    y,
    opacity: 0,
    duration,
    stagger,
    ease: 'expo.out',
    scrollTrigger: {
      trigger: container,
      start,
      toggleActions: 'play none none reverse',
    },
  });
}
