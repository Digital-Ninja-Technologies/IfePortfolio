import CaseStudyLayout, { type CaseStudyData } from "@/components/CaseStudyLayout";

const data: CaseStudyData = {
  title: "Sportrex",
  subtitle: "Leading product design for a Web3 gaming and sports entertainment platform, crafting immersive interfaces for decentralized gaming experiences and NFT-based sports collectibles.",
  tags: ["Product Design", "GameFi", "Web3", "2022"],
  heroImage: "https://onifade-ifeoluwa.vercel.app/assets/proj-5-BLeEwTqv.png",
  meta: [
    { label: "Role", value: "Design Lead" },
    { label: "Duration", value: "20 weeks (2022)" },
    { label: "Tools", value: "Figma, Discord, Jira" },
  ],
  challenge: [
    "Sportrex aimed to merge competitive gaming with blockchain technology — letting players earn real rewards through gameplay. The challenge was making GameFi accessible to traditional gamers who are skeptical of crypto, while satisfying the expectations of the Web3-native community.",
    "The platform needed to support multiple game modes, NFT marketplaces, tournament brackets, and wallet management — all without feeling overwhelming or 'too crypto' for mainstream adoption.",
  ],
  research: {
    intro: "I immersed myself in gaming communities and Web3 Discord servers to understand what both audiences truly valued.",
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
      { step: "01", title: "Game-First Architecture", desc: "Structured the platform around game discovery and play, with blockchain features (wallets, NFTs, tokens) as enhancements rather than prerequisites." },
      { step: "02", title: "Tournament System", desc: "Designed bracket-based tournament flows with real-time scoring, leaderboards, and reward distribution that works for both casual and competitive players." },
      { step: "03", title: "NFT Marketplace", desc: "Created a visual-first marketplace for gaming NFTs with filters by game, rarity, and utility — making digital collectibles feel tangible and desirable." },
      { step: "04", title: "Reward Dashboard", desc: "Built an earnings dashboard that clearly shows token rewards, NFT holdings, and withdrawal options without requiring deep crypto knowledge." },
    ],
  },
  midImage: { src: "https://onifade-ifeoluwa.vercel.app/assets/proj-5-BLeEwTqv.png", alt: "Sportrex Platform Screens" },
  features: [
    { title: "Play-to-Earn Hub", desc: "Central game lobby showing available matches, potential rewards, and entry requirements with one-click join for supported games." },
    { title: "Tournament Brackets", desc: "Interactive bracket visualization with real-time updates, match scheduling, and automated prize pool distribution." },
    { title: "NFT Collectibles", desc: "In-game achievement NFTs that unlock cosmetics, tournament access, and governance voting power within the platform." },
    { title: "Social Leaderboards", desc: "Global and friend-based rankings with achievement badges, win streaks, and shareable stats cards for social media." },
  ],
  results: {
    intro: "The platform launched in beta with strong early traction in the Web3 gaming community.",
    stats: [
      { stat: "10K+", desc: "Beta users in the first month of launch" },
      { stat: "4.5/5", desc: "Community satisfaction score from Discord feedback" },
      { stat: "68%", desc: "Day-7 retention rate among active players" },
    ],
  },
  reflection: [
    "The 'game first, crypto second' approach proved essential. Players who came for the games naturally explored the blockchain features once they saw the value — forced crypto onboarding would have killed adoption.",
    "One area I'd explore further is cross-game identity — letting players carry their reputation, achievements, and assets across different games on the platform.",
  ],
};

const CaseStudySportrex = () => <CaseStudyLayout data={data} />;
export default CaseStudySportrex;
