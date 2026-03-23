"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ScrollReveal } from "@/components/ScrollReveal";
import { staggerB, fadeUpB } from "@/lib/animations";

const WebDesignThirroul = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Digital Edge Studio",
    "description": "Web design agency serving Thirroul businesses with affordable websites and local SEO, based just down the road in Wollongong",
    "url": "https://digitaledgestudio.com/web-design-thirroul",
    "email": "enquiries@digitaledgestudio.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Wollongong",
      "addressRegion": "NSW",
      "addressCountry": "AU"
    },
    "areaServed": [
      { "@type": "City", "name": "Thirroul" },
      { "@type": "City", "name": "Wollongong" },
      { "@type": "City", "name": "Illawarra" },
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
    "serviceType": ["Web Design", "Local SEO", "Digital Marketing"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you build websites for Thirroul businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we're based just down the road in Wollongong and work with businesses across Thirroul and the northern Illawarra suburbs. We understand the local market and build websites that connect with your community."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a local website cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our web design packages start from $1,200 for a Starter Website and $1,850 for a full Business Website. We offer transparent pricing with no hidden fees or lock-in contracts."
        }
      },
      {
        "@type": "Question",
        "name": "Can you do local SEO for my Thirroul business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — local SEO is one of our specialties. We target Thirroul and northern suburbs search terms, optimise your Google Business Profile, and help you rank higher in local Google Maps results."
        }
      },
      {
        "@type": "Question",
        "name": "Are you based near Thirroul?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we're based in Wollongong — just minutes away from Thirroul. We understand the northern Illawarra market because we're part of it, and we're always available for face-to-face meetings."
        }
      }
    ]
  };

  const services = [
    { title: "Custom Website Design", desc: "Professionally designed websites built to convert visitors into enquiries — not just look pretty." },
    { title: "Local SEO Thirroul", desc: "Rank higher in Google Maps and organic search for Thirroul-specific keywords that drive real leads." },
    { title: "Mobile-Optimised Websites", desc: "Over 70% of local searches happen on mobile. Your Thirroul website will look perfect on every device." },
    { title: "Google Ads Management", desc: "Targeted Google Ads campaigns for Thirroul businesses — only pay when someone clicks to your site." },
    { title: "Ecommerce Web Design", desc: "Online stores built on Shopify or WooCommerce to sell products to Thirroul and beyond." },
    { title: "Website Maintenance", desc: "Monthly plans to keep your Thirroul website fast, secure, and up to date. From $99/month." },
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
        { label: 'Web Design Thirroul' }
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
              <span>Serving Thirroul & Northern Illawarra</span>
            </motion.div>
            <motion.h1 variants={fadeUpB} className="heading-display text-primary-foreground mb-4">
              Web Design Thirroul
            </motion.h1>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/75 max-w-2xl mb-8">
              Professional web design for Thirroul's growing village centre. We build websites that rank on Google, generate leads, and grow your business — based just down the road in Wollongong.
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
            {["Based Just Down the Road", "No Lock-In Contracts", "Fast 4–8 Week Turnaround", "Free Quote & Consultation", "Google Business Profile Setup Included"].map((item) => (
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
              Web Design Services in Thirroul
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Everything your Thirroul business needs to get found online and turn website visitors into paying customers.
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

      {/* Why Local */}
      <section className="section-padding relative" style={{ background: "var(--surface-gradient)" }}>
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="container-tight relative z-10">
          <ScrollReveal variant="B" className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUpB}>
              <h2 className="heading-section text-foreground mb-6">
                Why Choose a Local Web Designer for Thirroul?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  When you hire a local web designer for your Thirroul business, you're not just getting a website — you're getting a partner who understands your village, your customers, and what it takes to rank in northern Illawarra search results.
                </p>
                <p>
                  We know Thirroul Village, Lawrence Hargrave Drive, and the surrounding suburbs like Austinmer and Bulli. From the growing number of cafés to professional services, Thirroul is a thriving community — and your website should reflect that.
                </p>
                <p>
                  Unlike large agencies or offshore developers, you can actually talk to us — and we'll be there to support you long after your site goes live.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/contact">Talk to a Local Web Designer <ArrowRight className="w-4 h-4 ml-1" /></Link>
                </Button>
              </div>
            </motion.div>
            <motion.div variants={fadeUpB} className="space-y-4">
              {[
                { title: "Northern Illawarra Knowledge", desc: "We understand Thirroul's business landscape and what local customers search for." },
                { title: "Thirroul SEO Expertise", desc: "We optimise specifically for Thirroul and northern Illawarra search terms, not generic keywords." },
                { title: "Personal Face-to-Face Service", desc: "Based in Wollongong, we're just minutes away — you always deal directly with the person running your project." },
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
      <section className="section-padding bg-background relative">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="container-tight relative z-10">
          <ScrollReveal variant="B" className="text-center mb-14">
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">
              What Local Businesses Say
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

      {/* Local Case Studies */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal variant="B">
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-8 text-center">
              Real Results in Wollongong
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

      {/* Pricing CTA */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight">
          <ScrollReveal variant="B" className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeUpB} className="bg-card rounded-xl p-8 border border-border shadow-card card-hover-lift">
              <h3 className="font-bold text-foreground font-display text-xl mb-2">Starter Website</h3>
              <p className="text-3xl font-bold font-display mb-1"><span className="price-shimmer">From $1,200</span></p>
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
            <motion.div variants={fadeUpB} className="bg-card rounded-xl p-8 border-2 border-accent shadow-card card-hover-lift">
              <h3 className="font-bold text-foreground font-display text-xl mb-2">Business Website</h3>
              <p className="text-3xl font-bold font-display mb-1"><span className="price-shimmer">From $1,850</span></p>
              <p className="text-sm text-muted-foreground mb-6">Full-featured site for established Thirroul businesses ready to grow</p>
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
          <ScrollReveal variant="B" className="text-center mb-10">
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">
              Web Design Thirroul — Frequently Asked Questions
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
              Based in the Illawarra, we build websites for businesses across the region.
            </motion.p>
          </ScrollReveal>
          <ScrollReveal variant="B" className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div variants={fadeUpB}>
              <Link href="/web-design-wollongong" className="group flex gap-4 p-6 bg-card rounded-xl border border-border shadow-card card-hover-lift">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-foreground font-display group-hover:text-accent transition-colors mb-1">Web Design Wollongong</h3>
                  <p className="text-sm text-muted-foreground">Professional web design for Wollongong businesses — affordable websites and local SEO that deliver results.</p>
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
            <motion.div variants={fadeUpB}>
              <Link href="/web-design-shellharbour" className="group flex gap-4 p-6 bg-card rounded-xl border border-border shadow-card card-hover-lift">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-foreground font-display group-hover:text-accent transition-colors mb-1">Web Design Shellharbour</h3>
                  <p className="text-sm text-muted-foreground">Custom websites and local SEO for Shellharbour businesses — designed to grow your online presence.</p>
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
              Ready to Grow Your Thirroul Business Online?
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
              Get a free, no-obligation quote for your Thirroul website. We'll discuss your goals and recommend the best solution for your business.
            </motion.p>
            <motion.div variants={fadeUpB} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="btn-shimmer" asChild>
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

export default WebDesignThirroul;
