import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  total: number;
}

const ProjectCard = ({ project, index, total }: ProjectCardProps) => {
  return (
    <Link
      to={project.link}
      className="relative lg:sticky lg:top-24 block cursor-pointer h-full"
      style={{
        zIndex: index + 1,
      }}
    >
      <div
        className={`flex flex-col h-full lg:h-auto ${
          index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
        } gap-0 items-stretch shadow-lg transition-shadow duration-300 hover:shadow-2xl lg:[transform:scale(var(--card-scale))]`}
        style={{
          borderRadius: "30px",
          backgroundColor: project.bgColor,
          overflow: "hidden",
          transformOrigin: "top center",
          ["--card-scale" as any]: `${1 - index * 0.01}`,
        }}
      >
        <div className="flex-1 w-full p-3 md:p-4 lg:p-6">
          <div className="overflow-hidden h-full" style={{ borderRadius: "16px" }}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex-1 w-full flex flex-col justify-center space-y-2 lg:space-y-4 p-4 md:p-5 lg:p-10">
          <p className="text-[10px] md:text-xs uppercase tracking-widest text-primary font-semibold">
            {project.category}
          </p>
          <h3 className="text-base md:text-lg lg:text-3xl font-heading font-bold text-foreground">
            {project.title}
          </h3>
          <p className="hidden lg:block text-muted-foreground leading-relaxed">
            {project.description}
          </p>
          <div className="hidden lg:flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center gap-1.5 lg:gap-2 px-3 py-1.5 lg:px-6 lg:py-3 rounded-full bg-primary text-primary-foreground font-semibold text-[11px] lg:text-sm hover:gap-3 transition-all lg:mt-4 hover:shadow-lg w-fit">
            View Case Study <ArrowRight size={12} className="lg:hidden" /><ArrowRight size={16} className="hidden lg:inline" />
          </span>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 lg:gap-2 px-3 py-1.5 lg:px-6 lg:py-3 rounded-full border-2 border-primary text-primary font-semibold text-[11px] lg:text-sm hover:bg-primary/10 transition-all lg:mt-2 hover:shadow-lg w-fit"
            >
              View Live <ArrowRight size={12} className="lg:hidden" /><ArrowRight size={16} className="hidden lg:inline" />
            </a>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
