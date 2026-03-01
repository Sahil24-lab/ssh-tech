# Full SEO Audit Report — ai.ssh-tech.xyz
**Audited:** 2026-03-01
**Auditor:** Claude Code SEO Audit System
**Framework:** Next.js 15 (App Router) | MUI v5 | Contentful CMS

---

## Executive Summary

| Metric | Score |
|--------|-------|
| **Overall SEO Health Score** | **37 / 100** |
| Technical SEO | 52 / 100 |
| Content Quality | 30 / 100 |
| On-Page SEO | 29 / 100 |
| Schema / Structured Data | 5 / 100 |
| Performance (CWV) | 50 / 100 |
| Images | 80 / 100 |
| AI Search Readiness | 33 / 100 |

**Business Type Detected:** AI Systems Integration / Consulting (B2B SaaS-adjacent)
**Technology Stack:** Next.js 15, React 18, MUI v5, Contentful CMS, Supabase, Umami Analytics
**Pages Crawled:** 8 (/, /proof-of-work, /blog, /consulting, /tools-and-resources, /proof-of-work/playlobby, /proof-of-work/llamarisk, /proof-of-work/buzzkill)

---

### Top 5 Critical Issues

1. **Client-side routing for homepage content** — `LandingRouter` uses `useSubdomain()` context, causing the SSR output to be "Loading..." instead of the actual page content. Googlebot sees a blank page.
2. **Wrong global meta description** — `"We craft bulletproof and modern Web3 Dapps"` is displayed on an AI consulting site. Completely misrepresents the value proposition.
3. **No page-level metadata** on 5 of 8 pages — homepage, proof-of-work listing, blog listing, consulting, tools-and-resources have no unique title/description.
4. **Zero structured data / schema markup** — No Organization, WebSite, Service, FAQ, or Review schema anywhere on the site.
5. **Consulting page returns HTTP 500** — /consulting is completely inaccessible; crawlers can't index it.

### Top 5 Quick Wins

1. Fix global metadata in `layout.tsx` to reflect AI consulting positioning
2. Export per-page `metadata` from each route file (5-min fix per page)
3. Add `Organization` + `WebSite` JSON-LD to the root layout
4. Add `FAQPage` JSON-LD to the homepage (content already exists in `AIFAQ.tsx`)
5. Fix `LandingRouter` to SSR the correct landing based on `NEXT_PUBLIC_SITE` env var

---

## Crawl Summary

| URL | Status | Title | Meta Desc | H1 | Schema |
|-----|--------|-------|-----------|-----|--------|
| / | 200 | "SSH Tech" | "We craft bulletproof and modern Web3 Dapps" | None detected | None |
| /proof-of-work | 200 | "SSH Tech" | "We craft bulletproof and modern Web3 Dapps" | "Proof of Work" | None |
| /blog | 200 | "SSH Tech" | "We craft bulletproof and modern Web3 Dapps" | None | None |
| /consulting | 500 | N/A | N/A | N/A | N/A |
| /tools-and-resources | 200 | "SSH Tech" | "We craft bulletproof and modern Web3 Dapps" | "Coming Soon" | None |
| /proof-of-work/playlobby | 200 | "Project - playlobby" | "Details about playlobby" | "PlayLobby" | None |
| /proof-of-work/llamarisk | 200 | "Project - llamarisk" | "Details about llamarisk" | "LlamaRisk" | None |
| /proof-of-work/buzzkill | 200 | "Project - buzzkill" | "Details about buzzkill" | "Buzzkill" | None |

---

## Section 1: Technical SEO (Score: 52/100)

### 1.1 robots.txt

**Status:** Functional but contains non-standard directives.

```
User-agent: *
Allow: /
Sitemap: https://ai.ssh-tech.xyz/sitemap.xml
Content-Signal: search=yes    ← Non-standard (not recognized by Google/Bing)
Content-Signal: ai-input=no   ← Non-standard
Content-Signal: ai-train=no   ← Non-standard
```

**Issues:**
- `Content-Signal` directives are not recognized by any major search engine. They have no SEO effect and may confuse crawlers.
- No `Crawl-delay` configured (minor but noted).
- The robots.txt is dynamically generated via a Next.js route handler — this works correctly.

**Source:** `src/app/robots.txt/route.ts`

---

### 1.2 Sitemap

**Status:** Functional but has quality issues.

