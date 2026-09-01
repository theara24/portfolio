"use client";
import { staggerContainer } from "@/app/utils/motion";
import { motion, useInView } from "framer-motion";
import type { FC } from "react";
import { useEffect, useRef, useState } from "react";

const SectionWrapper = (Component: FC, idName: string) => {
	return function HOC() {
		const ref = useRef<HTMLDivElement>(null);
		const inView = useInView(ref, { once: true, amount: 0.25 });
		const [fallbackVisible, setFallbackVisible] = useState(false);

		// Fallback: if IntersectionObserver never fires (e.g. when combined
		// with Lenis smooth scroll), force the section visible shortly after
		// mount so cards are never left hidden.
		useEffect(() => {
			const timer = setTimeout(() => setFallbackVisible(true), 400);
			return () => clearTimeout(timer);
		}, []);

		const show = inView || fallbackVisible;

		return (
			<motion.div
				ref={ref}
				variants={staggerContainer()}
				initial="hidden"
				animate={show ? "show" : "hidden"}
				className="padding max-w-7xl mx-auto relative z-0"
			>
				<span className="hash-span" id={idName}>
					{" "}
					&nbsp;{" "}
				</span>
				<Component />
			</motion.div>
		);
	};
};

export default SectionWrapper;
