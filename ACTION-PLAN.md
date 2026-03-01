# SEO Action Plan — ai.ssh-tech.xyz
**Generated:** 2026-03-01
**Overall SEO Health Score:** 37 / 100
**Target Score (after Critical + High fixes):** 65–70 / 100

---

## Priority Legend

| Level | Definition | Timeline |
|-------|-----------|----------|
| 🔴 **Critical** | Blocks indexing or causes crawl/content errors | Fix immediately |
| 🟠 **High** | Significantly impacts ranking potential | Fix within 1 week |
| 🟡 **Medium** | Optimization opportunity with measurable impact | Fix within 1 month |
| 🟢 **Low** | Incremental improvements and future-proofing | Backlog |

---

## 🔴 CRITICAL — Fix Immediately

### C1. Fix Homepage SSR — "Loading..." Served to Googlebot
**Impact:** Googlebot may be indexing a blank "Loading..." div instead of your homepage content.
**File:** `src/components/landing/LandingRouter.tsx`

**Problem:** `LandingRouter` is a `"use client"` component that reads subdomain from a React Context. During SSR, context is not yet populated, so it renders `"Loading..."`.

**Fix Options (choose one):**

**Option A — Environment-variable-based server routing (Recommended):**
```tsx
// src/app/page.tsx
import { headers } from "next/headers";
import AILanding from "@/components/landing/ai-landing/AILanding";
import Web3Landing from "@/components/landing/web3-landing/Web3Landing";

export default async function HomePage() {
  const headersList = await headers();
  const host = headersList.get("host") ?? "";
  const subdomain = host.split(".")[0];

  if (subdomain === "ai") return <AILanding />;
  if (subdomain === "web3") return <Web3Landing />;
  // ...other subdomains
  return <AILanding />; // default fallback
}
```

**Option B — NEXT_PUBLIC_SITE env var per deployment:**
```tsx
// .env.local (per deployment)
NEXT_PUBLIC_SITE=ai

// src/components/landing/LandingRouter.tsx
const site = process.env.NEXT_PUBLIC_SITE ?? "ai";
if (site === "ai") return <AILanding />;
```

---

### C2. Fix Global Metadata — Wrong Web3 Description on AI Site
**Impact:** Every page on ai.ssh-tech.xyz shows "We craft bulletproof and modern Web3 Dapps" in search results. Decimates CTR and misrepresents the business.
**File:** `src/app/layout.tsx` (lines 23–26)

**Fix:**
```tsx
export const metadata: Metadata = {
  title: {
    default: "SSH Tech — AI Systems Integration & Automation",
    template: "%s | SSH Tech",
  },
  description:
    "SSH Tech builds production-grade AI systems that automate high-impact workflows, integrate with your stack, and deliver measurable ROI. Assess. Build. Operate.",
  keywords: [
    "AI systems integration",
    "AI workflow automation",
    "enterprise AI consulting",
    "AI operational automation",
    "AI implementation",
  ],
  authors: [{ name: "Sahil Harriram" }],
  alternates: {
    canonical: "https://ai.ssh-tech.xyz",
  },
  openGraph: {
    type: "website",
    url: "https://ai.ssh-tech.xyz",
    siteName: "SSH Tech",
    images: [
      {
        url: "https://ai.ssh-tech.xyz/og-image.png", // create this image
        width: 1200,
        height: 630,
        alt: "SSH Tech — AI Systems Integration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sahil_harriram",
    creator: "@sahil_harriram",
  },
};
```

---

### C3. Fix /consulting Page — HTTP 500 Error
**Impact:** The page is completely inaccessible to users and crawlers. It's included in the sitemap, wasting crawl budget and signalling poor site health.
**File:** `src/app/consulting/page.tsx`

**Problem:** Page imports and renders Web3 landing components on the AI subdomain consulting page.

**Fix:** Either:
1. Replace with AI-specific consulting content, OR
2. Redirect to the homepage or a booking page, OR
3. Remove from sitemap and return 404 until page is ready

