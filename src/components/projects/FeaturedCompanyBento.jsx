import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TechnologyTags from './TechnologyTags.jsx';
import { fadeInUp } from '@/animations/variants.js';

export default function FeaturedCompanyBento({ projects }) {
  const navigate = useNavigate();
  
  if (!projects || projects.length === 0) return null;

  const displayProjects = projects.slice(0, 3); // Optimize for 3

  return (
    <div className="w-full relative z-10 py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
      {/* Section Intro */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-pearl-100 mb-4">
            Enterprise Solutions
          </h2>
          <p className="font-body text-lg text-pearl-300 max-w-2xl">
            Selected enterprise-grade platforms and systems engineered for scale, security, and complex business logic.
          </p>
        </div>
        <button 
          onClick={() => {
            navigate('/projects');
            window.scrollTo(0,0);
          }}
          className="flex items-center gap-2 group font-mono text-sm text-gold-400 hover:text-gold-300 transition-colors shrink-0"
        >
          Explore All Enterprise Works 
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[700px]">
        {displayProjects.map((project, idx) => {
          const isLarge = idx === 0;
          
          return (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className={`group relative rounded-[32px] overflow-hidden bg-midnight-900 border border-white/5 hover:border-gold-500/30 transition-all duration-500 ${
                isLarge ? 'lg:col-span-7 lg:row-span-2' : 'lg:col-span-5 lg:row-span-1 h-[400px] lg:h-auto'
              }`}
            >
              {/* Background Image / Placeholder */}
              {project.screenshots && project.screenshots.length > 0 ? (
                <img 
                  src={project.screenshots[0]} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-40 group-hover:opacity-50"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent transition-transform duration-1000 group-hover:scale-105">
                   <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay" />
                </div>
              )}
              
              {/* Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-midnight-950/80 to-transparent" />

              {/* Content */}
              <div className={`absolute inset-0 flex flex-col justify-end p-8 ${isLarge ? 'lg:p-12' : 'lg:p-8'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[10px] px-3 py-1 rounded-full bg-gold-500/20 text-gold-400 border border-gold-500/30 font-semibold backdrop-blur-md">
                    {project.timeline}
                  </span>
                  <span className="font-mono text-[11px] text-pearl-300">
                    {project.company}
                  </span>
                </div>
                
                <h3 className={`font-heading font-bold text-pearl-100 mb-4 group-hover:text-gold-400 transition-colors ${
                  isLarge ? 'text-4xl lg:text-5xl' : 'text-3xl'
                }`}>
                  {project.title}
                </h3>
                
                <p className={`font-body text-pearl-200/80 font-light mb-6 line-clamp-2 ${
                  isLarge ? 'text-lg max-w-xl' : 'text-base'
                }`}>
                  {project.shortDescription}
                </p>
                
                <TechnologyTags technologies={project.technologies} max={isLarge ? 5 : 4} className="mb-6" />
                
                <button
                  onClick={() => navigate(`/project/${project.id}`)}
                  className="flex items-center gap-2 self-start px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-pearl-100 font-heading text-sm font-semibold backdrop-blur-md transition-all"
                >
                  Read Case Study <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
