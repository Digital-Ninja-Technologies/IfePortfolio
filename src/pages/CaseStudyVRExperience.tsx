import CaseStudyLayout, { type CaseStudyData } from "@/components/CaseStudyLayout";

const data: CaseStudyData = {
  title: "VR Experience Landing Page",
  subtitle: "Creating a visually captivating and emotionally immersive landing page for a cutting-edge VR experience exploring the intersection of human consciousness and machine intelligence.",
  tags: ["Motion Design", "UI Design", "AR/VR", "Landing Page"],
  heroImage: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/wuzwwyo8nrsvtmclcxc1.webp",
  meta: [
    { label: "Role", value: "Motion Designer & UI Designer" },
    { label: "Timeline", value: "1 Week" },
    { label: "Tools", value: "Figma, Jitter, Lummi AI" },
  ],
  challenge: [
    "The design needed to instantly draw users into a narrative about two opposing identities — one organic, one synthetic — locked in a silent encounter under a surreal digital sky.",
    "It had to convey a strong sense of atmosphere and contrast while encouraging exploration and engagement from both sci-fi enthusiasts and tech-forward creatives.",
  ],
  research: {
    intro: "Anchored the entire design around a key visual: two stylized figures facing off at twilight, using cinematic design principles.",
    stats: [
      { stat: "2", desc: "Contrasting identities: humanoid robot and futuristic astronaut" },
      { stat: "Neon", desc: "Sky gradient transitioning from dusk to night" },
      { stat: "3", desc: "Tools combined: Figma, Jitter animation, Lummi AI" },
      { stat: "∞", desc: "Ambient cloud pulse animation for immersion" },
    ],
  },
  process: {
    intro: "This landing page didn't just present a VR product — it told a story through cinematic design and immersive storytelling.",
    steps: [
      { step: "01", title: "Visual Direction", desc: "Two stylized figures — a humanoid robot and a futuristic astronaut — facing off at twilight, inspiring the entire interface." },
      { step: "02", title: "Neon Sky Gradient", desc: "Vivid gradient transitioning from dusk to night with stylized characters symbolizing duality and convergence." },
      { step: "03", title: "Ambient Animation", desc: "Clouds that subtly pulse for immersive ambient animation using Jitter, creating a living, breathing page." },
      { step: "04", title: "Contrast-Driven UI", desc: "Design elements that invite users to feel the world before stepping into it through visual contrast and atmosphere." },
    ],
  },
  features: [
    { title: "Cinematic Hero", desc: "Key visual of two opposing figures creating an instantly captivating narrative experience." },
    { title: "Ambient Animation", desc: "Subtly pulsing clouds and gradient transitions that make the page feel alive." },
    { title: "Atmospheric Design", desc: "Strong sense of duality and convergence through neon gradients and contrast." },
    { title: "Narrative-First UX", desc: "Users feel the VR world before stepping into it through immersive visual storytelling." },
  ],
  results: {
    intro: "The landing page became an entry point into a universe, combining cinematic design with immersive storytelling.",
    stats: [
      { stat: "High", desc: "Emotional engagement from cinematic design" },
      { stat: "Strong", desc: "Appeal to both sci-fi fans and tech creatives" },
      { stat: "Unique", desc: "Contrast-driven UI that tells a story" },
    ],
  },
  reflection: [
    "This landing page didn't just present a VR product — it told a story. By using cinematic design, immersive storytelling, and contrast-driven UI, we invited users to feel the world before stepping into it.",
    "'I didn't design a page — I designed an entry point into a universe.'",
  ],
};

const CaseStudyVRExperience = () => <CaseStudyLayout data={data} />;
export default CaseStudyVRExperience;
