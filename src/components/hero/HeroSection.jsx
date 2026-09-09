import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, FileText, ArrowRight, MapPin, Mail } from 'lucide-react';
import ParticleField from './ParticleField.jsx';
import profileData from '@/data/profile.json';
import socialData from '@/data/social.json';
import { scrollToSection } from '@/utils/helpers.js';
import Button from '@/components/common/Button.jsx';
import * as SiIcons from 'react-icons/si';
import { gsap } from '@/animations/gsapConfig.js';

export default function HeroSection() {
  const containerRef = useRef(null);
  const heroContentRef = useRef(null);
  const watermarkRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Subtle Mouse Parallax Handler
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / (width / 2);
    const y = (e.clientY - top - height / 2) / (height / 2);
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // GSAP ScrollTrigger Cinematic Camera Zoom Out & Pin Effect
  useEffect(() => {
    const container = containerRef.current;
    const content = heroContentRef.current;
    const watermark = watermarkRef.current;
    if (!container || !content) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=100%',
          pin: true,
          pinSpacing: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      tl.to(
        content,
        {
          scale: 0.82,
          opacity: 0.05,
          y: -80,
          filter: 'blur(16px)',
          ease: 'power2.inOut',
        },
        0
      );

      if (watermark) {
        tl.to(
          watermark,
          {
            scale: 1.15,
            opacity: 0.01,
            ease: 'power2.inOut',
          },
          0
        );
      }
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-screen flex flex-col justify-between pt-20 sm:pt-24 pb-6 overflow-hidden bg-midnight-950 select-none"
    >
      {/* Background Soft Radial Lighting */}
      <div
        className="pointer-events-none absolute w-[700px] h-[700px] rounded-full blur-[180px] opacity-25 transition-transform duration-700 ease-out z-0"
        style={{
          background: 'radial-gradient(circle, rgba(212, 168, 83, 0.35) 0%, rgba(193, 127, 36, 0.12) 55%, transparent 75%)',
          transform: `translate(${mousePos.x * 60}px, ${mousePos.y * 60}px)`,
          left: 'calc(50% - 350px)',
          top: 'calc(50% - 350px)',
        }}
      />

      {/* Background Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#131625_1px,transparent_1px),linear-gradient(to_bottom,#131625_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_70%,transparent_100%)] opacity-20 pointer-events-none z-0" />

      {/* Lightweight Canvas Particle Field */}
      <ParticleField />

      {/* Background Name Watermark */}
      <div
        ref={watermarkRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden opacity-[0.035] px-4"
      >
        <span
          className="font-heading text-[11vw] font-black uppercase tracking-widest text-transparent text-center whitespace-nowrap"
          style={{
            WebkitTextStroke: '2px rgba(212, 168, 83, 0.8)',
            transform: `translate3d(${mousePos.x * -25}px, ${mousePos.y * -35}px, 0)`,
            transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
          }}
        >
          {profileData.name}
        </span>
      </div>

      {/* MAIN CINEMATIC CONTENT COMPOSITION */}
      <div className="section-container relative z-10 my-auto flex flex-col items-center text-center pt-4">
        <div ref={heroContentRef} className="flex flex-col items-center text-center w-full max-w-4xl mx-auto">
          {/* 1. Small Label / Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-midnight-900/90 border border-gold-500/30 backdrop-blur-xl mb-4 sm:mb-6 shadow-glow"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
            </span>
            <span className="font-mono text-xs font-semibold text-pearl-200 uppercase tracking-wider">
              Full Stack Developer | Software Engineer | Team Lead
            </span>
            <div className="w-[1px] h-3 bg-gold-500/30" />
            <span className="font-mono text-xs text-gold-400 font-medium flex items-center gap-1">
              <MapPin className="w-3 h-3 text-gold-400" />
              {profileData.location}
            </span>
          </motion.div>

          {/* 2. Headline with Typography Rhythm */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-normal tracking-tight text-pearl-100 leading-[1.08] mb-4 sm:mb-6"
          >
            <span className="block font-light text-pearl-200">
              Crafting{' '}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-amber-500">
                Scalable Digital Systems
              </span>
            </span>
            <span className="block font-light text-pearl-300">For Enterprise Growth.</span>
          </motion.h1>

          {/* 3. Description (Max Width 580px) */}
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm sm:text-base text-pearl-300 font-body max-w-[580px] leading-relaxed mb-6 sm:mb-8 text-center"
          >
            I am <strong className="text-pearl-100 font-medium">{profileData.name}</strong>. Leading full stack architecture at Luminate Web Solutions. Specializing in high-performance REST APIs, database systems, and microservice engineering.
          </motion.p> */}

          {/* 4. Buttons Row */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mb-6"
          >
            <Button
              variant="primary"
              size="md"
              onClick={() => scrollToSection('projects')}
              icon={FolderGit2}
              className="shadow-gold px-7 py-3"
            >
              Explore Projects
            </Button>

            <Button
              variant="secondary"
              size="md"
              href={profileData.resumeUrl || '/resume.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              icon={FileText}
              className="px-7 py-3"
            >
              View Resume
            </Button>

            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-heading text-sm font-medium text-pearl-300 hover:text-gold-300 transition-colors group focus:outline-none"
            >
              <span>Let's Connect</span>
              <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* 5. Minimal Social Icons Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-3 mb-3"
          >
            {socialData.map((s) => {
              const IconComponent = SiIcons[s.icon] || Mail;
              return (
                <a
                  key={s.id}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2.5 rounded-full bg-midnight-900/80 border border-midnight-700/60 text-pearl-300 hover:text-gold-400 hover:border-gold-500/40 hover:scale-110 hover:shadow-glow transition-all duration-300"
                >
                  <IconComponent className="w-4 h-4" />
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* 6. Minimal Statistics Horizontal Strip */}
      <div className="section-container relative z-10 w-full border-t border-midnight-800/80 pt-4">
        <div className="flex flex-wrap items-center justify-between gap-4 max-w-5xl mx-auto">
          {profileData.stats.map((stat, idx) => (
            <React.Fragment key={idx}>
              <div className="flex items-center gap-2.5">
                <span className="font-heading text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-amber-400">
                  {stat.value}{stat.suffix}
                </span>
                <span className="font-mono text-[11px] text-pearl-400 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
              {idx < profileData.stats.length - 1 && (
                <div className="hidden md:block w-[1px] h-5 bg-midnight-800" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* 7. Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="relative z-10 flex flex-col items-center gap-1 mt-2"
      >
        <span className="font-mono text-[9px] tracking-widest text-pearl-400 uppercase opacity-70">
          EXPLORE
        </span>
        <div className="w-[1px] h-4 bg-gradient-to-b from-gold-400 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
