/**
 * Smooth scroll to a section by ID.
 */
export function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/**
 * Format a date string for display.
 */
export function formatDate(dateStr) {
  if (!dateStr) return 'Present';
  return dateStr;
}

/**
 * Get the current year.
 */
export function getCurrentYear() {
  return new Date().getFullYear();
}

/**
 * Debounce a function call.
 */
export function debounce(fn, delay = 100) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

/**
 * Throttle a function call.
 */
export function throttle(fn, limit = 16) {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn(...args);
    }
  };
}

/**
 * Map a value from one range to another.
 */
export function mapRange(value, inMin, inMax, outMin, outMax) {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

/**
 * Clamp a value between min and max.
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Linear interpolation.
 */
export function lerp(start, end, factor) {
  return start + (end - start) * factor;
}

/**
 * Generate a unique ID.
 */
export function uid() {
  return Math.random().toString(36).substring(2, 9);
}
