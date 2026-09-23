/**
 * Section IDs — single source of truth for navigation and scroll targets.
 */
export const SECTIONS = [
  { id: 'home', label: 'Home', number: '01' },
  { id: 'about', label: 'About', number: '02' },
  { id: 'experience', label: 'Experience', number: '03' },
  { id: 'journey', label: 'Journey', number: '04' },
  { id: 'skills', label: 'Skills', number: '05' },
  { id: 'projects', label: 'Projects', number: '06' },
  { id: 'certifications', label: 'Certifications', number: '07' },
  { id: 'contact', label: 'Contact', number: '08' },
];

/**
 * Navigation items for the Navbar.
 */
export const NAV_ITEMS = SECTIONS.filter(s => s.id !== 'home');

/**
 * Breakpoints matching Tailwind defaults.
 */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

/**
 * Animation durations (in seconds for GSAP).
 */
export const DURATIONS = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.7,
  cinematic: 1.2,
  loader: 3,
};

/**
 * GSAP easing presets.
 */
export const EASINGS = {
  outExpo: 'expo.out',
  outQuart: 'quart.out',
  inOutCirc: 'circ.inOut',
  outBack: 'back.out(1.7)',
  elastic: 'elastic.out(1, 0.5)',
};
