import CaseStudyLayout, { type CaseStudyData } from "@/components/CaseStudyLayout";

const data: CaseStudyData = {
  title: "Synclove",
  subtitle: "A real-time, web-based connection experience — a private chat app for couples in love. Designed to feel alive, personal, and human, with zero distraction. Just you and your lover.",
  tags: ["Vibe Coding", "Real-Time UX", "Dating & Relationships"],
  heroImage: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/lsivtws87rxzv8wrjla6.webp",
  meta: [
    { label: "Role", value: "Product Designer & Vibe Coder" },
    { label: "Year", value: "2026" },
    { label: "Tools", value: "Claude AI, Lovable, ChatGPT" },
  ],
  challenge: [
    "Most communication platforms today feel transactional, emotionally disconnected, and overly text-based.",
    "Users struggle to feel presence and connection, especially in long-distance relationships or online interactions.",
    "Simulating real-time emotional connection in a web app — making digital interactions feel alive rather than static.",
    "Avoiding feature overload — resisting the pull to become yet another full-blown messaging app.",
  ],
  research: {
    intro: "Discovery focused on how couples actually communicate online and where mainstream messaging apps fall short emotionally. The guiding insight: connection should feel alive, not static. Every product decision was filtered through that lens.",
    stats: [
      { stat: "1", desc: "Core idea: connection should feel alive, not static" },
      { stat: "3", desc: "Pain points addressed: transactional, disconnected, text-heavy UX" },
      { stat: "0", desc: "Distractions — just you and your partner" },
      { stat: "100%", desc: "Focus on shared, real-time experiences over messaging" },
    ],
  },
  process: {
    intro: "A focused, interaction-first approach. Instead of overwhelming users with features, the platform was built around core interactions that feel personal and meaningful — designed for emotion as much as function.",
    steps: [
      { step: "01", title: "Product Thinking", desc: "Anchored every decision to one idea: digital connection should feel alive. Minimal interface, clear interaction points, shared experiences over messaging." },
      { step: "02", title: "Simplicity First", desc: "Stripped the interface to essentials so users can understand instantly, act quickly, and stay focused on each other." },
      { step: "03", title: "Emotion-Driven UX", desc: "Decisions were guided by how users feel, not just what they do — creating a more human-centered experience." },
      { step: "04", title: "Build & Ship", desc: "Vibe-coded with Claude, Lovable, and ChatGPT. Optimized for speed, smooth transitions, and zero friction." },
    ],
  },
  midImage: { src: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/zfz1xl8ysaoulvvy2inb.webp", alt: "Synclove product screens" },
  features: [
    { title: "Real-Time Interaction", desc: "Users engage instantly, creating a sense of presence rather than delay or waiting." },
    { title: "Clean, Focused UI", desc: "The interface removes distractions and emphasizes core actions, emotional clarity, and ease of use." },
    { title: "Lightweight Experience", desc: "Fast loading and smooth transitions ensure no friction and continuous engagement between partners." },
    { title: "Intentional Communication", desc: "Interactions are designed to feel direct, personal, and meaningful — the opposite of cluttered chat apps." },
  ],
  results: {
    intro: "Synclove proves digital products don't have to feel cold or mechanical. With the right focus, they can feel alive, personal, and human — and lay the groundwork for a broader connection-first ecosystem.",
    stats: [
      { stat: "🚀", desc: "Fast, smooth, low-friction user experience" },
      { stat: "🎯", desc: "Clear, connection-first product direction" },
      { stat: "💡", desc: "Strong foundation to scale into messaging, social, and relationship tools" },
      { stat: "Live", desc: "Shipped at lovesyn.lovable.app via vibe coding" },
    ],
  },
  reflection: [
    "Simplicity creates stronger engagement — fewer features, deeper connection.",
    "Emotional UX is just as important as functionality; how it feels is the product.",
    "Real-time interaction dramatically increases the sense of presence and connection.",
    "Future improvements: deeper personalization, richer interaction features, mobile-first optimization, and expanding into a broader social ecosystem.",
  ],
};

const CaseStudySynclove = () => <CaseStudyLayout data={data} />;
export default CaseStudySynclove;
