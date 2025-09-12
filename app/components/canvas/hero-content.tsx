'use client';

import { SparklesIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { FlipWords } from '@/app/components/canvas/FlipWords';
import { useMemo } from 'react';
import { useEffect, useState } from 'react';
import {
  fadeIn,
  textVariant,
  zoomIn,
  staggerContainer,
} from '@/app/utils/motion';

/* ---------------- CODE ANIMATION (Typing Effect) ---------------- */
const CodeAnimation = () => {
  const codeSegments = useMemo(
    () => [
      "<span class='text-purple-400'>const</span> <span class='text-gray-300'>profile</span> <span class='text-purple-400'>=</span> <span class='text-purple-400'>{</span>",
      "  <span class='text-gray-300'>name</span>: <span class='text-green-400'>'Nazmul Hossain'</span>,",
      "  <span class='text-gray-300'>title</span>: <span class='text-green-400'>'Full-Stack Developer | Cloud Enthusiast | Problem Solver'</span>,",
      "  <span class='text-gray-300'>skills</span>: [",
      "    <span class='text-green-400'>'React'</span>, <span class='text-green-400'>'NextJS'</span>, <span class='text-green-400'>'Redux'</span>, <span class='text-green-400'>'Express'</span>,",
      "    <span class='text-green-400'>'MySQL'</span>, <span class='text-green-400'>'MongoDB'</span>, <span class='text-green-400'>'Docker'</span>,",
      "    <span class='text-green-400'>'AWS'</span>, <span class='text-green-400'>'TypeScript'</span>,",
      "    <span class='text-green-400'>'GraphQL'</span>, <span class='text-green-400'>'Git'</span>, <span class='text-green-400'>'Linux'</span>,",
      "    <span class='text-green-400'>'Discord Development'</span>",
      '  ],',
      "  <span class='text-gray-300'>hardWorker</span>: <span class='text-purple-400'>true</span>,",
      "  <span class='text-gray-300'>quickLearner</span>: <span class='text-purple-400'>true</span>,",
      "  <span class='text-gray-300'>problemSolver</span>: <span class='text-purple-400'>true</span>,",
      "  <span class='text-gray-300'>yearsOfExperience</span>: <span class='text-purple-400'>4</span>,",
      "  <span class='text-gray-300'>hireable</span>: <span class='text-purple-400'>function</span>() <span class='text-purple-400'>{</span>",
      "    <span class='text-purple-400'>return</span> (",
      "      <span class='text-purple-400'>this</span>.<span class='text-gray-300'>hardWorker</span> &&",
      "      <span class='text-purple-400'>this</span>.<span class='text-gray-300'>problemSolver</span> &&",
      "      <span class='text-purple-400'>this</span>.<span class='text-gray-300'>skills</span>.<span class='text-gray-300'>length</span> >= <span class='text-purple-400'>5</span> &&",
      "      <span class='text-purple-400'>this</span>.<span class='text-gray-300'>yearsOfExperience</span> >= <span class='text-purple-400'>3</span>",
      '    );',
      "  <span class='text-purple-400'>}</span>",
      "<span class='text-purple-400'>}</span>;",
    ],
    []
  );

  const [displayedCode, setDisplayedCode] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
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
        }, 1); // ⚡ ultra-fast typing
        return () => clearTimeout(timeout);
      } else {
        setCurrentLine((prev) => prev + 1);
        setCurrentChar(0);
      }
    }
  }, [currentChar, currentLine, codeSegments]);

  return (
    <motion.div
      variants={fadeIn('left', 'spring', 1.2, 0.05)}
      className="p-2 sm:p-4 bg-gray-900 rounded-lg shadow-lg border border-gray-800 w-full max-w-[320px] sm:max-w-[420px] md:max-w-[480px] overflow-hidden"
    >
      {/* Mac-style header */}
      <div className="flex items-center bg-gray-800 p-1 sm:p-2 rounded-t-lg">
        <div className="flex space-x-1 sm:space-x-2">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="ml-2 sm:ml-4 text-xs sm:text-sm text-gray-400 font-mono">
          developer.js
        </span>
      </div>

      {/* Typing Code Content */}
      <pre className="p-2 sm:p-4 text-gray-200 whitespace-pre-wrap font-mono text-xs sm:text-sm leading-relaxed">
        {displayedCode.map((line, index) => (
          <div key={index} dangerouslySetInnerHTML={{ __html: line }} />
        ))}

        {/* Cursor */}
        <motion.span
          className="inline-block w-1 sm:w-2 h-3 sm:h-4 bg-purple-500 ml-1"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.3 }}
        />
      </pre>
    </motion.div>
  );
};

/* ---------------- HERO CONTENT ---------------- */
export const HeroContent = () => {
  return (
    <motion.div
      variants={staggerContainer(0.1, 0.1)}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center justify-center px-2 sm:px-4 md:px-10 lg:px-20 mt-10 sm:mt-20 md:mt-40 w-full z-20"
    >
      <div className="flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-6 max-w-4xl sm:max-w-6xl w-full">
        {/* Text and Button Column */}
        <div className="flex flex-col gap-3 sm:gap-5 text-start w-full sm:w-1/2">
          {/* Badge */}
          <motion.div
            variants={textVariant(0.2)}
            className="Welcome-box py-1 sm:py-2 px-2 sm:px-3 border border-[#7042f88b] opacity-90 bg-gradient-to-r from-purple-900/50 to-cyan-900/50 rounded-lg flex items-center"
          >
            <SparklesIcon className="text-[#b49bff] mr-1 sm:mr-2 h-4 sm:h-5 w-4 sm:w-5" />
            <h1 className="Welcome-text text-xs sm:text-sm text-white">
              Welcome to my Portfolio
            </h1>
          </motion.div>

          {/* Headline */}
          <motion.div
            variants={fadeIn('right', 'spring', 0.5, 0.05)}
            className="flex flex-col gap-2 sm:gap-4 mt-4 sectionHeadText text-white"
          >
            <span>
              Hello I am<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Thear Chim
              </span>{' '}
            </span>
          </motion.div>

          {/* Role badge with FlipWords */}
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-2 sm:mb-3 backdrop-blur-sm">
            <span className="text-blue-400 text-sm sm:text-base">🚀</span>
            <span>
              <FlipWords
                className={'text-lg sm:text-xl text-blue-400 font-medium'}
                words={[
                  'Full-Stack Development',
                  'React & Next.js',
                  'TypeScript & JavaScript',
                  'Node.js & Express.js',
                  'MySQL & MongoDB',
                  'Docker & AWS',
                  'UI/UX Design with Figma',
                  'Responsive Web Development',
                  'Problem Solving & Quick Learning',
                ]}
              />
            </span>
          </div>

          {/* Description */}
          <motion.p
            variants={fadeIn('right', 'spring', 0.8, 0.75)}
            className="text-sm sm:text-base md:text-lg text-gray-300 my-2 sm:my-5 max-w-[400px] sm:max-w-[500px]"
          >
            I&apos;m Full-Stack Developer passionate about building web and
            mobile applications. I specialize in creating responsive, scalable,
            and user-friendly solutions. Explore my projects and skills to see
            what I can deliver.
          </motion.p>

          {/* Button */}
          <motion.a
            variants={zoomIn(1, 0.5)}
            className="py-1 sm:py-2 px-3 sm:px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[150px] sm:max-w-[200px] bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
          >
            Learn more
          </motion.a>
        </div>

        {/* Code Animation Column */}
        <CodeAnimation />
      </div>
    </motion.div>
  );
};
