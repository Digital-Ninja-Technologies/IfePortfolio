import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import ReadyToWorkWidget from "@/components/ReadyToWorkWidget";
import { Check, Clock, Users, Zap, X } from "lucide-react";

const PaidConsultation = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  useEffect(() => {
    // Load Calendly widget when modal opens
    if (isCalendlyOpen && typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
      
      // Reload Calendly widget
      setTimeout(() => {
        if (window.Calendly) {
          window.Calendly.initBadgeWidget({
            url: "https://calendly.com/ifeoluwa-designs/30min",
            text: "Book meeting",
            color: "3b82f6",
          });
        }
      }, 500);
    }
  }, [isCalendlyOpen]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5 pt-[100px]">
        {/* Hero Section */}
        <section className="py-20 px-4 md:px-8 border-b border-border/50">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">
              Startup Consultation
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Build Your Digital Product Right
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Get expert guidance on Technology, Business Strategy, and Design for your startup. 
              Strategic decisions made early compound into significant advantages later.
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-foreground">
                <Clock className="w-4 h-4 text-primary" />
                <span>1 Hour Sessions</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-foreground">
                <Zap className="w-4 h-4 text-primary" />
                <span>Actionable Insights</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-foreground">
                <Users className="w-4 h-4 text-primary" />
                <span>Real-World Experience</span>
              </div>
            </div>
          </div>
        </section>

        {/* What We Cover */}
        <section className="py-20 px-4 md:px-8 border-b border-border/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                What We'll Cover
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Expert guidance across the three pillars of digital product success
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Technology */}
              <div className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4m0 0l1 14M9 9h5m0 0V5m0 4v4m4-8v10"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Technology</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Tech stack selection & architecture</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Scalability & performance planning</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Web3 & blockchain integration</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>MVP development strategy</span>
                  </li>
                </ul>
              </div>

              {/* Business */}
              <div className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Business</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Go-to-market strategy</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Funding & investment readiness</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Revenue model & pricing</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Unit economics & metrics</span>
                  </li>
                </ul>
              </div>

              {/* Design */}
              <div className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Design</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Product design direction & strategy</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>User experience & research</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Design systems & scalability</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Brand & design positioning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 md:px-8 border-b border-border/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Pricing & Access
              </h2>
              <p className="text-lg text-muted-foreground">
                Clear, transparent pricing with special programs for partners
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Standard */}
              <div className="p-8 rounded-2xl bg-card border border-border/50">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                  Standard
                </h3>
                <p className="text-muted-foreground mb-6">For startups and founders</p>
                <div className="mb-8">
                  <div className="text-5xl font-bold text-foreground">
                    $70
                  </div>
                  <p className="text-muted-foreground text-sm mt-2">per 1-hour session</p>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground mb-8">
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>60-minute focused consultation</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Technology, Business & Design guidance</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Actionable recommendations</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Email follow-up notes</span>
                  </li>
                </ul>
                <button 
                  onClick={() => setIsCalendlyOpen(true)}
                  className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                >
                  Book Now
                </button>
              </div>

              {/* In-House Clients */}
              <div className="p-8 rounded-2xl bg-card border border-primary/50 ring-1 ring-primary/20 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    EXCLUSIVE
                  </span>
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                  In-House Clients
                </h3>
                <p className="text-muted-foreground mb-6">For active project partners</p>
                <div className="mb-8">
                  <div className="text-5xl font-bold text-primary">FREE</div>
                  <p className="text-muted-foreground text-sm mt-2">unlimited consultations</p>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground mb-8">
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Unlimited 1-hour sessions</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Priority scheduling</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Deep product knowledge</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Slack/Email support</span>
                  </li>
                </ul>
                <button disabled className="w-full px-6 py-3 rounded-lg bg-primary/20 text-primary font-semibold cursor-default opacity-60">
                  Contact Us
                </button>
              </div>

              {/* Returning Clients */}
              <div className="p-8 rounded-2xl bg-card border border-border/50">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                  Returning Clients
                </h3>
                <p className="text-muted-foreground mb-6">For past project collaborators</p>
                <div className="mb-8">
                  <div className="text-5xl font-bold text-foreground">FREE</div>
                  <p className="text-muted-foreground text-sm mt-2">2 consultations per year</p>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground mb-8">
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>2 free 1-hour sessions/year</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Continued support</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Project continuity knowledge</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Renewal after year</span>
                  </li>
                </ul>
                <button 
                  onClick={() => setIsCalendlyOpen(true)}
                  className="w-full px-6 py-3 rounded-lg bg-primary/10 text-primary font-semibold hover:bg-primary/20 transition-colors"
                >
                  Get Your 2 Free Sessions
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 md:px-8 border-b border-border/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                How It Works
              </h2>
            </div>

            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Select Your Time",
                  description:
                    "Choose a time slot from the calendar that works best for your schedule.",
                },
                {
                  step: "2",
                  title: "Complete Payment",
                  description:
                    "Pay $70 for a 1-hour session. In-house and returning clients may qualify for free consultations.",
                },
                {
                  step: "3",
                  title: "Confirmation",
                  description:
                    "Your meeting is confirmed immediately after payment. You'll receive a calendar invite with Zoom/Google Meet link.",
                },
                {
                  step: "4",
                  title: "Consultation",
                  description:
                    "Join the call and get expert guidance on Technology, Business, and Design for your startup.",
                },
                {
                  step: "5",
                  title: "Follow-Up",
                  description:
                    "Receive email notes with actionable recommendations and next steps from our discussion.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 md:px-8 border-b border-border/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "What if I'm an in-house client or returning client?",
                  a: "In-house clients get unlimited free consultations. Returning clients get 2 free consultations per year. Contact us directly to verify your eligibility.",
                },
                {
                  q: "What's included in the consultation?",
                  a: "60 minutes of focused expert guidance on Technology, Business, and Design. You'll get actionable recommendations and email follow-up notes with next steps.",
                },
                {
                  q: "Can I reschedule or cancel?",
                  a: "Yes! You can reschedule up to 24 hours before your consultation. Cancellations within 24 hours are non-refundable but can be rescheduled.",
                },
                {
                  q: "How do I prepare for my consultation?",
                  a: "Come with specific questions or challenges. If possible, share a brief overview of your product/startup beforehand so we can make the most of our time.",
                },
                {
                  q: "Is this for first-time founders or experienced entrepreneurs?",
                  a: "Both! Whether you're pre-launch or scaling, I provide guidance tailored to your stage and specific needs.",
                },
                {
                  q: "Can we do multiple sessions?",
                  a: "Absolutely! Many startups book ongoing consultations. We can discuss package options for multiple sessions if needed.",
                },
              ].map((item, idx) => (
                <details key={idx} className="group p-6 rounded-lg border border-border/50 hover:border-primary/50 transition-colors cursor-pointer">
                  <summary className="flex items-start gap-4 font-heading font-bold text-foreground">
                    <span className="text-lg">{item.q}</span>
                    <svg
                      className="w-5 h-5 mt-1 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </summary>
                  <p className="mt-4 text-muted-foreground">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Ready to Build Your Product?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your startup's Technology, Business, and Design strategy. 
              Book your consultation today and get expert guidance to accelerate your journey.
            </p>
            <button 
              onClick={() => setIsCalendlyOpen(true)}
              className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-colors"
            >
              Book Consultation Now
            </button>
          </div>
        </section>
      </main>

      {/* Calendly Modal */}
      {isCalendlyOpen && (
        <div className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center p-4">
          <div className="bg-background rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            {/* Close Button */}
            <button
              onClick={() => setIsCalendlyOpen(false)}
              className="sticky top-4 right-4 z-10 float-right p-2 rounded-full bg-card border border-border hover:bg-primary/10 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Calendly Widget */}
            <div className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                  Book Your Consultation
                </h3>
                <p className="text-muted-foreground">
                  Select a time that works best for you
                </p>
              </div>

              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/ifeoluwa-designs/30min"
                style={{ minWidth: "100%", height: "600px" }}
              />
            </div>
          </div>
        </div>
      )}

      <ReadyToWorkWidget />
    </>
  );
};

export default PaidConsultation;
