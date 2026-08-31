import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  BookOpen,
  Award,
  Code,
  Rocket,
  Users,
  Target,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading.jsx';
import GlowCard from '@/components/common/GlowCard.jsx';
import journeyData from '@/data/journey.json';
import { fadeInUp, staggerContainer } from '@/animations/variants.js';

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
  return (
    <section id="journey" className="py-section relative overflow-hidden bg-midnight-900/60">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionHeading
          number="03"
          title="The Evolution"
          subtitle="My complete journey from school to leading software engineering teams and shaping enterprise solutions."
        />

        <div className="relative max-w-4xl mx-auto mt-12">
          {/* Vertical Connecting Guide Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-gold-500 via-amber-500/50 to-midnight-700 -translate-x-1/2 hidden sm:block" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="flex flex-col gap-12 sm:gap-16"
          >
            {journeyData.map((item, idx) => {
              const IconComponent = ICON_MAP[item.icon] || Code;
              const isEven = idx % 2 === 0;
              const isCurrent = item.milestone === 'current';
              const isFuture = item.milestone === 'future';

              return (
                <motion.div
                  key={item.id}
                  variants={fadeInUp}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Timeline Node */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 top-0 z-20 flex items-center justify-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isCurrent
                          ? 'bg-gold-500 border-gold-300 text-midnight-950 shadow-gold scale-110 animate-pulse-gold'
                          : isFuture
                          ? 'bg-midnight-900 border-dashed border-gold-500/50 text-gold-400'
                          : 'bg-midnight-800 border-gold-500/40 text-gold-400'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div
                    className={`w-full sm:w-[calc(50%-2.5rem)] pl-16 sm:pl-0 ${
                      isEven ? 'sm:text-right sm:pr-8' : 'sm:text-left sm:pl-8'
                    }`}
                  >
                    <GlowCard
                      className={`p-6 sm:p-8 ${
                        isCurrent
                          ? 'border-gold-500/60 shadow-glow bg-midnight-900/90'
                          : ''
                      }`}
                    >
                      <div
                        className={`flex items-center gap-3 mb-2 ${
                          isEven ? 'sm:justify-end' : 'sm:justify-start'
                        }`}
                      >
                        <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/20">
                          {item.year}
                        </span>
                        {isCurrent && (
                          <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-success/20 text-success border border-success/30">
                            Current Role
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-heading font-bold text-pearl-100 mb-1">
                        {item.title}
                      </h3>

                      <h4 className="text-sm font-heading font-medium text-gold-400 mb-3">
                        {item.subtitle}
                      </h4>

                      <p className="text-sm text-pearl-300 font-body leading-relaxed">
                        {item.description}
                      </p>
                    </GlowCard>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
