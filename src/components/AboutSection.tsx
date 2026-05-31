import { ArrowRight, BarChart3, Users, Target, Zap } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import resumeFile from "@/assets/Ifeoluwa_Onifade UX:UI.pdf";

const keyMetrics = [
  { icon: Target, value: "5+", label: "Years Building Apps", subtext: "Mobile apps, web apps, Web2 products" },
  { icon: Users, value: "26", label: "Products Designed", subtext: "Mobile & web experiences" },
  { icon: BarChart3, value: "10K+", label: "Downloads & Users", subtext: "Across mobile and web platforms" },
  { icon: Zap, value: "18+", label: "Happy Clients", subtext: "Startups to scale-ups" },
];

const expertise = [
  { category: "Mobile Design", items: ["iOS & Android Design", "Mobile Navigation Patterns", "Touch Interactions", "App Architecture", "Mobile Performance"] },
  { category: "Web & Web3 Design", items: ["Responsive Web Apps", "Web UI/UX", "Web3 Interfaces", "Blockchain Design", "Accessible Design"] },
  { category: "Product Skills", items: ["User Research", "Wireframing & Prototyping", "Design Systems", "User Flows", "Hand-off to Developers"] },
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
                Product Designer crafting exceptional mobile apps, web apps, and web2 or web3 products
              </h1>
            </div>

            <div className="space-y-4 text-foreground/80 text-lg leading-relaxed">
              <p>
                I'm <strong>Onifade Ifeoluwa</strong>, a product designer with 5+ years of experience building digital products that users actually love. I specialize in creating intuitive, scalable interfaces for <strong>mobile apps, web apps, and Web2 products</strong>.
              </p>
              <p>
                My sweet spot: <strong>Designing user-centered experiences</strong> that combine beautiful interfaces with seamless functionality, whether on mobile or web platforms.
              </p>
            </div>

            <div className="pt-4 space-y-2">
              <p className="text-sm text-primary font-semibold uppercase tracking-wider">Core Strengths</p>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Mobile-first design for iOS and Android experiences</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Responsive web apps that work flawlessly across devices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>User research & testing to validate design decisions</span>
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
      <div className="mt-24 py-20 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border-t border-primary/20">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">My Process</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              How I Work
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Collaborative, iterative, and obsessed with creating products people love. Here's my journey with you:
            </p>
          </div>

          {/* Interactive Process Flow */}
          <div className="space-y-4">
            {/* Step 1 */}
            <div className="group relative">
              <div className="flex items-start gap-6 p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                    01
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">Discovery & Alignment</h3>
                  <p className="text-foreground/70">
                    We dive deep into your vision, users, and goals. I ask tough questions, listen actively, and build a shared understanding of what success looks like.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-semibold">Research</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-semibold">Workshops</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-semibold">Strategy</span>
                  </div>
                </div>
                <div className="hidden lg:flex items-center flex-shrink-0">
                  <svg className="w-8 h-8 text-primary/30 group-hover:text-primary/60 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group relative lg:ml-12">
              <div className="flex items-start gap-6 p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                    02
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">Design & Iterate</h3>
                  <p className="text-foreground/70">
                    I create wireframes, prototypes, and interactive designs. We test with real users, gather feedback, and iterate rapidly. Design is a conversation, not a monologue.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-semibold">Wireframes</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-semibold">Prototypes</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-semibold">Testing</span>
                  </div>
                </div>
                <div className="hidden lg:flex items-center flex-shrink-0">
                  <svg className="w-8 h-8 text-primary/30 group-hover:text-primary/60 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group relative lg:ml-24">
              <div className="flex items-start gap-6 p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                    03
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">Polish & Handoff</h3>
                  <p className="text-foreground/70">
                    I create pixel-perfect designs, detailed specs, and interactive handoff documentation. Your engineers get everything they need to build it right. I'm here through launch and beyond.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-semibold">Design System</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-semibold">Specs</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-semibold">Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fun Stats About My Process */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-border/50">
            <div className="text-center group cursor-pointer">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">100%</p>
              <p className="text-sm text-foreground/70">User-Focused</p>
            </div>
            <div className="text-center group cursor-pointer">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">∞</p>
              <p className="text-sm text-foreground/70">Iterations</p>
            </div>
            <div className="text-center group cursor-pointer">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">24/7</p>
              <p className="text-sm text-foreground/70">Availability</p>
            </div>
            <div className="text-center group cursor-pointer">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">🎯</p>
              <p className="text-sm text-foreground/70">Results-Driven</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
              Ready to bring your vision to life? Let's create something exceptional together.
            </p>
            <a
              href="https://contra.com/designninja?r=designninja"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity hover:shadow-lg"
            >
              Let's Work Together <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
