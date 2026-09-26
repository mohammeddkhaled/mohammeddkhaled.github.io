import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Monitor,
  Server,
  Database,
  Code,
  Layers,
  Wrench,
  Heart,
  Crown,
  Users,
  MessageCircle,
  Lightbulb,
  RefreshCw,
  Clock,
  Sparkles,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading.jsx';
import skillsData from '@/data/skills.json';
import * as SiIcons from 'react-icons/si';

const CATEGORY_ICONS = {
  Monitor,
  Server,
  Database,
  Code,
  Layers,
  Wrench,
  Heart,
};

const SOFT_SKILL_ICONS = {
  Crown,
  Users,
  MessageCircle,
  Lightbulb,
  RefreshCw,
  Clock,
};

const SkillCard = ({ skill, index }) => {
  const IconComponent = SiIcons[skill.icon] || SOFT_SKILL_ICONS[skill.icon] || Code;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
        delay: (index % 6) * 0.05 
      }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative h-full w-full p-1 rounded-2xl bg-gradient-to-br from-midnight-800 to-midnight-950 overflow-hidden"
    >
      {/* Animated glowing border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold-500/0 via-gold-500/20 to-gold-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      
      <div className="relative h-full p-4 sm:p-5 rounded-xl bg-midnight-900 border border-midnight-700 group-hover:border-gold-500/30 transition-colors backdrop-blur-xl flex flex-col justify-between gap-3 sm:gap-4">
        <div className="flex items-start justify-between">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-midnight-800/80 border border-midnight-600 group-hover:border-gold-500/50 flex items-center justify-center text-pearl-400 group-hover:text-gold-400 transition-all duration-300 shadow-inner">
            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[10px] font-mono rounded-full bg-midnight-800 text-pearl-400 border border-midnight-700 group-hover:border-gold-500/30 group-hover:text-gold-300 transition-colors uppercase tracking-wider">
            {skill.level}
          </span>
        </div>
        
        <div>
          <h4 className="font-heading text-base sm:text-lg font-bold text-pearl-100 group-hover:text-white transition-colors line-clamp-1">
            {skill.name}
          </h4>
          <div className="w-6 sm:w-8 h-1 mt-2 sm:mt-3 rounded-full bg-midnight-700 group-hover:bg-gold-500/50 transition-colors" />
        </div>
      </div>
    </motion.div>
  );
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skillsData[0].category);
  const scrollContainerRef = useRef(null);

  const activeCategoryData =
    skillsData.find((cat) => cat.category === activeCategory) || skillsData[0];
    
  const currentIndex = skillsData.findIndex(cat => cat.category === activeCategory);

  const nextCategory = () => {
    const nextIndex = (currentIndex + 1) % skillsData.length;
    setActiveCategory(skillsData[nextIndex].category);
  };

  const prevCategory = () => {
    const prevIndex = (currentIndex - 1 + skillsData.length) % skillsData.length;
    setActiveCategory(skillsData[prevIndex].category);
  };

  // Chunk skills into pages of 6 items (3x2 for desktop, 2x3 for mobile)
  const chunkArray = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };
  
  const skillPages = chunkArray(activeCategoryData.skills, 6);
  const showScrollIndicator = activeCategoryData.skills.length > 6;

  return (
    <section id="skills" className="py-section relative overflow-hidden bg-midnight-950">
      {/* Background Animated Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[150px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" 
      />

      <div className="section-container relative z-10">
        <SectionHeading
          number="04"
          title="Technical Arsenal"
          subtitle="A curated showcase of my technical proficiencies, tools, and methodologies. Swipe or scroll to explore."
        />

        {/* Dynamic Category Selector (Hidden on small screens) */}
        <div className="relative mb-8 sm:mb-12 hidden md:block">
          <div className="flex overflow-x-auto hide-scrollbar gap-2 sm:gap-3 py-4 px-2 -mx-2 sm:mx-0 justify-center snap-x snap-mandatory">
            {skillsData.map((category) => {
              const Icon = CATEGORY_ICONS[category.icon] || Code;
              const isActive = activeCategory === category.category;

              return (
                <button
                  key={category.category}
                  onClick={() => setActiveCategory(category.category)}
                  className={`relative flex-shrink-0 snap-center px-4 sm:px-6 py-3 rounded-2xl font-heading text-sm font-semibold transition-all duration-500 flex items-center gap-2.5 group focus:outline-none ${
                    isActive
                      ? 'text-midnight-950'
                      : 'text-pearl-400 bg-midnight-900/50 border border-midnight-800 hover:text-pearl-100 hover:bg-midnight-800 hover:border-gold-500/30'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryBg"
                      className="absolute inset-0 bg-gradient-to-r from-gold-400 to-amber-500 rounded-2xl shadow-glow"
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    />
                  )}
                  <Icon className={`w-4 h-4 sm:w-5 sm:h-5 relative z-10 ${isActive ? 'animate-pulse' : 'group-hover:scale-110 transition-transform duration-300'}`} />
                  <span className="relative z-10 tracking-wide">{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Display Area */}
        <div className="relative bg-midnight-900/40 backdrop-blur-xl rounded-[2.5rem] border border-midnight-800/60 p-4 sm:p-8 md:p-10 shadow-2xl">
          
          {/* Header & Controls */}
          <div className="flex items-center justify-between mb-6 sm:mb-8 gap-4 px-2">
            <div className="flex items-center gap-3 sm:gap-4">
               <motion.div
                 key={activeCategory + "-icon"}
                 initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
                 animate={{ rotate: 0, scale: 1, opacity: 1 }}
                 transition={{ type: "spring", stiffness: 200, damping: 15 }}
                 className="p-2 sm:p-3 bg-gradient-to-br from-gold-500/20 to-gold-500/5 rounded-xl border border-gold-500/20 text-gold-400 shadow-[0_0_15px_rgba(234,179,8,0.15)]"
               >
                 <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
               </motion.div>
               <div>
                  <h3 className="font-heading text-lg sm:text-2xl font-bold text-pearl-100">
                    {activeCategoryData.label} Stack
                  </h3>
                  <p className="font-mono text-xs sm:text-sm text-pearl-400 mt-0.5 sm:mt-1">
                    {activeCategoryData.skills.length} core technologies
                  </p>
               </div>
            </div>
            
            {/* Category Navigation Controls */}
            <div className="flex gap-2 sm:gap-3">
              <button 
                onClick={prevCategory}
                className="p-2 sm:p-3 rounded-xl bg-midnight-800 border border-midnight-700 text-pearl-300 hover:text-gold-400 hover:border-gold-500/40 hover:bg-midnight-800/80 transition-all active:scale-95"
                aria-label="Previous Category"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button 
                onClick={nextCategory}
                className="p-2 sm:p-3 rounded-xl bg-midnight-800 border border-midnight-700 text-pearl-300 hover:text-gold-400 hover:border-gold-500/40 hover:bg-midnight-800/80 transition-all active:scale-95"
                aria-label="Next Category"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Scrolling Grid Pages Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4 md:pb-0 px-1"
            style={{
               scrollbarWidth: 'none',
               msOverflowStyle: 'none'
            }}
          >
            <AnimatePresence mode="popLayout">
              {skillPages.map((page, pageIdx) => (
                <div 
                  key={`${activeCategory}-page-${pageIdx}`} 
                  className="w-full min-w-full flex-shrink-0 grid grid-cols-2 md:grid-cols-3 content-start gap-3 sm:gap-4 md:gap-6 snap-start"
                >
                  {page.map((skill, idx) => (
                    <div key={skill.name} className="w-full h-full">
                       <SkillCard skill={skill} index={pageIdx * 6 + idx} />
                    </div>
                  ))}
                </div>
              ))}
            </AnimatePresence>
          </div>
          
          {/* Swipe Indicator (Visible only when overflowing) */}
          {showScrollIndicator && (
            <div className="flex justify-center mt-2 md:mt-4 pointer-events-none opacity-50">
              <div className="flex gap-2 items-center bg-midnight-800/50 px-4 py-1.5 rounded-full border border-midnight-700">
                 <span className="w-1.5 h-1.5 rounded-full bg-gold-500/40 animate-pulse"></span>
                 <span className="w-3 h-1.5 rounded-full bg-gold-500"></span>
                 <span className="w-1.5 h-1.5 rounded-full bg-gold-500/40 animate-pulse delay-75"></span>
                 <span className="ml-2 text-[9px] font-mono text-pearl-400 uppercase tracking-wider">Scroll</span>
              </div>
            </div>
          )}

        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
