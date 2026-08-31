'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  once?: boolean;
  amount?: number;
  blur?: boolean;
}

export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 30,
  className = '',
  once = true,
  amount = 0.2,
  blur = true,
}: RevealProps) {
  const prefersReduced = useReducedMotion();

  const offset: { x?: number; y?: number } = {};
  if (direction === 'up') offset.y = distance;
  else if (direction === 'down') offset.y = -distance;
  else if (direction === 'left') offset.x = distance;
  else if (direction === 'right') offset.x = -distance;

  const hidden: Variants['hidden'] = blur
    ? ({ opacity: 0, filter: 'blur(6px)', ...offset } as Variants['hidden'])
    : ({ opacity: 0, ...offset } as Variants['hidden']);

  const variants: Variants = {
    hidden,
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: prefersReduced ? 0.1 : duration,
        delay: prefersReduced ? 0 : delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
