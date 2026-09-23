import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import TechnologyTags from './TechnologyTags.jsx';
import { fadeInUp } from '@/animations/variants.js';

export default function ProjectPreviewCard({ project }) {
  const navigate = useNavigate();
  
  // Use first screenshot if available, otherwise a placeholder
  const hasScreenshot = project.screenshots && project.screenshots.length > 0;
  
  return (
    <motion.div variants={fadeInUp} className="h-full group">
      <div className="h-full flex flex-col bg-midnight-900/50 rounded-2xl overflow-hidden border border-white/5 hover:border-gold-500/20 transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        
        {/* Preview Image Area */}
        <div className="w-full aspect-[16/10] overflow-hidden bg-midnight-950 relative border-b border-white/5">
          {hasScreenshot ? (
            <img 
              src={project.screenshots[0]} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full relative flex items-center justify-center bg-gradient-to-br from-gold-500/5 to-transparent">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay" />
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-500/10 to-transparent border border-gold-500/20 flex items-center justify-center">
                <span className="font-heading text-3xl text-gold-400/50 font-bold">{project.title.charAt(0)}</span>
              </div>
            </div>
          )}
          
          {/* Overlay gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-midnight-900/80 to-transparent opacity-60" />
          
          {/* Timeline badge floating */}
          <div className="absolute top-4 right-4">
             <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-midnight-950/80 backdrop-blur-sm text-gold-400 border border-gold-500/20 font-medium">
                {project.timeline}
              </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="mb-4">
            <h3 className="font-heading text-xl font-bold text-pearl-100 group-hover:text-gold-400 transition-colors duration-300 line-clamp-1">
              {project.title}
            </h3>
            <p className="font-mono text-[11px] text-pearl-400 mt-1 uppercase tracking-wider">
              {project.company ? `Built at ${project.company}` : 'Personal Project'}
            </p>
          </div>
          
          <p className="text-pearl-200/70 font-body text-sm leading-relaxed mb-6 line-clamp-3">
            {project.shortDescription}
          </p>
          
          <div className="mt-auto pt-4">
            <TechnologyTags technologies={project.technologies} max={6} className="mb-6" />
            
            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <button
                onClick={() => navigate(`/project/${project.id}`)}
                className="flex items-center gap-2 text-gold-400 font-heading text-sm font-semibold hover:text-gold-300 transition-colors"
              >
                Read More <ArrowRight className="w-4 h-4" />
              </button>
              
              <div className="flex items-center gap-2">
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full text-pearl-400 hover:text-pearl-100 hover:bg-white/5 transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <SiGithub className="w-4 h-4" />
                  </a>
                )}
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full text-pearl-400 hover:text-gold-400 hover:bg-gold-500/10 transition-colors"
                    aria-label="Live Site"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
