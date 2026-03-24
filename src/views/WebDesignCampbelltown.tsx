"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ScrollReveal } from "@/components/ScrollReveal";
import { staggerB, fadeUpB } from "@/lib/animations";

const WebDesignCampbelltown = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Digital Edge Studio",
    "description": "Web design agency serving Campbelltown and Macarthur businesses — custom websites, local SEO, and digital marketing for small businesses and tradies across Campbelltown, Camden & Macarthur NSW",
    "url": "https://digitaledgestudio.com/web-design-campbelltown",
    "email": "enquiries@digitaledgestudio.com",
    "areaServed": [
      { "@type": "City", "name": "Campbelltown" },
      { "@type": "City", "name": "Camden" },
      { "@type": "AdministrativeArea", "name": "Macarthur" },
      { "@type": "City", "name": "Narellan" },
      { "@type": "City", "name": "Ingleburn" },
      { "@type": "State", "name": "NSW" }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "16",
      "bestRating": "5",
      "worstRating": "1"
    },
    "priceRange": "$$",
    "serviceType": ["Web Design", "Local SEO", "Digital Marketing"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does web design cost in Campbelltown?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Campbelltown web design packages start from $1,200 for a Starter Website and $1,850 for a Business Website. We offer transparent, fixed pricing with no hidden fees — far more affordable than most Sydney agencies."
        }
      },
      {
        "@type": "Question",
        "name": "Do you serve Camden and the wider Macarthur region?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we work with businesses across the entire Macarthur region including Campbelltown, Camden, Narellan, Ingleburn, Leumeah, Minto, and surrounding suburbs. We target location-specific SEO keywords for your area."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer SEO services for Campbelltown businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We provide local SEO, Google Business Profile optimisation, and content strategies to help Campbelltown and Macarthur businesses rank higher in local search results."
        }
      },
      {
        "@type": "Question",
        "name": "What makes you different from other Campbelltown web designers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We focus exclusively on results — more leads, more phone calls, more customers. We're more affordable than most agencies, with no lock-in contracts and transparent pricing. We understand the Macarthur market and build websites that convert local traffic into real business."
        }
      }
    ]
  };

  const services = [
    { title: "Web Design Campbelltown", desc: "Custom, conversion-focused websites for Campbelltown businesses. We don't use generic templates — every site is built for your specific goals." },
    { title: "Local SEO Campbelltown", desc: "Rank higher in Campbelltown and Macarthur local search results. We target suburb-specific keywords so the right customers find you first." },
    { title: "Google Ads", desc: "Managed Google Ads campaigns for Campbelltown businesses. Pay only for clicks from real potential customers in your area." },
    { title: "Ecommerce Web Design", desc: "Shopify and WooCommerce stores for Macarthur retailers wanting to sell online to customers across Australia." },
    { title: "Small Business Websites", desc: "Affordable web design for Campbelltown small businesses. Professional results without the big-agency price tag." },
    { title: "Website Redesign", desc: "Transform your outdated website into a modern, fast-loading site that converts visitors into customers across the Macarthur region." },
  ];

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Web Design Campbelltown' }
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
              <span>Serving Campbelltown & Macarthur</span>
            </motion.div>
            <motion.h1 variants={fadeUpB} className="heading-display text-primary-foreground mb-4">
              Web Design Campbelltown
            </motion.h1>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/75 max-w-2xl mb-8">
              Affordable, professional web design for businesses in the Macarthur region. As one of Sydney's fastest-growing corridors, Campbelltown businesses need a website that stands out — we build sites that rank on Google, generate leads, and grow your business.
            </motion.p>
            <motion.div variants={fadeUpB} className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link href="/contact">Get a Free Quote <ArrowRight className="w-5 h-5 ml-1" /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-muted py-8">
        <div className="container-tight px-4">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            {["Serving Campbelltown & Macarthur", "No Lock-In Contracts", "From $1,200", "Free Consultation", "Local SEO Included"].map((item) => (
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
              Web Design & Digital Marketing for Campbelltown Businesses
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              From Campbelltown CBD to Camden, Narellan, and Ingleburn — we build websites that make Macarthur businesses stand out online.
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

      {/* Why Choose Us */}
      <section className="section-padding relative" style={{ background: "var(--surface-gradient)" }}>
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="container-tight relative z-10">
          <ScrollReveal variant="B" className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUpB}>
              <h2 className="heading-section text-foreground mb-6">
                Affordable Campbelltown Web Design Without Compromise
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Campbelltown and the Macarthur region are one of Sydney's fastest-growing corridors — new businesses, tradies, and services are booming. But too many local businesses are stuck with outdated websites or no online presence at all.
                </p>
                <p>
                  We build websites specifically optimised for the Campbelltown and Macarthur market, targeting the keywords your local customers actually search. Whether you're a tradie in Ingleburn, a retailer in Narellan, or a health practice in Camden — we've got you covered.
                </p>
                <p>
                  No lock-in contracts, no hidden fees. Just a professional website that works.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/contact">Get a Free Campbelltown Web Design Quote <ArrowRight className="w-4 h-4 ml-1" /></Link>
                </Button>
              </div>
            </motion.div>
            <motion.div variants={fadeUpB} className="space-y-4">
              {[
                { title: "Areas We Serve", desc: "Campbelltown, Camden, Narellan, Ingleburn, Leumeah, Minto, Macarthur, and surrounding suburbs." },
                { title: "Transparent Pricing", desc: "Websites from $1,200. No surprise invoices, no ongoing lock-in — just honest pricing upfront." },
                { title: "Campbelltown SEO", desc: "We optimise for the suburbs and keywords your Campbelltown and Macarthur customers actually search." },
                { title: "Fast Turnaround", desc: "Most Campbelltown website projects completed in 4–8 weeks, not months." },
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

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-tight max-w-3xl mx-auto">
          <ScrollReveal variant="B" className="text-center mb-10">
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">
              Campbelltown Web Design — Frequently Asked Questions
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
              We work with businesses across NSW — not just Campbelltown.
            </motion.p>
          </ScrollReveal>
          <ScrollReveal variant="B" className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <motion.div variants={fadeUpB}>
              <Link href="/web-design-sydney" className="group flex gap-4 p-6 bg-card rounded-xl border border-border shadow-card card-hover-lift">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-foreground font-display group-hover:text-accent transition-colors mb-1">Web Design Sydney</h3>
                  <p className="text-sm text-muted-foreground">Professional web design and local SEO for businesses across all Sydney regions and suburbs.</p>
                  <span className="text-sm text-accent font-medium mt-2 inline-flex items-center gap-1">Learn more <ArrowRight className="w-3 h-3" /></span>
                </div>
              </Link>
            </motion.div>
            <motion.div variants={fadeUpB}>
              <Link href="/web-design-wollongong" className="group flex gap-4 p-6 bg-card rounded-xl border border-border shadow-card card-hover-lift">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-foreground font-display group-hover:text-accent transition-colors mb-1">Web Design Wollongong</h3>
                  <p className="text-sm text-muted-foreground">Professional web design and local SEO for tradies and small businesses in Wollongong and surrounds.</p>
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
        {/* Top wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 rotate-180">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
        <div className="container-tight px-4 py-20 text-center relative z-10">
          <ScrollReveal variant="B">
            <motion.h2 variants={fadeUpB} className="heading-section text-primary-foreground mb-4">
              Ready to Grow Your Campbelltown Business Online?
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
              Get a free, no-obligation quote for your Campbelltown website. We'll discuss your goals and build a solution that fits your budget.
            </motion.p>
            <motion.div variants={fadeUpB} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="btn-shimmer" asChild>
                <Link href="/contact">Get Your Free Quote <ArrowRight className="w-5 h-5 ml-1" /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link href="/services">Our Services</Link>
              </Button>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default WebDesignCampbelltown;
