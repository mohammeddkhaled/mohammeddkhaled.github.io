import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

/* Register GSAP plugins once globally */
gsap.registerPlugin(ScrollTrigger, SplitText);

/* Set global defaults */
gsap.defaults({
  ease: 'power3.out',
  duration: 0.8,
});

/* ScrollTrigger defaults */
ScrollTrigger.defaults({
  toggleActions: 'play none none reverse',
});

export { gsap, ScrollTrigger, SplitText };
