import CaseStudyLayout, { type CaseStudyData } from "@/components/CaseStudyLayout";

const data: CaseStudyData = {
  title: "RaySup Wrestling Website",
  subtitle: "Converting a Figma design into a fully functional, responsive WordPress website for a US-based wrestling promotion. Pixel-perfect implementation with fast delivery.",
  tags: ["WordPress Dev", "Web Design", "Sports", "Figma to WordPress"],
  heroImage: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/wlv1impwu0lu8nxcivoe.webp",
  meta: [
    { label: "Role", value: "WordPress Developer" },
    { label: "Timeline", value: "3 Days" },
    { label: "Tools", value: "Figma, WordPress, Elementor, CSS" },
  ],
  challenge: [
    "RaySup Wrestling needed a dynamic and responsive website to showcase their events, wrestlers, and brand story, built from a provided Figma design.",
    "The challenge was turning a static layout into a fully functional and responsive WordPress site with CMS flexibility for the client to manage content easily.",
  ],
  research: {
    intro: "Analyzed the Figma designs to plan the implementation approach and identify responsive breakpoints needed.",
    stats: [
      { stat: "3", desc: "Days from Figma design to live website" },
      { stat: "<2.5s", desc: "Page load time achieved on most devices" },
      { stat: "100%", desc: "Pixel-perfect match with original design" },
      { stat: "1", desc: "Live website: raysupwrestling.com" },
    ],
  },
  process: {
    intro: "As the WordPress developer, I was responsible for the complete conversion from Figma to a live, performant website.",
    steps: [
      { step: "01", title: "Theme Setup", desc: "Configured a lightweight theme to match design requirements with optimal performance." },
      { step: "02", title: "Elementor Build", desc: "Used Elementor for fast, pixel-perfect layout implementation of all pages." },
      { step: "03", title: "Custom Styling & Responsive", desc: "Applied custom CSS and ensured seamless experience on mobile, tablet, and desktop." },
      { step: "04", title: "Performance & SEO", desc: "Installed caching, image optimization, speed tweaks, and essential SEO plugins with meta structure." },
    ],
  },
  features: [
    { title: "Pixel-Perfect Implementation", desc: "Exact match with the original Figma design across all pages and breakpoints." },
    { title: "CMS Flexibility", desc: "Easy-to-update content management for events and wrestler profiles." },
    { title: "Performance Optimized", desc: "Load time under 2.5 seconds with caching and image optimization." },
    { title: "SEO-Ready Structure", desc: "Essential plugins and meta structure set up for search engine visibility." },
  ],
  results: {
    intro: "Fully responsive, live website matching the original design with excellent performance and client satisfaction.",
    stats: [
      { stat: "<2.5s", desc: "Load time on most devices" },
      { stat: "100%", desc: "Design fidelity from Figma to live site" },
      { stat: "5/5", desc: "Client satisfaction rating" },
    ],
  },
  reflection: [
    "Fast turnaround doesn't mean compromising quality. Three days was enough to deliver a pixel-perfect, performant website with proper CMS structure.",
    "Client feedback: 'Ifeoluwa delivered exactly what we needed. The site looks amazing and runs smoothly. Great communication and fast turnaround!'",
  ],
};

const CaseStudyRaySup = () => <CaseStudyLayout data={data} />;
export default CaseStudyRaySup;
