"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ScrollReveal } from "@/components/ScrollReveal";
import { staggerB, fadeUpB } from "@/lib/animations";

const WebDesignSydney = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does web design cost in Sydney?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Sydney web design packages start from $1,200 for a Starter Website and $1,850 for a Business Website. We offer transparent, fixed pricing with no hidden fees — far more affordable than most Sydney agencies."
        }
      },
      {
        "@type": "Question",
        "name": "Can you build websites for Western Sydney businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we work with businesses across all Sydney regions including Western Sydney, Sutherland Shire, South Sydney, and the Inner West. We target location-specific SEO keywords for your suburb."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer SEO services for Sydney businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We provide local SEO, Google Business Profile optimisation, and content strategies to help Sydney businesses rank higher in local search results."
        }
      },
      {
        "@type": "Question",
        "name": "What makes you different from other Sydney web design agencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We focus exclusively on results — more leads, more phone calls, more customers. We're more affordable than most Sydney agencies, with no lock-in contracts and transparent pricing. You get a real partner, not a faceless agency."
        }
      }
    ]
  };

  const services = [
    { title: "Web Design Sydney", desc: "Custom, conversion-focused websites for Sydney businesses. We don't use generic templates — every site is built for your specific goals." },
    { title: "Local SEO Sydney", desc: "Rank higher in Sydney local search results. We target suburb-specific keywords so the right customers find you first." },
    { title: "Google Ads Sydney", desc: "Managed Google Ads campaigns for Sydney businesses. Pay only for clicks from real potential customers in your area." },
    { title: "Ecommerce Web Design", desc: "Shopify and WooCommerce stores for Sydney retailers wanting to sell online to customers across Australia." },
    { title: "Small Business Websites", desc: "Affordable web design for Sydney small businesses. Professional results without the big-agency price tag." },
    { title: "Website Redesign", desc: "Transform your outdated Sydney website into a modern, fast-loading site that converts visitors into customers." },
  ];

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Web Design Sydney | Affordable Website Designer",
    "description": "Professional web design for Sydney businesses. Custom websites, local SEO, and Google Ads for small businesses and tradies across Sydney, Western Sydney & Sutherland Shire.",
    "url": "https://digitaledgestudio.com/web-design-sydney",
    "mainEntity": {
      "@type": "Service",
      "name": "Web Design in Sydney",
      "provider": { "@id": "https://digitaledgestudio.com/#business" },
      "areaServed": {
        "@type": "City",
        "name": "Sydney",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "New South Wales"
        }
      }
    }
  };

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Web Design Sydney' }
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
              <span>Serving All Sydney Regions & NSW</span>
            </motion.div>
            <motion.h1 variants={fadeUpB} className="heading-display text-primary-foreground mb-4">
              Web Design Sydney
            </motion.h1>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/75 max-w-2xl mb-8">
              Affordable, professional web design for Sydney businesses. Custom websites that rank on Google, generate leads, and grow your business — without the inflated agency fees.
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
            {["Serving All Sydney Regions", "No Lock-In Contracts", "From $1,200", "Free Consultation", "Local SEO Included"].map((item) => (
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
              Web Design & Digital Marketing for Sydney Businesses
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              From the CBD to Western Sydney and the Sutherland Shire — we build websites that make Sydney businesses stand out online.
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
                Affordable Sydney Web Design Without Compromise
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Sydney web design agencies often charge $5,000–$20,000 for websites that don't perform any better than ours. We cut through the inflated pricing to deliver real value for Sydney small businesses.
                </p>
                <p>
                  Whether you're in the Inner West, Northern Beaches, Western Sydney, or the Sutherland Shire — we build websites specifically optimised for your local area, targeting the keywords your customers actually search.
                </p>
                <p>
                  No lock-in contracts, no hidden fees. Just a professional website that works.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/contact">Get a Free Sydney Web Design Quote <ArrowRight className="w-4 h-4 ml-1" /></Link>
                </Button>
              </div>
            </motion.div>
            <motion.div variants={fadeUpB} className="space-y-4">
              {[
                { title: "Sydney Areas We Serve", desc: "Inner West, Western Sydney, Northern Beaches, Sutherland Shire, South Sydney, Eastern Suburbs, Hills District." },
                { title: "Transparent Sydney Pricing", desc: "Websites from $1,200. No surprise invoices, no ongoing lock-in — just honest pricing upfront." },
                { title: "Sydney-Specific SEO", desc: "We optimise for the suburbs and keywords your Sydney customers actually search." },
                { title: "Fast Turnaround", desc: "Most Sydney website projects completed in 4–8 weeks, not months." },
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
              Sydney Web Design — Frequently Asked Questions
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

      {/* Local Case Studies */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal variant="B">
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-8 text-center">
              Real Results in Sydney
            </motion.h2>
            <motion.div variants={fadeUpB} className="grid md:grid-cols-1 gap-6 max-w-lg mx-auto">
              <Link href="/portfolio/allcastle-homes-sydney" className="group">
                <div className="bg-card rounded-xl border border-border p-6 hover:border-accent transition-colors card-hover-lift">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">Builder</span>
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mt-2 mb-2">Allcastle Homes</h3>
                  <p className="text-sm text-muted-foreground mb-3">$2.4M in projects from website enquiries</p>
                  <span className="text-sm text-accent font-medium">View Case Study →</span>
                </div>
              </Link>
            </motion.div>
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
              We work with businesses across NSW — not just Sydney.
            </motion.p>
          </ScrollReveal>
          <ScrollReveal variant="B" className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
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
            <motion.div variants={fadeUpB}>
              <Link href="/web-design-illawarra" className="group flex gap-4 p-6 bg-card rounded-xl border border-border shadow-card card-hover-lift">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-foreground font-display group-hover:text-accent transition-colors mb-1">Web Design Illawarra</h3>
                  <p className="text-sm text-muted-foreground">Serving Shellharbour, Nowra, Kiama, Dapto, and the wider Illawarra region with local web design & SEO.</p>
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
              Ready to Grow Your Sydney Business Online?
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
              Get a free, no-obligation quote for your Sydney website. We'll discuss your goals and build a solution that fits your budget.
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

export default WebDesignSydney;
