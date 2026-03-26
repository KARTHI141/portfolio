'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper, SectionTitle } from './SectionWrapper';
import { ExternalLink, Github, X, ChevronRight, Star, GitFork } from 'lucide-react';
import { useState } from 'react';

interface GitHubRepo {
  name: string;
  description: string | null;
  stars: number;
  forks: number;
  language: string | null;
  url: string;
  updatedAt: string;
  owner: string;
  isPersonal: boolean;
}

const featuredProjects = [
  {
    title: 'Inpatient Management System',
    subtitle: 'Full-Stack Healthcare Application',
    tech: ['Java', 'Spring Boot', 'Angular', 'JPA', 'Maven', 'Oracle DB', 'Docker'],
    problem:
      'Healthcare facilities needed a unified system to manage inpatient records, admissions, and billing workflows efficiently.',
    solution:
      'Developed a full-stack healthcare application with secure REST APIs using Spring Boot, integrated Oracle DB with JPA for efficient data persistence.',
    impact: 'Achieved 99.9% data consistency through robust entity relationships and transaction management.',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Military Asset Management System',
    subtitle: 'Backend Development — High-Performance System',
    tech: ['Java', 'Spring Boot', 'Hibernate', 'JWT', 'Spring Security', 'RESTful APIs'],
    problem:
      'Military operations required a high-performance, secure system for managing asset inventories and operational data.',
    solution:
      'Built a high-performance backend system with optimized CRUD operations using Hibernate ORM, solving complex data integrity issues.',
    impact:
      'Designed secure authentication and authorization system using JWT and Spring Security with role-based access control.',
    gradient: 'from-emerald-500 to-teal-600',
  },
];

const languageColors: Record<string, string> = {
  Java: '#b07219',
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#663399',
  Shell: '#89e051',
  Dockerfile: '#384d54',
};

export function Projects({ repos = [] }: { repos?: GitHubRepo[] }) {
  const [selectedProject, setSelectedProject] = useState<
    (typeof featuredProjects)[0] | null
  >(null);

  return (
    <SectionWrapper id="projects">
      <SectionTitle title="Featured Projects" subtitle="What I've built" />

      {/* Featured Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            onClick={() => setSelectedProject(project)}
            className="group glass-card-hover p-6 md:p-8 cursor-pointer relative overflow-hidden"
          >
            {/* Gradient accent top */}
            <div
              className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} opacity-60 group-hover:opacity-100 transition-opacity`}
            />

            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-accent-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mt-1">
                  {project.subtitle}
                </p>
              </div>
              <ChevronRight
                size={20}
                className="text-[var(--text-secondary)] group-hover:text-accent-blue group-hover:translate-x-1 transition-all flex-shrink-0"
              />
            </div>

            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 line-clamp-2">
              {project.solution}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.slice(0, 5).map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 text-[var(--text-secondary)] border border-white/5"
                >
                  {t}
                </span>
              ))}
              {project.tech.length > 5 && (
                <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 text-[var(--text-secondary)]">
                  +{project.tech.length - 5}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* GitHub Repos */}
      {repos.length > 0 && (
        <>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
              GitHub Repositories
            </h3>
            <p className="text-[var(--text-secondary)] text-sm">
              Open source contributions & personal projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {repos.slice(0, 6).map((repo, index) => (
              <motion.a
                key={`${repo.owner}-${repo.name}`}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="glass-card-hover p-5 group block"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Github size={16} className="text-[var(--text-secondary)]" />
                    <span className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-accent-blue transition-colors truncate">
                      {repo.name}
                    </span>
                  </div>
                  <ExternalLink
                    size={14}
                    className="text-[var(--text-secondary)] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                  />
                </div>

                <p className="text-xs text-[var(--text-secondary)] mb-4 line-clamp-2 min-h-[2rem]">
                  {repo.description || 'No description available'}
                </p>

                <div className="flex items-center gap-4 text-xs text-[var(--text-secondary)]">
                  {repo.language && (
                    <span className="flex items-center gap-1">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{
                          backgroundColor:
                            languageColors[repo.language] || '#858585',
                        }}
                      />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Star size={12} />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={12} />
                    {repo.forks}
                  </span>
                  <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-white/5">
                    {repo.isPersonal ? 'Personal' : 'Company'}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://github.com/KARTHI141"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card-hover text-sm font-medium text-[var(--text-secondary)] hover:text-accent-blue transition-colors"
            >
              <Github size={16} />
              View All Repositories
              <ExternalLink size={14} />
            </a>
          </div>
        </>
      )}

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5 transition-colors"
              >
                <X size={20} />
              </button>

              <div
                className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${selectedProject.gradient} text-white mb-4`}
              >
                Featured Project
              </div>

              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-6">
                {selectedProject.subtitle}
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-2">
                    Problem
                  </h4>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-accent-purple uppercase tracking-wider mb-2">
                    Solution
                  </h4>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-accent-emerald uppercase tracking-wider mb-2">
                    Impact
                  </h4>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                    {selectedProject.impact}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-[var(--border-color)]">
                {selectedProject.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
