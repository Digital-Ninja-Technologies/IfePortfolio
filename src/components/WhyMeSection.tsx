import { ArrowRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    text: "Amazing designer and organised. He adheres to project requirements and delivers a clean job on time. It's always great working with him.",
    date: "Jun 2025",
  },
  {
    text: "Ifeoluwa just gets it. Clean, thoughtful designs with real user flow in mind. Fast turnaround, no fluff. Easily one of the best designers I've worked with.",
    date: "Jun 2025",
  },
  {
    text: "Ifeoluwa is an incredibly talented designer with a sharp eye for detail and user experience. His ability to turn complex ideas into intuitive and visually appealing designs is impressive. He's professional, communicative, and always delivers high-quality work. Highly recommend working with him!",
    date: "Jun 2025",
  },
  {
    text: "Ifeoluwa is brilliant UI/UX and Wordpress designer. I have known him for a few years now and within that time, we have worked together on a couple of projects. My favourite thing about working with him is how he incorporates strategy into his design thinking process. I would highly recommend him because in today's fast paced economy, great design is an important factor in how consumers buy products and that is something he is excellent in.",
    date: "Jun 2025",
  },
];

const WhyMeSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Why work with me?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Don't just take my word for it — here's what clients have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-border bg-card p-8 flex flex-col justify-between transition-shadow duration-300 hover:shadow-lg"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-foreground leading-relaxed text-base mb-6">
                "{t.text}"
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star
                      key={si}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground font-medium">
                  Verified Client · {t.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.linkedin.com/in/onifadeifeoluwa/details/recommendations/?detailScreenTabIndex=0"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] hover:scale-105"
          >
            View More on LinkedIn
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;
