'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import {
  Bot,
  Boxes,
  Code2,
  Cpu,
  Database,
  Layers,
  Network,
  Plug,
  Sparkles,
  Terminal,
  Workflow,
  Wrench,
} from 'lucide-react';
import { isWebGLSupported } from '@/app/utils/webgl';
import WebGLFallback from '@/app/components/WebGLFallback';
import Reveal from '@/app/components/Reveal';

import {
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
  SiExpress,
  SiGooglegemini,
  SiJavascript,
  SiLaravel,
  SiMinio,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiPortainer,
  SiPostgresql,
  SiPrisma,
  SiRabbitmq,
  SiRedis,
  SiRubyonrails,
  SiSidekiq,
  SiSocketdotio,
  SiTailwindcss,
  SiTelegram,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si';
import { BsGrid1X2 } from 'react-icons/bs';
import { FcWorkflow } from 'react-icons/fc';

const textVariant = () => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
});

type Skill = { name: string; icon: React.ReactNode };

type SkillGroup = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  color: string;
  skills: Skill[];
};

const ACCENTS: Record<
  string,
  { text: string; chip: string; dot: string; ring: string; glow: string }
> = {
  cyan: {
    text: 'text-cyan-300',
    chip: 'from-cyan-500/25 to-sky-500/10 border-cyan-400/30',
    dot: 'bg-cyan-400',
    ring: 'hover:border-cyan-400/50 hover:shadow-cyan-500/10',
    glow: 'via-cyan-400/30',
  },
  emerald: {
    text: 'text-emerald-300',
    chip: 'from-emerald-500/25 to-teal-500/10 border-emerald-400/30',
    dot: 'bg-emerald-400',
    ring: 'hover:border-emerald-400/50 hover:shadow-emerald-500/10',
    glow: 'via-emerald-400/30',
  },
  blue: {
    text: 'text-blue-300',
    chip: 'from-blue-500/25 to-indigo-500/10 border-blue-400/30',
    dot: 'bg-blue-400',
    ring: 'hover:border-blue-400/50 hover:shadow-blue-500/10',
    glow: 'via-blue-400/30',
  },
  purple: {
    text: 'text-purple-300',
    chip: 'from-purple-500/25 to-violet-500/10 border-purple-400/30',
    dot: 'bg-purple-400',
    ring: 'hover:border-purple-400/50 hover:shadow-purple-500/10',
    glow: 'via-purple-400/30',
  },
  orange: {
    text: 'text-orange-300',
    chip: 'from-orange-500/25 to-amber-500/10 border-orange-400/30',
    dot: 'bg-orange-400',
    ring: 'hover:border-orange-400/50 hover:shadow-orange-500/10',
    glow: 'via-orange-400/30',
  },
};

