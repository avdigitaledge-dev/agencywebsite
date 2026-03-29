"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Calculator, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ScrollReveal } from "@/components/ScrollReveal";
import { staggerB, fadeUpB } from "@/lib/animations";


const WebDesignAccountants = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Accountant Website Design Wollongong",
    "description": "Professional website design for accountants and financial professionals in Wollongong, Sydney and NSW. Custom sites built to generate enquiries and build trust.",
    "provider": {
      "@type": "Organization",
      "name": "Digital Edge Studio",
      "url": "https://digitaledgestudio.com"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Accountants and Financial Professionals"
    },
    "areaServed": ["Wollongong", "Sydney", "NSW"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does an accountant website cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our accountant website packages start from $1,200. This includes professional design, booking system integration, local SEO setup, and a content management system you can update yourself."
        }
      },
      {
        "@type": "Question",
        "name": "Can clients book appointments online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we integrate online booking systems so clients can schedule consultations directly from your website, 24/7."
        }
      },
      {
        "@type": "Question",
        "name": "Do you build websites for bookkeepers and tax agents too?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We build websites for all financial professionals — accountants, bookkeepers, tax agents, financial advisors, mortgage brokers, and financial planners."
        }
      },
      {
        "@type": "Question",
        "name": "Will my accounting firm show up in local search?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We include local SEO setup and Google Business Profile optimisation in every project, helping your firm rank for searches like 'accountant Wollongong' and 'tax agent near me.'"
        }
      },
      {
        "@type": "Question",
        "name": "Can I add a client portal to my website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we can integrate secure client portals for document sharing, invoicing, and client communication."
        }
      },
      {
        "@type": "Question",
        "name": "Do you handle content writing for accounting websites?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We can help with content writing for your key service pages, ensuring they're optimised for both search engines and potential clients."
        }
      }
    ]
  };

  const niches = [
    "Accountants", "Bookkeepers", "Tax Agents", "Financial Advisors", "Mortgage Brokers",
    "Financial Planners"
  ];

  const features = [
    { title: "Online Booking System", desc: "Let clients schedule appointments directly from your website — no phone tag needed." },
    { title: "Client Portal Integration", desc: "Secure client portals for document sharing, invoicing, and communication." },
    { title: "Secure Contact Forms", desc: "Encrypted forms that protect client data and build confidence in your practice." },
    { title: "Professional Trust-Building Design", desc: "Clean, authoritative design with credentials, memberships, and awards displayed prominently." },
    { title: "Google Business Profile & Local SEO", desc: "Rank for searches like 'accountant Wollongong' or 'tax agent near me' in your area." },
    { title: "Service Pages for Each Offering", desc: "Dedicated pages for tax, BAS, bookkeeping, financial planning, and more — boosting your SEO." },
    { title: "Mobile-First Design", desc: "Your website will look professional on every device — phones, tablets, and desktops." },
    { title: "Reviews & Testimonials", desc: "Showcase client reviews and success stories to build trust with potential clients." },
  ];

  const testimonials = [
    { name: "Rebecca S.", role: "Accountant, Wollongong", quote: "Our new website has completely changed how clients find us. We've seen a 50% increase in online enquiries since launching." },
    { name: "Paul D.", role: "Tax Agent, Illawarra", quote: "The online booking system alone has saved us hours each week. Clients love being able to schedule appointments online." },
    { name: "Angela W.", role: "Financial Advisor, Sydney", quote: "The website perfectly reflects the professionalism of our firm. We've received compliments from both clients and referral partners." },
  ];

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Industries', path: '/industries' },
        { label: 'Accountant Website Design' }
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
              <Calculator className="w-4 h-4" />
              <span>Built for Financial Professionals</span>
            </motion.div>
            <motion.h1 variants={fadeUpB} className="heading-display text-primary-foreground mb-4">
              Accountant Website Design Wollongong
            </motion.h1>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/75 max-w-2xl mb-8">
              Your accounting firm deserves a website that builds trust and generates enquiries. We design professional, modern websites for accountants in Wollongong with online booking, client portals, and local SEO.
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
          <p className="text-center text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wide">Financial Professionals We Build Websites For</p>
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
              Everything an Accounting Website Needs
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              We've built websites for accounting firms and know exactly what works. Here's what every accountant website needs.
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
                Why Your Accounting Firm Needs a Professional Website
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Most accounting firms rely heavily on referrals but miss out on a growing pool of clients searching online. When someone Googles &lsquo;accountant Wollongong&rsquo; or &lsquo;tax agent near me,&rsquo; they expect to find a professional website that builds instant trust.
                </p>
                <p>
                  Your website is often the first impression a potential client has of your firm. A modern, professional site with clear service pages, credentials, and easy booking tells clients you&rsquo;re as organised with their finances as you are with your online presence.
                </p>
                <p>
                  Tax season drives seasonal search spikes — if your website isn&rsquo;t optimised, you&rsquo;re missing the biggest lead generation window of the year.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeUpB} className="space-y-4">
              <h3 className="font-bold text-foreground font-display text-lg mb-4">What Our Accounting Clients Get:</h3>
              {[
                "More client enquiries from local Google searches",
                "A professional website that builds instant trust",
                "Google Maps ranking for your service area",
                "Online booking that eliminates phone tag",
                "A fast, secure site on any device",
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
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">What Financial Professionals Say</motion.h2>
          </ScrollReveal>
          <ScrollReveal variant="B" className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={fadeUpB} className="bg-card rounded-xl p-6 border border-border shadow-card card-hover-lift">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent-warm text-accent-warm" />)}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </ScrollReveal>
          <div className="text-center mt-8">
            <Link href="/reviews" className="text-accent hover:underline inline-flex items-center gap-1 mt-4">
              Read our client reviews <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight max-w-3xl mx-auto">
          <ScrollReveal variant="B" className="text-center mb-10">
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">Accountant Website FAQs</motion.h2>
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
              Real Results for Financial Professionals
            </motion.h2>
            <motion.div variants={fadeUpB} className="grid md:grid-cols-1 max-w-lg mx-auto gap-6">
              <Link href="/portfolio/boroughs-chartered-accountants" className="group">
                <div className="bg-card rounded-xl border border-border p-6 hover:border-accent transition-colors card-hover-lift">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">Accounting</span>
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mt-2 mb-2">Boroughs Chartered Accountants — Sydney, NSW</h3>
                  <p className="text-sm text-muted-foreground mb-3">55% increase in high-value client enquiries with a premium website redesign</p>
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
          <ScrollReveal variant="B">
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-8 text-center">
              Related Industries
            </motion.h2>
            <motion.div variants={fadeUpB} className="grid md:grid-cols-3 gap-6">
              <Link href="/web-design-tradies" className="group">
                <div className="bg-card rounded-xl border border-border p-6 hover:border-accent transition-colors card-hover-lift">
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">Tradies & Contractors</h3>
                </div>
              </Link>
              <Link href="/web-design-lawyers" className="group">
                <div className="bg-card rounded-xl border border-border p-6 hover:border-accent transition-colors card-hover-lift">
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">Law Firms & Legal</h3>
                </div>
              </Link>
              <Link href="/web-design-real-estate" className="group">
                <div className="bg-card rounded-xl border border-border p-6 hover:border-accent transition-colors card-hover-lift">
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">Real Estate Agents</h3>
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
              Ready to Grow Your Accounting Practice Online?
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
              Get a free quote for your accounting website. We'll build a professional site that attracts new clients and reflects the trust your firm has earned.
            </motion.p>
            <motion.div variants={fadeUpB} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="btn-shimmer" asChild>
                <Link href="/contact">Get Your Free Accountant Website Quote <ArrowRight className="w-5 h-5 ml-1" /></Link>
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

export default WebDesignAccountants;
