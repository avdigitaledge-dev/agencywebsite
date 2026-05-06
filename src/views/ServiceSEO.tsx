"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { stagger, fadeUp } from "@/lib/animations";
import { Search, CheckCircle2, ArrowRight, MapPin, Target, TrendingUp, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/FAQ";
import { Breadcrumb } from "@/components/Breadcrumb";

const ServiceSEO = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Local SEO Services",
    "description": "Local SEO services that help businesses rank higher on Google Search and Google Maps. Google Business Profile optimisation, keyword targeting, citation building, and monthly reporting. Serving Wollongong, Sydney, and NSW.",
    "provider": {
      "@type": "Organization",
      "name": "Digital Edge Studio",
      "url": "https://digitaledgestudio.com"
    },
    "areaServed": ["Wollongong", "Sydney", "NSW", "Australia"],
    "serviceType": "Local SEO",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Local SEO Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Local SEO Package",
            "description": "Google Business Profile optimisation, local keyword research, on-page SEO, citation building, monthly reporting, and AEO/GEO optimisation included."
          }
        }
      ]
    }
  };

  const seoFAQ = [
    {
      question: "How long does Local SEO take to show results?",
      answer: "Most Wollongong and Sydney businesses see early ranking movement within 8–12 weeks and meaningful lead growth between months 4 and 6. By month 12, established campaigns typically deliver 5–10x the monthly leads of the starting baseline. SEO compounds — every month of optimisation builds on the last."
    },
    {
      question: "How much does Local SEO cost in Australia?",
      answer: "Digital Edge Studio's Local SEO package is $1,000 per month with no lock-in contracts. The Australian market range for legitimate local SEO is roughly $750–$2,500 per month; anything under $500/month is usually outsourced templated work that won't move rankings. We publish a full breakdown in our SEO cost guide."
    },
    {
      question: "What's included in the $1,000/month Local SEO package?",
      answer: "Every Local SEO engagement includes Google Business Profile optimisation, local keyword research, on-page SEO across all key pages, citation and directory building, monthly ranking and traffic reports, and AEO/GEO optimisation for AI search engines like ChatGPT and Google AI Overviews. There are no lock-in contracts and no hidden fees."
    },
    {
      question: "Do I need SEO if I already have a website?",
      answer: "Yes. A website without SEO is invisible to roughly 90% of potential customers because Google won't rank it for the searches that actually drive enquiries. Local SEO is what makes your existing site discoverable — without it, even a great-looking website rarely generates leads."
    },
    {
      question: "What is the difference between SEO and Google Ads?",
      answer: "SEO earns ongoing organic traffic that costs nothing per click and compounds month over month, while Google Ads buys instant paid clicks that stop the moment you pause the budget. Most local businesses get the best return by running Google Ads for the first 3–6 months while SEO ranks build up, then reducing ad spend as organic leads take over."
    },
    {
      question: "Do you offer Local SEO for businesses outside Wollongong?",
      answer: "Yes. We specialise in Wollongong, Illawarra, and Sydney but work with businesses across NSW and the rest of Australia. Every campaign is tailored to the specific suburbs, postcodes, and competitor landscape in the client's service area."
    },
    {
      question: "Can Local SEO get my business into Google's Map Pack?",
      answer: "Yes — Map Pack ranking is the primary goal of Local SEO. The three-business Map Pack appears at the top of most local searches and drives 44% of clicks for queries with local intent. Achieving it requires a fully optimised Google Business Profile, consistent NAP citations across directories, and on-page signals that match the search query."
    }
  ];

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Services', path: '/services' },
        { label: 'Local SEO' }
      ]} />

      {/* ═══ Hero ═══ */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        <div className="container-tight px-4 py-16 md:py-24 relative z-10">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-primary-foreground/90 text-sm font-semibold mb-6">
              <Search className="w-4 h-4" />
              Local SEO Services
            </motion.div>
            <motion.h1 variants={fadeUp} className="heading-display text-primary-foreground mb-4">
              Local SEO Services in Wollongong — <span className="text-gradient">Get Found on Google</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl mb-8">
              Rank in the Google Map Pack within 3–6 months and turn local searches into booked jobs. From $1,000/month, no lock-in contracts. Trusted by 30+ Wollongong, Illawarra and Sydney businesses with a verified 5.0 Google rating.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="btn-shimmer" asChild>
                <Link href="/contact">Get Started <ArrowRight className="w-5 h-5 ml-1" /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link href="/free-website-review">Free Website Review</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* ═══ What is Local SEO? — Definitional / Citation-Ready Block ═══ */}
      <section className="section-padding bg-background border-b border-border/50">
        <div className="container-tight max-w-4xl">
          <ScrollReveal>
            <motion.div variants={fadeUp}>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Definition</span>
              <h2 className="heading-section text-foreground mt-2 mb-6">What is Local SEO?</h2>
              <p className="text-body-lg text-foreground leading-relaxed mb-4">
                <strong>Local SEO is the practice of optimising a business's website and Google Business Profile so it ranks for searches with local intent</strong> — queries like "plumber Wollongong", "physio near me", or "best electrician in Shellharbour". It combines on-page SEO, technical SEO, citation building, and Google Business Profile optimisation to earn rankings in both the standard Google results and the three-business Map Pack at the top of local searches.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Local SEO matters because <strong>46% of all Google searches have local intent</strong> and <strong>76% of people who search "near me" on a smartphone visit a related business within 24 hours</strong> (BrightLocal, 2024). For tradies, hospo operators and small service businesses in Illawarra and Sydney, ranking for those local searches is the single highest-ROI marketing channel available.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="grid sm:grid-cols-3 gap-4 mt-8">
              {[
                { stat: "46%", label: "of all Google searches have local intent" },
                { stat: "76%", label: "visit a business within 24 hrs of a 'near me' search" },
                { stat: "44%", label: "of local clicks go to the Google Map Pack" },
              ].map((item) => (
                <div key={item.stat} className="bg-card rounded-2xl border border-border p-6 text-center">
                  <div className="text-3xl font-display font-bold text-accent mb-2">{item.stat}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ What's Included ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp}>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">What's Included</span>
              <h2 className="heading-section text-foreground mt-2 mb-4">
                Get Found by Customers in Your Area
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                When someone in your area searches for the services you offer, you want to be the first result they see. Our Local SEO service covers everything you need to rank higher on Google Search and Google Maps — so more customers find and contact your business.
              </p>
              <ul className="space-y-3 mb-8 stagger-list">
                {[
                  "Google Business Profile setup and optimisation",
                  "Local keyword research and targeting",
                  "On-page SEO (title tags, meta descriptions, content)",
                  "Citation building and directory listings",
                  "Monthly reporting so you can see the results",
                  "Ongoing strategy adjustments based on data",
                  "AEO & GEO optimisation included at no extra cost",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="cta" asChild>
                <Link href="/contact">Get Started <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden min-h-[300px] group image-hover-glow">
              <Image src="/images/blog/seo-pic.webp" alt="Local SEO and Google Maps search results" width={600} height={400} className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105" />
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Our SEO Process ═══ */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight">
          <ScrollReveal className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">Our SEO Process</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              A proven four-step process that takes your business from invisible to unmissable on Google.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Audit",
                description: "We analyse your current rankings, website health, and competitor landscape."
              },
              {
                step: "02",
                title: "Strategy",
                description: "Custom SEO plan targeting the keywords your customers actually search for."
              },
              {
                step: "03",
                title: "Optimise",
                description: "On-page improvements, content updates, citation building, and technical fixes."
              },
              {
                step: "04",
                title: "Report",
                description: "Monthly reports showing your rankings, traffic, and leads so you can see the ROI."
              },
            ].map((item) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                className="bg-card rounded-2xl border border-border shadow-card p-8 card-hover-lift text-center"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <span className="text-accent font-display font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="heading-card text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Why Local SEO Matters ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">Why Local SEO Matters</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              SEO isn't just about rankings — it's about getting the right customers to find your business at the right time.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: MapPin,
                title: "Google Maps Visibility",
                description: "Appear in the local pack when customers search for services near them."
              },
              {
                icon: Target,
                title: "Qualified Local Leads",
                description: "Attract customers who are actively searching for your services in your area."
              },
              {
                icon: TrendingUp,
                title: "Long-Term Growth",
                description: "Unlike ads, SEO builds compounding value — the longer you invest, the stronger your results."
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="bg-card rounded-2xl border border-border shadow-card p-8 card-hover-lift text-center"
              >
                <div className="w-12 h-12 rounded-xl gradient-cta flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="heading-card text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </ScrollReveal>
          <div className="text-center mt-8">
            <Link href="/reviews" className="text-accent hover:underline inline-flex items-center gap-1 mt-4">
              Read what our clients say <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ Results Timeline ═══ */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight max-w-5xl">
          <ScrollReveal className="text-center mb-14">
            <motion.span variants={fadeUp} className="text-accent font-semibold text-sm uppercase tracking-wider">Realistic Timeline</motion.span>
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mt-2 mb-4">What to Expect Month by Month</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Local SEO is not instant. Here's the honest timeline based on what we typically see for tradies, hospo and small service businesses in Wollongong, Illawarra and Sydney.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid md:grid-cols-3 gap-6">
            {[
              {
                window: "Months 1–3",
                heading: "Foundations",
                summary: "Audit, fix and rebuild the basics. Most ranking gains are still ahead — but the groundwork that earns them is being laid.",
                outcomes: [
                  "Google Business Profile fully optimised",
                  "Top 10–20 local keywords mapped and prioritised",
                  "On-page SEO fixed across key service and location pages",
                  "Initial citation and directory cleanup",
                  "First page-one rankings on long-tail terms",
                ],
              },
              {
                window: "Months 4–6",
                heading: "Lead Growth",
                summary: "Map Pack rankings start landing for primary keywords and enquiry volume rises noticeably. This is when most clients first feel SEO 'working'.",
                outcomes: [
                  "Map Pack rankings for 1–3 primary local keywords",
                  "30–80% lift in organic traffic vs baseline",
                  "Measurable rise in calls, form fills and Google Business Profile actions",
                  "Reduced reliance on paid ads to hit lead targets",
                  "First quantifiable ROI vs the monthly fee",
                ],
              },
              {
                window: "Months 7–12",
                heading: "Compounding Returns",
                summary: "Rankings stabilise across multiple keywords and suburbs. Lead volume typically reaches 5–10x the starting baseline at a fraction of the cost-per-lead of paid ads.",
                outcomes: [
                  "Stable Map Pack rankings across most target keywords",
                  "5–10x monthly lead volume vs month one",
                  "Cost-per-lead 50–80% lower than equivalent Google Ads spend",
                  "Multiple suburb-level pages ranking on page one",
                  "Long-tail organic queries delivering qualified, ready-to-book traffic",
                ],
              },
            ].map((phase) => (
              <motion.div
                key={phase.window}
                variants={fadeUp}
                className="bg-card rounded-2xl border border-border shadow-card p-8 card-hover-lift flex flex-col"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="w-5 h-5 text-accent" />
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">{phase.window}</span>
                </div>
                <h3 className="heading-card text-foreground mb-3">{phase.heading}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{phase.summary}</p>
                <ul className="space-y-2 mt-auto">
                  {phase.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </ScrollReveal>

          <ScrollReveal className="text-center mt-10">
            <motion.p variants={fadeUp} className="text-sm text-muted-foreground italic max-w-2xl mx-auto">
              Timelines vary with the competitiveness of your industry, the starting state of your website, and how aggressively competitors are also investing. We'll give you a specific 6- and 12-month forecast for your market in your free audit.
            </motion.p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Quantified Case Results ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight max-w-6xl">
          <ScrollReveal className="text-center mb-14">
            <motion.span variants={fadeUp} className="text-accent font-semibold text-sm uppercase tracking-wider">Real Results, Real Clients</motion.span>
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mt-2 mb-4">Local SEO Outcomes for Wollongong & Sydney Businesses</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Three named clients, three industries, three documented outcomes from the same Local SEO playbook.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid lg:grid-cols-3 gap-6">
            {[
              {
                client: "Volt Current Electrical",
                location: "Wollongong, NSW",
                industry: "Electrician",
                starting: "Zero online presence after 8 years in business; spending $2,000/month on letterbox drops with minimal return.",
                outcome: "From 0 online leads to 40+ enquiries per month within 4 months. Top 3 ranking for 'electrician Wollongong' within 3 months. 12x ROI in the first 6 months.",
                href: "/portfolio/volt-current-electrical-wollongong",
                stats: [
                  { value: "40+", label: "leads/mo" },
                  { value: "Top 3", label: "Google rank" },
                  { value: "+340%", label: "phone calls" },
                ],
              },
              {
                client: "Precision Plumbing Illawarra",
                location: "Illawarra, NSW",
                industry: "Plumber",
                starting: "Self-built Wix site, 78% bounce rate, $120 cost-per-lead, $1,500/mo wasted on Google Ads.",
                outcome: "Near-doubled revenue in 6 months. 280% lift in organic search traffic. Cost-per-lead dropped from $120 to $34. Google Ads spend cut by $900/month while leads grew.",
                href: "/portfolio/precision-plumbing-illawarra",
                stats: [
                  { value: "+94%", label: "revenue" },
                  { value: "+280%", label: "organic traffic" },
                  { value: "−72%", label: "cost/lead" },
                ],
              },
              {
                client: "Coastal Physiotherapy",
                location: "Wollongong, NSW",
                industry: "Healthcare",
                starting: "Outdated WordPress site, 6.2s mobile load time, no online booking, 78% mobile traffic with poor performance.",
                outcome: "165% increase in new patient bookings in the first quarter. 73% of bookings now come through the website (up from 0%). Ranked #1 for 'physiotherapist Wollongong' within 4 months.",
                href: "/portfolio/coastal-physio-wollongong",
                stats: [
                  { value: "+165%", label: "new bookings" },
                  { value: "#1", label: "Google rank" },
                  { value: "73%", label: "online bookings" },
                ],
              },
            ].map((result) => (
              <motion.article
                key={result.client}
                variants={fadeUp}
                className="bg-card rounded-2xl border border-border shadow-card p-7 card-hover-lift flex flex-col"
              >
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground mb-3">
                  <span>{result.industry}</span>
                  <span>•</span>
                  <span>{result.location}</span>
                </div>
                <h3 className="heading-card text-foreground mb-4">{result.client}</h3>

                <div className="grid grid-cols-3 gap-2 mb-5 text-center">
                  {result.stats.map((s) => (
                    <div key={s.label} className="bg-accent/5 rounded-lg p-3 border border-accent/10">
                      <div className="text-lg font-display font-bold text-accent leading-tight">{s.value}</div>
                      <div className="text-[11px] text-muted-foreground mt-1 leading-tight">{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="text-sm space-y-3 mb-5">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">Starting state</div>
                    <p className="text-foreground/80 leading-relaxed">{result.starting}</p>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">Outcome</div>
                    <p className="text-foreground/80 leading-relaxed">{result.outcome}</p>
                  </div>
                </div>

                <Link href={result.href} className="text-accent hover:underline inline-flex items-center gap-1 text-sm font-semibold mt-auto">
                  Read full case study <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.article>
            ))}
          </ScrollReveal>

          <ScrollReveal className="text-center mt-10">
            <motion.div variants={fadeUp}>
              <Button variant="cta" asChild>
                <Link href="/portfolio">See all case studies <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ CTA Section ═══ */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        {/* Top wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 rotate-180">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
        <div className="container-tight px-4 py-20 text-center relative z-10">
          <ScrollReveal>
            <motion.h2 variants={fadeUp} className="heading-section text-primary-foreground mb-4">
              Ready to Rank Higher on Google?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
              Get in touch for a free, no-obligation chat about how Local SEO can help your business get found by more customers.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="hero" size="lg" className="btn-shimmer" asChild>
                <Link href="/contact">Get Started <ArrowRight className="w-5 h-5 ml-1" /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link href="/free-website-review">Free Website Review</Link>
              </Button>
            </motion.div>
          </ScrollReveal>
        </div>
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <FAQ
        faqs={seoFAQ}
        title="Local SEO — Frequently Asked Questions"
      />

      {/* ═══ Internal Links ═══ */}
      <section className="section-padding bg-background border-t border-border">
        <div className="container-tight">
          <ScrollReveal className="text-center">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-8">Explore More</motion.h2>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              {[
                { label: "All Services", path: "/services" },
                { label: "AEO & GEO", path: "/services/aeo-geo" },
                { label: "Google Ads", path: "/services/google-ads" },
                { label: "Gym Marketing", path: "/gym-marketing" },
                { label: "Digital Marketing", path: "/services/digital-marketing" },
                { label: "Pricing", path: "/pricing" },
                { label: "Client Reviews", path: "/reviews" },
                { label: "SEO Wollongong", path: "/seo-wollongong" },
                { label: "Web Design Wollongong", path: "/web-design-wollongong" },
                { label: "Web Design Sydney", path: "/web-design-sydney" },
                { label: "SEO Pricing Guide", path: "/blog/seo-cost-australia" },
                { label: "15 Ways to Improve Your SEO", path: "/blog/improve-website-seo-australia" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <Button key={link.path} variant="outline" asChild>
                  <Link href={link.path}>{link.label}</Link>
                </Button>
              ))}
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default ServiceSEO;
