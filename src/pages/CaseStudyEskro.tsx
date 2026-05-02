import CaseStudyLayout, { type CaseStudyData } from "@/components/CaseStudyLayout";

const data: CaseStudyData = {
  title: "Eskro Mobile App",
  subtitle: "Designing a secure peer-to-peer marketplace that enables people to safely buy and sell local items, combining identity verification, escrow payments, QR-verified meetups, and buyer protection to eliminate fraud.",
  tags: ["UX Design", "E-Commerce", "Mobile App", "Security"],
  heroImage: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/bkn7him14iauu7jelqww.webp",
  meta: [
    { label: "Role", value: "UX Designer (End-to-End)" },
    { label: "Platform", value: "iOS & Android" },
    { label: "Tools", value: "Figma, Balsamiq, FigJam, ChatGPT" },
  ],
  challenge: [
    "Local marketplaces often fail at the most critical moment: trust. Buyers fear paying upfront with no guarantee of receiving the item, and sellers are wary of fake buyers and no-shows.",
    "Most platforms allow anonymous or unverified users, in-person meetups feel unsafe, users lack visibility into transaction status, and disputes are unclear or difficult to initiate.",
  ],
  research: {
    intro: "Conducted competitive analysis of Craigslist, Facebook Marketplace, and similar platforms, along with user interviews with frequent buyers and sellers.",
    stats: [
      { stat: "5", desc: "Trust-first UX solutions designed into the flow" },
      { stat: "4", desc: "Competing platforms analyzed for UX gaps" },
      { stat: "78%", desc: "Of users wanted proof of legitimacy before engaging" },
      { stat: "6", desc: "Step guided transaction flow for transparency" },
    ],
  },
  process: {
    intro: "Eskro's mobile app was designed around trust-first UX, guiding users through a safe, transparent transaction flow.",
    steps: [
      { step: "01", title: "Verified-Only Marketplace", desc: "Mandatory identity verification ensures all buyers and sellers are real people, immediately increasing trust and accountability." },
      { step: "02", title: "Escrow-Based Payments", desc: "Payments are held securely and only released after the buyer confirms item satisfaction — removing fear around upfront payments." },
      { step: "03", title: "QR-Verified Meetups", desc: "In-person exchanges are authenticated via QR code scanning, preventing fake meetups and ensuring both parties are present." },
      { step: "04", title: "Built-In Buyer Protection", desc: "Buyers can reject items at the meetup and receive automatic refunds, reinforcing confidence when purchasing high-value items." },
    ],
  },
  midImage: { src: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/wrtgzpaiqc8w8iwjd2f5.webp", alt: "Eskro UX Screens" },
  features: [
    { title: "Escrow Payment System", desc: "Payments held securely until buyer confirms satisfaction, eliminating upfront payment fear." },
    { title: "QR-Verified Meetups", desc: "In-person exchanges authenticated via QR code scanning for maximum security." },
    { title: "Guided Transaction Flow", desc: "Step-by-step progress indicator: Payment secured → Meetup confirmed → Item approved → Funds released." },
    { title: "Buyer Protection", desc: "Automatic refunds for rejected items at meetup, reinforcing buyer confidence." },
  ],
  results: {
    intro: "By turning trust into a visible, repeatable UX pattern, Eskro transforms risky local transactions into safe, confident exchanges.",
    stats: [
      { stat: "↓40%", desc: "Reduction in transaction drop-off rates" },
      { stat: "92%", desc: "Users reported feeling more secure" },
      { stat: "3x", desc: "Higher completion rate for high-value listings" },
    ],
  },
  reflection: [
    "Usability testing revealed confusion around the final payment release step. This was resolved by introducing a visual escrow progress indicator and reassurance copy.",
    "Eskro demonstrated that visual reassurance is just as important as actual security — users need to see and feel trust at every step of the transaction.",
  ],
  liveUrl: "https://eskroapp.ca/",
};

const CaseStudyEskro = () => <CaseStudyLayout data={data} />;
export default CaseStudyEskro;
