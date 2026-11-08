import AboutSection from "@/components/aboutSection/AboutSection";
import ContactSection from "@/components/contactSection/ContactSection";
import HomeSection from "@/components/homeSection/HomeSection";
import Navbar from "@/components/navbar/Navbar";
import ProjectsSection from "@/components/projectsSection/ProjectsSection";
import { locales } from "@/locales";
import { notFound } from "next/navigation";

export default async function Home({ params }) {
  const { lang } = await params;
  if (!locales[lang]) notFound();

  return (
    <>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ProjectsSection langCode={lang} />
      <ContactSection />
    </>
  );
}
