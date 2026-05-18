import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  return (
    <div className="min-h-screen cursor-none">
      <SEO
        title="Blog — Onifade Ifeoluwa | UX Design Notes"
        description="UX design thoughts, frameworks, and product lessons from Onifade Ifeoluwa — a product designer with 5+ years shipping Web2, Web3, AI, and mobile products."
        path="/blog"
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <section className="container max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">
              Blog
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Thoughts on UX & Product
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Notes, frameworks, and lessons from years of designing products people love.
            </p>
          </div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group block rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/40"
              >
                {post.cover && (
                  <div className="aspect-[16/9] overflow-hidden bg-muted">
                    <img
                      src={post.cover}
                      alt={post.title}
                      loading="lazy"
                      width={1280}
                      height={720}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-8 md:p-10">
                <span className="inline-block text-xs uppercase tracking-widest text-primary font-semibold mb-3">
                  {post.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-5 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" /> {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-4 h-4" /> {post.readTime}
                  </span>
                  <span className="ml-auto inline-flex items-center gap-1.5 text-primary font-semibold">
                    Read post
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
