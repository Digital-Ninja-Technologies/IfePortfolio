import CaseStudyLayout, { type CaseStudyData } from "@/components/CaseStudyLayout";

const data: CaseStudyData = {
  title: "ConektApp Website Redesign",
  subtitle: "A full website redesign to improve brand perception, modernize the interface, and enhance user engagement through a clean, intuitive, and scalable design system for a Web3 social app.",
  tags: ["Website Redesign", "Web3", "UI Design", "Conversion"],
  heroImage: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/xylr6xpol40h9y9vu0xl.webp",
  meta: [
    { label: "Role", value: "Mobile Designer & UI/UX Writer" },
    { label: "Client", value: "ConektApp" },
    { label: "Tools", value: "Figma, FigJam, Jitter, Kit" },
  ],
  challenge: [
    "ConektApp's original website had an outdated UI that didn't reflect the innovation behind the product, with poor content hierarchy and unclear messaging.",
    "Ineffective CTAs led to low conversion rates, and the site needed significant mobile responsiveness upgrades to match modern web3 standards.",
  ],
  research: {
    intro: "Analyzed the existing site for UX issues and benchmarked against leading Web3 social platforms for design patterns.",
    stats: [
      { stat: "4", desc: "Key issues identified: UI, hierarchy, CTAs, mobile" },
      { stat: "5", desc: "Redesign goals defined for the new experience" },
      { stat: "3", desc: "Core UI sections redesigned: Hero, Features, Footer" },
      { stat: "100%", desc: "Mobile-first responsive design approach" },
    ],
  },
  process: {
    intro: "The redesign was a strategic realignment of the brand's digital experience with user expectations.",
    steps: [
      { step: "01", title: "Visual Language", desc: "Adopted a brighter, friendlier palette with trust-building blues and vibrant accent tones for CTA highlights with modern sans-serif fonts." },
      { step: "02", title: "Homepage Hero", desc: "Simplified with bold copy, a primary CTA ('Download Now'), and illustrations showing the mobile app interface." },
      { step: "03", title: "Features Section", desc: "Modular layout highlighting key app capabilities like interest matching, events, and AI-powered suggestions." },
      { step: "04", title: "Responsive Implementation", desc: "Mobile-first design with optimized layout grids and spacing for seamless tablet and smartphone usage." },
    ],
  },
  midImage: { src: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/clhdphvqnhraify3x0yb.webp", alt: "ConektApp Redesign" },
  features: [
    { title: "Modern Visual Identity", desc: "Brighter, friendlier palette with trust-building blues and vibrant accent tones for CTA highlights." },
    { title: "Clear Information Architecture", desc: "Simplified content hierarchy with clear pathways and strategic CTA placement." },
    { title: "Scalable Design System", desc: "Reusable components aligned with ConektApp's expanding product ecosystem." },
    { title: "Touch-Friendly Interactions", desc: "All interactions and animations optimized for smooth mobile and tablet usage." },
  ],
  results: {
    intro: "The redesign helped ConektApp modernize its appearance and scale its impact across a growing community.",
    stats: [
      { stat: "↑35%", desc: "Improvement in CTA click-through rates" },
      { stat: "100%", desc: "Mobile responsive across all devices" },
      { stat: "2x", desc: "Improvement in content clarity and hierarchy" },
    ],
  },
  reflection: [
    "The ConektApp website redesign was more than just a visual refresh — it was a strategic realignment of the brand's digital experience with user expectations.",
    "Good design connects — great design Conekts. By combining intuitive UX, consistent UI, and emotionally resonant design, we helped ConektApp scale its impact.",
  ],
  liveUrl: "https://conekt-landing-page-v2.vercel.app",
};

const CaseStudyConektWebsite = () => <CaseStudyLayout data={data} />;
export default CaseStudyConektWebsite;
