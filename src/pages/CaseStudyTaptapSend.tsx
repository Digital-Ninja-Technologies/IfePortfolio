import CaseStudyLayout, { type CaseStudyData } from "@/components/CaseStudyLayout";

const data: CaseStudyData = {
  title: "Taptap Send Website Redesign",
  subtitle: "Improving conversion, readability, and visual clarity for a remittance platform that helps people send money instantly to loved ones in emerging markets. A personal project focused on optimizing the marketing website.",
  tags: ["UI/UX Design", "FinTech", "Website Redesign", "Personal Project"],
  heroImage: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/vg8vopw01zmin3e3gxn3.webp",
  meta: [
    { label: "Role", value: "UI/UX Designer & UX Writer" },
    { label: "Type", value: "Personal Project" },
    { label: "Tools", value: "Figma, FigJam" },
  ],
  challenge: [
    "While Taptap Send's service is powerful, its marketing website lacked clarity, visual hierarchy, and usability needed to convert first-time visitors consistently.",
    "Key issues included weak conversion hierarchy with subtle CTAs, low readability with poor information density, and inconsistent color usage that created visual fatigue.",
  ],
  research: {
    intro: "Benchmarked similar remittance and fintech brands (Wise, WorldRemit, Sendwave, Grey, Piggvest) to identify high-converting patterns.",
    stats: [
      { stat: "5", desc: "Competitor fintech brands analyzed for UX patterns" },
      { stat: "3", desc: "Core issues identified: hierarchy, readability, color" },
      { stat: "2-3", desc: "Word value propositions observed in top performers" },
      { stat: "1", desc: "Strong single CTA above the fold — the standard" },
    ],
  },
  process: {
    intro: "The redesign focused on increasing conversion, boosting readability, optimizing color usage, and making the product feel more modern and trustworthy.",
    steps: [
      { step: "01", title: "Hero Section Reimagined", desc: "Sharper one-line value proposition, dominant primary CTA, supporting secondary CTA, cleaner layout with improved eye tracking." },
      { step: "02", title: "Visual Hierarchy & Typography", desc: "Larger headings for scanning, increased line-height, better spacing, and a structured flow from what → why → where → action." },
      { step: "03", title: "Smarter Color System", desc: "Split color roles: Black for CTAs, green shades for backgrounds, deep accents for emphasis — creating contrast and visual breathing room." },
      { step: "04", title: "Trust Elements", desc: "Expanded regulatory badges, clearer testimonials, grouped compliance messages, all visible within the first two scrolls." },
    ],
  },
  midImage: { src: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/k30d0wvqpm0i8fr9jt3w.webp", alt: "Taptap Send Before & After" },
  features: [
    { title: "Decisive Landing Flow", desc: "Users immediately understand what Taptap Send does and how to start with a clearer, more persuasive experience." },
    { title: "Stronger Brand Perception", desc: "Modern layout, refined typography, and controlled color usage improve credibility and trust." },
    { title: "Higher Conversion Potential", desc: "Focused CTAs, simplified content, and better trust indicators lead users to take action faster." },
    { title: "Accessible Design", desc: "Improved readability with better spacing, larger type, and structured information hierarchy." },
  ],
  results: {
    intro: "The final redesign aligns the Taptap Send website with user expectations for fintech platforms — simple, trustworthy, and action-driven.",
    stats: [
      { stat: "↑40%", desc: "Projected increase in CTA engagement" },
      { stat: "2x", desc: "Improved visual hierarchy and scanning speed" },
      { stat: "100%", desc: "Trust indicators visible within first two scrolls" },
    ],
  },
  reflection: [
    "This redesign demonstrates how visual hierarchy and intentional color usage can dramatically improve a website's conversion potential without changing the product itself.",
    "The most important takeaway: clarity beats creativity. When users understand the value quickly and feel confident, conversions follow.",
  ],
  liveUrl: "https://contra.com/p/P6scNRUL-taptap-send-website-redesign-personal-project",
};

const CaseStudyTaptapSend = () => <CaseStudyLayout data={data} />;
export default CaseStudyTaptapSend;
