import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn.js';
import { fadeInUp } from '@/animations/variants.js';

export default function SectionHeading({
  number,
  title,
  subtitle,
  centered = false,
  className = '',
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeInUp}
      className={cn('mb-16 md:mb-24', centered && 'text-center mx-auto max-w-2xl', className)}
    >
      <div className={cn('inline-flex items-center gap-3 mb-4', centered && 'justify-center')}>
        {number && (
          <span className="font-mono text-xs md:text-sm font-semibold tracking-widest text-gold-400 bg-gold-500/10 border border-gold-500/20 px-3 py-1 rounded-full">
            {number}
          </span>
        )}
        <div className="h-[1px] w-8 bg-gradient-to-r from-gold-500/50 to-transparent" />
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-pearl-100 tracking-tight mb-4">
        {title}{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-500">
          .
        </span>
      </h2>

      {subtitle && (
        <p className="text-base sm:text-lg text-pearl-300 font-body max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
