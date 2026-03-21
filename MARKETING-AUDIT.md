# Marketing Audit: Digital Edge Studio
**URL:** https://digitaledgestudio.com
**Date:** 2026-03-21
**Business Type:** Agency / Services (Local Web Design & Digital Marketing)
**Overall Marketing Score: 66/100 (Grade: C)**

---

## Executive Summary

Digital Edge Studio scores **66 out of 100** — an average marketing grade that reflects a site with strong technical SEO foundations but significant trust and growth gaps holding back conversions.

**Biggest strength:** The technical SEO infrastructure is excellent (78/100). Server-rendered metadata via Next.js App Router, comprehensive JSON-LD schema across all page types (LocalBusiness, FAQPage, BreadcrumbList, BlogPosting, Service), clean URL architecture, a well-structured sitemap, and forward-thinking robots.txt that allows AI crawlers (GPTBot, ClaudeBot, PerplexityBot). The conversion optimization is also solid (74/100) — transparent pricing with psychological anchoring, strong CTAs, and multiple conversion paths (contact form, WhatsApp, Calendly, lead magnet).

**Biggest gap:** Brand trust is the weakest link at **44/100**. Only 5 Google reviews for a business claiming "30+ websites delivered," no verifiable portfolio links to live client websites, contradictory messaging about team location (claiming "no overseas handoffs" while disclosing European-based developers), and zero third-party validation (no Clutch profile, no certifications, no awards). For a service business where trust is the primary purchase driver, this is the most critical deficit.

**Top 3 actions that would move the needle most:**
1. **Fix the review gap** — Launch a systematic post-project review collection campaign. Going from 5 to 25+ Google reviews categorically transforms how the business is perceived and could lift conversion rates 15-25%.
2. **Enable Next.js image optimization** — Remove `images: { unoptimized: true }` from `next.config.mjs` and replace all `<img>` tags with `next/image`. This fixes the biggest technical SEO issue (LCP/CLS) and could improve PageSpeed scores by 20-30 points.
3. **Add verifiable portfolio proof** — Link to actual live client websites, show real screenshots with "View Live Site" buttons. Transform claims into evidence.

**Estimated total revenue impact of implementing all recommendations:** $4,000–$12,000/month in additional revenue through improved conversion rates, better search rankings, and stronger lead nurture.

---

## Score Breakdown

| Category | Score | Weight | Weighted Score | Key Finding |
|----------|-------|--------|---------------|-------------|
| Content & Messaging | 62/100 | 25% | 15.5 | Headlines are benefit-driven but copy lacks specificity; social proof is thin and unverifiable |
| Conversion Optimization | 74/100 | 20% | 14.8 | Strong pricing page with anchoring; CTAs are clear; multiple conversion paths work well |
| SEO & Discoverability | 78/100 | 20% | 15.6 | Excellent server-rendered metadata and schema; images completely unoptimized (no next/image) |
| Competitive Positioning | 71/100 | 15% | 10.65 | Good niche focus on tradies; comparison pages exist; AEO/GEO is a genuine first-mover advantage |
| Brand & Trust | 44/100 | 10% | 4.4 | Only 5 Google reviews; contradictory team messaging; no third-party validation |
| Growth & Strategy | 52/100 | 10% | 5.2 | Good service ladder but no referral program, no email automation, thin content velocity |
| **TOTAL** | | **100%** | **66/100** | |

---

## Quick Wins (This Week)

**1. Fix the "no overseas handoffs" messaging contradiction**
The FAQ says "no overseas handoffs" while the About page discloses "a team of experienced web developers based in Europe." This is the most exploitable credibility gap on the site. Reframe: "Your project is managed locally in Wollongong with specialist development support from our international team."
- *Where:* About page FAQ, Services FAQ, any copy mentioning "local team"
- *Why:* A careful reader (or competitor) will catch this contradiction
- *Impact:* Removes a trust-breaking inconsistency; prevents potential competitor exploitation

**2. Add explicit `width` and `height` attributes to all `<img>` tags**
No image on the site has dimension attributes, causing Cumulative Layout Shift (CLS) — a Core Web Vitals ranking factor. Add dimensions to all `<img>` tags across all view files as an immediate fix before the full `next/image` migration.
- *Where:* All files in `src/views/` using `<img>` tags
- *Impact:* Immediate CLS improvement, better PageSpeed scores

