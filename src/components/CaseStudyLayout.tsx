import { useState } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import ContactModal from "@/components/ContactModal";

export interface CaseStudyData {
  title: string;
  subtitle: string;
  tags: string[];
  heroImage: string;
  meta: { label: string; value: string }[];
  challenge: string[];
  research: { intro: string; stats: { stat: string; desc: string }[] };
  process: { intro: string; steps: { step: string; title: string; desc: string }[] };
  midImage?: { src: string; alt: string };
  features: { title: string; desc: string }[];
  results: { intro: string; stats: { stat: string; desc: string }[] };
  reflection: string[];
}

const CaseStudyLayout = ({ data }: { data: CaseStudyData }) => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
    <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="text-lg font-heading font-bold text-foreground tracking-tight">
            Onifade<span className="text-primary">.</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </nav>

      <section className="pt-32 pb-16 hero-gradient">
        <div className="container max-w-4xl">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4 animate-fade-in-up">
            Case Study
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 animate-fade-in-up animate-delay-100">
            {data.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl animate-fade-in-up animate-delay-200">
            {data.subtitle}
          </p>
          <div className="flex flex-wrap gap-3 mt-8 animate-fade-in-up animate-delay-300">
            {data.tags.map((tag) => (
              <span key={tag} className="px-4 py-1.5 text-xs rounded-full bg-secondary text-secondary-foreground font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="container max-w-5xl -mt-2 mb-20">
        <div className="rounded-2xl overflow-hidden card-shadow">
          <img src={data.heroImage} alt={data.title} className="w-full h-auto" />
        </div>
      </section>

      <section className="container max-w-4xl mb-20">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {data.meta.map((item) => (
            <div key={item.label}>
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">{item.label}</p>
              <p className="text-foreground font-medium">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="space-y-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">The Challenge</h2>
            {data.challenge.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-4">{p}</p>
            ))}
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">Research & Discovery</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{data.research.intro}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {data.research.stats.map((item) => (
                <div key={item.desc} className="p-6 rounded-xl bg-secondary/50 border border-border/50">
                  <p className="text-3xl font-heading font-bold text-primary mb-2">{item.stat}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">Design Process</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{data.process.intro}</p>
            <div className="space-y-6">
              {data.process.steps.map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <span className="text-4xl font-heading font-bold text-primary/20 leading-none shrink-0">{item.step}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {data.midImage && (
            <div className="rounded-2xl overflow-hidden card-shadow">
              <img src={data.midImage.src} alt={data.midImage.alt} className="w-full h-auto" />
            </div>
          )}

          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">Key Features Designed</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {data.features.map((feature) => (
                <div key={feature.title} className="p-6 rounded-xl border border-border/50 bg-card card-shadow">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">Results & Impact</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{data.results.intro}</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {data.results.stats.map((item) => (
                <div key={item.desc} className="text-center p-6 rounded-xl bg-primary/5">
                  <p className="text-4xl font-heading font-bold text-primary mb-2">{item.stat}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">Reflection</h2>
            {data.reflection.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-4">{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 section-gradient">
        <div className="container max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">Interested in working together?</h2>
          <p className="text-muted-foreground mb-8">I'm always open to discussing new projects and design challenges.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setContactOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Let's Talk <ExternalLink size={16} />
            </button>
            <a
              href="https://contra.com/designninja?r=designninja"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary/10 transition-colors"
            >
              Hire me on Contra <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-border/50">
        <div className="container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Onifade Ifeoluwa. All rights reserved.
        </div>
      </footer>
    </div>
    </>
  );
};

export default CaseStudyLayout;
