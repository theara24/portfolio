'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface PageLoaderProps {
  onComplete: () => void;
}

type Phase = 'loading' | 'name' | 'role' | 'exit';

export default function PageLoader({ onComplete }: PageLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<Phase>('loading');
  const [done, setDone] = useState(false);

  const isNameVisible = phase === 'name' || phase === 'role' || phase === 'exit';
  const isRoleVisible = phase === 'role' || phase === 'exit';

  // Animated progress counter
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) {
      // Reduced motion: reveal immediately, no long preloader
      setDone(true);
      onComplete();
      return;
    }

    let raf: number;
    let start = performance.now();
    const duration = 1000;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(Math.floor(pct));
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  // Sequence of phases — runs the full timeline once when loading completes.
  // Uses a ref guard so intermediate re-renders (from phase changes) do NOT
  // tear down the scheduled timeouts.
  const startedRef = useRef(false);

  useEffect(() => {
    if (progress >= 100 && !startedRef.current) {
      startedRef.current = true;
      const t1 = setTimeout(() => setPhase('name'), 150);
      const t2 = setTimeout(() => setPhase('role'), 600);
      const t3 = setTimeout(() => setPhase('exit'), 1100);
      const t4 = setTimeout(() => {
        setDone(true);
        onComplete();
      }, 1500);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
      };
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050816]"
        >
          <div className="relative flex flex-col items-center gap-6">
            {/* Progress counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: phase === 'loading' ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute -top-16 text-sm font-mono text-white/30 tracking-widest"
            >
              {String(progress).padStart(3, '0')}
            </motion.div>

            {/* Progress bar */}
            <div className="w-48 h-px bg-white/10 overflow-hidden">
              <motion.div
                className="h-full bg-white/60"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.05, ease: 'linear' }}
              />
            </div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={
                isNameVisible
                  ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                  : { opacity: 0, y: 20, filter: 'blur(8px)' }
              }
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
            >
              Theara Chim
            </motion.h1>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
              animate={
                isRoleVisible
                  ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                  : { opacity: 0, y: 12, filter: 'blur(6px)' }
              }
              transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
              className="text-sm sm:text-base text-white/40 tracking-widest uppercase font-light"
            >
              Backend-Focused Full-Stack Developer
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
