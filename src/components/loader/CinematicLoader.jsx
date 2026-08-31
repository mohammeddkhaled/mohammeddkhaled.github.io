import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profileData from '@/data/profile.json';

export default function CinematicLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.8, ease: [0.85, 0, 0.15, 1] } }}
        className="fixed inset-0 z-[9999] bg-midnight-950 flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Background ambient lighting */}
        <div className="absolute w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-gold" />

        {/* Center Logo / Monogram */}
        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-24 h-24 mb-8 rounded-2xl bg-midnight-900/80 border border-gold-500/30 flex items-center justify-center shadow-gold"
          >
            <span className="font-heading text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-amber-500 tracking-wider">
              {profileData.initials || 'MK'}
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-heading text-xl md:text-2xl font-medium tracking-widest uppercase text-pearl-100 mb-2"
          >
            {profileData.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-mono text-xs text-gold-400 tracking-wider uppercase mb-12"
          >
            {profileData.role}
          </motion.p>

          {/* Progress Bar Container */}
          <div className="w-64 h-[2px] bg-midnight-800 rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-gold-500 to-amber-400"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>

          <span className="font-mono text-xs text-pearl-400 mt-4 tracking-widest">
            {progress}%
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
