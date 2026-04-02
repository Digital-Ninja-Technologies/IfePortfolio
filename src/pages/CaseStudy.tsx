import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
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

      {/* Hero */}
      <section className="pt-32 pb-16 hero-gradient">
        <div className="container max-w-4xl">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4 animate-fade-in-up">
            Case Study
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 animate-fade-in-up animate-delay-100">
            TravelGuide Super App
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl animate-fade-in-up animate-delay-200">
            Designing a unified travel platform that combines flight booking, hotel reservations,
            local experiences, and itinerary management into one seamless mobile experience.
          </p>

          <div className="flex flex-wrap gap-3 mt-8 animate-fade-in-up animate-delay-300">
            {["Product Design", "Mobile App", "UX Research", "2024"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 text-xs rounded-full bg-secondary text-secondary-foreground font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container max-w-5xl -mt-2 mb-20">
        <div className="rounded-2xl overflow-hidden card-shadow">
          <img
            src="https://onifade-ifeoluwa.vercel.app/assets/proj-4-BnPsxs6T.png"
            alt="TravelGuide Super App Preview"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Overview */}
      <section className="container max-w-4xl mb-20">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { label: "Role", value: "Lead Product Designer" },
            { label: "Duration", value: "12 weeks (Q1 2024)" },
            { label: "Tools", value: "Figma, Maze, Trello" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">
                {item.label}
              </p>
              <p className="text-foreground font-medium">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="space-y-16">
          {/* The Challenge */}
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              The Challenge
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Travelers today juggle multiple apps for flights, hotels, activities, and trip planning.
              This fragmented experience leads to frustration, missed opportunities, and wasted time
              switching between platforms. The goal was to unify these services under one intuitive
              interface without overwhelming the user.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The client needed a product that could compete with established players while
              differentiating through a superior user experience — particularly for multi-city trips
              and group travel coordination.
            </p>
          </div>

          {/* Research & Discovery */}
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Research & Discovery
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I conducted extensive user research to understand pain points and behaviors across
              different traveler segments.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { stat: "24", desc: "User interviews conducted across 4 traveler personas" },
                { stat: "3", desc: "Competitive audits of leading travel platforms" },
                { stat: "87%", desc: "Of users wanted one app for all travel needs" },
                { stat: "62%", desc: "Abandoned bookings due to complex multi-step flows" },
              ].map((item) => (
                <div
                  key={item.desc}
                  className="p-6 rounded-xl bg-secondary/50 border border-border/50"
                >
                  <p className="text-3xl font-heading font-bold text-primary mb-2">{item.stat}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Design Process */}
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Design Process
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The design process followed a double-diamond approach — diverging to explore possibilities,
              then converging on the most impactful solutions.
            </p>
            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Information Architecture",
                  desc: "Mapped out the entire service ecosystem and designed a navigation model that keeps core actions within 2 taps. Created user flows for booking, itinerary management, and group coordination.",
                },
                {
                  step: "02",
                  title: "Low-Fidelity Wireframes",
                  desc: "Rapidly prototyped 40+ screens focusing on layout hierarchy and interaction patterns. Tested key flows with 8 users to validate navigation assumptions early.",
                },
                {
                  step: "03",
                  title: "Visual Design System",
                  desc: "Built a comprehensive design system with reusable components, a calming color palette inspired by sky and ocean tones, and typography optimized for scanning travel details.",
                },
                {
                  step: "04",
                  title: "High-Fidelity Prototyping",
                  desc: "Crafted pixel-perfect screens with micro-interactions for booking confirmations, map integrations, and real-time itinerary updates. Included dark mode support.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <span className="text-4xl font-heading font-bold text-primary/20 leading-none shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mid-page image */}
          <div className="rounded-2xl overflow-hidden card-shadow">
            <img
              src="https://onifade-ifeoluwa.vercel.app/assets/proj-3-CnCZqc--.png"
              alt="TravelGuide Design Screens"
              className="w-full h-auto"
            />
          </div>

          {/* Key Features */}
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Key Features Designed
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Smart Trip Builder",
                  desc: "AI-powered itinerary suggestions based on destination, budget, and travel style with drag-and-drop day planning.",
                },
                {
                  title: "Unified Search",
                  desc: "One search bar for flights, hotels, and experiences with smart filters that adapt to context.",
                },
                {
                  title: "Group Coordination",
                  desc: "Shared trip boards where groups can vote on activities, split costs, and sync calendars in real-time.",
                },
                {
                  title: "Live Trip Dashboard",
                  desc: "Real-time gate changes, check-in reminders, weather updates, and local recommendations surfaced contextually.",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="p-6 rounded-xl border border-border/50 bg-card card-shadow"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Results & Impact
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              After usability testing and stakeholder reviews, the final designs achieved
              significant improvements over the initial benchmarks.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { stat: "40%", desc: "Reduction in booking completion time" },
                { stat: "4.7/5", desc: "Average usability score in testing" },
                { stat: "92%", desc: "Task success rate across key flows" },
              ].map((item) => (
                <div key={item.desc} className="text-center p-6 rounded-xl bg-primary/5">
                  <p className="text-4xl font-heading font-bold text-primary mb-2">{item.stat}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Reflection */}
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Reflection
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This project reinforced the importance of progressive disclosure in complex applications.
              Rather than showing every option upfront, I learned to layer information contextually —
              surfacing what matters at the right moment in the user's journey.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If I were to revisit this project, I'd invest more time in accessibility testing with
              screen readers and explore voice-based interactions for hands-free trip management
              while traveling.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 section-gradient">
        <div className="container max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
            Interested in working together?
          </h2>
          <p className="text-muted-foreground mb-8">
            I'm always open to discussing new projects and design challenges.
          </p>
          <a
            href="https://contra.com/designninja/work?r=designninja"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Let's Talk <ExternalLink size={16} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Onifade Ifeoluwa. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default CaseStudy;
