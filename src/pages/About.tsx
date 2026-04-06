import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const About = () => {
  return (
    <div className="min-h-screen cursor-none">
      <CustomCursor />
      <Navbar />
      <div className="pt-16">
        <AboutSection />
        <ExperienceSection />
      </div>
      <Footer />
    </div>
  );
};

export default About;
