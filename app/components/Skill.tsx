'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import {
  Blocks,
  Boxes,
  Bot,
  Cloud,
  Code2,
  Cpu,
  Database,
  Layout,
  Network,
  Plug,
  Terminal,
  Wrench,
} from 'lucide-react';
import { isWebGLSupported } from '@/app/utils/webgl';
import WebGLFallback from '@/app/components/WebGLFallback';
import Reveal from '@/app/components/Reveal';

import {
  FaBootstrap,
  FaDocker,
  FaGitAlt,
  FaJava,
  FaLinux,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
} from 'react-icons/fa';
import {
  SiAngular,
  SiDotnet,
  SiExpress,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiPortainer,
  SiPostgresql,
  SiRabbitmq,
  SiRedis,
  SiSharp,
  SiSocketdotio,
  SiTailwindcss,
  SiTelegram,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si';
import { BsFileEarmarkCode, BsGrid1X2 } from 'react-icons/bs';
import { FcWorkflow } from 'react-icons/fc';

const textVariant = () => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
});

type Skill = { name: string; icon: React.ReactNode };
type Category = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  color: string;
  skills: Skill[];
};

/* Per-category accent styling for a cohesive, modern look. */
const ACCENTS: Record<
  string,
  { text: string; chip: string; dot: string; ring: string; glow: string }
> = {
  'text-green-400': {
    text: 'text-emerald-300',
    chip: 'from-emerald-500/25 to-teal-500/10 border-emerald-400/30',
    dot: 'bg-emerald-400',
    ring: 'hover:border-emerald-400/50 hover:shadow-emerald-500/10',
    glow: 'via-emerald-400/20',
  },
  'text-orange-400': {
    text: 'text-orange-300',
    chip: 'from-orange-500/25 to-amber-500/10 border-orange-400/30',
    dot: 'bg-orange-400',
    ring: 'hover:border-orange-400/50 hover:shadow-orange-500/10',
    glow: 'via-orange-400/20',
  },
  'text-cyan-400': {
    text: 'text-cyan-300',
    chip: 'from-cyan-500/25 to-sky-500/10 border-cyan-400/30',
    dot: 'bg-cyan-400',
    ring: 'hover:border-cyan-400/50 hover:shadow-cyan-500/10',
    glow: 'via-cyan-400/20',
  },
  'text-blue-400': {
    text: 'text-blue-300',
    chip: 'from-blue-500/25 to-indigo-500/10 border-blue-400/30',
    dot: 'bg-blue-400',
    ring: 'hover:border-blue-400/50 hover:shadow-blue-500/10',
    glow: 'via-blue-400/20',
  },
  'text-purple-400': {
    text: 'text-purple-300',
    chip: 'from-purple-500/25 to-violet-500/10 border-purple-400/30',
    dot: 'bg-purple-400',
    ring: 'hover:border-purple-400/50 hover:shadow-purple-500/10',
    glow: 'via-purple-400/20',
  },
};

const DEFAULT_ACCENT = ACCENTS['text-blue-400'];

