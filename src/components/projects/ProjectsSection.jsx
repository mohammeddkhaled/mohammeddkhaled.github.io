import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Sparkles, FolderGit2 } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading.jsx';
import PersonalProjects from './PersonalProjects.jsx';
import CompanyProjects from './CompanyProjects.jsx';
import projectsData from '@/data/projects.json';

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('company'); // 'company' | 'personal'

  const companyProjects = projectsData.filter((p) => p.category === 'company');
  const personalProjects = projectsData.filter((p) => p.category === 'personal');

  return (
    <section id="projects" className="py-section relative overflow-hidden bg-midnight-900/40">
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionHeading
          number="05"
          title="Featured Engineering Works"
          subtitle="Dual-experience showcase distinguishing enterprise full-stack platforms from creative experiments."
        />

        {/* Tab Switcher */}
        <div className="flex items-center justify-center gap-3 mb-16">
          <button
            onClick={() => setActiveTab('company')}
            className={`relative px-6 py-3 rounded-full font-heading text-xs md:text-sm font-semibold transition-all duration-300 flex items-center gap-2.5 focus:outline-none ${
              activeTab === 'company'
                ? 'text-midnight-950 shadow-gold'
                : 'text-pearl-300 bg-midnight-800/80 border border-midnight-700/60 hover:text-gold-300'
            }`}
          >
            {activeTab === 'company' && (
              <motion.div
                layoutId="activeProjectTypeTab"
                className="absolute inset-0 bg-gradient-to-r from-gold-400 via-gold-500 to-amber-500 rounded-full"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <Building2 className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Enterprise Solutions ({companyProjects.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('personal')}
            className={`relative px-6 py-3 rounded-full font-heading text-xs md:text-sm font-semibold transition-all duration-300 flex items-center gap-2.5 focus:outline-none ${
              activeTab === 'personal'
                ? 'text-midnight-950 shadow-gold'
                : 'text-pearl-300 bg-midnight-800/80 border border-midnight-700/60 hover:text-gold-300'
            }`}
          >
            {activeTab === 'personal' && (
              <motion.div
                layoutId="activeProjectTypeTab"
                className="absolute inset-0 bg-gradient-to-r from-gold-400 via-gold-500 to-amber-500 rounded-full"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <FolderGit2 className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Personal Experiments ({personalProjects.length})</span>
          </button>
        </div>

        {/* Content Render */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {activeTab === 'company' ? (
              <CompanyProjects projects={companyProjects} />
            ) : (
              <PersonalProjects projects={personalProjects} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
