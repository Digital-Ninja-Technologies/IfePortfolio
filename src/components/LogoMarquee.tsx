const logos = [
  "Sportrex", "Eskro", "Testpromptly", "BlouX", "Brand360",
  "Korlod Works", "Sinelah", "Sportzlite",
];

const LogoMarquee = () => {
  return (
    <section className="py-12 bg-card border-y border-border/50 overflow-hidden">
      <div className="container mb-4">
        <p className="text-xs uppercase tracking-widest text-muted-foreground text-center">
          Worked with teams from
        </p>
      </div>
      <div className="relative">
        <div className="flex marquee whitespace-nowrap">
          {[...logos, ...logos].map((name, i) => (
            <span
              key={i}
              className="mx-8 text-lg font-semibold text-muted-foreground/40 select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
