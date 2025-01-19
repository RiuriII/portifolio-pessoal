"use client";
import Link from "next/link";
import { useState } from "react";

import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      name: "Home",
      url: "home"
    },
    {
      name: "Sobre Mim",
      url: "about"
    },
    {
      name: "Projetos",
      url: "projects"
    },
    {
      name: "Contato",
      url: "contact"
    }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed left-0 top-0 z-50 max-h-20 w-full bg-blue text-slate-50">
      <nav className="flex h-20 w-full items-center justify-between px-4 py-2">
        <div className="text-2xl font-bold">Riuri Dev</div>
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none md:hidden"
        >
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
        <ul id="menu" className="hidden space-x-6 md:flex">
          {links.map((link, index) => {
            return (
              <li key={index}>
                <Link
                  className="px-2 py-4 text-xl font-medium text-slate-50 hover:text-slate-400"
                  href={`#${link.url}`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="overflow-hidden md:hidden"
      >
        <ul className="flex h-dvh flex-col space-y-6 bg-blue p-4 pt-8">
          {links.map((link, index) => {
            return (
              <li key={index}>
                <Link
                  className="block w-full text-xl font-medium text-slate-50 hover:text-slate-400"
                  href={`#${link.url}`}
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </header>
  );
};

export default Navbar;
