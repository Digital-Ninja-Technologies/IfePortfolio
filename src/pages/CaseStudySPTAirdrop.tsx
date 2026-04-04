import CaseStudyLayout, { type CaseStudyData } from "@/components/CaseStudyLayout";

const data: CaseStudyData = {
  title: "SPT Airdrop Landing Page",
  subtitle: "Designing a bold, high-converting airdrop landing page that amplified excitement and drove action — making Web3 onboarding smooth for both degens and newcomers with zero friction.",
  tags: ["UI Design", "Web3", "Crypto", "Landing Page"],
  heroImage: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/nj7zwmpxokgqhd01gcju.webp",
  meta: [
    { label: "Role", value: "UI/UX Designer & Web Designer" },
    { label: "Client", value: "SPT" },
    { label: "Tools", value: "Figma, Jitter, Web3.js" },
  ],
  challenge: [
    "SPT needed to reward its early community with an airdrop, but the landing page had to both explain the drop and amplify excitement to drive action.",
    "The challenge was making Web3 onboarding smooth for both crypto-native degens and newcomers with zero friction in the claim process.",
  ],
  research: {
    intro: "Studied successful airdrop campaigns and identified patterns that drive high completion rates and community engagement.",
    stats: [
      { stat: "3", desc: "Step airdrop flow: Connect Wallet → Complete Tasks → Claim" },
      { stat: "12K+", desc: "Page visits in the first 5 days" },
      { stat: "70%+", desc: "Task completion rate achieved" },
      { stat: "3x", desc: "Community engagement boost across X and Telegram" },
    ],
  },
  process: {
    intro: "Designed and developed a responsive, branded airdrop page that felt like a crypto-native experience from top to bottom.",
    steps: [
      { step: "01", title: "Immersive Hero Section", desc: "Animated token graphic, bold typography, and a strong CTA above the fold to capture attention instantly." },
      { step: "02", title: "3-Step Airdrop Flow", desc: "Connect Wallet → Complete Tasks → Claim Tokens — paired with iconography and motion to aid quick understanding." },
      { step: "03", title: "Trust Building", desc: "Clean layout that felt secure and Web3-native, reducing mental load with simple language and icons." },
      { step: "04", title: "Mobile & Social Optimization", desc: "Smooth transitions and interactions across devices, optimized for social sharing and viral distribution." },
    ],
  },
  midImage: { src: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/flnzgyj7supobxppom3a.webp", alt: "SPT Airdrop Page" },
  features: [
    { title: "Animated Token Hero", desc: "Captivating animated token graphic with bold typography that immediately communicates the airdrop value." },
    { title: "3-Step Claim Flow", desc: "Simple, visual flow that guides users from wallet connection to token claiming with zero friction." },
    { title: "Always-Visible CTA", desc: "The call-to-action is never far from reach, even during scrolling, boosting conversions." },
    { title: "Social Sharing", desc: "Optimized for viral distribution across Twitter, Telegram, and other social platforms." },
  ],
  results: {
    intro: "The airdrop page delivered more than just clicks — it created community energy and significant pre-launch buzz.",
    stats: [
      { stat: "12K+", desc: "Visits in the first 5 days" },
      { stat: "70%+", desc: "Task completion rate" },
      { stat: "3x", desc: "Community engagement across X and Telegram" },
    ],
  },
  reflection: [
    "In crypto, first impressions matter — especially for new tokens. This project showed how the right landing page design can turn an airdrop into a launch moment that people actually remember and share.",
    "The key was making the experience feel both exciting and trustworthy — building visual trust while maintaining the energy of a major community event.",
  ],
};

const CaseStudySPTAirdrop = () => <CaseStudyLayout data={data} />;
export default CaseStudySPTAirdrop;
