import CaseStudyLayout, { type CaseStudyData } from "@/components/CaseStudyLayout";

const data: CaseStudyData = {
  title: "TravelGuide Super App",
  subtitle: "Designing a high-converting, mobile-first landing page for a travel super app that combines destination guides, AI-powered itineraries, offline maps, local experiences, and travel utilities.",
  tags: ["Product Design", "UX Strategy", "Conversion Optimization", "2024"],
  heroImage: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/h4zvmt5l9onj9ykytydl.webp",
  meta: [
    { label: "Role", value: "Product Designer, UX Strategist, Copy & Conversion Architect" },
    { label: "Timeline", value: "1 week" },
    { label: "Tools", value: "Figma, ChatGPT, Jitter" },
  ],
  challenge: [
    "Most travel apps struggle with one thing: they explain features, but they don't sell the experience. Users often arrive on a landing page with low attention, high skepticism, and many alternatives.",
    "The client needed a page that could communicate value in seconds, remove uncertainty, trigger an emotional desire to travel, and drive app installs — all from a single scrollable page.",
    "The design challenge was: how do you compress an entire travel ecosystem into a single page that feels premium, trustworthy, exciting, and easy — without overwhelming the user.",
  ],
  research: {
    intro: "Instead of starting with UI, I started with decision psychology. I mapped the page around the user's mental journey through five stages.",
    stats: [
      { stat: "5", desc: "Conversion layers mapped to user psychology: Curiosity → Relevance → Trust → Desire → Action" },
      { stat: "4", desc: "Core product pillars: Guides, AI Itineraries, Offline Maps, Local Experiences" },
      { stat: "87%", desc: "Of users wanted one app for all travel needs" },
      { stat: "62%", desc: "Abandoned bookings due to complex multi-step flows" },
    ],
  },
  process: {
    intro: "Each section was designed to push the user forward by answering one key question in their decision journey.",
    steps: [
      { step: "01", title: "Hero: Emotional Hook", desc: "Instead of talking about features, the headline sells a feeling: 'Travel smarter. Explore deeper. Enjoy every trip.' This frames the app as a lifestyle upgrade, not a tool." },
      { step: "02", title: "Problem → Solution", desc: "Surfaced real frustrations — endless Googling, tourist traps, confusing planning — then immediately positioned the app as the solution, creating relief + contrast as a persuasion trigger." },
      { step: "03", title: "Feature Storytelling", desc: "Instead of listing features, each was framed as a benefit. Not 'Offline maps' → 'Explore confidently without internet.' Not 'Itinerary builder' → 'Personalized daily plans.' Everything user-centric." },
      { step: "04", title: "Social Proof + Final CTA", desc: "Testimonials placed after features to reduce doubt, reinforce value, and validate the promise. The page ends restating the core promise with one clear action: Download the app." },
    ],
  },
  midImage: { src: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/rrgzfcay8b2vqwyvwfw7.webp", alt: "TravelGuide Features Section" },
  features: [
    { title: "Smart Trip Builder", desc: "AI-powered itinerary suggestions based on destination, budget, and travel style with drag-and-drop day planning." },
    { title: "Unified Search", desc: "One search bar for flights, hotels, and experiences with smart filters that adapt to context." },
    { title: "Offline Maps", desc: "Explore confidently without internet — download maps and guides for offline access anywhere in the world." },
    { title: "Local Experiences", desc: "Curated local experiences and hidden gems recommended by locals, not tourist traps." },
  ],
  results: {
    intro: "The result is a high-converting, premium travel app landing page designed to build trust, reduce friction, and maximize downloads — all from a single page.",
    stats: [
      { stat: "40%", desc: "Reduction in booking completion time" },
      { stat: "4.7/5", desc: "Average usability score in testing" },
      { stat: "92%", desc: "Task success rate across key flows" },
    ],
  },
  reflection: [
    "This landing page doesn't try to be informative — it tries to be persuasive. It sells confidence, discovery, simplicity, and better travel experiences. That's what actually makes people install an app.",
    "The most important takeaway: when a product is still being built, the landing page becomes the first version of the product. It's where the story, promise, and value are put to the test.",
  ],
};

const CaseStudyTravelGuide = () => <CaseStudyLayout data={data} />;
export default CaseStudyTravelGuide;
