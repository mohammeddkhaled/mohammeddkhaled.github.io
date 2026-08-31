import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, CheckCircle, Sparkles } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading.jsx';
import GlowCard from '@/components/common/GlowCard.jsx';
import educationData from '@/data/education.json';
import { fadeInUp, staggerContainer } from '@/animations/variants.js';

export default function EducationSection() {
  return (
    <section id="education" className="py-section relative overflow-hidden bg-midnight-900/40">
      {/* Ambient Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionHeading
          number="07"
          title="Academic Progression"
          subtitle="An ascending staircase of formal education, technical foundations, and engineering knowledge."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12"
        >
          {educationData.map((edu, idx) => (
            <motion.div key={edu.id} variants={fadeInUp}>
              <GlowCard className="h-full flex flex-col justify-between p-8 border-gold-500/30">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/20">
                      {edu.period}
                    </span>
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-pearl-100 mb-1">
                    {edu.degree}
                  </h3>

                  <h4 className="text-base font-heading font-medium text-gold-400 mb-2">
                    {edu.field}
                  </h4>

                  <p className="text-sm font-body text-pearl-300 mb-6">
                    {edu.institution} — <span className="text-pearl-400">{edu.location}</span>
                  </p>

                  {/* Highlights */}
                  {edu.highlights && edu.highlights.length > 0 && (
                    <div>
                      <span className="font-mono text-xs text-pearl-400 uppercase tracking-wider block mb-3">
                        Core Computer Science Focus Areas
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="font-mono text-xs px-3 py-1 rounded-lg bg-midnight-950 border border-midnight-700 text-pearl-200"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
