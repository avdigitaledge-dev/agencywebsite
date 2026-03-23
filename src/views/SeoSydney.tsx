"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MapPin, Star, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ScrollReveal } from "@/components/ScrollReveal";
import { staggerB, fadeUpB } from "@/lib/animations";

const SeoSydney = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Digital Edge Studio",
    "description": "SEO agency serving Sydney specialising in local SEO, Google Maps optimisation, and content strategy for small businesses across all Sydney regions",
    "url": "https://digitaledgestudio.com/seo-sydney",
    "email": "enquiries@digitaledgestudio.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Wollongong",
      "addressRegion": "NSW",
      "addressCountry": "AU"
    },
    "areaServed": [
      { "@type": "City", "name": "Sydney" },
      { "@type": "City", "name": "Parramatta" },
      { "@type": "City", "name": "Wollongong" },
      { "@type": "State", "name": "NSW" }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "5",
      "bestRating": "5",
      "worstRating": "1"
    },
    "priceRange": "$$",
    "serviceType": ["Local SEO", "Technical SEO", "Google Business Profile Optimisation", "Content Strategy"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does SEO cost in Sydney?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Sydney SEO packages start from $1,000/month. This includes Google Business Profile optimisation, keyword research, on-page SEO, citation building, and monthly reporting. No lock-in contracts — you stay because it works."
        }
      },
      {
        "@type": "Question",
        "name": "How long does SEO take to work in Sydney?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most businesses see noticeable improvements within 3–6 months. Sydney is a competitive market, but our data-driven approach delivers consistent improvements. SEO results compound over time — the longer you invest, the stronger your results."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer local SEO for Sydney businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — local SEO is one of our core services. We optimise your Google Business Profile, build local citations, and target suburb-specific keywords to help your Sydney business appear in Google Maps and local search results."
        }
      },
      {
        "@type": "Question",
        "name": "Are you based in Sydney?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We're based in Wollongong and serve businesses across all of Sydney. You get the personal attention of a boutique agency — not a massive Sydney agency where you're just another account number. We're always available for video calls and can meet in person when needed."
        }
      },
      {
        "@type": "Question",
        "name": "What makes your SEO different from other Sydney agencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Three things set us apart: personal service (you deal directly with the person doing the work), transparent reporting (no vanity metrics — we track what matters), and no lock-in contracts (you stay because it works, not because you're stuck). We also include AEO and GEO optimisation at no extra cost."
        }
      },
      {
        "@type": "Question",
        "name": "Do you guarantee Google rankings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No ethical SEO agency can guarantee specific rankings — Google's algorithm considers hundreds of factors. What we guarantee is transparent reporting, proven strategies, and consistent improvement in your visibility and leads."
        }
      }
    ]
  };

  const services = [
    { title: "Local SEO & Google Maps", desc: "Dominate local search results and Google Maps for Sydney-specific keywords that drive real customers to your door." },
    { title: "Technical SEO Audits", desc: "Comprehensive site audits to identify and fix crawl errors, speed issues, broken links, and technical barriers to ranking." },
    { title: "On-Page SEO Optimisation", desc: "Strategic keyword placement, meta tags, heading structures, and content optimisation to improve your relevance for target searches." },
    { title: "Content Strategy & Creation", desc: "Data-driven content plans and SEO-optimised pages that attract organic traffic and establish your authority in your industry." },
    { title: "Link Building", desc: "Ethical, white-hat link building to increase your domain authority and improve your rankings for competitive Sydney keywords." },
    { title: "Google Business Profile Optimisation", desc: "Complete setup and ongoing optimisation of your Google Business Profile to maximise your visibility in local search and Maps." },
    { title: "AEO & GEO (AI Search)", desc: "Future-proof your SEO with Answer Engine and Generative Engine Optimisation — get cited in AI-powered search results like ChatGPT and Google AI Overviews." },
  ];

  const testimonials = [
    { name: "James T.", role: "Plumber, Wollongong", quote: "Since Digital Edge rebuilt our website, we've had a 60% increase in phone calls from Google. Best investment we've made." },
    { name: "Sarah M.", role: "Small Business Owner, Wollongong", quote: "They made the whole process easy and stress-free. Our new website looks incredible and we're getting more bookings than ever." },
    { name: "Mark L.", role: "Tradie, Illawarra", quote: "The local SEO work has been a game changer. We're now showing up at the top of Google Maps in our area." },
  ];

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'SEO Sydney' }
      ]} />

      {/* Hero */}
      <section className="gradient-hero-mesh relative overflow-hidden section-divider-wave section-divider-wave-muted">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_70%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        <div className="container-tight px-4 py-16 md:py-24 relative z-10">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="show"
            variants={staggerB}
          >
            <motion.div variants={fadeUpB} className="flex items-center gap-2 text-primary-foreground/70 text-sm mb-4">
              <MapPin className="w-4 h-4" />
              <span>Serving Sydney & Greater Sydney</span>
            </motion.div>
            <motion.div variants={fadeUpB} className="flex items-center gap-2 text-primary-foreground/70 text-sm mb-4">
              <Search className="w-4 h-4" />
              <span>SEO Services</span>
            </motion.div>
            <motion.h1 variants={fadeUpB} className="heading-display text-primary-foreground mb-4">
              SEO Services Sydney
            </motion.h1>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/75 max-w-2xl mb-8">
              Get your Sydney business to the top of Google. Personal service, transparent reporting, and no lock-in contracts — SEO that delivers real leads, not vanity metrics.
            </motion.p>
            <motion.div variants={fadeUpB} className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link href="/contact">Get Your Free SEO Audit <ArrowRight className="w-5 h-5 ml-1" /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link href="/pricing">View SEO Packages</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-muted py-8">
        <div className="container-tight px-4">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            {["Sydney SEO Specialist", "No Lock-In Contracts", "Transparent Monthly Reporting", "Free SEO Audit", "AEO & GEO Included"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal variant="B" className="text-center mb-14">
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">
              SEO Services We Offer in Sydney
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Everything your Sydney business needs to rank higher on Google and turn organic traffic into paying customers.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal variant="B" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <motion.div key={s.title} variants={fadeUpB} className="bg-card rounded-2xl p-6 border border-border shadow-card card-premium">
                <CheckCircle2 className="w-6 h-6 text-accent mb-3" />
                <h3 className="font-bold text-foreground font-display mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Why SEO */}
      <section className="section-padding relative" style={{ background: "var(--surface-gradient)" }}>
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="container-tight relative z-10">
          <ScrollReveal variant="B" className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUpB}>
              <h2 className="heading-section text-foreground mb-6">
                Why Sydney Businesses Need Local SEO
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Sydney is one of Australia's most competitive markets for online visibility. With thousands of businesses competing for the same customers, a strong SEO strategy is the difference between being found and being invisible.
                </p>
                <p>
                  Local SEO is the most cost-effective way to get your Sydney business in front of customers who are actively searching for your services — whether they're in the CBD, Western Sydney, the North Shore, or the Sutherland Shire.
                </p>
                <p>
                  Unlike big Sydney agencies where you're just another account number, we provide personal service and transparent reporting. You deal directly with the person doing the work — and we're accountable for every result.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/contact">Get Your Free SEO Audit <ArrowRight className="w-4 h-4 ml-1" /></Link>
                </Button>
              </div>
            </motion.div>
            <motion.div variants={fadeUpB} className="space-y-4">
              {[
                { title: "Google Maps Visibility", desc: "Appear in the local map pack when Sydney customers search for your services." },
                { title: "Qualified Local Leads", desc: "Attract customers who are actively searching for businesses like yours across Sydney's suburbs." },
                { title: "Beat Sydney Competitors", desc: "Outrank competing Sydney businesses with a data-driven SEO strategy built for your market." },
                { title: "Long-Term Growth", desc: "Unlike paid ads, SEO results compound over time — delivering more traffic and leads month after month." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-4 bg-card rounded-xl border border-border card-hover-lift">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background relative">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="container-tight relative z-10">
          <ScrollReveal variant="B" className="text-center mb-14">
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">
              What Our Clients Say
            </motion.h2>
          </ScrollReveal>
          <ScrollReveal variant="B" className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={fadeUpB} className="bg-card rounded-xl p-6 border border-border shadow-card card-hover-lift">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent-warm text-accent-warm" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal variant="B">
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-8 text-center">
              Real SEO Results
            </motion.h2>
            <motion.div variants={fadeUpB} className="grid md:grid-cols-3 gap-6">
              <Link href="/portfolio/grovespark-electrical-wollongong" className="group">
                <div className="bg-card rounded-xl border border-border p-6 hover:border-accent transition-colors card-hover-lift">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">Electrician</span>
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mt-2 mb-2">GroveSpark Electrical</h3>
                  <p className="text-sm text-muted-foreground mb-3">40+ leads/month from zero online presence</p>
                  <span className="text-sm text-accent font-medium">View Case Study →</span>
                </div>
              </Link>
              <Link href="/portfolio/coastal-physio-wollongong" className="group">
                <div className="bg-card rounded-xl border border-border p-6 hover:border-accent transition-colors card-hover-lift">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">Healthcare</span>
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mt-2 mb-2">Coastal Physiotherapy</h3>
                  <p className="text-sm text-muted-foreground mb-3">165% increase in new patient bookings</p>
                  <span className="text-sm text-accent font-medium">View Case Study →</span>
                </div>
              </Link>
              <Link href="/portfolio/bright-clean-services" className="group">
                <div className="bg-card rounded-xl border border-border p-6 hover:border-accent transition-colors card-hover-lift">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">Cleaning</span>
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mt-2 mb-2">Bright & Clean</h3>
                  <p className="text-sm text-muted-foreground mb-3">210% increase in organic leads</p>
                  <span className="text-sm text-accent font-medium">View Case Study →</span>
                </div>
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-tight max-w-3xl mx-auto">
          <ScrollReveal variant="B" className="text-center mb-10">
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">
              SEO Services Sydney — Frequently Asked Questions
            </motion.h2>
          </ScrollReveal>
          <ScrollReveal variant="B" className="space-y-4">
            {faqSchema.mainEntity.map((q) => (
              <motion.div key={q.name} variants={fadeUpB} className="bg-card rounded-xl p-6 border border-border card-hover-lift">
                <h3 className="font-semibold text-foreground mb-2">{q.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{q.acceptedAnswer.text}</p>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Also Serving Nearby Areas */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight">
          <ScrollReveal variant="B" className="text-center mb-10">
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">
              Also Serving Nearby Areas
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Based in Wollongong, we provide SEO services for businesses across NSW.
            </motion.p>
          </ScrollReveal>
          <ScrollReveal variant="B" className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <motion.div variants={fadeUpB}>
              <Link href="/web-design-wollongong" className="group flex gap-4 p-6 bg-card rounded-xl border border-border shadow-card card-hover-lift">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-foreground font-display group-hover:text-accent transition-colors mb-1">Web Design Wollongong</h3>
                  <p className="text-sm text-muted-foreground">Professional, affordable web design for Wollongong businesses — custom websites that rank and convert.</p>
                  <span className="text-sm text-accent font-medium mt-2 inline-flex items-center gap-1">Learn more <ArrowRight className="w-3 h-3" /></span>
                </div>
              </Link>
            </motion.div>
            <motion.div variants={fadeUpB}>
              <Link href="/web-design-south-sydney" className="group flex gap-4 p-6 bg-card rounded-xl border border-border shadow-card card-hover-lift">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-foreground font-display group-hover:text-accent transition-colors mb-1">Web Design South Sydney</h3>
                  <p className="text-sm text-muted-foreground">Serving Hurstville, Kogarah, Rockdale, and the St George area with local web design & SEO.</p>
                  <span className="text-sm text-accent font-medium mt-2 inline-flex items-center gap-1">Learn more <ArrowRight className="w-3 h-3" /></span>
                </div>
              </Link>
            </motion.div>
            <motion.div variants={fadeUpB}>
              <Link href="/web-design-sutherland-shire" className="group flex gap-4 p-6 bg-card rounded-xl border border-border shadow-card card-hover-lift">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-foreground font-display group-hover:text-accent transition-colors mb-1">Web Design Sutherland Shire</h3>
                  <p className="text-sm text-muted-foreground">Web design for Cronulla, Miranda, Caringbah, Sutherland, and surrounds.</p>
                  <span className="text-sm text-accent font-medium mt-2 inline-flex items-center gap-1">Learn more <ArrowRight className="w-3 h-3" /></span>
                </div>
              </Link>
            </motion.div>
            <motion.div variants={fadeUpB}>
              <Link href="/web-design-western-sydney" className="group flex gap-4 p-6 bg-card rounded-xl border border-border shadow-card card-hover-lift">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-foreground font-display group-hover:text-accent transition-colors mb-1">Web Design Western Sydney</h3>
                  <p className="text-sm text-muted-foreground">Affordable web design for Parramatta, Penrith, Liverpool, Blacktown, and beyond.</p>
                  <span className="text-sm text-accent font-medium mt-2 inline-flex items-center gap-1">Learn more <ArrowRight className="w-3 h-3" /></span>
                </div>
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 rotate-180">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
        <div className="container-tight px-4 py-20 text-center relative z-10">
          <ScrollReveal variant="B">
            <motion.h2 variants={fadeUpB} className="heading-section text-primary-foreground mb-4">
              Ready to Rank Higher on Google in Sydney?
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
              Get a free, no-obligation SEO audit for your Sydney business. We'll analyse your current rankings and show you exactly how to get more traffic and leads from Google.
            </motion.p>
            <motion.div variants={fadeUpB} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="btn-shimmer" asChild>
                <Link href="/contact">Get Your Free SEO Audit <ArrowRight className="w-5 h-5 ml-1" /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link href="/services">View Our Services</Link>
              </Button>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default SeoSydney;
