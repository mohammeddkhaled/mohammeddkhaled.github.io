import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Server, ShieldCheck, Terminal, UserCheck, Quote, Database, Layout } from 'lucide-react';
import profileData from '@/data/profile.json';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);
  const row1Ref = useRef(null);
  const portraitRef = useRef(null);
  const ideRef = useRef(null);
  const titleRef = useRef(null);
  const row2Ref = useRef(null);
  const bioRef = useRef(null);
  const capabilitiesRef = useRef([]);

  const codeString = `// Backend Architect & System Designer
const developer = {
  name: "${profileData.name}",
  role: "${profileData.role}",
  location: "${profileData.location}",
  languages: ${JSON.stringify(profileData.languages)},
  status: "Available for High-Impact Projects"
};

const executeVision = () => {
  return developer.languages.map(skill => build(skill));
};`;

  const [typedCode, setTypedCode] = useState('');

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < codeString.length) {
        setTypedCode(prev => prev + codeString.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 40);
    return () => clearInterval(typingInterval);
  }, []);

  const getHighlightedCode = (text) => {
    let html = text
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\/\/.*/g, match => `<span class='text-pearl-500'>${match}</span>`)
      .replace(/\b(const|return)\b/g, match => `<span class='text-blue-400'>${match}</span>`)
      .replace(/\b(developer|executeVision|build|skill)\b/g, match => `<span class='text-emerald-300'>${match}</span>`)
      .replace(/".*?"/g, match => `<span class='text-amber-300'>${match}</span>`)
      .replace(/=&gt;/g, match => `<span class='text-blue-400'>${match}</span>`)
      .replace(/\b(name|role|location|languages|status)\b(?=:)/g, match => `<span class='text-pearl-200'>${match}</span>`);
    
    return { __html: html + "<span class='inline-block w-2.5 h-5 bg-gold-400/80 ml-1.5 align-middle animate-pulse'></span>" };
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title entrance
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 90%',
          },
        }
      );

      // Image Parallax & Scale
      gsap.fromTo(
        portraitRef.current,
        { scale: 0.9, y: 100, opacity: 0 },
        {
          scale: 1,
          y: 0,
          opacity: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: portraitRef.current,
            start: 'top 85%',
            end: 'bottom center',
            scrub: 0.5,
          },
        }
      );

      // IDE Slide
      gsap.fromTo(
        ideRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ideRef.current,
            start: 'top 85%',
          },
        }
      );

      // Bio entrance
      gsap.fromTo(
        bioRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bioRef.current,
            start: 'top 85%',
          },
        }
      );

      // Capabilities sequence
      capabilitiesRef.current.forEach((el, index) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, x: 20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: row2Ref.current,
              start: 'top 80%',
            },
          }
        );
      });

      // Scale down whole section slightly at end to transition to Journey
      gsap.to(sectionRef.current, {
        scale: 0.98,
        opacity: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'bottom 90%',
          end: 'bottom top',
          scrub: true,
        }
      });
      
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const capabilities = [
    { title: "Enterprise APIs", desc: "Designing robust, custom RESTful APIs that connect complex frontend systems with resilient databases." },
    { title: "Architecture", desc: "Structuring databases and server-side logic for high performance, utilizing advanced SQL schemas." },
    { title: "Leadership", desc: "Directing cross-functional engineering teams, orchestrating task allocations, and maintaining code quality." },
    { title: "Problem Solving", desc: "Identifying bottlenecks, refactoring legacy systems, and ensuring seamless enterprise performance." }
  ];

  const bioParas = profileData.fullBio || [];

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="relative w-full min-h-screen pb-32 pt-16 bg-midnight-950 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px] opacity-100" />
        <div className="absolute top-1/4 -left-1/4 w-[80vw] h-[80vw] bg-gold-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[60vw] h-[60vw] bg-midnight-800/40 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="section-container relative z-10 mx-auto px-6 lg:px-12 max-w-[1400px]">
        
        {/* Section Title */}
        <div ref={titleRef} className="mb-20 md:mb-24">
          <div className="flex items-baseline gap-4 mb-4">
            <span className="font-heading text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-gold-400 to-gold-600 opacity-80">
              02
            </span>
            <span className="font-mono text-sm tracking-[0.3em] text-pearl-400 uppercase">
              About Me
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-pearl-100 tracking-tight leading-[1.1]">
            Engineered For Impact<span className="text-gold-500">.</span>
          </h2>
        </div>

        {/* ================= ROW 1 (50% / 50%) ================= */}
        <div ref={row1Ref} className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16 mb-24 lg:mb-[100px]">
          
          {/* LEFT: Portrait (50%) */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            <div ref={portraitRef} className="relative w-full lg:w-[90%] mx-auto lg:mx-0 group flex-grow flex flex-col">
              
              {/* Premium Glass Frame Portrait */}
              <div className="absolute -inset-6 bg-gradient-to-tr from-gold-500/20 to-transparent blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px] rounded-3xl overflow-hidden border-[1px] border-white/10 bg-midnight-900 shadow-2xl group-hover:-translate-y-2 group-hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] transition-all duration-700">
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "tween", ease: "easeOut", duration: 0.8 }}
                  className="w-full h-full absolute inset-0"
                >
                  <img 
                    src={profileData.avatarUrl} 
                    alt={profileData.name}
                    className="w-full h-full object-cover object-center opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/90 via-midnight-950/20 to-transparent" />
                </motion.div>
                
                {/* Info block aligned with portrait bottom */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 pointer-events-none">
                  <h3 className="font-heading text-3xl font-bold text-pearl-100 mb-2">{profileData.name}</h3>
                  <p className="font-mono text-sm text-gold-400 mb-6 tracking-wide">{profileData.role}</p>
                  <div className="flex gap-6 font-mono text-xs text-pearl-300 uppercase tracking-widest border-t border-white/10 pt-6">
                    <span>{profileData.location.split(',')[0]}</span>
                    <span className="text-white/20">|</span>
                    <span>{profileData.stats.find(s => s.label === 'Years Experience')?.value || '1'}+ Yrs Exp</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: IDE Panel (50%) */}
          <div className="w-full lg:w-1/2 flex flex-col group">
            <div ref={ideRef} className="relative w-full h-full min-h-[400px] lg:min-h-[500px] rounded-3xl bg-[#0a0a0f] border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col group-hover:-translate-y-2 group-hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,1)] group-hover:border-white/20 transition-all duration-700">
              
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-gold-500/10 rounded-full blur-[100px] pointer-events-none" />
              
              <div className="flex items-center gap-2 px-6 py-4 bg-white/[0.02] border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="mx-auto flex items-center gap-2 font-mono text-[11px] text-pearl-400/50 uppercase tracking-widest bg-white/5 px-4 py-1.5 rounded-full">
                  <Terminal className="w-3 h-3" /> architect.ts
                </div>
              </div>
              
              <div className="p-8 font-mono text-[13px] md:text-[15px] leading-[1.8] overflow-x-auto text-pearl-200/80 relative flex-grow">
                {/* Highlight line */}
                <div className="absolute top-[162px] left-0 w-full h-[28px] bg-white/[0.03] border-l-2 border-gold-400 pointer-events-none" />
                
                <pre className="relative z-10 whitespace-pre-wrap">
                  <code dangerouslySetInnerHTML={getHighlightedCode(typedCode)} />
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* ================= ROW 2 (65% / 35%) ================= */}
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24 relative">
          
          {/* LEFT: Biography (65%) */}
          <div ref={bioRef} className="w-full lg:w-[65%] flex flex-col gap-12">
            
            <h3 className="font-heading text-3xl md:text-4xl text-pearl-100 font-light leading-snug">
              "Building scalable software is not only about writing code — it's about crafting resilient digital ecosystems."
            </h3>

            <p className="text-lg md:text-xl text-pearl-200/80 font-body leading-[1.8] font-light">
              {bioParas[0] || "I design and build robust, scalable web applications — from database architecture to polished user interfaces."}
            </p>

            {/* Highlighted Quote Block */}
            <div className="pl-8 border-l border-gold-500/30 relative">
              <Quote className="absolute -left-4 top-0 w-8 h-8 text-gold-500/20 bg-midnight-950 py-1" />
              <p className="text-xl md:text-2xl text-pearl-100 font-heading leading-relaxed italic">
                {bioParas[1] || "With hands-on experience in building enterprise-grade applications, I bring a deep understanding of system design."}
              </p>
            </div>

            <p className="text-lg md:text-xl text-pearl-200/80 font-body leading-[1.8] font-light">
              {bioParas[2] || "I lead cross-functional teams, drive technical decisions, and mentor aspiring developers."}
            </p>
          </div>

          {/* RIGHT: Capabilities Timeline (35%) */}
          <div className="w-full lg:w-[35%] pt-4 lg:pt-0">
            <h4 className="font-mono text-sm tracking-[0.2em] text-gold-400 uppercase mb-12">Core Capabilities</h4>
            
            <div className="relative border-l border-white/10 pl-10 flex flex-col ">
              
              {capabilities.map((cap, i) => (
                <div 
                  key={i} 
                  ref={el => capabilitiesRef.current[i] = el}
                  className="relative group cursor-default"
                >
                  {/* Timeline Dot */}
                  <span className="absolute -left-[45px] top-1.5 w-2.5 h-2.5 rounded-full bg-white/20 border-2 border-midnight-950 group-hover:bg-gold-400 transition-colors duration-500 z-10" />
                  
                  {/* Timeline Active Line Fill */}
                  <div className="absolute -left-[41px] top-4 w-[1px] h-0 bg-gold-400/50 group-hover:h-full transition-all duration-700 z-0" />

                  <h5 className="font-heading text-xl font-bold text-pearl-100 mb-3 group-hover:text-gold-400 transition-colors duration-300">
                    {cap.title}
                  </h5>
                  <p className="text-sm md:text-base text-pearl-300/80 font-body leading-[1.7] group-hover:text-pearl-200 transition-colors duration-300">
                    {cap.desc}
                  </p>
                  
                  {/* Subtle separator */}
                  <div className="h-px w-full max-w-[200px] bg-white/5 mt-8 group-hover:max-w-full transition-all duration-700" />
                </div>
              ))}
              
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
