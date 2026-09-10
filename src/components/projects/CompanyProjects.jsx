import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, Building2, Shield, Cpu, Layers, Globe } from 'lucide-react';
import GlowCard from '@/components/common/GlowCard.jsx';
import Button from '@/components/common/Button.jsx';
import { fadeInUp, staggerContainer } from '@/animations/variants.js';

export default function CompanyProjects({ projects }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={staggerContainer}
      className="flex flex-col gap-14"
    >
      {projects.map((project, idx) => (
        <motion.div key={project.id} variants={fadeInUp}>
          <GlowCard className="p-8 sm:p-12 border-gold-500/30 relative overflow-hidden">
            {/* Blueprint Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-midnight-800">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gold-400 to-amber-500 text-midnight-950 flex items-center justify-center font-heading font-extrabold text-lg shadow-gold">
                  0{idx + 1}
                </div>
                <div>
                  <span className="font-mono text-xs text-gold-400 uppercase tracking-widest block font-bold">
                    Enterprise Platform • {project.company}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-heading font-extrabold text-pearl-100">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3 text-black">
                <span className="font-mono text-xs  px-4 py-1.5 rounded-full bg-midnight-950 text-pearl-300 border border-midnight-700 font-semibold">
                  {project.timeline}
                </span>
                {project.liveUrl && (
                  <Button
                    variant="primary"
                    size="sm"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={ExternalLink}
                    className="shadow-gold"
                  >
                    Visit Platform
                  </Button>
                )}
              </div>
            </div>

            {/* Platform Executive Overview */}
            <p className="text-base sm:text-lg text-pearl-200 font-body leading-relaxed mb-8">
              {project.fullDescription}
            </p>

            {/* Architectural Tech Stack */}
            <div className="mb-10">
              <span className="font-mono text-xs text-gold-400 uppercase tracking-wider block mb-4 font-bold">
                System Tech Stack & Infrastructure
              </span>
              <div className="flex flex-wrap gap-2.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-midnight-950 border border-gold-500/30 text-gold-300 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Architecture & Engineering Dual Column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-midnight-800">
              {/* Features Delivered */}
              <div className="p-6 rounded-2xl bg-midnight-950/60 border border-midnight-800">
                <h4 className="font-heading text-base font-bold text-pearl-100 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-gold-400" />
                  Key Modules & Capabilities
                </h4>
                <ul className="flex flex-col gap-3">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-pearl-300">
                      <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Engineering Responsibilities */}
              <div className="p-6 rounded-2xl bg-midnight-950/60 border border-midnight-800">
                <h4 className="font-heading text-base font-bold text-pearl-100 mb-4 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-gold-400" />
                  Engineering Ownership & Role
                </h4>
                <ul className="flex flex-col gap-3">
                  {project.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-pearl-300">
                      <div className="w-2 h-2 rounded-full bg-gold-400 shrink-0 mt-1.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Deployed Enterprise Websites */}
            {project.relatedSites && project.relatedSites.length > 0 && (
              <div className="mt-8 pt-6 border-t border-midnight-800">
                <span className="font-mono text-xs text-pearl-400 uppercase tracking-wider block mb-4 flex items-center gap-2 font-bold">
                  <Globe className="w-4 h-4 text-gold-400" />
                  Deployed Sub-Platforms & Client Portals
                </span>
                <div className="flex flex-wrap gap-3">
                  {project.relatedSites.map((site) => (
                    <a
                      key={site.url}
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs text-gold-300 hover:text-gold-200 bg-midnight-950 px-4 py-2 rounded-xl border border-gold-500/20 hover:border-gold-400 transition-all shadow-sm"
                    >
                      <span>{site.name}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </GlowCard>
        </motion.div>
      ))}
    </motion.div>
  );
}
