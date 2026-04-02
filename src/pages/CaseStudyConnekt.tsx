import CaseStudyLayout, { type CaseStudyData } from "@/components/CaseStudyLayout";

const data: CaseStudyData = {
  title: "Connekt Mobile App",
  subtitle: "Product design for a Web3 chat application connecting users through decentralized messaging with a modern, intuitive interface that bridges the gap between crypto-native and mainstream users.",
  tags: ["Product Design", "Web3", "Chat App", "2024"],
  heroImage: "https://onifade-ifeoluwa.vercel.app/assets/proj-7-7q-eLtoI.png",
  meta: [
    { label: "Role", value: "Product Designer" },
    { label: "Duration", value: "10 weeks (Q3 2024)" },
    { label: "Tools", value: "Figma, Useberry, Notion" },
  ],
  challenge: [
    "Web3 messaging apps suffer from poor usability — complex wallet connections, confusing key management, and interfaces that feel alien to mainstream users. Connekt needed to make decentralized communication as effortless as WhatsApp while preserving the privacy and ownership benefits of Web3.",
    "The core tension was balancing technical transparency (wallet addresses, encryption status, on-chain transactions) with a clean, approachable chat experience.",
  ],
  research: {
    intro: "I interviewed both crypto-native users and Web3 newcomers to understand the spectrum of expectations and pain points.",
    stats: [
      { stat: "18", desc: "User interviews across crypto-native and mainstream segments" },
      { stat: "4", desc: "Web3 messaging competitors analyzed for UX patterns" },
      { stat: "81%", desc: "Of mainstream users found existing Web3 chat apps confusing" },
      { stat: "67%", desc: "Wanted familiar chat patterns with added privacy benefits" },
    ],
  },
  process: {
    intro: "The design process focused on progressive complexity — simple by default, powerful when needed.",
    steps: [
      { step: "01", title: "User Personas", desc: "Created 3 distinct personas: Crypto Pro, Curious Adopter, and Privacy Seeker — each with different onboarding and feature discovery needs." },
      { step: "02", title: "Onboarding Flow", desc: "Designed a wallet-optional onboarding that lets users start chatting immediately and connect a wallet later, reducing the barrier to entry." },
      { step: "03", title: "Chat Interface", desc: "Built a familiar messaging UI with subtle Web3 elements — encryption indicators, token transfers inline, and NFT profile pictures." },
      { step: "04", title: "Crypto Features", desc: "Designed in-chat token sending, NFT sharing, and group DAO voting as natural extensions of the conversation flow." },
    ],
  },
  midImage: { src: "https://onifade-ifeoluwa.vercel.app/assets/proj-7-7q-eLtoI.png", alt: "Connekt Chat Interface" },
  features: [
    { title: "Wallet-Optional Onboarding", desc: "Start chatting with just an email or phone number. Connect a wallet anytime to unlock Web3 features without disrupting the experience." },
    { title: "In-Chat Transactions", desc: "Send tokens and NFTs directly in conversation threads with confirmation previews and transaction status tracking." },
    { title: "End-to-End Encryption", desc: "Visual encryption indicators that build trust without overwhelming users — a simple lock icon with expandable technical details." },
    { title: "Community Spaces", desc: "Token-gated group chats with built-in governance tools for DAOs, including proposal creation and on-chain voting." },
  ],
  results: {
    intro: "Usability testing with 20 participants showed the design successfully bridged the Web3 usability gap.",
    stats: [
      { stat: "3x", desc: "Faster onboarding vs. competitor Web3 chat apps" },
      { stat: "4.6/5", desc: "Ease-of-use rating from non-crypto users" },
      { stat: "89%", desc: "Task completion rate for sending first message" },
    ],
  },
  reflection: [
    "The biggest lesson was that Web3 features should enhance — not replace — familiar patterns. Users don't want a 'Web3 app'; they want a great app that happens to use Web3 technology.",
    "I'd love to revisit the group governance features with more user testing. The balance between simplicity and the inherent complexity of on-chain voting is an ongoing design challenge.",
  ],
};

const CaseStudyConnekt = () => <CaseStudyLayout data={data} />;
export default CaseStudyConnekt;
