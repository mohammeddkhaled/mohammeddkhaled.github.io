import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

function ProjectCollage({ screenshots, title }) {
  if (!screenshots || screenshots.length === 0) {
    // Premium fallback
    return (
      <div className="w-full h-full relative group rounded-3xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-gold-500/10 to-transparent">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay" />
        <div className="absolute inset-0 bg-gold-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-gold-500/20 to-gold-500/5 border border-gold-500/20 flex items-center justify-center shadow-gold relative z-10 transition-transform duration-500 group-hover:scale-110">
          <span className="font-heading text-5xl text-gold-400/50 font-bold">{title.charAt(0)}</span>
        </div>
      </div>
    );
  }

  const validShots = screenshots.slice(0, 4);
  const count = validShots.length;

  if (count === 1) {
    return (
      <div className="w-full h-full relative group rounded-3xl overflow-hidden">
        <img src={validShots[0]} alt={title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
        <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.6)] pointer-events-none" />
      </div>
    );
  }
  
  if (count === 2) {
    return (
      <div className="w-full h-full grid grid-cols-2 gap-4">
        {validShots.map((shot, i) => (
          <div key={i} className="relative group rounded-3xl overflow-hidden border border-white/5">
            <img src={shot} alt={`${title} ${i}`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    );
  }

  if (count === 3) {
    return (
      <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-4">
        <div className="col-span-2 row-span-1 relative group rounded-3xl overflow-hidden border border-white/5">
          <img src={validShots[0]} alt={`${title} 1`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
        </div>
        <div className="col-span-1 row-span-1 relative group rounded-3xl overflow-hidden border border-white/5">
          <img src={validShots[1]} alt={`${title} 2`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
        </div>
        <div className="col-span-1 row-span-1 relative group rounded-3xl overflow-hidden border border-white/5">
          <img src={validShots[2]} alt={`${title} 3`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
        </div>
      </div>
    );
  }

  // 4 images
  return (
    <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-4">
      {validShots.map((shot, i) => (
        <div key={i} className="relative group rounded-3xl overflow-hidden border border-white/5">
          <img src={shot} alt={`${title} ${i}`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
        </div>
      ))}
    </div>
  );
}

export default function FeaturedProjectCard({ project, index, total }) {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, index === total - 1 ? 1 : 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, index === total - 1 ? 1 : 0.2]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", index === total - 1 ? "0%" : "-15%"]);

  return (
    <div ref={containerRef} className="h-screen sticky top-0 flex items-center justify-center p-6 md:p-12 lg:p-20 w-full overflow-hidden">
      <motion.div 
        style={{ scale, opacity, y }}
        className="w-full max-w-[1400px] h-full max-h-[850px] rounded-[40px] bg-midnight-900 border border-white/10 shadow-2xl overflow-hidden flex flex-col lg:flex-row relative origin-top"
      >
        {/* Left Side: Visuals (55%) */}
        <div className="w-full lg:w-[55%] h-[40%] lg:h-full relative bg-midnight-950/80 flex items-center justify-center p-4 lg:p-8">
          <ProjectCollage screenshots={project.screenshots} title={project.title} />
        </div>

        {/* Right Side: Information (45%) */}
        <div className="w-full lg:w-[45%] h-[60%] lg:h-full p-8 lg:p-14 xl:p-16 flex flex-col justify-center bg-midnight-900 border-t lg:border-t-0 lg:border-l border-white/5 relative z-10">
          
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/20 font-medium whitespace-nowrap">
              {project.timeline}
            </span>
            {project.company && (
              <span className="font-mono text-xs text-pearl-400 whitespace-nowrap overflow-hidden text-ellipsis">
                Built at <strong className="text-pearl-200">{project.company}</strong>
              </span>
            )}
            {!project.company && (
              <span className="font-mono text-xs text-pearl-400">
                Personal Project
              </span>
            )}
          </div>
          
          <h3 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-pearl-100 mb-6 leading-[1.1]">
            {project.title}
          </h3>
          
          <p className="text-pearl-200/80 font-body text-base lg:text-lg leading-[1.8] font-light mb-8 lg:mb-10 line-clamp-4 lg:line-clamp-none">
            {project.shortDescription || project.fullDescription}
          </p>
          
          <div className="mb-auto">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 6).map((tech, idx) => (
                <span 
                  key={idx}
                  className="font-mono text-[11px] text-pearl-300 bg-midnight-950 px-3 py-1.5 rounded-md border border-white/5"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 6 && (
                <span className="font-mono text-[11px] text-pearl-400 px-2 py-1.5 flex items-center">
                  +{project.technologies.length - 6} More
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 lg:gap-4 mt-8 pt-8 border-t border-white/5">
            <button
              onClick={() => navigate('/projects', { state: { scrollTo: project.id } })}
              className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-gold-500 text-midnight-950 font-heading text-sm font-bold hover:shadow-glow hover:scale-105 transition-all duration-300"
            >
              Read More
            </button>
            {project.liveUrl && (
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 text-pearl-100 font-heading text-sm font-bold border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                Visit Site <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer" 
                className="p-3.5 rounded-full bg-white/5 text-pearl-100 border border-white/10 hover:bg-white/10 transition-colors duration-300"
              >
                <SiGithub className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
