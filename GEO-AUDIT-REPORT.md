# GEO-SEO Audit — digitaledgestudio.com

**Audit date:** 2026-05-03
**Site:** Digital Edge Studio — solo agency, web design + digital marketing, Wollongong NSW
**Business type detected:** Agency (Local Service variant — tradies/SMBs in Illawarra & Sydney)
**Pages discovered (sitemap):** 128 URLs across core / services / 21 location / 10 industry / 8 comparison / 31 blog / 11 portfolio

---

## Composite GEO Score: 62/100 — Fair (trending Good)

| Category | Weight | Score | Weighted | Status |
|---|---|---|---|---|
| AI Citability & Visibility | 25% | 66 | 16.5 | Good |
| Brand Authority Signals | 20% | 32 | 6.4 | Poor |
| Content Quality & E-E-A-T | 20% | 64 | 12.8 | Fair |
| Technical Foundations | 15% | 86 | 12.9 | Good |
| Structured Data | 10% | 84 | 8.4 | Good |
| Platform Optimization | 10% | 52 | 5.2 | Fair |
| **Composite** | | | **62.2** | **Fair** |

**Headline:** Strong technical and schema foundation already in place. The two real bottlenecks are **brand authority signals** (no third-party review/community presence) and **service-page citability** (thin /services/seo and collapsed FAQs). Fix those two and the composite jumps into the high-70s.

---

## Section 1 — AI Visibility (25%) — 66/100

| Sub-area | Score |
|---|---|
| AI Citability (passage-level) | 68/100 |
| AI Crawler Access | 100/100 |
| llms.txt | 75/100 |
| Brand Mentions | 32/100 |

**Strengths**
- robots.txt explicitly allows GPTBot, ClaudeBot, anthropic-ai, PerplexityBot, Google-Extended, Googlebot, Bingbot. Only thank-you pages disallowed (correct).
- `/llms.txt` is present, well-formed, includes a "Citation Guidance" line (uncommon, high-leverage).
- Strongest citation passages: AI-SEO stat block on homepage (88), WordPress vs DES comparison table on Wollongong page (85), pricing block (74).
- AI crawlers receive identical content to humans (no User-Agent gating, no `X-Robots-Tag` blocking).

**Weaknesses**
- **/services/seo is the weakest page (citability 55/100):** generic hero, no definitional answer, no timeline expectations, FAQ items don't render as standalone answer blocks.
- `/llms-full.txt` returns 404 — generating one would push llms.txt score to 90+.
- Several `llms.txt` links may not resolve (verify each URL).
- Brand-name confusion: multiple unrelated entities use "Digital Edge Studio" globally. LLMs may conflate without geographic context.

**Brand mentions breakdown:**
| Platform | Status |
|---|---|
| Wikipedia / Wikidata | Absent |
| Reddit | Absent |
| YouTube | Absent |
| LinkedIn (company) | Present (potential duplicate page risk) |
| Clutch / GoodFirms / DesignRush | Absent |
| Google Business Profile (5.0/15) | Strong signal |

---

## Section 2 — Platform Optimization (10%) — 52/100

| Platform | Score | Top Fix |
|---|---|---|
| Google AI Overviews | 58 | Question H2s + FAQPage JSON-LD on `/services/*`; expand collapsed FAQ answers |
| ChatGPT Web Search | 55 | Organization schema with `sameAs` array; build `/about` E-E-A-T |
| Perplexity AI | 42 | Reddit/forum mentions + outbound citations on blog posts |
| Google Gemini | 60 | Verify GBP completeness; LocalBusiness JSON-LD with `sameAs` to GBP |
| Bing Copilot | 48 | Verify Bing Webmaster Tools, install Microsoft Clarity, enable IndexNow |

**Strongest:** Google Gemini (60) — long-form content, strong topical clustering, location × industry × service matrix.
**Weakest:** Perplexity AI (42) — zero Reddit footprint, unattributed stats in blog posts.

