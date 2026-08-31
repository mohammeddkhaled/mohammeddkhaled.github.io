import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Calendar, MapPin, CheckCircle2, ChevronRight, Briefcase } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading.jsx';
import GlowCard from '@/components/common/GlowCard.jsx';
import experienceData from '@/data/experience.json';

export default function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeExp = experienceData[activeIndex] || experienceData[0];

  return (
    <section id="experience" className="py-section relative overflow-hidden bg-midnight-950">
      {/* Background Lighting */}
      <div className="absolute bottom-10 left-1/4 w-[450px] h-[450px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionHeading
          number="06"
          title="Professional Experience"
          subtitle="Interactive rotating semicircle timeline showcasing technical leadership, team management, and backend development roles."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-12">
          {/* Semicircle Arc Navigator */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative min-h-[320px]">
            {/* SVG Semicircle Path Background */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full text-midnight-800" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="url(#goldGradient)"
                  strokeWidth="3"
                  strokeDasharray="502"
                  strokeDashoffset={502 - (502 * (activeIndex + 1)) / experienceData.length}
                  className="transition-all duration-700 ease-out"
                />
                <defs>
                  <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#d4a853" />
                    <stop offset="100%" stopColor="#c17f24" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Center Hub */}
              <div className="w-32 h-32 rounded-full bg-midnight-900 border border-gold-500/40 flex flex-col items-center justify-center p-4 shadow-gold z-10 text-center">
                <Briefcase className="w-6 h-6 text-gold-400 mb-1 animate-pulse" />
                <span className="font-heading text-xs font-bold text-pearl-100">
                  {activeExp.company}
                </span>
                <span className="font-mono text-[10px] text-gold-400 mt-1">
                  {activeIndex + 1} of {experienceData.length}
                </span>
              </div>

              {/* Arc Positioned Experience Nodes */}
              {experienceData.map((exp, idx) => {
                const angle = (idx / Math.max(experienceData.length - 1, 1)) * 180 - 90; // Arc from -90 to +90 deg
                const radius = 100; // Radius offset
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                const isActive = activeIndex === idx;

                return (
                  <button
                    key={exp.id}
                    onClick={() => setActiveIndex(idx)}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    className={`absolute z-20 w-12 h-12 rounded-full border flex items-center justify-center font-heading text-xs font-bold transition-all duration-500 focus:outline-none ${
                      isActive
                        ? 'bg-gold-500 border-gold-300 text-midnight-950 shadow-gold scale-125'
                        : 'bg-midnight-800 border-gold-500/30 text-pearl-300 hover:border-gold-400 hover:text-gold-300'
                    }`}
                    title={exp.company}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            {/* Quick Helper hint */}
            <span className="font-mono text-xs text-pearl-400 mt-6 tracking-wider">
              Click node or cycle through experience roles
            </span>
          </div>

          {/* Detailed Experience Panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <GlowCard className="p-8 sm:p-10 border-gold-500/40">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-midnight-800">
                    <div>
                      <span className="font-mono text-xs text-gold-400 uppercase tracking-widest block mb-1">
                        {activeExp.company}
                      </span>
                      <h3 className="text-2xl font-heading font-bold text-pearl-100">
                        {activeExp.role}
                      </h3>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <span className="font-mono text-xs px-3 py-1 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/20 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {activeExp.period}
                      </span>
                      <span className="font-mono text-xs text-pearl-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-gold-400" />
                        {activeExp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-base text-pearl-200 font-body leading-relaxed mb-6">
                    {activeExp.description}
                  </p>

                  <h4 className="font-heading text-sm font-semibold text-pearl-100 mb-4 uppercase tracking-wider">
                    Core Technical Deliverables & Achievements
                  </h4>
                  <ul className="flex flex-col gap-3 mb-8">
                    {activeExp.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-pearl-300">
                        <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>

                  <div>
                    <span className="font-mono text-xs text-pearl-400 uppercase tracking-wider block mb-3">
                      Technologies Utilized
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeExp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-xs px-3 py-1 rounded-md bg-midnight-950 border border-midnight-700 text-gold-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