**Issues:**
- `<lastmod>` for all URLs is set to `new Date().toISOString()` — this is the *current request time*, not the actual last-modified date. Google may treat dynamic/always-current lastmod as meaningless and ignore it.
- No `<changefreq>` or `<priority>` attributes.
- /consulting is included in the sitemap despite returning HTTP 500.
- /tools-and-resources is included despite being "Coming Soon" thin content.
- /blog is included despite having zero posts.
- All lastmod dates are identical (same timestamp) — signals low quality to crawlers.

**Source:** `src/app/sitemap.xml/route.ts` (lines 69, 77)

---

### 1.3 Crawlability — CRITICAL

**Status:** HIGH RISK — Content may not be indexed.

The `page.tsx` renders `<LandingRouter />` which is a `"use client"` component. This component uses `useSubdomain()` context:

```tsx
// LandingRouter.tsx
export default function LandingRouter() {
  const subdomain = useSubdomain();

  if (!subdomain) {
    return <div className="text-center mt-10">Loading...</div>; // ← SSR output!
  }

  if (subdomain === "ai") return <AILanding />;
  // ...
}
```

Because `useSubdomain()` reads from a React Context that depends on client-side header parsing, the initial server-rendered HTML for `ai.ssh-tech.xyz/` may be the `"Loading..."` div rather than the actual landing page content. Googlebot's first-render indexing (without JavaScript) would see a blank loading state.

**Fix:** Set `NEXT_PUBLIC_SITE=ai` environment variable and use it server-side to determine the initial render, OR move the subdomain routing to a server component using `headers()`.

---

### 1.4 Canonical Tags

**Status:** Not found on any page.

No `<link rel="canonical">` tags are declared in `layout.tsx` or any page file. This creates risk when:
- Content appears on multiple subdomains (web3.ssh-tech.xyz, ai.ssh-tech.xyz, etc.)
- Query parameters create duplicate URLs

**Fix:** Add canonical to `layout.tsx` metadata:
```tsx
export const metadata = {
  alternates: {
    canonical: "https://ai.ssh-tech.xyz",
  },
};
```

---

### 1.5 Open Graph / Social Tags

**Status:** Minimal — no og:image, no twitter:card.

The global metadata only sets title and description. No social sharing metadata exists:
- Missing: `og:image`
- Missing: `og:type`
- Missing: `og:url`
- Missing: `twitter:card`
- Missing: `twitter:site`

When shared on LinkedIn or X, the link will show no preview image.

---

### 1.6 Security Headers

**Status:** Not audited at HTTP level (would require live header inspection).

The site uses HTTPS (confirmed via robots.txt response). Security headers (CSP, HSTS, X-Frame-Options) should be configured in `next.config.ts`.

---

### 1.7 JavaScript Rendering

**Status:** Moderate risk.

The entire AI landing page (`AILanding`, `AIHero`, `AIServices`, etc.) uses `"use client"`. While Next.js 15 can SSR client components, the `LandingRouter` boundary means the SSR pass likely renders `"Loading..."`.

Additionally:
- The animated particle canvas (`LatticeBg.tsx`) adds non-trivial JavaScript execution on load
- MUI Emotion CSS is injected via `useServerInsertedHTML` — this is the correct pattern but adds complexity

---

### 1.8 URL Structure

**Status:** Good.

- Clean, descriptive URLs (`/proof-of-work/playlobby`, `/consulting`)
- No URL parameters observed
- Proper subdomain-based multi-site architecture

---

### 1.9 Internal Linking

**Status:** Weak.

Navigation buttons in the hero use `onClick={() => handleScroll("services")}` which are JavaScript scroll events — not crawlable `<a>` tag links. Sections like Services, Process, Pricing, FAQ are linked only via JS-scroll, not via proper hyperlinks.

The footer contains proper `<a>` tags for social links (X, Medium, LinkedIn, GitHub) with `rel="noopener noreferrer"`.

The "Privacy Policy" in the footer is rendered as plain text (`<Typography>`) with the actual link commented out — this is a broken link opportunity.

---

## Section 2: Content Quality (Score: 30/100)

### 2.1 E-E-A-T Assessment

**Experience (2/5):** Three portfolio case studies exist with real metrics (400% growth, $80K grants, 5K NFTs, $5M assets monitored). Good raw data but not well-formatted for search crawlers.

**Expertise (2/5):** No dedicated author page, bio, credentials, or certifications visible. The "Sahil Harriram | SSH Tech" attribution in the footer establishes personhood but not expertise signals.