**Immediate stopgap (add to sitemap exclusion):**
```ts
// src/app/sitemap.xml/route.ts
// Remove "/consulting" from the allPaths array until fixed
const allPaths = ["/", "/proof-of-work", "/blog", "/tools-and-resources", ...slugs];
```

---

### C4. Add Per-Page Metadata to All Routes
**Impact:** 5 of 8 pages have no unique title or description. All fall back to the Web3 global description.
**Files:** Multiple page files listed below.

**Fix — `src/app/page.tsx`:**
```tsx
export const metadata: Metadata = {
  title: "SSH Tech — Production AI for Real Operations",
  description:
    "We integrate AI into your operational workflows. Fixed-fee diagnostics, production builds, and ongoing optimisation. Book a discovery call.",
  alternates: { canonical: "https://ai.ssh-tech.xyz" },
};
```

**Fix — `src/app/proof-of-work/page.tsx`:**
```tsx
export const metadata: Metadata = {
  title: "AI Case Studies & Portfolio",
  description:
    "See how SSH Tech has delivered production AI systems: 400% user growth, $5M+ assets monitored, $80K in grants won. Real metrics from real projects.",
  alternates: { canonical: "https://ai.ssh-tech.xyz/proof-of-work" },
};
```

**Fix — `src/app/blog/page.tsx`:**
```tsx
export const metadata: Metadata = {
  title: "AI Insights & Resources",
  description:
    "Practical insights on AI integration, workflow automation, and operational AI systems from the SSH Tech team.",
  alternates: { canonical: "https://ai.ssh-tech.xyz/blog" },
};
```

**Fix — `src/app/tools-and-resources/page.tsx`:**
```tsx
export const metadata: Metadata = {
  title: "AI Tools & Resources",
  description: "Curated AI tools, frameworks, and resources for building operational AI systems.",
  robots: { index: false, follow: false }, // noindex until content is added
  alternates: { canonical: "https://ai.ssh-tech.xyz/tools-and-resources" },
};
```

---

## 🟠 HIGH — Fix Within 1 Week

### H1. Add Organization + WebSite JSON-LD to Root Layout
**Impact:** Establishes your business entity in Google's Knowledge Graph. Required for brand search panels and AI citation eligibility.
**File:** `src/app/layout.tsx`

```tsx
// Add inside <head> via Next.js metadata or a Script component
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SSH Tech",
  url: "https://ai.ssh-tech.xyz",
  logo: "https://ai.ssh-tech.xyz/Logo.svg",
  founder: {
    "@type": "Person",
    name: "Sahil Harriram",
    url: "https://www.linkedin.com/in/sahil-harriram/",
    sameAs: [
      "https://x.com/sahil_harriram",
      "https://github.com/Sahil24-lab",
      "https://medium.com/@sahilharriram",
    ],
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: "https://ai.ssh-tech.xyz",
  },
  sameAs: [
    "https://x.com/sahil_harriram",
    "https://www.linkedin.com/in/sahil-harriram/",
    "https://github.com/Sahil24-lab",
    "https://medium.com/@sahilharriram",
  ],
};

// In layout.tsx RootLayout:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
/>
```

---

### H2. Add FAQPage JSON-LD to Homepage
**Impact:** Can trigger FAQ rich results in Google SERPs (expanded Q&A visible directly in search results). The 8 FAQ Q&A pairs in `AIFAQ.tsx` are ready to use.
**File:** Create `src/components/landing/ai-landing/faq/FAQSchema.tsx`

```tsx
// src/components/landing/ai-landing/faq/FAQSchema.tsx
import { faqs } from "./AIFAQ"; // export faqs array from AIFAQ

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
```

Add `<FAQSchema />` inside the homepage or `AILanding` server component (make it a server component or add to the page-level head via `generateMetadata`).

---

