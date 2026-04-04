import CaseStudyLayout, { type CaseStudyData } from "@/components/CaseStudyLayout";

const data: CaseStudyData = {
  title: "Sylostem SaaS Dashboard",
  subtitle: "An all-in-one client management dashboard designed for freelancers and agencies. It helps users manage client data, track projects, monitor payments, and automate communication from a sleek and intuitive dashboard.",
  tags: ["SaaS", "Product Design", "Dashboard", "Freelancer Tools"],
  heroImage: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/dpywflxflhjqj20dowgs.webp",
  meta: [
    { label: "Role", value: "UI/UX Designer & UX Writer" },
    { label: "Timeline", value: "3 Weeks" },
    { label: "Tools", value: "Figma, Jitter, LottieFiles" },
  ],
  challenge: [
    "Freelancers and small agencies often juggle multiple tools — email, spreadsheets, CRMs, and chat apps — to manage clients and projects, resulting in fragmented communication and missed deadlines.",
    "There was a clear need for a centralized platform tailored to the freelance workflow that reduces administrative overhead and lets creatives focus on delivering high-value work.",
  ],
  research: {
    intro: "Interviewed 10 freelancers and 3 agency leads. Compared tools like Honeybook, Bonsai, Trello, and Notion.",
    stats: [
      { stat: "10+", desc: "Freelancers interviewed for pain point discovery" },
      { stat: "4-5", desc: "Average tools freelancers juggle per project" },
      { stat: "4", desc: "Competitor platforms analyzed (Honeybook, Bonsai, etc.)" },
      { stat: "90%", desc: "Of testers said they'd switch from current tools" },
    ],
  },
  process: {
    intro: "The design process focused on simplifying complex workflows into an intuitive, centralized experience.",
    steps: [
      { step: "01", title: "Information Architecture", desc: "Mapped core journeys: Create Client → Add Project → Assign Tasks → Send Invoice, and View Timeline → Message Client → Complete." },
      { step: "02", title: "Wireframing", desc: "Low-fidelity wireframes in Figma validated layout and task flows quickly before moving to high-fidelity." },
      { step: "03", title: "High-Fidelity Design", desc: "Clean, modern interface with dark/light toggle, sticky side nav, project tabs for Tasks/Files/Messages/Invoices, and micro-interactions." },
      { step: "04", title: "Responsive Design", desc: "Ensured mobile-friendliness using a flexible 12-column grid and progressive disclosure on smaller screens." },
    ],
  },
  midImage: { src: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/pk8mrrhdiu7fyiyhazqt.webp", alt: "Sylostem Dashboard" },
  features: [
    { title: "Client & Freelancer CRM", desc: "Store client contact info, notes, contracts, and past work in one centralized location." },
    { title: "Project Tracker", desc: "Kanban board & calendar view with deadlines, task assignments, and status updates." },
    { title: "Invoicing & Payments", desc: "Generate invoices, track payments, due dates, and payment status all in one place." },
    { title: "Smart Messaging Hub", desc: "Centralized communication tied to specific clients/projects with optional email/WhatsApp integration." },
  ],
  results: {
    intro: "The Sylostem dashboard was met with overwhelmingly positive feedback from freelancers and agency leads.",
    stats: [
      { stat: "90%", desc: "Of testers would switch from their current tools" },
      { stat: "~40%", desc: "Reduction in project setup time during testing" },
      { stat: "#1", desc: "Most loved feature: centralized messaging hub" },
    ],
  },
  reflection: [
    "Sylostem is more than a tool; it's a workflow optimizer for freelancers. Designing for this audience meant balancing simplicity with flexibility.",
    "By focusing on real-world freelance pain points, Sylostem streamlines the chaotic backend of creative work into a calm, intuitive space.",
  ],
};

const CaseStudySylostem = () => <CaseStudyLayout data={data} />;
export default CaseStudySylostem;
