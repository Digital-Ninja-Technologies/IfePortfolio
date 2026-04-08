import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-8 overflow-hidden">
      {/* Large typographic hero */}
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center flex-1">
        <div className="relative w-full text-center">
          {/* Line 1 - Creative */}
          <div className="animate-fade-in-up">
            <h1
              className="font-heading italic font-bold text-foreground leading-[0.85] tracking-tight"
              style={{ fontSize: "clamp(3.5rem, 12vw, 11rem)" }}
            >
              Creative
            </h1>
          </div>

          {/* Line 2 - PRODUCT */}
          <div className="animate-fade-in-up animate-delay-100 -mt-1 md:-mt-3">
            <span
              className="font-sans font-extrabold uppercase leading-[0.9] tracking-tighter text-primary"
              style={{ fontSize: "clamp(3.5rem, 13vw, 12rem)" }}
            >
              PRO
            </span>
            <span
              className="font-sans font-extrabold uppercase leading-[0.9] tracking-tighter text-primary"
              style={{ fontSize: "clamp(3.5rem, 13vw, 12rem)" }}
            >
              DUCT
            </span>
          </div>

          {/* Line 3 - DESIGNER */}
          <div className="animate-fade-in-up animate-delay-200 -mt-1 md:-mt-3">
            <span
              className="font-sans font-extrabold uppercase leading-[0.9] tracking-tighter text-foreground"
              style={{ fontSize: "clamp(3.5rem, 13vw, 12rem)" }}
            >
              DESIGNER
            </span>
          </div>

          {/* Floating accent element */}
          <div className="absolute top-4 right-4 md:top-8 md:right-8 animate-fade-in-up animate-delay-300">
            <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-primary" />
          </div>
        </div>

        {/* Subtitle */}
        <div className="mt-8 md:mt-12 flex flex-col items-center gap-5 animate-fade-in-up animate-delay-300">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary inline-block" />
            <p className="text-sm md:text-base text-muted-foreground">
              Partnering as a{" "}
              <span className="font-semibold text-foreground">Product Designer</span>{" "}
              crafting digital experiences
            </p>
          </div>
          <Link
            to="/about"
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] hover:scale-105"
          >
            <span className="relative z-10">More About Me</span>
            <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>
      </div>

      {/* Contact bar */}
      <div className="w-full container flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground animate-fade-in-up animate-delay-400">
        <div className="flex items-center gap-4 mb-2 sm:mb-0">
          <span className="uppercase tracking-widest font-semibold text-foreground text-[11px]">
            Get in Touch
          </span>
          <a
            href="https://www.linkedin.com/in/onifadeifeoluwa/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/ifeloveth1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            X (Twitter)
          </a>
        </div>
        <div className="flex items-center gap-1">
          <span>📍</span>
          <span>Lagos, Nigeria</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
