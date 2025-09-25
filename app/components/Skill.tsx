'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import IconCloudDemo from '@/app/components/globe';
import { Card, CardContent } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Code2, Paintbrush, Database, Layout, Cpu, Cloud } from 'lucide-react';
import { isWebGLSupported } from '@/app/utils/webgl';
import WebGLFallback from '@/app/components/WebGLFallback';
import { SiAngular } from 'react-icons/si';
import { SiC, SiCplusplus } from 'react-icons/si';
import { SiPostman } from 'react-icons/si';

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaFigma,
  FaAws,
  FaPhp,
  FaJava,
  FaVuejs,
  FaBootstrap,
} from 'react-icons/fa';
import {
  SiNuxtdotjs,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiAdobexd,
  SiGraphql,
  SiJest,
  SiWebpack,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiVite,
} from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { BsFileEarmarkCode, BsGrid1X2 } from 'react-icons/bs';
import { MdAnimation } from 'react-icons/md';
import { FcWorkflow } from 'react-icons/fc';

// Assuming textVariant is defined elsewhere
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

const SkillCard: React.FC<{
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  skills: Skill[];
  color: string;
}> = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden py-5 bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer" />
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

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
      title: 'Frontend Development',
      color: 'text-blue-400',
      skills: [
        { name: 'React', icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        {
          name: 'Next.js',
          icon: <SiNextdotjs className="w-4 h-4 text-white" />,
        },
        {
          name: 'Vue',
          icon: <FaVuejs className="w-4 h-4 text-[#4FC08D]" />,
        },
        {
          name: 'Angular',
          icon: <SiAngular className="w-4 h-4 text-[#DD0031]" />,
        },
        
        {
          name: 'Nuxt',
          icon: <SiNuxtdotjs className="w-4 h-4 text-[#00C58E]" />,
        },
        {
          name: 'Tailwind CSS',
          icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" />,
        },
        {
          name: 'Bootstrap',
          icon: <FaBootstrap className="w-4 h-4 text-[#7952B3]" />,
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
          name: 'JavaScript',
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#F7DF1E]" />,
        },
        {
          name: 'TypeScript',
          icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" />,
        },
      ],
    },
    {
      icon: Database,
      title: 'Backend Development',
      color: 'text-green-400',
      skills: [
        {
          name: 'Node.js',
          icon: <FaNodeJs className="w-4 h-4 text-[#339933]" />,
        },
        {
          name: 'Python',
          icon: <FaPython className="w-4 h-4 text-[#3776AB]" />,
        },
        {
          name: 'REST APIs',
          icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" />,
        },
        {
          name: 'GraphQL',
          icon: <SiGraphql className="w-4 h-4 text-[#E10098]" />,
        },
        
        {
          name: 'PHP',
          icon: <FaPhp className="w-4 h-4 text-[#777BB4]" />,
        },
        {
          name: 'C#',
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#9B4F96]" />,
        },
        {
          name: 'Java',
          icon: <FaJava className="w-4 h-4 text-[#007396]" />,
        },
        { name: 'C', icon: <SiC className="w-4 h-4 text-[#A8B9CC]" /> },
{ name: 'C++', icon: <SiCplusplus className="w-4 h-4 text-[#00599C]" /> },

        
      ],
    },
    {
      icon: Layout,
      title: 'UI/UX Design',
      color: 'text-purple-400',
      skills: [
        { name: 'Figma', icon: <FaFigma className="w-4 h-4 text-[#F24E1E]" /> },
        {
          name: 'Adobe XD',
          icon: <SiAdobexd className="w-4 h-4 text-[#FF61F6]" />,
        },
        {
          name: 'Responsive Design',
          icon: <Layout className="w-4 h-4 text-[#38B2AC]" />,
        },
        {
          name: 'Wireframing',
          icon: <BsGrid1X2 className="w-4 h-4 text-[#9CA3AF]" />,
        },
        {
          name: 'Prototyping',
          icon: <MdAnimation className="w-4 h-4 text-[#F59E0B]" />,
        },
      ],
    },
    {
      icon: Cloud,
      title: 'Cloud & Database',
      color: 'text-orange-400',
      skills: [
        { name: 'AWS', icon: <FaAws className="w-4 h-4 text-[#FF9900]" /> },
        {
          name: 'Docker',
          icon: <FaDocker className="w-4 h-4 text-[#2496ED]" />,
        },
        { name: 'CI/CD', icon: <FcWorkflow className="w-4 h-4" /> },
        {
          name: 'Kubernetes',
          icon: <BsGrid1X2 className="w-4 h-4 text-[#326CE5]" />,
        },
        { name: 'Postman', icon: <SiPostman className="w-4 h-4 text-[#FF6C37]" /> },

        { name: 'Git', icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: 'Linux', icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
        {
          name: 'MySQL',
          icon: <SiMysql className="w-4 h-4 text-[#4479A1]" />,
        },
        {
          name: 'PostgreSQL',
          icon: <SiPostgresql className="w-4 h-4 text-[#336791]" />,
        },
        {
          name: 'MongoDB',
          icon: <SiMongodb className="w-4 h-4 text-[#47A248]" />,
        },

      ],
    },
    {
      icon: Cpu,
      title: 'Tools & Technologies',
      color: 'text-pink-400',
      skills: [
        {
          name: 'VS Code',
          icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" />,
        },
        {
          name: 'Webpack',
          icon: <SiWebpack className="w-4 h-4 text-[#8DD6F9]" />,
        },
        { name: 'Redux', icon: <SiRedux className="w-4 h-4 text-[#764ABC]" /> },
        {
          name: 'Firebase',
          icon: <SiFirebase className="w-4 h-4 text-[#FFCA28]" />,
        },
        { name: 'Vercel', icon: <SiVercel className="w-4 h-4 text-white" /> },
        { name: 'Vite', icon: <SiVite className="w-4 h-4 text-[#646CFF]" /> },
      ],
    },
    {
      icon: Paintbrush,
      title: 'Creative Skills',
      color: 'text-yellow-400',
      skills: [
        {
          name: 'UI Animation',
          icon: <MdAnimation className="w-4 h-4 text-[#FF4081]" />,
        },
        {
          name: 'SVG Animation',
          icon: <MdAnimation className="w-4 h-4 text-[#00C853]" />,
        },
        {
          name: '3D Modeling',
          icon: <Cpu className="w-4 h-4 text-[#7C4DFF]" />,
        },
        {
          name: 'Motion Graphics',
          icon: <MdAnimation className="w-4 h-4 text-[#FF6D00]" />,
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#04081A] relative text-white">
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
                  opacity: [0, 1, 0.8, 1], // subtle flicker glow
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'mirror',
                }}
                className="sectionSubText"
              >
                My Knowledge
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
                I’m a passionate Web Designer and Full-Stack Developer skilled
                in React, Next.js, Tailwind CSS, and modern UI/UX design. I
                create responsive, user-focused websites that blend creativity
                with functionality. With a strong foundation in Management
                Information Systems (MIS), I connect design and development to
                build solutions that are practical, innovative, and visually
                appealing. I enjoy freelancing, solving challenges, and turning
                ideas into engaging digital experiences.
              </motion.p>
            </div>
          </div>
          {/* Right: 3D Spline Viewer */}
          <div className="lg:w-1/2 flex items-center justify-center">
            <div className="w-full h-[600px]">
              <SplineViewer />
            </div>
          </div>
        </div>

        {/* Bottom Section: Skill Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
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
