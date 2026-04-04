import CaseStudyLayout, { type CaseStudyData } from "@/components/CaseStudyLayout";

const data: CaseStudyData = {
  title: "Korlodworks Website Redesign",
  subtitle: "Complete homepage redesign and six core sub-pages for a creative agency, built and deployed in Elementor. Modernized branding, elevated UI, improved responsiveness, and drove user engagement.",
  tags: ["UI/UX Design", "WordPress", "Agency", "Website Redesign"],
  heroImage: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/s450bxiq5tlws5tm9jpq.webp",
  meta: [
    { label: "Role", value: "Lead UI/UX Designer & Elementor Expert" },
    { label: "Timeline", value: "3 Weeks" },
    { label: "Tools", value: "Figma, Elementor Pro, WordPress, Hotjar" },
  ],
  challenge: [
    "Korlodworks had inconsistent spacing, unclear CTAs, and weak visual hierarchy. User surveys highlighted confusion in navigation and lack of clear pathways to portfolio items.",
    "The client's focus was on a clean and simple interface that converts — modernizing branding while driving user engagement and inquiries.",
  ],
  research: {
    intro: "Conducted heuristic UX audit, gathered user feedback, and benchmarked top creative studios for standout features.",
    stats: [
      { stat: "7", desc: "Pages redesigned: homepage + 6 core sub-pages" },
      { stat: "↓25%", desc: "Bounce rate drop on portfolio pages" },
      { stat: "↑40%", desc: "Increase in contact form submissions" },
      { stat: "1", desc: "Live site: korlodworks.com" },
    ],
  },
  process: {
    intro: "From heuristic audit to wireframing, UI design, and Elementor development with performance optimization.",
    steps: [
      { step: "01", title: "Discovery & Audit", desc: "Heuristic UX audit identifying inconsistent spacing, unclear CTAs, and weak hierarchy. Competitive benchmarking of top studios." },
      { step: "02", title: "Wireframing", desc: "Low-fidelity wireframes with bold hero sections, modular portfolio grids, and built-in conversion zones." },
      { step: "03", title: "Visual Design System", desc: "Fresh palette of warm neutrals, elegant readable fonts, and modular cards with consistent button styles." },
      { step: "04", title: "Elementor Development", desc: "Global templates, responsive breakpoints, lazy loading, and optimized CSS/JS for fast performance." },
    ],
  },
  midImage: { src: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/hmskbz1x9rtaturndxj8.webp", alt: "Korlodworks Website" },
  features: [
    { title: "Modular Portfolio Grid", desc: "Filterable case studies with immersive hero sections and clear visual hierarchy." },
    { title: "Conversion Zones", desc: "Built-in 'Contact,' 'Get Quote,' and 'Subscribe' zones throughout the site." },
    { title: "Design System", desc: "Modular cards, consistent button styles, and reusable sections for faster scaling." },
    { title: "Performance Optimized", desc: "Lazy loading, optimized asset delivery, and minimized CSS/JS bloat." },
  ],
  results: {
    intro: "The redesign delivered measurable improvements in brand perception, engagement, and conversions.",
    stats: [
      { stat: "↓25%", desc: "Bounce rate drop on portfolio pages" },
      { stat: "↑40%", desc: "Increase in contact form submissions" },
      { stat: "Notable", desc: "Uptick in 'high-quality' feedback from prospects" },
    ],
  },
  reflection: [
    "Functional design systems paired with Elementor streamline execution and iteration. Prioritizing UX fundamentals directly enhances user engagement.",
    "A mobile-first mindset ensures brand impact across devices. The client reports a notable uptick in quality feedback from prospects and partners.",
  ],
};

const CaseStudyKorlodworks = () => <CaseStudyLayout data={data} />;
export default CaseStudyKorlodworks;
