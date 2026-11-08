"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/locales/languageContext";
import { cn, fadeUp } from "@/lib/utils";
import MaxWidthWrapper from "@/components/maxWidthWrapper/MaxWidthWrapper";
import { projects } from "./projects";
import styles from "./ProjectSectionSketch.module.css";

const metricClassName =
  "flex w-fit flex-wrap items-center gap-[6px] py-[10px] [font-family:monospace] text-[12px] leading-[1.5] text-[#c5dab7]";

const diskDirections = [
  { x: 56, y: 0 },
  { x: -56, y: 0 },
  { x: 0, y: -56 },
  { x: 0, y: 56 }
];

function diskEntrance(index) {
  const base = fadeUp(0.12 + index * 0.08, { yOffset: 0, duration: 0.7 });
  return {
    ...base,
    initial: { ...base.initial, ...diskDirections[index] },
    whileInView: { ...base.whileInView, x: 0, y: 0 }
  };
}

export default function ProjectSectionSketch({ metrics = {} }) {
  const { lang, langCode } = useLanguage();
  const copy = lang.projectSketch;
  const [selected, setSelected] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);
  const screenRef = useRef(null);
  const titleRef = useRef(null);
  const visible = isOpen && !closing;
  const numberFormat = new Intl.NumberFormat(
    langCode === "pt" ? "pt-BR" : "en-US"
  );

  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    titleRef.current?.focus({ preventScroll: true });
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  function openProject(index, event) {
    triggerRef.current = event.currentTarget;
    setSelected(index);
    setClosing(false);
    setIsOpen(true);
    if (screenRef.current) screenRef.current.scrollTop = 0;
  }

  function finishClose() {
    dialogRef.current?.close();
    setIsOpen(false);
    setClosing(false);
    triggerRef.current?.focus({ preventScroll: true });
  }

  function requestClose() {
    setClosing(true);
  }

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative scroll-mt-20 overflow-hidden bg-blue pb-[60px] pt-[76px] text-[#eee9df] sm:pb-[90px] sm:pt-[100px]"
    >
      <MaxWidthWrapper as="header" className="relative z-20 mb-16">
        <motion.div
          {...fadeUp(0.1)}
          className="mb-4 flex items-center gap-3"
          aria-hidden="true"
        >
          <span className="h-px w-10 bg-purple-400" />
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-purple-300">
            {lang.projectsSection.header.eyebrow}
          </span>
        </motion.div>
        <motion.h2
          {...fadeUp(0.2)}
          className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-none tracking-tight text-white"
          id="projects-heading"
        >
          {lang.projectsSection.header.title}
          <span className="text-purple-400" aria-hidden="true">
            {lang.projectsSection.header.titleHighlight}
          </span>
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          className="my-6 h-px w-24 bg-gradient-to-r from-purple-400 to-transparent"
          aria-hidden="true"
        />
        <motion.p
          {...fadeUp(0.4)}
          className="max-w-xl text-base leading-8 text-slate-300"
        >
          {copy.intro}
        </motion.p>
      </MaxWidthWrapper>

      <div className="mx-auto max-w-[1098px] px-4 sm:px-6">
        <div className="relative px-[14px] sm:px-9">
          <ol className="grid grid-cols-1 gap-[58px] px-6 py-11 sm:grid-cols-2 sm:gap-x-14 sm:gap-y-[60px] sm:pb-[45px] sm:pt-[58px]">
            {projects.map((project, index) => (
              <motion.li key={project.id} {...diskEntrance(index)}>
                <motion.button
                  type="button"
                  className={cn(
                    styles.interactive,
                    "relative mx-auto block w-full max-w-[360px] cursor-pointer rounded-lg bg-transparent sm:max-w-none"
                  )}
                  aria-label={`${copy.open} ${lang.projectsSection.projects[project.id].title}`}
                  aria-haspopup="dialog"
                  onClick={(event) => openProject(index, event)}
                  initial={false}
                  animate={{
                    rotate: project.rotation,
                    scale: isOpen && selected === index ? 0.82 : 1
                  }}
                  whileHover={{ rotate: 0, y: -12, scale: 1.035 }}
                  whileFocus={{ rotate: 0, y: -8 }}
                  transition={{ type: "spring", stiffness: 220, damping: 24 }}
                >
                  <Image
                    className="h-auto w-full drop-shadow-[5px_18px_10px_#0007]"
                    src={`/images/project-disks/${project.slug}.png`}
                    alt=""
                    width={1254}
                    height={1254}
                    sizes="(width < 600px) 82vw, 440px"
                  />
                </motion.button>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className={cn(
          styles.dialog,
          "m-0 h-dvh w-full max-w-none overflow-auto overscroll-contain border-0 bg-transparent px-0 py-3 text-[#eee9df] max-sm:overflow-x-hidden sm:px-4 sm:py-[18px]"
        )}
        aria-labelledby="project-dialog-title"
        onCancel={(event) => {
          event.preventDefault();
          requestClose();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) requestClose();
        }}
      >
        <motion.div
          className={cn(styles.station, "pointer-events-none m-auto")}
          initial={false}
          animate={{ opacity: visible ? 1 : 0 }}
          transition={{
            duration: closing ? 0.22 : 0.18,
            delay: closing ? 0 : 0.08
          }}
          onAnimationComplete={() => {
            if (closing) finishClose();
          }}
        >
          <motion.div
            className={styles.monitor}
            initial={false}
            animate={{
              scale: visible ? [0.8, 1.025, 1] : 0.8,
              y: visible ? 0 : 28
            }}
            transition={
              closing
                ? { duration: 0.22, ease: "easeIn" }
                : {
                  scale: {
                    duration: 0.68,
                    delay: 0.08,
                    times: [0, 0.72, 1],
                    ease: [0.22, 1, 0.36, 1]
                  },
                  y: { duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }
                }
            }
          >
            <div className={styles.screenBacking} />
            <Image
              className={styles.frame}
              src="/images/project-disks/monitor-frame.png"
              alt=""
              width={1536}
              height={1024}
              sizes="(width < 600px) 100vw, 1000px"
            />
            <div className={styles.mobileFrame} aria-hidden="true" />
            <div
              className={cn(
                styles.screen,
                "overflow-y-auto overscroll-contain px-[14px] pb-[18px] pt-3 text-[#e4e8dd] sm:px-[22px]"
              )}
              ref={screenRef}
              tabIndex={0}
              role="region"
              aria-label={copy.details}
            >
              <div className="flex justify-between gap-[10px] border-b border-[#c5d2bd30] pb-3 text-[8px] leading-[normal] tracking-[0.06em] text-[#9eafa6] [font-family:monospace] sm:text-[10px]">
                <span>
                  PROJECT FILE / {String(selected + 1).padStart(2, "0")}
                </span>
                <span className="text-[#b3d096]" aria-hidden="true">
                  ● ONLINE
                </span>
              </div>
              <h3
                className="mb-[6px] mt-[17px] text-[28px] font-[750] leading-[1.1] tracking-[-0.04em] outline-none sm:text-[clamp(25px,3.5vw,39px)]"
                id="project-dialog-title"
                ref={titleRef}
                tabIndex={-1}
              >
                {lang.projectsSection.projects[projects[selected].id].title}
              </h3>
              {projects.map((project, index) => (
                <article key={project.id} hidden={selected !== index}>
                  <p className="text-[9px] leading-[normal] tracking-[0.15em] text-[#b7c8b2] [font-family:monospace]">
                    {project.category}
                  </p>
                  <ul
                    className="mb-5 mt-4 flex flex-wrap gap-[7px]"
                    aria-label={copy.stack}
                  >
                    {project.stack.map((item) => (
                      <li
                        className="rounded-[3px] border border-[#b7c8b244] px-2 py-[5px] text-[11px] leading-[normal] text-[#c5dab7] [font-family:monospace]"
                        key={item}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-[14px] text-sm leading-[1.65] text-[#d2d7d1]">
                    <p>{copy.projects[project.id].why}</p>
                    <p>{copy.projects[project.id].problem}</p>
                  </div>
                  <div className="flex flex-wrap gap-3 pb-2 pt-[22px]">
                    {project.links.map((link) => (
                      <a
                        className={cn(
                          styles.interactive,
                          "inline-flex min-h-11 items-center gap-[22px] rounded-[3px] border border-[#b7c8b26b] px-[15px] py-[9px] text-[12px] leading-[normal] text-[#e1efcf] [font-family:monospace] hover:bg-[#d2e6bc] hover:text-[#151f22]"
                        )}
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                        <span aria-hidden="true">↗</span>
                        <span className="sr-only"> ({copy.newTab})</span>
                      </a>
                    ))}
                  </div>
                  {project.id === "sqlVisualizer" &&
                    metrics.sqlVisualizer != null && (
                      <p className={metricClassName}>
                        <span aria-hidden="true">↓</span>{" "}
                        <strong className="font-bold text-[#e1efcf]">
                          {numberFormat.format(metrics.sqlVisualizer)}
                        </strong>{" "}
                        {copy.marketplaceInstalls}
                      </p>
                    )}
                  {project.id === "atlasLibrary" && (
                    <a
                      className={cn(
                        styles.interactive,
                        metricClassName,
                        "min-h-11 underline underline-offset-4"
                      )}
                      href="https://hub.docker.com/r/riuri/node_api"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span aria-hidden="true">↓</span>{" "}
                      <strong className="font-bold text-[#e1efcf]">
                        {metrics.atlasLibrary != null
                          ? numberFormat.format(metrics.atlasLibrary)
                          : `${numberFormat.format(10000)}+`}
                      </strong>{" "}
                      {copy.dockerPulls}
                      <span aria-hidden="true">↗</span>
                      <span className="sr-only"> ({copy.newTab})</span>
                    </a>
                  )}
                </article>
              ))}
            </div>
            <button
              type="button"
              className={cn(
                styles.eject,
                styles.interactive,
                "flex min-h-[38px] cursor-pointer items-center gap-[9px] rounded-[5px] border border-[#908774] bg-[#d9ceaf] px-3 py-[6px] text-[10px] uppercase leading-[normal] text-[#34312a] [font-family:monospace] sm:min-h-11 sm:px-[18px] sm:py-2 sm:text-[11px]"
              )}
              onClick={requestClose}
            >
              <span aria-hidden="true">⏏</span> {copy.eject}
            </button>
          </motion.div>
          <motion.div
            className={cn(
              styles.selector,
              "pointer-events-auto mx-auto mt-3 flex w-full max-w-full items-start justify-center gap-1 sm:w-fit sm:gap-6"
            )}
            role="group"
            aria-label={copy.switchProject}
            initial={false}
            animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 16 }}
            transition={{ duration: 0.25, delay: closing ? 0 : 0.38 }}
          >
            {projects.map((project, index) => (
              <button
                className={cn(
                  styles.interactive,
                  "w-[24%] max-w-[100px] rounded-[5px] px-[2px] pb-2 pt-[3px] opacity-[0.62] hover:opacity-100 aria-pressed:opacity-100 aria-pressed:shadow-[0_2px_#c5dab7] sm:w-[100px] sm:px-[5px] sm:pb-[5px]"
                )}
                type="button"
                key={project.id}
                aria-pressed={selected === index}
                aria-label={lang.projectsSection.projects[project.id].title}
                onClick={() => {
                  setSelected(index);
                  if (screenRef.current) screenRef.current.scrollTop = 0;
                }}
              >
                <Image
                  className="mx-auto h-[60px] w-[60px] object-contain sm:h-[68px] sm:w-[68px]"
                  src={`/images/project-disks/${project.slug}.png`}
                  alt=""
                  width={1254}
                  height={1254}
                  sizes="90px"
                />
                <span className="mt-[6px] block text-[9px] leading-[normal] text-[#e3dece] [font-family:monospace] sm:text-[10px]">
                  {lang.projectsSection.projects[project.id].title}
                </span>
              </button>
            ))}
          </motion.div>
          <p className="mt-[15px] text-center text-[9px] leading-[normal] text-[#b7b3aa] [font-family:monospace] sm:text-[10px]">
            {copy.closeHint}
          </p>
          <span className="sr-only" aria-live="polite">
            {isOpen
              ? lang.projectsSection.projects[projects[selected].id].title
              : ""}
          </span>
        </motion.div>
      </dialog>
    </section>
  );
}
