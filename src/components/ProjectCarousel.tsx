import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import { Link } from "react-router-dom";

const ProjectCarousel = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Get first 20 projects
  const displayProjects = projects.slice(0, 20);

  // Duplicate projects for infinite scroll effect
  const duplicatedProjects = [...displayProjects, ...displayProjects];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollPosition = 0;
    const scrollSpeed = 1; // pixels per frame
    let animationId: number;

    const scroll = () => {
      if (!isPaused) {
        scrollPosition += scrollSpeed;

        // Reset to beginning when we've scrolled past the first set
        if (scrollPosition > container.scrollWidth / 2) {
          scrollPosition = 0;
        }

        container.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section className="py-24 bg-background border-t border-border/50 overflow-hidden">
      <div className="container mb-16">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">Featured Projects</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Projects we've brought to life
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs hidden lg:block">
            Hover to pause • Click to view case study
          </p>
        </div>
      </div>

      {/* Carousel Container */}
      <div
        ref={scrollContainerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex overflow-x-auto gap-4 px-4 md:px-8 snap-x snap-mandatory scroll-smooth"
        style={{
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {duplicatedProjects.map((project, index) => (
          <Link
            key={`${project.title}-${index}`}
            to={project.link}
            className="flex-shrink-0 group relative snap-start"
          >
            <div className="relative h-64 w-80 rounded-2xl overflow-hidden bg-muted border border-border/50 group-hover:border-primary/50 transition-all duration-300 hover:shadow-2xl">
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-heading font-bold text-lg mb-1 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-white/80 text-sm mb-3 line-clamp-1">
                  {project.category}
                </p>
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors w-fit">
                  View Case Study →
                </button>
              </div>

              {/* Badge */}
              <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-black/50 text-white text-xs font-semibold backdrop-blur-sm">
                {index % displayProjects.length + 1} / {displayProjects.length}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Info Text */}
      <div className="container mt-8 text-center">
        <p className="text-muted-foreground text-sm">
          Showing {displayProjects.length} projects • Scroll infinitely to explore more
        </p>
      </div>
    </section>
  );
};

export default ProjectCarousel;
