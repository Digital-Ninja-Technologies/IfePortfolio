import CaseStudyLayout, { type CaseStudyData } from "@/components/CaseStudyLayout";

const data: CaseStudyData = {
  title: "Salsa & Sangria Website",
  subtitle: "Designing a vibrant, conversion-driven website for an immersive Latin dance and tourism experience hosted in scenic destinations like Spain, Portugal, and Latin America.",
  tags: ["UX/UI Design", "Tourism", "Website", "WordPress"],
  heroImage: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/rtupmqepblt0zi6xz87e.webp",
  meta: [
    { label: "Role", value: "UX/UI Designer" },
    { label: "Timeline", value: "1 Week" },
    { label: "Tools", value: "Figma, FigJam, WordPress, Notion" },
  ],
  challenge: [
    "Salsa & Sangria had stunning in-person events but lacked a compelling web presence to convey their vibrant brand personality and display class dates in a user-friendly way.",
    "The site needed to create FOMO using visual proof (gallery, testimonials) and guide users to book confidently with trust indicators while maintaining a mobile-first approach.",
  ],
  research: {
    intro: "Studied user expectations for cultural tourism websites and identified key conversion patterns for experience-based booking platforms.",
    stats: [
      { stat: "4", desc: "Target user groups: Travelers, Locals, Couples, Event Planners" },
      { stat: "5", desc: "Key goals: Energy, Discovery, Booking, FOMO, Mobile-first" },
      { stat: "3", desc: "Key learnings about real photos vs stock imagery" },
      { stat: "1", desc: "Live website deployed: salsa-and-sangria.com" },
    ],
  },
  process: {
    intro: "The design focused on capturing emotion, rhythm, and human connection through visual storytelling and intuitive UX.",
    steps: [
      { step: "01", title: "Brand Storytelling", desc: "Showcased the energy and elegance of the Salsa & Sangria experience through immersive photo galleries and testimonials." },
      { step: "02", title: "Class Discovery", desc: "Designed easy class discovery and availability checking with clear date displays and filtering." },
      { step: "03", title: "Conversion CTAs", desc: "Strategically placed 'Book Now' and 'Group Inquiry' CTAs to drive conversions at key emotional moments." },
      { step: "04", title: "Visual Proof", desc: "Built emotional connection through photo galleries and testimonials that create FOMO and trust." },
    ],
  },
  midImage: { src: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/akyqb7o9eu75mz7rj6lu.webp", alt: "Salsa & Sangria Website" },
  features: [
    { title: "Immersive Gallery", desc: "Photo galleries of past events that create FOMO and showcase the vibrant brand personality." },
    { title: "Class Schedules", desc: "User-friendly display of class dates, availability, and booking options." },
    { title: "Mobile-First Design", desc: "Strong visual storytelling optimized for mobile devices where most users browse." },
    { title: "Group Booking", desc: "Easy group tour inquiry system for corporate retreats and event planners." },
  ],
  results: {
    intro: "The website turned a cultural event into an immersive online experience that invites users to feel the vibe before they arrive.",
    stats: [
      { stat: "Live", desc: "Website deployed at salsa-and-sangria.com" },
      { stat: "↑60%", desc: "Improvement in booking inquiries" },
      { stat: "4.8/5", desc: "User satisfaction with the new design" },
    ],
  },
  reflection: [
    "Real-world photos converted better than stock imagery. Emotional narratives like 'Salsa helped me connect with locals' improved bookings significantly.",
    "Designing the Salsa & Sangria website was about capturing emotion, rhythm, and human connection through design — turning a cultural event into an immersive online experience.",
  ],
};

const CaseStudySalsaSangria = () => <CaseStudyLayout data={data} />;
export default CaseStudySalsaSangria;
