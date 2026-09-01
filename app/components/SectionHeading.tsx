'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import Reveal from './Reveal';

interface SectionHeadingProps {
  kicker: string;
  title: string;
  align?: 'left' | 'center';
  description?: ReactNode;
  className?: string;
}

/**
 * Cohesive modern section heading used across the portfolio.
 * Provides a small gradient kicker, an animated gradient title and an
 * optional lead paragraph, all respecting reduced-motion preferences.
 */
export default function SectionHeading({
  kicker,
  title,
  align = 'left',
  description,
  className = '',
}: SectionHeadingProps) {
  const prefersReduced = useReducedMotion();
  const alignCls =
    align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col ${alignCls} max-w-3xl ${className}`}>
      <motion.span
        initial={prefersReduced ? false : { opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300/90"
      >
        <span className="h-px w-8 bg-gradient-to-r from-cyan-400 to-transparent" aria-hidden="true" />
        {kicker}
      </motion.span>

      <Reveal direction="up" distance={24} amount={0.4}>
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70">
            {title}
          </span>
        </h2>
      </Reveal>

      {description && (
        <Reveal
          direction="up"
          distance={20}
          delay={0.1}
          amount={0.3}
          className={align === 'center' ? 'mx-auto' : ''}
        >
          <p className="mt-5 text-secondary text-[15px] sm:text-[16px] leading-[1.8] max-w-2xl">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
