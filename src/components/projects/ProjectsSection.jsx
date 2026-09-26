import React from 'react';
import SectionHeading from '@/components/common/SectionHeading.jsx';
import FeaturedCompanyBento from './FeaturedCompanyBento.jsx';
import FeaturedPersonalStaggered from './FeaturedPersonalStaggered.jsx';
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
    <section id="projects" className="relative overflow-hidden bg-midnight-950 mb-12">
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-container relative z-10 mx-auto px-6 lg:px-12 ">
        <SectionHeading
          number="06"
          title="Featured Works"
          subtitle="A curated selection of my finest architectural and engineering efforts."
        />
      </div>

      <div className="flex flex-col w-full">
        {featuredCompany.length > 0 && (
          <FeaturedCompanyBento projects={featuredCompany} />
        )}
        
        {featuredPersonal.length > 0 && (
          <FeaturedPersonalStaggered projects={featuredPersonal} />
        )}
      </div>
    </section>
  );
}
