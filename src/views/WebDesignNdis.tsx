"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ScrollReveal } from "@/components/ScrollReveal";
import { staggerB, fadeUpB } from "@/lib/animations";


const WebDesignNdis = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "NDIS Provider Website Design",
    "description": "Professional website design for NDIS providers and disability service organisations in Wollongong, Sydney, NSW and across Australia. WCAG-compliant, accessible websites built to help participants find your services.",
    "provider": {
      "@type": "Organization",
      "name": "Digital Edge Studio",
      "url": "https://digitaledgestudio.com"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "NDIS Providers and Disability Service Organisations"
    },
    "areaServed": ["Wollongong", "Sydney", "NSW", "Australia"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "16",
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
        "name": "How much does an NDIS provider website cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our NDIS provider website packages start from $1,500. This includes WCAG accessibility compliance, service category pages, referral forms, and local SEO setup."
        }
      },
      {
        "@type": "Question",
        "name": "Will my website be WCAG accessible?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — all our NDIS provider websites are built to WCAG 2.1 AA standards. This includes proper colour contrast, keyboard navigation, screen reader compatibility, and alt text for all images."
        }
      },
      {
        "@type": "Question",
        "name": "Can participants enquire directly through the website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We build clear, accessible referral and enquiry forms that make it easy for participants, families, and support coordinators to get in touch."
        }
      },
      {
        "@type": "Question",
        "name": "Do you understand NDIS service categories?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we research your specific NDIS services and create dedicated pages for each category, using the language and terminology that participants and families search for."
        }
      },
      {
        "@type": "Question",
        "name": "Can I list all my services and service areas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we build comprehensive service pages and service area pages that help you rank locally and make it clear to participants which areas you cover."
        }
      },
      {
        "@type": "Question",
        "name": "Will my NDIS business show up on Google?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We include local SEO setup and Google Business Profile optimisation in every project, helping your organisation rank for NDIS-related searches in your service areas."
        }
      }
    ]
  };

  const niches = [
    "NDIS Support Coordinators", "Disability Support Providers", "Supported Independent Living (SIL)",
    "Allied Health NDIS Providers", "Plan Managers", "Therapy Providers"
  ];

  const features = [
    { title: "WCAG 2.1 AA Accessibility Compliance", desc: "Built to web accessibility standards so all participants — including those with disabilities — can use your site." },
    { title: "Clear Service Category Pages", desc: "Dedicated pages for each NDIS service you provide, making it easy for participants to find what they need." },
    { title: "Easy-to-Read Content & Simple Navigation", desc: "Plain language, clear layouts, and intuitive navigation designed for participants and their families." },
    { title: "Participant & Family Testimonials", desc: "Share stories from participants and families to build trust and show the impact of your services." },
    { title: "Referral & Enquiry Forms", desc: "Simple forms that make it easy for participants, families, and support coordinators to get in touch." },
    { title: "Local SEO for Service Areas", desc: "Rank for searches like 'NDIS provider Wollongong' or 'disability support near me' in your service areas." },
    { title: "Trust Signals", desc: "Display NDIS registration, Quality & Safeguards Commission compliance, and other credentials prominently." },
    { title: "Mobile-First Design", desc: "Participants and families search on their phones. Your site will be accessible and functional on every device." },
  ];

  const testimonials = [
    { name: "Karen M.", role: "NDIS Provider, Wollongong", quote: "Our new website has made a real difference. Participants and families find us easily, and the accessible design means everyone can use it." },
    { name: "Jason T.", role: "Support Coordinator, Illawarra", quote: "The website clearly explains our services and makes it easy for participants to enquire. We've seen a significant increase in referrals." },
    { name: "Michelle S.", role: "Disability Services Manager, Sydney", quote: "Digital Edge understood the NDIS space and built a website that meets accessibility standards while still looking professional and modern." },
  ];

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Industries', path: '/industries' },
        { label: 'NDIS Provider Website Design' }
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
              <Shield className="w-4 h-4" />
              <span>Built for NDIS Providers</span>
            </motion.div>
            <motion.h1 variants={fadeUpB} className="heading-display text-primary-foreground mb-4">
              NDIS Provider Website Design
            </motion.h1>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/75 max-w-2xl mb-8">
              Your NDIS website needs to be accessible, trustworthy, and easy to navigate. We build WCAG-compliant websites for NDIS providers in Wollongong and across Australia that help participants find and choose your services.
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
          <p className="text-center text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wide">NDIS Providers We Build Websites For</p>
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
              Everything an NDIS Provider Website Needs
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              We understand the NDIS landscape and build websites that meet accessibility standards while helping participants find your services.
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
                Why NDIS Providers Need a Professional Website
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Accessibility isn't optional for NDIS providers — it's essential. Your website needs to meet WCAG standards so that participants with disabilities can access information about your services. We build this in from the ground up.
                </p>
                <p>
                  Participants and families increasingly make decisions online. When someone searches 'NDIS provider Wollongong' or 'disability support near me,' they need to find your services quickly and understand what you offer.
                </p>
                <p>
                  The NDIS market is growing, and so is competition. A professional website with clear service pages, trust signals, and local SEO helps you stand out and attract more participants to your organisation.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeUpB} className="space-y-4">
              <h3 className="font-bold text-foreground font-display text-lg mb-4">What Our NDIS Clients Get:</h3>
              {[
                "More participant enquiries from local searches",
                "A WCAG-accessible website that serves everyone",
                "NDIS registration and compliance trust signals",
                "Clear service pages for every NDIS category",
                "Local SEO for your service areas",
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
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">What NDIS Providers Say</motion.h2>
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
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">NDIS Provider Website FAQs</motion.h2>
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
              Real Results for NDIS Providers
            </motion.h2>
            <motion.div variants={fadeUpB} className="grid md:grid-cols-1 max-w-lg mx-auto gap-6">
              <Link href="/portfolio/guide-me-disability-centre" className="group">
                <div className="bg-card rounded-xl border border-border p-6 hover:border-accent transition-colors card-hover-lift">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">NDIS</span>
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mt-2 mb-2">Guide Me Disability Centre — Sydney, NSW</h3>
                  <p className="text-sm text-muted-foreground mb-3">70% increase in participant referrals with an accessible, WCAG 2.1 AA compliant website</p>
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
              { name: "Healthcare & Allied Health", href: "/web-design-healthcare" },
              { name: "Dentists & Dental Clinics", href: "/web-design-dentists" },
              { name: "Gyms & Fitness", href: "/web-design-gyms" },
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
              Ready to Help More Participants Find You?
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
              Get a free quote for your NDIS provider website. We'll build an accessible, professional site that helps participants and families find and choose your services.
            </motion.p>
            <motion.div variants={fadeUpB} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="btn-shimmer" asChild>
                <Link href="/contact">Get Your Free NDIS Website Quote <ArrowRight className="w-5 h-5 ml-1" /></Link>
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

export default WebDesignNdis;
