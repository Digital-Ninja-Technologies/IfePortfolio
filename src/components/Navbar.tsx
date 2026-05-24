import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import ContactModal from "@/components/ContactModal";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Works", href: "/works" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    // Check system preference or localStorage
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return true;
  });

  // Apply theme to document
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleDarkMode = () => setIsDark(!isDark);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="text-lg font-heading font-bold text-foreground tracking-tight hover:text-primary transition-colors">
            Onifade<span className="text-primary">.</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3">
              {/* Dark mode toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full border border-border hover:bg-primary/10 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <a
                href="https://contra.com/designninja?r=designninja"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 text-sm font-medium rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors"
              >
                Hire on Contra
              </a>
              <button
                onClick={() => setContactOpen(true)}
                className="px-5 py-2 text-sm font-medium rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Let's Talk
              </button>
            </div>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 text-foreground"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="container py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground py-2"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://contra.com/designninja?r=designninja"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="px-5 py-2.5 text-sm font-medium rounded-full border border-primary text-primary text-center hover:bg-primary/10 transition-colors"
              >
                Hire on Contra
              </a>
              <button
                onClick={() => {
                  setOpen(false);
                  setContactOpen(true);
                }}
                className="px-5 py-2.5 text-sm font-medium rounded-full bg-primary text-primary-foreground text-center"
              >
                Let's Talk
              </button>
            </div>
          </div>
        )}
      </nav>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
};

export default Navbar;
