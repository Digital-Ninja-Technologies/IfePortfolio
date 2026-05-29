import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import profileImage from "@/assets/profile.jpg";
import profileImage2 from "@/assets/profile-2.jpg";
import profileImage3 from "@/assets/profile-3.jpg";
import profileImage4 from "@/assets/profile-4.jpg";
import profileImage5 from "@/assets/profile-5.jpg";
import Card3D from "@/components/Card3D";
import ContactModal from "@/components/ContactModal";

const galleryImages = [
  { src: profileImage, alt: "Onifade Ifeoluwa - Product Designer" },
  { src: profileImage2, alt: "Designing at workstation" },
  { src: profileImage3, alt: "Sketching wireframes" },
  { src: profileImage4, alt: "Presenting design concepts" },
  { src: profileImage5, alt: "Multi-screen design workspace" },
];

const AboutPreview = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  return (
    <>
      <section className="py-24">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative space-y-4">
              <Card3D
                key={activeImage}
                image={galleryImages[activeImage].src}
                alt={galleryImages[activeImage].alt}
              />
              <div className="grid grid-cols-4 gap-3">
                {galleryImages.slice(1).map((img, i) => {
                  const idx = i + 1;
                  const isActive = activeImage === idx;
                  return (
                    <button
                      key={img.src}
                      onClick={() => setActiveImage(idx)}
                      aria-label={`View ${img.alt}`}
                      className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                        isActive
                          ? "border-primary shadow-[0_0_20px_hsl(var(--primary)/0.4)] scale-[1.03]"
                          : "border-border/50 hover:border-primary/60 opacity-80 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        width={800}
                        height={1000}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            </div>


            {/* Text */}
            <div className="space-y-8">
              <div>
                <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">
                  Why Work With Me
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
                  I turn your vision into exceptional digital products that users love
                </h2>
              </div>

              <div className="space-y-4 text-foreground/80 text-lg leading-relaxed">
                <p>
                  With 5+ years of experience designing mobile apps, web apps, and Web2/Web3 products, I've helped startups and scale-ups launch products that actually move the needle. I don't just design interfaces — I solve problems strategically.
                </p>
                <p>
                  Whether you're at level 0 needing a complete product strategy, or scaling to new heights, I work closely with you every step of the way. From discovery and research to pixel-perfect designs and seamless engineering handoff.
                </p>
              </div>

              {/* Proof Points */}
              <div className="space-y-3 pt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">26+ projects delivered across mobile, web, and blockchain</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">500K+ users impacted through thoughtful design</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">18+ happy clients with 100% collaboration focus</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Specialized in SaaS, FinTech, Web3, and growth products</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6">
                <button
                  onClick={() => setContactOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold rounded-full bg-primary text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] hover:scale-105"
                >
                  Let's Talk
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <Link
                  to="/about"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold rounded-full border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  More About Me
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Social Proof */}
              <p className="text-xs text-muted-foreground pt-4">
                ✨ Used by startups and scale-ups building products that matter
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
};

export default AboutPreview;
