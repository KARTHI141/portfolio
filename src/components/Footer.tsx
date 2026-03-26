'use client';

import { Github, Linkedin, Heart, Mail, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold gradient-text">KR</span>
            <span className="text-[var(--text-secondary)] text-sm">
              Backend Software Engineer
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: 'https://github.com/KARTHI141', label: 'GitHub' },
              {
                icon: Linkedin,
                href: 'https://www.linkedin.com/in/karthickraja-g/',
                label: 'LinkedIn',
              },
              {
                icon: Mail,
                href: 'mailto:karthickkrv9635@gmail.com',
                label: 'Email',
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-2.5 rounded-lg text-[var(--text-secondary)] hover:text-accent-blue hover:bg-white/5 transition-all"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="p-2.5 rounded-lg glass-card text-[var(--text-secondary)] hover:text-accent-blue transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--border-color)] text-center">
          <p className="text-sm text-[var(--text-secondary)]">
            Built with{' '}
            <Heart size={14} className="inline text-red-500 fill-red-500 mx-1" />{' '}
            by{' '}
            <span className="font-semibold text-[var(--text-primary)]">
              Karthick Raja
            </span>{' '}
            · © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