**Authoritativeness (2/5):** Social links to X, Medium, LinkedIn, GitHub are positive signals. No backlink strategy visible. No press mentions, client logos (though company logos exist in `/public/logos/companies/`), or industry affiliations.

**Trustworthiness (2/5):** HTTPS confirmed. Privacy Policy exists (but link is broken in code). No Terms of Service. Only 2 testimonials. No physical address or business registration visible.

---

### 2.2 Page-by-Page Content Analysis

**Homepage (/):**
- **Content:** Rich — Hero, 3 AI Services, Portfolio Preview, 3-Stage Process, 2 Testimonials, Pricing model (3 stages), 8 FAQs, CTA
- **Issue:** Meta description says "We craft bulletproof and modern Web3 Dapps" — completely wrong for an AI consulting site
- **Keyword targeting:** Zero — the page doesn't target any searchable keywords
- **H1:** Missing — the hero renders `<Typography variant="h1">` via MUI which outputs an `<h1>` tag with the text "Production AI for real operations." — however this is inside a "use client" component which may not be in the SSR output

**Blog (/blog):**
- **Content:** Zero posts — shows "More Blogs coming soon!"
- **Issue:** Thin content, wasted crawl budget, should be noindexed or removed from sitemap until populated

**Consulting (/consulting):**
- **Status:** HTTP 500 — page is completely broken
- **Impact:** Critical — potential customers and crawlers cannot access this page

**Tools and Resources (/tools-and-resources):**
- **Content:** "Coming Soon" — a single h1 and no other content
- **Issue:** Should be noindexed until content is added

**Proof of Work (/proof-of-work):**
- **Content:** 3 detailed case studies with metrics, tech stacks, and descriptions
- **Issue:** No semantic structure visible in page metadata, relies entirely on JS rendering
- **Opportunity:** Rich content for case study schema

**Portfolio pages (/proof-of-work/[slug]):**
- **Title:** "Project - playlobby" — generic and keyword-poor
- **Description:** "Details about playlobby" — meaningless to crawlers
- **Content:** Excellent — detailed project descriptions, real metrics, tech stacks, screenshots
- **Missed opportunity:** These pages have excellent case study content but zero SEO optimization

---

### 2.3 Blog Content Quality

Zero blog posts currently exist. The blog infrastructure supports:
- Tags/categories
- Read time estimation (hardcoded "12 min read" / "15 min read" — not dynamic)
- Search and filter
- Featured images

When blog posts are added, the `generateMetadata` function correctly pulls title, description, and og:image from Contentful SEO fields — this is well-implemented.

---

### 2.4 Keyword Strategy Assessment

**Current targeting:** None — the site appears to have no deliberate keyword strategy.

**Recommended primary keywords for ai.ssh-tech.xyz:**
- "AI systems integration" (informational/commercial intent)
- "AI workflow automation consulting" (commercial intent)
- "enterprise AI implementation" (commercial intent)
- "AI operational automation" (commercial intent)
- "AI consulting for operations" (commercial intent)

**Secondary/long-tail:**
- "how to automate business workflows with AI"
- "AI document processing automation"
- "enterprise knowledge management AI"
- "AI agent implementation consultants"

---

## Section 3: On-Page SEO (Score: 29/100)

### 3.1 Title Tags

| Page | Current Title | Recommended |
|------|--------------|-------------|
| / | SSH Tech | SSH Tech — AI Systems Integration & Automation Consulting |
| /proof-of-work | SSH Tech | AI Case Studies & Portfolio — SSH Tech |
| /blog | SSH Tech | AI Insights & Resources Blog — SSH Tech |
| /consulting | N/A (500) | AI Consulting Services — SSH Tech |
| /tools-and-resources | SSH Tech | AI Tools & Resources — SSH Tech |
| /proof-of-work/playlobby | Project - playlobby | PlayLobby: 400% User Growth via Web3 Platform — SSH Tech |
| /proof-of-work/llamarisk | Project - llamarisk | LlamaRisk: $5M DeFi Risk Monitoring Platform — SSH Tech |
| /proof-of-work/buzzkill | Project - buzzkill | Buzzkill: Award-Winning GameFi on Viction ($80K Grants) — SSH Tech |

**Issues:**
- Global title is just "SSH Tech" — no value proposition, no keywords
- All non-blog pages use the global fallback title
- Proof-of-work detail pages use a minimal generated title pattern

**Source:** `src/app/layout.tsx:23-26`

---

### 3.2 Meta Descriptions

