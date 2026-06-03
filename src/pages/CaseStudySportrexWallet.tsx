import CaseStudyLayout, { type CaseStudyData } from "@/components/CaseStudyLayout";

const data: CaseStudyData = {
  title: "Sportrex Gamers Wallet",
  subtitle: "A specialized crypto wallet landing page designed for gamers and esports enthusiasts. Features gaming rewards integration, NFT management, and seamless DeFi access tailored for the gaming ecosystem.",
  tags: ["Product Design", "Web3 & Crypto", "Landing Page", "2025"],
  heroImage: "/assets/sportrex-gamers-wallet/Instagram_post_-_1.png",
  meta: [
    { label: "Role", value: "Product & Landing Page Designer" },
    { label: "Timeline", value: "4 Weeks" },
    { label: "Tools", value: "Figma, Webflow" },
  ],
  challenge: [
    "Crypto wallets are complex and intimidating for mainstream users, especially gamers unfamiliar with blockchain terminology. The challenge was simplifying DeFi concepts without sacrificing functionality or security messaging.",
    "Gamers expect sleek, modern interfaces with gaming-like aesthetics. We needed to bridge the gap between Web3 complexity and gaming culture expectations while building trust through transparent security features.",
  ],
  research: {
    intro: "Conducted user interviews with esports players, casual gamers, and crypto enthusiasts. Key insight: 'I want to earn from games, not learn crypto.' Success meant making earning effortless.",
    stats: [
      { stat: "2K+", desc: "Survey respondents from gaming communities" },
      { stat: "8", desc: "Core features: Wallets, Gaming Rewards, NFT Gallery, Token Swap, Stats, Security, Settings, Backup" },
      { stat: "4", desc: "User personas: Casual Gamer, Serious Gamer, Esports Pro, Crypto Enthusiast" },
      { stat: "150K+", desc: "Target launch users from gaming networks" },
    ],
  },
  process: {
    intro: "Designed both the landing page and mobile wallet interface to showcase features while maintaining brand credibility in the Web3 space.",
    steps: [
      { step: "01", title: "User Research & Personas", desc: "Mapped gaming behaviors, crypto knowledge levels, and pain points across target audiences. Identified key motivations: earning, collecting NFTs, and transparent security." },
      { step: "02", title: "Information Architecture", desc: "Simplified wallet navigation: Gaming Rewards → NFT Gallery → Token Management → DeFi. Reduced cognitive load by hiding advanced features behind progressive disclosure." },
      { step: "03", title: "Visual Design & Branding", desc: "Created a modern, gaming-inspired aesthetic with vibrant blues, gradient overlays, and gaming UI patterns. Built trust with visible security indicators and transaction clarity." },
      { step: "04", title: "Landing Page & Prototypes", desc: "Designed high-converting landing page with feature showcase, reward explanations, and clear CTAs. Tested messaging with gaming communities for resonance and clarity." },
    ],
  },
  midImage: { src: "/assets/sportrex-gamers-wallet/Instagram_post_-_2.png", alt: "Sportrex Wallet Interface Design System" },
  features: [
    { title: "Gaming Rewards Dashboard", desc: "Earn tokens while playing. Transparent reward tracking from connected games with real-time balance updates." },
    { title: "NFT Gallery & Trading", desc: "Beautifully displayed in-game NFTs with trading capabilities. View collections, manage inventory, and trade directly in wallet." },
    { title: "Multi-Token Support", desc: "Manage Bitcoin, Ethereum, gaming tokens, and stablecoins in one interface. Easy token swaps with clear fee transparency." },
    { title: "DeFi Features Made Simple", desc: "Staking, yield farming, and liquidity pools explained in gaming terms. Progressive disclosure hides complexity for casual users." },
    { title: "Mobile-First Security", desc: "Biometric auth, backup encryption, and transaction confirmations with clear security status indicators." },
    { title: "Community Features", desc: "Leaderboards, achievement badges, and social elements that gamers expect. Built-in community hub for game guilds." },
  ],
  results: {
    intro: "The Sportrex Gamers Wallet landing page successfully converted esports communities. The wallet design has been adopted for MVP development with strong gamer feedback.",
    stats: [
      { stat: "85%", desc: "Feature comprehension (vs 40% industry avg for crypto wallets)" },
      { stat: "12K+", desc: "Pre-launch waitlist sign-ups from gaming communities" },
      { stat: "4.8/5", desc: "Design feedback score from gamer focus groups" },
      { stat: "MVP", desc: "Now in development with Unreal Engine gaming integration" },
    ],
  },
  reflection: [
    "Designing Sportrex Gamers Wallet taught me that Web3 adoption isn't about showing complexity—it's about hiding it beautifully. Gamers didn't need more features; they needed confidence that their money was safe while earning felt frictionless.",
    "The key insight: Gaming culture and crypto culture have different communication styles. Bringing them together required respecting both—gaming's speed and visual appeal with crypto's security-first mindset. The result: a wallet that feels native to both worlds.",
  ],
  gallery: [
    {
      title: "Onboarding & Feature Showcase",
      description: "9-screen onboarding flow introducing core features: wallet creation, gaming rewards setup, NFT gallery preview, and security setup. Clean progression with gaming-inspired illustrations.",
      image: "/assets/sportrex-gamers-wallet/Instagram_post_-_1.png",
    },
    {
      title: "Wallet Interface & Transaction Flows",
      description: "Dashboard showing gaming rewards, token balances, and NFT inventory. Transaction screens with clear fee breakdowns and confirmation UX designed for confidence and speed.",
      image: "/assets/sportrex-gamers-wallet/Instagram_post_-_3.png",
    },
    {
      title: "Home Screen & Portfolio Management",
      description: "Modern portfolio dashboard with live price charts, multi-asset overview, and quick-action buttons. Asset cards with gaming-style gradient overlays and real-time value tracking.",
      image: "/assets/sportrex-gamers-wallet/Instagram_post_-_4.png",
    },
    {
      title: "DEX Trading & Token Swaps",
      description: "Decentralized exchange interface simplified for gamers. Color-coded trading pairs (green/red), market data visualization, and one-tap swaps with transparent fee structure.",
      image: "/assets/sportrex-gamers-wallet/Instagram_post_-_5.png",
    },
    {
      title: "Wallet Connection & Security",
      description: "Multi-wallet connection interface (Sportrex, OpenSea, Trust Wallet). Security features with 2FA, backup encryption, and biometric authentication prominently displayed.",
      image: "/assets/sportrex-gamers-wallet/Instagram_post_-_6.png",
    },
    {
      title: "Profile, Settings & Advanced Features",
      description: "User profile with gaming stats integration, wallet backup management, 2FA authenticators, price alerts, and push notification preferences. Enterprise-grade security with gaming UX.",
      image: "/assets/sportrex-gamers-wallet/Instagram_post_-_7.png",
    },
  ],
  contraUrl: "https://contra.com/p/PWBFMY3e-sportrex-gamers-wallet-landing-page?r=designninja",
};

const CaseStudySportrexWallet = () => <CaseStudyLayout data={data} />;
export default CaseStudySportrexWallet;
