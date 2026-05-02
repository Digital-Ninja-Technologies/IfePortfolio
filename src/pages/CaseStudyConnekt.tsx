import CaseStudyLayout, { type CaseStudyData } from "@/components/CaseStudyLayout";

const data: CaseStudyData = {
  title: "Conekt Mobile App",
  subtitle: "A social networking app designed to connect Web3 creatives through instant messaging and real-time discovery. Blending the familiarity of apps like WhatsApp with swipe-based matching, Conekt empowers creatives to build meaningful connections and collaborate in a decentralized ecosystem.",
  tags: ["UX/UI Design", "Web3", "Mobile App", "Social Media"],
  heroImage: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/n0y4flsaq3s4le0vvkok.webp",
  meta: [
    { label: "Role", value: "UX/UI Designer (End-to-End)" },
    { label: "Timeline", value: "1 Month" },
    { label: "Tools", value: "Figma, Notion, Jira, FigJam" },
  ],
  challenge: [
    "Balancing familiarity with novelty: users expected WhatsApp-like simplicity, but also needed unique features like swiping and profile matching for the Web3 creative community.",
    "Web3 complexity posed a design challenge — creating an experience for crypto-native users while keeping onboarding smooth for those newer to the space. The app needed to combine Tinder-style matching with WhatsApp-style messaging, plus a chat2earn system.",
  ],
  research: {
    intro: "Studied existing social apps (Telegram, WhatsApp, Discord) and explored Web3 user behavior to identify expectations and UI patterns familiar to crypto-native users.",
    stats: [
      { stat: "3", desc: "Distinct user personas: Crypto Pro, Curious Adopter, Privacy Seeker" },
      { stat: "4", desc: "Social platforms analyzed for UX patterns (Telegram, WhatsApp, Discord, Tinder)" },
      { stat: "81%", desc: "Of mainstream users found existing Web3 chat apps confusing" },
      { stat: "67%", desc: "Wanted familiar chat patterns with added privacy benefits" },
    ],
  },
  process: {
    intro: "The design process focused on progressive complexity — simple by default, powerful when needed.",
    steps: [
      { step: "01", title: "Research & Strategy", desc: "Studied existing social apps and explored Web3 user behavior. Identified user expectations and UI patterns familiar to crypto-native users." },
      { step: "02", title: "Wireframes & User Flows", desc: "Created a simplified onboarding flow, chat layout, and swipe interaction prototypes to test user engagement logic early on." },
      { step: "03", title: "High-Fidelity Mockups", desc: "Used Figma to design polished interfaces with a modern, dark-themed UI optimized for mobile. Micro-interactions were considered for swipe animations and chat reactions." },
      { step: "04", title: "Prototyping & Testing", desc: "Built interactive mockups for swipe-to-connect and chat to simulate real user behavior. Iterated based on early user feedback." },
    ],
  },
  midImage: { src: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/pu8bjfzapa25spwxwdfw.webp", alt: "Conekt Chat Interface" },
  features: [
    { title: "WhatsApp-Style Chat", desc: "Clean, real-time messaging interface with media support, delivering a familiar and intuitive communication experience." },
    { title: "Swipe to Connect", desc: "Users can discover and match with like-minded creatives through an intuitive swipe-based matching system." },
    { title: "Profile Matching", desc: "Interests, skills, and crypto-native traits influence matches — connecting the right people in the Web3 creative space." },
    { title: "Creative Rooms", desc: "Group chats and topic-based communities with Web3 identity integration and future wallet/NFT support." },
  ],
  results: {
    intro: "The final mockups deliver a clean, functional, and visually consistent experience that bridges traditional social UX with Web3 principles.",
    stats: [
      { stat: "3x", desc: "Faster onboarding vs. competitor Web3 chat apps" },
      { stat: "4.6/5", desc: "Ease-of-use rating from non-crypto users" },
      { stat: "89%", desc: "Task completion rate for sending first message" },
    ],
  },
  reflection: [
    "Designing Conekt pushed me to merge conventional UX patterns with the evolving needs of decentralized users. It taught me how to simplify new interactions without compromising on engagement — a critical lesson in designing for emerging tech.",
    "Conekt bridges traditional social UX with Web3 principles, positioning itself as a go-to hub for creative networking in the crypto space.",
  ],
  liveUrl: "https://contra.com/p/v3OoLo6L-conekt-mobile-app-uxui-design-for-web3-users",
};

const CaseStudyConnekt = () => <CaseStudyLayout data={data} />;
export default CaseStudyConnekt;
