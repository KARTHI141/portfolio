'use client';

import { motion } from 'framer-motion';
import { SectionWrapper, SectionTitle } from './SectionWrapper';
import { Briefcase, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const experiences = [
  {
    role: 'Associate Software Engineer',
    company: 'Dedalus',
    period: 'Aug 2023 – Present',
    location: 'Chennai, Tamil Nadu',
    highlights: [
      'Architected and developed scalable healthcare billing systems using Java, Angular, Quarkus, Docker, and Oracle DB, improving workflow efficiency by 30%.',
      'Improved API performance by 13x (26s → 2s) by replacing JPA dynamic queries with optimized Named Queries and improving database indexing.',
      'Developed and deployed RESTful microservices, enhancing data integration and system reliability across frontend and backend.',
      'Led migration of a legacy product to Angular (UI) and Quarkus (backend), cutting technical debt and boosting user experience.',
      'Designed CI/CD pipelines using Maven, Docker, Docker Compose, and GitHub Actions, integrating SonarQube for automated code quality checks and containerized deployments.',
    ],
    techStack: [
      'Java',
      'Quarkus',
      'Angular',
      'Docker',
      'Oracle DB',
      'Maven',
      'GitHub Actions',
      'SonarQube',
    ],
  },
];

export function Experience() {
  const [expandedIdx, setExpandedIdx] = useState<number>(0);

  return (
    <SectionWrapper id="experience">
      <SectionTitle title="Work Experience" subtitle="My journey" />

      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue via-accent-purple to-transparent hidden md:block" />

            <div className="flex gap-6">
              {/* Timeline dot */}
              <div className="hidden md:flex flex-shrink-0 relative z-10">
                <motion.div
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center shadow-lg shadow-accent-blue/20"
                >
                  <Briefcase size={20} className="text-white" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 glass-card-hover p-6 md:p-8 mb-8">
                <div
                  className="flex items-start justify-between cursor-pointer"
                  onClick={() =>
                    setExpandedIdx(expandedIdx === index ? -1 : index)
                  }
                >
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">
                      {exp.role}
                    </h3>
                    <p className="text-accent-blue font-semibold mt-1">
                      {exp.company}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)] mt-1">
                      {exp.period} · {exp.location}
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedIdx === index ? 180 : 0 }}
                    className="text-[var(--text-secondary)] flex-shrink-0 ml-4 mt-1"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: expandedIdx === index ? 'auto' : 0,
                    opacity: expandedIdx === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <ul className="mt-6 space-y-3">
                    {exp.highlights.map((highlight, hIdx) => (
                      <motion.li
                        key={hIdx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: hIdx * 0.1 }}
                        className="flex items-start gap-3 text-[var(--text-secondary)] text-sm leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2 flex-shrink-0" />
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
