import { useState } from "react";
import ContactModal from "./ContactModal";

const ReadyToWorkWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Ready to work — Let's talk"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 group inline-flex items-center gap-2.5 pl-3 pr-5 py-2.5 rounded-full bg-foreground text-background shadow-lg shadow-foreground/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 backdrop-blur-md border border-border/30"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
        </span>
        <span className="text-sm font-medium tracking-tight">
          Ready to work
        </span>
      </button>

      <ContactModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default ReadyToWorkWidget;
