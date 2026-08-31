import clsx from 'clsx';

/**
 * Utility for conditional class composition.
 * Wraps clsx for Tailwind-friendly usage.
 */
export function cn(...inputs) {
  return clsx(inputs);
}
