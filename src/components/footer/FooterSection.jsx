import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Heart, Sparkles, FileText, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import profileData from '@/data/profile.json';
import socialData from '@/data/social.json';
import { NAV_ITEMS } from '@/constants/index.js';
import { scrollToSection, getCurrentYear } from '@/utils/helpers.js';
import * as SiIcons from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
export default function FooterSection() {
  const currentYear = getCurrentYear();
  const navigate = useNavigate();


  return (
    <footer className="relative bg-midnight-950 border-t border-midnight-800/80 pt-16 pb-12 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gold-500/5 rounded-t-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-midnight-800/80">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-midnight-800 border border-gold-500/30 flex items-center justify-center">
                <span className="font-heading font-bold text-gold-400 text-base">
                  {profileData.initials || 'MK'}
                </span>
              </div>
              <span className="font-heading font-bold text-lg text-pearl-100">
                {profileData.name}
              </span>
            </div>

            <p className="text-sm text-pearl-300 font-body max-w-sm leading-relaxed">
              {profileData.tagline}
            </p>

            <span className="font-mono text-xs text-pearl-400">
              {profileData.location} — {profileData.email}
            </span>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="font-mono text-xs text-gold-400 uppercase tracking-widest block mb-2">
              Quick Navigation
            </span>
            <div className="grid grid-cols-2 gap-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.id === 'projects') {
                      navigate('/projects');
                      window.scrollTo(0, 0);
                    } else {
                      scrollToSection(item.id);
                    }
                  }}
                  className="text-left font-body text-sm text-pearl-300 hover:text-gold-300 transition-colors focus:outline-none"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Socials & Actions */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end gap-6">
            <button
              onClick={() => scrollToSection('home')}
              className="p-3.5 rounded-full bg-midnight-800 border border-midnight-700 text-pearl-200 hover:text-gold-400 hover:border-gold-500/40 hover:shadow-glow transition-all duration-300 flex items-center gap-2 group focus:outline-none"
              aria-label="Back to top"
            >
              <span className="font-mono text-xs uppercase tracking-wider">Back to Top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform text-gold-400" />
            </button>

            <div className="flex items-center gap-2">
              {socialData.map((s) => {
                let IconComponent = SiIcons[s.icon];
                if (s.id === 'email') IconComponent = Mail;
                if (s.id === 'linkedin') IconComponent = FaLinkedin;
                if (!IconComponent) IconComponent = FileText;
                
                return (
                  <a
                    key={s.id}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="p-2.5 rounded-lg bg-midnight-900 border border-midnight-800 text-pearl-300 hover:text-gold-400 hover:border-gold-500/30 transition-colors"
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-pearl-400">
          <span>
            © {currentYear} {profileData.name}. All rights reserved.
          </span>
          <span className="flex items-center gap-1.5">
            Designed & Engineered with JavaScript, React & Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  );
}
