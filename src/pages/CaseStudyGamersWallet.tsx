import CaseStudyLayout, { type CaseStudyData } from "@/components/CaseStudyLayout";

const data: CaseStudyData = {
  title: "Sportrex Gamers Wallet",
  subtitle: "Designing a conversion-focused landing page for GamersWallet — a cutting-edge platform that allows gamers to convert in-game achievements and virtual currency into real-world value.",
  tags: ["Product Design", "Web3", "Gaming", "Landing Page"],
  heroImage: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/lnmhareyqtfkgh3xmupp.webp",
  meta: [
    { label: "Role", value: "Lead Product Designer" },
    { label: "Timeline", value: "2 Weeks" },
    { label: "Tools", value: "Figma, FigJam, Photoshop, Jitter" },
  ],
  challenge: [
    "GamersWallet needed a landing page that communicates its value proposition to potential users and investors while maintaining a gamer-friendly and futuristic aesthetic.",
    "The design had to visually communicate the core value, encourage signups from gamers, creators, and early adopters, and set the stage for investor interest.",
  ],
  research: {
    intro: "Conducted competitive analysis of Web3 gaming and wallet platforms, with user persona mapping for Pro Gamers, Web3 Enthusiasts, and Gaming Content Creators.",
    stats: [
      { stat: "3", desc: "User personas: Pro Gamers, Web3 Enthusiasts, Creators" },
      { stat: "5", desc: "Content sections: Hero, Features, How It Works, CTA, Partners" },
      { stat: "Dark", desc: "Mode UI with vibrant neon accents for gaming aesthetic" },
      { stat: "1", desc: "Live site: gamerswallet-landingpage.netlify.app" },
    ],
  },
  process: {
    intro: "Created a hero-first messaging system that instantly communicates 'Turn Your Game Time into Real-World Value.'",
    steps: [
      { step: "01", title: "Hero-First Messaging", desc: "Bold headline with subtext and CTA that immediately communicates the value of converting game time to real value." },
      { step: "02", title: "Feature Highlights", desc: "Gamified iconography showcasing the platform's key capabilities in an engaging, visual format." },
      { step: "03", title: "Visual Storytelling", desc: "How-it-works section with visual narrative explaining the gamification-to-value pipeline." },
      { step: "04", title: "Futuristic Aesthetic", desc: "Dark mode UI with vibrant neon accents, gradient overlays, and bold game-inspired typography." },
    ],
  },
  midImage: { src: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/dbn1sr5ueq1j0bd22o9m.webp", alt: "GamersWallet Landing Page" },
  features: [
    { title: "Value Conversion System", desc: "Convert in-game achievements and virtual currency into real-world value." },
    { title: "Gamer Dashboard", desc: "Track, manage, and grow gaming earnings from a centralized interface." },
    { title: "Early Access Signup", desc: "Prominent CTA driving signups with clear value proposition for early adopters." },
    { title: "Responsive Design", desc: "Tailored layout for both desktop and mobile with game-inspired aesthetics." },
  ],
  results: {
    intro: "The design effectively communicates the platform's vision and positions GamersWallet for meaningful user adoption.",
    stats: [
      { stat: "Clean", desc: "Intuitive design that communicates the vision" },
      { stat: "High", desc: "Early access signup conversion rate" },
      { stat: "Strong", desc: "Investor interest generated through the platform" },
    ],
  },
  reflection: [
    "Designing the GamersWallet landing page was a strategic balance between gaming culture and financial utility.",
    "The result is a sleek, conversion-focused platform that positions the product for meaningful user adoption and growth in the Web3 gaming economy.",
  ],
};

const CaseStudyGamersWallet = () => <CaseStudyLayout data={data} />;
export default CaseStudyGamersWallet;
