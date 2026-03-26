'use client';

import { motion } from 'framer-motion';
import { SectionWrapper, SectionTitle } from './SectionWrapper';
import { Quote, Star, Sprout, Award, Heart } from 'lucide-react';

const testimonials = [
  {
    quote:
      "And the best fresher award goes to Karthick Raja G. I've never seen a fresher so responsible in carrying out his duties. All I want to tell you is that you have a knack for programming and you have a long way to go and a few years down the line you'll be one of the best developers in the organization. Keep your thirst for learning alive forever as you are now.",
    author: 'Saraswathi Ramachandran',
    role: 'Manager at Dedalus',
    category: 'Growth Recognition',
    icon: Sprout,
    gradient: 'from-emerald-500 to-teal-500',
  },
];

const highlights = [
  {
    title: 'Dedalus Utsav 2025',
    subtitle: 'Winner',
    description:
      'Won the prestigious Dedalus Utsav 2025 competition, recognized for outstanding technical skills and innovation in front of senior leadership including global executives.',
    icon: '🏆',
    gradient: 'from-yellow-500 via-amber-500 to-orange-500',
  },
  {
    title: 'DNA Core Values Award',
    subtitle: 'Achieving Excellence Together',
    description:
      'Nominated for the Dedalus DNA Core Value Awards 2025 as recognition of outstanding commitment to Dedalus\' Core Value — signed by Group Chief HR Officer and CEO.',
    icon: '🌟',
    gradient: 'from-blue-500 via-indigo-500 to-purple-500',
  },
  {
    title: 'Best Fresher Award',
    subtitle: 'Growth Recognition',
    description:
      'Recognized as the best fresher at Dedalus for exceptional responsibility, programming talent, and continuous learning mindset.',
    icon: '🌱',
    gradient: 'from-emerald-500 to-green-500',
  },
];

export function Testimonials() {
  return (
    <SectionWrapper id="testimonials">
      <SectionTitle title="Recognition & Impact" subtitle="What others say" />

      {/* Award Highlights — Visual Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {highlights.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative glass-card p-6 overflow-hidden"
          >
            {/* Animated gradient border top */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient}`} />
            
            {/* Glow effect on hover */}
            <div className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 rounded-2xl`} />

            <div className="relative z-10">
              <motion.span 
                className="text-4xl block mb-4"
                animate={{ rotate: [0, -10, 10, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                {item.icon}
              </motion.span>
              
              <h4 className="text-lg font-bold text-[var(--text-primary)] mb-1">
                {item.title}
              </h4>
              <p className={`text-sm font-semibold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-3`}>
                {item.subtitle}
              </p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Testimonial Quote */}
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative glass-card p-8 md:p-12 overflow-hidden">
            {/* Decorative gradient blob */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-br from-accent-emerald/10 to-accent-cyan/10 rounded-full blur-3xl" />

            {/* Quote icon */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${testimonial.gradient}`}>
                  <testimonial.icon size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent-emerald">
                    {testimonial.category}
                  </p>
                </div>
              </div>

              <Quote size={40} className="text-accent-blue/20 mb-4" />
              
              <blockquote className="text-lg md:text-xl text-[var(--text-primary)] leading-relaxed font-medium italic mb-8">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4 pt-6 border-t border-[var(--border-color)]">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-[var(--text-primary)]">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {testimonial.role}
                  </p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </SectionWrapper>
  );
}
