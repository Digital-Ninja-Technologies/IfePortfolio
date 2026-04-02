import CaseStudyLayout, { type CaseStudyData } from "@/components/CaseStudyLayout";

const data: CaseStudyData = {
  title: "TravelGuide Super App",
  subtitle: "Designing a unified travel platform that combines flight booking, hotel reservations, local experiences, and itinerary management into one seamless mobile experience.",
  tags: ["Product Design", "Mobile App", "UX Research", "2024"],
  heroImage: "https://onifade-ifeoluwa.vercel.app/assets/proj-4-BnPsxs6T.png",
  meta: [
    { label: "Role", value: "Lead Product Designer" },
    { label: "Duration", value: "12 weeks (Q1 2024)" },
    { label: "Tools", value: "Figma, Maze, Trello" },
  ],
  challenge: [
    "Travelers today juggle multiple apps for flights, hotels, activities, and trip planning. This fragmented experience leads to frustration, missed opportunities, and wasted time switching between platforms. The goal was to unify these services under one intuitive interface without overwhelming the user.",
    "The client needed a product that could compete with established players while differentiating through a superior user experience — particularly for multi-city trips and group travel coordination.",
  ],
  research: {
    intro: "I conducted extensive user research to understand pain points and behaviors across different traveler segments.",
    stats: [
      { stat: "24", desc: "User interviews conducted across 4 traveler personas" },
      { stat: "3", desc: "Competitive audits of leading travel platforms" },
      { stat: "87%", desc: "Of users wanted one app for all travel needs" },
      { stat: "62%", desc: "Abandoned bookings due to complex multi-step flows" },
    ],
  },
  process: {
    intro: "The design process followed a double-diamond approach — diverging to explore possibilities, then converging on the most impactful solutions.",
    steps: [
      { step: "01", title: "Information Architecture", desc: "Mapped out the entire service ecosystem and designed a navigation model that keeps core actions within 2 taps." },
      { step: "02", title: "Low-Fidelity Wireframes", desc: "Rapidly prototyped 40+ screens focusing on layout hierarchy and interaction patterns. Tested key flows with 8 users." },
      { step: "03", title: "Visual Design System", desc: "Built a comprehensive design system with reusable components, a calming color palette inspired by sky and ocean tones." },
      { step: "04", title: "High-Fidelity Prototyping", desc: "Crafted pixel-perfect screens with micro-interactions for booking confirmations, map integrations, and real-time updates." },
    ],
  },
  midImage: { src: "https://onifade-ifeoluwa.vercel.app/assets/proj-3-CnCZqc--.png", alt: "TravelGuide Design Screens" },
  features: [
    { title: "Smart Trip Builder", desc: "AI-powered itinerary suggestions based on destination, budget, and travel style with drag-and-drop day planning." },
    { title: "Unified Search", desc: "One search bar for flights, hotels, and experiences with smart filters that adapt to context." },
    { title: "Group Coordination", desc: "Shared trip boards where groups can vote on activities, split costs, and sync calendars in real-time." },
    { title: "Live Trip Dashboard", desc: "Real-time gate changes, check-in reminders, weather updates, and local recommendations surfaced contextually." },
  ],
  results: {
    intro: "After usability testing and stakeholder reviews, the final designs achieved significant improvements over the initial benchmarks.",
    stats: [
      { stat: "40%", desc: "Reduction in booking completion time" },
      { stat: "4.7/5", desc: "Average usability score in testing" },
      { stat: "92%", desc: "Task success rate across key flows" },
    ],
  },
  reflection: [
    "This project reinforced the importance of progressive disclosure in complex applications. Rather than showing every option upfront, I learned to layer information contextually — surfacing what matters at the right moment in the user's journey.",
    "If I were to revisit this project, I'd invest more time in accessibility testing with screen readers and explore voice-based interactions for hands-free trip management while traveling.",
  ],
};

const CaseStudyTravelGuide = () => <CaseStudyLayout data={data} />;
export default CaseStudyTravelGuide;
