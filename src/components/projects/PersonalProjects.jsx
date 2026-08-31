import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import GlowCard from '@/components/common/GlowCard.jsx';
import Button from '@/components/common/Button.jsx';
import { fadeInUp, staggerContainer } from '@/animations/variants.js';

export default function PersonalProjects({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);

  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-12 text-pearl-400 font-body">
        Personal projects showcasing experiments and open source tools will appear here.
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={staggerContainer}
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      {projects.map((project) => (
        <motion.div key={project.id} variants={fadeInUp}>
          <GlowCard className="h-full flex flex-col justify-between p-6 sm:p-8">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="font-mono text-xs text-gold-400 bg-gold-500/10 border border-gold-500/20 px-3 py-1 rounded-full">
                  Personal Experiment
                </span>
                <span className="font-mono text-xs text-pearl-400">{project.timeline}</span>
              </div>

              <h3 className="text-2xl font-heading font-bold text-pearl-100 mb-3">
                {project.title}
              </h3>

              <p className="text-sm text-pearl-300 font-body leading-relaxed mb-6">
                {project.shortDescription}
              </p>

              {/* Technologies Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-midnight-800 border border-midnight-700 text-pearl-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 pt-6 border-t border-midnight-800">
              {project.liveUrl && (
                <Button
                  variant="primary"
                  size="sm"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={ExternalLink}
                >
                  Live Demo
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  variant="secondary"
                  size="sm"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={SiGithub}
                >
                  GitHub
                </Button>
              )}
            </div>
          </GlowCard>
        </motion.div>
      ))}
    </motion.div>
  );
}
