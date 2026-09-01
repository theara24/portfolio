'use client';

import { navLinks } from '@/app/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ResumeButton from './ResumeButton';

const RESUME_NAV_IDS = ['about', 'skills', 'education', 'work', 'projects', 'contact'];

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive((entry.target as HTMLElement).id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    const els = RESUME_NAV_IDS.map((id) =>
      document.getElementById(id)
    ).filter(Boolean) as HTMLElement[];
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = toggle ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [toggle]);

  const goTo = (id: string) => {
    setActive(id);
    setToggle(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLogo = () => {
    setActive('');
    setToggle(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#050816]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container-px flex h-16 items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={handleLogo}
          className="flex items-center gap-2.5"
          aria-label="Back to top"
        >
          <Image
            src="/my_logo.png"
            width={40}
            height={40}
            alt="Theara Chim logo"
            priority
            className="object-contain"
          />
          <span className="text-[17px] font-bold leading-none text-white">
            Theara <span className="font-normal text-white/40">Chim</span>
          </span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden list-none items-center gap-8 lg:flex">
          {navLinks.map((nav) => {
            const isActive = active === nav.id;
            return (
              <li key={nav.id}>
                <button
                  type="button"
                  onClick={() => goTo(nav.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative py-1 text-sm font-medium transition-colors ${
                    isActive ? 'text-white' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {nav.title}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-cyan-400 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0'
                    }`}
                  />
                </button>
              </li>
            );
          })}
          <li>
            <ResumeButton />
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setToggle((t) => !t)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] lg:hidden"
          aria-label={toggle ? 'Close menu' : 'Open menu'}
          aria-expanded={toggle}
        >
          <div className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-full bg-white transition-all duration-300 ${
                toggle ? 'top-1/2 -translate-y-1/2 rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-white transition-all duration-300 ${
                toggle ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-0.5 w-full bg-white transition-all duration-300 ${
                toggle ? 'bottom-1/2 translate-y-1/2 -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {toggle && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-x-0 top-16 z-40 border-b border-white/10 bg-[#09031f]/95 px-6 py-6 backdrop-blur-xl lg:hidden"
        >
          <ul className="flex list-none flex-col gap-2">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <button
                  type="button"
                  onClick={() => goTo(nav.id)}
                  className={`w-full rounded-lg px-4 py-3 text-left text-base font-medium transition-colors ${
                    active === nav.id
                      ? 'bg-white/[0.06] text-white'
                      : 'text-white/70 hover:bg-white/[0.04] hover:text-white'
                  }`}
                >
                  {nav.title}
                </button>
              </li>
            ))}
            <li className="mt-3">
              <div className="flex justify-center">
                <ResumeButton />
              </div>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
