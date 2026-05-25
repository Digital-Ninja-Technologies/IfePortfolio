import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoMarquee from "@/components/LogoMarquee";
import ProjectCarousel from "@/components/ProjectCarousel";
import AIWorkflowSection from "@/components/AIWorkflowSection";
import ProjectsSection from "@/components/ProjectsSection";
import StrengthsSection from "@/components/StrengthsSection";
import AboutPreview from "@/components/AboutPreview";
import WhyMeSection from "@/components/WhyMeSection";
import Footer from "@/components/Footer";
import BlogCTA from "@/components/BlogCTA";

import SEO from "@/components/SEO";

const Index = () => {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Onifade Ifeoluwa",
    jobTitle: "Product Designer",
    url: "https://inspired-showcase-spark.lovable.app/",
    sameAs: ["https://contra.com/designninja"],
    description: "Product designer with 5+ years of experience across Web2, Web3, AI, mobile, and web apps.",
  };
  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Onifade Ifeoluwa — Product Designer",
    url: "https://inspired-showcase-spark.lovable.app/",
  };
  return (
    <div className="min-h-screen cursor-none">
      <SEO
        title="Onifade Ifeoluwa — Product Designer Portfolio"
        description="Portfolio of Onifade Ifeoluwa (Design Ninja), a product designer with 5+ years building Web2, Web3, AI, mobile, and web apps that move clients from 0 to 1."
        path="/"
        jsonLd={[personLd, websiteLd]}
      />
      
      <Navbar />
      <main>
        <HeroSection />
        <LogoMarquee />
        <ProjectCarousel />
        <AIWorkflowSection />
        <ProjectsSection />
        <AboutPreview />
        <WhyMeSection />
        <StrengthsSection />
        <BlogCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
