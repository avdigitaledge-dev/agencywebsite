"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { stagger, fadeUp } from "@/lib/animations";
import { CheckCircle2, ArrowRight, BarChart3, Target, TrendingUp, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/FAQ";
import { Breadcrumb } from "@/components/Breadcrumb";

const ServiceDigitalMarketing = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Marketing Services",
    "description": "Full-service digital marketing for small businesses and tradies in Wollongong, Sydney, and NSW. SEO, Google Ads, social media marketing, content strategy, and email marketing.",
    "provider": {
      "@type": "Organization",
      "name": "Digital Edge Studio",
      "url": "https://digitaledgestudio.com"
    },
    "areaServed": ["Wollongong", "Sydney", "NSW", "Australia"],
    "serviceType": "Digital Marketing",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing Package",
            "description": "Integrated digital marketing including SEO, Google Ads, social media, content strategy, and monthly reporting."
          }
        }
      ]
    }
  };

  const digitalMarketingFAQ = [
    {
      question: "What is digital marketing?",
      answer: "Digital marketing covers all online marketing channels — SEO, Google Ads, social media, content marketing, and email marketing. It's about reaching your target customers where they spend their time: online."
    },
    {
      question: "How much does digital marketing cost?",
      answer: "Individual services like SEO or Google Ads start from $800–$1,000/month. Bundled digital marketing packages that combine multiple channels start from $2,800/month. We offer transparent pricing with no lock-in contracts."
    },
    {
      question: "Which digital marketing channels should I use?",
      answer: "It depends on your business and goals. For most local businesses, we recommend starting with SEO and Google Ads for immediate and long-term lead generation, then adding social media and content marketing as you grow."
    },
    {
      question: "Do you offer digital marketing for businesses outside Wollongong?",
      answer: "Yes. While we specialise in Wollongong and Sydney, we work with businesses across NSW and Australia. Our strategies are tailored to your specific location and market."
    },
    {
      question: "How do you measure digital marketing results?",
      answer: "We track key metrics including website traffic, search rankings, leads generated, cost per lead, and return on investment. You'll receive a detailed monthly report showing exactly how your campaigns are performing."
    }
  ];

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Services', path: '/services' },
        { label: 'Digital Marketing' }
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
              <BarChart3 className="w-4 h-4" />
              Digital Marketing
            </motion.div>
            <motion.h1 variants={fadeUp} className="heading-display text-primary-foreground mb-4">
              Digital Marketing Services That Drive <span className="text-gradient">Real Growth</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl mb-8">
              Integrated digital marketing combining SEO, Google Ads, social media, and content strategy — built for tradies and small businesses who want real results, not vanity metrics.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="btn-shimmer" asChild>
                <Link href="/contact">Get Started <ArrowRight className="w-5 h-5 ml-1" /></Link>
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
                Everything You Need to Grow Online
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Stop juggling multiple agencies and disconnected campaigns. Our digital marketing service brings everything together — SEO, ads, social, content, and email — into one cohesive strategy designed to drive leads and grow your business.
              </p>
              <ul className="space-y-3 mb-8 stagger-list">
                {[
                  "SEO & local keyword targeting",
                  "Google Ads setup and management",
                  "Social media content and scheduling",
                  "Content marketing and blog strategy",
                  "Email marketing campaigns",
                  "Monthly analytics and reporting",
                  "Ongoing strategy optimisation",
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
              <Image src="/images/blog/seo-pic.webp" alt="Digital marketing strategy and analytics dashboard" width={600} height={400} className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105" />
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Our Digital Marketing Process ═══ */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight">
          <ScrollReveal className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">Our Digital Marketing Process</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              A proven four-step process that takes your business from scattered efforts to a focused, results-driven marketing machine.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Audit",
                description: "We analyse your current online presence, competitors, and market opportunities."
              },
              {
                step: "02",
                title: "Strategy",
                description: "Custom digital marketing plan targeting the channels and keywords that matter most."
              },
              {
                step: "03",
                title: "Execute",
                description: "Launch and manage campaigns across SEO, ads, social, and content."
              },
              {
                step: "04",
                title: "Optimise",
                description: "Monthly reporting, performance analysis, and continuous improvement."
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
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">Why Choose Digital Edge Studio for Digital Marketing</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              We don't just run campaigns — we build integrated strategies that deliver measurable growth for your business.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Integrated Strategy",
                description: "We combine SEO, ads, social, and content into one cohesive strategy — not siloed campaigns."
              },
              {
                icon: TrendingUp,
                title: "Measurable Results",
                description: "Monthly reports showing traffic, leads, and ROI so you always know what's working."
              },
              {
                icon: DollarSign,
                title: "Transparent Pricing",
                description: "No hidden fees, no lock-in contracts. You know exactly what you're paying for and what you're getting."
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
              Not Sure What You Need?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
              Book a free strategy session and we'll help you figure out which digital marketing channels will deliver the best results for your business.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="hero" size="lg" className="btn-shimmer" asChild>
                <Link href="/contact">Book a Free Strategy Session <ArrowRight className="w-5 h-5 ml-1" /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link href="/services">View Our Services</Link>
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
        faqs={digitalMarketingFAQ}
        title="Digital Marketing — Frequently Asked Questions"
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
                { label: "Google Ads", path: "/services/google-ads" },
                { label: "Client Reviews", path: "/reviews" },
                { label: "Digital Marketing Wollongong", path: "/digital-marketing-wollongong" },
                { label: "Pricing", path: "/pricing" },
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

export default ServiceDigitalMarketing;
