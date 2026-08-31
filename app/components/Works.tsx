"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "./HigherOrderComponents";
import { Lock } from "lucide-react";

type ProjectTab = "Professional" | "Personal" | "University";

const tabs: ProjectTab[] = ["Professional", "Personal", "University"];

type ProjectCardProps = {
    index: number;
    name: string;
    description: string;
    context?: string;
    tags: { name: string; color: string }[];
    image: string;
    company?: string;
    role?: string;
    status?: string;
    confidentialNote?: string;
    source_code_link?: string;
    deploy_link?: string;
    platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web";
};

const ProjectCard = ({
                         index,
                         name,
                         description,
                         context,
                         tags,
                         image,
                         company,
                         role,
                         status,
                         confidentialNote,
                         source_code_link,
                         deploy_link,
                         platform,
                     }: ProjectCardProps) => {
    const showMetadata =
        !!company && company !== "Personal" && company !== "Not available";
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
            >
                <motion.div
                    className="relative w-full h-[230px]"
                    initial={{ y: 0 }}
                    whileHover={{ y: -10 }} // Push up by 10px on hover
                    transition={{ type: "spring", stiffness: 100, damping: 10, duration: 0.3 }}
                >
                    <Image
                        src={image}
                        width={1000}
                        height={1000}
                        alt="project_image"
                        className="w-full h-full object-cover rounded-2xl"
                    />

                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                        {source_code_link && (
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
                        )}
                        {deploy_link && (
                            <Link
                                href={deploy_link}
                                target="_blank"
                                className="black-gradient w-10 h-10 ml-2 rounded-full flex justify-center items-center cursor-pointer"
                            >
                                <Image
                                    src={
                                        platform === "Netlify"
                                            ? "/tech/netlify.webp"
                                            : platform === "Vercel"
                                                ? "/tech/vercel.svg"
                                                : platform === "Wordpress"
                                                    ? "/tech/wordpress.webp"
                                                    : platform === "Web"
                                                        ? "/web.webp"
                                                        : "/tech/figma.webp"
                                    }
                                    width={24}
                                    height={24}
                                    alt="source code"
                                    className="object-contain"
                                />
                            </Link>
                        )}
                    </div>
                </motion.div>

                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                    <p className="mt-2 text-secondary text-[14px]">
                        {description}
                    </p>
                    {context && (
                        <p className="mt-2 text-secondary/80 text-[13px]">
                            {context}
                        </p>
                    )}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text-[14px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>

                {(showMetadata || confidentialNote) && (
                    <div className="mt-5 border-t border-white/10 pt-3">
                        {showMetadata && (
                            <dl className="space-y-1">
                                {company && (
                                    <div className="flex gap-2.5 text-[12.5px] leading-5">
                                        <dt className="w-20 shrink-0 pt-px text-[11px] font-medium uppercase tracking-wide text-white/40">
                                            Company
                                        </dt>
                                        <dd className="text-white/80">{company}</dd>
                                    </div>
                                )}
                                {role && (
                                    <div className="flex gap-2.5 text-[12.5px] leading-5">
                                        <dt className="w-20 shrink-0 pt-px text-[11px] font-medium uppercase tracking-wide text-white/40">
                                            Role
                                        </dt>
                                        <dd className="text-white/80">{role}</dd>
                                    </div>
                                )}
                                {status && (
                                    <div className="flex gap-2.5 text-[12.5px] leading-5">
                                        <dt className="w-20 shrink-0 pt-px text-[11px] font-medium uppercase tracking-wide text-white/40">
                                            Status
                                        </dt>
                                        <dd className="text-white/80">{status}</dd>
                                    </div>
                                )}
                            </dl>
                        )}
                        {confidentialNote && (
                            <p className="mt-3 flex items-start gap-1.5 text-[12px] italic text-secondary/60 leading-[16px]">
                                <Lock
                                    className="mt-[2px] h-3.5 w-3.5 shrink-0 opacity-60"
                                    aria-hidden="true"
                                />
                                <span>{confidentialNote}</span>
                            </p>
                        )}
                    </div>
                )}
            </Tilt>
        </motion.div>
    );
};

const Works = () => {
    const [activeTab, setActiveTab] = useState<ProjectTab>("Professional");

    const filteredProjects = projects.filter(
        (project) => project.category === activeTab
    );

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className="sectionSubText">My work</p>
                <h2 className="sectionHeadText">Projects.</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    A selection of projects showcasing my real-world development
                    experience — responsibilities, technologies, and engineering work
                    across backend and full-stack roles. It reflects my ability to build
                    reliable services, integrate external systems, and deliver across
                    different parts of the stack.
                </motion.p>
            </div>

            <motion.div
                variants={fadeIn("up", "spring", 0.1, 0.5)}
                className="mt-8 flex flex-wrap gap-4"
            >
                {tabs.map((tab) => {
                    const isActive = tab === activeTab;
                    return (
                        <button
                            key={tab}
                            type="button"
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2 rounded-full text-[16px] font-medium transition-colors duration-300 cursor-pointer border ${
                                isActive
                                    ? "bg-tertiary text-white border-white"
                                    : "text-secondary border-white/10 hover:border-white/40"
                            }`}
                        >
                            {tab}
                        </button>
                    );
                })}
            </motion.div>

            {filteredProjects.length === 0 ? (
                <motion.p
                    variants={fadeIn("", "", 0.1, 0.75)}
                    className="mt-20 text-secondary text-[17px]"
                >
                    No projects to show here yet.
                </motion.p>
            ) : (
                <div className="mt-20 flex flex-wrap gap-7">
                    {filteredProjects.map((project, index) => {
                        // Map unsupported platform values to 'Web'
                        const allowedPlatforms = ["Netlify", "Vercel", "Figma", "Wordpress", "Web"];
                        const rawPlatform = project.platform ?? "Not available";
                        const platform = allowedPlatforms.includes(rawPlatform)
                            ? rawPlatform
                            : "Web";
                        return (
                            <ProjectCard
                                key={`project-${index}`}
                                index={index}
                                name={project.name}
                                description={project.description}
                                context={project.context}
                                tags={project.tags}
                                image={project.image}
                                company={project.company}
                                role={project.role}
                                status={project.status}
                                confidentialNote={project.confidentialNote}
                                source_code_link={project.source_code_link}
                                deploy_link={project.deploy_link}
                                platform={platform as "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web"}
                            />
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default SectionWrapper(Works, "");