import Image from "next/image";

const AboutSection = () => {
  const skills = [
    { name: "HTML", icon: "/images/html.svg" },
    { name: "CSS", icon: "/images/css.svg" },
    { name: "JavaScript", icon: "/images/javascript.svg" },
    { name: "TypeScript", icon: "/images/typescript.svg" },
    { name: "Nodejs", icon: "/images/nodejs.svg" },
    { name: "React", icon: "/images/react.svg" },
    { name: "Nextjs", icon: "/images/nextjs.svg" },
    { name: "Tailwind css", icon: "/images/tailwindcss.svg" },
    { name: "Figma", icon: "/images/figma.svg" },
    { name: "Sass", icon: "/images/sass.svg" }
  ];
  return (
    <section
      className="h-full min-h-[calc(100vh-5rem)] w-full scroll-mt-20 bg-slate-50 py-8 text-blue"
      id="about"
    >
      <div className="max-w-full gap-2.5 self-stretch px-32 py-2 max-md:mt-10 max-md:px-5">
        <h2 className="text-center text-3xl font-semibold text-gray-800 max-sm:text-2xl">
          Sobre mim
        </h2>

        <p className="m-auto mt-6 w-[500px] max-w-full p-4 text-justify text-base leading-8 text-blue max-sm:w-full">
          Sou desenvolvedor front end, apaixonado por tecnologia, estou sempre
          em busca de novos conhecimentos e habilidades, colocando em prática
          tudo que aprendo em meus projetos. Meu foco é construir aplicações
          responsivas, acessíveis e com as melhores práticas de SEO.
        </p>
      </div>
      <div className="m-auto flex flex-col items-center justify-center">
        <h2 className="mt-7 max-w-full gap-2.5 self-stretch whitespace-nowrap px-32 py-2 text-center text-3xl font-semibold text-gray-800 max-md:px-5 max-sm:text-2xl">
          Skill-Set
        </h2>
        <div className="justify-left mt-4 flex w-[500px] flex-wrap items-center max-md:w-full max-sm:w-full">
          {skills.map((skill, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-end space-y-4 whitespace-nowrap p-4 text-center text-2xl font-semibold text-black"
              >
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={40}
                  height={40}
                  className="aspect-square"
                />
                <p className="text-center text-base font-light capitalize">
                  {skill.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
