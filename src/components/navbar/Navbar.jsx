import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { NAV_ITEMS } from '@/constants/index.js';
import useActiveSection from '@/hooks/useActiveSection.js';
import useScrollProgress from '@/hooks/useScrollProgress.js';
import { scrollToSection } from '@/utils/helpers.js';
import profileData from '@/data/profile.json';
import Button from '@/components/common/Button.jsx';
import MagneticElement from '@/components/common/MagneticElement.jsx';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sectionIds = ['home', ...NAV_ITEMS.map((item) => item.id)];
  const activeSection = useActiveSection(sectionIds);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      {/* Scroll Progress Bar at the top */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-transparent z-[501] pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-gold-500 via-gold-300 to-amber-500 transition-all duration-150"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-[500] transition-all duration-500 ${
          scrolled
            ? 'py-3.5 bg-midnight-950/80 backdrop-blur-xl border-b border-midnight-800/80 shadow-lg'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-midnight-800 border border-gold-500/30 flex items-center justify-center group-hover:border-gold-400 group-hover:shadow-glow transition-all duration-300">
              <span className="font-heading font-bold text-gold-400 group-hover:scale-110 transition-transform duration-300">
                {profileData.initials || 'MK'}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-pearl-100 text-sm md:text-base tracking-tight group-hover:text-gold-300 transition-colors">
                {profileData.name}
              </span>
              <span className="font-mono text-[10px] text-pearl-400 uppercase tracking-widest">
                {profileData.role}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-midnight-900/60 border border-midnight-700/50 p-1.5 rounded-full backdrop-blur-lg">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <MagneticElement key={item.id} strength={0.15}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-4 py-2 text-xs md:text-sm font-heading font-medium rounded-full transition-all duration-300 ${
                      isActive ? 'text-midnight-950' : 'text-pearl-300 hover:text-pearl-100'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavTab"
                        className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full shadow-glow"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </button>
                </MagneticElement>
              );
            })}
          </nav>

          {/* Resume CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              href={profileData.resumeUrl || '/resume.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              icon={FileText}
              iconPosition="right"
            >
              Resume
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-midnight-800/80 border border-midnight-700 text-pearl-100 hover:text-gold-400 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[499] bg-midnight-950/95 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between text-left py-3 border-b border-midnight-800/60 font-heading text-xl ${
                      isActive ? 'text-gold-400 font-bold' : 'text-pearl-200'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-xs text-pearl-400">{item.number}</span>
                  </motion.button>
                );
              })}
            </div>

            <div className="flex flex-col gap-4 pt-6 border-t border-midnight-800">
              <Button
                variant="primary"
                size="lg"
                href={profileData.resumeUrl || '/resume.pdf'}
                target="_blank"
                rel="noopener noreferrer"
                icon={FileText}
                className="w-full"
              >
                Download Resume
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
