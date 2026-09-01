"use client";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { projects } from "../constants";
import { SectionWrapper } from "./HigherOrderComponents";
import { Github, Lock } from "lucide-react";
import SectionHeading from "./SectionHeading";

/* ------------------------------------------------------------------ */
/* Types / data helpers                                                */
/* ------------------------------------------------------------------ */

type Project = (typeof projects)[number];
const featured = projects
  .filter((p) => p.featured)
  .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
const more = projects.filter((p) => !p.featured);

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
/* Featured pinned panel (scroll-driven)                               */
/* ------------------------------------------------------------------ */

const FeaturedPanelContent = ({ project, index }: { project: Project; index: number }) => {
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
          className="pointer-events-none absolute -top-14 -left-4 select-none font-black leading-none text-[7rem] text-white/[0.04] sm:text-[10rem]"
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
            <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0 opacity-70" aria-hidden />
            <span>{project.confidentialNote}</span>
          </p>
        )}
      </div>
    </div>
  );
};

/* Pinned, scroll-linked panel. Falls back to a simple block when motion
   is reduced (no pinning / no transform). */
const FeaturedPanel = ({ project, index }: { project: Project; index: number }) => {
  const prefersReduced = useReducedMotion();
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Only attach scroll-driven transforms on capable, non-pinned layouts.
  const maybeScroll = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(maybeScroll.scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(maybeScroll.scrollYProgress, [0, 0.35, 0.9], [1, 1, 0]);
  const scale = useTransform(maybeScroll.scrollYProgress, [0, 0.5], [0.96, 1]);

  // Render a plain stacked block on reduced motion (no tall pin container).
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
    <div ref={wrapperRef} className="relative h-[220vh]">
      <div className="sticky top-20 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ y, opacity, scale }}
          className="w-full rounded-3xl border border-white/10 bg-gradient-to-br from-[#12102a] to-[#0b0920] p-6 shadow-2xl shadow-black/40 sm:p-10"
        >
          <FeaturedPanelContent project={project} index={index} />
        </motion.div>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* "More work" card grid                                               */
/* ------------------------------------------------------------------ */

const MoreCard = ({ project, index }: { project: Project; index: number }) => {
  const hasLink = project.source_code_link || project.deploy_link;
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: (index % 3) * 0.08, duration: 0.5 }}
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
        <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[11px] font-semibold text-white/80 backdrop-blur">
          {project.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-white">{project.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-[1.7] text-secondary">
          {project.description}
        </p>
        <div className="mt-4">
          <TagRow tags={project.tags} />
        </div>
        {hasLink && (
          <div className="mt-5 flex gap-3 border-t border-white/10 pt-4">
            {project.source_code_link && (
              <Link
                href={project.source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} source code`}
                className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                <Github className="h-4 w-4" aria-hidden /> Code
              </Link>
            )}
            {project.deploy_link && (
              <Link
                href={project.deploy_link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} live preview`}
                className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                <Image
                  src={platformIcon(project.platform)}
                  width={16}
                  height={16}
                  alt=""
                  className="h-4 w-4 object-contain"
                />
                {platformLabel(project.platform)}
              </Link>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
};

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

const Works = () => {
  return (
    <>
      <SectionHeading
        kicker="Selected work"
        title="Featured Projects."
        description="A cinematic look at the production systems I've contributed to — from omnichannel messaging and real-time support to high-concurrency backend services. Scroll to explore."
      />

      {/* Featured pinned showcase */}
      <div className="mt-10 space-y-4">
        {featured.map((project, index) => (
          <FeaturedPanel key={project.name} project={project} index={index} />
        ))}
      </div>

      {/* More work */}
      <div className="mt-24">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-px flex-1 bg-white/10" aria-hidden />
          <h3 className="text-lg font-semibold uppercase tracking-[0.2em] text-white/50">
            More Work
          </h3>
          <span className="h-px flex-1 bg-white/10" aria-hidden />
        </div>

        {more.length === 0 ? (
          <p className="text-center text-secondary">No additional projects.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((project, index) => (
              <MoreCard key={project.name} project={project} index={index} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
