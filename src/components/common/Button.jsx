import React from 'react';
import { cn } from '@/utils/cn.js';
import useMagnetic from '@/hooks/useMagnetic.js';

export default function Button({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon: Icon,
  iconPosition = 'right',
  magnetic = true,
  isLoading = false,
  className = '',
  href,
  onClick,
  ...props
}) {
  const { ref, onMouseMove, onMouseLeave } = useMagnetic(magnetic ? 0.25 : 0);

  const baseStyles = 'inline-flex items-center justify-center font-heading font-medium tracking-wide rounded-full transition-all duration-300 relative overflow-hidden group focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:outline-none';

  const variants = {
    primary: 'bg-gradient-to-r from-gold-500 via-gold-400 to-amber-500 text-midnight-950 hover:shadow-gold hover:scale-[1.02] active:scale-[0.98]',
    secondary: 'bg-midnight-800 text-pearl-100 border border-midnight-600 hover:border-gold-500/50 hover:bg-midnight-700 hover:text-gold-300 shadow-md',
    outline: 'border border-gold-500/40 text-gold-400 hover:bg-gold-500/10 hover:border-gold-400 hover:shadow-glow',
    ghost: 'text-pearl-200 hover:text-gold-400 hover:bg-midnight-800/50',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-4 text-base gap-3',
  };

  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    isLoading && 'opacity-70 pointer-events-none',
    className
  );

  const content = (
    <>
      <span className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      {isLoading ? (
        <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />}
          <span>{children}</span>
          {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />}
        </>
      )}
    </>
  );

  if (href) {
    return (
      <a
        ref={magnetic ? ref : null}
        onMouseMove={magnetic ? onMouseMove : undefined}
        onMouseLeave={magnetic ? onMouseLeave : undefined}
        href={href}
        className={classes}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={magnetic ? ref : null}
      onMouseMove={magnetic ? onMouseMove : undefined}
      onMouseLeave={magnetic ? onMouseLeave : undefined}
      onClick={onClick}
      className={classes}
      {...props}
    >
      {content}
    </button>
  );
}
