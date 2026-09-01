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
      {/* About Content */}
      <div className="mt-4 flex flex-col lg:flex-row items-start gap-6">
        {/* Left Column */}
        <div className="flex-1">
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

          {/* Biography */}
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
            className="text-secondary text-[17px] max-w-[3xl] leading-[30px] mt-4"
          >
            I&apos;m a Backend-Focused Full-Stack Developer with professional
            experience building REST APIs, backend services, distributed
            applications, and full-stack systems. I focus on developing reliable,
            maintainable, and practical software solutions.
            <br />
            <br />
            My main experience is with TypeScript, Node.js, and Express.js,
            working with PostgreSQL, MongoDB, MySQL, Redis, RabbitMQ, background
            jobs, microservices, third-party integrations, and production
            infrastructure. I also have experience with API design, asynchronous
            processing, caching, and database-driven applications.
            <br />
            <br />
            I also have hands-on experience with React, Next.js, React Native,
            Vue.js, Java, PHP, and Laravel, allowing me to contribute across the
            full application stack when needed. This helps me understand how
            different parts of a system work together, from frontend interfaces
            to backend services and databases.
            <br />
            <br />
            I enjoy solving complex technical problems, improving system
            reliability and performance, and building practical software that
            meets real business requirements. I&apos;m continuously learning and
            improving my skills through professional work, academic projects, and
            personal development.
          </motion.p>
        </div>

        {/* Right Column */}
        <div className="relative w-full lg:w-[400px] h-[700px]">
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
