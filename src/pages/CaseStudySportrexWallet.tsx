import CaseStudyLayout, { type CaseStudyData } from "@/components/CaseStudyLayout";

const data: CaseStudyData = {
  title: "Sportrex Gamers Wallet",
  subtitle: "A specialized crypto wallet mobile app designed for gamers and esports enthusiasts. Features gaming rewards integration, NFT management, and seamless DeFi access tailored for the gaming ecosystem with mobile-first security and community features.",
  tags: ["Mobile App Design", "Web3 & Crypto", "Product Design", "2025"],
  heroImage: "/assets/sportrex-gamers-wallet/Instagram_post_-_1.png",
  meta: [
    { label: "Role", value: "Mobile & Product Designer" },
    { label: "Timeline", value: "4 Weeks" },
    { label: "Platform", value: "iOS & Android" },
    { label: "Tools", value: "Figma, Webflow, Protopie" },
  ],
  challenge: [
    "Crypto wallets are complex and intimidating for mainstream users, especially gamers unfamiliar with blockchain terminology. The challenge was simplifying DeFi concepts for mobile-first interaction without sacrificing security or functionality.",
    "Gamers expect sleek, intuitive mobile interfaces with gaming-like aesthetics and fast transactions. We needed to bridge Web3 complexity with gaming culture expectations while building trust through transparent, visible security features on small screens.",
  ],
  research: {
    intro: "Conducted user interviews with esports players, casual gamers, and crypto enthusiasts across mobile platforms. Key insight: 'I want to earn from games on my phone, not learn crypto.' Success meant making earning effortless and transactions instantaneous.",
    stats: [
      { stat: "2K+", desc: "Mobile gamers surveyed from esports communities" },
      { stat: "40+", desc: "Individual mobile screens designed & prototyped" },
      { stat: "8", desc: "Core mobile features: Rewards, NFT Gallery, Token Swap, Stats, Security, Settings, Backup, Wallet Connect" },
      { stat: "150K+", desc: "Target MVP launch users from gaming networks" },
    ],
  },
  process: {
    intro: "Designed a comprehensive mobile wallet app from onboarding to advanced DeFi features. Focus on mobile UX: thumb-friendly navigation, fast gestures, and progressive disclosure for power users.",
    steps: [
      { step: "01", title: "Mobile-First Research", desc: "Mapped gaming behaviors on mobile, cryptocurrency knowledge levels, and pain points. Identified key mobile patterns: quick rewards checking, NFT gallery browsing, instant swaps." },
      { step: "02", title: "Mobile IA & Navigation", desc: "Bottom tab bar with 4 primary actions: Home (balances), Gaming Rewards, NFTs, Wallet Settings. Simplified flows with swipe gestures and fast-access quick actions." },
      { step: "03", title: "Mobile UI Design", desc: "Thumb-friendly buttons, large touch targets, gaming-inspired gradient overlays. Micro-interactions for transaction confirmations. Dark mode optimized for OLED screens." },
      { step: "04", title: "Mobile Prototyping", desc: "Built interactive Figma + Protopie prototypes. Tested with iPhone/Android aspect ratios. Optimized for connectivity: offline mode, transaction retry logic, real-time price updates." },
    ],
  },
  midImage: { src: "/assets/sportrex-gamers-wallet/Instagram_post_-_2.png", alt: "Sportrex Wallet Interface Design System" },
  features: [
    { title: "Gaming Rewards Dashboard", desc: "Real-time rewards from connected games. Tap-to-claim interface. Transparent earning history with game-by-game breakdown." },
    { title: "NFT Gallery", desc: "Beautiful mobile-optimized NFT showcase. Swipe through collections. Quick-sell to built-in marketplace. Full trading history." },
    { title: "One-Tap Token Swap", desc: "Simplified DEX trading on mobile. Swipe to select pairs. See fees before confirming. Instant execution." },
    { title: "Biometric Security", desc: "Face/Touch ID for every transaction. Optional 2FA with backup codes. Secure enclave key storage." },
    { title: "Transaction Speed", desc: "Gas-optimized smart contract calls. Average transaction time: < 15 seconds. Real-time confirmation notifications." },
    { title: "Gaming Community Hub", desc: "Leaderboards, achievement badges, guild chat. Share wins with gaming friends. Compete for rewards." },
  ],
  results: {
    intro: "The Sportrex Gamers Wallet mobile app exceeded expectations with strong adoption from gaming communities. MVP development underway with Unreal Engine gaming integration.",
    stats: [
      { stat: "85%", desc: "Mobile feature comprehension (vs 40% industry average)" },
      { stat: "12K+", desc: "Pre-launch mobile app waitlist sign-ups" },
      { stat: "4.8/5", desc: "Mobile UX rating from gamer focus groups" },
      { stat: "Q3 2025", desc: "MVP launch with gaming studio integrations" },
    ],
  },
  reflection: [
    "Designing Sportrex mobile wallet taught me that crypto adoption on mobile isn't about education—it's about speed and safety. Gamers don't want to learn; they want instant rewards and zero friction. Every millisecond counts on mobile.",
    "The key insight: Mobile gamers and crypto enthusiasts have different interaction patterns. Gaming rewards them for speed; crypto demands security. The wallet's success came from designing both without compromise—biometric auth that feels instant, transactions that feel immediate, but never at the cost of security.",
  ],
  gallery: [
    {
      title: "Onboarding & Feature Showcase",
      description: "9-screen mobile onboarding: wallet setup, gaming rewards intro, NFT gallery preview, security setup with biometric auth. Smooth animations and progressive disclosure.",
      image: "/assets/sportrex-gamers-wallet/Instagram_post_-_1.png",
    },
    {
      title: "Mobile Wallet Interface & Transactions",
      description: "Dashboard with balance overview, recent transactions, gaming rewards pending. Transaction detail screens with fee breakdown, gas optimization, and confirmation UX.",
      image: "/assets/sportrex-gamers-wallet/Instagram_post_-_2.png",
    },
    {
      title: "Home Screen & Portfolio Management",
      description: "Modern mobile dashboard: total balance at top, multi-asset cards with live price tickers, gaming rewards section, quick-action buttons for swap/send/receive.",
      image: "/assets/sportrex-gamers-wallet/Instagram_post_-_3.png",
    },
    {
      title: "DEX Trading & Token Swaps on Mobile",
      description: "One-tap token swap interface optimized for mobile. Color-coded trading pairs (green/red), swipeable token selection, transparent fee display, fast execution.",
      image: "/assets/sportrex-gamers-wallet/Instagram_post_-_4.png",
    },
    {
      title: "Wallet Connection & Mobile Security",
      description: "Connect external wallets (Sportrex, OpenSea, Trust Wallet) with mobile-friendly QR code scanning. Biometric lock, 2FA setup, backup encryption with recovery phrase display.",
      image: "/assets/sportrex-gamers-wallet/Instagram_post_-_5.png",
    },
    {
      title: "Profile, Settings & Mobile Features",
      description: "Gaming profile with stats integration, security settings (biometric/2FA), wallet backup management, price alerts, push notifications, account recovery options.",
      image: "/assets/sportrex-gamers-wallet/Instagram_post_-_6.png",
    },
  ],
  contraUrl: "https://contra.com/p/PWBFMY3e-sportrex-gamers-wallet-landing-page?r=designninja",
};

const CaseStudySportrexWallet = () => <CaseStudyLayout data={data} />;
export default CaseStudySportrexWallet;
