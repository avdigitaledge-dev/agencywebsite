# Marketing Audit: Digital Edge Studio
**URL:** http://localhost:8080/ (audited from source code)
**Date:** 2026-03-06
**Business Type:** Local Business / Agency — Web design & digital marketing for tradies and small businesses in Wollongong & Sydney, NSW
**Overall Marketing Score: 55/100 (Grade: C)**

---

## Executive Summary

Digital Edge Studio scores **55/100** — Average. The site has a solid structural foundation: clean design, good page flow, location-targeted landing pages, transparent pricing, and well-implemented schema markup. These are meaningful advantages over a typical DIY or template-based competitor. However, the site is significantly underperforming on the factors that actually convert skeptical tradie prospects into paying clients.

The biggest strength is pricing transparency. Displaying $800 and $1,700 up front, with a $99/month maintenance plan, removes a major friction point that most agencies deliberately obscure. Combined with "No Lock-In Contracts" messaging and a logical service ladder, the pricing strategy is genuinely competitive.

The biggest gap is trust evidence. The site claims "100+ websites delivered" and 5-star outcomes but provides zero verifiable proof: no portfolio, no named clients with business details, no Google review links, no team photos, no founder name. Tradies are a word-of-mouth audience — they will not call an anonymous agency on faith alone. This single gap is responsible for the majority of lost conversions.

The three highest-impact actions are: **(1)** Fix the contact form — it currently does not submit to any backend, meaning every lead is silently lost. **(2)** Add a phone number sitewide — tradies are phone-first buyers and there is no phone number anywhere on the site. **(3)** Launch a portfolio or case study page — even five client projects with real names and one measurable result each would do more conversion work than all current copy combined.

Implementing all recommendations in this report could conservatively lift monthly lead volume by 40–80% and add an estimated **$3,500–$8,000/month in new revenue** based on typical agency deal sizes in this market.

---

## Score Breakdown

| Category | Score | Weight | Weighted Score | Key Finding |
|----------|-------|--------|---------------|-------------|
| Content & Messaging | 61/100 | 25% | 15.25 | Generic copy — no tradie-specific pain points in hero |
| Conversion Optimization | 52/100 | 20% | 10.40 | Form does not submit; no phone number; no urgency |
| SEO & Discoverability | 54/100 | 20% | 10.80 | Good schema foundation; SPA architecture limits crawlability |
| Competitive Positioning | 58/100 | 15% | 8.70 | Price transparency is strong; niche claim is unsupported |
| Brand & Trust | 48/100 | 10% | 4.80 | No portfolio, no team faces, unverifiable testimonials |
| Growth & Strategy | 44/100 | 10% | 4.40 | No email capture, stale blog, no lead magnets |
| **TOTAL** | | **100%** | **54.35/100** | Grade: C — Significant gaps to address |

---

## Quick Wins (This Week)

### 1. Fix the Contact Form — CRITICAL
**What:** The `handleSubmit` function uses a `setTimeout` mock and never sends data anywhere. Every lead submitted is silently lost.
**Where:** `src/pages/Contact.tsx` — replace the mock with Formspree, Netlify Forms, or EmailJS.
**Why:** This is a P0 production bug. Every day it is broken is a day of zero leads.
**Impact:** High — recovers all form submissions immediately.

### 2. Add a Phone Number Sitewide
**What:** Add a clickable phone number to the navigation bar, contact page sidebar, and footer NAP block.
**Where:** `src/components/Layout.tsx` (nav), `src/pages/Contact.tsx`, `src/components/Footer.tsx`
**Why:** Tradies are phone-first buyers. The absence of a phone number eliminates an entire segment of your target audience who will not fill in forms.
**Impact:** High — opens a second conversion channel with zero design effort.

### 3. Add Urgency to Hero and Pricing CTAs
**What:** Add one line near each primary CTA: *"We take on a limited number of new clients each month — check availability."*
**Where:** `src/pages/Index.tsx` hero, `src/pages/Pricing.tsx` package cards
**Why:** No urgency = no reason to act now. This is the simplest psychological conversion lever.
**Impact:** Medium — typically lifts CTA click-through by 10–25%.

