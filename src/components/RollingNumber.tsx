'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';

interface RollingNumberProps {
  value: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}

function Digit({ target, duration, delay }: { target: number; duration: number; delay: number }) {
  return (
    <span
      className="inline-block overflow-hidden align-bottom"
      style={{ height: '1em', lineHeight: '1em', width: '0.6em' }}
    >
      <motion.span
        className="flex flex-col items-center"
        initial={{ y: '0%' }}
        animate={{ y: `${-target * 10}%` }}
        transition={{
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        style={{ willChange: 'transform' }}
      >
        {Array.from({ length: 10 }, (_, i) => (
          <span
            key={i}
            className="block text-center"
            style={{ height: '1em', lineHeight: '1em' }}
          >
            {i}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

export function RollingNumber({
  value,
  decimals = 0,
  suffix = '',
  prefix = '',
  className = '',
  duration = 1.5,
}: RollingNumberProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    if (isInView && !triggered) {
      setTriggered(true);
    }
  }, [isInView, triggered]);

  const formatted = value.toFixed(decimals);
  const allChars = `${prefix}${formatted}${suffix}`;

  // Stable delays per character
  const delays = useMemo(
    () => allChars.split('').map((_, i) => i * 0.08),
    [allChars]
  );

  return (
    <div ref={ref} className={`inline-flex items-baseline ${className}`}>
      {triggered
        ? allChars.split('').map((char, i) => {
            const parsed = parseInt(char, 10);
            if (!isNaN(parsed)) {
              return (
                <Digit
                  key={`d-${i}`}
                  target={parsed}
                  duration={duration}
                  delay={delays[i]}
                />
              );
            }
            return (
              <span key={`c-${i}`} className="inline-block">
                {char}
              </span>
            );
          })
        : <span style={{ visibility: 'hidden' }}>{allChars}</span>}
    </div>
  );
}
