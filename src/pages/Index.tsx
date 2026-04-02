import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoMarquee from "@/components/LogoMarquee";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import StrengthsSection from "@/components/StrengthsSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <LogoMarquee />
      <ProjectsSection />
      <AboutSection />
      <StrengthsSection />
      <ExperienceSection />
      <Footer />
    </div>
  );
};

export default Index;
