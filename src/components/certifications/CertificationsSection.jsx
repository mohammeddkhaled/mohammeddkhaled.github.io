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
      {/* Background Ambient Lighting */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionHeading
          number="08"
          title="Verified Certifications"
          subtitle="Accredited industry credentials, technical training certificates, and verified software engineering specializations."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          {certsData.map((cert, idx) => (
            <motion.div key={cert.id} variants={fadeInUp}>
              <GlowCard className="h-full flex flex-col justify-between p-8 border-gold-500/40 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-2xl pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gold-400 to-amber-500 text-midnight-950 flex items-center justify-center font-heading font-extrabold text-lg shadow-gold">
                      <Award className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-semibold px-3.5 py-1.5 rounded-full bg-midnight-950 text-gold-300 border border-gold-500/30">
                      {cert.date}
                    </span>
                  </div>

                  <span className="font-mono text-xs text-gold-400 font-bold uppercase tracking-widest block mb-2">
                    {cert.issuer}
                  </span>

                  <h3 className="text-xl font-heading font-extrabold text-pearl-100 mb-4 leading-snug">
                    {cert.title}
                  </h3>
                </div>

                {cert.verifyUrl ? (
                  <div className="pt-6 border-t border-midnight-800 text-black">
                    <Button
                      variant="primary"
                      size="sm"
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      icon={ExternalLink}
                      className="w-full shadow-gold "
                    >
                      Verify Credential
                    </Button>
                  </div>
                ) : (
                  <div className="pt-6 border-t border-midnight-800 flex items-center justify-between text-xs font-mono text-pearl-300">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-gold-400" />
                      <span>Verified Credential</span>
                    </div>
                    <span className="font-bold text-gold-400">OFFICIAL</span>
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
