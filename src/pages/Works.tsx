import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import CustomCursor from "@/components/CustomCursor";
import { projects } from "@/data/projects";

const Works = () => {
  const filterCategories = [
    "All",
    ...Array.from(new Set(projects.flatMap((project) => project.categories))),
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.categories.includes(activeCategory));

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
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Browse the work by category and filter down to the kinds of products, platforms,
              and experiences you want to explore.
            </p>
          </div>

          <div className="mb-12 rounded-[2rem] border border-border bg-card/80 p-6 md:p-8 card-shadow">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-primary font-semibold">
                  Filter Projects
                </p>
                <h2 className="mt-2 text-2xl font-heading font-bold text-foreground">
                  Explore by category
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Showing {filteredProjects.length} project{filteredProjects.length === 1 ? "" : "s"}
                  {activeCategory !== "All" ? ` in ${activeCategory}` : " across every category"}.
                </p>
              </div>
              <div className="rounded-full border border-border bg-background/80 px-4 py-2 text-sm text-muted-foreground">
                Active filter: <span className="font-semibold text-foreground">{activeCategory}</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {filterCategories.map((category) => {
                const isActive = category === activeCategory;

                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-[0_10px_30px_-15px_hsl(var(--primary)/0.8)]"
                        : "border border-border bg-background text-foreground hover:border-primary/30 hover:bg-primary/5"
                    }`}
                    aria-pressed={isActive}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-8">
            {filteredProjects.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
                total={filteredProjects.length}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Works;
