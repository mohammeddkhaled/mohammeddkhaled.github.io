import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import GlowCard from '@/components/common/GlowCard.jsx';
import { fadeInUp } from '@/animations/variants.js';

export default function ProjectCard({ project }) {
  return (
    <motion.div variants={fadeInUp} className="h-full">
      <GlowCard className="h-full flex flex-col p-8 sm:p-10 relative overflow-hidden group border border-white/5 bg-midnight-900/50 hover:border-gold-500/30 transition-colors duration-500 rounded-3xl shadow-xl">
        
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 group-hover:bg-gold-500/10 transition-colors duration-700" />

        {/* Header */}
        <div className="flex items-start justify-between gap-6 mb-6 relative z-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs px-3 py-1 rounded-full bg-midnight-950 text-gold-400 border border-gold-500/20 font-medium">
                {project.timeline}
              </span>
              {project.status === 'in-progress' && (
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-blue-900/20 text-blue-400 border border-blue-500/20">
                  In Progress
                </span>
              )}
            </div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-pearl-100 group-hover:text-gold-400 transition-colors duration-300">
              {project.title}
            </h3>
            {project.company && (
              <p className="font-mono text-xs text-pearl-400 mt-2 uppercase tracking-widest">
                {project.company}
              </p>
            )}
          </div>
          
          <div className="flex items-center gap-2 shrink-0">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-midnight-950/80 border border-white/10 text-pearl-300 hover:text-gold-400 hover:border-gold-500/40 transition-all duration-300"
                aria-label="GitHub Repository"
              >
                <SiGithub className="w-5 h-5" />
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 hover:bg-gold-500 hover:text-midnight-950 hover:shadow-glow transition-all duration-300"
                aria-label="Live Project"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-pearl-200/80 font-body text-base leading-[1.8] font-light mb-8 relative z-10">
          {project.shortDescription}
        </p>

        {/* Technologies - Pushed to bottom */}
        <div className="mt-auto relative z-10 pt-6 border-t border-white/5">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span 
                key={idx}
                className="font-mono text-[11px] text-pearl-300 bg-white/5 px-3 py-1.5 rounded-md border border-white/5 group-hover:border-white/10 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
}
