import { useEffect, useRef } from "react";
import gsap from "gsap";

const logos = [
  "Sportrex", "Eskro", "Testpromptly", "BlouX", "Brand360",
  "Korlod Works", "Sinelah", "Sportzlite",
];

const LogoMarquee = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // Create a seamless loop animation
    gsap.to(marquee, {
      x: -marquee.scrollWidth / 2,
      duration: 30,
      ease: "none",
      repeat: -1,
    });

    return () => {
      gsap.killTweensOf(marquee);
    };
  }, []);

  return (
    <section className="py-12 bg-card border-y border-border/50 overflow-hidden">
      <div className="container mb-4">
        <p className="text-xs uppercase tracking-widest text-muted-foreground text-center">
          Worked with teams from
        </p>
      </div>
      <div className="relative">
        <div ref={marqueeRef} className="flex whitespace-nowrap">
          {[...logos, ...logos].map((name, i) => (
            <span
              key={i}
              className="mx-8 text-lg font-semibold text-muted-foreground/40 select-none hover:text-muted-foreground/60 transition-colors duration-300 cursor-pointer"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
