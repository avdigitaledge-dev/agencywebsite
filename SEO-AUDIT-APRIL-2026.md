# SEO Audit — digitaledgestudio.com
## Date: 8 April 2026

---

## Overall SEO Health: D (40/100 GSC Score)

**Previous audit (16 Mar 2026):** 87/100 on-page score — strong fundamentals.
**Current GSC health grade:** D — the on-page work is solid but rankings haven't materialised. The site has impressions but almost zero clicks. This is a **domain authority and ranking problem**, not an on-page problem.

### Key Numbers (Last 3 Months — GSC)

| Metric | Value |
|--------|-------|
| Total clicks | 19 |
| Total impressions | ~2,100+ |
| Overall CTR | ~0.9% |
| Queries ranking positions 1-3 | 2 (1.3%) |
| Queries ranking positions 4-10 | 4 (2.7%) |
| Queries buried beyond position 20 | 132 (88%) |
| Sitemap URLs submitted | 110 |
| Pages with indexing issues | 4 |
| Cannibalized queries | 16 |

**Bottom line:** The site is technically well-built with good on-page SEO. The core problem is that 88% of keywords are buried beyond page 2. You need backlinks, content velocity, and time to move the needle.

---

## Critical Issues (Fix This Week)

### 1. Trailing Slash Duplicate: `/web-design-sydney` vs `/web-design-sydney/`

**Impact:** HIGH — Active cannibalization confirmed in GSC.

Both URLs are appearing in search results and splitting impressions:
- `/web-design-sydney` — 113 impressions, position 86.2
- `/web-design-sydney/` — 68 impressions, position 70.6 (flagged as "Page with redirect", not indexed)

These two URLs are cannibalizing each other for **5 different Sydney keywords** including "affordable web design sydney", "affordable website design sydney", "cheap website design sydney", and "studio web design".

**Fix:**
1. Ensure Next.js `trailingSlash` config is set to `false` in `next.config.js`
2. Verify the canonical tag on `/web-design-sydney` is self-referencing (no trailing slash)
3. Check all internal links point to `/web-design-sydney` (no trailing slash)
4. Submit the non-trailing-slash version via URL Inspection in GSC
5. Monitor for the `/web-design-sydney/` variant to drop out of the index

### 2. HTTP vs HTTPS Canonical Mismatch — Illawarra Page

**Impact:** MEDIUM — Google is using `http://` as canonical instead of `https://`.

GSC reports:
- User canonical: `https://digitaledgestudio.com/web-design-illawarra`
- Google-selected canonical: `http://digitaledgestudio.com/web-design-illawarra`

Additionally, `http://digitaledgestudio.com/` is appearing as a separate indexed entity (4 clicks, 5 impressions).

**Fix:**
1. Verify the HTTP → HTTPS 301 redirect is working for all paths (not just the homepage)
2. Re-inspect `/web-design-illawarra` via GSC URL Inspection tool
3. Ensure no internal links or sitemap entries use `http://`

### 3. Rich Results Validation Errors (2 Pages)

**Impact:** MEDIUM — Losing rich snippet eligibility.

| Page | Issue |
|------|-------|
| `/blog/website-not-ranking-google` | Rich results failing validation |
| `/vs/natiive` | Rich results failing validation |

**Fix:** Test both URLs in Google's Rich Results Test tool and fix the specific schema errors reported.

### 4. Sitemap Has Errors

**Impact:** MEDIUM — GSC reports 1 sitemap with errors and 1 with warnings.

The sitemap grew from 23 URLs (March audit) to 110 URLs, which is good. But GSC is flagging issues.

**Fix:** Check the Sitemaps report in GSC for the specific error messages and resolve them.

---

## Cannibalization Issues (16 Queries Affected)

This is the most actionable issue after the trailing slash fix. Multiple pages are competing for the same keywords, diluting authority.

### High-Impact Cannibalization

