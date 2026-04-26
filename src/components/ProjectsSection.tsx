import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Heading animation
    if (headingRef.current) {
      gsap.from(headingRef.current.querySelectorAll("p, h2"), {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        immediateRender: false,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      });
    }

    // Cards stagger animation
    if (cardsContainerRef.current) {
      gsap.from(cardsContainerRef.current.querySelectorAll(".project-card"), {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        immediateRender: false,
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: "top 80%",
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const featured = projects.slice(0, 4);

  return (
    <section id="works" className="py-24 section-gradient">
      <div className="container">
        <div ref={headingRef} className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">
            Works
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            What I've designed recently
          </h2>
        </div>

        <div ref={cardsContainerRef} className="space-y-8">
          {featured.map((project, i) => (
            <div key={project.title} className="project-card">
              <ProjectCard project={project} index={i} total={featured.length} />
            </div>
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
