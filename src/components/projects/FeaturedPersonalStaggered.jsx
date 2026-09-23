import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TechnologyTags from './TechnologyTags.jsx';
import { fadeInUp, staggerContainer } from '@/animations/variants.js';

export default function FeaturedPersonalStaggered({ projects }) {
  const navigate = useNavigate();
  
  if (!projects || projects.length === 0) return null;

  const displayProjects = projects.slice(0, 3); // Optimize for 3

  return (
    <div className="w-full relative z-10 py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
      {/* Section Intro */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
        <div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-pearl-100 mb-4">
            Personal Explorations
          </h2>
          <p className="font-body text-lg text-pearl-300 max-w-2xl">
            Independent projects, architectural experiments, and deep dives into modern web technologies.
          </p>
        </div>
        <button 
          onClick={() => {
            navigate('/projects');
            window.scrollTo(0,0);
          }}
          className="flex items-center gap-2 group font-mono text-sm text-gold-400 hover:text-gold-300 transition-colors shrink-0"
        >
          Explore All Personal Works 
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Alternating Layout */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-32"
      >
        {displayProjects.map((project, idx) => {
          const isEven = idx % 2 === 0;
          
          return (
            <motion.div 
              key={project.id}
              variants={fadeInUp}
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center group`}
            >
              {/* Visual Side */}
              <div className="w-full lg:w-1/2 relative">
                <div className="aspect-[4/3] w-full rounded-3xl overflow-hidden bg-midnight-900 border border-white/5 relative shadow-2xl group-hover:shadow-[0_20px_50px_rgb(0,0,0,0.3)] transition-all duration-700">
                  {project.screenshots && project.screenshots.length > 0 ? (
                    <img 
                      src={project.screenshots[0]} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gold-500/10 to-transparent flex items-center justify-center transition-transform duration-1000 group-hover:scale-105">
                       <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay" />
                       <span className="font-heading text-6xl text-gold-400/30 font-bold">{project.title.charAt(0)}</span>
                    </div>
                  )}
                  {/* Subtle inner shadow */}
                  <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.6)] pointer-events-none" />
                </div>
                
                {/* Decorative accent */}
                <div className={`absolute top-1/2 -translate-y-1/2 w-24 h-full bg-gold-500/5 blur-3xl -z-10 ${isEven ? '-right-12' : '-left-12'}`} />
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 flex flex-col">
                <span className="font-mono text-xs text-gold-400 mb-4 tracking-widest uppercase">
                  {project.timeline}
                </span>
                
                <h3 className="font-heading text-4xl lg:text-5xl font-bold text-pearl-100 mb-6 group-hover:text-gold-400 transition-colors duration-500">
                  {project.title}
                </h3>
                
                <p className="font-body text-lg text-pearl-200/80 leading-relaxed mb-8 max-w-xl font-light">
                  {project.shortDescription}
                </p>
                
                <TechnologyTags technologies={project.technologies} max={6} className="mb-10" />
                
                <button
                  onClick={() => navigate(`/project/${project.id}`)}
                  className="flex items-center gap-3 font-heading font-bold text-pearl-100 hover:text-gold-400 transition-colors self-start group/btn"
                >
                  <span className="border-b border-gold-500/30 group-hover/btn:border-gold-400 pb-1 transition-colors">Read Case Study</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform text-gold-500" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
