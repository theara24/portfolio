"use client";

import Image from "next/image";
import Link from "next/link";
import { testimonials } from "../constants";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { SectionWrapper } from "./HigherOrderComponents";

const SOCIAL_STYLES: Record<string, { iconBg: string; border: string }> = {
  github: { iconBg: "from-slate-600 to-slate-800", border: "hover:border-slate-400/40" },
  linkedin: { iconBg: "from-sky-500 to-blue-700", border: "hover:border-sky-400/40" },
  telegram: { iconBg: "from-sky-400 to-blue-500", border: "hover:border-sky-300/40" },
};

const SocialCard = ({
  index,
  name,
  link,
  image,
  description,
}: {
  index: number;
  name: string;
  link: string;
  image: string;
  description: string;
}) => {
  const key = image.toLowerCase().includes("github")
    ? "github"
    : image.toLowerCase().includes("linkedin")
    ? "linkedin"
    : "telegram";
  const style = SOCIAL_STYLES[key];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`card-lift group flex items-center gap-4 rounded-2xl border border-white/10 bg-tertiary/60 p-5 ${style.border}`}
      >
        <span
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br p-px ${style.iconBg}`}
        >
          <span className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-[#0d0a20]">
            <Image
              src={image}
              alt={name}
              width={44}
              height={44}
              className="h-full w-full object-contain p-2"
              loading="lazy"
            />
          </span>
        </span>
        <span className="min-w-0">
          <span className="block text-base font-bold capitalize text-white">
            {name}
          </span>
          <span className="block truncate text-sm text-secondary">
            {description}
          </span>
        </span>
      </Link>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <>
      <SectionHeading
        kicker="Connect"
        title="Let's connect."
        description="Find me online — explore my code, professional background, or reach out directly."
      />
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {testimonials.map((t, index) => (
          <SocialCard
            key={t.name + t.link}
            index={index}
            name={t.name}
            link={t.link}
            image={t.image}
            description={t.testimonial.split(" ").slice(0, 10).join(" ") + "…"}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Feedbacks, "");
