"use client";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }
});

const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/in/riuri-alves-boneta/",
    src: "/images/linkedin.svg",
    alt: "LinkedIn de Riuri Boneta (abre em nova aba)"
  },
  {
    href: "https://github.com/RiuriII",
    src: "/images/github.svg",
    alt: "GitHub de Riuri Boneta (abre em nova aba)"
  }
];

const HomeSection = () => {
  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="relative flex min-h-screen w-full scroll-mt-20 items-center overflow-hidden bg-blue pt-20 text-white"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full border border-white/5" />
        <div className="absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full border border-white/5" />
        <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        />
      </div>

      <div
        id="main-content"
        className="relative z-10 flex w-full flex-col items-start px-8 md:px-16 lg:px-24"
      >
        <motion.div
          {...fadeUp(0.1)}
          className="mb-4 flex items-center gap-3"
          aria-hidden="true"
        >
          <span className="h-px w-10 bg-purple-400" />
        </motion.div>

        <motion.p
          {...fadeUp(0.2)}
          className="text-xl font-light text-white/60"
          aria-hidden="true"
        >
          Olá, eu sou
        </motion.p>

        <motion.h1
          {...fadeUp(0.3)}
          id="home-heading"
          className="mt-1 text-[clamp(3rem,10vw,7rem)] font-black uppercase leading-none tracking-tight text-white"
        >
          <span>
            Riuri
            <span
              className="ml-4 text-[clamp(3rem,10vw,7rem)] font-black uppercase leading-none text-purple-400"
              aria-hidden="true"
            >
              Boneta
            </span>
          </span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          className="my-6 h-px w-32 bg-gradient-to-r from-purple-400 to-transparent"
          aria-hidden="true"
        />

        <motion.p
          {...fadeUp(0.5)}
          className="max-w-[520px] text-xl font-light leading-relaxed text-white/70"
        >
          Desenvolvedor Web construindo aplicações{" "}
          <span className="font-semibold text-white">performáticas</span> e{" "}
          <span className="font-semibold text-white">escaláveis</span>.
        </motion.p>

        {/* Links */}
        <motion.div {...fadeUp(0.65)} className="mt-10 flex items-center gap-2">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="/resume.pdf"
            download="riuri-boneta-cv.pdf"
            aria-label="Baixar currículo de Riuri Boneta em PDF (abre em nova aba)"
            className="group flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-500/10 px-5 py-2.5 text-sm font-medium text-purple-200 backdrop-blur-sm transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/25 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
          >
            <Image
              src="/images/document.svg"
              alt=""
              aria-hidden="true"
              width={18}
              height={18}
              className="opacity-80 transition group-hover:opacity-100"
            />
            Currículo
          </Link>

          <div className="mx-3 h-5 w-px bg-white/20" aria-hidden="true" />

          {SOCIAL_LINKS.map((link) => (
            <Link
              key={link.alt}
              target="_blank"
              rel="noopener noreferrer"
              href={link.href}
              aria-label={link.alt}
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/30 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
            >
              <Image
                src={link.src}
                alt=""
                aria-hidden="true"
                width={20}
                height={20}
                className="opacity-70 transition group-hover:opacity-100"
              />
            </Link>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 flex flex-col items-start gap-2"
          aria-hidden="true"
        >
          <span className="text-xs uppercase tracking-widest text-white/30">
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="h-6 w-px bg-gradient-to-b from-white/30 to-transparent"
          />
        </motion.div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 right-0 select-none overflow-hidden"
        aria-hidden="true"
      >
        <span className="block translate-x-8 translate-y-8 text-[20rem] font-black leading-none text-white/[0.025]">
          01
        </span>
      </div>
    </section>
  );
};

export default HomeSection;
