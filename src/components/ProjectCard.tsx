import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <div
      className={`flex flex-col ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-8 lg:gap-12 items-center`}
    >
      <div className="flex-1 w-full">
        <div
          className="overflow-hidden"
          style={{
            borderRadius: "30px",
            backgroundColor: project.bgColor,
            padding: "1.5rem",
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover"
            style={{ borderRadius: "20px" }}
            loading="lazy"
          />
        </div>
      </div>

      <div className="flex-1 w-full space-y-4">
        <p className="text-xs uppercase tracking-widest text-primary font-semibold">
          {project.category}
        </p>
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
          {project.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          to={project.link}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:gap-3 transition-all mt-4 hover:shadow-lg"
        >
          View Case Study <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
