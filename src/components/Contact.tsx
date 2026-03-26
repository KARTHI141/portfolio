'use client';

import { motion } from 'framer-motion';
import { SectionWrapper, SectionTitle } from './SectionWrapper';
import { Send, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { useState, FormEvent } from 'react';

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In production, wire this to an API route or service like Formspree / EmailJS
    const mailtoLink = `mailto:karthickkrv9635@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formState.name)}&body=${encodeURIComponent(formState.message)}%0A%0AFrom: ${encodeURIComponent(formState.email)}`;
    window.open(mailtoLink, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'karthickkrv9635@gmail.com',
      href: 'mailto:karthickkrv9635@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8248680356',
      href: 'tel:+918248680356',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chennai, Tamil Nadu 600089',
      href: '#',
    },
  ];

  const socials = [
    { icon: Github, href: 'https://github.com/KARTHI141', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/karthickraja-g/', label: 'LinkedIn' },
  ];

  return (
    <SectionWrapper id="contact">
      <SectionTitle title="Get In Touch" subtitle="Let's connect" />

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Left — Info */}
        <div className="lg:col-span-2 space-y-6">
          <p className="text-[var(--text-secondary)] leading-relaxed">
            I&apos;m always open to discussing new opportunities, projects, or
            just having a great conversation about technology.
          </p>

          <div className="space-y-4">
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className="flex items-center gap-4 p-4 rounded-xl glass-card-hover group"
              >
                <div className="p-2.5 rounded-lg bg-accent-blue/10 text-accent-blue group-hover:scale-110 transition-transform">
                  <info.icon size={18} />
                </div>
                <div>
                  <p className="text-xs text-[var(--text-secondary)]">
                    {info.label}
                  </p>
                  <p className="text-sm font-medium text-[var(--text-primary)]">
                    {info.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="flex gap-3 pt-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-card text-[var(--text-secondary)] hover:text-accent-blue hover:border-accent-blue/30 transition-all"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-5">
            {[
              {
                name: 'name',
                type: 'text',
                label: 'Your Name',
                placeholder: 'John Doe',
              },
              {
                name: 'email',
                type: 'email',
                label: 'Your Email',
                placeholder: 'john@example.com',
              },
            ].map((field) => (
              <div key={field.name} className="relative">
                <label className="block text-xs font-medium text-[var(--text-secondary)] mb-2 uppercase tracking-wider">
                  {field.label}
                </label>
                <motion.div
                  animate={{
                    boxShadow:
                      focused === field.name
                        ? '0 0 0 2px rgba(99, 102, 241, 0.3), 0 0 20px rgba(99, 102, 241, 0.1)'
                        : '0 0 0 0px transparent',
                  }}
                  className="rounded-xl"
                >
                  <input
                    type={field.type}
                    required
                    placeholder={field.placeholder}
                    value={formState[field.name as keyof typeof formState]}
                    onChange={(e) =>
                      setFormState({ ...formState, [field.name]: e.target.value })
                    }
                    onFocus={() => setFocused(field.name)}
                    onBlur={() => setFocused(null)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[var(--border-color)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]/50 focus:outline-none focus:border-accent-blue/50 transition-colors text-sm"
                  />
                </motion.div>
              </div>
            ))}

            <div className="relative">
              <label className="block text-xs font-medium text-[var(--text-secondary)] mb-2 uppercase tracking-wider">
                Message
              </label>
              <motion.div
                animate={{
                  boxShadow:
                    focused === 'message'
                      ? '0 0 0 2px rgba(99, 102, 241, 0.3), 0 0 20px rgba(99, 102, 241, 0.1)'
                      : '0 0 0 0px transparent',
                }}
                className="rounded-xl"
              >
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[var(--border-color)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]/50 focus:outline-none focus:border-accent-blue/50 transition-colors text-sm resize-none"
                />
              </motion.div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-purple rounded-xl" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Send size={16} className="relative z-10" />
              <span className="relative z-10">
                {submitted ? 'Message Sent!' : 'Send Message'}
              </span>
            </motion.button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
