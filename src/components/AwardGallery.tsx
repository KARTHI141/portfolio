'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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

// Duplicate for seamless infinite scroll
const allImages = [...awardImages, ...awardImages];

export function AwardGallery() {
  return (
    <section className="py-12 md:py-16 overflow-hidden relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/[0.03] via-transparent to-accent-purple/[0.03]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-blue mb-2">
            Gallery
          </p>
          <h3 className="text-2xl md:text-3xl font-bold gradient-text">
            Award Moments
          </h3>
        </motion.div>
      </div>

      {/* Infinite Scrolling Feed */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          {allImages.map((img, index) => (
            <div
              key={`${img.src}-${index}`}
              className="flex-shrink-0 w-[280px] md:w-[350px] group"
            >
              <div className="glass-card overflow-hidden rounded-2xl transition-all duration-500 group-hover:border-accent-blue/30 group-hover:shadow-xl group-hover:shadow-accent-blue/10">
                {/* Image */}
                <div className="relative h-[200px] md:h-[250px] overflow-hidden bg-white/5">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="350px"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Caption */}
                <div className="p-4">
                  <p className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-accent-blue transition-colors">
                    {img.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
