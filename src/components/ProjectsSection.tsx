import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "TravelGuide Super App",
    category: "Travel · Mobile",
    description: "Designed a high-converting, mobile-first landing page for a travel super app combining destination guides, AI-powered itineraries, offline maps, and local experiences.",
    tags: ["Lead Product Designer", "2024", "Figma & Maze"],
    link: "/case-study/travelguide",
    image: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/h4zvmt5l9onj9ykytydl.webp",
  },
  {
    title: "Bible Verse Display App",
    category: "Church Tech · App",
    description: "A real-time Bible verse display tool for church services that listens to sermons and instantly projects referenced scriptures onto large screens.",
    tags: ["UX/UI Designer", "2025", "Figma & Claude"],
    link: "/case-study/bible-verse",
    image: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/clpaauz8nsmf7qnmt5k7.webp",
  },
  {
    title: "Eskro Mobile App",
    category: "E-Commerce · Marketplace",
    description: "Secure peer-to-peer marketplace combining identity verification, escrow payments, QR-verified meetups, and buyer protection to eliminate fraud.",
    tags: ["UX Designer", "2025", "Figma & Balsamiq"],
    link: "/case-study/eskro",
    image: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/bkn7him14iauu7jelqww.webp",
  },
  {
    title: "Flex2Ride Ride Hailing App",
    category: "Transport",
    description: "Nigerian premium affordable and luxurious ride-hailing and delivery platform with seamless booking flow and real-time tracking.",
    tags: ["Visual Designer", "2024", "Figma & Trello"],
    link: "/case-study/flex2ride",
    image: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/vxqjx8agke7g9rdz0kl1.webp",
  },
  {
    title: "Taptap Send Redesign",
    category: "FinTech · Website",
    description: "Redesigned the marketing website for a remittance platform to improve conversion, readability, and visual clarity for first-time visitors.",
    tags: ["UI/UX Designer", "2025", "Figma"],
    link: "/case-study/taptap-send",
    image: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/vg8vopw01zmin3e3gxn3.webp",
  },
  {
    title: "Sylostem SaaS Dashboard",
    category: "SaaS · Freelancer Tools",
    description: "All-in-one client management dashboard for freelancers and agencies to manage clients, track projects, monitor payments, and automate communication.",
    tags: ["UI/UX Designer", "2025", "Figma & Jitter"],
    link: "/case-study/sylostem",
    image: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/dpywflxflhjqj20dowgs.webp",
  },
  {
    title: "Conekt Mobile App",
    category: "Chat App · Web3",
    description: "Social networking app connecting Web3 creatives through instant messaging and real-time discovery, blending WhatsApp familiarity with swipe-based matching.",
    tags: ["UX/UI Designer", "2024", "Figma & Jira"],
    link: "/case-study/connekt",
    image: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/n0y4flsaq3s4le0vvkok.webp",
  },
  {
    title: "ConektApp Website Redesign",
    category: "Web3 · Website",
    description: "Full website redesign to modernize the interface, improve brand perception, and enhance user engagement for a Web3 social app.",
    tags: ["Mobile Designer", "2025", "Figma & Jitter"],
    link: "/case-study/conekt-website",
    image: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/xylr6xpol40h9y9vu0xl.webp",
  },
  {
    title: "Salsa & Sangria Website",
    category: "Tourism · Dance",
    description: "Vibrant, conversion-driven website for an immersive Latin dance and tourism experience in Spain, Portugal, and Latin America.",
    tags: ["UX/UI Designer", "2025", "Figma & WordPress"],
    link: "/case-study/salsa-sangria",
    image: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/rtupmqepblt0zi6xz87e.webp",
  },
  {
    title: "Yumdash",
    category: "E-commerce · Food App",
    description: "E-commerce platform for food vendors to create online food ordering websites with streamlined ordering, restaurant discovery, and delightful checkout.",
    tags: ["Product Designer", "2023", "Figma"],
    link: "/case-study/yumdash",
    image: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/fm5qnw8ogfsbzxkxkfpz.webp",
  },
  {
    title: "Gigatalik Meme-Token",
    category: "Crypto · Landing Page",
    description: "Conversion-focused landing page for a utilities-backed memecoin project combining humor with dynamic utilities in the crypto space.",
    tags: ["Product Designer", "2025", "Figma & Photoshop"],
    link: "/case-study/gigatalik",
    image: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/svixixid69saxzf3o7xl.webp",
  },
  {
    title: "BlowX Cryptocurrency",
    category: "Web3 · AI · Metaverse",
    description: "User-centric digital experience communicating BlowX's mission to tokenize real-world assets and offer decentralized utilities.",
    tags: ["UX/UI Designer", "2025", "Figma & Photoshop"],
    link: "/case-study/blowx",
    image: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/wyp4lmhpjm2jz8yobfz5.webp",
  },
  {
    title: "RippleCat Telegram Game",
    category: "Gaming · Web3",
    description: "Marketing website for a Web3 tap-to-earn Telegram mini-game. Central hub for driving traffic, explaining mechanics, and onboarding users.",
    tags: ["UX/UI Designer", "2025", "Figma & Midjourney"],
    link: "/case-study/ripplecat",
    image: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/k5lvx4oxkmkr7lpdlpfe.webp",
  },
  {
    title: "SPT Airdrop Page",
    category: "Crypto · Landing Page",
    description: "Bold, high-converting airdrop landing page that amplified excitement and drove action with zero-friction Web3 onboarding.",
    tags: ["UI/UX Designer", "2025", "Figma & Jitter"],
    link: "/case-study/spt-airdrop",
    image: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/nj7zwmpxokgqhd01gcju.webp",
  },
  {
    title: "Sportrex GameFi Platform",
    category: "GameFi · Web3",
    description: "Decentralized GameFi super platform merging play-to-earn gaming, social networking, NFTs, and metaverse experiences.",
    tags: ["Design Lead", "2022", "Figma & LottieFiles"],
    link: "/case-study/sportrex",
    image: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/tgfiqelngq5qjljf4kxp.webp",
  },
  {
    title: "Sportrex Gamers Wallet",
    category: "Web3 · Gaming",
    description: "Landing page for GamersWallet — converting in-game achievements and virtual currency into real-world value for gamers.",
    tags: ["Lead Product Designer", "2025", "Figma & Jitter"],
    link: "/case-study/gamers-wallet",
    image: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/lnmhareyqtfkgh3xmupp.webp",
  },
  {
    title: "RaySup Wrestling Website",
    category: "Sports · WordPress",
    description: "Figma to WordPress development for a US-based wrestling promotion. Pixel-perfect, responsive website delivered in 3 days.",
    tags: ["WordPress Developer", "2025", "Elementor & CSS"],
    link: "/case-study/raysup",
    image: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/wlv1impwu0lu8nxcivoe.webp",
  },
  {
    title: "VR Experience Landing Page",
    category: "AR/VR · Landing Page",
    description: "Visually captivating, emotionally immersive landing page exploring the intersection of human consciousness and machine intelligence.",
    tags: ["Motion Designer", "2025", "Figma & Jitter"],
    link: "/case-study/vr-experience",
    image: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/wuzwwyo8nrsvtmclcxc1.webp",
  },
  {
    title: "FarmLease MVP",
    category: "AgroTech · SaaS",
    description: "MVP design for a platform bridging farmland owners and agricultural investors with verified listings and digital agreements.",
    tags: ["Lead Product Designer", "2025", "Figma & Notion"],
    link: "/case-study/farmlease",
    image: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/vswsohdxhikbgmkfwnsm.webp",
  },
  {
    title: "BigJay Shortlet Apartment",
    category: "Real Estate · SaaS",
    description: "Digital platform for a modern shortlet brand — guest-facing booking website plus internal admin dashboard for apartment management.",
    tags: ["Product Designer", "2025", "Figma & Jitter"],
    link: "/case-study/bigjay",
    image: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/s6hh72mgbc3lrni3oc3x.webp",
  },
  {
    title: "QuickRead AI App",
    category: "AI · Mobile App",
    description: "AI-powered mobile app helping users read, summarize, and interact with PDFs effortlessly through smart summaries, Q&A, and audio playback.",
    tags: ["UX/UI & Brand Designer", "2025", "Figma"],
    link: "/case-study/quickread",
    image: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/p8yvu1xbona4e4ueeziw.webp",
  },
  {
    title: "SquadPay Waitlist Page",
    category: "FinTech · Landing Page",
    description: "Modern, conversion-optimized waitlist landing page for a group payments platform designed to validate interest pre-launch.",
    tags: ["Product Designer", "2023", "Figma & Jitter"],
    link: "/case-study/squadpay",
    image: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/k8hinldbtjdemvfytcmu.webp",
  },
  {
    title: "Korlodworks Website",
    category: "Agency · WordPress",
    description: "Complete homepage redesign and six core sub-pages for a creative agency, modernizing branding and driving engagement.",
    tags: ["Lead UI/UX Designer", "2025", "Figma & Elementor"],
    link: "/case-study/korlodworks",
    image: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/s450bxiq5tlws5tm9jpq.webp",
  },
  {
    title: "Kids Zone Learning App",
    category: "Education · Mobile App",
    description: "Educational mobile app for children aged 2-6 to learn the alphabet through voice recognition, playful visuals, and gamified interactions.",
    tags: ["UX/UI Designer", "2024", "Figma & Flutter"],
    link: "/case-study/kids-zone",
    image: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/md3t2poq4cb3zbfsbz4o.webp",
  },
];

const ProjectsSection = () => {
  return (
    <section id="works" className="py-24 section-gradient">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">Works</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            What I've designed recently
          </h2>
        </div>

        <div className="space-y-20">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`flex flex-col ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-12 items-center`}
            >
              <div className="flex-1 w-full">
                <div className="rounded-2xl overflow-hidden card-shadow bg-card">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="flex-1 w-full space-y-4">
                <p className="text-xs uppercase tracking-widest text-primary font-semibold">
                  {project.category}
                </p>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={project.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all mt-2"
                >
                  View Case Study <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
