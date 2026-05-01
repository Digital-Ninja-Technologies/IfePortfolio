import { useState } from "react";
import { ArrowRight } from "lucide-react";
import ContactModal from "./ContactModal";

const ReadyToWorkWidget = () => {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Let's talk"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 inline-flex items-center justify-center rounded-full bg-foreground text-background border border-border/30 backdrop-blur-md shadow-[0_0_20px_hsl(var(--primary)/0.4),0_0_40px_hsl(var(--primary)/0.25)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.7),0_0_60px_hsl(var(--primary)/0.45)] hover:scale-105 transition-all duration-500 ease-out overflow-hidden h-11"
        style={{
          width: hovered ? "180px" : "168px",
        }}
      >
        {/* Ready to work state */}
        <span
          className={`absolute inset-0 flex items-center justify-center gap-2.5 px-5 transition-all duration-300 ${
            hovered ? "opacity-0 -translate-y-3" : "opacity-100 translate-y-0"
          }`}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
          </span>
          <span className="text-sm font-medium tracking-tight whitespace-nowrap">
            Ready to work
          </span>
        </span>

        {/* Let's talk state */}
        <span
          className={`absolute inset-0 flex items-center justify-center gap-2 px-5 transition-all duration-300 ${
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <span className="text-sm font-semibold tracking-tight whitespace-nowrap">
            Let's talk
          </span>
          <ArrowRight className="w-4 h-4" />
        </span>
      </button>

      <ContactModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default ReadyToWorkWidget;
