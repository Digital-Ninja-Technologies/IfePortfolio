import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SEO from "@/components/SEO";

const About = () => {
  return (
    <div className="min-h-screen cursor-none">
      <SEO
        title="About Onifade Ifeoluwa — Product Designer"
        description="Get to know Onifade Ifeoluwa: 5+ years designing Web2, Web3, AI, mobile, and web products. Background, experience, and how I work with founders and teams."
        path="/about"
      />
      <CustomCursor />
      <Navbar />
      <main className="pt-16">
        <AboutSection />
        <ExperienceSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
