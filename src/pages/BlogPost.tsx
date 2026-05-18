import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import NotFound from "@/pages/NotFound";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <NotFound />;

  return (
    <div className="min-h-screen cursor-none">
      <SEO
        title={`${post.title} — Onifade Ifeoluwa`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        ogType="article"
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <article className="container max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <span className="inline-block text-xs uppercase tracking-widest text-primary font-semibold mb-3">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-12 pb-8 border-b border-border">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> {post.readTime}
            </span>
          </div>

          <div className="space-y-8">
            {post.content.map((block, i) => (
              <div key={i}>
                {block.heading && (
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                    {block.heading}
                  </h2>
                )}
                <p className="text-foreground/90 leading-relaxed text-lg">
                  {block.body}
                </p>
              </div>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
