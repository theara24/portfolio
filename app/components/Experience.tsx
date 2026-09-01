"use client";
import { SectionWrapper } from "@/app/components/HigherOrderComponents";
import { experiences } from "@/app/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

type ExperienceCardProps = {
  experience: (typeof experiences)[0];
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <VerticalTimelineElement
      visible={true}
      contentStyle={{
        background: "#12102a",
        color: "#fff",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "18px",
        boxShadow: "0 20px 40px -20px rgba(0,0,0,0.5)",
      }}
      contentArrowStyle={{ borderRight: "7px solid #12102a" }}
      date={experience.date}
      dateClassName=" !text-[14px] !text-secondary"
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <Image
            src={experience.icon}
            alt={experience.company_name}
            className="h-[60%] w-[60%] object-contain"
            width={48}
            height={48}
          />
        </div>
      }
    >
      <div>
        <h3 className="text-xl font-bold text-white">{experience.title}</h3>
        <p className="mt-0.5 text-sm font-semibold text-cyan-300">
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 space-y-3">
        {experience.points.map((point, index) => (
          <motion.li
            key={`experience-point-${index}`}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="flex items-start gap-3 text-[14px] leading-[1.7] text-white-100/90"
          >
            <CheckCircle2
              className="mt-1 h-4 w-4 shrink-0 text-emerald-400"
              aria-hidden
            />
            <span>{point}</span>
          </motion.li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience: React.FC = () => {
  return (
    <>
      <SectionHeading
        kicker="Career"
        title="Work Experience."
        description="A look at the roles, teams, and production systems I've contributed to as a backend developer and full-stack engineer."
      />

      <div className="mt-12">
        <VerticalTimeline lineColor="rgba(255,255,255,0.12)">
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
};

export default SectionWrapper(Experience, "work");