| Query | Impressions | Pages Competing | Problem |
|-------|------------|-----------------|---------|
| "web design wollongong" | 104 | Homepage (pos 6) vs `/web-design-wollongong` (pos 84.5) vs `/pricing` (pos 95) | Homepage ranks better than the dedicated location page |
| "digital marketing wollongong" | 98 | Homepage (pos 71) vs `/about` (pos 84.6) | About page shouldn't rank for this |
| "digital agency wollongong" | 95 | `/about` (pos 74.5) vs Homepage (pos 77) | Neither page is clearly winning |
| "digital consultancy wollongong" | 68 | `/about` (pos 61.5) vs Homepage (pos 66) vs `/web-design-wollongong` (pos 90) vs `/portfolio` (pos 92) | 4 pages competing |
| "wollongong digital agency" | 41 | Homepage (pos 53.5) vs `/about` (pos 68.3) vs `/web-design-wollongong` (pos 91.8) | 3 pages competing |
| "wollongong website design" | 38 | Homepage (pos 21) vs `/web-design-wollongong` (pos 84.7) | Homepage winning over dedicated page |

### Sydney Trailing-Slash Cannibalization (5 queries)

| Query | `/web-design-sydney` Position | `/web-design-sydney/` Position |
|-------|------|------|
| affordable web design sydney | 88.8 | 89.6 |
| affordable website design sydney | 89.7 | 91.4 |
| studio web design | 89.0 | 75.1 |
| affordable website design company sydney | 82.7 | 80.6 |
| cheap website design sydney | 88.3 | 85.5 |

### Recommended Cannibalization Fixes

1. **"web design wollongong"** — The dedicated `/web-design-wollongong` page should be the primary target. Ensure the homepage links TO this page with exact-match anchor text rather than trying to rank for it. Remove or reduce "web design wollongong" keyword density on the homepage.

2. **"digital agency/marketing wollongong"** — The `/about` page should NOT target these commercial queries. Ensure the about page focuses on brand story/trust, not service keywords. Create a dedicated `/digital-marketing-wollongong` page (already in sitemap) as the canonical target.

