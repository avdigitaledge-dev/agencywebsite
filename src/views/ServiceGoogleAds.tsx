"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { stagger, fadeUp } from "@/lib/animations";
import { BarChart3, CheckCircle2, ArrowRight, Target, TrendingUp, DollarSign, Search, Zap, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/FAQ";
import { Breadcrumb } from "@/components/Breadcrumb";

const ServiceGoogleAds = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Google Ads Management",
    "description": "Google Ads management for businesses in Wollongong, Sydney, and NSW. Transparent pricing at $800/month management fee plus 15% of ad spend. No lock-in contracts.",
    "provider": {
      "@type": "Organization",
      "name": "Digital Edge Studio",
      "url": "https://digitaledgestudio.com"
    },
    "areaServed": ["Wollongong", "Sydney", "NSW", "Australia"],
    "serviceType": "Google Ads Management"
  };

  const googleAdsFAQ = [
    {
      question: "How much does Google Ads management cost?",
      answer: "Our management fee is $800/month plus 15% of your ad spend. There are no lock-in contracts and no hidden fees. You can cancel at any time."
    },
    {
      question: "How quickly will I see results from Google Ads?",
      answer: "Google Ads can deliver leads from day one. Most campaigns reach optimal performance within 2-4 weeks as we gather data and refine targeting."
    },
    {
      question: "What's the minimum ad spend you recommend?",
      answer: "We typically recommend a minimum ad spend of $1,000-$2,000/month for local service businesses. This gives us enough budget to test and optimise effectively."
    },
    {
      question: "Do I get to see what you're doing with my ads?",
      answer: "Absolutely. You receive weekly optimisation updates and a detailed monthly report showing clicks, conversions, cost per lead, and return on investment."
    },
    {
      question: "Can I run Google Ads and SEO at the same time?",
      answer: "Yes, and we recommend it. Google Ads gives you instant visibility while SEO builds long-term organic traffic. Together, they cover both short-term and long-term growth."
    }
  ];

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Services', path: '/services' },
        { label: 'Google Ads' }
      ]} />

      {/* ═══ Hero ═══ */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        <div className="container-tight px-4 py-16 md:py-24 relative z-10">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            <motion.h1 variants={fadeUp} className="heading-display text-primary-foreground mb-4">
              Google Ads Management in Wollongong — <span className="text-gradient">Get Instant Leads</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl mb-8">
              Targeted Google Ads campaigns that put your business in front of customers actively searching for your services. Transparent pricing, no lock-in contracts.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="btn-shimmer" asChild>
                <Link href="/contact">Get Started <ArrowRight className="w-5 h-5 ml-1" /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link href="/pricing">See Pricing</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* ═══ What's Included ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp}>
              <span className="text-accent font-semibold text-base uppercase tracking-wider">Google Ads Management</span>
              <h2 className="heading-section text-foreground mt-2 mb-4">
                What's Included
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Stop wasting money on ads that don't convert. We manage your Google Ads campaigns with a transparent pricing model — $800/month management fee plus 15% of your ad spend. No lock-in contracts, no hidden fees, and you only pay for results.
              </p>
              <ul className="space-y-3 mb-8 stagger-list">
                {[
                  "Full Google Ads setup & ongoing management",
                  "Keyword research & smart bid strategy",
                  "Ad copywriting & continuous A/B testing",
                  "Competitor analysis & benchmarking",
                  "Google Analytics & conversion tracking",
                  "Weekly optimisation & transparent monthly reports",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="cta" asChild>
                <Link href="/contact">Discuss Your Strategy <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden min-h-[300px] group image-hover-glow">
              <Image src="/images/blog/google-ads-pic.webp" alt="Digital marketing analytics dashboard" width={600} height={400} className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105" />
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Our Process ═══ */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight">
          <ScrollReveal className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">Our Process</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              A proven four-step process to get your Google Ads campaigns delivering results fast.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Research",
                description: "Keyword research, competitor analysis, and market assessment for your industry."
              },
              {
                step: "02",
                title: "Setup",
                description: "Campaign structure, ad groups, targeting, and conversion tracking configured."
              },
              {
                step: "03",
                title: "Optimise",
                description: "Continuous bid adjustments, A/B testing, and negative keyword refinement."
              },
              {
                step: "04",
                title: "Report",
                description: "Weekly optimisation logs and transparent monthly performance reports."
              },
            ].map((item) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                className="bg-card rounded-2xl border border-border shadow-card p-8 card-hover-lift text-center"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <span className="text-accent font-display font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="heading-card text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Why Choose Us ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">Why Choose Us for Google Ads</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Transparent, results-driven Google Ads management built for small businesses.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Transparent Pricing",
                description: "$800/month management fee plus 15% of ad spend. No hidden fees, no surprises."
              },
              {
                icon: Target,
                title: "Targeted Campaigns",
                description: "We target the exact keywords your customers search for — no wasted spend on irrelevant clicks."
              },
              {
                icon: TrendingUp,
                title: "Measurable ROI",
                description: "Full conversion tracking so you know exactly how many leads and sales your ads generate."
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="bg-card rounded-2xl border border-border shadow-card p-8 card-hover-lift text-center"
              >
                <div className="w-12 h-12 rounded-xl gradient-cta flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="heading-card text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </ScrollReveal>
          <div className="text-center mt-8">
            <Link href="/reviews" className="text-accent hover:underline inline-flex items-center gap-1 mt-4">
              Read what our clients say <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ CTA Section ═══ */}
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
              Ready to Get More Leads From Google?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
              Let's build a Google Ads strategy that delivers real results for your business.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="hero" size="lg" className="btn-shimmer" asChild>
                <Link href="/contact">Get a Free Quote <ArrowRight className="w-5 h-5 ml-1" /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link href="/portfolio">See Our Work</Link>
              </Button>
            </motion.div>
          </ScrollReveal>
        </div>
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-[hsl(210_15%_94%)]" />
          </svg>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <FAQ
        faqs={googleAdsFAQ}
        title="Google Ads — Frequently Asked Questions"
      />

      {/* ═══ Internal Links ═══ */}
      <section className="section-padding bg-background border-t border-border">
        <div className="container-tight">
          <ScrollReveal className="text-center">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-8">Explore More</motion.h2>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              {[
                { label: "All Services", path: "/services" },
                { label: "Local SEO", path: "/services/seo" },
                { label: "Gym Marketing", path: "/gym-marketing" },
                { label: "Web Design", path: "/services/web-design" },
                { label: "Pricing", path: "/pricing" },
                { label: "Web Design Wollongong", path: "/web-design-wollongong" },
                { label: "Web Design Sydney", path: "/web-design-sydney" },
                { label: "Client Reviews", path: "/reviews" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <Button key={link.path} variant="outline" asChild>
                  <Link href={link.path}>{link.label}</Link>
                </Button>
              ))}
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default ServiceGoogleAds;
