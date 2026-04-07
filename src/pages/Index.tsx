import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoMarquee from "@/components/LogoMarquee";
import ProjectsSection from "@/components/ProjectsSection";
import StrengthsSection from "@/components/StrengthsSection";
import AboutPreview from "@/components/AboutPreview";
import WhyMeSection from "@/components/WhyMeSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  return (
    <div className="min-h-screen cursor-none">
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <LogoMarquee />
      <ProjectsSection />
      <AboutPreview />
      <WhyMeSection />
      <StrengthsSection />
      <Footer />
    </div>
  );
};

export default Index;