**Recommended focus:** Double down on **Google Gemini and Google AI Overviews**. Buyer journey is overwhelmingly Google-native. Gemini already scores highest with the lowest fix cost — schema + GBP completeness + a YouTube short per service unlock it. AIO compounds with the existing 3,000-word location pages once question-based H2s and FAQ schema are in place.

---

## Section 3 — Technical Foundations (15%) — 86/100

| Sub-area | Score |
|---|---|
| Server-Side Rendering | 100 |
| Crawlability | 95 |
| Mobile Optimization | 95 |
| Core Web Vitals (estimated) | 75 |
| Meta Tags & Indexability | 85 |
| Security Headers | 55 |
| URL Structure | 90 |

**Single biggest GEO win already in place:** Next.js App Router serves 112,654 chars of fully rendered HTML on the homepage before any JS runs. AI crawlers see the complete page including hero, services, testimonials, FAQs.

**Critical gap — security headers (55/100):**
- HSTS present (excellent: 2-year + preload)
- **Missing:** CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- All five can be added in a single `next.config.js` edit.

**Other findings:**
- Homepage meta description is 178 chars (over 160 — will truncate in SERP).
- Missing `og:url` and `twitter:site` in root metadata.
- ~30 location pages risk being treated as templated/doorway pages if copy similarity >70%. Each needs unique H1 + ≥150 words of suburb-specific content + different testimonial.
- No CCBot or Bytespider explicit rules in robots.txt (falls through to wildcard).
- Homepage canonical missing trailing slash (sitemap is inconsistent).

---

## Section 4 — Content Quality & E-E-A-T (20%) — 64/100

| Dimension | Score | Headline |
|---|---|---|
| Experience | 18/25 | Named clients with specific numbers; missing dated case-study artifacts |
| Expertise | 14/25 | Author byline + LinkedIn good; no credentials, no dedicated author page |
| Authoritativeness | 12/25 | "5.0 verified" + 30+ businesses; **zero external citations from blog content** |
| Trustworthiness | 18/25 | HTTPS, real phone, address, pricing transparency; **ABN not visible anywhere** |

**Content quality:** 70/100 — substantive long-form pages (homepage 2,800w, Wollongong 3,200w, blog avg 2,000w). Readability is appropriate for tradie/SMB audience.

**About page is the weakest content asset on the site** — only ~350 words. This weakens Expertise scoring across every page that links to it.

**AI content detection:** Low-to-moderate risk. Hybrid human + AI drafting. Voice is coherent and locally grounded. No "delve / tapestry / digital landscape" red flags. Some AI-assisted tells ("Picture this", "The pattern is clear") balanced by genuine local detail.

**Topical authority gaps:**
- Google Ads cluster only has 3 posts (core service)
- No CRO / analytics content
- No accountant/legal/healthcare industry pillars to match the homepage's claimed verticals
- Case studies scattered as testimonial blurbs, not deep write-ups (no `/case-studies` hub)

---

## Section 5 — Structured Data (10%) — 84/100

Comprehensive, well-architected schema layer rendered server-side via [LocalBusinessSchema.tsx](src/components/LocalBusinessSchema.tsx) (global) plus per-view JSON-LD blocks.

**Schemas present:** LocalBusiness (with AggregateRating, sameAs, OfferCatalog), WebSite + SearchAction, Service, FAQPage, BreadcrumbList, Person (founder, no image — privacy preference respected), BlogPosting (with `speakable`, `dateModified`, `wordCount`, ImageObject), Organization, AggregateOffer, ImageObject.

**Issues:**
1. **Duplicate `@id="#business"`** — Pages with their own LocalBusiness/Organization block also receive the global one from `app/layout.tsx`. Causes duplicate emissions on homepage and `/about`.
2. **HowTo schema on homepage** — Removed from Google rich results Sep 2023. Adds page weight with no SEO benefit.
3. **WebSite SearchAction target broken** — Points to `/blog?q={search_term_string}` but no blog search endpoint exists.
4. **`speakable` only on BlogPosting** — Missing on FAQPage and homepage hero answers.
5. **Person `sameAs` thin** — Only 2 entries. Wikidata, Crunchbase, GitHub absent.

