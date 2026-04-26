import { useEffect, useRef } from "react";
import gsap from "gsap";

interface Card3DProps {
  image: string;
  alt: string;
  className?: string;
}

const Card3D = ({ image, alt, className = "" }: Card3DProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Set up 3D perspective
    card.style.perspective = "1000px";

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      // Animate to the new rotation
      gsap.to(card, {
        rotationX: rotateX,
        rotationY: rotateY,
        duration: 0.6,
        ease: "power2.out",
      });

      // Scale image slightly on hover
      gsap.to(imageRef.current, {
        scale: 1.05,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      // Reset rotation and scale on mouse leave
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.to(imageRef.current, {
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
      });
    };

    // Set initial 3D style
    gsap.set(card, { transformStyle: "preserve-3d" });

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Entrance animation
  useEffect(() => {
    gsap.from(cardRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-muted shadow-2xl group cursor-none ${className}`}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 pointer-events-none z-10" />

      {/* Image with gloss effect */}
      <img
        ref={imageRef}
        src={image}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-600"
        style={{
          transformStyle: "preserve-3d",
        }}
      />

      {/* Gloss shine effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none z-20" />

      {/* Bottom gradient accent */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-10" />
    </div>
  );
};

export default Card3D;
