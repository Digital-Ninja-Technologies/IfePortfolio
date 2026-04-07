import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import profileImage from "@/assets/profile.jpg";

const AboutPreview = () => {
  return (
    <section className="py-24">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
              <img
                src={profileImage}
                alt="Onifade Ifeoluwa"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight">
              A bit about myself
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              I'm a product designer with 4+ years of experience, focusing on Web3, mobile, and web
              apps. I have a special interest in building for Telegram mini apps, Web3, Fin-tech and
              challenging tasks. I design strategies, services, and products for people — with close
              to a decade in the tech space. I approach problem-solving strategically and love
              helping companies pivot from level 0 to 1, then strategize on what's next.
            </p>
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] hover:scale-105"
            >
              More About Me
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
