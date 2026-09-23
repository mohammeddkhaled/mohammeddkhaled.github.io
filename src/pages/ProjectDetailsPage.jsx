import React, { useEffect, useMemo } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Calendar, Building2, User, ChevronRight, ChevronLeft } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import projectsData from '@/data/projects.json';
import ScreenshotGallery from '@/components/projects/ScreenshotGallery.jsx';

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Find project and determine next/prev
  const { project, nextProject, prevProject } = useMemo(() => {
    const allProjects = [...(projectsData.companyProjects || []), ...(projectsData.personalProjects || [])];
    const index = allProjects.findIndex(p => p.id === id);
    
    if (index === -1) return { project: null };
    
    const nextProject = index < allProjects.length - 1 ? allProjects[index + 1] : allProjects[0];
    const prevProject = index > 0 ? allProjects[index - 1] : allProjects[allProjects.length - 1];
    
    return { project: allProjects[index], nextProject, prevProject };
  }, [id]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const hasScreenshots = project.screenshots && project.screenshots.length > 0;

  return (
    <div className="min-h-screen bg-midnight-950 pt-32 pb-24 px-6 lg:px-12 font-body text-pearl-200">
      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Back Navigation */}
        <button 
          onClick={() => navigate('/projects')}
          className="flex items-center gap-2 text-pearl-400 hover:text-gold-400 font-mono text-sm mb-12 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </button>

        {/* Hero Section */}
        <header className="mb-16 md:mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-pearl-100 mb-8 leading-[1.1]"
          >
            {project.title}
          </motion.h1>
          
          <div className="flex flex-wrap items-center gap-6 md:gap-10 border-t border-b border-white/10 py-6 mb-10">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-gold-500" />
              <span className="font-mono text-sm">{project.timeline}</span>
            </div>
            
            {project.company ? (
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-gold-500" />
                <span className="font-mono text-sm">{project.company}</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-gold-500" />
                <span className="font-mono text-sm">Personal Project</span>
              </div>
            )}
            
            <div className="flex items-center gap-4 ml-auto w-full md:w-auto mt-4 md:mt-0">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 md:flex-none items-center justify-center gap-2 px-6 py-3 rounded-full bg-gold-500 text-midnight-950 font-heading text-sm font-bold hover:shadow-glow transition-all"
                >
                  Visit Site <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.githubUrl && (
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 md:flex-none items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 text-pearl-100 font-heading text-sm font-bold border border-white/10 hover:bg-white/10 transition-colors"
                >
                  GitHub <SiGithub className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
          
          <p className="text-xl md:text-2xl font-light leading-relaxed text-pearl-100/90 max-w-4xl">
            {project.fullDescription || project.shortDescription}
          </p>
        </header>

        {/* Screenshot Gallery */}
        {hasScreenshots && (
          <ScreenshotGallery screenshots={project.screenshots} title={project.title} />
        )}

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-32">
          
          {/* Main Narrative (Left) */}
          <div className="lg:col-span-7 space-y-16">
            {project.challenges && project.challenges.length > 0 && (
              <section>
                <h3 className="font-heading text-3xl font-bold text-pearl-100 mb-6">The Challenge</h3>
                <ul className="space-y-4">
                  {project.challenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-lg">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2.5 shrink-0" />
                      <span className="leading-relaxed">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
            
            {project.features && project.features.length > 0 && (
              <section>
                <h3 className="font-heading text-3xl font-bold text-pearl-100 mb-6">Key Features</h3>
                <ul className="space-y-4">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-lg">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2.5 shrink-0" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Structured Data (Right) */}
          <div className="lg:col-span-5 space-y-16">
            <section className="p-8 rounded-3xl bg-midnight-900 border border-white/5">
              <h3 className="font-heading text-xl font-bold text-pearl-100 mb-6">Technologies Used</h3>
              <div className="flex flex-wrap gap-2.5">
                {project.technologies.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="font-mono text-xs text-gold-300 bg-gold-500/10 px-3 py-1.5 rounded-md border border-gold-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {project.responsibilities && project.responsibilities.length > 0 && (
              <section className="p-8 rounded-3xl bg-midnight-900 border border-white/5">
                <h3 className="font-heading text-xl font-bold text-pearl-100 mb-6">My Role</h3>
                <ul className="space-y-4">
                  {project.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-base text-pearl-300">
                      <ChevronRight className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

        </div>

        {/* Project Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-12 border-t border-white/10">
          <button 
            onClick={() => navigate(`/project/${prevProject.id}`)}
            className="group flex flex-col items-start text-left w-full sm:w-auto"
          >
            <span className="font-mono text-xs text-pearl-400 mb-2 flex items-center gap-1 group-hover:text-gold-400 transition-colors">
              <ChevronLeft className="w-3 h-3" /> Previous Project
            </span>
            <span className="font-heading text-xl font-bold text-pearl-100 group-hover:text-pearl-200 transition-colors line-clamp-1">
              {prevProject.title}
            </span>
          </button>
          
          <button 
            onClick={() => navigate(`/project/${nextProject.id}`)}
            className="group flex flex-col items-end text-right w-full sm:w-auto"
          >
            <span className="font-mono text-xs text-pearl-400 mb-2 flex items-center gap-1 group-hover:text-gold-400 transition-colors">
              Next Project <ChevronRight className="w-3 h-3" />
            </span>
            <span className="font-heading text-xl font-bold text-pearl-100 group-hover:text-pearl-200 transition-colors line-clamp-1">
              {nextProject.title}
            </span>
          </button>
        </div>

      </div>
    </div>
  );
}
