import CaseStudyLayout, { type CaseStudyData } from "@/components/CaseStudyLayout";

const data: CaseStudyData = {
  title: "Yumdash Food App",
  subtitle: "Designing an end-to-end food delivery platform with streamlined ordering, restaurant discovery, and a delightful checkout experience that drives repeat orders.",
  tags: ["Product Design", "E-commerce", "Mobile App", "2023"],
  heroImage: "https://onifade-ifeoluwa.vercel.app/assets/proj-3-CnCZqc--.png",
  meta: [
    { label: "Role", value: "Product Designer" },
    { label: "Duration", value: "14 weeks (Q2 2023)" },
    { label: "Tools", value: "Figma, Maze, Miro" },
  ],
  challenge: [
    "The Nigerian food delivery market is growing rapidly, but existing apps struggle with high cart abandonment rates, confusing restaurant menus, and poor delivery tracking. Yumdash needed a design that made ordering food faster and more enjoyable than cooking.",
    "A major constraint was accommodating restaurants with vastly different menu structures — from fast-food chains with combo meals to local 'buka' joints with daily-changing offerings.",
  ],
  research: {
    intro: "I conducted contextual research by observing real ordering behavior and interviewing frequent food delivery users.",
    stats: [
      { stat: "22", desc: "User interviews with food delivery customers and restaurant owners" },
      { stat: "6", desc: "Competitor apps benchmarked across UX, speed, and satisfaction" },
      { stat: "71%", desc: "Cart abandonment rate on the previous app version" },
      { stat: "45%", desc: "Of users wanted better restaurant discovery and filtering" },
    ],
  },
  process: {
    intro: "The design process centered on reducing friction at every step from discovery to delivery.",
    steps: [
      { step: "01", title: "User Flow Optimization", desc: "Reduced the ordering flow from 8 screens to 4 by combining menu browsing with cart management in a single view." },
      { step: "02", title: "Menu Design System", desc: "Created flexible menu templates that work for both structured chain menus and dynamic local restaurant offerings with photo-first layouts." },
      { step: "03", title: "Checkout Redesign", desc: "Designed a one-tap reorder system and streamlined checkout with saved addresses, payment methods, and order customization." },
      { step: "04", title: "Delivery Tracking", desc: "Built an engaging live tracking experience with animated map views, driver ETA, and order preparation status updates." },
    ],
  },
  midImage: { src: "https://onifade-ifeoluwa.vercel.app/assets/proj-3-CnCZqc--.png", alt: "Yumdash App Screens" },
  features: [
    { title: "Smart Restaurant Discovery", desc: "Personalized restaurant feed based on cuisine preferences, past orders, delivery time, and current promotions." },
    { title: "Visual Menu Builder", desc: "Photo-rich menu layouts with combo suggestions, dietary filters, and real-time availability indicators." },
    { title: "One-Tap Reorder", desc: "Quick reorder from order history with the ability to modify items before adding to cart, reducing repeat order time by 70%." },
    { title: "Live Order Tracking", desc: "Real-time delivery tracking with preparation stages, driver location, and proactive delay notifications." },
  ],
  results: {
    intro: "The redesigned app was A/B tested against the existing version with 500 users over 4 weeks.",
    stats: [
      { stat: "52%", desc: "Reduction in cart abandonment rate" },
      { stat: "4.8/5", desc: "App store rating post-redesign" },
      { stat: "38%", desc: "Increase in average orders per user per month" },
    ],
  },
  reflection: [
    "The biggest win was the one-tap reorder feature — it seemed simple but required careful thought about edge cases like unavailable items, price changes, and restaurant closures.",
    "If I could do it again, I'd push harder for a restaurant onboarding tool that helps vendors upload high-quality food photos. The visual quality of menu items directly impacted conversion rates.",
  ],
};

const CaseStudyYumdash = () => <CaseStudyLayout data={data} />;
export default CaseStudyYumdash;
