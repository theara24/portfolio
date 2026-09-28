"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { projects } from "../constants";
import { SectionWrapper } from "./HigherOrderComponents";
import {
  BookOpen,
  ExternalLink,
  Github,
  GraduationCap,
  Lock,
  User,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

type Project = (typeof projects)[number];

/* ------------------------------------------------------------------ */
/* Filter Professional showcase vs Tabbed More Work                  */
/* ------------------------------------------------------------------ */

const professionalProjects = projects
  .filter((p) => p.category === "Professional")
  .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));

const platformIcon = (platform?: string) => {
  switch (platform) {
    case "Netlify":
      return "/tech/netlify.webp";
    case "Vercel":
      return "/tech/vercel.svg";
    case "Wordpress":
      return "/tech/wordpress.webp";
    case "Figma":
      return "/tech/figma.webp";
    default:
      return "/web.webp";
  }
};

const platformLabel = (platform?: string) =>
  platform && platform !== "Not available" ? platform : "Internal";

/* ------------------------------------------------------------------ */
/* Tag row shared                                                      */
/* ------------------------------------------------------------------ */

const TagRow = ({ tags }: { tags: Project["tags"] }) => (
  <div className="flex flex-wrap gap-x-4 gap-y-2">
    {tags.map((tag) => (
      <span
        key={`${tag.name}`}
        className="text-[13px] font-medium text-white/55"
      >
        #{tag.name}
      </span>
    ))}
  </div>
);

/* ------------------------------------------------------------------ */
/* Featured pinned panel (Professional Work Scroll Showcase)           */
/* ------------------------------------------------------------------ */

