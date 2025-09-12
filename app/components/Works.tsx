'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Tilt } from 'react-tilt';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from './HigherOrderComponents';

type ProjectCardProps = {
<<<<<<< HEAD
	index: number;
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link: string;
	platform: "Netlify" | "Vercel" | "Figma" | "Wordpress"
=======
  index: number;
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link?: string;
  deploy_link: string;
  platform: 'Netlify' | 'Vercel' | 'Figma' | 'Wordpress' | 'Web';
>>>>>>> 8716b72 (Update portfolio with new features: 3D skills cloud, FlipWords animation, improved metadata, and personalized content)
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  deploy_link,
  platform,
}: ProjectCardProps) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.4, 0.75)}
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 150 }}
    >
      <Tilt
        options={{
          max: 25,
          scale: 1,
          speed: 400,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full shadow-lg hover:shadow-cyan-500/30 transition-shadow duration-300"
      >
        {/* Image Section */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="relative w-full h-[230px] overflow-hidden rounded-2xl"
        >
          <Image
            src={image}
            width={1000}
            height={1000}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

<<<<<<< HEAD
					<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
						{source_code_link && <Link
							href={source_code_link}
							target="_blank"
							className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
						>
							<Image
								src="/tech/github.webp"
								width={24}
								height={24}
								alt="source-code"
								className="object-contain"
							/>
						</Link>}
						<Link
							href={deploy_link}
							target="_blank"
							className="black-gradient w-10 h-10 ml-2 rounded-full flex justify-center items-center cursor-pointer"
						>
							<Image
								src={platform === "Netlify" ? "/tech/netlify.webp" : platform === "Vercel" ? "/tech/vercel.svg" : platform === "Wordpress" ? "/tech/wordpress.webp" : "/tech/figma.webp"}
								width={24}
								height={24}
								alt="source code"
								className="object-contain"
							/>
						</Link>
					</div>
				</div>
=======
          {/* Links */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover space-x-2">
            {source_code_link && (
              <motion.div
                whileHover={{ scale: 1.15, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Link
                  href={source_code_link}
                  target="_blank"
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <Image
                    src="/tech/github.webp"
                    width={24}
                    height={24}
                    alt="source-code"
                    className="object-contain"
                  />
                </Link>
              </motion.div>
            )}
            <motion.div
              whileHover={{ scale: 1.15, rotate: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link
                href={deploy_link}
                target="_blank"
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <Image
                  src={
                    platform === 'Netlify'
                      ? '/tech/netlify.webp'
                      : platform === 'Vercel'
                      ? '/tech/vercel.svg'
                      : platform === 'Wordpress'
                      ? '/tech/wordpress.webp'
                      : platform === 'Web'
                      ? '/web.webp'
                      : '/tech/figma.webp'
                  }
                  width={24}
                  height={24}
                  alt="deploy-link"
                  className="object-contain"
                />
              </Link>
            </motion.div>
          </div>
        </motion.div>
>>>>>>> 8716b72 (Update portfolio with new features: 3D skills cloud, FlipWords animation, improved metadata, and personalized content)

        {/* Content */}
        <div className="mt-5">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white font-bold text-[24px]"
          >
            {name}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-2 text-secondary text-[14px]"
          >
            {description}
          </motion.p>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <motion.p
              key={`${name}-${tag.name}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </motion.p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      {/* Heading */}
      <motion.div variants={textVariant()}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror' }}
          className="sectionSubText"
        >
          My work
        </motion.p>
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
          My Projects.
        </motion.h2>
      </motion.div>
      </motion.div>

      {/* Description */}
      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </div>

      {/* Project Cards */}
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, '');
