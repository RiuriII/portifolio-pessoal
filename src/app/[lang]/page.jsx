import AboutSection from "@/components/aboutSection/AboutSection";
import ContactSection from "@/components/contactSection/ContactSection";
import HomeSection from "@/components/homeSection/HomeSection";
import Navbar from "@/components/navbar/Navbar";
import ProjectSectionSketch from "@/components/projectSectionSketch/ProjectSectionSketch";
import { locales } from "@/locales";
import { notFound } from "next/navigation";
import { getProjectMetrics } from "@/lib/projectMetrics";

export const revalidate = 21600;

export default async function Home({ params }) {
  const { lang } = await params;
  if (!locales[lang]) notFound();
  const metrics = await getProjectMetrics();

  return (
    <>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ProjectSectionSketch metrics={metrics} />
      <ContactSection />
    </>
  );
}
