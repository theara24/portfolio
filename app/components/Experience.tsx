"use client";
import { SectionWrapper } from "@/app/components/HigherOrderComponents";
import { experiences } from "@/app/constants";
import { fadeIn, textVariant, staggerContainer } from "@/app/utils/motion"; // Added staggerContainer
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

type ExperienceCardProps = {
    experience: (typeof experiences)[0];
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
    return (
        <VerticalTimelineElement
            visible={true}
            contentStyle={{
                background: "#1d1836",
                color: "#fff",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                borderRadius: "20px",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
            }}
            contentArrowStyle={{ borderRight: "7px solid #232631" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.1, 1], y: [0, -10, 0] }} // Floating effect with slight scale
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <div className="flex justify-center items-center w-full h-full">
                        <Image
                            src={experience.icon}
                            alt={experience.company_name}
                            className="w-[60%] h-[60%] justify-center items-center object-contain"
                            width={60}
                            height={60}
                        />
                    </div>
                </motion.div>
            }
        >
            <motion.div
                variants={fadeIn("right", "spring", 0.5, 0.75)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="w-full"
            >
                <div>
                    <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
                        className="text-secondary text-[16px] font-semibold"
                        style={{ margin: 0 }}
                    >
                        {experience.company_name}
                    </motion.p>
                </div>

                <ul className="mt-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                        <motion.li
                            key={`experience-point-${index}`}
                            variants={fadeIn("up", "spring", index * 0.2, 0.3)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="text-white-100 text-[14px] pl-1 tracking-wider"
                        >
                            {point}
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </VerticalTimelineElement>
    );
};

const Experience: React.FC = () => {
    return (
        <>
            {/* Header with Flicker and Typing Effect */}
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
                        repeatType: "mirror",
                    }}
                    className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider"
                >
                    What I have done so far
                </motion.p>

                <motion.h2
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }}
                    className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] overflow-hidden whitespace-nowrap border-r-4 border-white pr-2"
                >
                    Work Experience.
                </motion.h2>
            </motion.div>

            {/* Timeline with Staggered Animation */}
            <div className="mt-20 flex flex-col">
                <motion.div
                    variants={staggerContainer(0.3, 0)} // Staggered animation with 0.3s delay
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <VerticalTimeline>
                        {experiences.map((experience, index) => (
                            <ExperienceCard
                                key={`experience-${index}`}
                                experience={experience}
                            />
                        ))}
                    </VerticalTimeline>
                </motion.div>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "work");