import { ArrowRight, History } from "lucide-react";

const experiences = [
  {
    company: "Flex2Ride",
    role: "Lead Product Designer",
    period: "2023 – Present",
    tags: ["Mobility", "SaaS", "Admin Panels"],
    active: true,
  },
  {
    company: "SquadPay",
    role: "Product Designer",
    period: "2024",
    tags: ["FinTech", "Dashboards"],
    active: false,
  },
  {
    company: "Ripplecat",
    role: "UX/UI Designer",
    period: "2024",
    tags: ["Web3", "Gaming"],
    active: false,
  },
  {
    company: "Sportrex",
    role: "Web3 Product Design Lead",
    period: "2023",
    tags: ["Web3", "Blockchain", "B2C"],
    active: false,
  },
  {
    company: "Yumdash",
    role: "Product Designer",
    period: "2023",
    tags: ["E-Commerce", "Food Tech"],
    active: false,
  },
  {
    company: "Zerodepression.org",
    role: "Lead Product Designer",
    period: "2022 – 2023",
    tags: ["HealthTech", "Non-Profit"],
    active: false,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border text-xs font-semibold uppercase tracking-wider text-primary mb-4">
            <History className="w-3.5 h-3.5" />
            Work Experience
          </span>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
            The journey of my career
          </h2>
        </div>

        {/* Timeline */}
        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className={`group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 py-7 ${
                i < experiences.length - 1 ? "border-b border-border" : ""
              }`}
            >
              {/* Company & Role */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-lg md:text-xl font-bold text-foreground">
                    {exp.company}
                  </h3>
                  {exp.active && (
                    <span className="px-2.5 py-0.5 text-[10px] uppercase tracking-wider rounded-full bg-primary/10 text-primary font-semibold">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{exp.role}</p>
              </div>

              {/* Period */}
              <p className="text-sm text-muted-foreground whitespace-nowrap order-first sm:order-none">
                {exp.period}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 sm:justify-end min-w-0 sm:min-w-[200px]">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-[11px] rounded-full bg-muted text-muted-foreground font-medium lowercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Resume CTA */}
        <div className="flex justify-center mt-12">
          <a
            href="https://contra.com/designninja/work?r=designninja"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full border border-border text-foreground hover:bg-muted transition-colors"
          >
            Download Resume <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
