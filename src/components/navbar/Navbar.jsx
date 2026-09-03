import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, ArrowRight } from 'lucide-react';
import { NAV_ITEMS } from '@/constants/index.js';
import useActiveSection from '@/hooks/useActiveSection.js';
import { scrollToSection } from '@/utils/helpers.js';
import profileData from '@/data/profile.json';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sectionIds = ['home', ...NAV_ITEMS.map((item) => item.id)];
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[500] transition-all duration-500 flex items-center justify-center ${scrolled
        ? 'h-20 bg-midnight-950/85 backdrop-blur-2xl border-b border-midnight-800/80 shadow-2xl'
        : 'h-24 bg-transparent'
        }`}
    >
      <div className="w-full max-w-[1440px] px-6 sm:px-10 lg:px-12 flex items-center justify-between">
        {/* LEFT: Minimal circular logo + Name + Subtitle */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          className="flex items-center gap-3.5 group focus:outline-none shrink-0"
        >
          <div className="w-11 h-11 rounded-full bg-midnight-900 border border-gold-500/30 flex items-center justify-center group-hover:border-gold-400 group-hover:shadow-glow transition-all duration-300">
            <span className="font-heading font-bold text-gold-400 text-sm tracking-wider">
              {profileData.initials || 'MK'}
            </span>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-heading font-bold text-pearl-100 text-base sm:text-xl tracking-tight group-hover:text-gold-300 transition-colors">
              {profileData.name}
            </span>
            <span className="font-mono text-[8px] text-pearl-400 uppercase tracking-widest">
              Full Stack developer | Software Engineer
            </span>
          </div>
        </a>

        {/* CENTER: Navigation Links (Generous Padding & Spacing) */}
        <nav className="hidden xl:flex items-center gap-2 bg-midnight-900/80 border border-midnight-700/60 px-4 py-2 rounded-full backdrop-blur-xl shadow-xl">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-xs sm:text-sm font-heading font-medium rounded-full transition-all duration-300 focus:outline-none whitespace-nowrap ${isActive ? 'text-midnight-950 font-bold' : 'text-pearl-300 hover:text-pearl-100'
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbarActiveIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-gold-400 via-gold-500 to-amber-500 rounded-full shadow-glow"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* RIGHT: Premium Spaced Resume Button */}
        <div className="hidden xl:flex items-center gap-4 shrink-0">
          <a
            href={profileData.resumeUrl || '/resume.pdf'}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-midnight-900 border border-gold-500/40 text-pearl-100 hover:text-gold-300 hover:border-gold-400 font-mono text-xs font-semibold tracking-wide transition-all duration-300 hover:shadow-glow overflow-hidden"
          >
            <span className="relative z-10">Resume</span>
            <Download className="w-3.5 h-3.5 text-gold-400 relative z-10 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile / Tablet Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-3 rounded-2xl bg-midnight-900 border border-midnight-700 text-pearl-100 hover:border-gold-500/40 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile & Tablet Full Screen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="xl:hidden fixed inset-0 top-20 bg-midnight-950/98 border-b border-midnight-800 p-8 sm:p-12 flex flex-col justify-between backdrop-blur-3xl z-[499]"
          >
            <div className="flex flex-col  w-full mx-auto">
              <span className="font-mono text-xs text-gold-400 uppercase tracking-widest mb-2 block">
                Navigation
              </span>
              {NAV_ITEMS.map((item, idx) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    scrollToSection(item.id);
                  }}
                  className="flex items-center justify-between text-left font-heading text-base  font-semibold text-pearl-100 hover:text-gold-400 py-3 border-b border-midnight-800/80 group"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-pearl-400 group-hover:text-gold-400">
                    0{idx + 1}
                  </span>
                </motion.button>
              ))}
            </div>

            <div className="max-w-md w-full mx-auto pt-6 border-t border-midnight-800">
              <a
                href={profileData.resumeUrl || '/resume.pdf'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 py-4 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-amber-500 text-midnight-950 font-heading font-bold text-base shadow-gold hover:scale-[1.02] transition-transform"
              >
                <span className=' text-black'>Download Resume PDF</span>
                <Download className="w-5 h-5 text-black" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
