import CaseStudyLayout, { type CaseStudyData } from "@/components/CaseStudyLayout";

const data: CaseStudyData = {
  title: "Moducode UX/UI Design Project",
  subtitle: "A trust-driven hiring platform connecting global companies with vetted remote software and data engineers from Africa — designed to reduce hiring friction and guide visitors toward booking a consultation.",
  tags: ["B2B SaaS", "Recruitment", "Conversion Design"],
  heroImage: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/b83wbaujeckx5c0pzjva.webp",
  meta: [
    { label: "Role", value: "UX/UI Designer" },
    { label: "Year", value: "2026" },
    { label: "Tools", value: "Figma, FigJam, ChatGPT" },
  ],
  challenge: [
    "Companies hiring remote tech talent from emerging markets face three major concerns: trust in talent quality, speed of recruitment, and clarity around how hiring actually works.",
    "The challenge was to design a website experience that immediately builds confidence while simplifying the path from curiosity to conversion.",
    "Moducode needed to feel modern and ambitious while still reassuring enterprise clients that they were hiring dependable, professional engineers.",
  ],
  research: {
    intro: "Discovery covered hiring platforms, tech recruitment websites, B2B SaaS landing pages, and user behavior patterns on conversion-focused products. Insights revealed users needed instant clarity, early social proof, and minimal friction.",
    stats: [
      { stat: "3", desc: "Core user concerns addressed: trust, speed, and clarity" },
      { stat: "5", desc: "Key insights: instant clarity, social proof, low friction, process visualization, professionalism" },
      { stat: "1", desc: "Unified narrative — from curiosity to consultation booking" },
      { stat: "B2B", desc: "Designed for enterprise-grade trust and global appeal" },
    ],
  },
  process: {
    intro: "I structured the experience around a simple narrative: establish trust quickly, simplify the hiring journey, and reinforce credibility before every conversion moment.",
    steps: [
      { step: "01", title: "Establish Trust Quickly", desc: "The hero immediately communicates what Moducode does, who it serves, and the value proposition — reducing cognitive load." },
      { step: "02", title: "Simplify the Journey", desc: "Reduced complex recruitment workflows into a clear 3-step system: book a call, get matched, start work." },
      { step: "03", title: "Reinforce Credibility", desc: "Testimonials and social validation placed strategically before key conversion sections to reduce hesitation." },
      { step: "04", title: "Optimize Conversion", desc: "Booking form designed with minimal inputs, logical grouping, and clear field labeling to lower friction." },
    ],
  },
  midImage: { src: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/x3u8ovhdbpzvr7gatabs.webp", alt: "Moducode UX flow" },
  features: [
    { title: "Clean B2B Visual Language", desc: "Spacious layouts, strong typography hierarchy, modern card components, and clear CTA contrast for an enterprise-ready feel." },
    { title: "Trust-Centered Design", desc: "Visual hierarchy focused on testimonials, process transparency, and professional imagery — calm and confident, not overly technical." },
    { title: "3-Step Hiring System", desc: "Book a call → get matched with talent → start work. Made the service feel approachable and fast." },
    { title: "Frictionless Booking Form", desc: "Minimal required inputs, logical grouping, and reduced visual clutter to lower friction for first-time visitors." },
  ],
  results: {
    intro: "The final product delivered a cleaner, more conversion-focused hiring experience and positioned Moducode as a modern African tech talent platform capable of serving global companies professionally.",
    stats: [
      { stat: "↑", desc: "Stronger trust signals and clearer communication" },
      { stat: "3-Step", desc: "Simplified hiring flow that users grasp in seconds" },
      { stat: "🎯", desc: "Conversion-focused layout optimized for consultation bookings" },
      { stat: "Live", desc: "Shipped at moducode.com with a scalable UI foundation" },
    ],
  },
  reflection: [
    "Designing for trust is the most important currency in B2B products.",
    "Reducing friction in conversion journeys directly impacts how seriously a service is perceived.",
    "Communicating complex services with simplicity makes them feel more credible, not less.",
    "Strong UX writing and visual hierarchy can dramatically improve perception within the first few seconds of interaction.",
  ],
  liveUrl: "https://www.moducode.com/",
};

const CaseStudyModucode = () => <CaseStudyLayout data={data} />;
export default CaseStudyModucode;
