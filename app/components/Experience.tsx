'use client';
import { SectionWrapper } from '@/app/components/HigherOrderComponents';
import { experiences } from '@/app/constants';
import { textVariant } from '@/app/utils/motion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import {
<<<<<<< HEAD
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
=======
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
>>>>>>> 8716b72 (Update portfolio with new features: 3D skills cloud, FlipWords animation, improved metadata, and personalized content)

type ExperienceCardProps = {
	experience: (typeof experiences)[0];
};

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
<<<<<<< HEAD
	return (
		<VerticalTimelineElement
			contentStyle={{
				background: "#1d1836",
				color: "#fff",
			}}
			contentArrowStyle={{ borderRight: "7px solid  #232631" }}
			date={experience.date}
			iconStyle={{ background: experience.iconBg }}
			icon={
				<div className="flex justify-center items-center w-full h-full">
					<Image
						src={experience.icon}
						width={48}
						height={48}
						alt={experience.company_name}
						className="w-[60%] h-[60%] object-contain"
					/>
				</div>
			}
		>
			<div>
				<h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
				<p
					className="text-secondary text-[16px] font-semibold"
					style={{ margin: 0 }}
				>
					{experience.company_name}
				</p>
			</div>

			<ul className="mt-5 list-disc ml-5 space-y-2">
				{experience.points.map((point, index) => (
					<li
						key={`experience-point-${index}`}
						className="text-white-100 text-[14px] pl-1 tracking-wider"
					>
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
};

const Experience = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className="styles.sectionSubText text-center">
					What I have done so far
				</p>
				<h2 className="sectionHeadText text-center">Work Experience.</h2>
			</motion.div>

			<div className="mt-20 flex flex-col">
				<VerticalTimeline>
					{experiences.map((experience, index) => (
						<ExperienceCard
							key={`experience-${index}`}
							experience={experience}
						/>
					))}
				</VerticalTimeline>
			</div>
		</>
	);
=======
  return (
    <VerticalTimelineElement
      visible={true}
      contentStyle={{
        background: '#1d1836',
        color: '#fff',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0], // subtle wiggle loop
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="flex justify-center items-center w-full h-full"
        >
          <Image
            src={experience.icon}
            width={48}
            height={48}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </motion.div>
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </motion.div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <motion.li
            key={`experience-point-${index}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: [0, 1, 0.8, 1] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'mirror',
              delay: index * 0.2,
            }}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </motion.li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      {/* Heading */}
      <motion.div
        variants={textVariant()}
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'mirror',
          }}
          className="styles.sectionSubText text-center"
        >
          What I have done so far
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
          className="sectionHeadText text-center overflow-hidden whitespace-nowrap border-r-4 border-white pr-2"
        >
          Work Experience.
        </motion.h2>
      </motion.div>

      {/* Timeline */}
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
>>>>>>> 8716b72 (Update portfolio with new features: 3D skills cloud, FlipWords animation, improved metadata, and personalized content)
};

export default SectionWrapper(Experience, 'work');
