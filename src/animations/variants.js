/**
 * Framer Motion shared animation variants.
 * Used across components for consistent motion language.
 */

/* ── Fade & Slide ── */
export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ── Scale ── */
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] },
  },
};

/* ── Stagger Container ── */
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerSlow = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

/* ── Reveal (clip-path) ── */
export const revealUp = {
  hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
  visible: {
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: { duration: 0.8, ease: [0.85, 0, 0.15, 1] },
  },
};

export const revealLeft = {
  hidden: { clipPath: 'inset(0% 100% 0% 0%)' },
  visible: {
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: { duration: 0.8, ease: [0.85, 0, 0.15, 1] },
  },
};

/* ── Page Transition ── */
export const pageTransition = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: [0.85, 0, 0.15, 1] },
  },
};

/* ── Navbar ── */
export const navItemVariant = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

export const mobileMenuVariant = {
  hidden: { opacity: 0, x: '100%' },
  visible: {
    opacity: 1,
    x: '0%',
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    x: '100%',
    transition: { duration: 0.4, ease: [0.85, 0, 0.15, 1] },
  },
};

/* ── Loader ── */
export const loaderExit = {
  exit: {
    opacity: 0,
    scale: 1.1,
    filter: 'blur(10px)',
    transition: { duration: 0.8, ease: [0.85, 0, 0.15, 1] },
  },
};