### H3. Fix Proof-of-Work Slug Metadata
**Impact:** "Project - playlobby" and "Details about playlobby" are useless titles/descriptions. These pages have strong case study content with real metrics that should rank.
**File:** `src/app/proof-of-work/[slug]/page.tsx`

**Fix:** Pull actual content from Contentful to generate meaningful metadata:
```tsx
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProofOfWorkEntry(slug); // fetch from Contentful

  if (!project) return { title: "Case Study — SSH Tech" };

  const title = project.fields?.title as string;
  const description = (project.fields?.summary ?? project.fields?.description) as string;
  const image = project.fields?.heroImage?.fields?.file?.url as string;

  return {
    title: `${title} — AI Case Study`,
    description: description?.slice(0, 160) ?? `How SSH Tech delivered production AI for ${title}.`,
    alternates: { canonical: `https://ai.ssh-tech.xyz/proof-of-work/${slug}` },
    openGraph: {
      images: image ? [`https:${image}`] : [],
    },
  };
}
```

---

### H4. Add Service Schema to Homepage
**Impact:** Tells search engines what services you provide. Enables rich results for service-based queries.
**File:** Add to `src/app/page.tsx` or `AILanding.tsx` (server component)

```tsx
const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "Service",
      position: 1,
      name: "Operational Automation",
      provider: { "@type": "Organization", name: "SSH Tech" },
      description:
        "Automate intake, classification, document handling, and routing so your team spends time on decisions, not admin.",
      serviceType: "AI Workflow Automation",
    },
    {
      "@type": "Service",
      position: 2,
      name: "Enterprise Knowledge Systems",
      provider: { "@type": "Organization", name: "SSH Tech" },
      description:
        "Turn internal docs, policies, CRM, and operations history into fast, reliable answers for every team.",
      serviceType: "AI Knowledge Management",
    },
    {
      "@type": "Service",
      position: 3,
      name: "AI Agents & Reporting",
      provider: { "@type": "Organization", name: "SSH Tech" },
      description:
        "Run multi-step workflows, unify cross-system data, and deliver leadership reporting with audit-ready controls.",
      serviceType: "AI Agent Implementation",
    },
  ],
};
```

---

### H5. Noindex Thin Content Pages
**Impact:** Removes low-quality pages from Google's index that waste crawl budget and could drag down overall site quality signals.

**`/tools-and-resources` — "Coming Soon" single h1:**
```tsx
// src/app/tools-and-resources/page.tsx
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};
```

**`/blog` — Zero posts, currently empty:**
Consider noindexing until at least 3 posts exist, OR remove from sitemap.

---

### H6. Fix Canonical Tags Across All Pages
**Impact:** Prevents duplicate content across subdomains (web3.ssh-tech.xyz, ai.ssh-tech.xyz sharing /blog, /proof-of-work, etc.).

Add to each page file:
```tsx
alternates: {
  canonical: `https://ai.ssh-tech.xyz${path}`,
}
```

---

### H7. Add OpenGraph Image (og:image)
**Impact:** Every LinkedIn, X, Slack, and WhatsApp share shows no preview. A strong og:image dramatically increases click-through from social shares.

**Action:**
1. Create `/public/og-image.png` at 1200×630px with SSH Tech branding and "Production AI for Real Operations" text
2. Add to global metadata in `layout.tsx` (see C2 fix above)
3. Add page-specific og:images for proof-of-work entries (use Contentful hero images)

---

## 🟡 MEDIUM — Fix Within 1 Month

### M1. Fix Homepage H1 Heading
**Impact:** No true `<h1>` exists on the page. The hero headline "Production AI for real operations." is rendered as `<h3>`. Search engines weight H1 heavily for keyword relevance.
**File:** `src/components/landing/ai-landing/hero/AIHero.tsx` (line 373)

```tsx
// Change from:
<Typography variant={isXLUp ? "h2" : "h3"} ...>
  Production AI for real operations.
</Typography>

// To:
<Typography variant={isXLUp ? "h2" : "h3"} component="h1" ...>
  Production AI for real operations.
