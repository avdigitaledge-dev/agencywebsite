"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { stagger, fadeUp } from "@/lib/animations";
import { ArrowRight, CheckCircle2, Sparkles, Paintbrush, Rocket, SearchCheck, AlertTriangle, RefreshCw, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/FAQ";
import { Breadcrumb } from "@/components/Breadcrumb";

const ServiceWebsiteRedesign = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Website Redesign Services",
    "description": "Website redesign services for small businesses in Wollongong, Sydney, and NSW. Modernise your outdated website with a fast, mobile-responsive design that generates leads.",
    "provider": {
      "@type": "Organization",
      "name": "Digital Edge Studio",
      "url": "https://digitaledgestudio.com"
    },
    "areaServed": ["Wollongong", "Sydney", "NSW", "Australia"],
    "serviceType": "Website Redesign",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Website Redesign Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Redesign",
            "description": "Complete website redesign including modern design, mobile responsiveness, speed optimisation, SEO improvements, and content migration."
          }
        }
      ]
    }
  };

  const redesignFAQ = [
    {
      question: "How much does a website redesign cost?",
      answer: "Website redesigns start from $1,200 for a Starter redesign and $1,850 for a full Business redesign. The exact cost depends on the size and complexity of your current site. We provide a detailed quote after reviewing your site."
    },
    {
      question: "How long does a website redesign take?",
      answer: "Most redesigns take 4–8 weeks depending on complexity. We work closely with you throughout the process, with regular check-ins and feedback rounds."
    },
    {
      question: "Will I lose my Google rankings during a redesign?",
      answer: "No — we handle 301 redirects, preserve your URL structure where possible, and migrate all SEO metadata. In most cases, our clients see improved rankings after a redesign due to better speed, mobile responsiveness, and on-page SEO."
    },
    {
      question: "Can you redesign my WordPress/Wix/Squarespace site?",
      answer: "Yes. We can redesign sites built on any platform. We'll recommend the best platform for your new site based on your needs — whether that's staying on your current platform or migrating to something better."
    },
    {
      question: "Do I need to provide new content for the redesign?",
      answer: "Not necessarily. We can work with your existing content and optimise it for SEO and conversions. If new copywriting is needed, we offer content writing as an add-on service."
    }
  ];

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Services', path: '/services' },
        { label: 'Website Redesign' }
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
              <RefreshCw className="w-4 h-4" />
              Website Redesign
            </motion.div>
            <motion.h1 variants={fadeUp} className="heading-display text-primary-foreground mb-4">
              Website Redesign That Transforms Your <span className="text-gradient">Online Presence</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl mb-8">
              Is your website outdated, slow, or not generating leads? We redesign websites that look modern, load fast, and convert visitors into customers — without starting from scratch.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="btn-shimmer" asChild>
                <Link href="/free-website-review">Get a Free Audit <ArrowRight className="w-5 h-5 ml-1" /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link href="/portfolio">See Our Work</Link>
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

      {/* ═══ Signs You Need a Redesign ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp}>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Is It Time?</span>
              <h2 className="heading-section text-foreground mt-2 mb-6">Signs Your Website Needs a Redesign</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                An outdated website doesn't just look bad — it actively costs you money. Visitors judge your business within seconds, and a slow, clunky site drives potential customers straight to your competitors.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If any of these warning signs sound familiar, it's time to invest in a website redesign that reflects the quality of your business and turns traffic into leads.
              </p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Your site looks outdated or unprofessional",
                  "It's not mobile-responsive",
                  "Pages take more than 3 seconds to load",
                  "You're not getting leads or enquiries",
                  "Your bounce rate is above 60%",
                  "You can't update content easily",
                ].map((sign) => (
                  <div key={sign} className="bg-card rounded-xl border border-border p-4 flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{sign}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ What's Included ═══ */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight">
          <ScrollReveal className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">What's Included in a Website Redesign</motion.h2>
          </ScrollReveal>

          <ScrollReveal className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp}>
              <ul className="space-y-3 mb-8">
                {[
                  "Modern, professional design tailored to your brand",
                  "Mobile-responsive layout for all devices",
                  "Speed optimisation for faster load times",
                  "SEO improvements and content migration",
                  "New calls-to-action and conversion elements",
                  "Google Analytics and Search Console setup",
                  "Training on managing your new site",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="hero" size="lg" className="btn-shimmer" asChild>
                <Link href="/free-website-review">Get a Free Audit <ArrowRight className="w-5 h-5 ml-1" /></Link>
              </Button>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Image
                src="/images/blog/webdesign-pic.jpg"
                alt="Website redesign before and after on laptop and mobile devices"
                width={600}
                height={400}
                className="rounded-2xl border border-border shadow-card w-full h-auto"
              />
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Our Redesign Process ═══ */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight">
          <ScrollReveal className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">Our Redesign Process</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              From audit to launch, we follow a proven four-step process to deliver a redesigned website you'll be proud of.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Audit",
                description: "We review your current site — design, speed, SEO, and conversion issues."
              },
              {
                step: "02",
                title: "Design",
                description: "New mockups based on your brand, with your feedback at every stage."
              },
              {
                step: "03",
                title: "Build",
                description: "We develop your new site with clean code, fast loading, and SEO best practices."
              },
              {
                step: "04",
                title: "Launch",
                description: "Content migration, testing, redirects, and go-live with zero downtime."
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

      {/* ═══ Why Choose Digital Edge Studio ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">Why Choose Digital Edge Studio for Your Redesign</motion.h2>
          </ScrollReveal>

          <ScrollReveal className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Paintbrush,
                title: "Conversion-Focused Design",
                description: "Every element is designed to guide visitors toward contacting you."
              },
              {
                icon: Rocket,
                title: "Performance First",
                description: "Optimised for speed — fast sites rank higher and convert better."
              },
              {
                icon: SearchCheck,
                title: "SEO Preserved",
                description: "We handle redirects, meta data, and content migration so you don't lose your Google rankings."
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
              Ready to Modernise Your Website?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
              Let's transform your outdated website into a modern, high-performing site that generates leads and grows your business. Get a free audit today.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="hero" size="lg" className="btn-shimmer" asChild>
                <Link href="/free-website-review">Get a Free Audit <ArrowRight className="w-5 h-5 ml-1" /></Link>
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
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <FAQ
        faqs={redesignFAQ}
        title="Website Redesign — Frequently Asked Questions"
      />

      {/* ═══ Internal Links ═══ */}
      <section className="section-padding bg-background border-t border-border">
        <div className="container-tight">
          <ScrollReveal className="text-center">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-8">Explore More</motion.h2>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              {[
                { label: "All Services", path: "/services" },
                { label: "Website Design", path: "/services/web-design" },
                { label: "Local SEO", path: "/services/seo" },
                { label: "Web Design Wollongong", path: "/web-design-wollongong" },
                { label: "Our Work", path: "/portfolio" },
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

export default ServiceWebsiteRedesign;
