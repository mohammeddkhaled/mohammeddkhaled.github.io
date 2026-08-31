import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, FolderGit2, FileText, Mail } from 'lucide-react';
import Button from '@/components/common/Button.jsx';
import profileData from '@/data/profile.json';
import socialData from '@/data/social.json';
import { scrollToSection } from '@/utils/helpers.js';
import * as SiIcons from 'react-icons/si';

export default function HeroCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="flex flex-col sm:flex-row items-center gap-4 mt-8"
    >
      <Button
        variant="primary"
        size="lg"
        onClick={() => scrollToSection('projects')}
        icon={FolderGit2}
      >
        Explore Projects
      </Button>

      <Button
        variant="secondary"
        size="lg"
        href={profileData.resumeUrl || '/resume.pdf'}
        target="_blank"
        rel="noopener noreferrer"
        icon={FileText}
      >
        View Resume
      </Button>

      {/* Social Quick Links */}
      <div className="flex items-center gap-3 ml-0 sm:ml-4 pt-4 sm:pt-0 border-t sm:border-t-0 sm:border-l border-midnight-700/60 sm:pl-6">
        {socialData.slice(0, 4).map((social) => {
          const IconComponent = SiIcons[social.icon] || Mail;
          return (
            <a
              key={social.id}
              href={social.url}
              target={social.action === 'redirect' ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-3 rounded-full bg-midnight-800/80 border border-midnight-700/60 text-pearl-300 hover:text-gold-400 hover:border-gold-500/40 hover:shadow-glow transition-all duration-300 group"
            >
              <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
          );
        })}
      </div>
    </motion.div>
  );
}
