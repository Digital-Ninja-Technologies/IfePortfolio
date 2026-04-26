import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profileImage from "@/assets/profile.jpg";
import Card3D from "@/components/Card3D";

gsap.registerPlugin(ScrollTrigger);

const AboutPreview = () => {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imageContainer = imageContainerRef.current;
    const textContainer = textContainerRef.current;

    if (!imageContainer || !textContainer) return;

    // Scroll trigger for image animation
    gsap.from(imageContainer, {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: imageContainer,
        start: "top 80%",
      },
    });

    // Scroll trigger for text animation
    gsap.from(textContainer, {
      opacity: 0,
      x: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textContainer,
        start: "top 80%",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="py-24">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div ref={imageContainerRef} className="relative">
            <Card3D image={profileImage} alt="Onifade Ifeoluwa" />
          </div>

          {/* Text */}
          <div ref={textContainerRef} className="space-y-6">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight">
              A bit about myself
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              I'm a product designer with 5+ years of experience, focusing on Web3, mobile, and web
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