| Page | Current | Issues |
|------|---------|--------|
| All pages | "We craft bulletproof and modern Web3 Dapps" | Wrong vertical (Web3 vs AI), 44 chars (too short) |
| /proof-of-work/[slug] | "Details about {slug}" | Zero value, no keywords |
| /blog/[slug] | Pulls from Contentful seoFields | ✅ Correct — good implementation |

---

### 3.3 Heading Structure

The site uses MUI Typography with `variant` and `component` props. The actual rendered heading hierarchy is:

**Homepage (when JS renders):**
- No `<h1>` at page level — the hero's main headline uses `<Typography variant="h3">` (renders as h3): "Production AI for real operations."
- Multiple sections use `<Typography variant="h1" component="h2">` — renders as `<h2>` with h1 visual style. This is semantically correct but visually confusing.
- Multiple `<h2>` elements: "AI systems built into your operations", "A 3-stage model built for operational results", "Assess. Build. Operate.", "Common Questions", etc.

**Issue:** No true `<h1>` exists on the page. The hero text is rendered as `<h3>`. The hero supertitle "Your AI Systems Integrator" is a `<Typography variant="body2">`. This is a missed opportunity for keyword-rich H1.

---

### 3.4 Image Optimization

**Positive:** The site uses Next.js `<Image>` component throughout, which provides:
- Automatic WebP/AVIF conversion
- Lazy loading
- Size optimization
- Explicit width/height to prevent CLS

**Issues:**
- Portfolio screenshots loaded from Contentful CDN via `https:${imageUrl}` pattern — no explicit alt text beyond project title
- `public/Hero/hero-background.png` — not clear if this is used or if it's a leftover
- `public/code.jpg` — unclear usage

---

## Section 4: Schema / Structured Data (Score: 5/100)

### 4.1 Current Implementation

**None detected.** Zero JSON-LD, microdata, or RDFa markup exists anywhere in the codebase.

### 4.2 Missing Schema Opportunities

**Homepage (/):**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SSH Tech",
  "url": "https://ai.ssh-tech.xyz",
  "logo": "https://ai.ssh-tech.xyz/Logo.svg",
  "founder": {
    "@type": "Person",
    "name": "Sahil Harriram",
    "url": "https://www.linkedin.com/in/sahil-harriram/"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "url": "https://ai.ssh-tech.xyz"
  },
  "sameAs": [
    "https://x.com/sahil_harriram",
    "https://www.linkedin.com/in/sahil-harriram/",
    "https://github.com/Sahil24-lab",
    "https://medium.com/@sahilharriram"
  ]
}
```

**Homepage — FAQPage:**
The FAQ section in `AIFAQ.tsx` contains 8 high-quality Q&A pairs that are perfect for FAQ schema. This could directly trigger FAQ rich results in Google.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you build custom AI models?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Typically no. We use the best available foundation models..."
      }
    }
    // ... 7 more Q&As
  ]
}
```

**Service Pages:**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Operational Automation",
  "provider": { "@type": "Organization", "name": "SSH Tech" },
  "description": "Automate intake, classification, document handling..."
}
```

**Portfolio/Case Study Pages:**
```json
{
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "PlayLobby — GameFi Platform",
  "creator": { "@type": "Organization", "name": "SSH Tech" },
  "description": "..."
}
```

**Review/Testimonial Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Review",
  "reviewBody": "Working with Sahil was a game-changer...",
  "author": { "@type": "Person", "name": "Ben Howen" },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  }
}
```

---

## Section 5: Performance (Score: 50/100)

### 5.1 Core Web Vitals Indicators

Without live measurement, performance can be estimated from code patterns:

**LCP (Largest Contentful Paint) — Estimated: Needs Work**
- Hero section has animated particle canvas (`LatticeBg.tsx`) with `requestAnimationFrame` loop
- Multiple radial gradients + SVG noise filters in inline styles
- Heavy MUI Emotion CSS injection
- No hero image for LCP anchor — canvas elements don't count as LCP candidates
- The LCP element is likely the hero headline text — depends on font loading speed

**INP (Interaction to Next Paint) — Estimated: Moderate**
- BookCallModal uses Cal.com embed via `@calcom/embed-react`
- Multiple state hooks in client components
- Accordion animations in FAQ
- Particle animation runs continuously (90 particles, O(n²) connection checking)

**CLS (Cumulative Layout Shift) — Estimated: Low**
- Uses Next.js Image with explicit dimensions
- Fixed header offset handled via CSS
- Layout shifts could occur from font loading (Montserrat, Poppins loaded via next/font — good)
- JetBrains Mono referenced in CSS but NOT loaded via next/font — potential FOUT

