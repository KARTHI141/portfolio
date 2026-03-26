'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { RollingNumber } from './RollingNumber';
import { Zap, Server, Cloud, Award } from 'lucide-react';

const highlights = [
  {
    icon: Zap,
    number: 13,
    suffix: 'x',
    title: 'API Performance',
    description: 'Optimized from 26s to 2s',
    gradient: 'from-yellow-500 to-orange-500',
    bg: 'bg-yellow-500/10',
  },
  {
    icon: Server,
    number: 156,
    suffix: '+',
    title: 'Contributions',
    description: 'GitHub contributions this year',
    gradient: 'from-accent-blue to-accent-purple',
    bg: 'bg-accent-blue/10',
  },
  {
    icon: Cloud,
    number: 30,
    suffix: '%',
    title: 'Workflow Boost',
    description: 'Development efficiency improved',
    gradient: 'from-accent-cyan to-accent-emerald',
    bg: 'bg-accent-cyan/10',
  },
  {
    icon: Award,
    number: 3,
    suffix: '',
    title: 'Awards Won',
    description: 'Recognized for excellence',
    gradient: 'from-purple-500 to-pink-500',
    bg: 'bg-purple-500/10',
  },
];

export function ValueProposition() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="relative py-12 md:py-16 overflow-hidden border-y border-[var(--border-color)]">
      <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 via-transparent to-accent-purple/5" />
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="group relative"
            >
              <div className="p-5 md:p-6 rounded-2xl glass-card-hover text-center">
                <div className={`inline-flex p-2.5 rounded-xl ${item.bg} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon size={22} className="text-white" style={{ filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.3))' }} />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-1">
                  <RollingNumber value={item.number} suffix={item.suffix} duration={1.8} />
                </div>
                <h3 className="text-sm font-bold text-[var(--text-primary)] mb-0.5">
                  {item.title}
                </h3>
                <p className="text-xs text-[var(--text-secondary)]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