3. **Sydney trailing-slash** — Fix the trailing slash issue (#1 above) and all 5 queries consolidate automatically.

4. **General principle:** Each commercial keyword should have ONE clear target page. Use internal linking to point authority to that page.

---

## Position Distribution Analysis

The single biggest problem: **88% of queries are buried beyond position 20.**

| Position Range | Queries | % | Action |
|---------------|---------|---|--------|
| 1-3 (top results) | 2 | 1.3% | Protect — these are branded queries |
| 4-10 (page 1) | 4 | 2.7% | Optimize CTR — title/meta improvements |
| 11-20 (page 2) | 12 | 8.0% | Push to page 1 — content + links |
| 20+ (buried) | 132 | 88.0% | Long-term — need DA growth |

### What This Means

The site is being **discovered** by Google (150+ queries, 2,100+ impressions) but not trusted enough to rank on page 1. This is classic for a new/low-authority domain.

**The on-page SEO is not the bottleneck.** Title tags, meta descriptions, schema, heading structure — all solid from the March audit. The bottleneck is:

1. **Domain authority** — likely DR < 10 (Ahrefs data unavailable due to plan limits, but the ranking pattern confirms this)
2. **Backlink profile** — probably < 20 referring domains
3. **Content depth** — 33 blog posts is decent but competitors likely have 50-100+
4. **Domain age** — newer domains need 6-12 months to build trust

---

## Top Pages Performance (Last 3 Months)

| Page | Clicks | Impressions | CTR | Avg Position |
|------|--------|-------------|-----|-------------|
| Homepage | 13 | 211 | 6.16% | 39.6 |
| `/contact` | 2 | 27 | 7.41% | 6.6 |
| `/pricing` | 1 | 44 | 2.27% | 31.2 |
| `/web-design-nowra` | 0 | 634 | 0.00% | 41.0 |
| `/web-design-wollongong` | 0 | 544 | 0.00% | 77.3 |
| `/about` | 0 | 230 | 0.00% | 67.9 |
| `/web-design-sydney` | 0 | 113 | 0.00% | 86.2 |
| `/website-cost-calculator` | 0 | 75 | 0.00% | 80.8 |
| `/web-design-startups` | 0 | 68 | 0.00% | 70.1 |
| `/web-design-sydney/` (duplicate) | 0 | 68 | 0.00% | 70.6 |

### Key Observations

1. **Nowra page has the most impressions (634)** but zero clicks — it's averaging position 41. If you can push this to page 1, it represents the biggest traffic opportunity.
2. **Wollongong page has 544 impressions** but is stuck at position 77. The homepage is cannibalizing it.
3. **Contact page is the best performer** — position 6.6, 7.41% CTR. This likely ranks for branded queries.
4. **Website cost calculator** gets 75 impressions — there's search demand for this tool.

---

## Top Queries (Last 3 Months)

### Highest-Impression Queries (Zero Clicks — All Beyond Page 1)

| Query | Impressions | Position | Target Page |
|-------|------------|----------|-------------|
| digital agency wollongong | 80 | 74.1 | Homepage/About (cannibalizing) |
| digital marketing wollongong | 80 | 77.5 | Homepage/About (cannibalizing) |
| affordable web design sydney | 41 | 88.4 | `/web-design-sydney` |
| digital consultancy wollongong | 36 | 63.4 | `/about` |
| affordable website design sydney | 23 | 89.9 | `/web-design-sydney` |
| cheap website design sydney | 20 | 87.3 | `/web-design-sydney` |
| affordable website design company sydney | 18 | 81.6 | `/web-design-sydney` |

### Branded Queries (Positions 1-6 — Protect These)

| Query | Position | Page |
|-------|----------|------|
| digital edge studio | 3.4 | Homepage |
| digital edge | 3.0 | Homepage |
| digital edge designs | 6.3 | Homepage |
| digitaledge.org | 2.0 | Homepage |

---

## What Changed Since March Audit

### Completed from March Recommendations
- [x] SPA rendering verified — Google indexing confirmed
- [x] Sitemap expanded from 23 → 110 URLs
- [x] BreadcrumbList schema added (confirmed in prior commits)
- [x] Location pages expanded (Nowra, Sydney fully built out)
- [x] Industry pages expanded (12 industries now)
- [x] Comparison pages added (7 vs/ pages)
- [x] Free tools section added (cost calculator, website audit)
- [x] Portfolio case studies added (11 detailed projects)

### Still Outstanding from March Audit
- [ ] Trim long title tags (Blog, Portfolio, Contact, Free Review) to under 60 chars
- [ ] Add named author bios to blog posts (E-E-A-T gap)
- [ ] Add Person schema for blog authors
- [ ] Display ABN/business registration
- [ ] Add HowTo schema to "How It Works" section
- [ ] Implement responsive images with srcset
- [ ] Add image width/height attributes for CLS

### New Issues Found
- [ ] **CRITICAL:** Trailing slash duplicate `/web-design-sydney/` splitting impressions
- [ ] **HIGH:** 16 cannibalized queries across 8 pages
- [ ] **MEDIUM:** HTTP canonical mismatch on `/web-design-illawarra`
- [ ] **MEDIUM:** 2 pages with rich result validation errors
- [ ] **MEDIUM:** Sitemap errors reported in GSC

---

## Prioritised Action Plan

### Week 1 — Critical Technical Fixes

| # | Action | Impact | Effort |
|---|--------|--------|--------|
| 1 | Fix trailing slash `/web-design-sydney/` duplicate | High — consolidates 68 wasted impressions | 15 min |
| 2 | Fix HTTP canonical mismatch on Illawarra page | Medium — prevents indexing confusion | 15 min |
| 3 | Fix rich results errors on 2 pages | Medium — restores rich snippet eligibility | 30 min |
| 4 | Resolve sitemap errors in GSC | Medium — ensures all 110 URLs crawled cleanly | 30 min |

### Week 2-4 — Cannibalization & On-Page Fixes

| # | Action | Impact | Effort |
|---|--------|--------|--------|
| 5 | Resolve homepage vs `/web-design-wollongong` cannibalization | High — 544 impressions at stake | 2 hrs |
| 6 | Resolve homepage vs `/about` cannibalization for "digital agency/marketing wollongong" | High — 175+ impressions | 2 hrs |
| 7 | Trim 4 long title tags to under 60 chars | Low-Medium — prevents SERP truncation | 15 min |
| 8 | Add named author bios + Person schema to blog posts | Medium — E-E-A-T improvement | 2 hrs |

### Month 2-3 — Authority Building (The Real Bottleneck)

| # | Action | Impact | Effort |
|---|--------|--------|--------|
| 9 | **Build backlinks** — target 10-20 new referring domains | Critical — this is what moves rankings | Ongoing |
| 10 | Publish 2-4 blog posts per month (targeting content gaps) | High — builds topical authority | Ongoing |
| 11 | Get listed in local directories (Yelp, Yellow Pages, True Local, Hotfrog, StartLocal) | Medium — local citation building | 3 hrs |
| 12 | Submit to Australian business directories and web design directories | Medium — niche-relevant links | 3 hrs |
| 13 | Guest post on Illawarra/Wollongong local blogs or business associations | High — local relevance signals | Ongoing |

### Month 3-6 — Content Expansion

| # | Action | Impact | Effort |
|---|--------|--------|--------|
| 14 | Target "web design nowra" aggressively — 634 impressions, biggest opportunity | High | 3 hrs |
| 15 | Create content for "digital marketing wollongong" (dedicated page, not About) | High — 80 impressions | 3 hrs |
| 16 | Target "website cost calculator" related queries — 75 impressions | Medium | 2 hrs |
| 17 | Expand blog for "how to get more Google reviews" and other high-volume gaps | Medium | Ongoing |

---

## Backlink Strategy Recommendations

Since domain authority is the primary bottleneck, here are specific link-building tactics:

1. **Local business directories** — True Local, Yellow Pages Australia, Hotfrog, StartLocal, Local Business Guide, White Pages, Australian Business Directory
2. **Industry directories** — Web Design Directory Australia, Clutch.co, DesignRush, GoodFirms, TopDevelopers
3. **Chamber of Commerce / business associations** — Illawarra Business Chamber, Wollongong Business Network
4. **Local PR / content** — Illawarra Mercury, What's On Wollongong, local business podcasts
5. **Client websites** — Add a "Built by Digital Edge Studio" footer link on client sites (with permission)
6. **Google Business Profile** — Ensure it links back to the site, encourage more reviews
7. **Social profiles** — LinkedIn company page, Facebook business page with links
8. **HARO / Connectively** — Respond to journalist queries for web design/marketing topics

---

## Content Gap Opportunities (Updated)

Based on GSC query data, these are the highest-value content gaps:

| Gap | Evidence | Action |
|-----|----------|--------|
| "digital marketing wollongong/nowra" | 80+ impressions, no dedicated page | Create `/digital-marketing-wollongong` (in sitemap but needs content focus) |
| "website cost calculator" queries | 75 impressions for calculator page | Optimise calculator page title/meta for "website cost calculator australia" |
| "web design nowra" | 634 impressions, position 41 | Biggest single opportunity — build backlinks to this page specifically |
| "SEO wollongong/nowra" queries | Multiple queries with low positions | Strengthen `/seo-wollongong` content |
| "google ads nowra" | 5 impressions, position 23.6 | Near page 2 — low competition, easy win |

---

## Summary

**What's working:**
- On-page SEO is solid (title tags, meta descriptions, schema, heading structure)
- Site architecture is comprehensive (110 sitemap URLs, good internal linking)
- Robots.txt and AI crawler access is properly configured
- Content covers the right topics and locations
- No declining content — traffic is stable/growing from a low base

**What needs fixing now:**
1. Trailing slash duplicate on Sydney page
2. HTTP canonical mismatch on Illawarra page
3. Rich results validation errors on 2 pages
4. 16 cannibalized queries (especially homepage vs location pages)

**The real problem:**
The site needs **domain authority**. 88% of queries are beyond position 20. No amount of on-page optimisation will fix this — you need backlinks, citations, and time. Target 10-20 new referring domains in the next 3 months.

---

*Audit generated from Google Search Console data (last 3 months: Jan 7 — Apr 7, 2026). Ahrefs metrics unavailable (insufficient plan). Previous audit: SEO-AUDIT.md (16 March 2026).*
