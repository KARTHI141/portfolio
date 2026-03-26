'use client';

import { motion } from 'framer-motion';
import { SectionWrapper, SectionTitle } from './SectionWrapper';
import { FileDown, Eye, CheckCircle2 } from 'lucide-react';

const resumeHighlights = [
  'B.Tech in Computer Science — SRM IST (9.01 CGPA)',
  '2.5+ years at Dedalus — Global Healthcare Tech Leader',
  '13x API Performance Optimization',
  'AWS Certified Developer – Associate',
  'Microservices & CI/CD Pipeline Expertise',
  'Full-Stack Healthcare System Development',
];

export function Resume() {
  return (
    <SectionWrapper id="resume">
      <SectionTitle title="Resume" subtitle="My credentials" />

      <div className="max-w-4xl mx-auto">
        <div className="glass-card-hover p-8 md:p-12 relative overflow-hidden">
          {/* Gradient accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left — description */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-accent-blue/10">
                  <Eye size={24} className="text-accent-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">
                    Quick Overview
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Key highlights from my resume
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {resumeHighlights.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-start gap-3 text-sm text-[var(--text-secondary)]"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-accent-emerald mt-0.5 flex-shrink-0"
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right — CTA */}
            <div className="flex flex-col items-center justify-center text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                {/* Resume preview mockup */}
                <div className="w-48 h-64 glass-card rounded-xl border border-[var(--border-color)] mx-auto p-4 relative">
                  <div className="space-y-2">
                    <div className="h-3 w-3/4 bg-white/10 rounded" />
                    <div className="h-2 w-full bg-white/5 rounded" />
                    <div className="h-2 w-5/6 bg-white/5 rounded" />
                    <div className="h-px w-full bg-[var(--border-color)] my-3" />
                    <div className="h-2 w-2/3 bg-white/5 rounded" />
                    <div className="h-2 w-full bg-white/5 rounded" />
                    <div className="h-2 w-3/4 bg-white/5 rounded" />
                    <div className="h-px w-full bg-[var(--border-color)] my-3" />
                    <div className="h-2 w-1/2 bg-white/5 rounded" />
                    <div className="h-2 w-full bg-white/5 rounded" />
                    <div className="h-2 w-2/3 bg-white/5 rounded" />
                  </div>
                  {/* Floating gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-accent-blue/10 to-transparent rounded-xl" />
                </div>
              </motion.div>

              <p className="text-[var(--text-secondary)] text-sm mb-6 max-w-xs">
                Download my full resume to explore my complete experience,
                education, and skills.
              </p>

              <a
                href="/resume.pdf"
                download
                className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-accent-blue/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-purple rounded-xl" />
                <div className="absolute inset-0 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <FileDown size={18} className="relative z-10" />
                <span className="relative z-10">Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
