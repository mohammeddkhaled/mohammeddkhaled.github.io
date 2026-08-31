import { gsap, SplitText } from './gsapConfig.js';

/**
 * Animate text by splitting into characters with staggered reveal.
 */
export function animateChars(element, options = {}) {
  const {
    duration = 0.6,
    stagger = 0.03,
    delay = 0,
    y = 60,
    ease = 'expo.out',
    scrollTrigger = null,
  } = options;

  const split = new SplitText(element, { type: 'chars, words' });

  const tween = gsap.from(split.chars, {
    y,
    opacity: 0,
    rotateX: -90,
    duration,
    stagger,
    delay,
    ease,
    scrollTrigger,
  });

  return { split, tween };
}

/**
 * Animate text by splitting into words with staggered reveal.
 */
export function animateWords(element, options = {}) {
  const {
    duration = 0.7,
    stagger = 0.06,
    delay = 0,
    y = 40,
    ease = 'expo.out',
    scrollTrigger = null,
  } = options;

  const split = new SplitText(element, { type: 'words' });

  const tween = gsap.from(split.words, {
    y,
    opacity: 0,
    duration,
    stagger,
    delay,
    ease,
    scrollTrigger,
  });

  return { split, tween };
}

/**
 * Animate text by splitting into lines with mask reveal.
 */
export function animateLines(element, options = {}) {
  const {
    duration = 0.8,
    stagger = 0.12,
    delay = 0,
    ease = 'circ.inOut',
    scrollTrigger = null,
  } = options;

  const split = new SplitText(element, { type: 'lines', linesClass: 'split-line' });

  /* Wrap each line in a clip container */
  split.lines.forEach((line) => {
    const wrapper = document.createElement('div');
    wrapper.style.overflow = 'hidden';
    line.parentNode.insertBefore(wrapper, line);
    wrapper.appendChild(line);
  });

  const tween = gsap.from(split.lines, {
    y: '100%',
    opacity: 0,
    duration,
    stagger,
    delay,
    ease,
    scrollTrigger,
  });

  return { split, tween };
}

/**
 * Typewriter effect — reveal text character by character.
 */
export function animateTypewriter(element, options = {}) {
  const {
    duration = 2,
    delay = 0,
    ease = 'none',
    scrollTrigger = null,
  } = options;

  const split = new SplitText(element, { type: 'chars' });

  const tween = gsap.from(split.chars, {
    opacity: 0,
    duration: duration / split.chars.length,
    stagger: duration / split.chars.length,
    delay,
    ease,
    scrollTrigger,
  });

  return { split, tween };
}
