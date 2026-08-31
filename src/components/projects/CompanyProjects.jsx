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
      className="flex flex-col gap-12"
    >
      {projects.map((project, idx) => (
        <motion.div key={project.id} variants={fadeInUp}>
          <GlowCard className="p-8 sm:p-10 border-gold-500/30">
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-midnight-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-xs text-gold-400 uppercase tracking-widest block">
                    {project.company}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-pearl-100">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-mono text-xs px-3 py-1.5 rounded-full bg-midnight-800 text-pearl-300 border border-midnight-700">
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
                  >
                    Visit Platform
                  </Button>
                )}
              </div>
            </div>

            {/* Description & Architecture */}
            <p className="text-base text-pearl-200 font-body leading-relaxed mb-8">
              {project.fullDescription}
            </p>

            {/* Tech Stack Pills */}
            <div className="mb-8">
              <span className="font-mono text-xs text-pearl-400 uppercase tracking-wider block mb-3">
                Architectural Tech Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs font-semibold px-3 py-1.5 rounded-lg bg-midnight-950 border border-gold-500/20 text-gold-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features & Responsibilities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-midnight-800">
              {/* Features Delivered */}
              <div>
                <h4 className="font-heading text-base font-semibold text-pearl-100 mb-4 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-gold-400" />
                  Key Modules & Capabilities
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-pearl-300">
                      <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Responsibilities */}
              <div>
                <h4 className="font-heading text-base font-semibold text-pearl-100 mb-4 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-gold-400" />
                  My Engineering Role
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {project.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-pearl-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0 mt-2" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Related Live Sites (if any) */}
            {project.relatedSites && project.relatedSites.length > 0 && (
              <div className="mt-8 pt-6 border-t border-midnight-800">
                <span className="font-mono text-xs text-pearl-400 uppercase tracking-wider block mb-3 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-gold-400" />
                  Deployed Enterprise Websites
                </span>
                <div className="flex flex-wrap gap-3">
                  {project.relatedSites.map((site) => (
                    <a
                      key={site.url}
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-gold-300 hover:text-gold-200 bg-midnight-950 px-3 py-1.5 rounded-lg border border-gold-500/20 hover:border-gold-400 transition-colors"
                    >
                      {site.name}
                      <ExternalLink className="w-3 h-3" />
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
