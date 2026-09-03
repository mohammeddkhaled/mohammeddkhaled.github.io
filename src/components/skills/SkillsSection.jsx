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
  const [selectedSkill, setSelectedSkill] = useState(null);

  const activeCategoryData =
    skillsData.find((cat) => cat.category === activeCategory) || skillsData[0];

  return (
    <section id="skills" className="py-section relative overflow-hidden bg-midnight-950">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionHeading
          number="04"
          title="Technical Mastery"
          subtitle="Interactive tech galaxy visualization categorizing frontend, backend, databases, system architecture, and leadership proficiencies."
        />

        {/* Category Tab Selector Bar */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {skillsData.map((category) => {
            const Icon = CATEGORY_ICONS[category.icon] || Code;
            const isActive = activeCategory === category.category;

            return (
              <button
                key={category.category}
                onClick={() => {
                  setActiveCategory(category.category);
                  setSelectedSkill(null);
                }}
                className={`relative px-5 py-3 rounded-full font-heading text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2.5 focus:outline-none ${
                  isActive
                    ? 'text-midnight-950 shadow-gold'
                    : 'text-pearl-300 bg-midnight-900/90 border border-midnight-700/60 hover:text-pearl-100 hover:border-gold-500/40'
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

        {/* Galaxy Constellation View */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="relative max-w-5xl mx-auto rounded-3xl bg-midnight-900/80 border border-midnight-700/60 backdrop-blur-2xl p-8 sm:p-12 overflow-hidden shadow-2xl"
          >
            {/* Category Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-midnight-800">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-gold-400 font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20">
                  {activeCategoryData.label} Constellation
                </span>
                <span className="font-mono text-xs text-pearl-400">
                  {activeCategoryData.skills.length} Technical Nodes
                </span>
              </div>
              <span className="font-mono text-xs text-pearl-400">
                Hover or click any node to inspect proficiency
              </span>
            </div>

            {/* Orbiting Skills Grid Nodes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 relative z-20">
              {activeCategoryData.skills.map((skill, idx) => {
                const IconComponent =
                  SiIcons[skill.icon] || SOFT_SKILL_ICONS[skill.icon] || Code;
                const isSelected = selectedSkill?.name === skill.name;

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    onClick={() => setSelectedSkill(skill)}
                    whileHover={{ scale: 1.02 }}
                    className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-midnight-800 border-gold-400 shadow-glow'
                        : 'bg-midnight-950/80 border-midnight-800 hover:border-gold-500/40 hover:bg-midnight-800/60'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-xl bg-midnight-900 border border-gold-500/30 flex items-center justify-center text-gold-400 shadow-sm">
                        <IconComponent className="w-5.5 h-5.5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-heading text-sm font-bold text-pearl-100">
                          {skill.name}
                        </span>
                        <span className="font-mono text-[11px] text-pearl-400">
                          {skill.level}
                        </span>
                      </div>
                    </div>

                    <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/20 font-semibold uppercase">
                      Active
                    </span>
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
