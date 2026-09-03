import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, CheckCircle, Sparkles } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading.jsx';
import GlowCard from '@/components/common/GlowCard.jsx';
import educationData from '@/data/education.json';
import { fadeInUp, staggerContainer } from '@/animations/variants.js';

export default function EducationSection() {
  return (
    <section id="education" className="py-section relative overflow-hidden bg-midnight-950">
      {/* Ambient Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionHeading
          number="07"
          title="Academic Progression"
          subtitle="An ascending stepping stone pathway of formal engineering education, computer science principles, and system fundamentals."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="flex flex-col gap-8 max-w-4xl mx-auto mt-12"
        >
          {educationData.map((edu, idx) => (
            <motion.div key={edu.id} variants={fadeInUp}>
              <GlowCard className="p-8 sm:p-10 border-gold-500/30 relative overflow-hidden group">
                <div className="flex flex-wrap items-start justify-between gap-6 mb-6 pb-6 border-b border-midnight-800">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gold-400 to-amber-500 text-midnight-950 flex items-center justify-center font-heading font-extrabold text-lg shadow-gold shrink-0">
                      0{idx + 1}
                    </div>
                    <div>
                      <span className="font-mono text-xs text-gold-400 font-bold uppercase tracking-widest block mb-1">
                        {edu.period}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-pearl-100 mb-1">
                        {edu.degree}
                      </h3>
                      <h4 className="text-base font-heading font-medium text-gold-300">
                        {edu.field}
                      </h4>
                    </div>
                  </div>

                  <span className="font-mono text-xs px-4 py-1.5 rounded-full bg-midnight-950 text-pearl-300 border border-midnight-700 font-semibold">
                    {edu.institution} • {edu.location}
                  </span>
                </div>

                {/* Highlights */}
                {edu.highlights && edu.highlights.length > 0 && (
                  <div>
                    <span className="font-mono text-xs text-pearl-400 font-bold uppercase tracking-wider block mb-3">
                      Core Computer Science & Engineering Subjects
                    </span>
                    <div className="flex flex-wrap gap-2.5">
                      {edu.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="font-mono text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-midnight-950 border border-gold-500/20 text-pearl-200 shadow-sm"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
