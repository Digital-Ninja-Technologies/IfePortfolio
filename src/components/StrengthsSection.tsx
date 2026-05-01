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
  Zap,
  Wand2,
  Settings,
} from "lucide-react";
import { useState } from "react";

const strengths = [
  { icon: Palette, label: "Brand Strategy", color: "from-purple-500 to-pink-500" },
  { icon: Users, label: "User Experience Design", color: "from-blue-500 to-cyan-500" },
  { icon: LayoutDashboard, label: "Interface Design", color: "from-green-500 to-emerald-500" },
  { icon: Zap, label: "VibeCoding", color: "from-yellow-500 to-orange-500" },
  { icon: Code, label: "Low Code Tools", color: "from-pink-500 to-rose-500" },
  { icon: Wand2, label: "Design Audit", color: "from-indigo-500 to-purple-500" },
  { icon: BarChart3, label: "Data Visualization", color: "from-cyan-500 to-blue-500" },
  { icon: Settings, label: "Technical Virtual Assistance", color: "from-red-500 to-orange-500" },
  { icon: Lightbulb, label: "Prototyping", color: "from-green-500 to-teal-500" },
  { icon: Presentation, label: "Presentation Design", color: "from-violet-500 to-purple-500" },
  { icon: MessageSquare, label: "Design Consultation", color: "from-amber-500 to-yellow-500" },
  { icon: Layers, label: "Interactive Designs", color: "from-fuchsia-500 to-pink-500" },
];

const StrengthsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 section-gradient relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 left-5 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-5 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">⚡ Focus Areas</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            What I specialize in
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Combining design excellence with technical expertise to deliver transformative digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {strengths.map(({ icon: Icon, label, color }, index) => (
            <div
              key={label}
              className="group relative h-32 rounded-2xl overflow-hidden cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              {/* Card background */}
              <div className="absolute inset-0 bg-card border border-border/50 group-hover:border-primary/50 transition-colors duration-300" />

              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center p-4 text-center gap-3">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} p-2.5 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Label */}
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {label}
                </span>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>
            </div>
          ))}
        </div>

        {/* Fun footer text */}
        <div className="text-center mt-16 animate-fade-in-up animate-delay-300">
          <p className="text-muted-foreground italic">
            🎨 Designing tomorrow, today. One pixel at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StrengthsSection;
