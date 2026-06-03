import CaseStudyLayout, { type CaseStudyData } from "@/components/CaseStudyLayout";

const data: CaseStudyData = {
  title: "QuickRead AI Mobile App",
  subtitle: "An AI-powered mobile app that helps users read, summarize, and interact with PDFs effortlessly. Designed for students, techies, and business owners who need to extract insights from long documents quickly.",
  tags: ["Brand Design", "UX/UI Design", "AI", "Mobile App"],
  heroImage: "/assets/quickread/splash-intro.png",
  meta: [
    { label: "Role", value: "UX/UI Designer & Brand Designer" },
    { label: "Timeline", value: "3 Weeks" },
    { label: "Tools", value: "Figma, FigJam" },
  ],
  challenge: [
    "Reading lengthy PDFs is time-consuming. Traditional PDF readers are passive — users scroll endlessly, skim through pages, and mentally extract meaning with no intelligent help.",
    "The design challenge was balancing AI complexity with UX simplicity — making an AI-powered experience accessible to non-technical users while handling content overload.",
  ],
  research: {
    intro: "Mapped user pain points around reading efficiency, focus, and navigation. Identified the common theme: 'I don't want to read everything, I just need the point.'",
    stats: [
      { stat: "3", desc: "Target audiences: Students, Techies, Business Owners" },
      { stat: "5", desc: "Key features: Summaries, Q&A, Audio, Bookmarks, Read Later" },
      { stat: "4", desc: "Design process phases: Research, Wireframes, UI, Testing" },
      { stat: "MVP", desc: "Design now in development with strong user interest" },
    ],
  },
  process: {
    intro: "Led the design of both the mobile experience and brand identity, from ideation and wireframes to visual direction and prototypes.",
    steps: [
      { step: "01", title: "Research & Strategy", desc: "Mapped user pain points around reading efficiency. Common theme: 'I don't want to read everything, I just need the point.'" },
      { step: "02", title: "User Flows & Wireframes", desc: "Clean flows for document upload, summary generation, Q&A interaction, and audio playback with accessibility focus." },
      { step: "03", title: "High-Fidelity UI & Brand", desc: "Calming dark UI theme, AI chat interface for Q&A, and brand identity with soft blue + grayscale palette." },
      { step: "04", title: "Prototyping & Testing", desc: "Clickable Figma prototypes tested with users for navigation simplicity and AI response placement." },
    ],
  },
  midImage: { src: "/assets/quickread/screens-auth.jpg", alt: "QuickRead Authentication Flow - Login, Register, Forgot Password" },
  features: [
    { title: "Smart Summaries", desc: "Instantly distill lengthy documents into key takeaways and actionable insights." },
    { title: "Ask Your PDF", desc: "Use natural language to query document content — 'What does section 3 mean?'" },
    { title: "Audio Playback", desc: "Listen to summaries and sections for on-the-go learning." },
    { title: "Bookmarks & Read Later", desc: "Save quotes, paragraphs, and definitions. Queue important docs and track reading progress." },
  ],
  results: {
    intro: "QuickRead's design was met with positive feedback from early testers who appreciated its 'study-buddy' feel and intuitive Q&A feature.",
    stats: [
      { stat: "Positive", desc: "Feedback from early testers and stakeholders" },
      { stat: "MVP", desc: "Now in development phase with strong interest" },
      { stat: "High", desc: "Demand from student communities and productivity users" },
    ],
  },
  reflection: [
    "QuickRead reimagines how we consume written content. Designing a product where AI meets human clarity pushed me to think deeply about both utility and empathy in mobile experiences.",
    "The biggest challenge was balancing AI complexity vs UX simplicity — simplifying the AI-powered experience for non-technical users while keeping it powerful for power users.",
  ],
  contraUrl: "https://contra.com/p/so7Z3QA3-quick-read-ai-mobile-app-and-brand-design?r=designninja",
  gallery: [
    {
      title: "Onboarding & Authentication",
      description: "Clean, intuitive auth flows with login, registration, and password recovery screens. Dark theme with soft blue accents for a calming study environment.",
      image: "/assets/quickread/screens-auth.jpg",
    },
    {
      title: "User Profile & Features Overview",
      description: "Profile management, user settings, and a visual 'How It Works' section guiding users through the 3 core features: Upload → Analyze → Ask Questions.",
      image: "/assets/quickread/screens-end.jpg",
    },
    {
      title: "Upload, Processing & Chat Interface",
      description: "Seamless PDF upload experience, AI processing indicators, and the main Q&A chat interface where users interact with their documents conversationally.",
      image: "/assets/quickread/screens-upload-chat.jpg",
    },
  ],
};

const CaseStudyQuickRead = () => <CaseStudyLayout data={data} />;
export default CaseStudyQuickRead;
