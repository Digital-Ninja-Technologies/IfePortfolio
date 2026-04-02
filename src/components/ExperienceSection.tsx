const experiences = [
  {
    company: "Sportrex",
    role: "Product Design & Team Lead",
    period: "2022 – Present",
    active: true,
  },
  {
    company: "Flex2Ride",
    role: "Design Lead & Manager",
    period: "2023 – Present",
    active: true,
  },
  {
    company: "SmartSafe UK",
    role: "Product Designer",
    period: "2020 – 2021, 2024",
    active: false,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-card">
      <div className="container max-w-2xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">Experience</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Work experience
          </h2>
        </div>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className={`flex items-start gap-4 py-6 ${
                i < experiences.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="mt-1.5">
                <span
                  className={`inline-block w-2.5 h-2.5 rounded-full ${
                    exp.active ? "bg-primary" : "bg-muted-foreground/40"
                  }`}
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-semibold text-foreground">{exp.company}</h3>
                  {exp.active && (
                    <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider rounded-full bg-primary/10 text-primary font-semibold">
                      Active
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{exp.role}</p>
              </div>
              <p className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
