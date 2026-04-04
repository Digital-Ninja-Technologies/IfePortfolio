import CaseStudyLayout, { type CaseStudyData } from "@/components/CaseStudyLayout";

const data: CaseStudyData = {
  title: "BlowX Cryptocurrency Platform",
  subtitle: "Developing a user-centric digital experience that communicates BlowX's mission to tokenize real-world assets and offer decentralized utilities across Web3, AI, and Metaverse ecosystems.",
  tags: ["Product Design", "Web3", "Crypto", "Landing Page"],
  heroImage: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/wyp4lmhpjm2jz8yobfz5.webp",
  meta: [
    { label: "Role", value: "UX/UI Designer" },
    { label: "Platform", value: "Web3, Multichain, AI, Metaverse" },
    { label: "Tools", value: "Figma, FigJam, Photoshop" },
  ],
  challenge: [
    "BlowX needed to communicate a complex Web3 ecosystem — spanning payments, luxury experiences, and AI integration — in a way that's accessible and compelling to both crypto-native and mainstream users.",
    "The design had to build investor confidence through transparent tokenomics while maintaining an engaging, modern aesthetic across the entire platform.",
  ],
  research: {
    intro: "Studied Web3 platform design patterns and identified key user needs around trust, clarity, and ecosystem understanding.",
    stats: [
      { stat: "10B", desc: "BLOW tokens with transparent distribution breakdown" },
      { stat: "6+", desc: "Ecosystem components visualized (BlowPay, BlowAI, etc.)" },
      { stat: "3", desc: "Core design pillars: Architecture, Visual Identity, Interaction" },
      { stat: "1", desc: "Live waitlist: blowx-waitlist.vercel.app" },
    ],
  },
  process: {
    intro: "The design focused on segmented content architecture, problem-solution framing, and transparent tokenomics presentation.",
    steps: [
      { step: "01", title: "Information Architecture", desc: "Segmented homepage guiding users through BlowX's mission, ecosystem, and solutions with clear navigation." },
      { step: "02", title: "Problem-Solution Framework", desc: "Presented Web3 challenges paired with corresponding BlowX ecosystem solutions like BlowPay, Blow Island, and BlowAI." },
      { step: "03", title: "Visual Identity", desc: "Modern, vibrant color scheme with clean typography and graphics symbolizing the fusion of technology and real-world applications." },
      { step: "04", title: "Interactive Elements", desc: "Prominent CTAs for 'Join Airdrop' and 'Private Sale' with responsive design across all devices." },
    ],
  },
  midImage: { src: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/dglxqoktmrwx5lc4yyu9.webp", alt: "BlowX Platform" },
  features: [
    { title: "Ecosystem Visualization", desc: "Visual representations of BlowX components help users quickly grasp the platform's multifaceted offerings." },
    { title: "Tokenomics Transparency", desc: "Dedicated section detailing 10B token distribution for team, ecosystem, sales, airdrops, and marketing." },
    { title: "Community Engagement", desc: "Accessible links to Twitter, Telegram, and Instagram for community building." },
    { title: "Investor-Friendly Design", desc: "Clear information architecture that builds confidence and encourages participation." },
  ],
  results: {
    intro: "The design transformed a complex Web3 concept into an accessible, engaging, and investor-friendly platform.",
    stats: [
      { stat: "↑45%", desc: "Increase in user engagement and time on site" },
      { stat: "High", desc: "Investor confidence from transparent tokenomics" },
      { stat: "Growing", desc: "Community across social platforms" },
    ],
  },
  reflection: [
    "BlowX exemplifies how effective UX/UI design can transform a complex Web3 concept into an accessible, engaging, and investor-friendly platform.",
    "Platforms that prioritize clarity, trust, and user experience will stand out — not just for their technology but for how intuitively they connect with their audience.",
  ],
};

const CaseStudyBlowX = () => <CaseStudyLayout data={data} />;
export default CaseStudyBlowX;
