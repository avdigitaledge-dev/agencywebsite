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

const WebDesignWollongong = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Digital Edge Studio",
    "description": "Web design agency in Wollongong specialising in affordable websites and local SEO for tradies and small businesses",
    "url": "https://digitaledgestudio.com/web-design-wollongong",
    "email": "enquiries@digitaledgestudio.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Wollongong",
      "addressRegion": "NSW",
      "addressCountry": "AU"
    },
    "areaServed": [
      { "@type": "City", "name": "Wollongong" },
      { "@type": "City", "name": "Sydney" },
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
        "name": "How much does web design cost in Wollongong?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Wollongong web design packages start from $1,200 for a Starter Website and $1,850 for a full Business Website. We offer transparent pricing with no hidden fees or lock-in contracts."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a website in Wollongong?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most Wollongong website projects are completed in 4–8 weeks depending on complexity. We work closely with you throughout the process to ensure everything is perfect before launch."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer local SEO for Wollongong businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — local SEO is one of our specialties. We optimise your Google Business Profile, target Wollongong-specific search terms, and help you rank higher in local Google Maps results."
        }
      },
      {
        "@type": "Question",
        "name": "Are you based in Wollongong?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We're a NSW-based agency serving Wollongong and the surrounding Illawarra region, as well as Sydney. We understand the local market because we're part of it."
        }
      },
      {
        "@type": "Question",
        "name": "What types of businesses do you build websites for in Wollongong?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We build websites for tradies (plumbers, electricians, builders), retail shops, hospitality businesses, healthcare providers, professional services, and any local Wollongong business that wants to grow online."
        }
      }
    ]
  };

  const services = [
    { title: "Custom Website Design", desc: "Professionally designed websites built to convert visitors into enquiries — not just look pretty." },
    { title: "Local SEO Wollongong", desc: "Rank higher in Google Maps and organic search for Wollongong-specific keywords that drive real leads." },
    { title: "Mobile-Optimised Websites", desc: "Over 70% of local searches happen on mobile. Your Wollongong website will look perfect on every device." },
    { title: "Google Ads Management", desc: "Targeted Google Ads campaigns for Wollongong businesses — only pay when someone clicks to your site." },
    { title: "Ecommerce Web Design", desc: "Online stores built on Shopify or WooCommerce to sell products to Wollongong and beyond." },
    { title: "Website Maintenance", desc: "Monthly plans to keep your Wollongong website fast, secure, and up to date. From $99/month." },
  ];

  const testimonials = [
    { name: "James T.", role: "Plumber, Wollongong", quote: "Since Digital Edge rebuilt our website, we've had a 60% increase in phone calls from Google. Best investment we've made." },
    { name: "Sarah M.", role: "Small Business Owner, Wollongong", quote: "They made the whole process easy and stress-free. Our new website looks incredible and we're getting more bookings than ever." },
    { name: "Mark L.", role: "Tradie, Illawarra", quote: "The local SEO work has been a game changer. We're now showing up at the top of Google Maps in our area." },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Web Design Wollongong' }
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
              <span>Serving Wollongong, Illawarra & NSW</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="heading-display text-primary-foreground mb-4">
              Web Design Wollongong
            </motion.h1>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl mb-8">
              Professional, affordable web design for Wollongong businesses. We build websites that rank on Google, generate leads, and grow your business — without the big-agency price tag.
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

      {/* Trust Signals */}
      <section className="bg-muted py-8">
        <div className="container-tight px-4">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            {["Local Wollongong Agency", "No Lock-In Contracts", "Fast 4–8 Week Turnaround", "Free Quote & Consultation", "Google Business Profile Setup Included"].map((item) => (
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
          <ScrollReveal className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">
              Web Design Services in Wollongong
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Everything your Wollongong business needs to get found online and turn website visitors into paying customers.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <motion.div key={s.title} variants={fadeUp} className="bg-card rounded-xl p-6 border border-border shadow-card card-hover-lift">
                <CheckCircle2 className="w-6 h-6 text-accent mb-3" />
                <h3 className="font-bold text-foreground font-display mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Why Local */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight">
          <ScrollReveal className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp}>
              <h2 className="heading-section text-foreground mb-6">
                Why Choose a Local Wollongong Web Designer?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  When you hire a local Wollongong web designer, you're not just getting a website — you're getting a partner who understands your local market, your customers, and what it takes to rank in Wollongong's search results.
                </p>
                <p>
                  We know the Illawarra region, the local competition, and the kinds of searches your customers make when they need a business like yours. That local knowledge gives your website a real edge.
                </p>
                <p>
                  Unlike large agencies or offshore developers, you can actually talk to us — and we'll be there to support you long after your site goes live.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/contact">Talk to a Wollongong Web Designer <ArrowRight className="w-4 h-4 ml-1" /></Link>
                </Button>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="space-y-4">
              {[
                { title: "Local Market Knowledge", desc: "We understand Wollongong's business landscape and what local customers search for." },
                { title: "Wollongong SEO Expertise", desc: "We optimise specifically for Wollongong and Illawarra search terms, not generic keywords." },
                { title: "Face-to-Face Support", desc: "We're available for meetings and calls — not hidden behind an overseas support ticket." },
                { title: "Long-Term Partnership", desc: "We don't disappear after launch. We're here to grow your business month after month." },
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
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">
              What Wollongong Businesses Say
            </motion.h2>
          </ScrollReveal>
          <ScrollReveal className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={fadeUp} className="bg-card rounded-xl p-6 border border-border shadow-card card-hover-lift">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
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

      {/* Local Case Studies */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal>
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-8 text-center">
              Real Results in Wollongong
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

      {/* Pricing CTA */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight">
          <ScrollReveal className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeUp} className="bg-card rounded-xl p-8 border border-border shadow-card card-hover-lift">
              <h3 className="font-bold text-foreground font-display text-xl mb-2">Starter Website</h3>
              <p className="text-3xl font-bold text-foreground mb-1">From $1,200</p>
              <p className="text-sm text-muted-foreground mb-6">Perfect for tradies and service businesses getting started online</p>
              <ul className="space-y-2 mb-6">
                {["Custom design", "Mobile responsive", "Contact form", "Google Analytics", "SEO setup", "Fast loading"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-card rounded-xl p-8 border-2 border-accent shadow-card card-hover-lift">
              <h3 className="font-bold text-foreground font-display text-xl mb-2">Business Website</h3>
              <p className="text-3xl font-bold text-foreground mb-1">From $1,850</p>
              <p className="text-sm text-muted-foreground mb-6">Full-featured site for established Wollongong businesses ready to grow</p>
              <ul className="space-y-2 mb-6">
                {["Everything in Starter", "Up to 10 pages", "Blog setup", "Google Ads ready", "Advanced SEO", "Priority support"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
            </motion.div>
          </ScrollReveal>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Not sure which package is right for you? <Link href="/pricing" className="text-accent underline underline-offset-4">See full pricing details →</Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-tight max-w-3xl mx-auto">
          <ScrollReveal className="text-center mb-10">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">
              Web Design Wollongong — Frequently Asked Questions
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
              Ready to Grow Your Wollongong Business Online?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
              Get a free, no-obligation quote for your Wollongong website. We'll discuss your goals and recommend the best solution for your business.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link href="/contact">Get Your Free Quote <ArrowRight className="w-5 h-5 ml-1" /></Link>
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

export default WebDesignWollongong;
