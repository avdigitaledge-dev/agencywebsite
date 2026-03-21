"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2, MapPin, Star } from "lucide-react";
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

const WebDesignIllawarra = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Digital Edge Studio",
    "description": "Web design and digital marketing for businesses across the Illawarra region including Wollongong, Shellharbour, Nowra and surrounding areas",
    "url": "https://digitaledgestudio.com/web-design-illawarra",
    "email": "enquiries@digitaledgestudio.com",
    "areaServed": [
      { "@type": "City", "name": "Wollongong" },
      { "@type": "City", "name": "Shellharbour" },
      { "@type": "City", "name": "Nowra" },
      { "@type": "AdministrativeArea", "name": "Illawarra" },
      { "@type": "State", "name": "NSW" }
    ],
    "priceRange": "$$",
    "serviceType": ["Web Design", "Local SEO", "Digital Marketing"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you provide web design services across the Illawarra region?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we serve businesses throughout the entire Illawarra region including Wollongong, Shellharbour, Nowra, Kiama, and surrounding areas. We understand the local market and build websites that target local search terms."
        }
      },
      {
        "@type": "Question",
        "name": "Can you build a website for my Shellharbour business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We build websites for businesses in Shellharbour and throughout the Illawarra. Our local SEO services will help your Shellharbour business rank in local Google searches."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer web design for Nowra businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we work with businesses in Nowra and the Shoalhaven region. We can build you a professional website and help you rank for local search terms in Nowra."
        }
      },
      {
        "@type": "Question",
        "name": "How much does web design cost in the Illawarra?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Illawarra web design packages start from $1,200 for a Starter Website. We offer transparent, fixed pricing with no hidden fees. Get a free quote to discuss your project."
        }
      }
    ]
  };

  const areas = [
    { name: "Wollongong", desc: "The heart of the Illawarra — our primary service area for web design and local SEO." },
    { name: "Shellharbour", desc: "Growing coastal community with great opportunities for local businesses to rank online." },
    { name: "Nowra / Shoalhaven", desc: "Regional centre south of Wollongong — we help Nowra businesses get found on Google." },
    { name: "Kiama", desc: "Stunning coastal town with a thriving tourism and hospitality sector." },
    { name: "Dapto", desc: "Fast-growing suburb where local businesses need strong online visibility." },
    { name: "Thirroul & Northern Suburbs", desc: "From Thirroul to Helensburgh — we serve the northern Illawarra corridor." },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Web Design Illawarra' }
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
              <MapPin className="w-4 h-4" />
              <span>Serving the Entire Illawarra Region</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="heading-display text-primary-foreground mb-4">
              Web Design Illawarra
            </motion.h1>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl mb-8">
              Local web design and digital marketing for businesses across Wollongong, Shellharbour, Nowra, Kiama, and the wider Illawarra region. Get a website that ranks locally and generates real leads.
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

      {/* Areas We Serve */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">
              Areas We Serve Across the Illawarra
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              From Helensburgh in the north to Nowra in the south — we build websites for businesses all across the Illawarra and Shoalhaven.
            </motion.p>
          </ScrollReveal>
          <ScrollReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area) => (
              <motion.div key={area.name} variants={fadeUp} className="bg-card rounded-xl p-6 border border-border shadow-card card-hover-lift">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <h3 className="font-bold text-foreground font-display">{area.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{area.desc}</p>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight">
          <ScrollReveal className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">
              Web Design & Digital Marketing for Illawarra Businesses
            </motion.h2>
          </ScrollReveal>
          <ScrollReveal className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { title: "Custom Website Design", desc: "Professionally built websites tailored to your Illawarra business, designed to generate enquiries." },
              { title: "Local SEO Illawarra", desc: "Rank higher in Wollongong, Shellharbour, and Nowra local search results and Google Maps." },
              { title: "Google Ads Management", desc: "Pay-per-click campaigns targeting customers in specific Illawarra locations." },
              { title: "Website Maintenance", desc: "Keep your site fast, secure, and updated with our monthly maintenance plans from $99/month." },
            ].map((s) => (
              <motion.div key={s.title} variants={fadeUp} className="flex gap-4 p-6 bg-card rounded-xl border border-border shadow-card card-hover-lift">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-foreground font-display mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-tight max-w-3xl mx-auto">
          <ScrollReveal className="text-center mb-10">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">
              Frequently Asked Questions
            </motion.h2>
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
              Real Results in the Illawarra
            </motion.h2>
            <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-6">
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
              Let's Grow Your Illawarra Business Online
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
              Get a free, no-obligation website quote. We work with businesses across Wollongong, Shellharbour, Nowra, and the entire Illawarra region.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link href="/contact">Get Your Free Quote <ArrowRight className="w-5 h-5 ml-1" /></Link>
              </Button>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default WebDesignIllawarra;
