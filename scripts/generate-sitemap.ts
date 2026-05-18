// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.

import { writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://inspired-showcase-spark.lovable.app";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const caseStudySlugs = [
  "travelguide", "flex2ride", "connekt", "yumdash", "sportrex", "bible-verse",
  "eskro", "taptap-send", "sylostem", "conekt-website", "salsa-sangria",
  "gigatalik", "blowx", "ripplecat", "spt-airdrop", "gamers-wallet", "raysup",
  "vr-experience", "farmlease", "bigjay", "quickread", "squadpay", "korlodworks",
  "kids-zone", "opay", "cinemetric", "synclove", "moducode",
];

const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/works", changefreq: "weekly", priority: "0.9" },
  ...caseStudySlugs.map((slug) => ({
    path: `/case-study/${slug}`,
    changefreq: "monthly" as const,
    priority: "0.7",
  })),
  { path: "/blog", changefreq: "weekly", priority: "0.8" },
  { path: "/blog/ai-is-a-mirror-the-real-skill-is-prompting", changefreq: "monthly", priority: "0.6" },
  { path: "/blog/dark-ux-where-do-we-draw-the-ethical-line", changefreq: "monthly", priority: "0.6" },
  { path: "/blog/designing-for-clarity-not-cleverness", changefreq: "monthly", priority: "0.6" },
  { path: "/blog/from-0-to-1-shipping-mvps-that-people-actually-use", changefreq: "monthly", priority: "0.6" },
  { path: "/blog/microcopy-the-quietest-part-of-your-ui-doing-the-heaviest-lifting", changefreq: "monthly", priority: "0.6" },
  { path: "/blog/the-myth-of-the-perfect-pixel", changefreq: "monthly", priority: "0.6" },
  { path: "/blog/designing-for-trust-in-fintech-products", changefreq: "monthly", priority: "0.6" },
];

function generateSitemap(entries: SitemapEntry[]) {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries));
console.log(`sitemap.xml written (${entries.length} entries)`);