</Typography>
```

Also ensure only one `<h1>` exists per page. Audit all sections for `<Typography variant="h1">` that should be `component="h2"`.

---

### M2. Fix Sitemap lastmod Bug
**Impact:** All pages show `lastmod` as the current request timestamp. Google may treat this as low-quality signal and ignore lastmod entirely, affecting crawl prioritisation.
**File:** `src/app/sitemap.xml/route.ts`

**Fix:** Use actual page modification dates instead of `new Date()`:
```ts
// For static pages, hardcode meaningful dates
const staticPages = [
  { path: "/", lastmod: "2026-02-15" },           // Update on content changes
  { path: "/proof-of-work", lastmod: "2026-01-20" },
  { path: "/blog", lastmod: "2026-01-01" },
];

// For Contentful pages, use sys.updatedAt
const entries = await client.getEntries({ content_type: "proofOfWork" });
const slugPages = entries.items.map((item) => ({
  path: `/proof-of-work/${item.fields.slug}`,
  lastmod: item.sys.updatedAt,
}));
```

---

### M3. Remove Non-Standard Directives from robots.txt
**Impact:** `Content-Signal` directives are unrecognized by Google, Bing, or any major crawler. Remove the clutter. If you want to block AI training crawlers, use proper agent-specific Disallow.
**File:** `src/app/robots.txt/route.ts`

```ts
// Replace current body with:
const body = [
  "User-agent: *",
  "Allow: /",
  `Sitemap: ${baseUrl}/sitemap.xml`,
  "",
  // Optional: block specific AI training crawlers
  "User-agent: GPTBot",
  "Disallow: /",
  "",
  "User-agent: CCBot",
  "Disallow: /",
].join("\n");
```

---

### M4. Add JetBrains Mono to next/font
**Impact:** JetBrains Mono is referenced throughout the codebase but loaded from system fonts. This can cause FOUT (Flash of Unstyled Text) and inconsistent rendering.
**File:** `src/app/layout.tsx`

```tsx
import { Montserrat, Poppins, JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

// Add to <html> className:
<html className={`${montserrat.variable} ${poppins.variable} ${jetbrainsMono.variable}`}>
```

Then update CSS references from `'JetBrains Mono', monospace` to `var(--font-jetbrains-mono), monospace`.

---

### M5. Fix Privacy Policy Link in Footer
**Impact:** Collecting emails via Supabase with no linked Privacy Policy is a GDPR/privacy compliance risk. Also a E-E-A-T trustworthiness signal.
**File:** `src/components/layout/footer/Footer.tsx` (lines 89–94)

```tsx
// Uncomment or fix:
<Link href="/privacy-policy" underline="hover" color="text.secondary">
  Privacy Policy
</Link>
```

If no Privacy Policy page exists, create a basic one at `src/app/privacy-policy/page.tsx`.

---

### M6. Fix backgroundAttachment: fixed
**Impact:** `background-attachment: fixed` disables GPU compositing on mobile browsers, forcing the CPU to repaint on every scroll frame. Degrades scroll performance and CLS/INP scores on mobile.
**File:** `src/components/layout/Layout.tsx` (line 25)

```tsx
// Remove or replace with a pseudo-element approach:
// Instead of background-attachment: fixed on body, use a fixed ::before pseudo-element
// Or just remove it — the gradient works fine without parallax scrolling
```

---

### M7. Add Case Study Schema to Proof-of-Work Pages
**Impact:** Enables rich results for portfolio pages. Signals to Google what type of content these are.
**File:** `src/app/proof-of-work/[slug]/page.tsx`

```tsx
const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: project.fields.title,
  creator: { "@type": "Organization", name: "SSH Tech", url: "https://ai.ssh-tech.xyz" },
  description: project.fields.summary,
  url: `https://ai.ssh-tech.xyz/proof-of-work/${slug}`,
  dateCreated: project.sys.createdAt,
  dateModified: project.sys.updatedAt,
  image: project.fields.heroImage?.fields?.file?.url
    ? `https:${project.fields.heroImage.fields.file.url}`
    : undefined,
};
```

---

### M8. Fix Cal.com Eager Preload
**Impact:** Cal.com embed preloads on every page mount including the Header component. This fires on every single page load, adding unnecessary network requests and JS execution, degrading INP.
**File:** `src/components/book-call-modal/BookCallModal.tsx`

```tsx
// Move Cal.com preload inside the modal open effect, not on mount:
useEffect(() => {
  if (!open) return; // Only preload when modal is actually opening
  Cal.preload("discovery-call");
}, [open]);
```

---

### M9. Add Security Headers
**Impact:** Missing security headers can affect crawlability, user trust signals, and some ranking factors.
**File:** `next.config.ts`

```ts
const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

