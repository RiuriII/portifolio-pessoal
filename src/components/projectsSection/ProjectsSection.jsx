import Image from "next/image";

import Reveal from "../reveal/Reveal";
import Card from "./Card";

import { cn } from "@/lib/utils";

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

const PROJECTS_DATA = [
  {
    title: "SQL Visualizer",
    description:
      "Extensão para o Visual Studio Code que transforma arquivos .sql em diagramas visuais de banco de dados, facilitando a compreensão da estrutura e relacionamento entre tabelas durante o desenvolvimento.",
    imageSrc: "/images/editor_with_sticker.png",
    imageDescription: "Screenshot do SQL Visualizer no VS Code",
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
    title: "IGNITION Δ",
    description:
      "Landing page interativa desenvolvida com Next.js e Three.js, explorando a integração de elementos 3D para criar uma experiência visual mais imersiva.",
    imageSrc: "/images/ignition_mockup.png",
    imageDescription:
      "Mockup da landing page IGNITION com elementos 3D e visual futurista",
    buttons: [
      { text: "Demo", type: "demo", url: "https://thunder-x.vercel.app/" },
      {
        text: "GitHub",
        type: "git",
        url: "https://github.com/RiuriII/ThunderX"
      }
    ],
    class: "origin-center scale-100"
  },
  {
    title: "Casecobra",
    description:
      "CaseCobra é uma loja e-commerce completa desenvolvida do zero usando o Next.js  App Router, Postgres, TypeScript, Tailwind e Kinde Auth",
    imageSrc: "/images/cobracase_mockup.png",
    imageDescription:
      "Mockup da loja Casecobra com interface moderna e responsiva",
    buttons: [
      {
        text: "Demo",
        type: "demo",
        url: "https://cobracase-liard.vercel.app/"
      },
      {
        text: "GitHub",
        type: "git",
        url: "https://github.com/RiuriII/cobracase"
      }
    ],
    class: "origin-center scale-150"
  },

  {
    title: "Atlas Library",
    description:
      "Aplicação voltada à organização de acervos, explorando regras de empréstimo, reservas e notificações, com foco na modelagem de dados e fluxos de uso dentro de um sistema de gestão.",
    imageSrc: "/images/atlas_library.svg",
    imageDescription: "Imagem ilustrativa da  aplicação Atlas Library",
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

const ProjectsSection = async () => {
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
      <div className="relative z-20 mb-16 w-full max-w-5xl px-8 md:px-16">
        <div className="flex items-center gap-3" aria-hidden="true">
          <span className="h-px w-10 bg-purple-400" />
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-purple-300">
            Projetos
          </span>
        </div>
        <h2
          className="mt-2 text-[clamp(2rem,5vw,3.5rem)] font-black leading-none tracking-tight text-white"
          id="projects-heading"
        >
          O que eu construí
          <span className="text-purple-400" aria-hidden="true">
            .
          </span>
        </h2>
        <div className="mt-4 h-px w-24 bg-gradient-to-r from-purple-400 to-transparent" />
      </div>

      {/* ── Project list ── */}
      <ol className="relative z-20 flex w-full max-w-5xl flex-col gap-24 px-8 md:px-16">
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
