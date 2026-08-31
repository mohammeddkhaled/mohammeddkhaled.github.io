import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading.jsx';
import GlowCard from '@/components/common/GlowCard.jsx';
import Button from '@/components/common/Button.jsx';
import certsData from '@/data/certifications.json';
import { fadeInUp, staggerContainer } from '@/animations/variants.js';

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-section relative overflow-hidden bg-midnight-950">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionHeading
          number="08"
          title="Verified Certifications"
          subtitle="Industry training and accredited technical credentials in full stack engineering and data analytics."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          {certsData.map((cert) => (
            <motion.div key={cert.id} variants={fadeInUp}>
              <GlowCard className="h-full flex flex-col justify-between p-8">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400">
                      <Award className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-midnight-800 text-pearl-300 border border-midnight-700">
                      {cert.date}
                    </span>
                  </div>

                  <span className="font-mono text-xs text-gold-400 uppercase tracking-widest block mb-2">
                    {cert.issuer}
                  </span>

                  <h3 className="text-xl font-heading font-bold text-pearl-100 mb-4 leading-snug">
                    {cert.title}
                  </h3>
                </div>

                {cert.verifyUrl ? (
                  <div className="pt-6 border-t border-midnight-800">
                    <Button
                      variant="outline"
                      size="sm"
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      icon={ExternalLink}
                      className="w-full"
                    >
                      Verify Credential
                    </Button>
                  </div>
                ) : (
                  <div className="pt-6 border-t border-midnight-800 flex items-center gap-2 text-xs font-mono text-pearl-400">
                    <ShieldCheck className="w-4 h-4 text-gold-400" />
                    <span>Verified Completion</span>
                  </div>
                )}
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