### 4. Surface the Payment Plan on Pricing Cards
**What:** Add *"Payment plans available — ask us how"* directly under each package CTA button.
**Where:** `src/pages/Pricing.tsx`
**Why:** It is currently buried in the FAQ. Most visitors never see it. For a $1,700 purchase, a visible payment plan removes the final hesitation.
**Impact:** Medium — reduces price-based drop-off on the Business package.

### 5. Fix the Blog Pricing Contradiction
**What:** Update blog post #1 (`web-design-cost-wollongong-2025`) which quotes website cost as "$2,000–$5,000" — contradicting the actual Pricing page showing $800 and $1,700.
**Where:** `src/data/blogPosts.ts`
**Why:** A prospect who reads both pages will lose trust immediately. This is a credibility-destroying inconsistency.
**Impact:** Medium — prevents trust erosion from informed prospects.

### 6. Upgrade Testimonials with Verifiable Details
**What:** For each testimonial, add full first and last name, business name, suburb, and a link to their Google review (or note "Verified Google Review").
**Where:** `src/pages/Index.tsx` testimonial array
**Why:** "James T., Plumber, Sydney" signals possible fabrication. Full details convert skeptics.
**Impact:** Medium — improves social proof credibility significantly.

### 7. Add ABN to Footer
**What:** Add your ABN number to the footer alongside the business name and address.
**Where:** `src/components/Footer.tsx`
**Why:** Australian SMB buyers check for ABN as a legitimacy signal. It takes 30 seconds to add.
**Impact:** Low-Medium — removes a trust barrier for careful buyers.

### 8. Replace Generic "Get Started" on Pricing Cards
**What:**
- Starter CTA → *"Get a Quote — Starter Website"*
- Business CTA → *"Talk to Us About the Business Package"*
**Where:** `src/pages/Pricing.tsx`
**Why:** Generic CTAs create zero momentum. Package-specific CTAs confirm what the user is signing up for.
**Impact:** Low-Medium — reduces drop-off at the final pricing decision.

---

## Strategic Recommendations (This Month)

### 1. Launch a Portfolio / Case Studies Page
**What:** Create a `/portfolio` or `/case-studies` page with 5–10 real client projects. Each entry should include: client name + trade + suburb, before/after (old vs new site screenshot or description), one measurable result (calls, bookings, rankings).
**Why:** "100+ websites delivered" is your most powerful claim and you provide zero evidence for it. A single case study — *"Illawarra Electrical: from page 3 to Google Maps top 3 in 90 days"* — does more conversion work than all current body copy combined.
**Expected outcome:** 20–35% lift in quote request conversion rate from informed visitors.

### 2. Wire Up "Free Website Review" as a Real Offer
**What:** The "Free Website Review" CTA appears in the hero but goes to the same generic contact form as "Get a Free Quote." Make it a distinct offer: a dedicated landing page that explains what the review covers (SEO check, mobile score, conversion audit), with a simple short form (name, email, website URL).
**Why:** A tangible, scoped offer converts better than a vague CTA. This also captures prospects who are not ready to buy but want value first — allowing email follow-up.
**Expected outcome:** Captures a segment currently bouncing (research-phase visitors). Adds a nurture-ready lead type.

### 3. Add a Founder/Team Section to the About Page
**What:** Add a section with your real name, photo, and 3–4 sentence bio. *"Hi, I'm [Name]. I started Digital Edge after seeing too many Wollongong tradies get ripped off by big-city agencies charging $10k for template sites. Since 2020, I've helped 100+ local businesses..."*
**Why:** The "you deal directly with the people doing the work" claim is your strongest differentiator — and currently no one knows who those people are. A face and a name converts the trust signal from abstract to concrete.
**Expected outcome:** Directly improves brand trust score and differentiates from anonymous offshore competition.