**3. Remove render-blocking font `@import` from globals.css**
The CSS `@import url(...)` on line 1 of `globals.css` blocks rendering. The same fonts are already loaded via `<link>` tags in `layout.tsx`.
- *Where:* `app/globals.css` line 1
- *Impact:* Faster First Contentful Paint, improved LCP

**4. Change `lang="en"` to `lang="en-AU"` in layout.tsx**
Signals geo-relevance to search engines for an Australian business.
- *Where:* `app/layout.tsx` html element
- *Impact:* Low effort, marginal SEO benefit for local ranking signals

**5. Add "View Live Site" links to portfolio case studies**
Case studies name businesses but provide no links to live websites. Even linking to the businesses' Google Maps profiles would add verifiability.
- *Where:* `src/views/PortfolioProject.tsx` and portfolio data
- *Impact:* Transforms portfolio claims into verifiable proof

**6. Delete the legacy `SEOMeta.tsx` component**
Uses client-side `useEffect` to inject meta tags (invisible to crawlers) and is no longer imported by any page. Delete to prevent accidental future use.
- *Where:* `src/components/SEOMeta.tsx`
- *Impact:* Codebase hygiene, prevents SEO regression

**7. Add blog category navigation to the blog listing page**
Categories exist at `/blog/category/[slug]` but there's no UI to discover them from the blog index. Add category filter chips or a sidebar.
- *Where:* `src/views/Blog.tsx`
- *Impact:* Better internal linking, improved crawlability of category pages

**8. Fix blog post dates that predate business founding**
Posts dated from February 2024 while the business was "Founded 2025" — an inconsistency attentive visitors will notice.
- *Where:* Blog post data files
- *Impact:* Removes a credibility inconsistency

---

## Strategic Recommendations (This Month)

**1. Enable Next.js Image Optimization and migrate to `next/image`**
Remove `images: { unoptimized: true }` from `next.config.mjs`. Replace all `<img>` tags with Next.js `Image` component across all views. This enables automatic WebP/AVIF conversion, responsive `srcset`, lazy loading with blur placeholders, and dimension-based layout reservation.
- *Rationale:* Images are the single biggest technical SEO liability. 28 unoptimized JPG/PNG images with no dimensions cause LCP and CLS problems — could be dropping PageSpeed scores by 20-30 points.
- *Expected outcome:* Better Core Web Vitals, improved mobile experience, better search rankings
- *Estimated impact:* Better rankings → 10-20% more organic traffic → $1,000-$3,000/month

**2. Launch a structured Google review acquisition campaign**
Send a personal WhatsApp message from Aleksandar to every past client with a direct Google Review link. Offer a $100 Google Ads credit or site maintenance credit as thank-you. Target: 15-25 reviews within 3 months. Once at 20+, add a live Google review widget to the homepage.
- *Rationale:* 5 reviews for 30+ projects is a 16% review rate. Competitors with 20+ reviews will win every trust comparison. This is the single largest trust gap on the site.
- *Expected outcome:* Categorically changes trust perception. Improved Local Pack rankings.
- *Estimated impact:* $1,500-$4,000/month from improved local visibility and conversion

**3. Build a tradie referral program**
Simple structure: "$200 credit for every referral that becomes a client." Tradies know other tradies — plumbers know electricians, electricians know builders. Create a WhatsApp message template for clients to forward. Distribute a physical card at project handover.
- *Rationale:* No referral mechanism exists despite targeting a highly networked niche. Lowest-cost growth loop available.
- *Expected outcome:* 1-2 referral clients per month at near-zero acquisition cost
- *Estimated impact:* $1,200-$3,700/month in new project revenue

**4. Connect an email automation platform**
Replace or augment Formspree with ConvertKit, Mailchimp, or ActiveCampaign. Build a 5-email welcome sequence after checklist download: (1) Deliver checklist, (2) Common website mistakes tradies make, (3) Case study with specific results, (4) Free website review offer, (5) Pricing overview and next steps.
- *Rationale:* The checklist lead magnet captures emails but there's zero follow-up nurture. Leads go cold.
- *Expected outcome:* 10-20% of checklist downloaders convert to free review → 30% of reviews convert to paid
- *Estimated impact:* $800-$2,500/month

