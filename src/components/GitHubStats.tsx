'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { RollingNumber } from './RollingNumber';
import { Github, GitCommit, FolderGit2, Users, Activity, Calendar } from 'lucide-react';

interface GitHubStatsProps {
  stats: {
    totalRepos: number;
    totalCommits: number;
    followers: number;
    yearlyContributions: number;
    contributionData: number[];
  };
}

function ContributionGraph({ data }: { data: number[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });

  const weeks = data.length > 0 ? data : Array(52).fill(0);

  const getColor = (value: number) => {
    if (value === 0) return 'bg-white/[0.03]';
    if (value <= 2) return 'bg-emerald-900/60';
    if (value <= 5) return 'bg-emerald-700/70';
    if (value <= 10) return 'bg-emerald-500/80';
    return 'bg-emerald-400';
  };

  return (
    <div ref={ref} className="w-full">
      <div className="flex items-center gap-2 mb-4">
        <Calendar size={14} className="text-[var(--text-secondary)]" />
        <span className="text-xs text-[var(--text-secondary)]">
          Contribution activity (last year)
        </span>
      </div>
      <div className="flex gap-[3px] overflow-hidden">
        {weeks.map((weekVal, weekIdx) => {
          const days = Array(7)
            .fill(0)
            .map((_, dayIdx) => {
              if (weekVal === 0) return 0;
              const base = weekVal / 7;
              const variance = Math.sin((weekIdx * 7 + dayIdx) * 2.5) * base;
              return Math.max(0, Math.round(base + variance));
            });

          return (
            <div key={weekIdx} className="flex flex-col gap-[3px]">
              {days.map((dayVal, dayIdx) => (
                <motion.div
                  key={`${weekIdx}-${dayIdx}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    delay: weekIdx * 0.015 + dayIdx * 0.005,
                    duration: 0.3,
                    ease: 'easeOut',
                  }}
                  className={`w-[10px] h-[10px] sm:w-[11px] sm:h-[11px] rounded-[2px] ${getColor(dayVal)} transition-colors duration-200 hover:ring-1 hover:ring-accent-blue/50`}
                  title={`${dayVal} contributions`}
                />
              ))}
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-2 mt-3 justify-end">
        <span className="text-[10px] text-[var(--text-secondary)]">Less</span>
        {[0, 2, 5, 8, 12].map((v) => (
          <div key={v} className={`w-[10px] h-[10px] rounded-[2px] ${getColor(v)}`} />
        ))}
        <span className="text-[10px] text-[var(--text-secondary)]">More</span>
      </div>
    </div>
  );
}

export function GitHubStats({ stats }: GitHubStatsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const statItems = [
    { icon: FolderGit2, label: 'Public Repos', value: stats.totalRepos, color: 'text-accent-blue', bg: 'bg-accent-blue/10' },
    { icon: Activity, label: 'Yearly Contributions', value: stats.yearlyContributions, color: 'text-accent-emerald', bg: 'bg-accent-emerald/10' },
    { icon: GitCommit, label: 'Recent Commits', value: stats.totalCommits, color: 'text-accent-purple', bg: 'bg-accent-purple/10' },
    { icon: Users, label: 'Followers', value: stats.followers, color: 'text-accent-cyan', bg: 'bg-accent-cyan/10' },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/[0.02] to-transparent" />
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-[var(--text-secondary)] mb-4"
          >
            <Github size={16} />
            <span>Open Source Activity</span>
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold gradient-text"
          >
            GitHub Contributions
          </motion.h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {statItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: index * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card-hover p-5 md:p-6 text-center group"
            >
              <div className={`inline-flex p-2.5 rounded-xl ${item.bg} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon size={20} className={item.color} />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-1">
                <RollingNumber value={item.value} duration={2} />
              </div>
              <p className="text-xs text-[var(--text-secondary)] font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="glass-card p-6 md:p-8 overflow-x-auto"
        >
          <ContributionGraph data={stats.contributionData} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-center mt-8"
        >
          <a href="https://github.com/KARTHI141" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass-card-hover text-sm font-medium text-[var(--text-secondary)] hover:text-accent-blue transition-colors">
            <Github size={16} /> View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}
