"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Rocket, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ScrollReveal } from "@/components/ScrollReveal";
import { staggerB, fadeUpB } from "@/lib/animations";

const WebDesignStartups = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Startup Website Design Sydney",
    "description": "Website design for startups in Sydney. Launch fast with conversion-focused landing pages, MVP sites, and scalable web apps. From pitch to product.",
    "provider": {
      "@type": "Organization",
      "name": "Digital Edge Studio",
      "url": "https://digitaledgestudio.com"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Startups and Early-Stage Companies"
    },
    "areaServed": ["Sydney", "Wollongong", "NSW"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a startup website cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our startup website packages start from $1,200. MVP landing pages can be even more cost-effective. We offer flexible pricing designed for pre-revenue and early-stage startups."
        }
      },
      {
        "@type": "Question",
        "name": "Can you build an MVP or landing page quickly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we specialise in fast turnarounds. Most MVP landing pages are live within 1–2 weeks, and full startup websites within 2–4 weeks."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with pre-revenue startups?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Many of our startup clients are pre-revenue or early-stage. We understand the budget constraints and build packages that deliver maximum impact at the right price point."
        }
      },
      {
        "@type": "Question",
        "name": "Can the website scale as my startup grows?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we build with scalable architecture so your website grows with your startup. Adding new pages, features, and integrations is straightforward."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer equity arrangements or deferred payment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We generally work on a fixed-fee basis, but we're open to discussing flexible arrangements for promising startups. Get in touch to discuss your situation."
        }
      },
      {
        "@type": "Question",
        "name": "Can you integrate with tools like Stripe, HubSpot, or Mailchimp?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we integrate with all major SaaS tools including payment processors, CRMs, email marketing platforms, analytics tools, and customer support systems."
        }
      }
    ]
  };

  const subNiches = [
    "Tech Startups", "SaaS Companies", "Fintech", "Healthtech",
    "E-Commerce Startups", "Pre-Launch / MVP Stage"
  ];

  const features = [
    { title: "MVP & Landing Page Design", desc: "Launch fast with a polished landing page that validates your idea and captures early interest." },
    { title: "Conversion-Focused Design", desc: "Every element is designed to drive signups, downloads, demo requests, or purchases." },
    { title: "Waitlist & Email Capture", desc: "Build anticipation before launch with waitlist pages and email capture that grow your audience." },
    { title: "Investor-Ready Design", desc: "A professional website that gives investors, partners, and customers confidence in your startup." },
    { title: "Scalable Architecture", desc: "Built with growth in mind — your website scales as your startup grows, without rebuilding." },
    { title: "Analytics & Tracking Setup", desc: "Full analytics, conversion tracking, and event monitoring so you know exactly what's working." },
    { title: "Integration-Ready", desc: "Connect with Stripe, HubSpot, Mailchimp, Intercom, and other tools your startup depends on." },
    { title: "Mobile-First Design", desc: "Your website will look and perform perfectly on every device — phones, tablets, and desktops." },
  ];

  const testimonials = [
    { name: "Alex T.", role: "Founder, SaaS Startup, Sydney", quote: "Digital Edge built our landing page in under two weeks. We started capturing leads immediately and validated our idea before writing a single line of product code." },
    { name: "Priya S.", role: "Co-Founder, Healthtech Startup", quote: "The website gave us instant credibility with investors. Multiple VCs commented on how professional our online presence was." },
    { name: "Jordan M.", role: "Founder, E-Commerce Startup, Sydney", quote: "We went from concept to live website in 10 days. The conversion rate has exceeded our expectations — it's been a great foundation for growth." },
  ];

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Industries', path: '/industries' },
        { label: 'Startup Website Design' }
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
              <Rocket className="w-4 h-4" />
              <span>Built for Startups</span>
            </motion.div>
            <motion.h1 variants={fadeUpB} className="heading-display text-primary-foreground mb-4">
              Startup Website Design Sydney
            </motion.h1>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/75 max-w-2xl mb-8">
              Launch fast. Look credible. Convert visitors. We build conversion-focused websites for Sydney startups — from MVP landing pages to scalable web apps. From pitch to product.
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

      {/* Sub-niches */}
      <section className="bg-muted py-10">
        <div className="container-tight px-4">
          <p className="text-center text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wide">Startups We Build Websites For</p>
          <div className="flex flex-wrap justify-center gap-3">
            {subNiches.map((niche) => (
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
              Everything a Startup Website Needs
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              We know what startups need to launch and grow. Here&apos;s what every startup website should include.
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
                Why Startups Need a Professional Website
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  First impressions matter — especially for startups. Whether you&apos;re pitching investors, acquiring early customers, or recruiting talent, your website is often the first thing people see. It needs to look credible and professional.
                </p>
                <p>
                  Speed matters. Startups need to launch quickly and iterate based on feedback. We build websites fast — most MVPs and landing pages are live within 1–2 weeks — so you can start testing and validating your ideas.
                </p>
                <p>
                  Budget matters too. We understand that pre-revenue startups need to be smart with every dollar. Our startup packages are reliable and designed to give you maximum impact for minimum spend.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeUpB} className="space-y-4">
              <h3 className="font-bold text-foreground font-display text-lg mb-4">What Our Startup Clients Get:</h3>
              {[
                "A professional website that builds credibility fast",
                "Conversion-focused design that drives signups",
                "Launch in 1–2 weeks, not months",
                "Analytics and tracking from day one",
                "Integration with your existing tools",
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
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">What Startup Founders Say</motion.h2>
          </ScrollReveal>
          <ScrollReveal variant="B" className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={fadeUpB} className="bg-card rounded-xl p-6 border border-border shadow-card card-hover-lift">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent-warm text-accent-warm" />)}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">&quot;{t.quote}&quot;</p>
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
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">Startup Website FAQs</motion.h2>
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
              Real Results for Startups
            </motion.h2>
            <motion.div variants={fadeUpB} className="grid md:grid-cols-1 gap-6 max-w-lg mx-auto">
              <Link href="/portfolio" className="group">
                <div className="bg-card rounded-xl border border-border p-6 hover:border-accent transition-colors card-hover-lift">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">Startup</span>
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mt-2 mb-2">Sydney SaaS Startup</h3>
                  <p className="text-sm text-muted-foreground mb-3">500+ waitlist signups in the first month</p>
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
              { name: "Real Estate Agents", href: "/web-design-real-estate" },
              { name: "Accountants & Financial Services", href: "/web-design-accountants" },
              { name: "Tradies & Contractors", href: "/web-design-tradies" },
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
              Ready to Launch Your Startup Online?
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
              Get a free quote for your startup website. We&apos;ll build a conversion-focused site that helps you launch, grow, and scale.
            </motion.p>
            <motion.div variants={fadeUpB} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="btn-shimmer" asChild>
                <Link href="/contact">Get Your Free Startup Website Quote <ArrowRight className="w-5 h-5 ml-1" /></Link>
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

export default WebDesignStartups;