**5. Convert sitemap.xml to dynamic `sitemap.ts`**
Use Next.js App Router's `sitemap.ts` to auto-generate from the same blog/portfolio data used by `generateStaticParams()`. This ensures new content is instantly discoverable without manual sitemap updates.
- *Rationale:* Current static XML file must be manually updated — a maintenance risk that could delay indexing of new content
- *Expected outcome:* New content indexed faster, zero maintenance burden

**6. Migrate fonts to `next/font/google`**
Remove all three current font loading mechanisms (CSS @import in globals.css, HTML `<link>` in layout.tsx, legacy @import in src/index.css). Use Next.js's built-in self-hosted font optimization for zero-FOUT, zero-CLS font loading.
- *Rationale:* Fonts are currently triple-loaded with a render-blocking @import
- *Expected outcome:* Faster FCP, eliminated font-related CLS

**7. Add cross-links between location pages**
Add "Also serving" or "Nearby areas" sections on each location page linking to the others (Wollongong ↔ Sydney ↔ Illawarra). Strengthens the topical cluster.
- *Rationale:* Location pages are isolated from each other, weakening the internal link graph
- *Expected outcome:* Better rankings for all location pages

---

## Long-Term Initiatives (This Quarter)

**1. Scale content production to 4+ posts per month**
Current velocity: ~12 posts over 25 months (less than 1 per 2 months). Build a content calendar targeting trade-specific long-tail keywords ("plumber website design," "electrician Google Ads," "HVAC SEO tips"). Repurpose into LinkedIn posts, email content, and social media.
- *Business case:* Content marketing is the primary organic growth lever. At current velocity, the blog contributes minimal traffic.
- *Resource requirements:* 4-8 hours/month of writing, or outsource at $200-$400/month
- *Projected ROI:* 3-6 month lag, then compounding organic traffic. Estimated $2,000-$5,000/month in organic leads by month 6.

**2. Build third-party authority presence**
Create profiles on Clutch, DesignRush, GoodFirms. Obtain Google Partner certification. Pursue Semrush or HubSpot certifications. Seek local business awards (Illawarra Business Awards, etc.).
- *Business case:* Zero third-party validation is the most conspicuous trust gap. Any buyer who Googles "Digital Edge Studio reviews" beyond the website will find nothing.
- *Resource requirements:* 10-15 hours one-time setup, ongoing profile maintenance
- *Projected ROI:* Backlinks from directories improve domain authority; certification badges improve on-page conversion 5-15%

**3. Develop an AEO/GEO case study with real data**
The AI search positioning is a genuine strategic advantage, but currently has no proof. Track and publish real results: "How we got [client] cited in ChatGPT/Perplexity/Google AI Overviews."
- *Business case:* AEO/GEO is the agency's most differentiated offering, but without a case study it's an unsubstantiated claim
- *Resource requirements:* 3-6 months of tracking, then 4-8 hours to write up
- *Projected ROI:* Positions the agency as a genuine authority, justifies premium pricing, earns backlinks

**4. Introduce a mid-tier recurring service ($299-$499/month)**
Bridge the gap between $99/month maintenance and $1,000/month SEO. Include: monthly content updates, basic on-page SEO, Google Business Profile management, and a monthly performance report.
- *Business case:* The 10x jump from maintenance to SEO loses clients who want more than maintenance but aren't ready for $1,000/month
- *Resource requirements:* Service design, pricing page update, sales process update
- *Projected ROI:* Captures 20-30% of maintenance clients who currently churn instead of upgrading

**5. Replace portfolio mockups with real client website screenshots**
Capture actual screenshots of live client sites. Add before/after comparisons. Include verifiable URLs or Google Maps links.
- *Business case:* Generic file names (`electrician-project.webp`, `plumbing-project.png`) suggest stock imagery. Real screenshots are the most powerful trust signal for a web design agency.
- *Resource requirements:* 2-4 hours of screenshot capture and page updates
- *Projected ROI:* Improved portfolio page conversion rate by 15-30%

---

## Detailed Analysis by Category

### Content & Messaging Analysis
**Score: 62/100**

**Strengths:**
- Headlines are benefit-driven and niche-focused ("Websites That Win Tradies More Work")
- Copy consistently speaks to pain points: slow websites, bad mobile experience, no leads
- Pricing is transparently displayed with clear inclusions per tier
- AEO/GEO messaging is a genuine differentiator in the market
- Case study metrics (40+ leads/month, 12x ROI) are compelling
- Comparison pages (vs Wix, Squarespace, cheap designers) capture high-intent traffic

