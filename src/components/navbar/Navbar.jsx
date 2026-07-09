"use client";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

import { useActiveSection } from "@/hooks/useActiveSection";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/locales/languageContext";


const Navbar = () => {
  const { lang } = useLanguage();

  const LINKS = [
    { name: lang.navbar.links.home, url: "home" },
    { name: lang.navbar.links.about, url: "about" },
    { name: lang.navbar.links.projects, url: "projects" },
    { name: lang.navbar.links.contact, url: "contact" }
  ];

  const [isOpen, setIsOpen] = useState(false);
  
  const activeLink = useActiveSection(LINKS.map((l) => l.url));
  

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <header
      className="fixed left-0 top-0 z-50 max-h-20 w-full bg-blue text-slate-50"
      role="banner"
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:outline-none"
      >
        {lang.navbar.skipToContent}
      </a>
      <nav
        className="flex h-20 w-full items-center justify-between px-4 py-2"
        aria-label={lang.navbar.navAriaLabel}
      >
        <Link
          href="#home"
          className="group flex items-center gap-1 text-xl font-black uppercase tracking-tight text-white"
          aria-label={lang.navbar.logoAriaLabel}
        >
          Riuri
          <span className="text-purple-400 transition-colors group-hover:text-purple-300">
            .
          </span>
          <span className="text-white/40 transition-colors group-hover:text-white/60">
            dev
          </span>
        </Link>

        {/* Hamburger */}
        <button
          onClick={toggleMenu}
          className="text-white focus:text-purple-400 focus:outline-none md:hidden"
          aria-label={
            isOpen ? lang.navbar.closeMenu : lang.navbar.openMenu
          }
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Desktop links */}
        <ul
          className="hidden space-x-6 md:flex"
          aria-label={lang.navbar.linksAriaLabel}
        >
          {LINKS.map((link, index) => (
            <li key={link.url + index}>
              <Link
                className="group relative flex flex-col items-center px-2 py-4 text-xl font-medium text-slate-50 transition-colors hover:text-slate-300"
                href={`#${link.url}`}
                aria-label={`${lang.navbar.navigateTo} ${link.name}`}
                aria-current={activeLink === link.url ? "true" : undefined}
              >
                {link.name}

                <motion.span
                  className="mt-0.5 h-0.5 rounded-full bg-purple-400"
                  initial={false}
                  animate={{
                    width: activeLink === link.url ? "100%" : "0%"
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100dvh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-blue md:hidden"
            aria-hidden={!isOpen}
            rule="navigation"
          >
            <ul
              className="flex flex-col space-y-2 p-4 pt-8"
              role="list"
              aria-label={lang.navbar.mobileLinksAriaLabel}
            >
              {LINKS.map((link, index) => (
                <motion.li
                  key={index + link.url}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.1 + index * 0.07,
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  <Link
                    className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-xl font-medium transition-colors ${
                      activeLink === link.url
                        ? "text-white"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                    href={`#${link.url}`}
                    onClick={toggleMenu}
                    aria-label={`${lang.navbar.navigateTo} ${link.name}`}
                  >
                    <motion.span
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400"
                      initial={false}
                      animate={{
                        opacity: activeLink === link.url ? 1 : 0,
                        scale: activeLink === link.url ? 1 : 0.5
                      }}
                      transition={{ duration: 0.2 }}
                    />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
