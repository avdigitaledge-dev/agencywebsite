# Marketing Audit: Digital Edge Studio
**URL:** https://digitaledgestudio.com
**Date:** 2026-03-17
**Business Type:** Agency/Services (Local Business hybrid)
**Overall Marketing Score: 66/100 (Grade: C)**

---

## Executive Summary

Digital Edge Studio scores 66/100 -- a solid foundation with significant gaps that, once addressed, could transform the site's ability to generate leads and rank in search. The site is professionally designed with strong pricing transparency, a compelling portfolio of 6 detailed case studies, and a well-structured service offering that spans one-time website builds and recurring monthly services.

**The biggest strength** is competitive positioning: transparent pricing with smart anchoring, three comparison pages (vs Wix, Squarespace, Cheap Designers), and a genuine differentiator in AEO/GEO services that no other Wollongong agency is likely offering. The pricing page alone is best-in-class for a local agency.

**The biggest gap** is technical SEO. The site is a pure client-side React SPA with zero server-side rendering or prerendering. This means search engines see an empty HTML shell for every page -- all content, meta tags, schema markup, and internal links only exist after JavaScript executes. This single issue undermines every other SEO investment on the site and is the primary reason pages are slow to get indexed.

**The second critical gap** is trust and brand identity. The business is faceless -- no founder name, no team photos, no verifiable testimonials, no linked Google reviews. For an agency that promises "you deal with the actual designer," the absence of any human identity is a significant credibility problem.

**Top 3 actions that would move the needle most:**
1. Implement prerendering (react-snap or similar) so crawlers see real content -- this alone could improve organic visibility by 30-50%
2. Add Aleksandar Savevski's name, photo, and story to the About page and blog posts -- instantly humanizes the brand
3. Add a phone number sitewide and link to actual Google reviews -- critical trust signals for a tradie audience

Implementing all recommendations in this audit could realistically increase monthly leads by 3-5x within 6 months as organic visibility improves and conversion rate increases from trust improvements.

---

## Score Breakdown

| Category | Score | Weight | Weighted Score | Key Finding |
|----------|-------|--------|---------------|-------------|
| Content & Messaging | 72/100 | 25% | 18.0 | Strong voice and pricing copy, but testimonials lack credibility and blog content is generic |
| Conversion Optimization | 68/100 | 20% | 13.6 | Good CTA structure and pricing page, but no phone number, no urgency, exit popup is desktop-only |
| SEO & Discoverability | 52/100 | 20% | 10.4 | **Critical:** Pure client-side SPA with no prerendering -- crawlers see empty HTML for all pages |
| Competitive Positioning | 72/100 | 15% | 10.8 | AEO/GEO differentiator is strong but under-leveraged; comparison pages are well-built |
| Brand & Trust | 62/100 | 10% | 6.2 | Faceless brand -- no founder identity, no verifiable reviews, no certifications |
| Growth & Strategy | 68/100 | 10% | 6.8 | Good pricing structure, but no referral program, no email capture, no growth loops |
| **TOTAL** | | **100%** | **65.8 → 66/100** | |

---

## Quick Wins (This Week)

1. **Add a phone number to header, footer, and contact page.** Your target audience is tradies who prefer calling. Add a clickable `tel:` link for 0401 871 071. On mobile, consider a sticky bottom bar with "Call" and "WhatsApp" side by side. *Impact: Immediate increase in phone enquiries.*

2. **Add Aleksandar's name and photo to the About page.** A simple text edit and image addition instantly validates the "you deal with the actual designer" claim. Add a 2-paragraph founder story. *Impact: Significant trust increase, improved E-E-A-T signals.*

3. **Fix the duplicate homepage/Wollongong title tag.** Both pages share "Web Design Wollongong | Website Designer | Digital Edge Studio" in the static HTML. Change the homepage to something distinct like "Web Design & Digital Marketing for Australian Small Businesses | Digital Edge Studio". *Impact: Eliminates duplicate title signal for Google.*

