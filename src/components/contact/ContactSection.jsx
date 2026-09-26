import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Phone, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
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

  const formId = import.meta.env.VITE_FORMSPREE_FORM_ID;

  console.log("=== Formspree Debug ===");
  console.log("Form ID:", formId);
  console.log("All env:", import.meta.env);

  const [state, handleSubmit, reset] = useForm(formId);
  
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  }, [state.succeeded]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendAnother = () => {
    setSubmitted(false);
    if (typeof reset === 'function') reset();
  };

  return (
    <section id="contact" className=" py-12  relative overflow-hidden bg-midnight-950">
      {/* Background Glow */}
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gold-500/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionHeading
          number="08"
          title="Initiate Conversation"
          subtitle="Let's build high-performance full stack systems, enterprise web applications, or discuss technical leadership."
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
            <GlowCard className="p-8 sm:p-10 border-gold-500/30">
              <h3 className="text-2xl font-heading font-extrabold text-pearl-100 mb-6">
                Direct Touchpoint
              </h3>

              <div className="flex flex-col gap-6 mb-8">
                {/* Email with copy button */}
                <div className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-midnight-950 border border-midnight-800 hover:border-gold-500/40 transition-all">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-mono text-[10px] text-pearl-400 uppercase tracking-widest">
                        Official Email
                      </span>
                      <a
                        href={`mailto:${profileData.email}`}
                        className="font-heading font-bold text-pearl-100 hover:text-gold-300 transition-colors text-sm sm:text-base"
                      >
                        {profileData.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="font-mono text-xs px-3 py-1.5 rounded-lg bg-midnight-900 border border-midnight-700 text-gold-300 hover:border-gold-400 transition-colors"
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>

                <a
                  href={`tel:${profileData.phone}`}
                  className="flex items-center gap-3.5 p-4 rounded-2xl bg-midnight-950 border border-midnight-800 hover:border-gold-500/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] text-pearl-400 uppercase tracking-widest">
                      Phone Number
                    </span>
                    <span className="font-heading font-bold text-pearl-100 group-hover:text-gold-300 transition-colors text-sm sm:text-base">
                      {profileData.phone}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-midnight-950 border border-midnight-800">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] text-pearl-400 uppercase tracking-widest">
                      Primary Location
                    </span>
                    <span className="font-heading font-bold text-pearl-100 text-sm sm:text-base">
                      {profileData.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Social Buttons */}
              <span className="font-mono text-xs text-pearl-400 font-bold uppercase tracking-wider block mb-3">
                Social Networks & Code Hubs
              </span>
              <div className="flex flex-wrap gap-2.5">
                {socialData.map((s) => (
                  <a
                    key={s.id}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs px-3.5 py-2 rounded-xl bg-midnight-950 border border-midnight-700 text-pearl-300 hover:text-gold-300 hover:border-gold-400 transition-all"
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
            <GlowCard className="p-8 sm:p-12 border-gold-500/30">
              {submitted ? (
                <div className="text-center py-12 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-success/20 border border-success/40 flex items-center justify-center text-success mb-6 shadow-glow">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-heading font-extrabold text-pearl-100 mb-2">
                    Thank you! Your message has been sent successfully.
                  </h3>
                  <p className="text-sm text-pearl-300 font-body max-w-md">
                    I will review your request and get back to you promptly.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-8"
                    onClick={handleSendAnother}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {state.errors && state.errors.length > 0 && (
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span className="font-body text-sm font-medium">Something went wrong. Please try again.</span>
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="font-mono text-xs font-bold text-pearl-300 uppercase tracking-wider">
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
                        className="w-full px-4 py-3.5 rounded-xl bg-midnight-950 border border-midnight-800 text-pearl-100 placeholder-pearl-500 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 focus:outline-none transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="font-mono text-xs font-bold text-pearl-300 uppercase tracking-wider">
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
                        className="w-full px-4 py-3.5 rounded-xl bg-midnight-950 border border-midnight-800 text-pearl-100 placeholder-pearl-500 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="font-mono text-xs font-bold text-pearl-300 uppercase tracking-wider">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Enterprise Project / Architecture Discussion"
                      className="w-full px-4 py-3.5 rounded-xl bg-midnight-950 border border-midnight-800 text-pearl-100 placeholder-pearl-500 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 focus:outline-none transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-mono text-xs font-bold text-pearl-300 uppercase tracking-wider">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      minLength={10}
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share project requirements, architecture scope, or timeline..."
                      className="w-full px-4 py-3.5 rounded-xl bg-midnight-950 border border-midnight-800 text-pearl-100 placeholder-pearl-500 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 focus:outline-none transition-all resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={state.submitting}
                    disabled={state.submitting}
                    icon={Send}
                    className="w-full mt-2 shadow-gold py-4 disabled:opacity-50"
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
