import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import { Link } from "react-router-dom";

const ProjectCarousel = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const scrollPositionRef = useRef(0);
  const animationIdRef = useRef<number>();
  const dragStartRef = useRef(0);

  // Get first 20 projects
  const displayProjects = projects.slice(0, 20);

  // Duplicate projects for infinite scroll effect - triple for smoother loop
  const duplicatedProjects = [...displayProjects, ...displayProjects, ...displayProjects];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollSpeed = 2; // pixels per frame for smooth motion
    const maxScroll = container.scrollWidth / 3; // One third is the original content

    const animate = () => {
      if (!isPaused && !isDragging) {
        scrollPositionRef.current += scrollSpeed;

        // Reset to beginning when we've scrolled past the first set
        if (scrollPositionRef.current >= maxScroll) {
          scrollPositionRef.current = 0;
          container.scrollLeft = 0;
        } else {
          container.scrollLeft = scrollPositionRef.current;
        }
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animationIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [isPaused, isDragging, displayProjects.length]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartRef.current = e.clientX;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section className="py-24 bg-background border-t border-border/50 overflow-hidden">
      <div className="container mb-16">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">Featured Projects</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Project I've brought to life
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
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="flex gap-4 px-4 md:px-8 overflow-x-hidden scroll-smooth cursor-grab active:cursor-grabbing select-none"
        style={{
          scrollBehavior: "auto",
          WebkitOverflowScrolling: "touch",
          userSelect: "none",
        }}
      >
        {duplicatedProjects.map((project, index) => (
          <Link
            key={`${project.title}-${index}`}
            to={project.link}
            className="flex-shrink-0 group relative pointer-events-auto"
            draggable={false}
          >
            <div className="relative h-64 w-80 rounded-2xl overflow-hidden bg-muted border border-border/50 group-hover:border-primary/50 transition-all duration-300 hover:shadow-2xl">
              {/* Image with Lazy Loading */}
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                style={{
                  contentVisibility: "auto",
                }}
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
                {(index % displayProjects.length) + 1} / {displayProjects.length}
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