**Weaknesses:**
- Value proposition lacks specificity — "40+ leads/month" and "12x ROI" are attributed to one case study (GroveSpark) but presented as averages
- Social proof is thin: only 5 named testimonials using first name + last initial format, no photos, no company logos
- Copy is repetitive across location pages (similar structure with location names swapped) — risks thin/duplicate content flags
- Blog posts lack depth and originality ("10 Essential Features for Small Business Websites" is covered by thousands of competitors)
- "#1 Choice for Tradies" claim is unsubstantiated — no data, ranking, or award backs it up
- No content addressing objections directly outside FAQ sections

### Conversion Optimization Analysis
**Score: 74/100**

**Strengths:**
- Pricing page is well-designed with three tiers, "Most Popular" badge, strategic anchoring with premium tier
- CTAs are prominent and consistent — "Get a Free Quote" in header, hero sections, throughout pages
- Multiple conversion paths: contact form, WhatsApp widget (auto-opens after 30s), exit-intent popup, free website review, checklist lead magnet
- Trust signals near CTAs: "No Lock-In Contracts," "4.8-Star Google Rating," "30+ Websites Delivered"
- Comparison pages drive bottom-of-funnel decisions

**Weaknesses:**
- Contact form has no progressive disclosure — all fields visible at once
- No live chat — WhatsApp operates outside the site
- Free website review page doesn't preview what the report looks like or show a sample
- No urgency or scarcity elements (limited-time offers, "spots remaining this month")
- Exit-intent popup is generic rather than page-contextual
- No social proof on the contact page itself — where prospects commit has least reassurance
- Blog has zero conversion surfaces (no inline CTAs, no email capture mid-article)

### SEO & Discoverability Analysis
**Score: 78/100**

**Strengths:**
- Server-rendered metadata via Next.js `export const metadata` — titles, descriptions, and canonicals in initial HTML
- Comprehensive JSON-LD schema: LocalBusiness + AggregateRating, FAQPage on 8+ pages, BreadcrumbList on all inner pages, BlogPosting, Service, CreativeWork
- Clean URL structure: `/web-design-wollongong`, `/services/aeo-geo`, `/vs/wix`
- 38-URL sitemap with proper priorities and lastmod dates
- AI-friendly robots.txt (allows GPTBot, ClaudeBot, PerplexityBot)
- Canonical tags on every page
- Full mobile responsiveness

**Critical Issues:**
- `images: { unoptimized: true }` in `next.config.mjs` disables all Next.js image optimization — no WebP/AVIF, no srcset, no responsive images
- Zero usage of `next/image` — all raw `<img>` tags with no width/height attributes
- 28 JPG/PNG images served unoptimized; only 2 WebP
- Fonts triple-loaded with render-blocking CSS @import
- Static sitemap requires manual updates
- No cross-links between location pages
- Legacy `SEOMeta.tsx` using client-side meta injection still exists (unused but confusing)
- `lang="en"` instead of `lang="en-AU"` for an Australian business

### Competitive Positioning Analysis
**Score: 71/100**

**Strengths:**
- Clear niche focus on tradies in Wollongong/Illawarra/Sydney — specific enough to be memorable, broad enough for growth
- Comparison pages exist and capture high-intent search traffic
- AEO/GEO is a genuine first-mover advantage — no local competitor is marketing this
- Transparent pricing differentiates from agencies that hide prices
- Founder-direct access is a compelling differentiator vs. larger agencies

**Weaknesses:**
- Comparison pages lack real data — claims without performance comparisons or migration stories
- No comparison against actual local agency competitors (only against platforms like Wix)
- "Only agency optimising for AI search" claim is unverifiable
- No third-party rankings, awards, or directory profiles reinforce positioning
- "#1 Choice" claim legally risky under Australian Consumer Law with 5 reviews and 2025 founding

### Brand & Trust Analysis
**Score: 44/100**

**Critical Findings:**
1. **5 Google reviews for 30+ claimed projects** — 16% review rate creates cognitive dissonance for due-diligence buyers
2. **Contradictory team messaging** — "no overseas handoffs" vs. "European developers" is the most exploitable credibility vulnerability
3. **Unverifiable portfolio** — named businesses but no live links; file names suggest stock/mockup imagery
4. **Statistical claims from single examples** — "40+ leads/month" and "12x ROI" presented as averages but sourced from one project
5. **Zero third-party validation** — no Clutch, no certifications, no awards, no media mentions
6. **Blog dates predate founding** — posts from Feb 2024 but business "Founded 2025"

