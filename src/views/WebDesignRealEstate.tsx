"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Home, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ScrollReveal } from "@/components/ScrollReveal";
import { staggerB, fadeUpB } from "@/lib/animations";


const WebDesignRealEstate = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Real Estate Website Design Sydney",
    "description": "Professional website design for real estate agents and agencies in Sydney and NSW. Custom sites built to generate vendor and buyer leads with property listings, lead capture, and local SEO.",
    "provider": {
      "@type": "Organization",
      "name": "Digital Edge Studio",
      "url": "https://digitaledgestudio.com"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Real Estate Agents and Agencies"
    },
    "areaServed": ["Sydney", "Wollongong", "NSW"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "5",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a real estate website cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our real estate website packages start from $1,500. This includes property listing functionality, lead capture forms, suburb pages, and local SEO setup."
        }
      },
      {
        "@type": "Question",
        "name": "Can you integrate property listings from my CRM?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we can integrate with popular real estate CRMs and listing platforms so your properties display automatically on your website."
        }
      },
      {
        "@type": "Question",
        "name": "Do you build suburb profile pages for local SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We create dedicated suburb pages with market insights, recent sales, and local information that rank for searches like 'real estate agent [suburb].'"
        }
      },
      {
        "@type": "Question",
        "name": "Will my website compete with Domain and REA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your website complements portal listings by giving you a platform you own. It captures direct leads, builds your brand, and ranks for agent-specific searches that portals can't replicate."
        }
      },
      {
        "@type": "Question",
        "name": "Can I capture leads directly on my website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we build lead capture forms for buyer enquiries, vendor appraisals, rental applications, and general contact that feed directly into your CRM."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer Google Ads management for real estate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We build Google Ads landing pages optimised for real estate campaigns. We can also manage your Google Ads campaigns as an add-on service."
        }
      }
    ]
  };

  const niches = [
    "Real Estate Agents", "Property Managers", "Buyers Agents", "Commercial Real Estate", "Real Estate Agencies"
  ];

  const features = [
    { title: "Property Listing Display", desc: "Showcase your listings with professional layouts, image galleries, and detailed property information." },
    { title: "Lead Capture Forms", desc: "Convert website visitors into vendor appraisal requests, buyer enquiries, and rental applications." },
    { title: "Area & Suburb Pages", desc: "Dedicated suburb profile pages that rank for local searches and establish you as the area expert." },
    { title: "Agent Profile Pages", desc: "Professional agent profiles with bios, recent sales, testimonials, and direct contact options." },
    { title: "Google Ads Integration", desc: "Landing pages optimised for Google Ads campaigns that drive vendor and buyer leads." },
    { title: "CRM Integration", desc: "Connect your website to your CRM so leads flow directly into your pipeline." },
    { title: "Virtual Tour Embedding", desc: "Embed 3D virtual tours and video walkthroughs to engage buyers online." },
    { title: "Local SEO for Suburb Targeting", desc: "Rank for searches like 'real estate agent [suburb]' across your key markets." },
  ];

  const testimonials = [
    { name: "Michael R.", role: "Real Estate Agent, Sydney", quote: "Our website now generates more direct enquiries than we ever got from portals alone. The suburb pages have been a game changer for our local SEO." },
    { name: "Jessica T.", role: "Agency Principal, Eastern Suburbs", quote: "The vendor lead generation has been incredible. Homeowners find us on Google and book appraisals directly through the site." },
    { name: "Andrew C.", role: "Property Manager, Inner West", quote: "The CRM integration means every lead goes straight into our system. No more manual data entry — it's saved us hours every week." },
  ];

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Industries', path: '/industries' },
        { label: 'Real Estate Website Design' }
      ]} />

      {/* Hero */}
      <section className="gradient-hero-warm relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        <div className="container-tight px-4 py-16 md:py-24 relative z-10">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="show"
            variants={staggerB}
          >
            <motion.div variants={fadeUpB} className="flex items-center gap-2 text-primary-foreground/70 text-sm mb-4">
              <Home className="w-4 h-4" />
              <span>Built for Real Estate</span>
            </motion.div>
            <motion.h1 variants={fadeUpB} className="heading-display text-primary-foreground mb-4">
              Real Estate Website Design Sydney
            </motion.h1>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/75 max-w-2xl mb-8">
              Stop relying solely on portals for your leads. We build high-converting websites for Sydney real estate agents with property listings, lead capture, and local SEO that generates vendor and buyer enquiries.
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
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-muted" />
          </svg>
        </div>
      </section>

      {/* Sub-niches Strip */}
      <section className="bg-muted py-10">
        <div className="container-tight px-4">
          <p className="text-center text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wide">Real Estate Professionals We Build Websites For</p>
          <div className="flex flex-wrap justify-center gap-3">
            {niches.map((niche) => (
              <span key={niche} className="bg-card border border-border rounded-full px-4 py-2 text-sm font-medium text-foreground">
                {niche}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal variant="B" className="text-center mb-14">
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">
              Everything a Real Estate Website Needs
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              We've built websites for real estate professionals and know exactly what converts. Here's what every real estate website needs.
            </motion.p>
          </ScrollReveal>
          <ScrollReveal variant="B" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <motion.div key={f.title} variants={fadeUpB} className="bg-card rounded-xl p-6 border border-border shadow-card card-hover-lift">
                <CheckCircle2 className="w-5 h-5 text-accent mb-3" />
                <h3 className="font-bold text-foreground font-display text-sm mb-2">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight">
          <ScrollReveal variant="B" className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUpB}>
              <h2 className="heading-section text-foreground mb-6">
                Why Real Estate Agents Need Their Own Website
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Most real estate agents rely entirely on portals like Domain and REA for their online presence. But those portals own the relationship — not you. When a buyer searches, they see your listing alongside every competitor.
                </p>
                <p>
                  Your own website lets you capture leads directly, build your personal brand, and rank in Google for suburb-specific searches. It's the difference between renting your online presence and owning it.
                </p>
                <p>
                  Vendor lead generation starts with credibility. When a homeowner is choosing an agent, the first thing they do is Google you. A professional website with recent sales, testimonials, and market insights wins appraisals.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeUpB} className="space-y-4">
              <h3 className="font-bold text-foreground font-display text-lg mb-4">What Our Real Estate Clients Get:</h3>
              {[
                "More vendor and buyer leads from your own website",
                "A professional brand that stands apart from portals",
                "Google ranking for suburb-specific searches",
                "Lead capture forms that feed your CRM",
                "Suburb profile pages that build local authority",
                "Ongoing support so you're never stuck",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border card-hover-lift">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <p className="text-sm text-foreground">{item}</p>
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
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">What Real Estate Professionals Say</motion.h2>
          </ScrollReveal>
          <ScrollReveal variant="B" className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={fadeUpB} className="bg-card rounded-xl p-6 border border-border shadow-card card-hover-lift">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent-warm text-accent-warm" />)}
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

      {/* FAQ */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight max-w-3xl mx-auto">
          <ScrollReveal variant="B" className="text-center mb-10">
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">Real Estate Website FAQs</motion.h2>
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

      {/* Case Studies */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal variant="B">
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-8 text-center">
              Real Results for Real Estate
            </motion.h2>
            <motion.div variants={fadeUpB} className="grid md:grid-cols-1 max-w-lg mx-auto gap-6">
              <Link href="/portfolio" className="group">
                <div className="bg-card rounded-xl border border-border p-6 hover:border-accent transition-colors card-hover-lift">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">Real Estate</span>
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mt-2 mb-2">Sydney Real Estate Agency</h3>
                  <p className="text-sm text-muted-foreground mb-3">35+ vendor appraisal leads per month from organic search</p>
                  <span className="text-sm text-accent font-medium">View Case Study →</span>
                </div>
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Industries */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight">
          <ScrollReveal variant="B" className="text-center mb-10">
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">Related Industries</motion.h2>
          </ScrollReveal>
          <ScrollReveal variant="B" className="grid md:grid-cols-3 gap-6">
            {[
              { label: "Accountants & Financial Services", href: "/web-design-accountants" },
              { label: "Law Firms & Legal", href: "/web-design-lawyers" },
              { label: "Startups", href: "/web-design-startups" },
            ].map((link) => (
              <motion.div key={link.label} variants={fadeUpB}>
                <Link href={link.href} className="group block bg-card rounded-xl border border-border p-6 hover:border-accent transition-colors card-hover-lift text-center">
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">{link.label}</h3>
                  <span className="text-sm text-accent font-medium mt-2 inline-flex items-center gap-1">Learn More <ArrowRight className="w-4 h-4" /></span>
                </Link>
              </motion.div>
            ))}
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
              Ready to Own Your Online Presence?
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
              Get a free quote for your real estate website. We'll build a site that generates vendor and buyer leads — without relying on portals.
            </motion.p>
            <motion.div variants={fadeUpB} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="btn-shimmer" asChild>
                <Link href="/contact">Get Your Free Real Estate Website Quote <ArrowRight className="w-5 h-5 ml-1" /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link href="/pricing">See Pricing</Link>
              </Button>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default WebDesignRealEstate;
