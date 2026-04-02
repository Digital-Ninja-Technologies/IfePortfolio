const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container max-w-3xl text-center">
        <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">About Me</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
          A bit about myself
        </h2>
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
          I'm a product designer with 4+ years of experience, focusing on Web3, mobile, and web apps.
          I have a special interest in building for Telegram mini apps, Web3, Fin-tech and challenging tasks.
          I design strategies, services, and products for people — with close to a decade in the tech space.
          I approach problem-solving strategically and love helping companies pivot from level 0 to 1,
          then strategize on what's next.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
