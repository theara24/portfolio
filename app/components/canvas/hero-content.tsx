'use client';

import { ArrowRight, Send, Sparkles } from 'lucide-react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useLoading } from '../PageLoaderProvider';

/* ---------------- CODE TERMINAL (Typing Effect) ---------------- */
const CodeTerminal = () => {
  const codeSegments = useMemo(
    () => [
      "const developer = {",
      "  name: 'Theara Chim',",
      "  role: 'Backend-Focused Full-Stack Developer',",
      "  experience: 'Programming since 2023',",
      "  professional: 'Backend development since 2025',",
      "  expertise: [",
      "    'Backend Development', 'API Engineering',",
      "    'Database Systems', 'Distributed Systems',",
      "    'Full-Stack Development',",
      "  ],",
      "  primaryStack: [",
      "    'TypeScript', 'Node.js', 'Express.js',",
      "    'PostgreSQL', 'Redis', 'RabbitMQ', 'Docker',",
      "  ],",
      "  availableForWork: true,",
      "};",
    ],
    []
  );

  const { isLoaded } = useLoading();
  const [displayedCode, setDisplayedCode] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [started, setStarted] = useState(false);

  // Only begin the typing animation once the initial loading animation has
  // finished (isLoaded becomes true), so the console feels sequenced.
  useEffect(() => {
    if (isLoaded) {
      setStarted(true);
    }
  }, [isLoaded]);

  const startedRef = useRef(false);
  useEffect(() => {
    if (!started || startedRef.current) return;
    if (currentLine < codeSegments.length) {
      if (currentChar < codeSegments[currentLine].length) {
        const timeout = setTimeout(() => {
          setDisplayedCode((prev) => {
            const newLines = [...prev];
            newLines[currentLine] =
              (newLines[currentLine] || '') +
              codeSegments[currentLine][currentChar];
            return newLines;
          });
          setCurrentChar((prev) => prev + 1);
        }, 1);
        return () => clearTimeout(timeout);
      } else {
        setCurrentLine((prev) => prev + 1);
        setCurrentChar(0);
      }
    } else {
      startedRef.current = true;
    }
  }, [started, currentChar, currentLine, codeSegments]);

  return (
    <div className="w-full max-w-md rounded-xl border border-white/10 bg-[#0b0a1f]/90 shadow-2xl shadow-purple-900/20 overflow-hidden">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
        </div>
        <span className="ml-2 font-mono text-xs text-white/40">developer.js</span>
      </div>
      <pre className="p-5 font-mono text-xs leading-relaxed text-gray-200 whitespace-pre-wrap">
        {displayedCode.map((line, index) =>
          index % 4 === 1 ? (
            // Simple line coloring: keys on odd lines
            <div key={index} className="text-white/85">
              {line}
            </div>
          ) : index % 4 === 2 ? (
            <div key={index} className="text-green-300/80">
              {line}
            </div>
          ) : (
            <div key={index} className="text-purple-300/90">
              {line}
            </div>
          )
        )}
        {!started ? (
          <span className="text-white/30">
            <motion.span
              className="inline-block h-4 w-2 translate-y-0.5 bg-cyan-400"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.7 }}
              aria-hidden
            />
            <span className="ml-2 italic">initializing…</span>
          </span>
        ) : (
          <motion.span
            className="inline-block h-4 w-2 translate-y-0.5 bg-cyan-400"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.7 }}
            aria-hidden
          />
        )}
      </pre>
    </div>
  );
};

/* ---------------- TECH CHIPS ---------------- */
const CORE_TECH = [
  'TypeScript',
  'Node.js',
  'Express.js',
  'PostgreSQL',
  'Redis',
  'RabbitMQ',
  'Docker',
];

/* ---------------- HERO CONTENT ---------------- */
export const HeroContent = () => {
  const prefersReduced = useReducedMotion();

  const container: Variants = prefersReduced
    ? { hidden: {}, show: {} }
    : {
        hidden: {},
        show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
      };

  const item: Variants = prefersReduced
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
        },
      };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative z-20 flex min-h-[100svh] w-full items-center justify-center px-6 sm:px-10 lg:px-0 py-24"
    >
      <div className="container-px grid w-full items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Text / CTAs */}
        <motion.div variants={item} className="flex flex-col items-start">
          {/* Badge */}
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-1.5 text-xs font-medium text-purple-200"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#b49bff]" aria-hidden />
            Welcome to my portfolio
          </motion.span>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-black leading-[1.05] text-white sm:text-6xl lg:text-7xl"
          >
            <span className="block text-lg font-medium text-white/50 sm:text-xl">
              Hello, I&apos;m
            </span>
            <span className="text-gradient-teal mt-2 block">Theara Chim</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={item}
            className="mt-4 text-base font-semibold text-cyan-300 sm:text-lg"
          >
            Backend-Focused Full-Stack Developer
          </motion.p>

          {/* Description */}
          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-sm leading-[1.8] text-gray-300 sm:text-base"
          >
            I build reliable backend services, REST APIs, distributed systems,
            and full-stack applications. My core stack is TypeScript, Node.js,
            Express.js, PostgreSQL, Redis, RabbitMQ, and Docker — with hands-on
            experience across React, Next.js, and more.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 px-6 py-3 text-sm font-semibold text-white transition hover:from-purple-500 hover:to-cyan-500 hover:shadow-lg hover:shadow-purple-500/25"
            >
              View My Work
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.07]"
            >
              <Send className="h-4 w-4" aria-hidden />
              Contact Me
            </a>
          </motion.div>

          {/* Tech chips */}
          <motion.ul
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-2"
            aria-label="Core technologies"
          >
            {CORE_TECH.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/70"
              >
                {tech}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Terminal (hidden on small heights/extra small screens for performance) */}
        <motion.div
          variants={item}
          className="hidden justify-center md:flex lg:justify-end"
          aria-hidden
        >
          <CodeTerminal />
        </motion.div>
      </div>
    </motion.div>
  );
};
