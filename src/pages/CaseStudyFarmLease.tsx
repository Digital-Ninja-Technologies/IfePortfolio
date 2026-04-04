import CaseStudyLayout, { type CaseStudyData } from "@/components/CaseStudyLayout";

const data: CaseStudyData = {
  title: "FarmLease MVP Design",
  subtitle: "Designing the MVP for a SaaS platform bridging farmland owners and agricultural investors — enabling easy listing, browsing, and leasing of verified farmland opportunities.",
  tags: ["SaaS", "Product Design", "AgroTech", "MVP"],
  heroImage: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/vswsohdxhikbgmkfwnsm.webp",
  meta: [
    { label: "Role", value: "Lead Product Designer" },
    { label: "Timeline", value: "1 Week" },
    { label: "Tools", value: "Figma, FigJam, Notion" },
  ],
  challenge: [
    "Small and mid-sized farmland owners often lack the resources to make their land productive, while agriculture-focused investors struggle to find verified, secure land opportunities.",
    "The current process is largely offline, opaque, and riddled with trust issues. The platform needed to support mobile-first accessibility for rural communities.",
  ],
  research: {
    intro: "Conducted 12 user interviews (6 landowners, 6 investors), a field study in Owerri, and competitive analysis of agri-marketplace platforms.",
    stats: [
      { stat: "12", desc: "User interviews with landowners and investors" },
      { stat: "2", desc: "Core user flows mapped: Landowner and Investor" },
      { stat: "45+", desc: "Average age of landowners, often digitally semi-literate" },
      { stat: "Trust", desc: "Primary barrier identified across all user groups" },
    ],
  },
  process: {
    intro: "Mapped two core flows for landowners and investors with dashboards featuring metrics like active leases and projected ROI.",
    steps: [
      { step: "01", title: "User Research", desc: "12 interviews revealed landowners preferred voice onboarding and SMS, while investors valued GPS mapping and ROI projections." },
      { step: "02", title: "Dual User Flows", desc: "Landowners: Register → Add Land → Upload Media → Set Terms. Investors: Sign Up → Browse → Filter → View → Request Lease." },
      { step: "03", title: "Trust-Building Features", desc: "Verified listings, digital contracts, photo/video proof, and review systems to overcome the trust barrier." },
      { step: "04", title: "Offline-to-Online UX", desc: "Voice support and SMS notifications to bridge the digital gap for rural communities." },
    ],
  },
  midImage: { src: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/bacmvnureddleuevytpa.webp", alt: "FarmLease Platform" },
  features: [
    { title: "Land Listing System", desc: "Easy listing with details like size, location, soil type, and lease terms with photo/video uploads." },
    { title: "Investor Discovery", desc: "Browse and filter land by location, soil type, budget, and projected ROI." },
    { title: "Digital Agreements", desc: "Verified listings with digital contracts for secure, transparent transactions." },
    { title: "Dashboard Analytics", desc: "Metrics for active leases, lease income, land portfolio, and projected ROI." },
  ],
  results: {
    intro: "The MVP design successfully bridges the offline-to-online gap for agricultural land leasing with trust-first features.",
    stats: [
      { stat: "2", desc: "Complete user flows designed and validated" },
      { stat: "Web+Mobile", desc: "Platform designed for both web and mobile" },
      { stat: "High", desc: "Trust-building through verified listings and contracts" },
    ],
  },
  reflection: [
    "Prioritizing trust-building features like verified listings and digital contracts proved essential. The offline-to-online transition UX (voice support, SMS) was critical for the target audience.",
    "Next phase includes partnering with financial institutions for lease financing and deploying offline onboarding agents in rural areas.",
  ],
};

const CaseStudyFarmLease = () => <CaseStudyLayout data={data} />;
export default CaseStudyFarmLease;