### 4. Add Email Capture with a Lead Magnet
**What:** Create a simple one-page PDF lead magnet: *"The 5-Point Website Checklist Every Wollongong Tradie Needs Before Spending a Dollar on Marketing."* Add an email capture form to the blog sidebar and a homepage banner with this offer.
**Why:** The site currently captures zero visitors who are in the research phase (not yet ready to request a quote). Email capture builds a list you can nurture toward a purchase over weeks or months.
**Expected outcome:** 30–50 new email subscribers per month. Converts to 3–8 additional quote requests per month over a 90-day nurture sequence.

### 5. Add a Comparison Section to the Pricing Page
**What:** Add a simple table comparing Digital Edge Studio against *"Large Agency," "Freelancer," and "DIY Platform"* on dimensions tradies care about: price, turnaround, local knowledge, ongoing support, Google ranking expertise.
**Why:** Prospects are already making this comparison in their head. Helping them reach the right conclusion on your page keeps them from leaving to do the comparison elsewhere.
**Expected outcome:** Reduces bounce from the pricing page; accelerates decision for prospects in a competitive evaluation.

### 6. Remove Salon/Spa Content from the About Page or Create a Separate Vertical
**What:** The "Online Booking Systems" section (barbers, beauty salons, massage parlours, physiotherapists, day spas) directly contradicts the tradie-specialist positioning. Either remove it from the About page or split it to a `/services/booking-systems` page.
**Why:** A plumber landing on your About page and reading about day spa booking systems will question whether you understand their industry. Niche positioning requires commitment.
**Expected outcome:** Tighter messaging alignment; stronger tradie niche authority.

---

## Long-Term Initiatives (This Quarter)

### 1. Add SSR or Prerendering to the React SPA
**What:** The entire site is client-side rendered (React + Vite). Bing, social media scrapers (LinkedIn, Twitter/X, WhatsApp), and Google's first-wave crawler see only an empty HTML shell with generic meta tags. Implement one of:
- **Recommended (medium effort):** `vite-plugin-prerender` — generates static HTML snapshots of known routes at build time. No framework migration required.
- **Best long-term:** Migrate to Next.js for full SSR/SSG. Highest impact but significant rebuild effort.
**Why:** Every social media share shows wrong title/description. Bing may not index your location pages at all. You are selling SEO services while running an inherently limited SEO architecture.
**Estimated impact:** Fixes social sharing previews immediately; improves Bing indexing; reduces Google indexing lag.

### 2. Content Marketing Acceleration — Suburb Landing Pages + Monthly Blog
**What:**
- Create landing pages for 6 high-value Illawarra suburbs: Shellharbour, Kiama, Nowra, Fairy Meadow, Dapto, Thirroul
- Publish 1 blog post per month targeting specific trade + suburb keyword combinations ("electrician website design Shellharbour," "plumber local SEO Kiama")
- Add internal links from location pages to relevant blog posts and vice versa
**Why:** Local SEO is won at the suburb level. Competitors ranking for "web design Kiama" are capturing leads you are not. Each suburb page is a permanent, compounding SEO asset.
**Estimated impact:** 6 new suburb pages × average 50 visits/month = 300+ additional monthly visitors from zero-competition local keywords within 3–6 months.

### 3. Google Review Generation Campaign
**What:** Implement a systematic review request process. After each project launch, email clients a direct link to your Google Business Profile review page with a one-sentence request. Target: 20+ Google reviews within 90 days.
**Why:** Your schema declares 5 reviews — too few for Google star ratings to appear in SERPs. 20+ reviews with an average of 4.5+ stars: (a) unlocks Google star ratings in search results (CTR lift), (b) gives you verifiable social proof to embed on the site, (c) directly improves local map pack ranking.
**Estimated impact:** Star ratings in SERP results typically lift organic CTR by 15–30%. Combined with review widget on homepage, converts the weakest trust signal into the strongest.

---

## Detailed Analysis by Category

### Content & Messaging Analysis

**Score: 61/100**

