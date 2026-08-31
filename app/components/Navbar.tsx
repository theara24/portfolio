'use client';

import { navLinks } from '@/app/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import ResumeButton from './ResumeButton';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Track whether we've scrolled past the top for the bg transition
      setScrolled(currentScroll > 40);

      if (currentScroll > lastScrollY && currentScroll > 100) {
        // scrolling down → hide
        setHidden(true);
      } else {
        // scrolling up → show
        setHidden(false);
      }
      setLastScrollY(currentScroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    controls.start({
      y: hidden ? -100 : 0,
      transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] },
    });
  }, [hidden, controls]);

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLLIElement>,
    callback: () => void
  ) => {
    if (e.key === 'Enter' || e.key === ' ') {
      callback();
    }
  };

  return (
    <motion.nav
      animate={controls}
      initial={{ y: 0 }}
      className={`paddingX w-full flex items-center py-4 fixed top-0 z-30 transition-all duration-300 ${
        hidden
          ? 'pointer-events-none bg-transparent'
          : scrolled
          ? 'bg-[#050816]/70 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2 cursor-pointer"
          whileHover={{ scale: 1.08, rotate: -2 }}
          transition={{ duration: 0.2 }}
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <Link href="#" aria-label="Back to top">
            <Image
              src="/my_logo.png"
              width={80}
              height={80}
              alt="logo"
              priority
              className="object-contain"
            />
          </Link>
          <p className="text-white text-[18px] font-bold flex">
            Theara <span className="sm:block hidden">&nbsp;| theara24</span>
          </p>
        </motion.div>

        {/* Desktop Links */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <motion.li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-white' : 'text-white/70'
              } text-[18px] font-medium relative group`}
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.25 }}
              onClick={() => setActive(nav.title)}
              onKeyDown={(e) => handleKeyDown(e, () => setActive(nav.title))}
            >
              <Link href={`#${nav.id}`}>{nav.title}</Link>
              {/* Underline hover effect */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/80 group-hover:w-full transition-all duration-300" />
            </motion.li>
          ))}
        </ul>

        {/* Resume Button (Desktop) */}
        <div className="mt-2 lg:block hidden">
          <ResumeButton />
        </div>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? '/close.svg' : '/menu.svg'}
            width={28}
            height={28}
            alt="menu"
            className="cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <motion.div
            animate={{
              opacity: toggle ? 1 : 0,
              y: toggle ? 0 : -20,
              transition: { duration: 0.3, ease: 'easeOut' },
            }}
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl absolute top-20 right-0 mx-4 my-2 min-w-[160px] z-10 shadow-lg`}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((nav) => (
                <motion.li
                  key={nav.id}
                  className={`font-poppins text-[16px] font-medium relative group ${
                    active === nav.title ? 'text-white' : 'text-white/70'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                  onKeyDown={(e) =>
                    handleKeyDown(e, () => {
                      setToggle(false);
                      setActive(nav.title);
                    })
                  }
                >
                  <Link href={`#${nav.id}`}>{nav.title}</Link>
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-white/80 group-hover:w-full transition-all duration-200" />
                </motion.li>
              ))}
              <li>
                <div className="mt-2">
                  <ResumeButton />
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
