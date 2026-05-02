import CaseStudyLayout, { type CaseStudyData } from "@/components/CaseStudyLayout";

const data: CaseStudyData = {
  title: "CineMetric AI",
  subtitle: "An AI-powered analytics platform that helps filmmakers, studios, and producers analyze scripts and predict audience appeal before production. Solo vibe-coded project from concept to live deployment.",
  tags: ["Vibe Coding", "AI Products", "Film Technology"],
  heroImage: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/flsmsz3pqostvf6jkgzf.webp",
  meta: [
    { label: "Role", value: "UX/UI Designer & Developer (Vibe Coder)" },
    { label: "Timeline", value: "6 Weeks" },
    { label: "Tools", value: "Claude, Lovable, Netlify" },
  ],
  challenge: [
    "The film industry relies on gut feeling and subjective decisions, leading to high financial risk in production.",
    "Studios and producers lack data-driven insights before committing millions to production budgets.",
    "Limited ability to predict audience reception or global scalability of stories before expensive production cycles.",
    "Creators need a way to validate ideas and understand performance potential before major investment.",
  ],
  research: {
    intro: "Competitive analysis of platforms like Cinelytic and IMDbPro revealed that successful film-tech products combine data visualization with storytelling context. Domain research into film distribution, P&A spending, and box office analytics informed every design decision.",
    stats: [
      { stat: "2", desc: "Weeks of domain research into film industry metrics" },
      { stat: "3", desc: "Core user personas: indie producer, studio analyst, streaming curator" },
      { stat: "6", desc: "Weeks from napkin sketch to live deployment" },
      { stat: "100%", desc: "Solo ownership: research, design, engineering" },
    ],
  },
  process: {
    intro: "A high-velocity solo execution approach combining discovery, design, and development in parallel. Vibe coding requires a strong design system first to maintain consistency and speed.",
    steps: [
      { step: "01", title: "Discovery", desc: "Competitive audit, user personas, pain-point mapping across three core filmmaking archetypes." },
      { step: "02", title: "Define", desc: "Information architecture for script analysis workflows, user flows for data interpretation, and feature prioritization." },
      { step: "03", title: "Design", desc: "Dark-first cinematic aesthetic with gold accents, serif/sans-serif hierarchy, minimal UI. Mobile-first design for on-set professionals." },
      { step: "04", title: "Build", desc: "Component architecture, AI API integration, responsive layouts, Claude for reasoning, Lovable for rapid iteration." },
    ],
  },
  midImage: { src: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/xsz4mweuognklublrhvb.webp", alt: "CineMetric AI Platform Interface" },
  features: [
    { title: "Script Analysis Engine", desc: "Upload or paste scripts to receive predictive insights on audience appeal and market viability." },
    { title: "Dark Cinematic Aesthetic", desc: "Dark UI reduces cognitive dissonance for cinema professionals. Gold accents signal prestige and awards." },
    { title: "Zero-Jargon AI Outputs", desc: "Complex AI insights translated into plain language for smart, non-technical users." },
    { title: "Mobile-First Design", desc: "Film professionals move between set, festivals, and screenings. Platform optimized for mobile first." },
  ],
  results: {
    intro: "CineMetric AI successfully combines predictive AI with filmmaking context, delivering a platform that makes data-driven storytelling accessible and trustworthy.",
    stats: [
      { stat: "6", desc: "Weeks from concept to live deployment" },
      { stat: "1", desc: "Solo designer-developer managing all aspects" },
      { stat: "Dark-first", desc: "Visual language conveys authority before the user reads anything" },
      { stat: "Live", desc: "Deployed on Netlify and actively used by early adopters" },
    ],
  },
  reflection: [
    "Vibe coding demands a design system first. Moving fast without visual constraints creates compounding debt. CSS variables and spacing tokens save hours of consistency-fixing.",
    "AI features need UX as much as engineering. The hardest part isn't the model—it's designing how to present uncertainty and limitations in ways that build trust.",
    "Aesthetic choices are strategic. The dark-gold visual language wasn't a style preference—it was a positioning decision communicating authority and industry-nativeness before any words.",
    "Domain immersion is non-negotiable. Two weeks of studying film distribution and box office analytics made every design decision sharper and more credible.",
  ],
  liveUrl: "https://cinemetricai.netlify.app/",
};

const CaseStudyCineMetric = () => <CaseStudyLayout data={data} />;
export default CaseStudyCineMetric;
