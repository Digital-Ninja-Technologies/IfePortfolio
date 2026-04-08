import { ArrowRight, BarChart3 } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import resumeFile from "@/assets/Ifeoluwa_Onifade UX:UI.pdf";

const funStats = [
  { value: "5+", label: "Years of Experience" },
  { value: "24+", label: "Projects Delivered" },
  { value: "10+", label: "Happy Clients" },
  { value: "3", label: "Design Systems Built" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      {/* Hero intro - two columns */}
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Text */}
          <div className="space-y-6">
            <p className="text-sm text-muted-foreground">Hello! Nice to meet you.</p>

            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold text-foreground leading-tight">
              I'm Onifade, a product designer and strategic problem solver.
            </h2>

            <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
              <p>
                UI/UX Designer with over five years of experience designing complex, data-heavy 
                digital products across SaaS, fintech, Web3, and operational platforms. I specialise 
                in turning complicated business requirements into interfaces that feel simple and 
                actually work for the people using them every day.
              </p>
              <p>
                I am at my best working on back-office tools, admin panels, and enterprise workflows 
                where the real challenge is making large datasets readable, and edge cases manageable 
                and user journeys are frictionless.
              </p>
              <p>
                I take ownership of problems before anyone has to ask, communicate my decisions 
                clearly, and stay deeply involved through to engineering handoff and beyond.
              </p>
            </div>

            <p className="text-muted-foreground text-base">
              I love meeting new people, so feel free to connect!
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/onifadeifeoluwa/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                View LinkedIn <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={resumeFile}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full border border-border text-foreground hover:bg-muted transition-colors"
                download
              >
                Download Resume <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div
              className="w-full aspect-[3/4] rounded-2xl overflow-hidden bg-muted"
            >
              <img
                src={profileImage}
                alt="Onifade Ifeoluwa"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Fun Stats */}
      <div className="mt-24 py-20 bg-muted/50">
        <div className="container max-w-6xl">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border text-xs font-semibold uppercase tracking-wider text-primary mb-4">
              <BarChart3 className="w-3.5 h-3.5" />
              Fun Stats
            </span>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              What I've accomplished so far
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {funStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
