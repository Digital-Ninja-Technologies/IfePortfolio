// Builds public/site-index.json — a searchable knowledge base of every page,
// project, and blog post so the "Ask Ife" assistant can answer site-wide questions.

import { writeFileSync } from "fs";
import { resolve } from "path";
import { projects } from "../src/data/projects";
import { blogPosts } from "../src/data/blogPosts";

interface IndexEntry {
  type: "page" | "project" | "blog";
  title: string;
  url: string;
  text: string;
}

const staticPages: IndexEntry[] = [
  {
    type: "page",
    title: "Home",
    url: "/",
    text: "Onifade Ifeoluwa — Product Designer (Design Ninja). 5+ years building digital products across mobile, web, Web2 and Web3. 26+ projects delivered, 500K+ users impacted, 18+ happy clients. User-focused, results-driven, available 24/7.",
  },
  {
    type: "page",
    title: "About",
    url: "/about",
    text: "About Onifade Ifeoluwa. Product designer specialising in mobile apps, web apps, SaaS dashboards, FinTech and Web3 interfaces. Skills: user research, wireframing, prototyping, design systems, user flows, developer hand-off. Process: Discovery & Alignment → Design & Iterate → Polish & Handoff.",
  },
  {
    type: "page",
    title: "Works",
    url: "/works",
    text: "Full portfolio of case studies across mobile, web, SaaS, FinTech, Web3, AI, dating, food delivery, ride-hailing, e-commerce and more.",
  },
  {
    type: "page",
    title: "Blog",
    url: "/blog",
    text: "Writing on product design, design leadership, FinTech UX, dark patterns, microcopy, prompting, and lessons from working in startups.",
  },
  {
    type: "page",
    title: "Contact",
    url: "/",
    text: "Contact Ife via the 'Let's Talk' button, the contact form (Formspree), LinkedIn https://www.linkedin.com/in/onifadeifeoluwa/, or Contra https://contra.com/designninja?r=designninja.",
  },
];

const projectEntries: IndexEntry[] = projects.map((p) => ({
  type: "project",
  title: p.title,
  url: p.link,
  text: `${p.title} — ${p.category}. ${p.description} Tags: ${p.tags.join(", ")}. Categories: ${p.categories.join(", ")}.${p.liveUrl ? ` Live: ${p.liveUrl}.` : ""}`,
}));

const blogEntries: IndexEntry[] = blogPosts.map((b) => ({
  type: "blog",
  title: b.title,
  url: `/blog/${b.slug}`,
  text: `${b.title} (${b.category}, ${b.date}, ${b.readTime}). ${b.excerpt} ${b.content
    .map((s) => `${s.heading ? s.heading + ": " : ""}${s.body}`)
    .join(" ")}`,
}));

const index = [...staticPages, ...projectEntries, ...blogEntries];

writeFileSync(
  resolve("public/site-index.json"),
  JSON.stringify({ generatedAt: new Date().toISOString(), entries: index }, null, 0),
);
console.log(`site-index.json written (${index.length} entries)`);
