import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const ProjectsSection = () => {
  const featured = projects.slice(0, 3);

  return (
    <section id="works" className="py-24 section-gradient">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">Works</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            What I've designed recently
          </h2>
        </div>

        <div className="space-y-20">
          {featured.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/works"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:gap-3 transition-all hover:shadow-lg"
          >
            View All Projects <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
