import { ArrowRight, BarChart3, Users, Target, Zap } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import resumeFile from "@/assets/Ifeoluwa_Onifade UX:UI.pdf";

const keyMetrics = [
  { icon: Target, value: "5+", label: "Years Building Products", subtext: "Web2, Web3, AI, Mobile, SaaS" },
  { icon: Users, value: "26", label: "Projects Delivered", subtext: "From startups to enterprises" },
  { icon: BarChart3, value: "100K+", label: "Users Impacted", subtext: "Across multiple platforms" },
  { icon: Zap, value: "18+", label: "Satisfied Clients", subtext: "Returning partnerships & referrals" },
];

const expertise = [
  { category: "Product Design", items: ["User Research & Personas", "Information Architecture", "Interaction Design", "Design Systems", "Usability Testing"] },
  { category: "Technical Skills", items: ["Figma", "Prototyping", "Design Handoff", "Low-Code Tools", "User Analytics"] },
  { category: "Specializations", items: ["SaaS Dashboards", "FinTech Platforms", "Web3 Products", "Admin Interfaces", "Data Visualization"] },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      {/* Hero Section */}
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">Who I Am</p>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight">
                Product Designer solving complex problems for ambitious teams
              </h1>
            </div>

            <div className="space-y-4 text-foreground/80 text-lg leading-relaxed">
              <p>
                I'm <strong>Onifade Ifeoluwa</strong>, a product designer with 5+ years of experience building digital products that users actually love. I specialize in transforming complex business requirements into intuitive, scalable interfaces.
              </p>
              <p>
                My sweet spot: <strong>SaaS dashboards, FinTech platforms, and Web3 products</strong> where data-heavy complexity meets user-friendly design.
              </p>
            </div>

            <div className="pt-4 space-y-2">
              <p className="text-sm text-primary font-semibold uppercase tracking-wider">Core Strengths</p>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Turning messy data into readable, actionable interfaces</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Designing systems that scale across teams and products</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Bridging gap between design vision and engineering reality</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href="https://www.linkedin.com/in/onifadeifeoluwa/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Connect on LinkedIn <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={resumeFile}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors"
                download
              >
                Download Resume <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden bg-muted border border-border/50">
              <img
                src={profileImage}
                alt="Onifade Ifeoluwa - Product Designer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics - Data Centric */}
      <div className="mt-24 py-20 bg-primary/5 border-t border-primary/10">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">By The Numbers</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Impact through design
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyMetrics.map(({ icon: Icon, value, label, subtext }) => (
              <div key={label} className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <p className="text-4xl font-bold text-foreground mb-2">{value}</p>
                <p className="font-semibold text-foreground mb-1">{label}</p>
                <p className="text-xs text-muted-foreground">{subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Expertise Grid */}
      <div className="mt-24 py-20">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">Expertise</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              What I bring to the table
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertise.map(({ category, items }) => (
              <div key={category} className="space-y-4">
                <h3 className="text-lg font-heading font-bold text-foreground border-b-2 border-primary pb-3">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Working Together */}
      <div className="mt-24 py-20 bg-muted/50 border-t border-border/50">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            How I work
          </h2>
          <p className="text-lg text-foreground/80 mb-8">
            I believe in collaborative design. I work closely with founders, product managers, and engineers to understand your challenges and deliver solutions that actually move the needle.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <p className="font-semibold text-foreground">Discovery</p>
              <p className="text-sm text-foreground/70">Deep dive into your business & users</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-foreground">Design</p>
              <p className="text-sm text-foreground/70">Create solutions with measurable impact</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-foreground">Delivery</p>
              <p className="text-sm text-foreground/70">Partner through handoff & beyond</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
