"use client";
import Image from "next/image";

import { fadeUp } from "@/lib/utils";
import { motion } from "framer-motion";

const SKILLS = [
  { name: "HTML", icon: "/images/html.svg" },
  { name: "CSS", icon: "/images/css.svg" },
  { name: "JavaScript", icon: "/images/javascript.svg" },
  { name: "TypeScript", icon: "/images/typescript.svg" },
  { name: "Node.js", icon: "/images/nodejs.svg" },
  { name: "React", icon: "/images/react.svg" },
  { name: "Next.js", icon: "/images/nextjs.svg" },
  { name: "Tailwind", icon: "/images/tailwindcss.svg" },
  { name: "Figma", icon: "/images/figma.svg" },
  { name: "Sass", icon: "/images/sass.svg" }
];

const INFO_ITEMS = [
  { label: "Foco", value: "Front-end & Back-end" },
  { label: "Stack principal", value: "React · Next.js · Node" },
  {
    label: "Diferenciais",
    value: "SEO · Acessibilidade · Performance"
  },
  { label: "Abordagem", value: "Clean code · Boas práticas" }
];

const AboutSection = () => {
  return (
    <section
      className="relative min-h-[calc(100vh-5rem)] w-full scroll-mt-20 overflow-hidden bg-slate-50 py-24"
      id="about"
      aria-labelledby="about-heading"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-48 top-0 h-[500px] w-[500px] rounded-full bg-purple-100/60 blur-3xl" />
        <div className="bg-blue-100/40 absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-8 md:px-16">
        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* Left: text */}
          <div>
            <motion.div
              {...fadeUp(0.1)}
              className="mb-4 flex items-center gap-3"
              aria-hidden="true"
            >
              <span className="h-px w-10 bg-purple-500" />
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-purple-500">
                Sobre mim
              </span>
            </motion.div>

            <motion.h2
              {...fadeUp(0.2)}
              className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-none tracking-tight text-slate-900"
              id="about-heading"
            >
              Quem sou
              <span className="text-purple-500" aria-hidden="true">
                .
              </span>
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.35
              }}
              className="my-6 h-px w-24 bg-gradient-to-r from-purple-500 to-transparent"
              aria-hidden="true"
            />

            <motion.p
              {...fadeUp(0.4)}
              className="text-base leading-8 text-slate-600"
            >
              Desenvolvedor focado na construção de interfaces modernas com{" "}
              <span className="font-semibold text-slate-900">React</span> e{" "}
              <span className="font-semibold text-slate-900">Next.js</span>, com
              experiência também no desenvolvimento de APIs e base de dados.
            </motion.p>

            <motion.p
              {...fadeUp(0.5)}
              className="mt-4 text-base leading-8 text-slate-600"
            >
              Gosto de transformar ideias em aplicações funcionais, buscando
              soluções simples e bem estruturadas para problemas reais. Meu foco
              é construir aplicações{" "}
              <span className="font-semibold text-slate-900">responsivas</span>,{" "}
              <span className="font-semibold text-slate-900">acessíveis</span> e
              com as melhores práticas de{" "}
              <span className="font-semibold text-slate-900">SEO</span>.
            </motion.p>
          </div>

          {/* Right: decorative card */}
          <motion.div {...fadeUp(0.3)} className="relative hidden md:block">
            <div className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60">
              {/* Corner accent */}
              <div
                className="absolute -bottom-3 -left-3 h-5 w-5 rounded-full border-2 border-purple-300 bg-slate-50"
                aria-hidden="true"
              />

              {INFO_ITEMS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.4 + i * 0.08,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className={`flex flex-col py-3 ${i < 3 ? "border-b border-slate-100" : ""}`}
                >
                  <span className="text-xs font-medium uppercase tracking-widest text-slate-400">
                    {item.label}
                  </span>
                  <span className="mt-1 text-sm font-semibold text-slate-800">
                    {item.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── SKILL-SET ── */}
        <div className="mt-24">
          <motion.div
            {...fadeUp(0.1)}
            className="mb-4 flex items-center gap-3"
            aria-hidden="true"
          >
            <span className="h-px w-10 bg-purple-500" />
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-purple-500">
              Skill-Set
            </span>
          </motion.div>

          <motion.h3
            {...fadeUp(0.2)}
            className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-none tracking-tight text-slate-900"
            id="skills-heading"
          >
            Tecnologias
            <span className="text-purple-500" aria-hidden="true">
              .
            </span>
          </motion.h3>

          <ul
            className="mt-10 grid grid-cols-5 gap-4 max-sm:grid-cols-4 md:grid-cols-10"
            role="list"
            aria-labelledby="skills-heading"
          >
            {SKILLS.map((skill, index) => (
              <li key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.1 + index * 0.05,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm shadow-slate-100 transition-shadow hover:shadow-md hover:shadow-purple-100"
                >
                  <Image
                    src={skill.icon}
                    alt={skill.name + " icon"}
                    width={36}
                    height={36}
                    className="aspect-square transition-transform duration-200 group-hover:scale-110"
                  />
                  <p className="text-center text-[11px] font-medium text-slate-500 group-hover:text-purple-600">
                    {skill.name}
                  </p>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom-right large text decoration */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 select-none overflow-hidden"
        aria-hidden="true"
      >
        <span className="block translate-x-6 translate-y-6 text-[18rem] font-black leading-none text-slate-900/[0.03]">
          02
        </span>
      </div>
    </section>
  );
};

export default AboutSection;