The homepage H1 — *"Get More Leads & Customers With a Website That Actually Works"* — passes basic comprehension but fails specificity. "That actually works" is a cliché used by every web design competitor. No location signal and no trade signal appear in the headline itself.

The About page contains the strongest writing on the site: *"Too many Australian small businesses are missing out on customers because their website doesn't work properly."* This empathetic, stakes-driven copy should be closer to the homepage hero, not buried on an interior page.

The blog content is keyword-targeted but thin — bullet-point lists with no narrative, no local specificity, unattributed statistics (one contains the grammatical error "hiring a tradies"), and no publishing activity since mid-2024.

**Recommended hero copy:**
- Before: *"Get More Leads & Customers With a Website That Actually Works"*
- After: *"More Calls. More Jobs. A Website That Works as Hard as You Do."*

**Recommended subheadline:**
- Before: *"We build professional, fast-loading websites and run local SEO campaigns..."*
- After: *"We build websites for plumbers, electricians, builders, and tradies across Wollongong and Sydney — so when someone searches for your trade, your phone is the one that rings."*

---

### Conversion Optimization Analysis

**Score: 52/100**

**Critical:** The contact form's `handleSubmit` function uses a hardcoded mock with `setTimeout` — no data is ever sent to a backend. Every lead submitted through the form is lost.

No phone number exists anywhere on the site. Tradies overwhelmingly prefer to call before committing. The absence of a phone number eliminates this buyer segment entirely.

Both hero CTAs ("Get a Free Quote" and "Free Website Review") link to the same `/contact` page. The distinction is advertised but hollow — a skeptical prospect will notice.

The pricing page is missing a high-anchor decoy tier. With only two packages ($800 and $1,700), the $1,700 reads as expensive. Adding a $2,800–$3,500 "Growth" option would make $1,700 feel like the obvious smart choice.

---

### SEO & Discoverability Analysis

**Score: 54/100**

**Architecture risk:** As a client-side SPA, all meta tags, schema, and canonical tags are injected by JavaScript after page load. Social media scrapers (LinkedIn, Twitter/X, WhatsApp), Bing, and Google's first-wave crawler see only the empty `index.html` shell with generic fallback metadata. This means every shared link on social media shows the wrong title and description.

**Schema wins:** `LocalBusiness`, `AggregateRating`, `Review`, `WebSite`, and `FAQPage` schemas are correctly implemented. The `Areas We Serve` hub on the homepage creates good internal link equity to location pages.

**Schema gaps:** No `telephone` in `LocalBusiness` schema (critical for local SEO). No `BreadcrumbList` JSON-LD despite visual breadcrumbs being present (missing rich result eligibility). The `WebSite` schema is injected via `dangerouslySetInnerHTML` outside the `SEOMeta` component, meaning it will not be cleaned up on route changes — creating ghost schema elements in the DOM.

**Sitemap:** All 21 URLs are present. No `<lastmod>` dates on any URL. The homepage uses a trailing slash (`/`) while all other pages do not — inconsistency should be standardized.

**Key fix needed:** Add `"telephone"` to `LocalBusiness` schema and add a static canonical + correct title to `index.html` for the homepage.

---

### Competitive Positioning Analysis

**Score: 58/100**

Pricing transparency is a genuine competitive advantage rarely offered by Wollongong agencies. The 15% Google Ads management model with a disclosed minimum is unusually honest for this market.

However, the tradie specialisation is claimed but not demonstrated. The About page booking systems section (barbers, salons, massage parlours, day spas) directly contradicts a tradie-specialist identity. A plumber visiting the About page sees content written for a beauty industry audience.

The site never makes an explicit comparison against alternatives. A tradie who has just received a $10,000 quote from a Sydney agency, or who is considering Wix, has no content on this site that addresses their specific situation. Competitor framing — even a simple comparison table — would capture these high-intent prospects.

---

### Brand & Trust Analysis

**Score: 48/100**

The site is faceless. No founder name, no team member names, no photographs of real people. For an agency positioning around "you deal directly with us," this is the core trust contradiction.

