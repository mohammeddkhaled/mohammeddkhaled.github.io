import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  BookOpen,
  Award,
  Code,
  Rocket,
  Users,
  Target,
  Sparkles
} from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading.jsx';
import journeyData from '@/data/journey.json';

const ICON_MAP = {
  GraduationCap,
  BookOpen,
  Award,
  Code,
  Rocket,
  Users,
  Target,
};

const JourneyItem = ({ item, index, scrollRef }) => {
  const IconComponent = ICON_MAP[item.icon] || Code;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5% 0px", root: scrollRef }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex gap-5 md:gap-10 group pb-12 md:pb-20 last:pb-0"
    >
       {/* Timeline Node Column */}
       <div className="relative flex flex-col items-center">
          {/* Node */}
          <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-midnight-950 border-2 border-midnight-700 group-hover:border-gold-500/50 flex flex-shrink-0 items-center justify-center text-pearl-500 group-hover:text-gold-400 group-hover:bg-midnight-900 transition-all duration-500 z-10 shadow-lg group-hover:shadow-[0_0_20px_rgba(234,179,8,0.25)] group-hover:scale-110">
            <IconComponent className="w-4 h-4 md:w-6 md:h-6" />
          </div>
          
          {/* Connecting Line */}
          {index !== journeyData.length - 1 && (
            <div className="absolute top-[3rem] md:top-[4rem] bottom-0 w-[2px] bg-gradient-to-b from-midnight-700 via-midnight-800 to-transparent group-hover:from-gold-500/40 transition-colors duration-700 rounded-full" />
          )}
       </div>
       
       {/* Content Column */}
       <div className="flex-1 pt-0.5 md:pt-2">
          <div className="flex flex-wrap items-center gap-3 mb-3 md:mb-4">
             <span className="text-gold-400 font-mono text-xs md:text-sm font-bold tracking-widest uppercase">
               {item.year}
             </span>
             {item.milestone === 'current' && (
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] md:text-xs uppercase font-mono tracking-wider bg-success/10 text-success border border-success/20 shadow-[0_0_10px_rgba(74,222,128,0.1)]">
                  <Sparkles className="w-3 h-3" /> Current Focus
                </span>
             )}
             {item.milestone === 'future' && (
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] md:text-xs uppercase font-mono tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.1)]">
                  <Target className="w-3 h-3" /> Future Horizon
                </span>
             )}
          </div>
          
          <h3 className="text-xl md:text-3xl lg:text-4xl font-heading font-black text-pearl-100 mb-2 md:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pearl-100 group-hover:to-pearl-300 transition-all duration-300 leading-tight">
            {item.title}
          </h3>
          
          <h4 className="text-sm md:text-lg lg:text-xl text-gold-300/90 font-heading mb-3 md:mb-4 leading-snug">
            {item.subtitle}
          </h4>
          
          <p className="text-pearl-400 group-hover:text-pearl-200 font-body text-sm md:text-base lg:text-lg leading-relaxed transition-colors duration-500 max-w-2xl">
            {item.description}
          </p>
       </div>
    </motion.div>
  );
};

export default function JourneySection() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll animation logic
  useEffect(() => {
    let animationFrameId;
    let lastTime = performance.now();
    
    const autoScroll = (time) => {
      if (!isHovered && scrollRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
        
        // Only scroll if we haven't reached the absolute bottom
        if (scrollTop + clientHeight < scrollHeight - 1) {
          const deltaTime = time - lastTime;
          // Speed: 35 pixels per second
          scrollRef.current.scrollTop += (35 * deltaTime) / 1000;
        }
      }
      lastTime = time;
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  return (
    <section id="journey" className="h-[100vh] min-h-[600px] max-h-[1200px] py-12 md:py-24 bg-midnight-950 relative overflow-hidden flex items-center">
      
      {/* Subtle Background Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[160px] pointer-events-none" />
      
      <div className="section-container relative z-10 h-full max-h-[900px] flex flex-col lg:flex-row gap-8 lg:gap-24">
        
        {/* Left Sidebar - Fixed vertically centered */}
        <div className="lg:w-1/3 flex flex-col justify-center shrink-0 pt-8 lg:pt-0">
           <SectionHeading 
             number="03" 
             title="The Evolution" 
             subtitle="A chronological journey of experience. The timeline scrolls automatically—hover over it to pause, or scroll manually."
           />
        </div>
        
        {/* Right Content - Scrollable Auto-Marquee */}
        <div className="lg:w-2/3 flex-1 relative min-h-0">
          
          {/* Premium Fade Masks for smooth clipping */}
          <div className="absolute top-0 left-0 w-full h-8 md:h-16 bg-gradient-to-b from-midnight-950 to-transparent z-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-16 md:h-32 bg-gradient-to-t from-midnight-950 to-transparent z-20 pointer-events-none" />
          
          {/* Scroll Container */}
          <div 
            ref={scrollRef}
            className="h-full overflow-y-auto pr-4 md:pr-8 scrollbar-none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
          >
             <div className="pt-12 md:pt-20 pb-[30vh]">
               {journeyData.map((item, idx) => (
                  <JourneyItem key={item.id} item={item} index={idx} scrollRef={scrollRef} />
               ))}
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
