import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface RecommendedProjectsProps {
  currentProjectTitle: string;
  limit?: number;
}

const RecommendedProjects = ({ currentProjectTitle, limit = 3 }: RecommendedProjectsProps) => {
  // Get projects that are not the current one
  const recommended = projects
    .filter((project) => project.title !== currentProjectTitle)
    .slice(0, limit);

  if (recommended.length === 0) return null;

  return (
    <section className="py-24 bg-background border-t border-border/50">
      <div className="container max-w-6xl">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">Similar Work</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Check out similar projects
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Explore other case studies and see how I've solved similar design challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {recommended.map((project) => (
            <Link
              key={project.title}
              to={project.link}
              className="group"
            >
              <div className="relative h-64 rounded-2xl overflow-hidden mb-4 bg-muted border border-border/50 hover:border-primary/50 transition-colors">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div 
                  className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ backgroundColor: project.bgColor }}
                />
              </div>

              <h3 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {project.category}
              </p>
              <p className="text-sm text-foreground line-clamp-2">
                {project.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/works"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors"
          >
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecommendedProjects;
