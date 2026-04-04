import CaseStudyLayout, { type CaseStudyData } from "@/components/CaseStudyLayout";

const data: CaseStudyData = {
  title: "Flex2Ride Ride Hailing App",
  subtitle: "Nigerian premium affordable and luxurious ride-hailing and delivery platform launched in 2024. Designed a comprehensive ride-hailing experience focusing on seamless booking flow, driver management, and real-time tracking.",
  tags: ["Visual Design", "Mobile App", "Transport", "2024"],
  heroImage: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/vxqjx8agke7g9rdz0kl1.webp",
  meta: [
    { label: "Role", value: "Visual Designer" },
    { label: "Duration", value: "16 weeks (Q2 2024)" },
    { label: "Tools", value: "Figma, Trello" },
  ],
  challenge: [
    "The ride-hailing market in Nigeria is dominated by a few major players, yet riders consistently report pain points around pricing transparency, driver communication, and safety. Flex2Ride needed a product that addressed these gaps while building trust with first-time users.",
    "A key challenge was designing for low-bandwidth environments and a diverse user base with varying levels of tech literacy — from university students to business professionals.",
  ],
  research: {
    intro: "I led a discovery sprint involving field research across Lagos and Abuja to understand how riders and drivers interact with existing platforms.",
    stats: [
      { stat: "30+", desc: "Rider and driver interviews across two cities" },
      { stat: "5", desc: "Competitive apps benchmarked for UX patterns" },
      { stat: "73%", desc: "Of riders cited pricing surprises as top frustration" },
      { stat: "58%", desc: "Preferred cash payment — requiring hybrid payment flows" },
    ],
  },
  process: {
    intro: "We adopted a lean UX approach, shipping usable prototypes early and iterating based on real rider and driver feedback.",
    steps: [
      { step: "01", title: "Journey Mapping", desc: "Mapped end-to-end rider and driver journeys, identifying 12 key touchpoints and 6 critical pain points in the booking-to-arrival flow." },
      { step: "02", title: "Rapid Prototyping", desc: "Built clickable prototypes of the booking flow, fare estimation, and driver matching screens. Tested with 15 users across 3 rounds." },
      { step: "03", title: "Design System", desc: "Created a modular component library with accessibility-first principles — large touch targets, high contrast, and support for both English and Pidgin." },
      { step: "04", title: "Real-Time Features", desc: "Designed the live tracking interface with ETA updates, driver contact options, and an SOS emergency button for rider safety." },
    ],
  },
  midImage: { src: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/vxqjx8agke7g9rdz0kl1.webp", alt: "Flex2Ride App Screens" },
  features: [
    { title: "Transparent Fare Estimation", desc: "Upfront pricing with a fare breakdown showing base fare, distance, surge, and tolls — eliminating surprise charges." },
    { title: "Smart Driver Matching", desc: "Algorithm-aware UI showing driver ratings, vehicle type, and estimated pickup time to help riders make informed choices." },
    { title: "Safety Suite", desc: "In-ride SOS button, trip sharing with trusted contacts, and driver verification badges for peace of mind." },
    { title: "Hybrid Payments", desc: "Seamless switching between cash, card, and mobile money with saved preferences and split-fare for group rides." },
  ],
  results: {
    intro: "The redesigned app was tested with a beta group of 200 riders and showed measurable improvements.",
    stats: [
      { stat: "35%", desc: "Faster booking completion vs. previous version" },
      { stat: "4.8/5", desc: "Rider satisfaction score in beta testing" },
      { stat: "28%", desc: "Increase in completed rides per session" },
    ],
  },
  reflection: [
    "Designing for the African market taught me to prioritize performance and simplicity over visual complexity. Every animation and asset had to justify its bandwidth cost.",
    "The most impactful decision was the hybrid payment system — respecting that cash is still king in many markets while gently nudging users toward digital payments.",
  ],
};

const CaseStudyFlex2Ride = () => <CaseStudyLayout data={data} />;
export default CaseStudyFlex2Ride;
