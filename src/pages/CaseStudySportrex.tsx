import CaseStudyLayout, { type CaseStudyData } from "@/components/CaseStudyLayout";

const data: CaseStudyData = {
  title: "Sportrex GameFi Platform",
  subtitle: "A decentralized GameFi super platform that merges play-to-earn gaming, social networking, NFTs, and metaverse experiences into one platform. Designed to make Web3 accessible to gamers, influencers, and creators regardless of blockchain experience.",
  tags: ["UX/UI Design", "GameFi", "Web3", "2022"],
  heroImage: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/tgfiqelngq5qjljf4kxp.webp",
  meta: [
    { label: "Role", value: "UX/UI Designer / Design Lead" },
    { label: "Duration", value: "20 weeks (2022)" },
    { label: "Tools", value: "Figma, Jitter, LottieFiles" },
  ],
  challenge: [
    "Blockchain apps are often complex and intimidating for first-time users. Sportrex required a multi-chain experience (ETH, BNB, ARB, USDT) with wallet connections like MetaMask, Sportrex Gamers Wallet, and Trust Wallet.",
    "Users needed clarity and trust in a space where scams are common. The app had to balance gaming excitement with financial credibility, ensuring it felt both fun and secure.",
    "The platform needed to support multiple game modes, NFT marketplaces, tournament brackets, and wallet management — all without feeling overwhelming or 'too crypto' for mainstream adoption.",
  ],
  research: {
    intro: "I interviewed early adopters — gamers, crypto traders, and creators — and defined key personas: The Gamer, The Creator, and The Newcomer to Web3.",
    stats: [
      { stat: "40+", desc: "Gamers and crypto enthusiasts surveyed across Discord communities" },
      { stat: "7", desc: "GameFi platforms analyzed for onboarding and engagement patterns" },
      { stat: "76%", desc: "Of gamers were interested in play-to-earn but found it too complex" },
      { stat: "54%", desc: "Dropped off during wallet setup on competitor platforms" },
    ],
  },
  process: {
    intro: "The design philosophy was 'game first, crypto second' — leading with the fun and revealing blockchain features progressively.",
    steps: [
      { step: "01", title: "User Research", desc: "Interviewed early adopters and identified pain points: confusing wallet setup, unclear token utility, and overwhelming interfaces in other GameFi apps." },
      { step: "02", title: "Information Architecture", desc: "Designed a clear navigation system: Play | Earn | NFTs | Social | Wallet. Separated core actions from secondary actions and mapped onboarding flows for both desktop and mobile." },
      { step: "03", title: "Wireframing & Prototyping", desc: "Created low-fidelity flows to simplify token purchase to just 3 steps: Connect Wallet → Enter Amount → Confirm. Built prototypes mobile-first for Africa & Asia target regions." },
      { step: "04", title: "UI Design & Testing", desc: "Bold, futuristic, gaming-inspired palette balanced with trust signals. Replaced technical jargon with familiar language (e.g., 'Top up' instead of 'Deposit tokens'). Conducted remote tests with 10 participants." },
    ],
  },
  midImage: { src: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/eh5tmvdiksv751xxa3dd.webp", alt: "Sportrex Platform Screens" },
  features: [
    { title: "Streamlined Onboarding", desc: "Onboarding wizard guiding users through wallet setup and first token purchase, reducing steps from 7 clicks to 3." },
    { title: "Intuitive Dashboards", desc: "Clear dashboards showing balance, NFTs, and rewards at a glance with transparent fee displays and real-time progress indicators." },
    { title: "NFT Marketplace", desc: "Visual-first marketplace for gaming NFTs with filters by game, rarity, and utility — making digital collectibles feel tangible and desirable." },
    { title: "Community-First Design", desc: "Integrated social feed for gamers and creators with gamified elements: progress trackers, achievement badges, and glowing CTA buttons." },
  ],
  results: {
    intro: "The platform launched in beta with strong early traction in the Web3 gaming community.",
    stats: [
      { stat: "40%", desc: "Increase in wallet connection success rate" },
      { stat: "7→3", desc: "Onboarding steps reduced from 7 clicks to 3" },
      { stat: "10K+", desc: "Beta users in the first month of launch" },
    ],
  },
  reflection: [
    "This project showed me the importance of bridging Web2 familiarity with Web3 complexity. My design focus was on making crypto invisible, so users could just play, connect, and earn without worrying about what happens under the hood.",
    "Users who came for the games naturally explored the blockchain features once they saw the value — forced crypto onboarding would have killed adoption. A scalable UI system was designed to support future features like betting, tournaments, and metaverse events.",
  ],
};

const CaseStudySportrex = () => <CaseStudyLayout data={data} />;
export default CaseStudySportrex;
