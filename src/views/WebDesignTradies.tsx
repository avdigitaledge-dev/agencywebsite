"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2, Wrench, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";

/* ── Animation helpers ─────────────────────────────────── */
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ── Scroll-triggered section wrapper ──────────────────── */
const ScrollReveal = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const WebDesignTradies = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Tradie Website Design Wollongong",
    "description": "Professional website design for tradies and contractors in Wollongong, Sydney and NSW. Custom sites built to generate leads and phone calls.",
    "provider": {
      "@type": "Organization",
      "name": "Digital Edge Studio",
      "url": "https://digitaledgestudio.com"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Tradies and Contractors"
    },
    "areaServed": ["Wollongong", "Sydney", "NSW"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you build websites for tradies in Wollongong?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — tradie website design is our specialty. We build websites for plumbers, electricians, builders, cleaners, painters, and all types of contractors in Wollongong, Sydney, and across NSW."
        }
      },
      {
        "@type": "Question",
        "name": "What makes a good tradie website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A great tradie website is fast, mobile-friendly, shows up in local Google searches, has your phone number prominently displayed, and makes it easy for customers to request a quote. We build all of this in."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a tradie website cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our tradie website packages start from $1,200. We keep it simple and affordable so tradies can get a professional website without breaking the bank."
        }
      },
      {
        "@type": "Question",
        "name": "Will my tradie website rank on Google?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We include SEO setup in all our tradie websites — including keyword optimisation, Google Business Profile setup, and local SEO targeting for your service area (Wollongong, Sydney, or wherever you operate)."
        }
      },
      {
        "@type": "Question",
        "name": "Can you build websites for specific trades like plumbers or electricians?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We build industry-specific websites for plumbers, electricians, builders, cleaners, painters, landscapers, HVAC technicians, and more — each tailored to attract the right customers for that trade."
        }
      }
    ]
  };

  const trades = [
    "Plumbers", "Electricians", "Builders & Carpenters", "Cleaners", "Painters",
    "Landscapers", "HVAC & Air Con", "Concreters", "Tilers", "Roofers",
    "Fencers", "Pest Control"
  ];

  const features = [
    { title: "Click-to-Call Phone Number", desc: "Your number front and centre on every page — one tap and customers are calling you." },
    { title: "Get a Quote Forms", desc: "Simple enquiry forms that capture leads and send them straight to your inbox." },
    { title: "Local SEO Built-In", desc: "Optimised for Wollongong, Sydney, and your specific service area from day one." },
    { title: "Google Business Profile Setup", desc: "We set up and optimise your GMB so you show up in Google Maps." },
    { title: "Mobile-First Design", desc: "Most tradie searches happen on phones — your site will look perfect on all devices." },
    { title: "Before & After Gallery", desc: "Show off your work with photo galleries that build trust and convert visitors." },
    { title: "Fast Loading Speed", desc: "Nobody waits for slow sites. We build fast-loading sites that Google loves." },
    { title: "Reviews & Testimonials", desc: "Display your customer reviews to build credibility and convert more visitors." },
  ];

  const testimonials = [
    { name: "James T.", role: "Plumber, Wollongong", quote: "Since Digital Edge rebuilt our website, we've had a 60% increase in phone calls from Google. Best investment we've made." },
    { name: "Mark L.", role: "Electrician, Illawarra", quote: "The local SEO work has been a game changer. We're now showing up at the top of Google Maps in our area." },
    { name: "Dave B.", role: "Builder, Sydney", quote: "We went from zero online presence to ranking on page one for local searches within 3 months. Incredible results." },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Web Design for Tradies' }
      ]} />

      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        <div className="container-tight px-4 py-16 md:py-24 relative z-10">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2 text-primary-foreground/70 text-sm mb-4">
              <Wrench className="w-4 h-4" />
              <span>Built Specifically for Tradies & Contractors</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="heading-display text-primary-foreground mb-4">
              Tradie Website Design Wollongong
            </motion.h1>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl mb-8">
              We build websites that get tradies more phone calls and more jobs. Fast, mobile-friendly, and optimised to rank locally — so customers in Wollongong and Sydney find you before your competitors.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
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

      {/* Trades We Serve */}
      <section className="bg-muted py-10">
        <div className="container-tight px-4">
          <p className="text-center text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wide">Trades We Build Websites For</p>
          <div className="flex flex-wrap justify-center gap-3">
            {trades.map((trade) => (
              <span key={trade} className="bg-card border border-border rounded-full px-4 py-2 text-sm font-medium text-foreground">
                {trade}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">
              Everything a Tradie Website Needs to Generate Leads
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              We've built websites for dozens of tradies and know exactly what works. Here's what every tradie website needs.
            </motion.p>
          </ScrollReveal>
          <ScrollReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <motion.div key={f.title} variants={fadeUp} className="bg-card rounded-xl p-6 border border-border shadow-card card-hover-lift">
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
          <ScrollReveal className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp}>
              <h2 className="heading-section text-foreground mb-6">
                Why Most Tradie Websites Don't Work (And How We Fix That)
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Most tradie websites are either a DIY mess that looks unprofessional, a cheap template that doesn't rank on Google, or an overpriced agency site that just sits there doing nothing.
                </p>
                <p>
                  We build tradie websites differently. Every element is designed to generate leads — from the phone number on the homepage to the SEO that gets you found for searches like "plumber Wollongong" or "electrician near me."
                </p>
                <p>
                  We understand tradies are busy. That's why we handle everything — you just show up, we take care of the rest.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="space-y-4">
              <h3 className="font-bold text-foreground font-display text-lg mb-4">What Our Tradie Clients Get:</h3>
              {[
                "More phone calls from local Google searches",
                "A professional website that builds customer trust",
                "Google Maps ranking for your service area",
                "A quote form that captures leads 24/7",
                "A fast site that loads on any device",
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
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">What Tradies Say</motion.h2>
          </ScrollReveal>
          <ScrollReveal className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={fadeUp} className="bg-card rounded-xl p-6 border border-border shadow-card card-hover-lift">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
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
          <ScrollReveal className="text-center mb-10">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">Tradie Website FAQs</motion.h2>
          </ScrollReveal>
          <ScrollReveal className="space-y-4">
            {faqSchema.mainEntity.map((q) => (
              <motion.div key={q.name} variants={fadeUp} className="bg-card rounded-xl p-6 border border-border card-hover-lift">
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
          <ScrollReveal>
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-8 text-center">
              Real Results for Tradies
            </motion.h2>
            <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-6">
              <Link href="/portfolio/grovespark-electrical-wollongong" className="group">
                <div className="bg-card rounded-xl border border-border p-6 hover:border-accent transition-colors card-hover-lift">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">Electrician</span>
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mt-2 mb-2">GroveSpark Electrical</h3>
                  <p className="text-sm text-muted-foreground mb-3">40+ leads/month from zero online presence</p>
                  <span className="text-sm text-accent font-medium">View Case Study →</span>
                </div>
              </Link>
              <Link href="/portfolio/precision-plumbing-illawarra" className="group">
                <div className="bg-card rounded-xl border border-border p-6 hover:border-accent transition-colors card-hover-lift">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">Plumber</span>
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mt-2 mb-2">Precision Plumbing</h3>
                  <p className="text-sm text-muted-foreground mb-3">Near-doubled revenue within 6 months</p>
                  <span className="text-sm text-accent font-medium">View Case Study →</span>
                </div>
              </Link>
              <Link href="/portfolio/nbg-landscapes-shellharbour" className="group">
                <div className="bg-card rounded-xl border border-border p-6 hover:border-accent transition-colors card-hover-lift">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">Landscaper</span>
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mt-2 mb-2">NBG Landscapes</h3>
                  <p className="text-sm text-muted-foreground mb-3">From part-time to fully booked in 3 months</p>
                  <span className="text-sm text-accent font-medium">View Case Study →</span>
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
          <ScrollReveal>
            <motion.h2 variants={fadeUp} className="heading-section text-primary-foreground mb-4">
              Ready to Get More Jobs from Your Website?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
              Get a free quote for your tradie website. We'll discuss your trade, your service area, and build a site that generates real leads.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link href="/contact">Get Your Free Tradie Website Quote <ArrowRight className="w-5 h-5 ml-1" /></Link>
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

export default WebDesignTradies;
