import CaseStudyLayout, { type CaseStudyData } from "@/components/CaseStudyLayout";

const data: CaseStudyData = {
  title: "OPay Landing Page Redesign",
  subtitle: "Redesigned OPay's landing page to improve clarity, trust, and conversion for first-time visitors. Focused on visual hierarchy, reduced cognitive load, and mobile-first experience.",
  tags: ["UI/UX Design", "FinTech", "Landing Page"],
  heroImage: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/z9ubd9eaziwzg3vdqbn2.webp",
  meta: [
    { label: "Role", value: "Product Designer (UX + UI)" },
    { label: "Timeline", value: "3 Weeks" },
    { label: "Tools", value: "Figma, ChatGPT, AI Image Generation" },
  ],
  challenge: [
    "The existing OPay landing page had weak visual hierarchy, making it difficult for first-time visitors to quickly understand the core value proposition.",
    "Overloaded information architecture with too many competing elements created cognitive overload.",
    "Unclear primary action flow — visitors didn't know whether to download, sign up, or explore features first.",
    "Limited emotional connection and trust signals for a fintech product handling financial transactions.",
  ],
  research: {
    intro: "I conducted competitive analysis against top fintech products (Paystack, Flutterwave, Grey, Piggyvest) and found that successful landing pages prioritize clarity, trust, and single-action focus.",
    stats: [
      { stat: "4", desc: "Top fintech competitors analyzed for best practices" },
      { stat: "5s", desc: "Target time for value comprehension on mobile" },
      { stat: "1", desc: "Primary CTA: Download App (reduced from 5)" },
      { stat: "7", desc: "Conversion-driven sections in final design" },
    ],
  },
  process: {
    intro: "Key design principles: Simplify messaging, establish trust immediately, optimize for mobile-first users, and guide toward a single primary action.",
    steps: [
      { step: "01", title: "Competitive Audit & Research", desc: "Reviewed existing OPay experience and benchmarked against fintech leaders. Found that successful landing pages simplify messaging and focus heavily on trust + clarity." },
      { step: "02", title: "Information Architecture", desc: "Restructured the page into clear, conversion-driven sections: Hero, Core Features, Trust & Social Proof, Product Screens, Secondary CTA." },
      { step: "03", title: "Visual Direction", desc: "Created clean, modern fintech aesthetic with white space, bold typography for clarity, green brand accents, and mobile-first layout decisions." },
      { step: "04", title: "UX Optimization", desc: "Implemented clear primary CTA, reduced cognitive load by grouping related features, added trust elements, and designed for fast mobile scanning." },
    ],
  },
  midImage: { src: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/csqmul73wbttxt1upute.webp", alt: "OPay Product Screens Section" },
  features: [
    { title: "Strong Visual Hierarchy", desc: "Clear value proposition on hero with improved contrast and typography hierarchy for instant comprehension." },
    { title: "Trust Signals", desc: "Added user statistics, security cues, and testimonials to establish credibility for a fintech product." },
    { title: "Mobile-First Layout", desc: "Optimized for fast scanning on mobile devices with reduced cognitive load and clear action paths." },
    { title: "Focused CTA Flow", desc: "Single primary CTA (Download App) with secondary actions, guiding users toward conversion without confusion." },
  ],
  results: {
    intro: "The redesigned landing page delivers a strong first impression with improved conversion signals and trustworthiness.",
    stats: [
      { stat: "<5s", desc: "Value comprehension achieved on mobile" },
      { stat: "1", desc: "Single clear primary action" },
      { stat: "60%", desc: "Reduction in competing elements" },
      { stat: "3", desc: "Key trust elements added" },
    ],
  },
  reflection: [
    "Simplification is powerful. By reducing information and competing actions, the redesigned page immediately communicates value and builds trust with first-time visitors.",
    "For fintech products, trust signals (security, user stats, testimonials) are just as important as feature highlights. They directly impact conversion.",
    "Mobile-first design isn't just responsive layout — it's about restructuring information architecture to prioritize what matters most on smaller screens.",
  ],
  liveUrl: "https://contra.com/p/E2smMlEW-o-pay-landing-page-redesign",
};

const CaseStudyOPay = () => <CaseStudyLayout data={data} />;
export default CaseStudyOPay;
