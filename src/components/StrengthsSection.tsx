import {
  Palette,
  Users,
  Code,
  LayoutDashboard,
  Lightbulb,
  BarChart3,
  Layers,
  Presentation,
  MessageSquare,
} from "lucide-react";

const strengths = [
  { icon: Palette, label: "Brand Strategy" },
  { icon: Users, label: "User Experience Design" },
  { icon: LayoutDashboard, label: "Interface Design" },
  { icon: Layers, label: "Interactive Designs" },
  { icon: Code, label: "Low Code Tools" },
  { icon: BarChart3, label: "Data Visualization" },
  { icon: Lightbulb, label: "Prototyping" },
  { icon: Presentation, label: "Presentation Design" },
  { icon: MessageSquare, label: "Design Consultation" },
];

const StrengthsSection = () => {
  return (
    <section className="py-24 section-gradient">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">Focus Areas</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            My area of focus
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {strengths.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group flex items-center gap-3 p-4 rounded-xl bg-card card-shadow hover:card-shadow-hover transition-shadow cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrengthsSection;
