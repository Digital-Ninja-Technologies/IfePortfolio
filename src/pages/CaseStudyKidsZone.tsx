import CaseStudyLayout, { type CaseStudyData } from "@/components/CaseStudyLayout";

const data: CaseStudyData = {
  title: "Kids Zone Learning App",
  subtitle: "An educational mobile app designed for children aged 2 to 6 to learn the alphabet in a fun, interactive way. Uses voice recognition and playful visuals to help kids listen to, repeat, and recognize letters.",
  tags: ["UX/UI Design", "Education", "Mobile App", "Illustration"],
  heroImage: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/md3t2poq4cb3zbfsbz4o.webp",
  meta: [
    { label: "Role", value: "UX/UI Designer & Illustrator" },
    { label: "Platform", value: "Android (Google Play Store)" },
    { label: "Tools", value: "Figma, Illustrator, Flutter, Firebase" },
  ],
  challenge: [
    "Traditional alphabet learning methods often fail to keep young children engaged, leading to a lack of interest and slower learning.",
    "There was a need for a solution that merges education and entertainment while supporting both auditory and visual learners — and keeping parents confident about screen time quality.",
  ],
  research: {
    intro: "Studied how children aged 2-6 interact with educational apps. Key insight: kids engage more with cheerful voices and bright animations.",
    stats: [
      { stat: "2-6", desc: "Target age range for the app" },
      { stat: "80%", desc: "Retention rate — users returned within 3 days" },
      { stat: "12min", desc: "Average session time per child" },
      { stat: "Live", desc: "Available on Google Play Store" },
    ],
  },
  process: {
    intro: "Designed the learning journey from home screen to progress tracking, with emphasis on interactive feedback and playful visuals.",
    steps: [
      { step: "01", title: "Wireframing", desc: "Mapped the learning journey: Home screen → Alphabet selection → Letter learning module → Progress and reward system." },
      { step: "02", title: "Visual Design", desc: "Bright, playful palette with rounded child-friendly fonts and custom illustrations (A for Apple, B for Ball)." },
      { step: "03", title: "Interaction Design", desc: "Tap to hear sounds, speak into the mic for feedback, mini games like letter matching and dragging objects." },
      { step: "04", title: "Audio Integration", desc: "Friendly voice-overs with clear pronunciation and cheerful feedback (clapping sounds, stickers) for motivation." },
    ],
  },
  midImage: { src: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/baxpdqq2brojvxmeagpv.webp", alt: "Kids Zone App Screens" },
  features: [
    { title: "Listen & Repeat", desc: "Letters spoken aloud for children to listen and repeat, building recognition through audio-visual learning." },
    { title: "Mini Games", desc: "Letter matching, sound recognition, and drag-and-drop games to reinforce learning through play." },
    { title: "Rewards & Stickers", desc: "Cheerful feedback with clapping sounds and collectible stickers that motivate continued progress." },
    { title: "Voice Recognition", desc: "Children speak letters into the mic and receive cheerful, encouraging feedback." },
  ],
  results: {
    intro: "The app was published on Google Play Store with strong engagement metrics from both children and parents.",
    stats: [
      { stat: "80%", desc: "Retention rate within 3 days" },
      { stat: "12min", desc: "Average session time per child" },
      { stat: "5★", desc: "Parent reviews: 'My daughter sings the alphabet every day!'" },
    ],
  },
  reflection: [
    "Designing for kids requires balancing fun and function. Audio-driven UX must be simple and error-tolerant. Kids love immediate feedback — the faster, the better.",
    "Parent feedback was overwhelmingly positive: 'It's safe and easy. She's learning fast.' The app proves that educational screen time can be both effective and enjoyable.",
  ],
};

const CaseStudyKidsZone = () => <CaseStudyLayout data={data} />;
export default CaseStudyKidsZone;
