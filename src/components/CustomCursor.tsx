import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const smoothPositionRef = useRef({ x: 0, y: 0 });
  const isHoveringRef = useRef(false);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    // Hide the default cursor
    document.documentElement.style.cursor = "none";

    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    let animationFrameId: number;

    const animate = () => {
      smoothPositionRef.current = {
        x: lerp(smoothPositionRef.current.x, positionRef.current.x, 0.25),
        y: lerp(smoothPositionRef.current.y, positionRef.current.y, 0.25),
      };

      if (cursorInnerRef.current) {
        cursorInnerRef.current.style.transform = `translate(${positionRef.current.x - 4}px, ${positionRef.current.y - 4}px)`;
      }

      if (cursorOuterRef.current) {
        const offset = isHoveringRef.current ? 28 : 20;
        cursorOuterRef.current.style.transform = `translate(${smoothPositionRef.current.x - offset}px, ${smoothPositionRef.current.y - offset}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        if (cursorInnerRef.current) cursorInnerRef.current.style.opacity = "1";
        if (cursorOuterRef.current) cursorOuterRef.current.style.opacity = "1";
      }
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      if (cursorInnerRef.current) cursorInnerRef.current.style.opacity = "0";
      if (cursorOuterRef.current) cursorOuterRef.current.style.opacity = "0";
    };

    const handleMouseEnter = () => {
      isVisibleRef.current = true;
      if (cursorInnerRef.current) cursorInnerRef.current.style.opacity = "1";
      if (cursorOuterRef.current) cursorOuterRef.current.style.opacity = "1";
    };

    const handleHoverStart = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, select, [data-interactive]")) {
        isHoveringRef.current = true;
        if (cursorInnerRef.current) {
          cursorInnerRef.current.style.width = "6px";
          cursorInnerRef.current.style.height = "6px";
        }
        if (cursorOuterRef.current) {
          cursorOuterRef.current.style.width = "56px";
          cursorOuterRef.current.style.height = "56px";
          cursorOuterRef.current.style.borderColor = "hsl(var(--primary))";
        }
      }
    };

    const handleHoverEnd = () => {
      if (!document.activeElement?.matches("a, button, [role='button'], input, textarea, select")) {
        isHoveringRef.current = false;
        if (cursorInnerRef.current) {
          cursorInnerRef.current.style.width = "8px";
          cursorInnerRef.current.style.height = "8px";
        }
        if (cursorOuterRef.current) {
          cursorOuterRef.current.style.width = "40px";
          cursorOuterRef.current.style.height = "40px";
          cursorOuterRef.current.style.borderColor = "hsl(var(--primary) / 0.4)";
        }
      }
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleHoverStart, { passive: true });
    document.addEventListener("mouseout", handleHoverEnd, { passive: true });

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      document.documentElement.style.cursor = "auto";
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleHoverStart);
      document.removeEventListener("mouseout", handleHoverEnd);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Hide on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Inner dot */}
      <div
        ref={cursorInnerRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference will-change-transform"
        style={{
          opacity: 1,
          transition: "opacity 0.3s ease",
        }}
      >
        <div
          className="rounded-full bg-primary"
          style={{
            width: "8px",
            height: "8px",
            transition: "width 0.2s ease, height 0.2s ease",
          }}
        />
      </div>

      {/* Outer circle */}
      <div
        ref={cursorOuterRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] will-change-transform"
        style={{
          opacity: 1,
          transition: "opacity 0.3s ease",
        }}
      >
        <div
          className="rounded-full border-2"
          style={{
            width: "40px",
            height: "40px",
            borderColor: "hsl(var(--primary) / 0.4)",
            transition: "width 0.2s ease, height 0.2s ease, border-color 0.2s ease",
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