// Spline Viewer Component with WebGL fallback
const SplineViewer: React.FC = () => {
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    setWebglSupported(isWebGLSupported());

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
  const dailyUseSkills: Skill[] = [
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
      name: 'PostgreSQL',
      icon: <SiPostgresql className="w-4 h-4 text-[#4169E1]" />,
    },
    {
      name: 'Redis',
      icon: <SiRedis className="w-4 h-4 text-[#DC382D]" />,
    },
    {
      name: 'RabbitMQ',
      icon: <SiRabbitmq className="w-4 h-4 text-[#FF6600]" />,
    },
    {
      name: 'Docker',
      icon: <FaDocker className="w-4 h-4 text-[#2496ED]" />,
    },
    {
      name: 'Git',
      icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" />,
    },
  ];

  const skillGroups: SkillGroup[] = [
    {
      icon: Code2,
      title: 'Languages',
      color: 'blue',
      skills: [
        {
          name: 'TypeScript',
          icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" />,
        },
        {
          name: 'JavaScript',
          icon: <SiJavascript className="w-4 h-4 text-[#F7DF1E]" />,
        },
        {
          name: 'Python',
          icon: <FaPython className="w-4 h-4 text-[#3776AB]" />,
        },
        {
          name: 'PHP',
          icon: <FaPhp className="w-4 h-4 text-[#777BB4]" />,
        },
        {
          name: 'Java',
          icon: <FaJava className="w-4 h-4 text-[#007396]" />,
        },
      ],
    },
    {
      icon: Terminal,
      title: 'Backend and APIs',
      color: 'emerald',
      skills: [
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
          name: 'REST',
          icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" />,
        },
        {
          name: 'WebSockets',
          icon: <SiSocketdotio className="w-4 h-4 text-white" />,
        },
        {
          name: 'Laravel',
          icon: <SiLaravel className="w-4 h-4 text-[#FF2D20]" />,
        },
        {
          name: 'Ruby on Rails',
          icon: <SiRubyonrails className="w-4 h-4 text-[#CC0000]" />,
        },
      ],
    },
    {
      icon: Database,
      title: 'Databases',
      color: 'cyan',
      skills: [
        {
          name: 'PostgreSQL',
          icon: <SiPostgresql className="w-4 h-4 text-[#4169E1]" />,
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
          icon: <SiRedis className="w-4 h-4 text-[#DC382D]" />,
        },
        {
          name: 'Prisma',
          icon: <SiPrisma className="w-4 h-4 text-[#5A67D8]" />,
        },
        {
          name: 'pgvector',
          icon: <Database className="w-4 h-4 text-[#06B6D4]" />,
        },
      ],
    },
    {
      icon: Boxes,
      title: 'Messaging and queues',
      color: 'orange',
      skills: [
        {
          name: 'RabbitMQ',
          icon: <SiRabbitmq className="w-4 h-4 text-[#FF6600]" />,
        },
        {
          name: 'BullMQ',
          icon: <Plug className="w-4 h-4 text-[#10B981]" />,
        },
        {
          name: 'Sidekiq',
          icon: <SiSidekiq className="w-4 h-4 text-[#D32F2F]" />,
        },
      ],
    },
    {
      icon: Workflow,
      title: 'DevOps',
      color: 'blue',
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
          name: 'CI/CD',
          icon: <FcWorkflow className="w-4 h-4" />,
        },
        {
          name: 'Portainer',
          icon: <SiPortainer className="w-4 h-4 text-[#13BEF9]" />,
        },
        {
          name: 'MinIO',
          icon: <SiMinio className="w-4 h-4 text-[#C72C48]" />,
        },
      ],
    },
    {
      icon: Layers,
      title: 'Frontend',
      color: 'cyan',
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
          name: 'Tailwind CSS',
          icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" />,
        },
      ],
    },
    {
      icon: Bot,
      title: 'AI',
      color: 'purple',
      skills: [
        {
          name: 'Gemini API',
          icon: <SiGooglegemini className="w-4 h-4 text-[#8E75FF]" />,
        },
        {
          name: 'RAG with pgvector',
          icon: <Database className="w-4 h-4 text-[#06B6D4]" />,
        },
        {
          name: 'Telegram bots',
          icon: <SiTelegram className="w-4 h-4 text-[#26A5E4]" />,
        },
        {
          name: 'LLM integration',
          icon: <Sparkles className="w-4 h-4 text-[#EC4899]" />,
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
          {/* Left: Header and Content */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <motion.div
              variants={textVariant()}
              initial="hidden"
              animate="show"
              transition={{ staggerChildren: 0.2 }}
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: [0, 1, 0.8, 1] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror' }}
                className="sectionSubText"
              >
                Technical Stack
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

            <div className="mt-4">
              <p className="text-secondary text-[16px] leading-[28px]">
                The core technologies, backend architectures, databases, and
                services I work with across production systems and modern full-stack development.
              </p>
            </div>
          </div>

          {/* Right: 3D Spline Viewer */}
          <div className="lg:w-1/2 flex items-center justify-center">
            <div className="w-full h-[340px] sm:h-[460px] lg:h-[600px]">
              <SplineViewer />
            </div>
          </div>
        </div>

        {/* Daily Use Hero Card */}
        <div className="max-w-6xl mx-auto mb-10">
          <Reveal direction="up" delay={0.1}>
            <Card className="group card-lift relative overflow-hidden rounded-2xl border border-cyan-400/40 bg-gradient-to-b from-[#12102a] to-[#0c0a1f] p-6 backdrop-blur shadow-xl shadow-cyan-500/10">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
              <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-cyan-400 opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/40 bg-gradient-to-br from-cyan-500/25 to-sky-500/10 text-cyan-300">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white leading-tight">
                        Daily use
                      </h3>
                      <p className="text-xs text-secondary mt-0.5">
                        My primary engineering stack used daily for production applications.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  {dailyUseSkills.map((skill, index) => (
                    <Badge
                      key={index}
                      className="group/badge flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-500/[0.08] py-2 px-3.5 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/60 hover:bg-cyan-500/[0.16]"
                    >
                      <span className="shrink-0 transition-transform duration-300 group-hover/badge:scale-110">
                        {skill.icon}
                      </span>
                      <span className="font-semibold text-[13px]">{skill.name}</span>
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </Reveal>
        </div>

        {/* Skill Groups Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {skillGroups.map((group, index) => {
            const accent = ACCENTS[group.color] ?? ACCENTS.blue;
            const Icon = group.icon;
            return (
              <Reveal
                key={group.title}
                direction="up"
                delay={(index % 3) * 0.1}
                className="h-full"
              >
                <Card className="group card-lift relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#12102a] to-[#0c0a1f] p-6 backdrop-blur">
                  <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${accent.glow} to-transparent opacity-70`} />
                  <div className={`pointer-events-none absolute -top-16 -right-16 h-36 w-36 rounded-full opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-25 ${accent.dot}`} />

                  <CardContent className="relative z-10 flex grow flex-col p-0 gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-gradient-to-br ${accent.chip} ${accent.text}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white leading-tight">
                        {group.title}
                      </h3>
                    </div>

                    <div className="flex grow flex-wrap content-start items-start gap-2 pt-1">
                      {group.skills.map((skill, sIdx) => (
                        <Badge
                          key={sIdx}
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
              </Reveal>
            );
          })}
        </div>

        {/* Also Studied Line */}
        <div className="max-w-6xl mx-auto mt-8">
          <div className="rounded-xl border border-white/10 bg-white/[0.02] px-5 py-3 text-center text-sm text-gray-400 backdrop-blur-sm">
            <span className="font-semibold text-white">Also studied:</span>{' '}
            <span className="text-gray-300">
              C/C++, C#, Angular, Spring, SQL Server
            </span>
          </div>
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
