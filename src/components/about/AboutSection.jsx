import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Server, ShieldCheck, Terminal, UserCheck } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading.jsx';
import GlowCard from '@/components/common/GlowCard.jsx';
import profileData from '@/data/profile.json';
import { fadeInUp, staggerContainer } from '@/animations/variants.js';

export default function AboutSection() {
  const highlights = [
    {
      icon: Server,
      title: 'Backend-Focused Architecture',
      description: 'Designing scalable MVC backends, custom RESTful APIs, SQL schemas with Sequelize ORM, and JWT authentication systems.',
    },
    {
      icon: Cpu,
      title: 'Full-Stack Integration',
      description: 'Connecting performant React and Next.js frontends with robust Node.js/Express APIs for seamless enterprise performance.',
    },
    {
      icon: UserCheck,
      title: 'Technical Team Leadership',
      description: 'Directing cross-functional teams, orchestrating task allocations, leading database reviews, and mentoring junior developers.',
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise System Ownership',
      description: 'Owning the complete technical lifecycle of internal ERP systems and multi-role institute management platforms.',
    },
  ];

  return (
    <section id="about" className="py-section relative overflow-hidden bg-midnight-950">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionHeading
          number="02"
          title="Engineered For Impact"
          subtitle="A creative director's view into my technical background, philosophy, and approach to full stack engineering."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Story & Paragraphs */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {profileData.fullBio.map((paragraph, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <GlowCard className="p-6 md:p-8">
                  <p className="text-body-lg text-pearl-200 leading-relaxed">
                    {paragraph}
                  </p>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Interactive Code Window / Tech Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl bg-midnight-900 border border-midnight-700/80 shadow-2xl overflow-hidden">
              {/* Code window title bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-midnight-800/80 border-b border-midnight-700/60">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                </div>
                <span className="font-mono text-xs text-pearl-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-gold-400" />
                  khaled.config.json
                </span>
                <span className="w-8" />
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-pearl-200">
                <div className="text-gold-400">{'{'}</div>
                <div className="pl-4">
                  <span className="text-amber-400">"developer"</span>: <span className="text-pearl-100">"{profileData.name}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-amber-400">"role"</span>: <span className="text-pearl-100">"{profileData.role}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-amber-400">"focus"</span>: <span className="text-pearl-100">"Backend Architecture & System Design"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-amber-400">"location"</span>: <span className="text-pearl-100">"{profileData.location}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-amber-400">"company"</span>: <span className="text-pearl-100">"Luminate Web Solutions"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-amber-400">"languages"</span>: [
                  {profileData.languages.map((lang, i) => (
                    <span key={i} className="text-gold-300">
                      "{lang}"{i < profileData.languages.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                  ],
                </div>
                <div className="pl-4">
                  <span className="text-amber-400">"status"</span>: <span className="text-success">"Available for High-Impact Projects"</span>
                </div>
                <div className="text-gold-400">{'}'}</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlight Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div key={idx} variants={fadeInUp}>
                <GlowCard className="h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-pearl-100 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-pearl-300 font-body leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
