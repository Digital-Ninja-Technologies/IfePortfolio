import { Sparkles } from "lucide-react";

const roles = [
  "I am a product designer",
  "I turn complex problems into user-friendly solutions",
  "I specialize in Web3, mobile & web apps",
  "I'm a conversion-driven website specialist",
  "I am available for hire",
];

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16">
      <div className="animate-fade-in-up">
        <p className="text-muted-foreground text-sm md:text-base flex items-center justify-center gap-2 mb-6">
          Welcome! I'm Onifade Ifeoluwa <Sparkles className="w-4 h-4 text-primary" />
        </p>
      </div>

      <div className="max-w-3xl space-y-4">
        {roles.map((role, i) => (
          <p
            key={i}
            className={`animate-fade-in-up animate-delay-${(i + 1) * 100 > 400 ? 400 : (i + 1) * 100} ${
              i === 0
                ? "text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground"
                : "text-base md:text-lg text-muted-foreground"
            }`}
          >
            {role}
          </p>
        ))}
      </div>

      {/* Contact bar */}
      <div className="mt-auto mb-6 w-full container flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground animate-fade-in-up animate-delay-400">
        <div className="flex items-center gap-4 mb-2 sm:mb-0">
          <span className="uppercase tracking-widest font-semibold text-foreground text-[11px]">Get in Touch</span>
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