Testimonials use first name + last initial only (e.g., "James T."). No business names, no suburbs, no photos, no Google review links. The 5-star schema rating from only 5 reviews will not generate star ratings in Google SERPs and carries low trust weight with sophisticated buyers.

No portfolio exists. The claim of "100+ websites delivered" is entirely unverifiable.

---

### Growth & Strategy Analysis

**Score: 44/100**

Zero email capture infrastructure. The blog has no subscription mechanism. The site captures only direct quote inquiries — it has no mechanism to engage prospects who are 30–90 days from a buying decision.

Blog content is stale (last post mid-2024) and internally inconsistent with pricing page claims.

The service ladder (Starter → Business → Maintenance → SEO → Ads) is logical and has genuine upsell potential, but there are no in-page cross-sell prompts connecting packages, no bundle pricing, and no visible upgrade path from the entry package.

The "Free Website Review" is advertised but delivers nothing distinct from the generic quote form — a missed lead capture and nurture opportunity.

---

## Competitor Comparison

| Factor | Digital Edge Studio | Large Sydney Agency | Freelancer (Airtasker) | Wix/Squarespace |
|--------|--------------------|--------------------|----------------------|-----------------|
| Price (website) | $800–$1,700 | $5,000–$30,000 | $500–$2,000 | $0–$500/year |
| Local knowledge | 8/10 | 4/10 | Variable | 0/10 |
| Pricing transparency | 9/10 | 2/10 | 5/10 | 10/10 |
| Portfolio visible | 2/10 | 8/10 | 6/10 | N/A |
| Trust signals | 4/10 | 7/10 | 5/10 | 9/10 |
| Ongoing support | 8/10 | 6/10 | 2/10 | 5/10 |
| SEO included | 8/10 | 5/10 | 3/10 | 2/10 |
| No lock-in | 9/10 | 3/10 | 8/10 | 7/10 |
| Direct access | 9/10 | 2/10 | 9/10 | N/A |

*Digital Edge wins decisively on price-to-value, local knowledge, and direct access. Loses on trust evidence and portfolio visibility.*

---

## Revenue Impact Summary

| Recommendation | Est. Monthly Impact | Confidence | Timeline |
|---------------|-------------------|------------|----------|
| Fix contact form (recover lost leads) | $2,000–$5,000 | High | 1 day |
| Add phone number | $800–$2,000 | High | 1 day |
| Launch portfolio/case studies page | $1,500–$3,500 | High | 2 weeks |
| Add urgency to CTAs | $400–$900 | Medium | 1 day |
| Wire up "Free Website Review" as real offer | $600–$1,500 | Medium | 1 week |
| Email capture + lead magnet | $500–$1,200 | Medium | 2 weeks |
| Add founder story to About page | $300–$800 | Medium | 3 days |
| Suburb landing pages (6 pages) | $800–$2,000 | Medium | 4 weeks |
| Google review campaign (20+ reviews) | $600–$1,500 | Medium | 8 weeks |
| Add SSR/prerendering | $500–$1,500 | Medium | 4 weeks |
| **Total Potential** | **$8,000–$19,900/mo** | | |

*Revenue estimates based on typical Australian web design agency pricing ($800–$3,500 per project, $550+/month retainer), assuming 200–500 monthly visitors and a 0.5–2% baseline conversion rate.*

---

## Next Steps

1. **Fix the contact form today** — wire it to Formspree or Netlify Forms. This is the single highest-ROI action available and takes under an hour.
2. **Add your phone number** to the nav, contact page, and footer before anything else.
3. **Build a portfolio page this week** — even 5 client screenshots with names and one result each will transform your credibility with tradie prospects.
4. **Commit to the tradie niche** — remove or relocate the salon/spa booking content from the About page, and rewrite the homepage hero with trade-specific language.
5. **Set up a Calendly link** for the "Book a Free Consultation" CTA so it books a real call instead of sending to the generic form.

*Generated by AI Marketing Suite — `/market-audit`*
