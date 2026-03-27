'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SectionWrapper, SectionTitle } from './SectionWrapper';
import { Award, BookOpen, CheckCircle2 } from 'lucide-react';

const awardImages = [
  {
    src: '/awards/utsav-stage.svg',
    alt: 'Karthick Raja receiving Dedalus Utsav 2025 Winner award on stage',
    caption: 'Dedalus Utsav 2025 — Winner',
  },
  {
    src: '/awards/utsav-trophy.svg',
    alt: 'Dedalus Utsav 2025 Winner Trophy',
    caption: 'Winner Trophy',
  },
  {
    src: '/awards/dna-certificate.svg',
    alt: 'Dedalus DNA Core Values Award 2025 Certificate',
    caption: 'DNA Core Values Award 2025',
  },
  {
    src: '/awards/best-fresher.svg',
    alt: 'Best Fresher Recognition — Growth Award',
    caption: 'Best Fresher — Growth Recognition',
  },
];

const allAwardImages = [...awardImages, ...awardImages];

const certifications = [
  {
    title: 'AWS Certified Developer – Associate',
    issuer: 'Amazon Web Services',
    icon: '☁️',
    gradient: 'from-orange-500 to-yellow-500',
    highlight: true,
  },
  {
    title: 'Java 17 Masterclass - Start Coding in 2024',
    issuer: 'Udemy',
    icon: '☕',
    gradient: 'from-red-500 to-orange-500',
    highlight: false,
  },
  {
    title: 'Angular - The Complete Guide (2023 Edition)',
    issuer: 'Udemy',
    icon: '🅰️',
    gradient: 'from-red-600 to-pink-500',
    highlight: false,
  },
  {
    title: 'Build Responsive Real-World Websites with HTML and CSS',
    issuer: 'Udemy',
    icon: '🌐',
    gradient: 'from-blue-500 to-cyan-500',
    highlight: false,
  },
  {
    title: 'My SQL Basics',
    issuer: 'Great Learning',
    icon: '🗄️',
    gradient: 'from-teal-500 to-emerald-500',
    highlight: false,
  },
];

const awards = [
  {
    title: 'Dedalus Utsav 2025 — Winner',
    issuer: 'Dedalus Global Competition',
    description: 'Won the prestigious company-wide competition, recognized by senior global leadership for outstanding technical innovation.',
    icon: '🏆',
    gradient: 'from-yellow-500 to-amber-500',
  },
  {
    title: 'DNA Core Values Award 2025',
    issuer: 'Achieving Excellence Together',
    description: 'Nominated by Group Chief HR Officer & CEO for outstanding commitment to Dedalus\' core values.',
    icon: '🌟',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Best Fresher Recognition',
    issuer: 'Dedalus — Manager Recognition',
    description: '"I\'ve never seen a fresher so responsible... you have a knack for programming and you\'ll be one of the best developers in the organization."',
    icon: '🌱',
    gradient: 'from-emerald-500 to-green-500',
  },
];

export function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <SectionTitle title="Achievements & Certifications" subtitle="Recognition" />

      {/* Awards */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-8">
          <Award size={20} className="text-accent-blue" />
          <h3 className="text-xl font-bold text-[var(--text-primary)]">Awards & Recognition</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-card-hover p-6 group relative overflow-hidden"
            >
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${award.gradient} opacity-60 group-hover:opacity-100 transition-opacity`}
              />
              <div className={`absolute -inset-2 bg-gradient-to-r ${award.gradient} opacity-0 group-hover:opacity-[0.06] blur-2xl transition-opacity duration-500 rounded-2xl`} />
              <div className="relative z-10">
                <motion.span 
                  className="text-3xl block mb-3"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {award.icon}
                </motion.span>
                <h4 className="font-bold text-[var(--text-primary)] mb-1">
                  {award.title}
                </h4>
                <p className="text-xs text-accent-blue font-semibold mb-2">
                  {award.issuer}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {award.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Award Gallery */}
      <div className="mb-16 overflow-hidden relative">
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ x: { duration: 30, repeat: Infinity, ease: 'linear' } }}
          >
            {allAwardImages.map((img, index) => (
              <div key={`${img.src}-${index}`} className="flex-shrink-0 w-[280px] md:w-[350px] group">
                <div className="glass-card overflow-hidden rounded-2xl transition-all duration-500 group-hover:border-accent-blue/30 group-hover:shadow-xl group-hover:shadow-accent-blue/10">
                  <div className="relative h-[200px] md:h-[250px] overflow-hidden bg-white/5">
                    <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="350px" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-accent-blue transition-colors">{img.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Certifications */}
      <div>
        <div className="flex items-center gap-2 mb-8">
          <BookOpen size={20} className="text-accent-purple" />
          <h3 className="text-xl font-bold text-[var(--text-primary)]">
            Certifications
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className={`glass-card-hover p-5 group ${cert.highlight ? 'ring-1 ring-accent-blue/20' : ''}`}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">{cert.icon}</span>
                <div>
                  <h4 className="text-sm font-bold text-[var(--text-primary)] group-hover:text-accent-blue transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">
                    {cert.issuer}
                  </p>
                  {cert.highlight && (
                    <div className="flex items-center gap-1 mt-2">
                      <CheckCircle2 size={12} className="text-accent-emerald" />
                      <span className="text-[10px] font-semibold text-accent-emerald">Verified</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
