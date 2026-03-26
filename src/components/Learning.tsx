'use client';

import { motion } from 'framer-motion';
import { SectionWrapper, SectionTitle } from './SectionWrapper';
import { BookOpen, Rocket } from 'lucide-react';

const learningItems = [
  { name: 'Kubernetes & Container Orchestration', progress: 40 },
  { name: 'System Design Patterns', progress: 55 },
  { name: 'Apache Kafka Advanced', progress: 35 },
  { name: 'AWS Solutions Architect', progress: 25 },
];

const blogPosts = [
  {
    title: 'How I Optimized API Performance by 13x',
    description: 'A deep dive into JPA query optimization, database indexing strategies, and the journey from 26s to 2s response times.',
    date: 'Coming Soon',
    tag: 'Performance',
  },
  {
    title: 'Migrating Monolith to Microservices',
    description: 'Lessons learned from migrating a legacy healthcare system to a modern microservices architecture with Quarkus.',
    date: 'Coming Soon',
    tag: 'Architecture',
  },
  {
    title: 'CI/CD Best Practices with Docker & GitHub Actions',
    description: 'Setting up automated pipelines with SonarQube integration for code quality and containerized deployments.',
    date: 'Coming Soon',
    tag: 'DevOps',
  },
];

export function Learning() {
  return (
    <SectionWrapper id="learning" className="relative">
      <SectionTitle title="Growth & Insights" subtitle="Always learning" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Currently Learning */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Rocket size={20} className="text-accent-cyan" />
            <h3 className="text-xl font-bold text-[var(--text-primary)]">
              Currently Learning
            </h3>
          </div>
          <div className="space-y-4">
            {learningItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-5"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-[var(--text-primary)]">
                    {item.name}
                  </span>
                  <span className="text-xs text-[var(--text-secondary)]">
                    {item.progress}%
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: index * 0.1 }}
                    className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-emerald"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Blog Placeholder */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <BookOpen size={20} className="text-accent-purple" />
            <h3 className="text-xl font-bold text-[var(--text-primary)]">
              Blog
            </h3>
            <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-accent-purple/10 text-accent-purple border border-accent-purple/20">
              Coming Soon
            </span>
          </div>
          <div className="space-y-4">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card-hover p-5 group cursor-default"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h4 className="text-sm font-bold text-[var(--text-primary)] group-hover:text-accent-purple transition-colors">
                    {post.title}
                  </h4>
                  <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-white/5 text-[var(--text-secondary)] flex-shrink-0">
                    {post.tag}
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {post.description}
                </p>
                <p className="text-[10px] text-accent-purple mt-2 font-medium">
                  {post.date}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
