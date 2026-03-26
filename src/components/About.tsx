'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { RollingNumber } from './RollingNumber';
import { SectionWrapper, SectionTitle } from './SectionWrapper';
import { Code2, Target, Sparkles } from 'lucide-react';

const stats = [
  { value: 2.5, suffix: '+', label: 'Years Experience', decimals: 1 },
  { value: 13, suffix: 'x', label: 'API Performance Boost', decimals: 0 },
  { value: 30, suffix: '%', label: 'Workflow Improvement', decimals: 0 },
  { value: 99.9, suffix: '%', label: 'Data Consistency', decimals: 1 },
];

export function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const stories = [
    {
      icon: Code2,
      title: 'Who I Am',
      content:
        'A Backend Software Engineer passionate about building systems that scale. With 2.5+ years at Dedalus — a global healthcare technology leader — I architect high-performance backend solutions that handle critical healthcare data with precision.',
    },
    {
      icon: Target,
      title: 'What I Solve',
      content:
        'I turn slow, fragile backends into fast, reliable architectures. From optimizing APIs by 13x (26s → 2s) to designing CI/CD pipelines with Docker & GitHub Actions, I make systems faster, more maintainable, and production-ready.',
    },
    {
      icon: Sparkles,
      title: 'What Makes Me Different',
      content:
        'AWS Certified Developer with a knack for microservices, database optimization, and clean architecture. I don\'t just write code — I engineer solutions that reduce technical debt, boost workflow efficiency by 30%, and achieve 99.9% data consistency.',
    },
  ];

  return (
    <SectionWrapper id="about">
      <SectionTitle title="About Me" subtitle="Get to know me" />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
        {/* Story cards */}
        <div className="lg:col-span-3 space-y-6">
          {stories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="glass-card-hover p-6 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-accent-blue/10 text-accent-blue flex-shrink-0">
                  <story.icon size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                    {story.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {story.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div ref={ref} className="lg:col-span-2">
          <div className="grid grid-cols-2 gap-4 sticky top-28">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center group hover:border-accent-blue/30 transition-colors"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  <RollingNumber
                    value={stat.value}
                    decimals={stat.decimals}
                    suffix={stat.suffix}
                    duration={1.8}
                  />
                </div>
                <p className="text-xs text-[var(--text-secondary)] font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
