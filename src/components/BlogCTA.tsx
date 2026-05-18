import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const BlogCTA = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container max-w-4xl">
        <div className="relative rounded-3xl border border-border bg-card p-10 md:p-16 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
          <div className="relative">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-6">
              <BookOpen className="w-6 h-6" />
            </div>
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">
              From the Blog
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Thoughts on design & product
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Notes, frameworks, and lessons from designing products people love.
            </p>
            <Link
              to="/blog"
              className="group inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] hover:scale-105"
            >
              View My Blogs
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCTA;
