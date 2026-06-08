import { useEffect, useState } from "react";
import { Check, Clock, Users, Zap, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const PaidConsultation = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const consultationTopics = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Technology Strategy",
      description: "AI integration, web3 architecture, backend optimization, scalable systems design",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Business Development",
      description: "Go-to-market strategy, pricing models, user acquisition, investor pitch readiness",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Product Design",
      description: "UX/UI strategy, design systems, user research, conversion optimization",
    },
  ];

  const packages = [
    {
      type: "Free Consultation",
      audience: "In-House Clients",
      duration: "30 mins",
      price: "Free",
      benefits: [
        "Initial discovery call",
        "Problem statement clarity",
        "High-level strategy outline",
        "Next steps recommendation",
      ],
    },
    {
      type: "Free Follow-Up",
      audience: "Previous Clients",
      duration: "30 mins x 2",
      price: "Free",
      benefits: [
        "Progress review",
        "New challenges discussion",
        "Updated recommendations",
        "Ongoing support",
      ],
      highlighted: true,
    },
    {
      type: "Paid Consultation",
      audience: "Everyone",
      duration: "1 Hour",
      price: "₦100,000",
      benefits: [
        "Deep-dive strategy session",
        "Custom recommendations",
        "Detailed action plan",
        "Follow-up documentation",
        "Email support (7 days)",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-border/50 bg-background/95 backdrop-blur-sm">
        <div className="container h-16 flex items-center justify-between">
          <Link to="/" className="font-bold text-xl">
            Design Ninja
          </Link>
          <nav className="flex items-center gap-8">
            <Link to="/works" className="text-sm hover:text-primary transition">
              Works
            </Link>
            <Link to="/about" className="text-sm hover:text-primary transition">
              About
            </Link>
            <Link to="/consultation" className="text-sm font-semibold text-primary">
              Consultation
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-background to-background/50 border-b border-border/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-semibold">Strategic Consulting</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground">
              Expert Consultation for Your Digital Product
            </h1>
            <p className="text-xl text-muted-foreground">
              Get strategic guidance on Technology, Business, and Design from someone who's built 30+ products and scaled teams across Web2, Web3, and SaaS.
            </p>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Whether you're launching a startup, pivoting your business, or scaling your product—I'm here to help you make informed decisions and avoid costly mistakes.
            </p>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-24 border-b border-border/50">
        <div className="container">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              What We'll Discuss
            </h2>
            <p className="text-muted-foreground">
              Expertise across the full spectrum of building and scaling digital products
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {consultationTopics.map((topic, i) => (
              <div key={i} className="p-6 rounded-xl border border-border/50 hover:border-primary/50 transition group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition">
                  {topic.icon}
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{topic.title}</h3>
                <p className="text-sm text-muted-foreground">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 border-b border-border/50">
        <div className="container">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Consultation Packages
            </h2>
            <p className="text-muted-foreground">
              Flexible options based on your relationship with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`p-8 rounded-2xl border-2 transition-all group ${
                  pkg.highlighted
                    ? "border-primary bg-primary/5"
                    : "border-border/50 hover:border-primary/50"
                }`}
              >
                <div className="mb-6">
                  <p className="text-sm font-semibold text-primary mb-2">{pkg.audience}</p>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">{pkg.type}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>
                  <p className="text-3xl font-bold text-foreground">{pkg.price}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {pkg.type === "Paid Consultation" && (
                  <a
                    href="https://calendly.com/ifeoluwa-designs/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition"
                  >
                    Book Now
                  </a>
                )}

                {pkg.type !== "Paid Consultation" && (
                  <button className="w-full px-6 py-3 rounded-lg border border-primary/50 text-primary font-semibold hover:bg-primary/5 transition">
                    Learn More
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-green-50 border border-green-200 rounded-xl max-w-2xl mx-auto">
            <p className="text-sm text-green-900">
              ✅ <strong>Meeting Confirmed</strong> - Your consultation is confirmed once payment is received. You'll receive a confirmation email with meeting details and a Google Meet/Zoom link.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 border-b border-border/50">
        <div className="container">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              How It Works
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                step: "1",
                title: "Book Your Session",
                description: "Select your preferred date and time on the calendar below. Choose the consultation package that fits your needs.",
              },
              {
                step: "2",
                title: "Complete Payment",
                description: "For paid consultations, secure payment via bank transfer or online payment method. You'll receive a confirmation immediately.",
              },
              {
                step: "3",
                title: "Pre-Consultation Prep",
                description: "Share brief background info about your startup/product. This helps me tailor the discussion to your specific needs.",
              },
              {
                step: "4",
                title: "Deep-Dive Session",
                description: "Join via Google Meet/Zoom for a focused strategy session covering technology, business, and design aspects.",
              },
              {
                step: "5",
                title: "Follow-Up Support",
                description: "Receive detailed notes and recommendations. Email support available for 7 days post-consultation.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-heading font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendly Embed Section */}
      <section className="py-24 border-b border-border/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Book Your Consultation
            </h2>
            <p className="text-muted-foreground">
              Select your preferred date and time below. Confirmation email sent instantly after booking.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/ifeoluwa-designs/30min?hide_event_type_details=1&hide_gdpr_banner=1"
              style={{ minWidth: "320px", height: "700px" }}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 border-b border-border/50">
        <div className="container">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
            {[
              {
                q: "What if I need to reschedule?",
                a: "You can reschedule up to 48 hours before your scheduled time. For paid consultations, use the Calendly link or contact me directly.",
              },
              {
                q: "Is the consultation confidential?",
                a: "Absolutely. Everything discussed is confidential. We can also sign an NDA if you're working on sensitive projects.",
              },
              {
                q: "Do you provide written recommendations?",
                a: "Yes. Paid consultations include detailed follow-up documentation with actionable recommendations and next steps.",
              },
              {
                q: "What if I'm outside Nigeria?",
                a: "International payments are welcome! I accept bank transfers, Wise, PayPal, and other international payment methods. Just book and let me know your location.",
              },
              {
                q: "Can I book multiple consultations?",
                a: "Yes! Stack sessions if you need deeper exploration. Returning clients get discounted rates on subsequent consultations.",
              },
              {
                q: "What's the best time to book?",
                a: "Ideally 1-2 weeks before you need the consultation. This gives me time to review any materials you send and prepare tailored recommendations.",
              },
            ].map((item, i) => (
              <details key={i} className="group border border-border/50 rounded-lg p-6 cursor-pointer hover:border-primary/50 transition">
                <summary className="flex items-center justify-between font-heading font-bold text-foreground">
                  {item.q}
                  <span className="text-primary group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Ready to Scale Your Digital Product?
            </h2>
            <p className="text-lg text-muted-foreground">
              Get expert guidance on technology, business, and design. Let's turn your vision into a scalable, profitable product.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a
                href="https://calendly.com/ifeoluwa-designs/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition"
              >
                Book Paid Consultation
              </a>
              <Link
                to="/about"
                className="px-8 py-3 rounded-lg border border-primary/50 text-primary font-semibold hover:bg-primary/5 transition"
              >
                Learn About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50 bg-background/50">
        <div className="container text-center text-muted-foreground text-sm">
          <p>© 2025 Onifade Ifeoluwa. All rights reserved.</p>
          <p className="mt-2">
            Questions? Email{" "}
            <a href="mailto:ifeoluwa.designs@gmail.com" className="text-primary hover:underline">
              ifeoluwa.designs@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PaidConsultation;
