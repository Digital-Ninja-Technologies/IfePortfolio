import CaseStudyLayout, { type CaseStudyData } from "@/components/CaseStudyLayout";

const data: CaseStudyData = {
  title: "Gigatalik Meme-Token Landing Page",
  subtitle: "Designing a conversion-focused landing page for a utilities-backed memecoin project that combines humor with dynamic utilities, engaging the crypto community during bullish market trends.",
  tags: ["Product Design", "Crypto", "Landing Page", "Web3"],
  heroImage: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/svixixid69saxzf3o7xl.webp",
  meta: [
    { label: "Role", value: "Product Designer" },
    { label: "Timeline", value: "2 Weeks" },
    { label: "Tools", value: "Figma, Adobe Photoshop" },
  ],
  challenge: [
    "Gigatalik needed a landing page that captures the playful, bold aesthetic of meme culture while maintaining credibility and transparency for potential investors.",
    "The challenge was to stand out in a crowded memecoin landscape while clearly presenting token information, community links, and purchasing options.",
  ],
  research: {
    intro: "Analyzed the memecoin landscape and successful token landing pages to identify patterns that drive engagement and trust.",
    stats: [
      { stat: "$GITALIK", desc: "Token ticker prominently displayed for transparency" },
      { stat: "3", desc: "Key content areas: Branding, Tokenomics, Community" },
      { stat: "100%", desc: "Responsive across all devices" },
      { stat: "1", desc: "Live website: gigatalik.com" },
    ],
  },
  process: {
    intro: "The design leveraged a playful and bold aesthetic while maintaining clear information architecture.",
    steps: [
      { step: "01", title: "Branding & Visual Identity", desc: "Playful mascot, vibrant colors, and dynamic typography to capture attention and convey the project's energetic spirit." },
      { step: "02", title: "Content & Messaging", desc: "Clear tagline, token information, and tokenomics presented transparently for potential investors." },
      { step: "03", title: "UX & Navigation", desc: "Straightforward layout with intuitive navigation, focusing user attention on key information and CTAs." },
      { step: "04", title: "Community Integration", desc: "Links to Telegram, Twitter, and blockchain explorers to foster engagement and verify token information." },
    ],
  },
  features: [
    { title: "Bold Mascot Design", desc: "Playful branding that aligns with meme culture while maintaining project credibility." },
    { title: "Transparent Tokenomics", desc: "Clear presentation of token distribution and utility information." },
    { title: "Easy Purchase Flow", desc: "Interactive elements for easy access to contract address and purchasing options." },
    { title: "Social Integration", desc: "Direct links to community channels for engagement and viral growth." },
  ],
  results: {
    intro: "The landing page effectively captures the essence of a memecoin project through distinctive branding and user-friendly design.",
    stats: [
      { stat: "Live", desc: "Website deployed at gigatalik.com" },
      { stat: "High", desc: "Community engagement through social channels" },
      { stat: "Top", desc: "Originality rating vs competitor memecoin sites" },
    ],
  },
  reflection: [
    "Gigatalik demonstrated that even in the playful memecoin space, clear information architecture and user-friendly design drive engagement and trust.",
    "By focusing on originality and community engagement, Gigatalik positions itself as a noteworthy player in the memecoin landscape.",
  ],
};

const CaseStudyGigatalik = () => <CaseStudyLayout data={data} />;
export default CaseStudyGigatalik;
