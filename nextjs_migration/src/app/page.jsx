import AboutSection from "@/components/aboutSection/AboutSection";
import ContactSection from "@/components/contactSection/ContactSection";
import HomeContainer from "@/components/homeSection/HomeSection";
import MaxWidthWrapper from "@/components/maxWidthWrapper/MaxWidthWrapper";
import Navbar from "@/components/navbar/Navbar";
import ProjectsSection from "@/components/projectsSection/ProjectsSection";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <Navbar />
        <HomeContainer />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </MaxWidthWrapper>
    </>
  );
}
