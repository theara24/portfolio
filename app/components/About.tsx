'use client';

import { SectionWrapper } from './HigherOrderComponents';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { fadeIn, textVariant } from '@/app/utils/motion';

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        initial="hidden"
        animate="show"
        className="w-full green-pink-gradient p-px rounded-[20px] shadow-card"
      >
        <motion.div
          animate={{
            y: [0, -10, 0], // floating up and down
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
            opacity: [0, 1, 0.8, 1], // subtle flicker glow
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
          Creative Web Designer and Full-Sttact Web Developer with strong skills in
          React, Next.js, Tailwind CSS, and modern UI/UX design. Experienced in
          building responsive, user-friendly websites and crafting intuitive
          digital experiences. With a background in Management Information
          Systems (MIS), I bridge design and technology to deliver solutions
          that are both functional and visually engaging. Passionate about
          freelancing, collaboration, and bringing ideas to life through clean
          design and efficient development.
        </motion.p>

        {/* Floating image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative w-full md:w-[300px] h-[300px]"
        >
          <Image
            src="/Ra.png"
            alt="Developer Portfolio"
            fill
            className="object-cover rounded-[20px] shadow-card"
          />
        </motion.div>
      </div>

      {/* Services with loop floating */}
      <motion.div
        className="mt-20 flex flex-wrap gap-10"
        initial="hidden"
        animate="show"
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
