"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Scale, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ScrollReveal } from "@/components/ScrollReveal";
import { staggerB, fadeUpB } from "@/lib/animations";


const WebDesignLawyers = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Law Firm Website Design Sydney",
    "description": "Professional website design for law firms and legal professionals in Sydney, Wollongong and NSW. Custom sites built to generate client enquiries and build trust.",
    "provider": {
      "@type": "Organization",
      "name": "Digital Edge Studio",
      "url": "https://digitaledgestudio.com"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Law Firms and Legal Professionals"
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
        "name": "How much does a law firm website cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our law firm website packages start from $1,500. This includes professional design, practice area pages, secure contact forms, attorney profiles, and local SEO setup."
        }
      },
      {
        "@type": "Question",
        "name": "Do you understand legal advertising regulations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we're familiar with the Legal Profession Uniform Law requirements for legal advertising in Australia and ensure your website is compliant while still being effective at generating leads."
        }
      },
      {
        "@type": "Question",
        "name": "Can you build separate pages for each practice area?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Dedicated practice area pages are one of the most effective SEO strategies for law firms. Each page targets specific legal keywords and helps potential clients find the exact service they need."
        }
      },
      {
        "@type": "Question",
        "name": "Will my law firm rank on Google in Sydney?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We include local SEO setup and Google Business Profile optimisation in every project. While rankings depend on competition and other factors, our approach gives your firm the best foundation for visibility."
        }
      },
      {
        "@type": "Question",
        "name": "Do you include client testimonial functionality?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we build in testimonial sections that let you display client feedback within the compliance guidelines set by your professional obligations."
        }
      },
      {
        "@type": "Question",
        "name": "Can you help with Google Ads for law firms?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We build landing pages optimised for legal Google Ads campaigns. We can also manage your Google Ads as an add-on service to drive immediate enquiries."
        }
      }
    ]
  };

  const niches = [
    "Law Firms", "Solicitors", "Barristers", "Migration Agents", "Conveyancers", "Family Lawyers", "Criminal Lawyers"
  ];

  const features = [
    { title: "Practice Area Pages", desc: "Dedicated pages for each area of law you practice — boosting SEO and helping clients find the right service." },
    { title: "Secure Contact & Intake Forms", desc: "Encrypted forms for confidential enquiries and client intake that protect sensitive information." },
    { title: "Professional Trust-Building Design", desc: "Authoritative design showcasing credentials, memberships, awards, and professional registrations." },
    { title: "Attorney Profile Pages", desc: "Professional lawyer profiles with experience, specialisations, and direct contact information." },
    { title: "Client Testimonials", desc: "Display client reviews within compliance guidelines to build confidence with prospective clients." },
    { title: "Local SEO & Google Business Profile", desc: "Rank for searches like 'lawyer Sydney' or 'family lawyer near me' in your practice area." },
    { title: "Mobile-First Design", desc: "A professional experience on every device — because potential clients research on their phones." },
    { title: "Content & Blog Integration", desc: "Publish legal insights and articles that demonstrate expertise and boost organic search rankings." },
  ];

  const testimonials = [
    { name: "David H.", role: "Principal Solicitor, Sydney", quote: "Our new website has dramatically increased our online enquiries. The practice area pages rank well and bring in highly qualified leads." },
    { name: "Sarah L.", role: "Family Lawyer, Western Sydney", quote: "The professional design immediately builds trust with potential clients. We've noticed more people mention the website when they call." },
    { name: "James P.", role: "Migration Agent, CBD", quote: "The local SEO work means we now show up for key searches in our area. The ROI on the website has been outstanding." },
  ];

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Industries', path: '/industries' },
        { label: 'Law Firm Website Design' }
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
              <Scale className="w-4 h-4" />
              <span>Built for Legal Professionals</span>
            </motion.div>
            <motion.h1 variants={fadeUpB} className="heading-display text-primary-foreground mb-4">
              Law Firm Website Design Sydney
            </motion.h1>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/75 max-w-2xl mb-8">
              Your law firm's website is your most powerful client acquisition tool. We build professional, trust-building websites for Sydney law firms with practice area pages, secure forms, and local SEO.
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
          <p className="text-center text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wide">Legal Professionals We Build Websites For</p>
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
              Everything a Law Firm Website Needs
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              We've built websites for legal professionals and know exactly what works. Here's what every law firm website needs.
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
                Why Your Law Firm Needs a Professional Website
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Trust and credibility are paramount in legal services. Potential clients research extensively before contacting a lawyer — your website is often the deciding factor in whether they pick up the phone or move to a competitor.
                </p>
                <p>
                  A professional website with clear practice area pages, lawyer profiles, and client testimonials tells potential clients that you're established, experienced, and trustworthy. It's your 24/7 business card.
                </p>
                <p>
                  Compliance matters. Legal advertising in Australia is governed by the Legal Profession Uniform Law. We understand these requirements and ensure your website meets them while still converting visitors into clients.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeUpB} className="space-y-4">
              <h3 className="font-bold text-foreground font-display text-lg mb-4">What Our Legal Clients Get:</h3>
              {[
                "More client enquiries from local Google searches",
                "A professional website that builds instant trust",
                "Practice area pages that rank for specific legal searches",
                "Secure contact forms for confidential enquiries",
                "A compliant website that meets advertising regulations",
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
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">What Legal Professionals Say</motion.h2>
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
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">Law Firm Website FAQs</motion.h2>
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
              Real Results for Legal Professionals
            </motion.h2>
            <motion.div variants={fadeUpB} className="grid md:grid-cols-1 max-w-lg mx-auto gap-6">
              <Link href="/portfolio" className="group">
                <div className="bg-card rounded-xl border border-border p-6 hover:border-accent transition-colors card-hover-lift">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">Legal</span>
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mt-2 mb-2">Sydney Law Firm</h3>
                  <p className="text-sm text-muted-foreground mb-3">3x increase in online client enquiries within 6 months</p>
                  <span className="text-sm text-accent font-medium">View Case Study →</span>
                </div>
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Industries */}
      <section className="section-padding bg-muted">
        <div className="container-tight">
          <ScrollReveal variant="B" className="text-center mb-8">
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">More Industries We Serve</motion.h2>
          </ScrollReveal>
          <ScrollReveal variant="B" className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Accountants & Financial Services", href: "/web-design-accountants" },
              { name: "Real Estate Agents", href: "/web-design-real-estate" },
              { name: "Healthcare & Allied Health", href: "/web-design-healthcare" },
            ].map((ind) => (
              <motion.div key={ind.name} variants={fadeUpB}>
                <Link href={ind.href} className="group block">
                  <div className="bg-card rounded-xl p-6 border border-border shadow-card card-hover-lift text-center">
                    <h3 className="font-bold text-foreground font-display group-hover:text-accent transition-colors">{ind.name}</h3>
                    <span className="text-sm text-accent font-medium mt-2 inline-block">Learn More →</span>
                  </div>
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
              Ready to Attract More Clients to Your Firm?
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
              Get a free quote for your law firm website. We'll build a professional, compliant site that generates qualified leads and reflects your firm's expertise.
            </motion.p>
            <motion.div variants={fadeUpB} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="btn-shimmer" asChild>
                <Link href="/contact">Get Your Free Law Firm Website Quote <ArrowRight className="w-5 h-5 ml-1" /></Link>
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

export default WebDesignLawyers;
