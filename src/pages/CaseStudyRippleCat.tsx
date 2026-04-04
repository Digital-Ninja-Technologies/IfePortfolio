import CaseStudyLayout, { type CaseStudyData } from "@/components/CaseStudyLayout";

const data: CaseStudyData = {
  title: "RippleCat Web3 Telegram Game",
  subtitle: "Designing the marketing website for a Web3 tap-to-earn Telegram mini-game where users tap to earn $RIP tokens. The website serves as the central marketing hub and user portal.",
  tags: ["Website Design", "Web3", "Gaming", "Telegram"],
  heroImage: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/k5lvx4oxkmkr7lpdlpfe.webp",
  meta: [
    { label: "Role", value: "UX/UI Design, Copywriting, Visual Direction" },
    { label: "Timeline", value: "2 Weeks" },
    { label: "Tools", value: "Figma, Midjourney, LottieFiles" },
  ],
  challenge: [
    "While the game lives on Telegram, the website needed to serve as the central marketing hub — driving traffic, explaining game mechanics, showing token utility, and onboarding users seamlessly.",
    "The design had to appeal to diverse audiences: Telegram users, crypto-curious newcomers, airdrop hunters, and gaming communities.",
  ],
  research: {
    intro: "Identified four target audience segments and mapped their motivations for engaging with a tap-to-earn game.",
    stats: [
      { stat: "4", desc: "Target audiences: Telegram users, crypto-curious, earners, gamers" },
      { stat: "5", desc: "Website goals: Educate, Build credibility, Onboard, Tokenomics, Community" },
      { stat: "Mobile", desc: "First responsive design with desktop optimization" },
      { stat: "2", desc: "Weeks from concept to delivery" },
    ],
  },
  process: {
    intro: "The design focused on visual storytelling through the Ripplecat character and seamless Telegram onboarding.",
    steps: [
      { step: "01", title: "Character-Driven Storytelling", desc: "Visual storytelling via the Ripplecat character increased engagement more than plain text." },
      { step: "02", title: "Telegram Onboarding", desc: "Users need handholding into Telegram — designed clear onboarding paths even for familiar users." },
      { step: "03", title: "Clarity Over Hype", desc: "Users prefer knowing what they're signing up for — prioritized clear explanations over marketing hype." },
      { step: "04", title: "Viral Architecture", desc: "Built social sharing support and referral-friendly design for KOL campaigns and influencer traffic." },
    ],
  },
  midImage: { src: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/olxbqirauu0xcxnradgy.webp", alt: "RippleCat Website" },
  features: [
    { title: "Game Mechanics Explainer", desc: "Clear visual breakdown of how the tap-to-earn system works with $RIP token utility." },
    { title: "Character Branding", desc: "Ripplecat mascot creates memorable, engaging visual identity across the site." },
    { title: "Seamless Telegram CTA", desc: "One-tap onboarding from website to Telegram game experience." },
    { title: "Tokenomics & Roadmap", desc: "Transparent display of token distribution, roadmap milestones, and benefits." },
  ],
  results: {
    intro: "The website became the game's most powerful conversion tool, turning curiosity into action.",
    stats: [
      { stat: "Top", desc: "Conversion tool for KOL campaigns and referrals" },
      { stat: "High", desc: "Engagement from character-driven visual storytelling" },
      { stat: "100%", desc: "Mobile-responsive for Telegram-native users" },
    ],
  },
  reflection: [
    "Visual storytelling via the Ripplecat character increased engagement more than plain text — character branding is essential in the Web3 gaming space.",
    "Clarity over hype: users prefer knowing what they're signing up for. The website now acts as a key growth engine for RippleCat.",
  ],
};

const CaseStudyRippleCat = () => <CaseStudyLayout data={data} />;
export default CaseStudyRippleCat;
