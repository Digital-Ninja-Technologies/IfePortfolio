import CaseStudyLayout, { type CaseStudyData } from "@/components/CaseStudyLayout";

const data: CaseStudyData = {
  title: "Bible Verse Display App",
  subtitle: "A real-time Bible verse display tool used during church services. The product listens to a pastor's sermon and instantly projects any referenced scripture onto large screens for the congregation.",
  tags: ["UX/UI Design", "Prompt Engineering", "Church Tech"],
  heroImage: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/clpaauz8nsmf7qnmt5k7.webp",
  meta: [
    { label: "Role", value: "UX/UI Designer" },
    { label: "Timeline", value: "2 Weeks" },
    { label: "Tools", value: "Figma, ChatGPT, Claude" },
  ],
  challenge: [
    "Church projection systems are often cluttered, slow, or visually inconsistent, making it difficult for congregations to quickly read and follow along during sermons.",
    "The challenge was to ensure instant readability from large screens, maintain a calm spiritual aesthetic without clutter, and handle real-time updates smoothly without breaking focus.",
  ],
  research: {
    intro: "I focused on clarity, hierarchy, and minimalism, treating the interface like a live presentation slide rather than a traditional app UI.",
    stats: [
      { stat: "<2s", desc: "Target comprehension time for displayed verses" },
      { stat: "16:9", desc: "Full-screen layout optimized for projection" },
      { stat: "3", desc: "Core states designed: Idle, Listening, Verse Detected" },
      { stat: "4", desc: "Translation options: KJV, NIV, ESV, and more" },
    ],
  },
  process: {
    intro: "Key design principles: Design for distance first (TV/projector visibility), reduce cognitive load, and prioritize content over controls.",
    steps: [
      { step: "01", title: "Distance-First Design", desc: "Full-screen 16:9 layout optimized for projection with dark background to reduce eye strain and centered content for immediate focus." },
      { step: "02", title: "Minimal Control System", desc: "Subtle top bar with microphone toggle, translation selector, and clear screen action — designed to be present but invisible during active use." },
      { step: "03", title: "State Design", desc: "Designed three core states: Idle with soft prompt, Listening with pulsing mic indicator, and Verse Detected with smooth fade-in transitions." },
      { step: "04", title: "Visual Stability", desc: "Translation switching provides instant text update with no layout shift, preserving visual stability throughout the service." },
    ],
  },
  midImage: { src: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/fpvvmhkvwlatkj2dtrxh.webp", alt: "Bible Verse Listening Mode" },
  features: [
    { title: "Real-Time Detection", desc: "Listens to the pastor's sermon and instantly displays referenced scriptures on large screens." },
    { title: "Centered Layout", desc: "Ensures focus regardless of screen size with large typography for readability across large spaces." },
    { title: "Soft Transitions", desc: "Maintains a calm, immersive worship experience with smooth fade-in animations." },
    { title: "Minimal UI", desc: "Prevents distraction during worship with controls that are present but invisible during active use." },
  ],
  results: {
    intro: "The final design delivers a modern, calm, and highly legible interface that projects cleanly in real time.",
    stats: [
      { stat: "100%", desc: "Readability from back of large venues" },
      { stat: "<2s", desc: "Verse comprehension time achieved" },
      { stat: "Zero", desc: "Layout shifts during translation switches" },
    ],
  },
  reflection: [
    "This project reinforced the importance of designing for distance and context — a church service requires calm, distraction-free interfaces that communicate content clearly within seconds.",
    "The most impactful design decisions were the simplest: centered layout, large typography, and soft transitions that maintain a reverent atmosphere.",
  ],
  liveUrl: "https://scriptureview.netlify.app/",
};

const CaseStudyBibleVerse = () => <CaseStudyLayout data={data} />;
export default CaseStudyBibleVerse;
