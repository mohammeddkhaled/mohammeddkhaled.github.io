import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/hero/HeroSection.jsx';
import AboutSection from '@/components/about/AboutSection.jsx';
import JourneySection from '@/components/journey/JourneySection.jsx';
import SkillsSection from '@/components/skills/SkillsSection.jsx';
import ProjectsSection from '@/components/projects/ProjectsSection.jsx';
import ExperienceSection from '@/components/experience/ExperienceSection.jsx';
import EducationSection from '@/components/education/EducationSection.jsx';
import CertificationsSection from '@/components/certifications/CertificationsSection.jsx';
import ContactSection from '@/components/contact/ContactSection.jsx';
import settingsData from '@/data/settings.json';
import profileData from '@/data/profile.json';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>{settingsData.siteTitle || `${profileData.name} — Full Stack Developer | Software Engineer`}</title>
        <meta name="description" content={settingsData.siteDescription} />
        <meta property="og:title" content={settingsData.siteTitle} />
        <meta property="og:description" content={settingsData.siteDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={settingsData.siteTitle} />
        <meta name="twitter:description" content={settingsData.siteDescription} />
      </Helmet>

      <div className="relative overflow-hidden bg-midnight-950">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <JourneySection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </div>
    </>
  );
}
