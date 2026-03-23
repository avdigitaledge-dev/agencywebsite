"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { stagger, fadeUp } from "@/lib/animations";
import { Search, CheckCircle2, ArrowRight, MapPin, BarChart3, Target, TrendingUp, Globe, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/FAQ";
import { Breadcrumb } from "@/components/Breadcrumb";

const ServiceSEO = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Local SEO Services",
    "description": "Local SEO services that help businesses rank higher on Google Search and Google Maps. Google Business Profile optimisation, keyword targeting, citation building, and monthly reporting. Serving Wollongong, Sydney, and NSW.",
    "provider": {
      "@type": "Organization",
      "name": "Digital Edge Studio",
      "url": "https://digitaledgestudio.com"
    },
    "areaServed": ["Wollongong", "Sydney", "NSW", "Australia"],
    "serviceType": "Local SEO",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Local SEO Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Local SEO Package",
            "description": "Google Business Profile optimisation, local keyword research, on-page SEO, citation building, monthly reporting, and AEO/GEO optimisation included."
          }
        }
      ]
    }
  };

  const seoFAQ = [
    {
      question: "How long does SEO take to show results?",
      answer: "Most businesses see noticeable improvements within 3-6 months. SEO is a long-term strategy — the results compound over time and become more powerful the longer you invest. Read our guide on how much SEO costs for a full pricing breakdown."
    },
    {
      question: "What's included in your Local SEO package?",
      answer: "Our Local SEO package includes Google Business Profile optimisation, keyword research, on-page SEO, citation building, monthly reporting, and AEO/GEO optimisation — all for $1,000/month with no lock-in contracts."
    },
    {
      question: "Do I need SEO if I already have a website?",
      answer: "Yes. Having a website is just the first step. Without SEO, your site is invisible to most potential customers. SEO ensures Google can find, understand, and rank your site for the searches that matter."
    },
    {
      question: "What is the difference between SEO and Google Ads?",
      answer: "SEO generates organic (free) traffic over time, while Google Ads provides instant paid visibility. We recommend both — Ads for immediate leads and SEO for sustainable long-term growth."
    },
    {
      question: "Do you offer SEO for businesses outside Wollongong?",
      answer: "Yes. While we specialise in Wollongong and Sydney, we work with businesses across NSW and Australia. Our SEO strategies are tailored to your specific location and market."
    }
  ];

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Services', path: '/services' },
        { label: 'Local SEO' }
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
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-primary-foreground/90 text-sm font-semibold mb-6">
              <Search className="w-4 h-4" />
              Local SEO Services
            </motion.div>
            <motion.h1 variants={fadeUp} className="heading-display text-primary-foreground mb-4">
              Local SEO Services in Wollongong — <span className="text-gradient">Get Found on Google</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl mb-8">
              Rank higher on Google Search and Google Maps so more local customers find and contact your business. No lock-in contracts, no hidden fees — just results you can see.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="btn-shimmer" asChild>
                <Link href="/contact">Get Started <ArrowRight className="w-5 h-5 ml-1" /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link href="/free-website-review">Free Website Review</Link>
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
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">What's Included</span>
              <h2 className="heading-section text-foreground mt-2 mb-4">
                Get Found by Customers in Your Area
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                When someone in your area searches for the services you offer, you want to be the first result they see. Our Local SEO service covers everything you need to rank higher on Google Search and Google Maps — so more customers find and contact your business.
              </p>
              <ul className="space-y-3 mb-8 stagger-list">
                {[
                  "Google Business Profile setup and optimisation",
                  "Local keyword research and targeting",
                  "On-page SEO (title tags, meta descriptions, content)",
                  "Citation building and directory listings",
                  "Monthly reporting so you can see the results",
                  "Ongoing strategy adjustments based on data",
                  "AEO & GEO optimisation included at no extra cost",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="cta" asChild>
                <Link href="/contact">Get Started <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden min-h-[300px] group image-hover-glow">
              <Image src="/images/blog/seo-pic.jpg" alt="Local SEO and Google Maps search results" width={600} height={400} className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105" />
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Our SEO Process ═══ */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight">
          <ScrollReveal className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">Our SEO Process</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              A proven four-step process that takes your business from invisible to unmissable on Google.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Audit",
                description: "We analyse your current rankings, website health, and competitor landscape."
              },
              {
                step: "02",
                title: "Strategy",
                description: "Custom SEO plan targeting the keywords your customers actually search for."
              },
              {
                step: "03",
                title: "Optimise",
                description: "On-page improvements, content updates, citation building, and technical fixes."
              },
              {
                step: "04",
                title: "Report",
                description: "Monthly reports showing your rankings, traffic, and leads so you can see the ROI."
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

      {/* ═══ Why Local SEO Matters ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">Why Local SEO Matters</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              SEO isn't just about rankings — it's about getting the right customers to find your business at the right time.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: MapPin,
                title: "Google Maps Visibility",
                description: "Appear in the local pack when customers search for services near them."
              },
              {
                icon: Target,
                title: "Qualified Local Leads",
                description: "Attract customers who are actively searching for your services in your area."
              },
              {
                icon: TrendingUp,
                title: "Long-Term Growth",
                description: "Unlike ads, SEO builds compounding value — the longer you invest, the stronger your results."
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
              Ready to Rank Higher on Google?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
              Get in touch for a free, no-obligation chat about how Local SEO can help your business get found by more customers.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="hero" size="lg" className="btn-shimmer" asChild>
                <Link href="/contact">Get Started <ArrowRight className="w-5 h-5 ml-1" /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link href="/free-website-review">Free Website Review</Link>
              </Button>
            </motion.div>
          </ScrollReveal>
        </div>
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <FAQ
        faqs={seoFAQ}
        title="Local SEO — Frequently Asked Questions"
      />

      {/* ═══ Internal Links ═══ */}
      <section className="section-padding bg-background border-t border-border">
        <div className="container-tight">
          <ScrollReveal className="text-center">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-8">Explore More</motion.h2>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              {[
                { label: "All Services", path: "/services" },
                { label: "AEO & GEO", path: "/services/aeo-geo" },
                { label: "Google Ads", path: "/services/google-ads" },
                { label: "Digital Marketing", path: "/services/digital-marketing" },
                { label: "Pricing", path: "/pricing" },
                { label: "SEO Wollongong", path: "/seo-wollongong" },
                { label: "Web Design Wollongong", path: "/web-design-wollongong" },
                { label: "Web Design Sydney", path: "/web-design-sydney" },
                { label: "SEO Pricing Guide", path: "/blog/seo-cost-australia" },
                { label: "15 Ways to Improve Your SEO", path: "/blog/improve-website-seo-australia" },
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

export default ServiceSEO;