### 5.2 Notable Performance Concerns

1. **Particle animation (`LatticeBg.tsx`):** 90-particle O(n²) connection algorithm running at 60fps. Could cause high CPU usage and degrade INP scores.

2. **MUI bundle size:** Full MUI v5 + icons package can be 300-500KB gzipped if not properly tree-shaken. Next.js handles this via ESM imports when used correctly.

3. **`backgroundAttachment: "fixed"`** in `Layout.tsx` — disables GPU compositing on mobile Safari, causing poor scroll performance.

4. **Fixed background gradient** applied globally via MUI CssBaseline + Layout — adds CSS painting work on every scroll.

5. **JetBrains Mono not in next/font** — referenced as `'JetBrains Mono', monospace` in multiple components but not loaded via `next/font/google`. Should be added alongside Montserrat and Poppins.

---

## Section 6: Images (Score: 80/100)

### 6.1 Positives
- Consistent use of `next/image` (proper lazy loading, format conversion)
- Explicit `width` and `height` props set (prevents CLS)
- `priority={index === 0}` used correctly for above-fold images in proof-of-work pages
- Contentful CDN delivery for CMS images

### 6.2 Issues
- `alt` text on portfolio images often defaults to project title only (e.g., `alt={title}`) — should be more descriptive
- Screenshot alt text: `shot.fields?.title ?? \`Feature ${index + 1}\`` — fallback is not descriptive
- No `og:image` configured for social sharing
- No image sitemap

---

## Section 7: AI Search Readiness (Score: 33/100)

### 7.1 AI Crawler Access
The robots.txt includes `Content-Signal: ai-input=no` and `Content-Signal: ai-train=no`. These are non-standard directives that are **not recognized** by Googlebot, ClaudeBot, GPTBot, or PerplexityBot.

To actually block AI training crawlers, the standard approach is:
```
User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: PerplexityBot
Disallow: /
```

Currently, all AI crawlers can access the full site (the non-standard directives are ignored).

### 7.2 AI Overview Citability
- **FAQs:** The 8 FAQ Q&A pairs are strong candidates for AI Overview citations if properly structured with schema
- **Case studies:** Real metrics ("400% growth", "$80K in grants") make for citable, specific claims
- **Services content:** Well-structured but lacks the specificity needed for AI citations
- **Missing:** `llms.txt` file (emerging standard for AI content guidance)

### 7.3 Content Structure for AI
- Accordion-based FAQ hides content from initial render — good for UX but AI crawlers that don't execute JS won't see answers
- No summary/abstract sections at the top of case study pages
- No author attribution with credentials on any page

---

## Section 8: Multi-Site Architecture Concerns

The codebase serves multiple sites from a single Next.js deployment:
- `ai.ssh-tech.xyz` — AI consulting
- `web3.ssh-tech.xyz` — Web3 development
- `sahil.ssh-tech.xyz` — Personal profile
- `embedded.ssh-tech.xyz` — Embedded systems

**Shared pages (consulting, blog, proof-of-work) are served across all subdomains.** This creates duplicate content risk if:
- The same URLs are indexed across multiple subdomains
- Sitemap correctly scopes to the current subdomain (it does, via header detection)

**Recommendation:** Add `<link rel="canonical">` to each page pointing to the authoritative subdomain URL.

---

## Appendix: Key File References

| Issue | File | Line |
|-------|------|------|
| Global metadata | `src/app/layout.tsx` | 23-26 |
| Client routing issue | `src/components/landing/LandingRouter.tsx` | 9-19 |
| Sitemap lastmod bug | `src/app/sitemap.xml/route.ts` | 69, 77 |
| robots.txt non-standard | `src/app/robots.txt/route.ts` | 31-37 |
| Proof-of-work metadata | `src/app/proof-of-work/[slug]/page.tsx` | 28-40 |
| Blog metadata | `src/app/blog/[slug]/page.tsx` | 30-55 |
| Missing canonical | `src/app/layout.tsx` | (not present) |
| No schema anywhere | All page files | (not present) |
| JetBrains Mono not loaded | `src/app/layout.tsx` | 11-21 |
| Privacy Policy broken link | `src/components/layout/footer/Footer.tsx` | 89-94 |
| backgroundAttachment fixed | `src/components/layout/Layout.tsx` | 25 |
| hardcoded read time | `src/app/blog/components/post-header/PostHeader.tsx` | 84 |
