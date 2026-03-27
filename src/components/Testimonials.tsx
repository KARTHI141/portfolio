'use client';

import { motion } from 'framer-motion';
import { SectionWrapper, SectionTitle } from './SectionWrapper';
import { Quote, Star, Sprout } from 'lucide-react';

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

export function Testimonials() {
  return (
    <SectionWrapper id="testimonials">
      <SectionTitle title="Testimonials" subtitle="What others say" />

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
