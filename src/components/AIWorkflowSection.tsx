import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import ContactModal from "@/components/ContactModal";
import chatgptIcon from "@/assets/ai-tools/chatgpt.svg";
import claudeIcon from "@/assets/ai-tools/claude.svg";
import lovableIcon from "@/assets/ai-tools/lovable.ico";
import perplexityIcon from "@/assets/ai-tools/perplexity.svg";

const aiTools = [
  {
    name: "ChatGPT",
    role: "Fast ideation, UX writing, and edge-case mapping",
    accent: "from-emerald-400/25 via-emerald-500/10 to-transparent",
    icon: chatgptIcon,
    iconAlt: "ChatGPT logo",
  },
  {
    name: "Claude",
    role: "Deep reasoning for flows, strategy, and documentation",
    accent: "from-orange-400/25 via-amber-500/10 to-transparent",
    icon: claudeIcon,
    iconAlt: "Claude logo",
  },
  {
    name: "Lovable",
    role: "Rapid prototyping to test ideas before handoff",
    accent: "from-pink-400/25 via-rose-500/10 to-transparent",
    icon: lovableIcon,
    iconAlt: "Lovable logo",
  },
  {
    name: "Perplexity",
    role: "Research support for product, market, and feature context",
    accent: "from-sky-400/25 via-cyan-500/10 to-transparent",
    icon: perplexityIcon,
    iconAlt: "Perplexity logo",
  },
];

const AIWorkflowSection = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <section className="py-24 bg-background">
        <div className="container max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 md:p-10 card-shadow">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.18),transparent_38%)]" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                  <Sparkles className="h-4 w-4" />
                  AI Workflow
                </div>
                <h2 className="mt-6 max-w-xl text-3xl font-heading font-bold text-foreground md:text-4xl">
                  I integrate AI into my workflow to move faster without losing design quality.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                  I use AI to speed up research, explore sharper directions, pressure-test product ideas,
                  and prototype faster. The goal is never generic output. It is a tighter workflow that
                  helps me deliver clearer thinking, stronger interfaces, and more polished experiences.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border bg-background/70 p-5">
                    <p className="text-sm font-semibold text-foreground">How I use it</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Idea exploration, UX writing, flow refinement, research synthesis, and rapid prototype loops.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border bg-background/70 p-5">
                    <p className="text-sm font-semibold text-foreground">What stays human</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Product judgment, visual taste, systems thinking, and the final design decisions that shape trust.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setContactOpen(true)}
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--primary)/0.35)]"
                >
                  Work With Me
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {aiTools.map((tool) => (
                <div
                  key={tool.name}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_-20px_hsl(var(--foreground)/0.2)]"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${tool.accent}`} />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/40 bg-white/80 text-sm font-extrabold tracking-[0.2em] text-foreground shadow-sm">
                        <img
                          src={tool.icon}
                          alt={tool.iconAlt}
                          className="h-8 w-8 object-contain"
                        />
                      </div>
                      <span className="rounded-full border border-border bg-background/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                        AI Tool
                      </span>
                    </div>
                    <div className="mt-10">
                      <h3 className="text-2xl font-heading font-semibold text-foreground">
                        {tool.name}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {tool.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
};

export default AIWorkflowSection;
