'use client';

import { motion } from 'framer-motion';
import { SectionWrapper, SectionTitle } from './SectionWrapper';
import {
  Server,
  Database,
  Cloud,
  Wrench,
  Layout,
  Code2,
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    color: 'from-blue-500 to-indigo-500',
    skills: [
      { name: 'Java 17', level: 95 },
    ],
  },
  {
    title: 'Backend Technologies',
    icon: Server,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Spring Boot / MVC', level: 92 },
      { name: 'Quarkus', level: 80 },
      { name: 'Hibernate / JPA', level: 88 },
      { name: 'REST APIs', level: 95 },
      { name: 'Microservices', level: 88 },
      { name: 'Kafka', level: 75 },
      { name: 'Spring Security / JWT', level: 85 },
    ],
  },
  {
    title: 'Database Management',
    icon: Database,
    color: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'Oracle Database', level: 82 },
    ],
  },
  {
    title: 'DevOps & Cloud',
    icon: Cloud,
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'CI/CD Pipelines', level: 82 },
      { name: 'GitHub Actions', level: 80 },
      { name: 'Maven', level: 88 },
      { name: 'AWS', level: 78 },
    ],
  },
  {
    title: 'Frontend',
    icon: Layout,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Angular', level: 78 },
      { name: 'HTML / CSS', level: 82 },
      { name: 'Bootstrap', level: 75 },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    color: 'from-violet-500 to-purple-500',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'JIRA', level: 82 },
      { name: 'Confluence', level: 78 },
      { name: 'WSL', level: 75 },
      { name: 'SonarQube', level: 72 },
    ],
  },
];

export function Skills() {
  return (
    <SectionWrapper id="skills" className="relative">
      <SectionTitle title="Skills & Expertise" subtitle="What I work with" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, catIdx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIdx * 0.1 }}
            className="glass-card-hover p-6 group"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`p-2.5 rounded-xl bg-gradient-to-br ${category.color} group-hover:scale-110 transition-transform duration-300`}
              >
                <category.icon size={20} className="text-white" />
              </div>
              <h3 className="text-base font-bold text-[var(--text-primary)]">
                {category.title}
              </h3>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              {category.skills.map((skill, skillIdx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIdx * 0.1 + skillIdx * 0.05 }}
                >
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-medium text-[var(--text-primary)]">
                      {skill.name}
                    </span>
                    <span className="text-xs text-[var(--text-secondary)]">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.2,
                        delay: catIdx * 0.1 + skillIdx * 0.08,
                        ease: 'easeOut',
                      }}
                      className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
