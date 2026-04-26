import { useEffect, useRef } from "react";
import {
  Palette,
  Users,
  Code,
  LayoutDashboard,
  Lightbulb,
  BarChart3,
  Layers,
  Presentation,
  MessageSquare,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const strengths = [
  { icon: Palette, label: "Brand Strategy" },
  { icon: Users, label: "User Experience Design" },
  { icon: LayoutDashboard, label: "Interface Design" },
  { icon: Layers, label: "Interactive Designs" },
  { icon: Code, label: "Low Code Tools" },
  { icon: BarChart3, label: "Data Visualization" },
  { icon: Lightbulb, label: "Prototyping" },
  { icon: Presentation, label: "Presentation Design" },
  { icon: MessageSquare, label: "Design Consultation" },
];

const StrengthsSection = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Heading animation
    if (headingRef.current) {
      gsap.from(headingRef.current.querySelectorAll("p, h2"), {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      });
    }

    // Grid items animation with stagger
    if (gridRef.current) {
      const items = gridRef.current.querySelectorAll(".strength-item");

      gsap.from(items, {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        stagger: 0.08,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 70%",
        },
      });

      // Add hover animation to each item
      items.forEach((item) => {
        item.addEventListener("mouseenter", () => {
          gsap.to(item, {
            scale: 1.08,
            y: -5,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        item.addEventListener("mouseleave", () => {
          gsap.to(item, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="py-24 section-gradient">
      <div className="container">
        <div ref={headingRef} className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">
            Focus Areas
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            My area of focus
          </h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {strengths.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="strength-item group flex items-center gap-3 p-4 rounded-xl bg-card card-shadow hover:card-shadow-hover transition-shadow cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrengthsSection;
