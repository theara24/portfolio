'use client';

import { SectionWrapper } from './HigherOrderComponents';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { fadeIn } from '@/app/utils/motion';
import Lanyard from './Lanyard';
import SectionHeading from './SectionHeading';

type ServiceCardProps = {
  index: number;
  title: string;
  description: string;
  icon: string;
};

const ServiceCard = ({ index, title, description, icon }: ServiceCardProps) => {
  return (
    <Tilt
      options={{ max: 12, scale: 1.02, speed: 450 }}
      className="w-full"
    >
      <motion.div
        variants={fadeIn('right', 'spring', 0.15 * index, 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="card-lift h-full w-full rounded-[20px] border border-white/10 bg-tertiary/70 p-6"
      >
        <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
          <Image
            src={icon}
            width={56}
            height={56}
            alt=""
            className="h-14 w-14 object-contain opacity-90"
          />
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <p className="text-sm leading-relaxed text-secondary">{description}</p>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <div className="mt-4 grid items-start gap-10 lg:grid-cols-[1fr_380px]">
        {/* Text */}
        <div>
          <SectionHeading
            kicker="Introduction"
            title="Overview."
            description={
              <>
                I am a versatile Software Developer with professional experience
                building full-stack web applications, responsive frontend user
                interfaces, scalable backend services, and REST APIs.
                <br />
                <br />
                My technical expertise spans modern frontend frameworks (React,
                Next.js, Vue.js, Tailwind CSS) and robust backend engineering
                (TypeScript, Node.js, Express.js, NestJS, PostgreSQL, MongoDB,
                MySQL, Redis, RabbitMQ, BullMQ, Docker, and Linux). I also have
                hands-on experience with PHP/Laravel, Java, C#/.NET, Python
                automation, Telegram bots, RAG vector architectures (pgvector),
                and AI/LLM integrations.
                <br />
                <br />
                Whether crafting intuitive, high-performance interfaces on the
                frontend, architecting resilient backend services, or delivering
                complete end-to-end software solutions, I focus on clean code,
                scalability, and solving real-world business problems.
              </>
            }
          />
        </div>

        {/* Lanyard */}
        <div className="relative mx-auto h-[400px] w-full max-w-[380px] sm:h-[480px] lg:h-[560px]">
          <Lanyard frontImage="/Ra.png" />
        </div>
      </div>

      {/* Services */}
      <motion.div
        className="mt-16 grid grid-cols-1 items-stretch gap-6 xs:grid-cols-2 md:grid-cols-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, 'about');
