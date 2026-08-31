import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Phone, MapPin, CheckCircle2, MessageSquare } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading.jsx';
import GlowCard from '@/components/common/GlowCard.jsx';
import Button from '@/components/common/Button.jsx';
import profileData from '@/data/profile.json';
import socialData from '@/data/social.json';
import { fadeInUp, staggerContainer } from '@/animations/variants.js';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Frontend demo simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-section relative overflow-hidden bg-midnight-900/40">
      {/* Background Glow */}
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionHeading
          number="09"
          title="Initiate Conversation"
          subtitle="Let's build scalable systems, enterprise web applications, or discuss technical leadership opportunities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto mt-12 items-start">
          {/* Contact Details Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <GlowCard className="p-8 border-gold-500/30">
              <h3 className="text-2xl font-heading font-bold text-pearl-100 mb-6">
                Direct Contact
              </h3>

              <div className="flex flex-col gap-6 mb-8">
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-4 group p-3 rounded-xl bg-midnight-800/50 border border-midnight-700/60 hover:border-gold-500/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-xs text-pearl-400 uppercase tracking-wider">
                      Email Address
                    </span>
                    <span className="font-heading font-medium text-pearl-100 group-hover:text-gold-300 transition-colors text-sm sm:text-base">
                      {profileData.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${profileData.phone}`}
                  className="flex items-center gap-4 group p-3 rounded-xl bg-midnight-800/50 border border-midnight-700/60 hover:border-gold-500/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-xs text-pearl-400 uppercase tracking-wider">
                      Phone Number
                    </span>
                    <span className="font-heading font-medium text-pearl-100 group-hover:text-gold-300 transition-colors text-sm sm:text-base">
                      {profileData.phone}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 rounded-xl bg-midnight-800/50 border border-midnight-700/60">
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-xs text-pearl-400 uppercase tracking-wider">
                      Location
                    </span>
                    <span className="font-heading font-medium text-pearl-100 text-sm sm:text-base">
                      {profileData.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Social Buttons */}
              <span className="font-mono text-xs text-pearl-400 uppercase tracking-wider block mb-3">
                Social Networks
              </span>
              <div className="flex flex-wrap gap-2">
                {socialData.map((s) => (
                  <a
                    key={s.id}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs px-3 py-1.5 rounded-lg bg-midnight-950 border border-midnight-700 text-pearl-300 hover:text-gold-400 hover:border-gold-500/40 transition-colors"
                  >
                    {s.platform}
                  </a>
                ))}
              </div>
            </GlowCard>
          </motion.div>

          {/* Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
            className="lg:col-span-7"
          >
            <GlowCard className="p-8 sm:p-10 border-gold-500/30">
              {submitted ? (
                <div className="text-center py-12 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-success/20 border border-success/40 flex items-center justify-center text-success mb-6 animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-pearl-100 mb-2">
                    Message Received
                  </h3>
                  <p className="text-sm text-pearl-300 font-body max-w-md">
                    Thank you for reaching out, {formData.name || 'friend'}. I will review your message and reply promptly.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-8"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="font-mono text-xs text-pearl-300 uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-midnight-950 border border-midnight-700/80 text-pearl-100 placeholder-pearl-500 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="font-mono text-xs text-pearl-300 uppercase tracking-wider">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-midnight-950 border border-midnight-700/80 text-pearl-100 placeholder-pearl-500 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="font-mono text-xs text-pearl-300 uppercase tracking-wider">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Tech Lead Role"
                      className="w-full px-4 py-3 rounded-xl bg-midnight-950 border border-midnight-700/80 text-pearl-100 placeholder-pearl-500 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-mono text-xs text-pearl-300 uppercase tracking-wider">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, system architecture requirements, or timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-midnight-950 border border-midnight-700/80 text-pearl-100 placeholder-pearl-500 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none transition-all resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={isSubmitting}
                    icon={Send}
                    className="w-full mt-2"
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </GlowCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
