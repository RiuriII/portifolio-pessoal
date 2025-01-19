import Image from "next/image";

import Reveal from "../reveal/Reveal";
import ActionButtons from "./ActionButtons";
import Card from "./Card";

import { cn } from "@/lib/utils";

// import { motion } from "framer-motion";

const ProjectsSection = () => {
  const projectsData = [
    {
      title: "Casecobra",
      description:
        "CaseCobra é uma loja e-commerce completa desenvolvida do zero usando o Next.js 14 App Router, Postgres, TypeScript, Tailwind e Kinde Auth",
      imageSrc: "/images/cobracase_mockup.png",
      imageDescription: "Descriptive image for the component",
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
      class: "origin-center  scale-150"
    },
    {
      title: "SQL Visualizer",
      description:
        "SQL Visualizer é uma extensão para o Visual Studio Code que converte arquivos com a extensão '.sql' para um diagrama de banco de dados em svg.",
      imageSrc: "/images/editor_with_sticker.png",
      imageDescription: "Descriptive image for the component",
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
      title: "Atlas Library",
      description:
        "Atlas Library  é uma aplicação de gerenciamento de biblioteca, desenvolvida com o intuito de facilitar o acesso e a organização de livros para bibliotecas públicas e seus usuários. A aplicação permite operações como empréstimos, reservas, gestão de multas e notificações por e-mail.",
      imageSrc: "/images/atlas_library.svg",
      imageDescription: "Descriptive image for the component",
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
      className="relative flex h-full min-h-[calc(100vh-5rem)] w-full scroll-mt-20 flex-col items-center justify-center gap-5 space-y-12 overflow-hidden bg-blue pb-8 pt-16 max-md:flex-col"
    >
      {projectsData.map((project, index) => {
        return (
          <Reveal key={index}>
            <div
              id={index}
              className="z-20 flex items-center justify-center space-x-12 max-sm:flex-col max-sm:space-x-0"
            >
              <div className="z-20 flex w-full max-w-[500px] items-center justify-center max-md:ml-0 max-md:w-full">
                <Image
                  src={project.imageSrc}
                  alt={project.imageDescription}
                  className={cn(
                    "my-auto aspect-[1.43] w-full self-stretch object-contain max-md:mt-10 max-md:max-w-full",
                    project.class
                  )}
                  width={500}
                  height={500}
                  loading="lazy"
                />
              </div>
              <div className="max-md:ml-0 max-md:w-full">
                <div className="flex w-full flex-col items-start text-white max-md:mt-10 max-md:max-w-full">
                  <Card
                    title={project.title}
                    description={project.description}
                  />
                  <ActionButtons buttons={project.buttons} />
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
      <svg
        className="pointer-events-none absolute inset-0 z-10 h-full w-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="cyber-grid"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 20 L40 20 M20 0 L20 40"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cyber-grid)" />
      </svg>
    </section>
  );
};

export default ProjectsSection;
