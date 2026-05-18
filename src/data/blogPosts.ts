export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: { heading?: string; body: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "designing-for-clarity-not-cleverness",
    title: "Designing for Clarity, Not Cleverness",
    excerpt:
      "Why the best UX is the one users never have to think about — and how to strip away the noise that gets in the way.",
    date: "May 12, 2026",
    readTime: "6 min read",
    category: "UX Principles",
    content: [
      {
        body: "As designers, we're often tempted to impress. A clever micro-interaction here, an unconventional navigation pattern there. But after five years of designing products across fintech, Web3, and AI tools, I've come to believe that clarity beats cleverness every single time.",
      },
      {
        heading: "The cost of being clever",
        body: "When users open your product, they're not there to admire your craft. They're there to get something done — transfer money, book a ride, learn a concept. Every clever element you add is a small cognitive tax. Multiply that across thousands of users and the cost compounds quickly.",
      },
      {
        heading: "What clarity actually looks like",
        body: "Clarity is the boring buttons that always work. The labels that say exactly what they do. The flows that feel inevitable in hindsight. It's the result of relentlessly removing — not adding. Ask of every element on the screen: 'If I deleted this, would the user fail?' If the answer is no, delete it.",
      },
      {
        heading: "A simple test",
        body: "Show your screen to someone for 5 seconds, then take it away. Ask them: what is this? What can you do here? If they can answer both, you've designed for clarity. If they hesitate, you've probably been clever in the wrong places.",
      },
      {
        body: "Great UX disappears. Users don't remember the interface — they remember how easily they got their job done. That's the design we should be aiming for.",
      },
    ],
  },
  {
    slug: "from-0-to-1-shipping-mvps-that-people-actually-use",
    title: "From 0 to 1: Shipping MVPs That People Actually Use",
    excerpt:
      "A practical playbook for designing early-stage products that solve a real problem without drowning in scope.",
    date: "April 28, 2026",
    readTime: "8 min read",
    category: "Product Design",
    content: [
      {
        body: "Most MVPs fail not because the idea was wrong, but because the team shipped the wrong slice of it. Here's the playbook I use when designing 0-to-1 products with founders.",
      },
      {
        heading: "1. Find the painful job",
        body: "Before opening Figma, I spend time mapping the single most painful job a user is hiring this product to do. Not five jobs. One. Everything else is a distraction at the MVP stage. If you can't write that job in one sentence on a sticky note, you're not ready to design.",
      },
      {
        heading: "2. Design the happy path first",
        body: "Sketch the smoothest possible flow from intent to outcome — assuming nothing goes wrong. This is your spine. Edge cases, error states, and settings can come later. Founders often want to design every screen up front; resist that. Ship the spine and let real usage reveal what to harden next.",
      },
      {
        heading: "3. Borrow patterns shamelessly",
        body: "Your users already know how Stripe handles payments, how Notion handles editing, how Linear handles navigation. Reusing familiar patterns isn't lazy — it's a gift to your users. Save your originality for the parts of the product that are genuinely new.",
      },
      {
        heading: "4. Build feedback loops, not features",
        body: "An MVP without a feedback loop is just a demo. Make sure every release answers a question: are users completing the core action? Where do they drop off? What do they ask for? Design the analytics and the user research surface with the same care you give the UI.",
      },
      {
        heading: "5. Ship, then sharpen",
        body: "Polish is earned, not assumed. Ship the rough version, watch real humans use it, then sharpen the edges that matter. The fastest way to build a product nobody uses is to perfect it in private.",
      },
      {
        body: "0-to-1 design isn't about doing more. It's about doing less, on purpose, with conviction. The goal is a product that solves one real problem so well that users tell their friends. Everything else can wait.",
      },
    ],
  },
];
