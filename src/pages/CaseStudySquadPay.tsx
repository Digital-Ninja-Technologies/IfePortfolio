import CaseStudyLayout, { type CaseStudyData } from "@/components/CaseStudyLayout";

const data: CaseStudyData = {
  title: "SquadPay Waitlist Page",
  subtitle: "Designing a modern, conversion-optimized waitlist landing page for SquadPay — a platform that makes it easy for groups of friends to pool money for shared expenses like trips, gifts, bills, and events.",
  tags: ["Product Design", "FinTech", "Landing Page", "Waitlist"],
  heroImage: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/k8hinldbtjdemvfytcmu.webp",
  meta: [
    { label: "Role", value: "Product Designer" },
    { label: "Timeline", value: "2 Days" },
    { label: "Tools", value: "Figma, Jitter, Lummi" },
  ],
  challenge: [
    "SquadPay needed a simple, modern, and effective waitlist landing page to validate interest, build excitement pre-launch, and start building a community early.",
    "The page had to communicate the product's value and use cases clearly, encourage early signups, and optimize for sharing to drive viral growth.",
  ],
  research: {
    intro: "Studied pre-launch waitlist page patterns and identified key conversion elements for early-stage fintech products.",
    stats: [
      { stat: "2", desc: "Days from brief to final delivery" },
      { stat: "3", desc: "Goals: Build excitement, Encourage signups, Communicate value" },
      { stat: "Mobile", desc: "First, accessible design for diverse users" },
      { stat: "Friendly", desc: "Clean, modern visual style with soft gradients" },
    ],
  },
  process: {
    intro: "Led UX/UI design, defined page structure, copy flow, and CTA placement to optimize conversion.",
    steps: [
      { step: "01", title: "Page Structure & Copy", desc: "Defined the conversion-optimized flow: value proposition, use cases, social proof, and clear CTA." },
      { step: "02", title: "Visual Style", desc: "Friendly, clean look with soft gradients, rounded buttons, and expressive illustrations reflecting collaborative nature." },
      { step: "03", title: "Responsive Design", desc: "Created responsive designs across mobile and desktop with accessible contrast." },
      { step: "04", title: "CTA & Messaging", desc: "Collaborated on messaging strategy with the client, optimizing CTA placement for maximum conversions." },
    ],
  },
  midImage: { src: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/ynzgeuqmkb6nyama1sde.webp", alt: "SquadPay Waitlist" },
  features: [
    { title: "Clear Value Proposition", desc: "Instantly communicates what SquadPay does and why groups of friends need it." },
    { title: "Use Case Showcase", desc: "Visual examples of trips, gifts, bills, and events that resonate with target users." },
    { title: "Conversion-Optimized CTA", desc: "Strategic placement and messaging designed to maximize waitlist signups." },
    { title: "Share-Friendly Design", desc: "Optimized for social sharing to drive viral growth pre-launch." },
  ],
  results: {
    intro: "The waitlist page captured the essence of trust, ease, and shared responsibility in a single scroll.",
    stats: [
      { stat: "2 Days", desc: "From brief to final delivery" },
      { stat: "High", desc: "Conversion rate for waitlist signups" },
      { stat: "Strong", desc: "First impression that drives sharing" },
    ],
  },
  reflection: [
    "A clear message and intentional visual design can go a long way in shaping first impressions. It was exciting to help SquadPay take its first step from idea to product.",
    "Good product design starts with clarity — both in message and emotion — especially in early-stage products. The page made people say, 'Yeah, I'd use this with my friends.'",
  ],
};

const CaseStudySquadPay = () => <CaseStudyLayout data={data} />;
export default CaseStudySquadPay;
