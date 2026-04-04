import CaseStudyLayout, { type CaseStudyData } from "@/components/CaseStudyLayout";

const data: CaseStudyData = {
  title: "BigJay Shortlet Apartment",
  subtitle: "Designing the digital platform for a modern shortlet brand — a sleek guest-facing website for browsing and booking, plus an internal admin dashboard for managing apartment inventory.",
  tags: ["SaaS", "Product Design", "Real Estate", "Dashboard"],
  heroImage: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/s6hh72mgbc3lrni3oc3x.webp",
  meta: [
    { label: "Role", value: "Product Designer" },
    { label: "Deliverables", value: "Frontend UI + Admin Dashboard" },
    { label: "Tools", value: "Figma, Jitter, Lummi AI" },
  ],
  challenge: [
    "BigJay Apartment needed a sleek, user-friendly digital platform where guests could easily browse and book premium apartments.",
    "The admin team also needed an internal dashboard to manage apartment inventory, upload listings, handle bookings, and monitor inquiries without technical stress.",
  ],
  research: {
    intro: "Studied shortlet booking platforms to identify best practices for both guest-facing and admin experiences.",
    stats: [
      { stat: "2", desc: "Key experiences designed: Guest Frontend + Admin Dashboard" },
      { stat: "3", desc: "Guest features: Search, Gallery, Easy Booking" },
      { stat: "3", desc: "Admin features: Listing Upload, Status Toggles, Dashboard" },
      { stat: "Premium", desc: "Brand feel maintained across all touchpoints" },
    ],
  },
  process: {
    intro: "Full product design from user research to high-fidelity prototypes, focusing on two key experiences.",
    steps: [
      { step: "01", title: "Guest-Facing Design", desc: "Smooth, mobile-responsive website with search, filter, gallery views with image sliders, and easy booking forms." },
      { step: "02", title: "Admin Dashboard", desc: "Internal system for uploading listings with drag-and-drop, editing availability, and managing bookings." },
      { step: "03", title: "Premium Aesthetic", desc: "Clean, intuitive UI reflecting the premium feel of the brand with minimalist layout focused on apartment visuals." },
      { step: "04", title: "Responsive Implementation", desc: "Seamless navigation across all devices with quick access to listing management for admins." },
    ],
  },
  midImage: { src: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/qo6vfddbcjcdcyatwyfm.webp", alt: "BigJay Dashboard" },
  features: [
    { title: "Search & Filter", desc: "Guests can search and filter listings by location, price, and amenities for quick discovery." },
    { title: "Gallery Views", desc: "Smooth image sliders showcasing apartment visuals with detailed amenity information." },
    { title: "Drag-and-Drop Upload", desc: "Admin listing upload with drag-and-drop image support and easy content management." },
    { title: "Real-Time Status", desc: "Toggle apartment availability in real-time with a dashboard overview of bookings and inquiries." },
  ],
  results: {
    intro: "The platform delivers a frictionless booking experience for users while giving the client full control over listing management.",
    stats: [
      { stat: "2-in-1", desc: "Guest frontend + Admin dashboard delivered" },
      { stat: "100%", desc: "Responsive across all devices" },
      { stat: "Scalable", desc: "Architecture designed for future growth" },
    ],
  },
  reflection: [
    "Designing for two distinct user groups (guests and admins) required balancing elegance with utility across very different interfaces.",
    "The key was maintaining the premium brand feel consistently while ensuring each user group has exactly the tools they need — nothing more, nothing less.",
  ],
};

const CaseStudyBigJay = () => <CaseStudyLayout data={data} />;
export default CaseStudyBigJay;
