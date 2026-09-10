import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

export default function FeaturedCompanyProjects({ projects }) {
  const navigate = useNavigate();
  
  if (!projects || projects.length === 0) return null;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-16">
        <div>
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-pearl-100 mb-2">
            Enterprise Solutions
          </h3>
          <p className="font-mono text-sm text-pearl-400">Featured Company Projects</p>
        </div>
        <button 
          onClick={() => {
            navigate('/projects');
            window.scrollTo(0,0);
          }}
          className="hidden md:flex items-center gap-2 group font-mono text-sm text-gold-400 hover:text-gold-300 transition-colors"
        >
          View All Projects 
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="flex flex-col gap-24 md:gap-32">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
          >
            {/* Visual Side (Mocking an image since screenshots are empty) */}
            <div className="w-full lg:w-[55%] relative group">
              <div className="absolute inset-0 bg-gold-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[40px]" />
              <div className="relative aspect-[16/10] w-full bg-midnight-900 border border-white/5 rounded-[32px] overflow-hidden flex items-center justify-center group-hover:border-white/10 transition-colors duration-500 shadow-2xl">
                 <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay z-10" />
                 <div className="text-center z-20">
                   <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-500/5 border border-gold-500/20 flex items-center justify-center">
                     <span className="font-heading text-4xl text-gold-400/50 font-bold">{project.title.charAt(0)}</span>
                   </div>
                   <h4 className="font-heading text-2xl font-bold text-pearl-100/50">{project.company}</h4>
                 </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-[45%] flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/20 font-medium">
                  {project.timeline}
                </span>
              </div>
              
              <h3 className="font-heading text-3xl md:text-5xl font-bold text-pearl-100 mb-6 leading-[1.1]">
                {project.title}
              </h3>
              
              <p className="text-pearl-200/80 font-body text-lg leading-[1.8] font-light mb-8">
                {project.fullDescription || project.shortDescription}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-10">
                {project.technologies.slice(0, 6).map((tech, idx) => (
                  <span 
                    key={idx}
                    className="font-mono text-[11px] text-pearl-300 bg-white/5 px-3 py-1.5 rounded-md border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 6 && (
                  <span className="font-mono text-[11px] text-pearl-400 px-2 py-1.5">
                    +{project.technologies.length - 6} more
                  </span>
                )}
              </div>

              <div className="flex items-center gap-4">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-gold-500 text-midnight-950 font-heading text-sm font-bold hover:shadow-glow hover:scale-105 transition-all duration-300"
                  >
                    Visit Live Site <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="p-3 rounded-full bg-white/5 text-pearl-100 hover:bg-white/10 transition-colors duration-300"
                  >
                    <SiGithub className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 md:hidden flex justify-center">
        <button 
          onClick={() => {
            navigate('/projects');
            window.scrollTo(0,0);
          }}
          className="flex items-center gap-2 px-8 py-3 rounded-full border border-gold-500/30 text-gold-400 font-mono text-sm hover:bg-gold-500/10 transition-colors"
        >
          View All Projects <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
