"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ScrollReveal } from "@/components/ScrollReveal";
import { staggerB, fadeUpB } from "@/lib/animations";

const WebDesignCentralCoast = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does web design cost on the Central Coast?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Central Coast web design packages start from $1,200 for a Starter Website and $1,850 for a Business Website. We offer transparent, fixed pricing with no hidden fees — far more competitive than most Central Coast agencies."
        }
      },
      {
        "@type": "Question",
        "name": "What areas on the Central Coast do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We work with businesses across the entire Central Coast — from Gosford to Wyong, including Terrigal, Erina, Tuggerah, Woy Woy, and Umina Beach. We target location-specific SEO keywords for your suburb."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer SEO services for Central Coast businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We provide local SEO, Google Business Profile optimisation, and content strategies to help Central Coast businesses rank higher in local search results and attract more customers from the region."
        }
      },
      {
        "@type": "Question",
        "name": "What makes you different from other Central Coast web designers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We focus exclusively on results — more leads, more phone calls, more customers. We're more competitive than most Central Coast agencies, with no lock-in contracts and transparent pricing. You get a real partner, not a faceless agency."
        }
      }
    ]
  };

  const services = [
    { title: "Web Design Central Coast", desc: "Custom, conversion-focused websites for Central Coast businesses. We don't use generic templates — every site is built for your specific goals." },
    { title: "Local SEO Central Coast", desc: "Rank higher in Central Coast local search results. We target suburb-specific keywords so the right customers find you first." },
    { title: "Google Ads", desc: "Managed Google Ads campaigns for Central Coast businesses. Pay only for clicks from real potential customers in your area." },
    { title: "Ecommerce Web Design", desc: "Shopify and WooCommerce stores for Central Coast retailers wanting to sell online to customers across Australia." },
    { title: "Small Business Websites", desc: "Reliable web design for Central Coast small businesses. Professional results without the big-agency price tag." },
    { title: "Website Redesign", desc: "Transform your outdated website into a modern, fast-loading site that converts visitors into customers." },
  ];

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Web Design Central Coast | Local Website Designer",
    "description": "Professional web design for Central Coast businesses. Custom websites, local SEO, and digital marketing for small businesses and tradies in Gosford, Wyong & the Central Coast NSW.",
    "url": "https://digitaledgestudio.com/web-design-central-coast",
    "mainEntity": {
      "@type": "Service",
      "name": "Web Design in Central Coast",
      "provider": { "@id": "https://digitaledgestudio.com/#business" },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Central Coast",
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
        { label: 'Web Design Central Coast' }
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
              <span>Serving Gosford to Wyong & All Central Coast</span>
            </motion.div>
            <motion.h1 variants={fadeUpB} className="heading-display text-primary-foreground mb-4">
              Web Design Central Coast
            </motion.h1>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/75 max-w-2xl mb-8">
              Reliable, professional web design for Central Coast businesses. Custom websites that rank on Google, generate leads, and help you tap into one of Australia's fastest growing coastal markets.
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
            {["Serving Gosford to Wyong", "No Lock-In Contracts", "From $1,200", "Free Consultation", "Local SEO Included"].map((item) => (
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
              Web Design & Digital Marketing for Central Coast Businesses
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              From Gosford to Wyong, Terrigal to Tuggerah — we build websites that make Central Coast businesses stand out online.
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
                Reliable Central Coast Web Design Without Compromise
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The Central Coast is one of Australia's fastest growing regions, with more businesses launching every year. To compete, you need a professional online presence that captures local customers before your competitors do.
                </p>
                <p>
                  Whether you're in Gosford, Wyong, Terrigal, Erina, or Tuggerah — we build websites specifically optimised for your local area, targeting the keywords your Central Coast customers actually search.
                </p>
                <p>
                  No lock-in contracts, no hidden fees. Just a professional website that works.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/contact">Get a Free Central Coast Web Design Quote <ArrowRight className="w-4 h-4 ml-1" /></Link>
                </Button>
              </div>
            </motion.div>
            <motion.div variants={fadeUpB} className="space-y-4">
              {[
                { title: "Central Coast Areas We Serve", desc: "Gosford, Wyong, Terrigal, Erina, Tuggerah, Woy Woy, Umina — and everywhere in between." },
                { title: "Transparent Pricing", desc: "Websites from $1,200. No surprise invoices, no ongoing lock-in — just honest pricing upfront." },
                { title: "Central Coast SEO", desc: "We optimise for the suburbs and keywords your Central Coast customers actually search." },
                { title: "Fast Turnaround", desc: "Most Central Coast website projects completed in 4–8 weeks, not months." },
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
              Central Coast Web Design — Frequently Asked Questions
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
              We work with businesses across NSW — not just the Central Coast.
            </motion.p>
          </ScrollReveal>
          <ScrollReveal variant="B" className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <motion.div variants={fadeUpB}>
              <Link href="/web-design-sydney" className="group flex gap-4 p-6 bg-card rounded-xl border border-border shadow-card card-hover-lift">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-foreground font-display group-hover:text-accent transition-colors mb-1">Web Design Sydney</h3>
                  <p className="text-sm text-muted-foreground">Professional web design and local SEO for businesses across Sydney, Western Sydney, and the Sutherland Shire.</p>
                  <span className="text-sm text-accent font-medium mt-2 inline-flex items-center gap-1">Learn more <ArrowRight className="w-3 h-3" /></span>
                </div>
              </Link>
            </motion.div>
            <motion.div variants={fadeUpB}>
              <Link href="/web-design-newcastle" className="group flex gap-4 p-6 bg-card rounded-xl border border-border shadow-card card-hover-lift">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-foreground font-display group-hover:text-accent transition-colors mb-1">Web Design Newcastle</h3>
                  <p className="text-sm text-muted-foreground">Professional web design and local SEO for businesses across Newcastle, Lake Macquarie, and the Hunter Valley.</p>
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
              Ready to Grow Your Central Coast Business Online?
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
              Get a free, no-obligation quote for your Central Coast website. We'll discuss your goals and build a solution that fits your budget.
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

export default WebDesignCentralCoast;
