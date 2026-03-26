'use client';

import { motion } from 'framer-motion';
import { SectionWrapper, SectionTitle } from './SectionWrapper';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export function Education() {
  return (
    <SectionWrapper id="education">
      <SectionTitle title="Education" subtitle="Academic background" />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card-hover p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-blue to-accent-purple" />

          <div className="flex items-start gap-5">
            <div className="p-3 rounded-xl bg-accent-blue/10 flex-shrink-0">
              <GraduationCap size={28} className="text-accent-blue" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-[var(--text-primary)]">
                B. Tech in Computer Science and Engineering
              </h3>
              <p className="text-accent-blue font-semibold mt-1">SRM IST</p>

              <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-[var(--text-secondary)]">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  07/2019 – 05/2023
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} />
                  Chennai
                </span>
              </div>

              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent-emerald/10 text-accent-emerald">
                <span className="text-2xl font-bold">9.01</span>
                <span className="text-sm font-medium">CGPA</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