4. **Replace anonymous testimonials with verifiable ones.** Get 3-5 clients to provide full name, business name, and a headshot or Google review link. Update across homepage, Wollongong, and Tradies pages. *Impact: Major trust improvement with no design changes needed.*

5. **Link the "5.0 Google Rating" stat to your actual Google Business Profile.** Replace the static number with a link to your GBP reviews page so visitors can verify the claim. *Impact: Third-party credibility that self-hosted testimonials can't match.*

6. **Add trackEvent to the WebsiteReview form submission.** The contact form tracks submissions but the Website Review form doesn't. Add `trackEvent("generate_lead", { form_name: "website_review" })` to the success handler. *Impact: Full visibility into lead magnet performance.*

7. **Remove or substantiate the "award-winning" claim** in the Wollongong meta description. If no awards exist, remove it -- unsubstantiated claims erode trust. *Impact: Credibility protection.*

8. **Substantiate the "12x ROI" and "40+ leads" stats.** Link these numbers to a specific case study (e.g., "Based on GroveSpark Electrical, 2024-2025"). *Impact: Bold claims become verifiable proof.*

---

## Strategic Recommendations (This Month)

1. **Implement prerendering with react-snap or vite-plugin-prerender.** This is the single most impactful technical change. Install the package, configure routes from your sitemap, and update the build script. Every page will then have fully-rendered HTML for crawlers. *Expected impact: 30-50% improvement in organic visibility and dramatically faster indexing.*

2. **Fix the mobile exit intent popup.** Currently uses `mouseleave` detection which doesn't work on mobile. Add scroll-up detection (user scrolls back up 30%+ of page height) as a mobile trigger. Mobile is likely 60-70% of local business traffic. *Expected impact: Recapture 2-3% of bouncing mobile visitors.*

3. **Create trade-specific landing pages.** Build pages for "Plumber Website Design Wollongong", "Electrician Website Design Sydney", etc. You already list 12 trades -- each could have a dedicated page with trade-specific pain points, a relevant case study, and FAQs. *Expected impact: Capture long-tail keywords with very low competition.*

4. **Lead with AEO/GEO on the homepage.** Move this differentiator from buried on inner pages to a prominent homepage position. A subheadline like "The only Wollongong agency optimising your business for AI search" is a concrete, verifiable claim no local competitor can match. *Expected impact: Stronger differentiation, higher perceived expertise.*

5. **Launch a referral program.** Tradies refer each other constantly. Create a simple "Refer a mate, get $200 off your next month" incentive. Add referral CTAs to post-launch communications and the footer. *Expected impact: Lowest-cost acquisition channel available.*

6. **Add an email signup with a downloadable lead magnet to blog posts.** Create a PDF (e.g., "The Tradie's Website Checklist") gated behind an email form on every blog post. This captures top-of-funnel leads for nurture sequences. *Expected impact: 2-5% of blog visitors become email leads.*

7. **Improve text contrast on dark sections.** Change `text-white/50` and `text-white/55` to `text-white/70` or `text-white/80` minimum across hero sections and "How It Works." Unreadable persuasion copy can't persuade. *Expected impact: Better readability, potential WCAG compliance, improved conversion.*

---

## Long-Term Initiatives (This Quarter)

1. **Migrate to SSR/SSG framework (Next.js or Astro).** While prerendering is the quick fix, a proper SSR solution provides the best long-term SEO foundation. This ensures all meta tags, schema, OG tags, and content are server-rendered, eliminating the SPA crawling problem permanently. *Timeline: 2-4 weeks. ROI: Compounding organic traffic growth.*

2. **Build a content engine targeting low-competition keywords.** Shift blog strategy from generic listicles to case study narratives ("How we took GroveSpark from 0 to 40 leads/month"), original data ("We audited 50 tradie websites in Wollongong -- here's what we found"), and local market analysis. Publish weekly with author bylines. *Timeline: Ongoing. ROI: Organic traffic compounds over 6-12 months.*

