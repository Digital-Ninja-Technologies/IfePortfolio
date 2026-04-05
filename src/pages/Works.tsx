import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import CustomCursor from "@/components/CustomCursor";
import { projects } from "@/data/projects";

const Works = () => {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Navbar />
      <section className="py-24 section-gradient">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">Works</p>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              All Projects
            </h1>
          </div>
          <div className="space-y-20">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Works;