**What works:**
- Founder photo and personal narrative build authenticity
- Transparent pricing removes trust barriers
- Professional visual design signals competence
- LinkedIn presence linked

### Growth & Strategy Analysis
**Score: 52/100**

**Strengths:**
- Well-designed service ladder: Build → Maintenance ($99/mo) → SEO ($1,000/mo) → Ads ($800/mo) → Growth Bundle ($2,800/mo)
- AEO/GEO market timing is genuinely smart
- Lead magnet (5-Point Website Checklist) with dedicated thank-you page
- WhatsApp widget + exit-intent popup for micro-conversions

**Weaknesses:**
- No referral program despite targeting a highly networked tradie niche
- No email automation — Formspree captures leads with zero follow-up nurture
- Content velocity too slow (~1 post per 2 months)
- 10x pricing gap between maintenance ($99) and SEO ($1,000) loses clients in between
- No retention infrastructure (no client portal, no nurture emails, no community)
- No paid acquisition for own business despite selling Google Ads management
- Revenue concentrated on project work (lumpy) rather than recurring (stable)

---

## Competitor Comparison

| Factor | Digital Edge Studio | Typical Local Agency | DIY (Wix/Squarespace) | Freelancer/Cheap Designer |
|--------|-------------------|---------------------|----------------------|--------------------------|
| Headline Clarity | 7/10 | 5/10 | 8/10 | 4/10 |
| Value Prop Strength | 6/10 | 5/10 | 7/10 | 3/10 |
| Trust Signals | 4/10 | 7/10 | 9/10 | 3/10 |
| CTA Effectiveness | 7/10 | 6/10 | 9/10 | 4/10 |
| Pricing Clarity | 9/10 | 4/10 | 10/10 | 6/10 |
| Content Depth | 5/10 | 6/10 | 8/10 | 2/10 |
| Portfolio Quality | 5/10 | 7/10 | N/A | 4/10 |
| Technical SEO | 8/10 | 5/10 | 6/10 | 3/10 |
| AEO/GEO Readiness | 8/10 | 2/10 | 1/10 | 1/10 |
| Local SEO Presence | 6/10 | 7/10 | 3/10 | 2/10 |

**Key takeaway:** Digital Edge Studio's competitive advantages are pricing transparency, technical SEO, and AEO/GEO positioning. The biggest competitive vulnerability is trust signals — established agencies with 50+ reviews and verifiable portfolios will win trust comparisons every time.

---

## Revenue Impact Summary

| Recommendation | Est. Monthly Impact | Confidence | Timeline |
|---------------|-------------------|------------|----------|
| Google review collection (5→25 reviews) | $1,500–$4,000 | High | 3-6 months |
| Next.js image optimization | $1,000–$3,000 | High | 1 week |
| Email nurture automation | $800–$2,500 | Medium | 2-3 weeks |
| Tradie referral program | $1,200–$3,700 | Medium | 2 weeks |
| Verifiable portfolio links | $500–$1,500 | Medium | 1 week |
| Fix team messaging contradiction | $300–$800 | High | 1 day |
| Scale content to 4+/month | $2,000–$5,000 | Medium | 3-6 months |
| Mid-tier service ($299-$499/mo) | $1,000–$3,000 | Medium | 2-4 weeks |
| Third-party authority profiles | $500–$1,500 | Low | 1-2 months |
| Font optimization + lang fix | $200–$500 | Low | 1 day |
| **Total Potential** | **$4,000–$12,000/mo** | | |

---

## Next Steps

1. **This week:** Fix the offshore team messaging contradiction, add image width/height attributes, remove render-blocking font @import, delete legacy SEOMeta.tsx, change lang to "en-AU", add "View Live Site" links to portfolio
2. **This month:** Enable next/image optimization, set up email automation with welcome sequence, launch referral program, begin Google review acquisition campaign
3. **This quarter:** Scale content production to 4+/month, build third-party authority profiles, develop AEO/GEO case study with real data, introduce mid-tier recurring service, replace portfolio mockups with real screenshots

---

*Generated by AI Marketing Suite — `/market audit`*
*Audit date: 2026-03-21 | Business: Digital Edge Studio | digitaledgestudio.com*