3. **Build 10-15 suburb-level landing pages.** Expand from 3 geographic pages (Wollongong, Sydney, Illawarra) to include Shellharbour, Kiama, Cronulla, Sutherland, Campbelltown, Parramatta, Penrith, Newcastle, etc. Each should have unique local references and, where possible, local case studies. *Timeline: 2-3 weeks. ROI: Captures hyper-local search intent.*

4. **Create a named methodology.** Brand the Growth Bundle process as something ownable (e.g., "The Digital Edge Growth System"). Reference it across all pages. This creates category ownership that competitors cannot replicate. *Timeline: 1 week to name and document, ongoing to implement across site.*

5. **Build an automated post-sale upsell sequence.** After delivering a Starter website, send a timed email sequence showing what SEO, Google Ads, or an upgrade to Business tier could do. Use case study data as proof. *Timeline: 2-3 weeks. ROI: Increases average customer lifetime value.*

---

## Detailed Analysis by Category

### Content & Messaging Analysis (72/100)

**Strengths:**
- Consistent, approachable brand voice -- jargon-free, well-suited to tradie audience
- Strong homepage hero: "Websites That Turn Visitors Into Paying Customers" passes the 5-second test
- Transparent pricing with "typical agency price" anchoring is persuasive
- Good FAQ coverage with schema markup on every major page
- Solid local SEO landing page architecture with locally-tailored copy
- Lead magnet on Blog page ("5-Point Website Checklist for Wollongong Tradies")

**Weaknesses:**
- Testimonials use first name + last initial only (e.g., "James T.") -- no photos, no business names, no Google review links
- Statistics lack sources -- "12x ROI" and "40+ leads/month" have no attribution
- Case studies are link cards, not deep narrative content
- About page is vague -- no named team members, no founder story, no photos
- Value proposition is not unique enough -- "professional, fast-loading websites" is table stakes
- Blog content is generic listicle format with no original data or thought leadership
- Location pages (Wollongong vs Sydney) are structurally identical with names swapped
- "Award-winning" meta claim has no supporting evidence
- No phone number anywhere despite targeting phone-first audience

### Conversion Optimization Analysis (68/100)

**Strengths:**
- Consistent primary CTA ("Get a Free Quote") in sticky header and footer
- Dual-CTA hero strategy (Free Quote + Free Website Review) offers two commitment levels
- Contact form has reasonable 5 fields with only 3 required
- WhatsApp widget with auto-open after 30 seconds
- Exit intent popup for departing visitors
- Pricing page with three-tier anchoring and "Most Popular" badge
- Event tracking via GTM dataLayer

