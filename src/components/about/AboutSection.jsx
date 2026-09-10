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
      number: '01',
      icon: Server,
      title: 'Backend-Focused Architecture',
      description: 'Designing scalable MVC backends, custom RESTful APIs, SQL schemas with ORMs, and secure JWT authentication systems.',
    },
    {
      number: '02',
      icon: Cpu,
      title: 'Full-Stack Integration',
      description: 'Connecting performant React frontends with robust Node.js/Express APIs for seamless enterprise performance.',
    },
    {
      number: '03',
      icon: UserCheck,
      title: 'Technical Team Leadership',
      description: 'Directing cross-functional engineering teams, orchestrating task allocations, code reviews, and database optimization.',
    },
    {
      number: '04',
      icon: ShieldCheck,
      title: 'Enterprise System Ownership',
      description: 'Owning the complete technical lifecycle of internal ERP systems and multi-role institute management platforms.',
    },
  ];

  return (
    <section id="about" className="py-section relative overflow-hidden bg-midnight-950">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -right-48 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionHeading
          number="02"
          title="Engineered For Impact"
          subtitle="A creative director's view into my technical background and approach to full stack engineering."
        />

        {/* EDITORIAL HERO QUOTE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
          className="my-10 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-midnight-900/90 via-midnight-900/60 to-midnight-950 border border-gold-500/30 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-4xl">
            <span className="font-mono text-xs text-gold-400 uppercase tracking-widest block mb-3">
              Editorial Perspective
            </span>
            <blockquote className="font-heading text-2xl sm:text-3xl lg:text-4xl font-light text-pearl-100 leading-snug tracking-tight mb-6">
              "Architecture isn't just about writing code — it's about building resilient digital ecosystems that empower businesses to scale effortlessly."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center font-heading font-bold text-gold-400 text-sm">
                MK
              </div>
              <div>
                <span className="font-heading font-bold text-pearl-100 text-sm block">
                  {profileData.name}
                </span>
                <span className="font-mono text-xs text-pearl-400">
                  Full Stack Architect & Technical Lead
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mt-12">
          {/* Story & Paragraphs */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="lg:col-span-7 flex flex-col justify-between gap-6"
          >
            {profileData.fullBio.map((paragraph, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="relative pl-6 border-l-2 border-gold-500/40">
                <p className="text-base sm:text-lg text-pearl-200 font-body leading-relaxed">
                  {paragraph}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Interactive Code Window / Config Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
            className="lg:col-span-5"
          >
            <div className="h-full rounded-3xl bg-midnight-900 border border-midnight-700/80 shadow-2xl overflow-hidden flex flex-col justify-between">
              {/* Code window title bar */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-midnight-800/80 border-b border-midnight-700/60">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                </div>
                <span className="font-mono text-xs text-pearl-300 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-gold-400" />
                  architect.config.json
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

              <div className="px-6 py-4 bg-midnight-950/80 border-t border-midnight-800 text-right">
                <span className="font-mono text-[11px] text-pearl-400 uppercase tracking-widest">
                  ENVIRONMENT: PRODUCTION READY
                </span>
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
                <GlowCard className="h-full flex flex-col justify-between p-6 sm:p-8">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs font-bold text-gold-500/50">
                        {item.number}
                      </span>
                    </div>
                    <h3 className="text-lg font-heading font-bold text-pearl-100 mb-2">
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
