import Image from 'next/image';
import React from 'react';

const ResumeButton = () => {
  return (
    <a
      href="/resume/Chim-Theara_CV.pdf"
      download="Chim-Theara_CV.pdf"
      aria-label="Download CV (PDF)"
      className="group relative inline-flex h-11 w-full shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full border border-white/15 bg-gradient-to-r from-purple-600 to-cyan-600 px-4 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 ease-out hover:border-white/30 hover:shadow-xl hover:shadow-purple-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816] motion-reduce:transform-none motion-reduce:transition-none lg:h-10 lg:w-auto lg:px-4 lg:text-[13px] lg:hover:-translate-y-0.5 active:translate-y-0"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full motion-reduce:hidden"
      />
      <Image
        src="/resume.svg"
        width={16}
        height={16}
        alt=""
        aria-hidden
        className="relative h-4 w-4 shrink-0 object-contain transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none motion-reduce:transition-none"
      />
      <span className="relative whitespace-nowrap">Download CV</span>
    </a>
  );
};

export default ResumeButton;
