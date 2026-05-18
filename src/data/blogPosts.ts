import microcopyCover from "@/assets/blog/microcopy.jpg";
import perfectPixelCover from "@/assets/blog/perfect-pixel.jpg";
import fintechTrustCover from "@/assets/blog/fintech-trust.jpg";
import darkUxCover from "@/assets/blog/dark-ux.jpg";
import clarityCover from "@/assets/blog/clarity.jpg";
import zeroToOneCover from "@/assets/blog/zero-to-one.jpg";
import promptingCover from "@/assets/blog/prompting.jpg";
import startupLeadCover from "@/assets/blog/startup-lead.jpg";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  cover?: string;
  content: { heading?: string; body: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "leading-in-a-tech-startup-what-its-really-taught-me",
    title: "Leading in a Tech Startup: What It's Really Taught Me",
    excerpt:
      "Product decisions before noon, design reviews, team energy, quiet pressure — what leading inside a startup actually builds in you.",
    date: "May 18, 2026",
    readTime: "6 min read",
    category: "Leadership",
    cover: startupLeadCover,
    content: [
      {
        body: "Ifeoluwa, manage. You will feel it like you want to die, but you will not die — is that clear? That's the line I repeat to myself on the hard days. Leading in a tech startup has stretched me in ways I didn't expect, and somehow I'm still standing and still delivering.",
      },
      {
        heading: "There is no manual for this",
        body: "Some days I'm making product decisions. Other days I'm reviewing designs, fixing small issues, jumping on calls, and managing team energy — all before noon. Funtasky. The role doesn't sit neatly on a job description; it shapes itself around whatever the company needs that week.",
      },
      {
        heading: "Clarity is more powerful than hype",
        body: "If the team doesn't understand the vision clearly, execution suffers. It's that simple. Hype gets people excited for a week. Clarity gets them shipping for a year.",
      },
      {
        heading: "Systems save you",
        body: "Motivation is great, but processes are what keep things moving when energy drops — and energy will always drop. That's as normal as norm. Build the system once so the team doesn't have to summon willpower every Monday morning.",
      },
      {
        heading: "Ownership beats talent",
        body: "I'd rather work with someone accountable and hungry than someone extremely skilled but passive. I'm real on this — your skill will not be effective in a team you're passive in. Ownership multiplies talent; passivity divides it.",
      },
      {
        heading: "You carry pressure quietly",
        body: "First son or first daughter kind of pressure. There are moments of uncertainty, but as a lead, you can't transfer fear to the team. You have to stay steady — at least on the outside — while you process the storm inside.",
      },
      {
        heading: "Startups test character, not just skill",
        body: "Patience. Emotional control. Decision-making. Resilience. Most importantly, I've realized startups don't just test your skills, they test your character. It's not always glamorous, but it's building me into a stronger leader every single day. I feel it like I'm going to die — but I just got stronger and better by each day.",
      },
      {
        body: "If you're leading a team in a startup right now, I respect you. It's not easy, but it's shaping us. Manage. You will not die.",
      },
    ],
  },
  {
    slug: "ai-is-a-mirror-the-real-skill-is-prompting",
    title: "AI Is a Mirror: The Real Skill Is Prompting",
    excerpt:
      "AI isn't magic — it reflects how clearly you think. Here's how to write prompts that get real results.",
    date: "May 18, 2026",
    readTime: "5 min read",
    category: "AI & Design",
    cover: promptingCover,
    content: [
      {
        body: "Most people think AI is magic. It's not. It's a mirror. You get back exactly how well you think. Prompting is a skill, and the quality of your results depends on how detailed and intentional your prompts are. I've learned this the hard way — vague prompts equal average output. Every single time.",
      },
      {
        heading: "What actually works",
        body: "Be specific about what you want. Give context — don't assume the AI 'just knows.' Define the format you need (post, list, table, brief). Iterate — your first prompt is rarely your best. Think like a teacher explaining to a student, not a manager barking orders.",
      },
      {
        heading: "See the difference",
        body: "Poor prompt: 'Write a post about AI.' Better prompt: 'Write a LinkedIn post about how AI tools are changing the way freelancers work. Target beginner freelancers. Use a conversational tone, include 3 key insights, and keep it under 150 words.' Same tool. Completely different output.",
      },
      {
        heading: "Another one",
        body: "Poor prompt: 'Design a website.' Better prompt: 'Design a modern landing page for a Web3 messaging app called Conekt App. Target students and crypto-native users. Use a dark theme with neon accents. Include hero, features, and CTA sections.' Specificity isn't extra work — it's the work.",
      },
      {
        heading: "AI is powerful, but it's still a tool",
        body: "Your results will always reflect your level of clarity. If your outputs are mid, your prompts probably are too. No hard feelings — just sharpen the input, and the output sharpens itself.",
      },
    ],
  },
  {
    slug: "microcopy-the-quietest-part-of-your-ui-doing-the-heaviest-lifting",
    title: "Microcopy: The Quietest Part of Your UI Doing the Heaviest Lifting",
    excerpt:
      "Buttons, empty states, error messages — the small words decide whether users feel confident or confused.",
    date: "May 14, 2026",
    readTime: "5 min read",
    category: "UX Writing",
    cover: microcopyCover,
    content: [
      {
        body: "Designers obsess over layouts, colors, and components — but the words inside those components quietly do most of the work. A button labeled \"Submit\" and one labeled \"Send my request\" lead to the same action, yet they create completely different experiences.",
      },
      {
        heading: "Microcopy is UX",
        body: "Every label, tooltip, empty state, and error message is a tiny conversation between your product and the user. Done well, microcopy reduces hesitation, builds trust, and prevents support tickets before they happen. Done poorly, it's the reason users abandon flows you spent weeks designing.",
      },
      {
        heading: "Three rules I use",
        body: "First, be specific — \"Saved\" is better than \"Success.\" Second, be human — write the way you'd explain it to a friend, not the way a database thinks. Third, be honest — if something failed, say what failed and what the user can do next.",
      },
      {
        heading: "Edge cases are where products earn trust",
        body: "Empty states, zero-result searches, failed payments, and timeouts are the moments users remember. Treat them as design opportunities, not afterthoughts. A thoughtful empty state can teach users how to succeed; a generic one just tells them they failed.",
      },
      {
        body: "Before shipping any screen, read every word out loud. If it sounds robotic, rewrite it. The interface that talks to users like humans always wins.",
      },
    ],
  },
  {
    slug: "the-myth-of-the-perfect-pixel",
    title: "The Myth of the Perfect Pixel",
    excerpt:
      "Pixel perfection feels like craft, but it can quietly slow down teams and hide what really matters: outcomes.",
    date: "May 10, 2026",
    readTime: "6 min read",
    category: "Design Process",
    cover: perfectPixelCover,
    content: [
      {
        body: "Somewhere along the way, \"pixel perfect\" became a badge of honor in design. We zoom in to 400%, nudge a label by one pixel, and feel proud. But pixel perfection in isolation is a trap — and it's costing teams more than they realize.",
      },
      {
        heading: "What pixel perfection optimizes for",
        body: "It optimizes for the screenshot, not the product. It assumes a single viewport, a single browser, a single user. The moment your design hits real devices, real content lengths, and real users with accessibility settings, those perfect pixels rearrange themselves anyway.",
      },
      {
        heading: "What we should optimize for instead",
        body: "Systems, not screens. A solid type scale, spacing rhythm, and component library will produce consistent results across thousands of screens you'll never personally polish. Spend your craft budget on the system — the screens take care of themselves.",
      },
      {
        heading: "When pixel-level care is worth it",
        body: "Logos, brand moments, marketing hero sections, and the first 30 seconds of a flow. These are the surfaces users notice. Everything else benefits more from solid logic than visual fussing.",
      },
      {
        body: "Pixel perfection isn't the enemy. Pixel obsession is. Ship the system, measure the outcome, and save the micro-tuning for the moments that actually shape how users feel.",
      },
    ],
  },
  {
    slug: "designing-for-trust-in-fintech-products",
    title: "Designing for Trust in Fintech Products",
    excerpt:
      "In finance, users aren't buying features — they're buying confidence. Here's how design earns it.",
    date: "May 6, 2026",
    readTime: "7 min read",
    category: "Fintech UX",
    cover: fintechTrustCover,
    content: [
      {
        body: "I've designed for several fintech and payments products, and one lesson keeps repeating: in money apps, trust is the product. Users don't care how beautiful your UI is if they're not sure their money is safe. Every design decision either deposits into the trust account or withdraws from it.",
      },
      {
        heading: "1. Show, don't promise",
        body: "Marketing pages say \"secure.\" Trustworthy products show it — visible security indicators, clear session states, confirmation screens that summarize exactly what's about to happen. Users believe what they can see, not what they're told.",
      },
      {
        heading: "2. Make money movements feel inevitable",
        body: "Before a transfer, the user should know: who's receiving it, how much, in what currency, with what fee, and when it arrives. Surprises are fine in birthday cards — not in banking. A boring, predictable confirmation step is a feature, not friction.",
      },
      {
        heading: "3. Default to clarity over cleverness",
        body: "A balance card with three numbers, a chart, and a streak badge looks impressive in a portfolio shot. In real use, it makes people anxious. Show the balance. Show what's pending. Show what's available. Save the cleverness for screens that aren't carrying someone's rent money.",
      },
      {
        heading: "4. Errors are trust moments",
        body: "When a payment fails, the user's first thought is \"is my money gone?\" A vague \"Something went wrong\" message destroys trust instantly. Tell them what happened, whether their money is safe, and exactly what to do next. Handled well, a failed transaction can actually increase trust.",
      },
      {
        heading: "5. Respect the boring stuff",
        body: "Receipts, statements, transaction histories, and dispute flows are where loyalty is built. They're rarely glamorous, but they're the screens users return to when something matters. Design them with the same care you give the onboarding.",
      },
      {
        body: "In fintech, trust compounds quietly and breaks loudly. Every small, honest design decision adds up — and one careless one can undo months of work. Design like the user's money depends on it, because it does.",
      },
    ],
  },
  {
    slug: "dark-ux-where-do-we-draw-the-ethical-line",
    title: "Dark UX: Where Do We Draw the Ethical Line?",
    excerpt:
      "Dark patterns work — but at what cost? A look at the trade-offs between persuasion and manipulation in product design.",
    date: "May 16, 2026",
    readTime: "5 min read",
    category: "UX Ethics",
    cover: darkUxCover,
    content: [
      {
        body: "When people hear \"Dark UX,\" many immediately think of sleek dark-mode interfaces, futuristic dashboards, and premium visuals. But in professional UX conversations, \"Dark UX\" can also refer to dark patterns — design decisions intentionally crafted to manipulate user behavior.",
      },
      {
        heading: "Common dark patterns",
        body: "Hidden unsubscribe buttons. Misleading CTA labels. Forced urgency countdowns. Confusing privacy settings. Hard-to-cancel subscriptions. Guilt-driven popups. The truth is, Dark UX exists because it can be effective.",
      },
      {
        heading: "The pros (why teams reach for it)",
        body: "Dark patterns can increase conversions, improve short-term engagement metrics, reduce drop-offs in funnels, create urgency that speeds up decision-making, and help businesses optimize revenue quickly. On a dashboard, the numbers look great.",
      },
      {
        heading: "The cons (why it eventually backfires)",
        body: "It damages long-term user trust, creates frustration and poor experience, increases churn and negative brand perception, can lead to legal and compliance issues, and — eventually — users recognize the manipulation. The short-term win turns into a long-term loss.",
      },
      {
        heading: "The real question",
        body: "The conversation isn't whether behavioral psychology should exist in design — all design influences behavior. The question is: where do we draw the ethical line?",
      },
      {
        heading: "Persuasion that's actually fair",
        body: "There are situations where persuasion in UX can be used safely and responsibly: encouraging users to complete onboarding, reminding them to enable security features, highlighting important deadlines clearly, reducing confusion during flows, and guiding users toward beneficial actions without deception. The key difference is transparency.",
      },
      {
        heading: "Good UX persuades. Dark UX manipulates.",
        body: "As designers, we should optimize for both business goals and user trust — because sustainable products are built on credibility, not tricks.",
      },
    ],
  },
  {
    slug: "designing-for-clarity-not-cleverness",
    title: "Designing for Clarity, Not Cleverness",
    excerpt:
      "Why the best UX is the one users never have to think about — and how to strip away the noise that gets in the way.",
    date: "May 12, 2026",
    readTime: "6 min read",
    category: "UX Principles",
    cover: clarityCover,
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
    cover: zeroToOneCover,
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
