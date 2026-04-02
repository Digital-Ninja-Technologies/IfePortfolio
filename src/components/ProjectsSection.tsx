import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "TravelGuide Super App",
    category: "Travel · Mobile",
    description:
      "Designed a unified travel platform combining flight booking, hotel reservations, local experiences, and itinerary management into one seamless mobile experience.",
    tags: ["Lead Product Designer", "2024", "Figma & Maze"],
    link: "/case-study/travelguide",
    internal: true,
    image: "https://onifade-ifeoluwa.vercel.app/assets/proj-4-BnPsxs6T.png",
  },
  {
    title: "Flex2Ride Ride Hailing App",
    category: "Transport",
    description:
      "Designed a comprehensive ride-hailing experience focusing on seamless booking flow, driver management, and real-time tracking for urban transportation.",
    tags: ["Design Lead", "2024", "Figma & Trello"],
    link: "https://flex2ride.com/",
    image: "https://onifade-ifeoluwa.vercel.app/assets/proj-4-BnPsxs6T.png",
  },
  {
    title: "Connekt Mobile App",
    category: "Chat App · Web3",
    description:
      "Product design for a Web3 chat application connecting users through decentralized messaging with a modern, intuitive interface.",
    tags: ["Product Designer", "2024", "Figma"],
    link: "https://www.conektapp.io/",
    image: "https://onifade-ifeoluwa.vercel.app/assets/proj-7-7q-eLtoI.png",
  },
  {
    title: "Yumdash Food App",
    category: "E-commerce",
    description:
      "Designed an end-to-end food delivery platform with streamlined ordering, restaurant discovery, and a delightful checkout experience.",
    tags: ["Product Designer", "2023", "Figma"],
    link: "https://yumdash.ng/",
    image: "https://onifade-ifeoluwa.vercel.app/assets/proj-3-CnCZqc--.png",
  },
  {
    title: "Sportrex",
    category: "GameFi · Web3",
    description:
      "Led product design for a Web3 gaming and sports entertainment platform, crafting immersive interfaces for decentralized gaming experiences.",
    tags: ["Design Lead", "2022", "Figma"],
    link: "https://sportrex.io/",
    image: "https://onifade-ifeoluwa.vercel.app/assets/proj-5-BLeEwTqv.png",
  },
];

const ProjectsSection = () => {
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
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`flex flex-col ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-12 items-center`}
            >
              {/* Image */}
              <div className="flex-1 w-full">
                <div className="rounded-2xl overflow-hidden card-shadow bg-card">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Content */}
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
                {(project as any).internal ? (
                  <Link
                    to={project.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all mt-2"
                  >
                    View Case Study <ArrowRight size={16} />
                  </Link>
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all mt-2"
                  >
                    View Project <ArrowRight size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
