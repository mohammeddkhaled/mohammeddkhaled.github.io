import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  BookOpen,
  Award,
  Code,
  Rocket,
  Users,
  Target,
  ChevronRight,
  ChevronLeft,
  Sparkles,
} from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading.jsx';
import GlowCard from '@/components/common/GlowCard.jsx';
import journeyData from '@/data/journey.json';

const ICON_MAP = {
  GraduationCap,
  BookOpen,
  Award,
  Code,
  Rocket,
  Users,
  Target,
};

export default function JourneySection() {
  const [activeIndex, setActiveIndex] = useState(5); // Default to current Team Lead milestone

  const activeItem = journeyData[activeIndex] || journeyData[0];
  const IconComponent = ICON_MAP[activeItem.icon] || Code;

  return (
    <section id="journey" className="py-section relative overflow-hidden bg-midnight-950">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionHeading
          number="03"
          title="The Evolution"
          subtitle="An interactive life path traveling from secondary education to full stack team lead & engineering mastery."
        />

        {/* Milestone Horizontal Stepper Dock */}
        <div className="my-10 overflow-x-auto pb-4 scrollbar-none">
          <div className="flex items-center justify-between min-w-[700px] relative px-6">
            {/* Horizontal Line behind nodes */}
            <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-[2px] bg-midnight-800 z-0">
              <motion.div
                className="h-full bg-gradient-to-r from-gold-400 to-amber-500 rounded-full"
                animate={{
                  width: `${(activeIndex / (journeyData.length - 1)) * 100}%`,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            </div>

            {journeyData.map((item, idx) => {
              const ItemIcon = ICON_MAP[item.icon] || Code;
              const isActive = activeIndex === idx;
              const isPast = idx < activeIndex;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative z-10 flex flex-col items-center group focus:outline-none`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 ${
                      isActive
                        ? 'bg-gold-500 border-gold-300 text-midnight-950 shadow-gold scale-125'
                        : isPast
                        ? 'bg-midnight-900 border-gold-500/50 text-gold-400'
                        : 'bg-midnight-950 border-midnight-700 text-pearl-400 hover:border-gold-500/40 hover:text-gold-300'
                    }`}
                  >
                    <ItemIcon className="w-5 h-5" />
                  </div>
                  <span
                    className={`font-mono text-[11px] mt-3 font-semibold transition-colors ${
                      isActive
                        ? 'text-gold-400 font-bold'
                        : 'text-pearl-400 group-hover:text-pearl-200'
                    }`}
                  >
                    0{idx + 1}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ACTIVE MILESTONE FEATURE SCENE */}
        <div className="max-w-4xl mx-auto mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 25, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -25, scale: 0.96 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            >
              <GlowCard className="p-8 sm:p-12 border-gold-500/40 relative overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-midnight-800">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-400 to-amber-500 text-midnight-950 flex items-center justify-center shadow-gold">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-gold-400 font-semibold uppercase tracking-widest block">
                        Milestone 0{activeIndex + 1} of 0{journeyData.length}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-pearl-100">
                        {activeItem.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs px-4 py-1.5 rounded-full bg-gold-500/10 text-gold-300 border border-gold-500/30">
                      {activeItem.year}
                    </span>
                    {activeItem.milestone === 'current' && (
                      <span className="font-mono text-xs px-3 py-1 rounded-full bg-success/20 text-success border border-success/30 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        Current Focus
                      </span>
                    )}
                  </div>
                </div>

                <h4 className="text-lg font-heading font-medium text-gold-300 mb-4">
                  {activeItem.subtitle}
                </h4>

                <p className="text-base sm:text-lg text-pearl-200 font-body leading-relaxed mb-8">
                  {activeItem.description}
                </p>

                {/* Milestone Navigation Controls */}
                <div className="flex items-center justify-between pt-6 border-t border-midnight-800">
                  <button
                    disabled={activeIndex === 0}
                    onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-midnight-900 border border-midnight-700 text-xs font-heading text-pearl-300 hover:text-gold-300 disabled:opacity-30 disabled:pointer-events-none transition-all"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous Phase</span>
                  </button>

                  <span className="font-mono text-xs text-pearl-400">
                    Phase {activeIndex + 1} / {journeyData.length}
                  </span>

                  <button
                    disabled={activeIndex === journeyData.length - 1}
                    onClick={() => setActiveIndex((prev) => Math.min(journeyData.length - 1, prev + 1))}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-midnight-900 border border-midnight-700 text-xs font-heading text-pearl-300 hover:text-gold-300 disabled:opacity-30 disabled:pointer-events-none transition-all"
                  >
                    <span>Next Phase</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </GlowCard>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