export default {
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};
```

---

### M10. Improve Alt Text for Portfolio Images
**Impact:** Descriptive alt text improves image search rankings and accessibility (Core Web Vitals image audit criterion).
**File:** `src/app/proof-of-work/[slug]/page.tsx` and related components

```tsx
// Instead of:
alt={title}

// Use:
alt={`${title} — AI platform screenshot by SSH Tech`}

// For feature screenshots:
alt={`${title} — ${shot.fields.title ?? `Feature ${index + 1}`} interface`}
```

---

## 🟢 LOW — Backlog

### L1. Add llms.txt for AI Search Readiness
**Impact:** Emerging standard for AI crawlers to understand your site's content policy and structure. ChatGPT, Perplexity, and Claude-powered search use this for citation decisions.

Create `/public/llms.txt`:
```
# SSH Tech — AI Systems Integration
> Production AI for real operations. We integrate AI into your stack and automate high-impact workflows.

## Services
- [Operational Automation](/): Automate intake, classification, and routing workflows
- [Enterprise Knowledge Systems](/): Internal AI search and document Q&A
- [AI Agents & Reporting](/): Multi-step workflows and executive reporting

## Case Studies
- [PlayLobby](/proof-of-work/playlobby): 400% user growth via Web3 gaming platform
- [LlamaRisk](/proof-of-work/llamarisk): $5M DeFi risk monitoring system
- [Buzzkill](/proof-of-work/buzzkill): $80K in grants, award-winning GameFi

## Contact
Book a discovery call at https://ai.ssh-tech.xyz
```

---

### L2. Add Testimonial/Review Schema
**Impact:** Enables review rich results. Strengthens E-E-A-T trust signals.
**File:** `src/components/landing/ai-landing/testimonials/AITestimonials.tsx`

```tsx
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SSH Tech",
  review: testimonials.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.author },
    reviewBody: t.quote,
    reviewRating: {
      "@type": "Rating",
      ratingValue: t.rating,
      bestRating: 5,
    },
  })),
};
```

Also: Remove the developer comment `// [REPLACE WITH REAL TESTIMONIALS]` from production code.

---

### L3. Add Author Bio / Credentials Page
**Impact:** Google's E-E-A-T guidelines heavily weight demonstrated expertise. An author page with credentials, past projects, and publications strengthens all content on the site.

**Action:** Create `/about` or `/team` page with:
- Professional bio
- Experience highlights
- Links to Medium articles
- Case study metrics
- LinkedIn profile

---

### L4. Reduce Particle Animation Performance Cost
**Impact:** LatticeBg runs 90 particles with O(n²) connection checking (~4,005 comparisons) at 60fps. High CPU usage can degrade INP and battery life on mobile.
**File:** `src/components/landing/ai-landing/hero/LatticeBg.tsx`

```tsx
// Option A: Reduce particle count
const PARTICLE_COUNT = 50; // down from 90 (saves ~55% connection checks)

// Option B: Pause when not visible
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => { isVisible.current = entry.isIntersecting; },
    { threshold: 0.1 }
  );
  if (canvasRef.current) observer.observe(canvasRef.current);
  return () => observer.disconnect();
}, []);
```

