import React from 'react';
import SectionHeading from '@/components/common/SectionHeading.jsx';
import FeaturedCompanyProjects from './FeaturedCompanyProjects.jsx';
import FeaturedPersonalProjects from './FeaturedPersonalProjects.jsx';
import projectsData from '@/data/projects.json';

export default function ProjectsSection() {
  // Extract and filter featured projects from the new data structure
  const featuredCompany = (projectsData.companyProjects || [])
    .filter(p => p.isFeatured)
    .sort((a, b) => (a.order || 99) - (b.order || 99));
    
  const featuredPersonal = (projectsData.personalProjects || [])
    .filter(p => p.isFeatured)
    .sort((a, b) => (a.order || 99) - (b.order || 99));

  return (
    <section id="projects" className="py-section relative overflow-hidden bg-midnight-950">
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-container relative z-10 mx-auto px-6 lg:px-12 max-w-[1400px]">
        <SectionHeading
          number="05"
          title="Featured Works"
          subtitle="A curated selection of enterprise solutions and personal experiments."
        />

        <div className="mt-16 flex flex-col w-full">
          {featuredCompany.length > 0 && (
            <FeaturedCompanyProjects projects={featuredCompany} />
          )}
          
          {featuredPersonal.length > 0 && (
            <FeaturedPersonalProjects projects={featuredPersonal} />
          )}
        </div>
      </div>
    </section>
  );
}
