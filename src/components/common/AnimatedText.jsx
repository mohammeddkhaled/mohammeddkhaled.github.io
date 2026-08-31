import React, { useRef, useEffect } from 'react';
import { animateChars, animateWords, animateLines } from '@/animations/textAnimations.js';

export default function AnimatedText({
  text,
  type = 'words', // 'chars' | 'words' | 'lines'
  className = '',
  as: Component = 'div',
  delay = 0,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !text) return;

    let animResult;
    const config = {
      delay,
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    };

    if (type === 'chars') {
      animResult = animateChars(el, config);
    } else if (type === 'lines') {
      animResult = animateLines(el, config);
    } else {
      animResult = animateWords(el, config);
    }

    return () => {
      if (animResult?.split?.revert) {
        animResult.split.revert();
      }
    };
  }, [text, type, delay]);

  return (
    <Component ref={containerRef} className={className}>
      {text}
    </Component>
  );
}