---

### L5. Implement Keyword Strategy in Content
**Impact:** Zero deliberate keyword targeting currently. Adding primary keywords to headings and copy improves topical relevance signals.

**Primary targets:**
- "AI systems integration" → Add to H1 or H2
- "AI workflow automation consulting" → Add to meta description and services section
- "enterprise AI implementation" → Add to services descriptions
- "AI operational automation" → FAQ and pricing copy

**Blog content strategy:**
- "How to automate business workflows with AI" — High volume, informational
- "AI document processing guide" — Commercial investigation
- "What is AI knowledge management" — Top-of-funnel
- "AI agent implementation checklist" — Lead generation

---

### L6. Replace Hardcoded Blog Read Times
**Impact:** "12 min read" and "15 min read" are hardcoded — inaccurate for actual post length.
**File:** `src/app/blog/components/post-header/PostHeader.tsx` (line 84)

```tsx
// Calculate actual read time from content:
const wordsPerMinute = 200;
const wordCount = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
const readTime = Math.ceil(wordCount / wordsPerMinute);
return `${readTime} min read`;
```

---

### L7. Add Terms of Service Page
**Impact:** Required for GDPR compliance given the lead capture form. Also a trust signal.

Create `src/app/terms/page.tsx` with basic terms covering:
- Service description
- Engagement terms
- Data handling
- Limitation of liability

---

### L8. Improve Internal Linking to Sections
**Impact:** In-page navigation uses JavaScript `onClick` scroll events, not `<a>` tags. Crawlers can't follow these as links.

```tsx
// Replace:
<Button onClick={() => handleScroll("services")}>How We Work</Button>

// With:
<Button component="a" href="#services">How We Work</Button>
// Or use next/link for full page links
```

---

## Implementation Order Recommendation

```
Week 1 (Critical + blockers):
  ✅ C1 — Fix LandingRouter SSR
  ✅ C2 — Fix global metadata
  ✅ C3 — Fix /consulting page (redirect or remove from sitemap)
  ✅ C4 — Add per-page metadata to all 5 pages

Week 2 (Schema + quick wins):
  ✅ H1 — Organization + WebSite JSON-LD
  ✅ H2 — FAQPage JSON-LD
  ✅ H3 — Fix proof-of-work slug metadata
  ✅ H4 — Service schema
  ✅ H5 — Noindex thin content pages
  ✅ H6 — Canonical tags
  ✅ H7 — Create og:image and add Open Graph metadata

Week 3–4 (Performance + content):
  ✅ M1 — Fix homepage H1
  ✅ M2 — Fix sitemap lastmod
  ✅ M3 — Fix robots.txt
  ✅ M4 — Add JetBrains Mono to next/font
  ✅ M5 — Fix Privacy Policy link
  ✅ M6 — Remove backgroundAttachment: fixed
  ✅ M7 — Case study schema
  ✅ M8 — Fix Cal.com eager preload

Month 2+ (Growth + authority):
  📌 M9 — Security headers
  📌 M10 — Improve alt text
  📌 L1 — llms.txt
  📌 L2 — Review schema
  📌 L3 — Author/about page
  📌 L4 — Reduce particle animation
  📌 L5 — Keyword strategy in content + blog content
  📌 L6 — Fix hardcoded read times
  📌 L7 — Terms of Service page
  📌 L8 — Improve internal linking
```

---

## Expected Score Progression

| Milestone | Estimated Score |
|-----------|----------------|
| **Current (baseline)** | **37 / 100** |
| After Critical fixes (C1–C4) | ~52 / 100 |
| After High fixes (H1–H7) | ~65 / 100 |
| After Medium fixes (M1–M10) | ~74 / 100 |
| After Low fixes (L1–L8) | ~82 / 100 |

---

*Report generated by Claude Code SEO Audit System | Full findings in `FULL-AUDIT-REPORT.md`*
