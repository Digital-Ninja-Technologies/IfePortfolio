const logos = [
  { name: "Sportrex", domain: "sportrex.io" },
  { name: "Eskro", domain: "eskroapp.ca" },
  { name: "Testpromptly", domain: "testpromptly.com" },
  { name: "BlowX", domain: "blowx.ai" },
  { name: "Brand360", domain: "brand360.com.my" },
  { name: "Korlod Works", domain: "korlodworks.com" },
  { name: "Sinelah", domain: "sinelah.com" },
  { name: "Sportzlite", domain: "sportzlite.com" },
];

const LogoMarquee = () => {
  return (
    <section className="py-12 bg-card border-y border-border/50 overflow-hidden">
      <div className="container mb-6">
        <p className="text-xs uppercase tracking-widest text-muted-foreground text-center">
          Worked with teams from
        </p>
      </div>
      <div className="relative">
        <div className="flex marquee whitespace-nowrap items-center">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="mx-8 flex items-center gap-3 text-lg font-semibold text-muted-foreground select-none"
            >
              <img
                src={`https://www.google.com/s2/favicons?domain=${logo.domain}&sz=128`}
                alt={`${logo.name} logo`}
                loading="lazy"
                className="h-8 w-8 rounded object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              <span>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
