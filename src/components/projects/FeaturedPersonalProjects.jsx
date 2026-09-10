import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProjectCard from './ProjectCard.jsx';

export default function FeaturedPersonalProjects({ projects }) {
  const navigate = useNavigate();

  if (!projects || projects.length === 0) return null;

  return (
    <div className="w-full mt-32">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-pearl-100 mb-2">
            Experiments & Tools
          </h3>
          <p className="font-mono text-sm text-pearl-400">Featured Personal Projects</p>
        </div>
        <button 
          onClick={() => {
            navigate('/projects');
            window.scrollTo(0,0);
          }}
          className="hidden md:flex items-center gap-2 group font-mono text-sm text-gold-400 hover:text-gold-300 transition-colors"
        >
          View All Personal <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      <div className="mt-12 md:hidden flex justify-center">
        <button 
          onClick={() => {
            navigate('/projects');
            window.scrollTo(0,0);
          }}
          className="flex items-center gap-2 px-8 py-3 rounded-full border border-gold-500/30 text-gold-400 font-mono text-sm hover:bg-gold-500/10 transition-colors"
        >
          View All Personal <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
