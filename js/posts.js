/**
 * 505 GET FREE — Blog Posts Data
 * ─────────────────────────────────────────────────────────────
 * HOW TO ADD A NEW POST:
 *
 * 1. Copy one of the objects below (the { } block)
 * 2. Paste it at the TOP of the POSTS array (so newest shows first)
 * 3. Fill in: title, date, category, excerpt, emoji, slug
 * 4. Save the file
 *
 * DATE FORMAT: "Month DD, YYYY" — e.g. "April 15, 2026"
 *
 * CATEGORIES (use exactly as shown):
 *   "News"  |  "Education"  |  "Community"  |  "Resources"  |  "Policy"
 *
 * SLUG: a short URL-friendly version of the title, all lowercase,
 *       spaces replaced with hyphens. Example: "cannabis-and-trafficking"
 *
 * IMAGE (optional): set imageUrl to a full https:// link to an image,
 *       OR leave it as "" to use the emoji placeholder instead.
 * ─────────────────────────────────────────────────────────────
 */

const POSTS = [
  {
    title:    "Cannabis, Dispensaries & Human Trafficking",
    date:     "March 12, 2026",
    category: "Education",
    excerpt:  "As the cannabis industry expands across New Mexico, it's critical that dispensary owners, employees, and customers understand the intersection of this industry with human trafficking — and how to identify and report it.",
    imageUrl: "",
    emoji:    "🌿",
    slug:     "cannabis-dispensaries-human-trafficking"
  },
  {
    title:    "Global Visitors & Partners in the Work to End Exploitation",
    date:     "February 28, 2026",
    category: "Community",
    excerpt:  "This month we welcomed international partners from six countries who are working to combat human trafficking in their own regions. The exchange of strategies and resources strengthened all of our efforts.",
    imageUrl: "",
    emoji:    "🌐",
    slug:     "global-visitors-partners"
  },
  {
    title:    "MMIP & Human Trafficking: Understanding the Intersections",
    date:     "February 10, 2026",
    category: "Policy",
    excerpt:  "Missing and Murdered Indigenous People and human trafficking are deeply interconnected crises in New Mexico. We explore the data, the patterns, and the community-led responses making a difference.",
    imageUrl: "",
    emoji:    "🤝",
    slug:     "mmip-ht-intersections"
  },
  {
    title:    "New Mandatory Signage Requirements for NM Businesses",
    date:     "January 22, 2026",
    category: "Policy",
    excerpt:  "All New Mexico businesses subject to minimum wage laws are required to post the 505-GET-FREE hotline information. Here's what the updated signage looks like and where to download it.",
    imageUrl: "",
    emoji:    "📋",
    slug:     "mandatory-signage-update"
  },
  {
    title:    "Recognizing Labor Trafficking in Agricultural Settings",
    date:     "January 8, 2026",
    category: "Education",
    excerpt:  "Labor trafficking in New Mexico's agricultural sector is underreported and often invisible. This guide helps workers, employers, and community members recognize warning signs and take action.",
    imageUrl: "",
    emoji:    "🌾",
    slug:     "labor-trafficking-agriculture"
  },
  {
    title:    "2025 Year in Review: Calls Answered, Lives Changed",
    date:     "December 31, 2025",
    category: "News",
    excerpt:  "Looking back on 2025, we reflect on the calls answered, the advocates trained, the resources connected, and the survivors supported across New Mexico.",
    imageUrl: "",
    emoji:    "📊",
    slug:     "2025-year-in-review"
  }
];

/* ─────────────────────────────────────────────────────────────
   FUTURE: GOOGLE SHEETS INTEGRATION
   ─────────────────────────────────────────────────────────────
   When you're ready to manage posts from a Google Sheet
   (so your team can add posts from any device, including phones):

   1. Create a Google Sheet with columns:
      title | date | category | excerpt | imageUrl | emoji | slug | published

   2. File → Share → Publish to web → Sheet1 → CSV → Publish
      Copy the link — it will look like:
      https://docs.google.com/spreadsheets/d/YOUR_ID/pub?output=csv

   3. Replace the POSTS array above with a fetch() call and update
      the site's main.js to await the data load.

   We can set this up whenever you're ready!
   ───────────────────────────────────────────────────────────── */
