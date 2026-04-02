const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-lg font-heading font-bold text-foreground">
            Onifade Ifeoluwa<span className="text-primary">.</span>
          </p>
          <p className="text-sm text-muted-foreground">
            Product Designer & Low-Code Developer
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Home</a>
          <a href="#works" className="hover:text-foreground transition-colors">Works</a>
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a
            href="https://www.linkedin.com/in/onifadeifeoluwa/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} – Onifade Ifeoluwa
        </p>
      </div>
    </footer>
  );
};

export default Footer;
