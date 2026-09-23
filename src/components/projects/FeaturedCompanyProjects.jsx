import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import FeaturedProjectCard from './FeaturedProjectCard.jsx';

export default function FeaturedCompanyProjects({ projects }) {
  const navigate = useNavigate();
  
  if (!projects || projects.length === 0) return null;

  return (
    <div className="w-full relative z-10">
      {/* Section Intro */}
      <div className="flex items-center justify-between mb-8 md:mb-16 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div>
          <h3 className="font-heading text-3xl md:text-5xl font-bold text-pearl-100 mb-3">
            Featured Engineering Works
          </h3>
          <p className="font-mono text-sm text-pearl-400">Premium Case Studies</p>
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

      {/* Pinned Showcase Area */}
      <div className="relative w-full">
        {projects.map((project, index) => (
          <FeaturedProjectCard 
            key={project.id} 
            project={project} 
            index={index} 
            total={projects.length} 
          />
        ))}
      </div>

      {/* Mobile View All Button */}
      <div className="mt-16 md:hidden flex justify-center px-6">
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
