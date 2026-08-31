import { useState, useEffect } from 'react';

/**
 * Hook to track which section is currently in the viewport.
 * Uses IntersectionObserver for performance.
 */
export default function useActiveSection(sectionIds, options = {}) {
  const { threshold = 0.3, rootMargin = '-10% 0px -60% 0px' } = options;
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    const observers = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold, rootMargin }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [sectionIds, threshold, rootMargin]);

  return activeSection;
}