const SkillCard: React.FC<{
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  skills: Skill[];
  color: string;
  emphasized?: boolean;
  wide?: boolean;
}> = ({ icon: Icon, title, skills, color, emphasized = false, wide = false }) => {
  const accent = ACCENTS[color] ?? DEFAULT_ACCENT;

  return (
    <Card
      className={`group card-lift relative flex h-full flex-col overflow-hidden bg-gradient-to-b from-[#12102a] to-[#0c0a1f] backdrop-blur ${
        wide ? 'lg:flex-row lg:items-center lg:gap-8 lg:px-3' : ''
      } ${
        emphasized
          ? `border-cyan-400/30 ${accent.ring} shadow-lg shadow-cyan-500/5`
          : `border-white/10 ${accent.ring}`
      }`}
    >
      {/* Top accent edge */}
      <div
        className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${accent.glow} to-transparent opacity-70`}
      />
      {/* Category glow blob */}
      <div
        className={`pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-[0.15] blur-3xl transition-opacity duration-500 group-hover:opacity-30 ${
          emphasized ? 'bg-cyan-400' : accent.dot
        }`}
      />

      <CardContent
        className={`relative z-10 flex grow flex-col gap-5 p-6 pt-7 ${
          wide ? 'lg:flex-row lg:items-center lg:gap-8 lg:py-6' : ''
        }`}
      >
        {/* Header */}
        <div className={`flex items-center gap-3 ${wide ? 'lg:w-64 lg:shrink-0' : ''}`}>
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border bg-gradient-to-br ${accent.chip} ${accent.text} transition-transform duration-300 group-hover:scale-110`}
          >
            <Icon className="h-6 w-6" />
          </div>
          <div className="min-w-0">
            <h3 className="text-lg leading-tight font-bold text-white">
              {title}
            </h3>
          </div>
        </div>

        {/* Divider + count */}
        <div className={`flex w-full items-center gap-3 ${wide ? 'lg:hidden' : ''}`}>
          <span className="h-px flex-1 bg-white/10" />
          <span className={`text-[11px] font-medium uppercase tracking-wider ${accent.text}`}>
            {skills.length} technologies
          </span>
        </div>

        {/* Skills */}
        <div
          className={`flex grow flex-wrap content-start items-start gap-2 ${
            wide ? 'lg:grid lg:grid-cols-2 xl:grid-cols-3' : ''
          }`}
        >
          {skills.map((skill, index) => (
            <Badge
              key={index}
              className="group/badge flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] py-1.5 px-3 text-gray-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.07]"
            >
              <span className="shrink-0 transition-transform duration-300 group-hover/badge:scale-110">
                {skill.icon}
              </span>
              <span className="font-medium text-[13px]">{skill.name}</span>
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// Spline Viewer Component with WebGL fallback
const SplineViewer: React.FC = () => {
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    setWebglSupported(isWebGLSupported());

    // Load Spline script
    const script = document.createElement('script');
    script.type = 'module';
    script.src =
      'https://unpkg.com/@splinetool/viewer@1.10.57/build/spline-viewer.js';
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    script.onerror = () => {
      console.warn('Failed to load Spline viewer script');
      setScriptLoaded(false);
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  if (webglSupported === null) {
    return (
      <div className="w-full h-full bg-gray-900/50 rounded-lg animate-pulse" />
    );
  }

  if (!webglSupported || !scriptLoaded) {
    return <WebGLFallback message="3D Robot model not supported" />;
  }

  return (
    <div className="w-full h-full">
      <spline-viewer url="https://prod.spline.design/AREWywtjBBjH7Rek/scene.splinecode"></spline-viewer>
    </div>
  );
};

const Skill: React.FC = () => {
  const skillCategories: Category[] = [
    {
      icon: Code2,
      title: 'Backend & APIs',
      color: 'text-green-400',
      skills: [
        {
          name: 'TypeScript',
          icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" />,
        },
        {
          name: 'Node.js',
          icon: <FaNodeJs className="w-4 h-4 text-[#339933]" />,
        },
        {
          name: 'Express.js',
          icon: <SiExpress className="w-4 h-4 text-white" />,
        },
        {
          name: 'NestJS',
          icon: <SiNestjs className="w-4 h-4 text-[#E0234E]" />,
        },
        {
          name: 'Socket.IO',
          icon: <SiSocketdotio className="w-4 h-4 text-white" />,
        },
        {
          name: 'REST APIs',
          icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" />,
        },
        {
          name: 'Third-Party API Integration',
          icon: <Plug className="w-4 h-4 text-[#10B981]" />,
        },
        {
          name: 'PHP',
          icon: <FaPhp className="w-4 h-4 text-[#777BB4]" />,
        },
        {
          name: 'Laravel',
          icon: <SiLaravel className="w-4 h-4 text-[#FF2D20]" />,
        },
        {
          name: 'Java',
          icon: <FaJava className="w-4 h-4 text-[#007396]" />,
        },
        {
          name: 'C#',
          icon: <SiSharp className="w-4 h-4 text-[#68217A]" />,
        },
      ],
    },
    {
      icon: Layout,
      title: 'Frontend Development',
      color: 'text-blue-400',
      skills: [
        {
          name: 'React',
          icon: <FaReact className="w-4 h-4 text-[#61DAFB]" />,
        },
        {
          name: 'Next.js',
          icon: <SiNextdotjs className="w-4 h-4 text-white" />,
        },
        {
          name: 'Vue.js',
          icon: <SiVuedotjs className="w-4 h-4 text-[#4FC08D]" />,
        },
        {
          name: 'JavaScript',
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#F7DF1E]" />,
        },
        {
          name: 'TypeScript',
          icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" />,
        },
        {
          name: 'HTML',
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" />,
        },
        {
          name: 'CSS',
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#1572B6]" />,
        },
        {
          name: 'Tailwind CSS',
          icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" />,
        },
        {
          name: 'Angular — Familiar',
          icon: <SiAngular className="w-4 h-4 text-[#DD0031]" />,
        },
      ],
    },
    {
      icon: Database,
      title: 'Database & Distributed Systems',
      color: 'text-orange-400',
      skills: [
        {
          name: 'PostgreSQL',
          icon: <SiPostgresql className="w-4 h-4 text-[#336791]" />,
        },
        {
          name: 'MySQL',
          icon: <SiMysql className="w-4 h-4 text-[#4479A1]" />,
        },
        {
          name: 'MongoDB',
          icon: <SiMongodb className="w-4 h-4 text-[#47A248]" />,
        },
        {
          name: 'Redis',
          icon: <SiRedis className="w-4 h-4 text-[#FF4438]" />,
        },
        {
          name: 'RabbitMQ',
          icon: <SiRabbitmq className="w-4 h-4 text-[#FF6600]" />,
        },
        {
          name: 'BullMQ',
          icon: <Plug className="w-4 h-4 text-[#10B981]" />,
        },
        {
          name: 'Microservices',
          icon: <Boxes className="w-4 h-4 text-[#8B5CF6]" />,
        },
        {
          name: 'Asynchronous Processing',
          icon: <Network className="w-4 h-4 text-[#0EA5E9]" />,
        },
      ],
    },
    {
      icon: Cloud,
      title: 'DevOps & Infrastructure',
      color: 'text-blue-400',
      skills: [
        {
          name: 'Docker',
          icon: <FaDocker className="w-4 h-4 text-[#2496ED]" />,
        },
        {
          name: 'Docker Swarm',
          icon: <FaDocker className="w-4 h-4 text-[#38B2AC]" />,
        },
        {
          name: 'Nginx',
          icon: <SiNginx className="w-4 h-4 text-[#009639]" />,
        },
        {
          name: 'Linux',
          icon: <FaLinux className="w-4 h-4 text-[#FCC624]" />,
        },
        {
          name: 'Git',
          icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" />,
        },
        {
          name: 'CI/CD',
          icon: <FcWorkflow className="w-4 h-4" />,
        },
      ],
    },
    {
      icon: Network,
      title: 'Automation & Integration',
      color: 'text-cyan-400',
      skills: [
        {
          name: 'Python',
          icon: <FaPython className="w-4 h-4 text-[#3776AB]" />,
        },
        {
          name: 'Python Automation',
          icon: <Terminal className="w-4 h-4 text-[#3776AB]" />,
        },
        {
          name: 'Telegram Bots',
          icon: <SiTelegram className="w-4 h-4 text-[#26A5E4]" />,
        },
        {
          name: 'Webhooks',
          icon: <Network className="w-4 h-4 text-[#06B6D4]" />,
        },
        {
          name: 'Third-Party APIs',
          icon: <Plug className="w-4 h-4 text-[#10B981]" />,
        },
        {
          name: 'Messaging Integrations',
          icon: <Boxes className="w-4 h-4 text-[#8B5CF6]" />,
        },
      ],
    },
    {
      icon: Bot,
      title: 'AI Development',
      color: 'text-purple-400',
      skills: [
        {
          name: 'Autonomous AI Agents',
          icon: <Bot className="w-4 h-4 text-[#A855F7]" />,
        },
        {
          name: 'RAG & pgvector',
          icon: <Database className="w-4 h-4 text-[#06B6D4]" />,
        },
        {
          name: 'LLM & Gemini API',
          icon: <Cpu className="w-4 h-4 text-[#EC4899]" />,
        },
        {
          name: 'Deterministic Tool Execution',
          icon: <Terminal className="w-4 h-4 text-[#10B981]" />,
        },
        {
          name: 'AI-assisted Development',
          icon: <Wrench className="w-4 h-4 text-[#3B82F6]" />,
        },
      ],
    },
  ];

  return (
    <main id="skills" className="min-h-screen bg-[#04081A] relative text-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="container mx-auto px-4 py-11 relative z-10">
        {/* Top Section: Text (Left) and Robot (Right) */}
        <div className="flex max-w-6xl mx-auto justify-center items-center flex-col lg:flex-row gap-8 mb-12">
          {/* Left: Header and About Content */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            {/* Header */}
            <motion.div
              variants={textVariant()}
              initial="hidden"
              animate="show"
              transition={{ staggerChildren: 0.2 }}
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: [0, 1, 0.8, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'mirror',
                }}
                className="sectionSubText"
              >
                Technical Expertise
              </motion.p>
              <motion.h2
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                }}
                className="sectionHeadText overflow-hidden whitespace-nowrap border-r-4 border-white pr-2"
              >
                Skills.
              </motion.h2>
            </motion.div>
            {/* About Content */}
            <div className="mt-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'mirror',
                }}
                className="text-secondary text-[17px] max-w-[3xl] leading-[30px]"
              >
                I work across the full software development stack, with
                strongest professional experience in backend engineering, APIs,
                databases, distributed systems, and integrations. I also build
                modern frontend applications using React, Vue.js, and Next.js, and
                have experience with automation, DevOps, and AI/LLM integrations.
              </motion.p>
            </div>
          </div>
          {/* Right: 3D Spline Viewer */}
          <div className="lg:w-1/2 flex items-center justify-center">
            <div className="w-full h-[340px] sm:h-[460px] lg:h-[600px]">
              <SplineViewer />
            </div>
          </div>
        </div>

        {/* Bottom Section: Skill Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {skillCategories.map((category, index) => {
            const isWide =
              category.title === 'Backend & APIs' ||
              category.title === 'Database & Distributed Systems' ||
              category.title === 'Frontend Development';
            return (
              <Reveal
                key={index}
                direction="up"
                delay={(index % 3) * 0.1}
                className={`h-full ${isWide ? 'lg:col-span-3' : ''}`}
              >
                <SkillCard
                  icon={category.icon}
                  title={category.title}
                  skills={category.skills}
                  color={category.color}
                  emphasized={isWide}
                  wide={isWide}
                />
              </Reveal>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default Skill;
