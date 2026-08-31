import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Monitor,
  Server,
  Database,
  Code,
  Layers,
  Wrench,
  Heart,
  Crown,
  Users,
  MessageCircle,
  Lightbulb,
  RefreshCw,
  Clock,
  Sparkles,
} from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading.jsx';
import GlowCard from '@/components/common/GlowCard.jsx';
import skillsData from '@/data/skills.json';
import * as SiIcons from 'react-icons/si';

const CATEGORY_ICONS = {
  Monitor,
  Server,
  Database,
  Code,
  Layers,
  Wrench,
  Heart,
};

const SOFT_SKILL_ICONS = {
  Crown,
  Users,
  MessageCircle,
  Lightbulb,
  RefreshCw,
  Clock,
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skillsData[0].category);

  const activeCategoryData =
    skillsData.find((cat) => cat.category === activeCategory) || skillsData[0];

  return (
    <section id="skills" className="py-section relative overflow-hidden bg-midnight-950">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionHeading
          number="04"
          title="Technical Mastery"
          subtitle="Interactive orbital constellations grouping frontend, backend, databases, frameworks, and leadership proficiencies."
        />

        {/* Category Tab Selector Bar */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-16">
          {skillsData.map((category) => {
            const Icon = CATEGORY_ICONS[category.icon] || Code;
            const isActive = activeCategory === category.category;

            return (
              <button
                key={category.category}
                onClick={() => setActiveCategory(category.category)}
                className={`relative px-5 py-3 rounded-full font-heading text-xs md:text-sm font-medium transition-all duration-300 flex items-center gap-2 focus:outline-none ${
                  isActive
                    ? 'text-midnight-950 shadow-gold'
                    : 'text-pearl-300 bg-midnight-900/80 border border-midnight-700/60 hover:text-gold-300 hover:border-gold-500/30'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-gradient-to-r from-gold-400 via-gold-500 to-amber-500 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className="w-4 h-4 relative z-10" />
                <span className="relative z-10">{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Orbital Constellation View */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="relative max-w-4xl mx-auto min-h-[380px] rounded-3xl bg-midnight-900/60 border border-midnight-700/60 backdrop-blur-xl p-8 md:p-12 flex flex-col items-center justify-center overflow-hidden shadow-2xl"
          >
            {/* Center Orbital Core */}
            <div className="relative z-20 w-28 h-28 rounded-full bg-midnight-950 border border-gold-500/50 flex flex-col items-center justify-center shadow-gold animate-pulse-gold mb-8">
              <Sparkles className="w-6 h-6 text-gold-400 mb-1" />
              <span className="font-heading text-xs font-bold text-pearl-100 text-center uppercase tracking-wider">
                {activeCategoryData.label}
              </span>
            </div>

            {/* Orbiting Skills Cluster */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 w-full relative z-20">
              {activeCategoryData.skills.map((skill, idx) => {
                const IconComponent =
                  SiIcons[skill.icon] || SOFT_SKILL_ICONS[skill.icon] || Code;

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="p-4 rounded-2xl bg-midnight-800/80 border border-midnight-700/60 hover:border-gold-500/40 hover:bg-midnight-700/80 transition-all duration-300 flex items-center gap-3 group cursor-default shadow-md"
                  >
                    <div className="w-10 h-10 rounded-xl bg-midnight-950 border border-gold-500/20 flex items-center justify-center text-gold-400 group-hover:text-gold-300 group-hover:border-gold-400 group-hover:shadow-glow transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-heading text-sm font-semibold text-pearl-100 group-hover:text-gold-300 transition-colors">
                        {skill.name}
                      </span>
                      <span className="font-mono text-[10px] text-pearl-400 uppercase tracking-widest">
                        {skill.level}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
