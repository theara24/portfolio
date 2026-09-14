'use client';

import { HeroContent } from '@/app/components/canvas/hero-content';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <div ref={ref} className="relative flex h-full w-full overflow-hidden">
      {/* Background: soft radial gradients */}
      <motion.div
        style={{
          y,
          background: [
            'radial-gradient(circle at 20% 20%, rgba(128,90,255,0.18), transparent 40%)',
            'radial-gradient(circle at 80% 30%, rgba(34,211,238,0.14), transparent 42%)',
            'linear-gradient(to bottom, #0b0a1f 0%, #050816 100%)',
          ].join(','),
        }}
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      />
      <HeroContent />
    </div>
  );
};

export default Hero;