**Weaknesses:**
- No urgency or scarcity signals anywhere
- Zero trust signals adjacent to conversion forms
- Exit intent popup is desktop-only (mouseleave detection doesn't work on mobile)
- No click-to-call phone number on entire site
- Low-contrast text (white/50, white/55) on dark sections hurts readability
- No downloadable lead magnet or email list capture
- WebsiteReview form lacks event tracking
- CTA button text varies inconsistently across pricing cards
- No calendar booking integration despite "Book online via form" text

### SEO & Discoverability Analysis (52/100)

**Strengths:**
- Comprehensive sitemap with 40+ URLs
- Excellent schema markup (LocalBusiness, FAQPage, WebSite, AggregateRating)
- Clean, keyword-rich URL structure
- Well-configured robots.txt with AI bot allowances
- Canonical tags per page
- Breadcrumb navigation on inner pages

**Weaknesses:**
- **CRITICAL: Pure client-side SPA with no SSR or prerendering** -- crawlers see empty HTML shell for every page
- All meta tags, schema, content, and internal links are JavaScript-dependent
- Homepage and /web-design-wollongong share identical static HTML title/description
- No image width/height attributes (CLS issues)
- No responsive images (srcset/sizes)
- No image optimization build pipeline
- Homepage H1 doesn't contain target keywords
- Meta tags managed via raw DOM manipulation instead of proper head manager
- OG image is .png instead of optimized format

### Competitive Positioning Analysis (72/100)

**Strengths:**
- AEO/GEO is a genuine, defensible differentiator -- likely unique in the Wollongong market
- 3 well-built comparison pages (vs Wix, Squarespace, Cheap Designers) with balanced tone
- Transparent pricing with effective anchoring against "typical agency prices"
- Deep tradies niche with 12 specific trades listed
- Healthcare vertical as secondary focus
- Consistent "no lock-in contracts" messaging

**Weaknesses:**
- No named local competitor comparisons
- No proprietary methodology or named process
- $995 Starter price sits close to the "cheap designer" range being argued against
- No certifications or authority badges (Google Partner, platform certifications)
- Homepage hero is too broad -- tradie niche strength is buried below the fold
- Testimonials lack verifiability
- About page lacks personal founder story
- No results or satisfaction guarantee

### Brand & Trust Analysis (62/100)

**Strengths:**
- Fully public pricing with no-hidden-fees messaging
- 6 detailed case studies with quantified results
- WhatsApp widget provides instant-contact feel
- Professional, consistent visual design
- Strong schema markup for local SEO

**Weaknesses:**
- Zero named team members or founder presence -- completely faceless business
- Testimonials use abbreviated names with no verification path
- No link to actual Google Business Profile reviews
- No third-party trust badges
- No phone number for direct calls
- About page has no team photos or personal story
- No terms of service, refund policy, or SLA

### Growth & Strategy Analysis (68/100)

**Strengths:**
- Well-structured productised pricing with both project and recurring revenue
- Growth Bundle ($2,500/mo) as premium anchor with 3-phase structure
- Free Website Review is an effective lead magnet
- 4 distinct lead capture mechanisms
- Location and comparison pages create long-tail entry points

**Weaknesses:**
- No referral program despite serving tradies who actively refer each other
- No email list building -- zero newsletter signups or downloadable resources
- Blog output is modest (12 posts) with no visible publishing schedule
- No Google Map embed, no GBP link, incomplete NAP data
- No structured upsell/cross-sell automation post-purchase
- Only 3 geographic pages vs dozens of potential suburb pages

---

## Revenue Impact Summary

| Recommendation | Est. Monthly Impact | Confidence | Timeline |
|---------------|-------------------|------------|----------|
| Implement prerendering (SSR/SSG) | +5-10 leads/mo | High | 1-2 weeks |
| Add phone number sitewide | +2-4 leads/mo | High | 1 day |
| Fix testimonials + Google reviews link | +1-3 leads/mo | Medium | 1 week |
| Add founder identity to About page | +1-2 leads/mo | Medium | 1 day |
| Mobile exit intent popup | +1-2 leads/mo | Medium | 1 day |
| Trade-specific landing pages (12) | +3-8 leads/mo | Medium | 2-3 weeks |
| Suburb-level landing pages (10-15) | +2-5 leads/mo | Medium | 2-3 weeks |
| Referral program | +1-3 leads/mo | Medium | 1 week |
| Email capture + lead magnet | +2-4 leads/mo | Medium | 1 week |
| Blog content engine (weekly) | +3-10 leads/mo | Medium | Ongoing |
| **Total Potential** | **+20-50 leads/mo** | | |

At an average project value of $1,500-$2,500, this represents **$30,000-$125,000/month** in potential pipeline value.

---

## Next Steps

1. **Implement prerendering this week** -- install react-snap, configure routes, update build script. This unblocks all SEO investment.
2. **Add phone number + founder identity + Google reviews link** -- three trust improvements that take less than a day combined.
3. **Start building trade-specific and suburb-level landing pages** -- compound your local SEO advantage before competitors catch on.

*Generated by AI Marketing Suite -- `/market audit`*
