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
    image: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/h4zvmt5l9onj9ykytydl.webp",
  },
  {
    title: "Flex2Ride Ride Hailing App",
    category: "Transport",
    description:
      "Nigerian premium affordable and luxurious ride-hailing and delivery platform. Designed a comprehensive ride-hailing experience with seamless booking flow and real-time tracking.",
    tags: ["Visual Designer", "2024", "Figma & Trello"],
    link: "/case-study/flex2ride",
    internal: true,
    image: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/vxqjx8agke7g9rdz0kl1.webp",
  },
  {
    title: "Conekt Mobile App",
    category: "Chat App · Web3",
    description:
      "Social networking app connecting Web3 creatives through instant messaging and real-time discovery, blending WhatsApp familiarity with swipe-based matching.",
    tags: ["UX/UI Designer", "2024", "Figma & Jira"],
    link: "/case-study/connekt",
    internal: true,
    image: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/n0y4flsaq3s4le0vvkok.webp",
  },
  {
    title: "Yumdash",
    category: "E-commerce · Food App",
    description:
      "E-commerce platform for food vendors to create online food ordering websites with streamlined ordering, restaurant discovery, and delightful checkout.",
    tags: ["Product Designer", "2023", "Figma"],
    link: "/case-study/yumdash",
    internal: true,
    image: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/fm5qnw8ogfsbzxkxkfpz.webp",
  },
  {
    title: "Sportrex GameFi Platform",
    category: "GameFi · Web3",
    description:
      "Decentralized GameFi super platform merging play-to-earn gaming, social networking, NFTs, and metaverse experiences. Made Web3 accessible to gamers.",
    tags: ["Design Lead", "2022", "Figma & LottieFiles"],
    link: "/case-study/sportrex",
    internal: true,
    image: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/tgfiqelngq5qjljf4kxp.webp",
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
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all mt-2"
                >
                  View Case Study <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
