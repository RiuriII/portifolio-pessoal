import Image from "next/image";
import Link from "next/link";

const HomeSection = () => {
  return (
    <section
      className="flex min-h-screen w-full scroll-mt-20 items-center bg-blue pt-20 text-white"
      id="home"
    >
      <div className="flex max-w-[461px] flex-col items-start pl-6">
        <div className="text-4xl font-bold text-white">
          <span className="text-3xl">Olá, eu sou</span> <br />
          <span className="uppercase">riuri Boneta</span>
        </div>
        <div className="mt-3 text-3xl font-light text-white">
          desenvolvedor Front End
        </div>
        <div className="mt-1 flex items-center">
          <Link
            target="_blank"
            href={"resume.pdf"}
            download={"riuri-boneta-cv.pdf"}
            alt="cv link"
            className="py-2 pr-4"
          >
            <Image
              src="/images/document.svg"
              alt="cv icon"
              width={35}
              height={35}
            />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/riuri-alves-boneta/"
            alt="LinkedIn link"
            className="px-4 py-2"
          >
            <Image
              src="/images/linkedin.svg"
              alt="linkedin icon"
              width={35}
              height={35}
            />
          </Link>
          <Link
            target="_blank"
            href="https://github.com/RiuriII"
            alt="github link"
            className="px-4 py-2"
          >
            <Image
              src="/images/github.svg"
              alt="github icon"
              width={35}
              height={35}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
