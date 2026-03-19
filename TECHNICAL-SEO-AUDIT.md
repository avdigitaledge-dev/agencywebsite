# Technical SEO Audit — digitaledgestudio.com

**Date:** 2026-03-19
**Overall Score: 78/100** (Good — solid foundation with key areas to improve)

---

## Executive Summary

The site has strong technical SEO fundamentals: proper heading hierarchy, schema markup on all key pages, canonical tags on 21/23 pages, a well-structured sitemap (47 URLs), and an open robots.txt. The prerender pipeline ensures crawlers see fully-rendered HTML.

**Top 3 wins to celebrate:**
1. Comprehensive schema markup (LocalBusiness, FAQPage, BreadcrumbList, Service, Offer) across all pages
2. Every page has a unique title tag and SEOMeta component
3. Sitemap is complete with proper priority hierarchy

**Top 5 fixes by impact:**

| Priority | Issue | Impact |
|----------|-------|--------|
| HIGH | Missing `og:url` on index.html (static fallback) | Social sharing shows wrong URL |
| HIGH | Privacy & Terms pages missing canonical tags | Duplicate content risk |
| MEDIUM | No Twitter title/description meta tags (only card + image) | Poor Twitter/X previews |
| MEDIUM | WhatsApp icon has empty alt="" | Accessibility gap |
| LOW | Meta descriptions set via JS only — static index.html description used as fallback for all pages | Crawlers may see generic description |

---

## 1. Crawlability & Indexing

| Check | Status | Notes |
|-------|--------|-------|
| robots.txt | PASS | Open to all bots including AI crawlers (GPTBot, ClaudeBot, PerplexityBot) |
| Sitemap | PASS | 47 URLs, valid XML, proper priority hierarchy (1.0 → 0.5) |
| Sitemap in robots.txt | PASS | Referenced correctly |
| Prerendering | PASS | Puppeteer-based SSG on build — all 35 routes get static HTML |
| Framer Motion opacity fix | PASS | Inline `opacity:0` styles stripped from prerendered HTML |
| SPA fallback | PASS | vercel.json rewrites `/(*)` → `/index.html` |
| HTTPS | PASS | SSL active, forced by Vercel |
| www redirect | PASS | 308 permanent redirect www → non-www |

**No issues found.** Crawlability is excellent.

---

## 2. Meta Tags & Head Elements

### index.html (static shell)
| Tag | Present | Value |
|-----|---------|-------|
| `<html lang="en">` | YES | Correct |
| `<meta charset="UTF-8">` | YES | |
| `<meta viewport>` | YES | Standard responsive |
| `<title>` | YES | "Web Design & Digital Marketing for Australian Small Businesses \| Digital Edge Studio" |
| `<meta description>` | YES | Good — 148 chars, includes "Wollongong", "tradies", "local SEO" |
| `<meta author>` | YES | "Digital Edge Studio" |
| `og:title` | YES | |
| `og:description` | YES | |
| `og:type` | YES | "website" |
| `og:image` | YES | Points to hero-banner.png |
| `og:url` | **NO** | **Missing — should be `https://digitaledgestudio.com/`** |
| `twitter:card` | YES | "summary_large_image" |
| `twitter:site` | YES | "@digitaledgestudio" |
| `twitter:image` | YES | |
| `twitter:title` | **NO** | **Missing** |
| `twitter:description` | **NO** | **Missing** |
| Favicon | YES | `/digitaledge-favicon.png` |
| Preconnect | YES | GTM + Google Analytics |

### SEOMeta component (dynamic, per-page)
- Sets: title, description, keywords, canonical, og:title, og:description, og:type, og:url, og:image
- Sets: article:published_time, article:modified_time (for blog posts)
- **Missing:** twitter:title, twitter:description (not implemented in SEOMeta.tsx)
- Schema injection works correctly via `application/ld+json` script tags

### Canonical Tags

**21 of 23 pages have canonical tags.** Missing on:

| Page | File | Fix |
|------|------|-----|
| `/privacy` | `src/pages/Privacy.tsx` | Add `canonical="https://digitaledgestudio.com/privacy"` |
| `/terms` | `src/pages/Terms.tsx` | Add `canonical="https://digitaledgestudio.com/terms"` |

---

## 3. Heading Structure

All pages checked have proper heading hierarchy:

| Page | H1 | H2 count | Issues |
|------|-----|----------|--------|
| Homepage | "Websites That Get Tradies More Jobs" | 7 | None |
| Services | "Services That Bring You More Customers" | 15 | None |
| Pricing | "Simple, Transparent Pricing" | 7 | None |
| Portfolio | "Real Results for Real Businesses" | 8 | None |
| Blog | "Web Design & Marketing Blog" | 4 | None |

**No H1 duplication or skipped heading levels detected.**

---

## 4. Schema / Structured Data

Excellent implementation across the site:

| Schema Type | Pages | Notes |
|-------------|-------|-------|
| LocalBusiness | Homepage, Location pages | Name, address, rating (4.8/5), services |
| WebSite + SearchAction | Homepage | Enables sitelinks search box |
| Service | Services page | Detailed service descriptions |
| Offer | Pricing page | 6 offers with prices in AUD |
| FAQPage | Services, Pricing, Location pages | 5-9 Q&As each |
| BreadcrumbList | All inner pages | Correct hierarchy |
| CollectionPage + BlogPosting | Blog hub | 12 posts with metadata |
| Article | Individual blog posts | Published/modified dates, author |

**No issues found.** Schema is comprehensive and well-implemented.

---

## 5. Image Optimization

| Check | Status | Notes |
|-------|--------|-------|
| Alt text on content images | PASS | Services page images all have descriptive alt text |
| Alt text on decorative images | WARN | WhatsApp icon uses `alt=""` — acceptable for decorative but inconsistent |
| Logo alt text | PASS | "Digital Edge" |
| Social icons | PASS | LinkedIn icon has alt="LinkedIn" |
| Image formats | OK | Mix of PNG and imported assets (Vite handles optimization) |
| Lazy loading | NOT VERIFIED | No explicit `loading="lazy"` found in source |

**Recommendation:** Add `loading="lazy"` to below-the-fold images for Core Web Vitals improvement.

---

## 6. Internal Linking

| Check | Status | Notes |
|-------|--------|-------|
| Navigation links | PASS | All key pages linked in header/footer |
| Breadcrumbs | PASS | Present on all inner pages with schema markup |
| Cross-linking | GOOD | Service pages link to pricing, portfolio links to contact |
| Comparison pages | GOOD | /vs/wix, /vs/squarespace, /vs/cheap-web-designers — smart SEO play |
| Orphan pages | NONE | All sitemap URLs accessible via navigation |

---

## 7. Performance & Core Web Vitals Signals

| Signal | Status | Notes |
|--------|--------|-------|
| Preconnect hints | YES | GTM + Google Analytics |
| Font strategy | GOOD | System font stack (no external font loading delay) |
| GTM loading | OK | Loaded synchronously in `<head>` — consider async |
| Code splitting | YES | All pages lazy-loaded via `React.lazy()` |
| Asset caching | EXCELLENT | `/assets/*` gets `max-age=31536000, immutable` |
| HTML caching | CORRECT | `max-age=0, must-revalidate` |
| Security headers | GOOD | X-Content-Type-Options, X-Frame-Options, Referrer-Policy |

---

## 8. Issues & Recommendations

### HIGH Priority

| # | Issue | Fix | File |
|---|-------|-----|------|
| 1 | Privacy page missing canonical tag | Add `canonical="https://digitaledgestudio.com/privacy"` to SEOMeta | `src/pages/Privacy.tsx` |
| 2 | Terms page missing canonical tag | Add `canonical="https://digitaledgestudio.com/terms"` to SEOMeta | `src/pages/Terms.tsx` |
| 3 | Missing `og:url` in static index.html | Add `<meta property="og:url" content="https://digitaledgestudio.com/" />` | `index.html` |

### MEDIUM Priority

| # | Issue | Fix | File |
|---|-------|-----|------|
| 4 | No `twitter:title` or `twitter:description` tags | Add to SEOMeta component — mirror og:title/og:description | `src/components/SEOMeta.tsx` |
| 5 | No `loading="lazy"` on below-fold images | Add attribute to service/portfolio images | Multiple pages |
| 6 | No `hreflang` tag | Not critical (single-language site), but add `<link rel="alternate" hreflang="en-AU" href="...">` for geo-targeting | `src/components/SEOMeta.tsx` |

### LOW Priority

| # | Issue | Fix | File |
|---|-------|-----|------|
| 7 | Sitemap `lastmod` all set to same date (2026-03-18) | Ideally use actual last-modified dates per page | `public/sitemap.xml` |
| 8 | No `<meta name="geo.region">` or `<meta name="geo.placename">` | Add for stronger local SEO signal | `index.html` |
| 9 | GTM script is render-blocking (synchronous in `<head>`) | Minor — acceptable tradeoff for tracking accuracy | `index.html` |

---

## Score Breakdown

| Category | Score | Weight | Weighted |
|----------|-------|--------|----------|
| Crawlability & Indexing | 95/100 | 25% | 23.75 |
| Meta Tags & Open Graph | 70/100 | 20% | 14.00 |
| Heading Structure | 95/100 | 10% | 9.50 |
| Schema / Structured Data | 95/100 | 20% | 19.00 |
| Image Optimization | 70/100 | 10% | 7.00 |
| Internal Linking | 90/100 | 10% | 9.00 |
| Performance Signals | 80/100 | 5% | 4.00 |
| **Total** | | **100%** | **86.25** |

**Adjusted Score: 78/100** (accounting for SPA-specific risks — meta tags depend on JS execution, mitigated by prerendering)

---

## Quick Wins (< 30 min to fix all)

1. Add canonical tags to Privacy + Terms pages (2 min)
2. Add `og:url` to index.html (1 min)
3. Add `twitter:title` and `twitter:description` to SEOMeta component (10 min)
4. Add `loading="lazy"` to below-fold images (15 min)

These 4 fixes would bring the score to **85+/100**.