const FeaturedPanelContent = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const even = index % 2 === 0;
  return (
    <div
      className={`grid items-center gap-10 lg:grid-cols-2 ${
        even ? "" : "lg:[direction:rtl]"
      }`}
    >
      {/* Visual */}
      <div className="relative lg:[direction:ltr]">
        <span
          className="pointer-events-none absolute -top-14 -left-4 select-none font-black leading-none text-white/[0.04] text-[4.5rem] sm:text-[7rem] lg:text-[10rem]"
          aria-hidden
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40">
          <Image
            src={project.image}
            alt={project.name}
            width={1200}
            height={800}
            className="aspect-[3/2] w-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>
      </div>

      {/* Copy */}
      <div className="lg:[direction:ltr]">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
          {String(index + 1).padStart(2, "0")} · {project.role}
        </span>
        <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
          {project.name}
        </h3>
        <p className="mt-2 text-sm text-white/40">
          {project.company} · {project.status}
        </p>

        <p className="mt-5 text-[15px] leading-[1.8] text-secondary">
          {project.description}
        </p>
        {project.context && (
          <p className="mt-3 text-sm leading-[1.7] text-secondary/80">
            {project.context}
          </p>
        )}

        {project.features && project.features.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.features.map((f) => (
              <li
                key={f}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/70"
              >
                {f}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5">
          <TagRow tags={project.tags} />
        </div>

        {project.confidentialNote && (
          <p className="mt-4 flex items-start gap-2 text-xs italic text-secondary/60">
            <Lock
              className="mt-0.5 h-3.5 w-3.5 shrink-0 opacity-70"
              aria-hidden
            />
            <span>{project.confidentialNote}</span>
          </p>
        )}
      </div>
    </div>
  );
};

/* Pinned, scroll-linked panel for Professional Work */
const FeaturedPanel = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const prefersReduced = useReducedMotion();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const maybeScroll = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(maybeScroll.scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(
    maybeScroll.scrollYProgress,
    [0, 0.35, 0.9],
    [1, 1, 0]
  );
  const scale = useTransform(
    maybeScroll.scrollYProgress,
    [0, 0.5],
    [0.96, 1]
  );

  if (prefersReduced) {
    return (
      <div className="py-6">
        <div className="rounded-3xl border border-white/10 bg-tertiary/60 p-6 sm:p-10">
          <FeaturedPanelContent project={project} index={index} />
        </div>
      </div>
    );
  }

  return (
    <div ref={wrapperRef} className="relative lg:h-[220vh]">
      <div className="flex items-center py-4 lg:sticky lg:top-20 lg:min-h-screen lg:overflow-hidden lg:py-0">
        <motion.div
          style={{ y, opacity, scale }}
          className="w-full rounded-3xl border border-white/10 bg-gradient-to-br from-[#12102a] to-[#0b0920] p-5 shadow-2xl shadow-black/40 sm:p-8 lg:p-10"
        >
          <FeaturedPanelContent project={project} index={index} />
        </motion.div>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* "More Work" card item                                               */
/* ------------------------------------------------------------------ */

const MoreCard = ({ project, index }: { project: Project; index: number }) => {
  const hasLink =
    project.source_code_link ||
    project.backend_code_link ||
    project.deploy_link ||
    project.admin_deploy_link ||
    project.swagger_link;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ delay: (index % 3) * 0.08, duration: 0.4 }}
      className="card-lift group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-tertiary/60"
    >
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          width={800}
          height={520}
          className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[11px] font-semibold text-cyan-300 backdrop-blur border border-white/10">
          {project.category} Project
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-xl font-bold text-white">{project.name}</h3>
          {project.role && (
            <span className="text-xs text-white/50">{project.role}</span>
          )}
        </div>
        <p className="mt-3 flex-1 text-sm leading-[1.75] text-secondary">
          {project.description}
        </p>

        {project.features && project.features.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {project.features.map((f) => (
              <li
                key={f}
                className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[11px] text-white/70"
              >
                {f}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 pt-3 border-t border-white/5">
          <TagRow tags={project.tags} />
        </div>

        {hasLink && (
          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/10 pt-4 text-xs font-medium">
            {project.deploy_link && (
              <Link
                href={project.deploy_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-cyan-400 transition-colors hover:text-cyan-300"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                {project.admin_deploy_link ? "Client Portal" : "Live Demo"}
              </Link>
            )}
            {project.admin_deploy_link && (
              <Link
                href={project.admin_deploy_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-teal-400 transition-colors hover:text-teal-300"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Admin Portal
              </Link>
            )}
            {project.swagger_link && (
              <Link
                href={project.swagger_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-400 transition-colors hover:text-emerald-300"
              >
                <BookOpen className="h-3.5 w-3.5" />
                Swagger Docs
              </Link>
            )}
            {project.source_code_link && (
              <Link
                href={project.source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white/70 transition-colors hover:text-white"
              >
                <Github className="h-3.5 w-3.5" />
                {project.backend_code_link ? "Frontend Repo" : "Code"}
              </Link>
            )}
            {project.backend_code_link && (
              <Link
                href={project.backend_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white/70 transition-colors hover:text-white"
              >
                <Github className="h-3.5 w-3.5" />
                Backend Repo
              </Link>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
};

/* ------------------------------------------------------------------ */
/* Main Works Section                                                  */
/* ------------------------------------------------------------------ */

const Works = () => {
  const [activeTab, setActiveTab] = useState<"Academic" | "Personal">(
    "Personal"
  );

  const activeProjects = projects.filter((p) => p.category === activeTab);

  return (
    <>
      {/* Professional Work (Main Section) */}
      <SectionHeading
        kicker="Professional Work"
        title="Professional Projects."
        description="Selected projects and systems I worked on professionally. Explore the backend services, REST APIs, real-time engines, and full-stack systems I've developed in production environments."
      />

      {/* Featured Professional Work Pinned Showcase */}
      <div className="mt-10 space-y-4">
        {professionalProjects.map((project, index) => (
          <FeaturedPanel key={project.name} project={project} index={index} />
        ))}
      </div>

      {/* More Work (Academic & Personal Projects with Tabs) */}
      <div className="mt-28">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
            More Work
          </span>
          <h3 className="mt-2 text-3xl font-black text-white sm:text-4xl">
            Academic & Personal Projects.
          </h3>
          <p className="mt-3 text-sm text-secondary leading-relaxed">
            Academic and personal projects that showcase my learning,
            experimentation, and independent development experience.
          </p>

          {/* Custom Tab Selector */}
          <div className="mt-8 flex w-full items-center gap-1.5 rounded-xl border border-white/10 bg-[#0d0b22] p-1.5 backdrop-blur-md sm:inline-flex sm:w-auto">
            <button
              onClick={() => setActiveTab("Personal")}
              className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-xs font-semibold transition-all duration-300 sm:flex-none sm:px-5 sm:text-sm ${
                activeTab === "Personal"
                  ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/20"
                  : "text-white/60 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              <User className="h-4 w-4 shrink-0" />
              <span className="whitespace-nowrap">Personal Projects</span>
            </button>
            <button
              onClick={() => setActiveTab("Academic")}
              className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-xs font-semibold transition-all duration-300 sm:flex-none sm:px-5 sm:text-sm ${
                activeTab === "Academic"
                  ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/20"
                  : "text-white/60 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              <GraduationCap className="h-4 w-4 shrink-0" />
              <span className="whitespace-nowrap">Academic Projects</span>
            </button>
          </div>
        </div>

        {/* Tab Content Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {activeProjects.map((project, index) => (
              <MoreCard key={project.name} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
