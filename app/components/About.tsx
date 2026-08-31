'use client';

import { SectionWrapper } from './HigherOrderComponents';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { fadeIn, textVariant } from '@/app/utils/motion';
import Lanyard from './Lanyard';

type ServiceCardProps = {
  index: number;
  title: string;
  description: string;
  icon: string;
};

const ServiceCard = ({ index, title, description, icon }: ServiceCardProps) => {
  return (
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }} // Animate once when entering viewport
        className="w-full green-pink-gradient p-px rounded-[20px] shadow-card"
      >
        <motion.div
          animate={{
            y: [0, -10, 0], // Floating up and down
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <Image
            src={icon}
            width={64}
            height={64}
            alt={title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
          <p className="text-secondary text-[14px] text-center leading-relaxed">
            {description}
          </p>
        </motion.div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
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
            opacity: [0, 1, 0.8, 1], // Subtle flicker glow
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'mirror',
          }}
          className="sectionSubText"
        >
          Introduction
        </motion.p>

        {/* Looping typing effect */}
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
          Overview.
        </motion.h2>
      </motion.div>

      {/* About Content */}
      <div className="mt-4 flex flex-col md:flex-row items-center gap-6">
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
          className="text-secondary text-[17px] max-w-[3xl] leading-[30px] flex-1"
        >
          I&apos;m a Backend-Focused Full-Stack Developer with professional
          experience building backend services, REST APIs, distributed systems,
          and full-stack applications. I have been studying programming and
          software development since 2023 and have been working professionally
          in backend development since 2025.
          <br />
          <br />
          My professional experience focuses on TypeScript, Node.js, and
          Express.js, with hands-on work involving databases, Redis, message
          queues, microservices, third-party integrations, and production
          infrastructure. I have also contributed to frontend development using
          React, Next.js, Vue.js, and React Native, allowing me to work across
          different parts of the application stack.
          <br />
          <br />
          With a background in Management Information Systems, I combine
          software development knowledge with an understanding of business
          requirements and information systems. I enjoy building practical
          solutions, solving technical problems, and continuously improving my
          engineering skills through professional, academic, and personal
          projects.
        </motion.p>

        {/* Lanyard */}
        <div className="relative w-full md:w-[300px] h-[300px]">
          <Lanyard frontImage="/Ra.png" />
        </div>
      </div>

      {/* Services with loop floating */}
      <motion.div
        className="mt-20 flex flex-wrap gap-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }} // Animate once when entering viewport
        transition={{ staggerChildren: 0.3 }}
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, 'about');
