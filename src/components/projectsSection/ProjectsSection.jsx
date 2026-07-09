import Image from "next/image";

import Reveal from "../reveal/Reveal";
import Card from "./Card";

import { cn } from "@/lib/utils";
import { getServerLang } from "@/locales/getServerLang";

async function getDownloads() {
  let downloads = null;

  try {
    const res = await fetch(
      "https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json;api-version=3.0-preview.1"
        },
        body: JSON.stringify({
          filters: [
            { criteria: [{ filterType: 7, value: "RiuriDev.sql-visualizer" }] }
          ],
          flags: 914
        }),
        next: { revalidate: 21600 } // cache de 6h do Next.js
      }
    );
    const data = await res.json();

    const stats = data.results[0].extensions[0].statistics;

    const installs = stats.find((s) => s.statisticName === "install")?.value;

    downloads = isNaN(Number(installs)) ? null : Number(installs);
  } catch {
    downloads = null;
  }

  return downloads;
}


const ProjectsSection = async () => {
  const lang = await getServerLang();

  const PROJECTS_DATA = [
    {
      title: lang.projectsSection.projects.sqlVisualizer.title,
      description: lang.projectsSection.projects.sqlVisualizer.description,
      imageSrc: "/images/editor_with_sticker.png",
      imageDescription: lang.projectsSection.projects.sqlVisualizer.imageDescription,
      downloads: await getDownloads(),
      buttons: [
        {
          text: "Marketplace",
          type: "demo",
          url: "https://marketplace.visualstudio.com/items?itemName=RiuriDev.sql-visualizer",
          width: "w-[160px]"
        },
        {
          text: "GitHub",
          type: "git",
          url: "https://github.com/RiuriII/sql-diagram-visualizer"
        }
      ]
    },
    {
      title: lang.projectsSection.projects.ignition.title,
      description: lang.projectsSection.projects.ignition.description,
      imageSrc: "/images/ignition_mockup.png",
      imageDescription: lang.projectsSection.projects.ignition.imageDescription,
      buttons: [
        { text: "Demo", type: "demo", url: "https://thunder-x.vercel.app/" },
        {
          text: "GitHub",
          type: "git",
          url: "https://github.com/RiuriII/ThunderX"
        }
      ],
      class: "object-cover origin-center scale-110 max-md:scale-100"
    },
    {
      title: lang.projectsSection.projects.miaw.title,
      description: lang.projectsSection.projects.miaw.description,
      imageSrc: "/images/miawcafe_mockup.png",
      imageDescription: lang.projectsSection.projects.miaw.imageDescription,
      buttons: [
        {
          text: "Demo",
          type: "demo",
          url: "https://miaw-cafe.netlify.app/"
        },
        {
          text: "GitHub",
          type: "git",
          url: "https://github.com/RiuriII/miaw_cafe"
        }
      ],
      class: "object-cover origin-center scale-110 max-md:scale-100"
    },
  
    {
      title: lang.projectsSection.projects.atlasLibrary.title,
      description: lang.projectsSection.projects.atlasLibrary.description,
      imageSrc: "/images/atlas_library.svg",
      imageDescription: lang.projectsSection.projects.atlasLibrary.imageDescription,
      buttons: [
        {
          text: "GitHub",
          type: "git",
          url: "https://github.com/RiuriII/atlas_library"
        }
      ],
      class: "w-[500px] max-md:max-w-full"
    }
  ];

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative flex min-h-[calc(100vh-5rem)] w-full scroll-mt-20 flex-col items-center justify-center overflow-hidden bg-blue pb-16 pt-20"
    >
      {/* Grid background — same as home */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />

      {/* Glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-purple-800/10 blur-3xl" />
      </div>

      {/* ── Section Header ── */}
      <div className="relative z-20 mb-16 w-full max-w-5xl px-8 max-[360px]:px-6 md:px-16">
        <div className="flex items-center gap-3" aria-hidden="true">
          <span className="h-px w-10 bg-purple-400" />
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-purple-300">
            {lang.projectsSection.header.eyebrow}
          </span>
        </div>
        <h2
          className="mt-2 text-[clamp(2rem,5vw,3.5rem)] font-black leading-none tracking-tight text-white"
          id="projects-heading"
        >
          {lang.projectsSection.header.title}
          <span className="text-purple-400" aria-hidden="true">
            {lang.projectsSection.header.titleHighlight}
          </span>
        </h2>
        <div className="mt-4 h-px w-24 bg-gradient-to-r from-purple-400 to-transparent" />
      </div>

      {/* ── Project list ── */}
      <ol className="relative z-20 flex w-full max-w-5xl flex-col gap-24 px-8 max-[360px]:px-6 md:px-16">
        {PROJECTS_DATA.map((project, index) => (
          <Reveal key={index}>
            <li
              className={cn(
                "flex items-center justify-between gap-12 max-md:flex-col max-sm:gap-8",
                index % 2 !== 0 ? "flex-row-reverse" : "flex-row"
              )}
            >
              {/* Image */}
              <article
                aria-labelledby={`project-${project.title.toLowerCase().replace(/\s+/g, "-")}-title`}
                className="relative flex w-full max-w-[460px] shrink-0 items-center justify-center max-sm:max-w-full"
              >
                {/* Subtle glow behind image */}
                <div className="absolute inset-0 rounded-2xl bg-purple-500/15 blur-2xl" />
                <Image
                  src={project.imageSrc}
                  alt={project.imageDescription}
                  className={cn(
                    "relative aspect-[1.43] w-full object-contain drop-shadow-2xl",
                    project.class
                  )}
                  width={500}
                  height={500}
                  loading="lazy"
                />
              </article>
              {/* Card */}
              <Card
                title={project.title}
                description={project.description}
                index={index}
                buttons={project.buttons}
                downloads={project.downloads}
              />
            </li>
          </Reveal>
        ))}
      </ol>

      {/* Bottom-right number decoration */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 select-none overflow-hidden"
        aria-hidden="true"
      >
        <span className="block translate-x-6 translate-y-6 text-[18rem] font-black leading-none text-white/[0.025]">
          03
        </span>
      </div>
    </section>
  );
};

export default ProjectsSection;
