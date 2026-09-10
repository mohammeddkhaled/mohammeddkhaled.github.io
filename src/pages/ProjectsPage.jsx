import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Building2, FolderGit2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import projectsData from '@/data/projects.json';
import ProjectCard from '@/components/projects/ProjectCard.jsx';

export default function ProjectsPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('company'); // 'company' | 'personal'
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const companyProjects = (projectsData.companyProjects || []).sort((a, b) => (a.order || 99) - (b.order || 99));
  const personalProjects = (projectsData.personalProjects || []).sort((a, b) => (a.order || 99) - (b.order || 99));

  const currentProjects = activeTab === 'company' ? companyProjects : personalProjects;

  return (
    <div className="min-h-screen bg-midnight-950 pt-32 pb-24 px-6 lg:px-12">
      {/* Background Ambience */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gold-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Back Navigation */}
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-pearl-400 hover:text-gold-400 font-mono text-sm mb-12 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </button>

        {/* Header */}
        <div className="mb-16">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-pearl-100 mb-6">
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-500">Archive</span>
          </h1>
          <p className="text-pearl-300 font-body text-lg max-w-2xl">
            A comprehensive collection of my engineering work, spanning enterprise platforms and personal experiments.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center gap-3 mb-16">
          <button
            onClick={() => setActiveTab('company')}
            className={`relative px-6 py-3 rounded-full font-heading text-sm font-semibold transition-all duration-300 flex items-center gap-2.5 focus:outline-none ${
              activeTab === 'company'
                ? 'text-midnight-950 shadow-gold'
                : 'text-pearl-300 bg-midnight-800/80 border border-midnight-700/60 hover:text-gold-300'
            }`}
          >
            {activeTab === 'company' && (
              <motion.div
                layoutId="projectsPageTab"
                className="absolute inset-0 bg-gradient-to-r from-gold-400 via-gold-500 to-amber-500 rounded-full"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <Building2 className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Enterprise Solutions ({companyProjects.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('personal')}
            className={`relative px-6 py-3 rounded-full font-heading text-sm font-semibold transition-all duration-300 flex items-center gap-2.5 focus:outline-none ${
              activeTab === 'personal'
                ? 'text-midnight-950 shadow-gold'
                : 'text-pearl-300 bg-midnight-800/80 border border-midnight-700/60 hover:text-gold-300'
            }`}
          >
            {activeTab === 'personal' && (
              <motion.div
                layoutId="projectsPageTab"
                className="absolute inset-0 bg-gradient-to-r from-gold-400 via-gold-500 to-amber-500 rounded-full"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <FolderGit2 className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Personal Experiments ({personalProjects.length})</span>
          </button>
        </div>

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentProjects.length > 0 ? (
              currentProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <div className="col-span-full py-20 text-center text-pearl-400 font-mono text-sm border border-white/5 rounded-3xl bg-white/[0.02]">
                No {activeTab} projects found.
              </div>
            )}
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
}