`Person` schema correctly has **no `image` property** (privacy preference verified).

---

## Prioritized Action Plan

### Quick Wins — ship this week (each <1 hour)

| # | Action | File / Where | Impact |
|---|---|---|---|
| 1 | Add 5 security headers (CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy) via `headers()` async function | `next.config.js` (or `.mjs`) | +23 weighted technical pts |
| 2 | Fix duplicate schema `@id="#business"` — skip global LocalBusinessSchema on pages that emit their own, or de-dup at view level | [LocalBusinessSchema.tsx](src/components/LocalBusinessSchema.tsx), [app/layout.tsx](app/layout.tsx) | Removes Google duplication flag |
| 3 | Add `speakable` property to FAQPage emission | [src/components/FAQ.tsx](src/components/FAQ.tsx) | Voice/AI ready FAQs |
| 4 | Remove HowTo schema from homepage (deprecated rich result) | [src/views/Index.tsx](src/views/Index.tsx) | -1KB, no SEO loss |
| 5 | Fix or remove WebSite SearchAction (`/blog?q=` doesn't search) | Schema source where SearchAction is emitted | Removes broken declared action |
| 6 | Trim homepage meta description to 150–160 chars | [app/page.tsx](app/page.tsx) `metadata` export | Stops SERP truncation |
| 7 | Add `og:url` + `twitter:site` to root metadata | [app/layout.tsx](app/layout.tsx) | Cleaner social/AI previews |
| 8 | Add ABN + business registration to footer and About page | Footer component + [src/views/About.tsx](src/views/About.tsx) | Critical AU SMB trust signal |
| 9 | Standardize homepage canonical trailing slash | [app/page.tsx](app/page.tsx) + [app/sitemap.ts](app/sitemap.ts) | Pick one form sitewide |
| 10 | Generate `/llms-full.txt` (concatenated markdown of homepage + top 10 pages) | New file at site root | llms.txt 75 → 90+ |
| 11 | Add explicit Allow lines for OAI-SearchBot, CCBot, Applebot-Extended, Amazonbot | [app/robots.ts](app/robots.ts) | Signal hygiene |

### Medium-term — ship this month

| # | Action | Effort | Impact |
|---|---|---|---|
| 12 | **Rewrite `/services/seo`** as citation-ready: 2-sentence definition, results-timeline table (Month 1-3 / 4-6 / 7-12), 3 quantified case results, expanded FAQ with 2-3 sentence answers wrapped in FAQPage schema | 3–4 hrs | Page citability 55 → 80; biggest single page win |
| 13 | Replicate the citation-ready pattern across `/services/web-design` and `/services/google-ads` | 4–6 hrs | Lifts AIO + ChatGPT scores |
| 14 | **Expand About page** from ~350 to 800–1,200 words: years in agencies, "why I started this", 3 named clients with linked case studies, scope of trusted developer team | 2 hrs | Lifts every page's Expertise score |
| 15 | **Build `/case-studies` hub** with 3–5 deep write-ups (Volt Current, Coastal Physio, Precision Plumbing, Bright & Clean) — starting state, work done, timeline, GA4 numbers, dated outcome, client quote | 1–2 days | Converts scattered metrics into Experience artifacts |
| 16 | **De-duplicate location pages** — unique H1 + ≥150 words suburb-specific copy + different testimonial per page | 4–6 hrs | Prevents Google folding into single canonical |
| 17 | Add external citations to top 10 blog posts (Google Search Central, BrightLocal, Statista, ABS) — 2–3 outbound authority links per post | 2–3 hrs | Lifts Authoritativeness + Perplexity citability |
| 18 | Verify Bing Webmaster Tools + install Microsoft Clarity + enable IndexNow (Vercel one-click) | 30 min | Bing Copilot 48 → 65 |
| 19 | Run PageSpeed Insights field data on homepage + Wollongong page (mobile). If INP >200ms, audit Framer Motion in [ScrollReveal.tsx](src/components/ScrollReveal.tsx) | 30 min audit | Validates CWV estimate |

### Strategic — 60-day initiatives

| # | Action | Why it matters |
|---|---|---|
| 20 | **Build third-party agency review presence**: Clutch.co, GoodFirms, DesignRush. Aim for 5+ reviews on each in 60 days | Single biggest brand-authority lift; moves Brand Mentions 32 → ~55. AI engines heavily cite Clutch. |
| 21 | **Reddit + Quora answer cadence**: 5 substantive answers/month in r/SmallBusinessAU, r/Wollongong, r/AusFinance, Quora topics. Drop the brand contextually 1 in 4 answers | Perplexity weights Reddit heavily; ChatGPT indexes both |
| 22 | **YouTube channel**: 1 short per location/service page (60–90s). Embed back into the relevant page | Boosts Gemini score; new Google search surface; entity disambiguation |
| 23 | Create Wikidata item for Digital Edge Studio + add to Person and Organization `sameAs` arrays | Disambiguates from unrelated entities globally; strengthens KG signals |
| 24 | Expand topical authority: Google Ads cluster (currently 3 posts → target 8), industry pillars for accountants/legal/healthcare | Closes content gaps that conflict with claimed verticals |

---

## Files to Edit (consolidated)

- `next.config.js` — security headers
- [app/layout.tsx](app/layout.tsx) — root metadata, og:url/twitter:site, schema dedup
- [app/page.tsx](app/page.tsx) — homepage metadata (description length, canonical)
- [app/robots.ts](app/robots.ts) — explicit AI bot allows
- [app/sitemap.ts](app/sitemap.ts) — trailing-slash consistency
- [src/components/LocalBusinessSchema.tsx](src/components/LocalBusinessSchema.tsx) — dedup logic
- [src/components/FAQ.tsx](src/components/FAQ.tsx) — `speakable` on FAQPage
- [src/views/Index.tsx](src/views/Index.tsx) — remove HowTo
- [src/views/About.tsx](src/views/About.tsx) — expand to 800–1,200 words; add ABN
- [src/views/](src/views/) — location page de-duplication audit
- New: `/llms-full.txt`, `/case-studies` hub

---

## What's Already Good (don't break it)

1. SSR delivery — AI crawlers see fully rendered HTML
2. robots.txt with explicit AI bot allows
3. `llms.txt` exists and is well-formed
4. Comprehensive JSON-LD schema layer
5. HSTS with preload + 2-year max-age
6. Strong topical clustering (location × industry × service matrix)
7. Author byline + dates + dateModified on blog posts
8. Real client names with quantified results in testimonials
9. Person schema correctly omits founder image (privacy preference honored)
10. Transparent pricing on the homepage and pricing page

---

## Methodology

Audit ran 5 parallel subagents against the live site (no cached data):
1. **AI Visibility** — citability passage scoring, robots.txt + header analysis, llms.txt validation, brand-mention scan across Reddit/YouTube/Wikipedia/LinkedIn/Quora/agency directories
2. **Platform Optimization** — readiness scoring for Google AIO, ChatGPT Web Search, Perplexity, Gemini, Bing Copilot
3. **Technical SEO** — SSR, crawlability, indexability, security headers, CWV estimates, mobile, URL structure
4. **Content & E-E-A-T** — Experience, Expertise, Authoritativeness, Trustworthiness; readability; AI-content patterns; topical authority
5. **Schema** — JSON-LD detection, validation, completeness, GEO-relevant types, deprecated/restricted schema audit

Composite weights per the GEO methodology: Citability 25% / Brand 20% / Content 20% / Technical 15% / Schema 10% / Platforms 10%.

**Next recommended commands:**
- `/geo report-pdf digitaledgestudio.com` — generate client-ready PDF version
- `/geo compare digitaledgestudio.com` (in 30 days, after fixes ship) — track delta
