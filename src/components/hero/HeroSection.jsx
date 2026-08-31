import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Code2, Terminal } from 'lucide-react';
import ParticleField from './ParticleField.jsx';
import HeroCTA from './HeroCTA.jsx';
import profileData from '@/data/profile.json';
import { scrollToSection } from '@/utils/helpers.js';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Interactive Canvas Particles */}
      <ParticleField />

      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl">
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-midnight-800/80 border border-gold-500/30 backdrop-blur-md mb-8 shadow-glow"
          >
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="font-mono text-xs text-pearl-200 tracking-wide">
              Full Stack Developer & Technical Lead
            </span>
          </motion.div>

          {/* Main Title / Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-display font-heading font-extrabold tracking-tight text-pearl-100 mb-6 leading-[1.05]"
          >
            Crafting Scalable{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-amber-500">
              Web Systems
            </span>{' '}
            & Enterprise Architecture.
          </motion.h1>

          {/* Role & Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-body-lg text-pearl-300 font-body max-w-2xl leading-relaxed mb-8"
          >
            Hi, I'm <strong className="text-pearl-100 font-medium">{profileData.name}</strong>. {profileData.tagline}. Specializing in robust backend design, RESTful APIs, SQL databases, and modern React interfaces.
          </motion.p>

          {/* CTA Buttons */}
          <HeroCTA />

          {/* Key Metrics / Highlights Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 pt-8 border-t border-midnight-800/80"
          >
            {profileData.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-heading text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-amber-400">
                  {stat.value}{stat.suffix}
                </span>
                <span className="font-body text-xs text-pearl-400 uppercase tracking-wider mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-pearl-400 hover:text-gold-400 transition-colors group focus:outline-none"
        aria-label="Scroll to About"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase opacity-70 group-hover:opacity-100">
          Explore Story
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-gold-400" />
      </motion.button>
    </section>
  );
}
