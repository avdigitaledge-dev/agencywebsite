"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { stagger, fadeUp } from "@/lib/animations";
import { ArrowRight, CheckCircle2, Sparkles, Paintbrush, Rocket, SearchCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/FAQ";
import { Breadcrumb } from "@/components/Breadcrumb";

const ServiceWebDesign = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Website Design & Development",
    "description": "Custom website design and development for small businesses and tradies in Wollongong, Sydney, and NSW. Mobile-responsive, fast-loading sites built to generate leads and convert visitors into customers.",
    "provider": {
      "@type": "Organization",
      "name": "Digital Edge Studio",
      "url": "https://digitaledgestudio.com"
    },
    "areaServed": ["Wollongong", "Sydney", "NSW", "Australia"],
    "serviceType": "Website Design & Development",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Design Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Starter Website",
            "description": "Up to 5 pages — custom designed, mobile-responsive website with SEO foundations and contact forms. From $1,200 AUD."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Website",
            "description": "Up to 10 pages — fully custom website with advanced features, SEO setup, Google Analytics, and Search Console integration. From $1,850 AUD."
          }
        }
      ]
    }
  };

  const faq = [
    {
      question: "How much does a website cost?",
      answer: "Our web design packages start from $1,200 AUD for a Starter Website (up to 5 pages) and $1,850 for a Business Website (up to 10 pages). See our pricing page for full details."
    },
    {
      question: "How long does it take to build a website?",
      answer: "Most websites take 4-8 weeks depending on complexity. We work with you throughout the process to ensure everything is perfect before launch."
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Absolutely. Every website we build is fully responsive and tested across phones, tablets, and desktops. Over 60% of web traffic is mobile — we make sure your site looks great everywhere."
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Yes. We offer maintenance and hosting packages from $99/month that include security updates, backups, content changes, and priority support."
    },
    {
      question: "Can I update the website myself?",
      answer: "Yes. We build on platforms that allow you to make basic content updates. We also provide training during handover so you feel confident managing your site."
    }
  ];

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Services', path: '/services' },
        { label: 'Website Design' }
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
              <Sparkles className="w-4 h-4" />
              Web Design & Development
            </motion.div>
            <motion.h1 variants={fadeUp} className="heading-display text-primary-foreground mb-4">
              Professional Web Design in Wollongong — <span className="text-gradient">Custom Sites That Convert</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl mb-8">
              We build professional, fast-loading, mobile-friendly websites for small businesses and tradies across Wollongong, Sydney, and NSW. Every site is designed to generate leads and grow your business.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="btn-shimmer" asChild>
                <Link href="/contact">Get a Free Quote <ArrowRight className="w-5 h-5 ml-1" /></Link>
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

      {/* ═══ What We Build ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp}>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">What We Build</span>
              <h2 className="heading-section text-foreground mt-2 mb-6">Websites Designed to Convert Visitors Into Paying Customers</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Your website is often the first impression a potential customer has of your business. We design and build custom websites that look professional, load fast, and guide visitors toward taking action — whether that's calling you, filling out a form, or booking a service.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Every site we build is tailored to your brand and industry, with mobile responsiveness, SEO foundations, and clear calls to action baked in from day one.
              </p>
              <ul className="space-y-3">
                {[
                  "Custom design tailored to your brand and industry",
                  "Mobile-responsive — looks great on phones, tablets, and desktops",
                  "Fast load times for better user experience and SEO",
                  "Built-in SEO foundations so Google can find you",
                  "Contact forms, click-to-call, and clear calls to action",
                  "Google Analytics and Search Console setup included",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Image
                src="/images/blog/webdesign-pic.jpg"
                alt="Professional web design on laptop and mobile devices"
                width={600}
                height={400}
                className="rounded-2xl border border-border shadow-card w-full h-auto"
              />
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
              From initial discovery to launch day, we follow a proven four-step process to deliver a website you'll be proud of.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We learn about your business, goals, and target customers to ensure the website is built with purpose."
              },
              {
                step: "02",
                title: "Design",
                description: "Custom mockups based on your brand, reviewed and refined with your feedback until you're happy."
              },
              {
                step: "03",
                title: "Build",
                description: "We develop your site with clean code, fast loading, and SEO best practices built into every page."
              },
              {
                step: "04",
                title: "Launch",
                description: "Final testing, go-live, and handover with training on how to manage your site day-to-day."
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
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">Why Choose Digital Edge Studio</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              We don't just build websites — we build websites that work for your business. Here's what sets us apart.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Paintbrush,
                title: "Built for Conversions",
                description: "Every element is designed to guide visitors toward contacting you — from layout and copy to buttons and forms."
              },
              {
                icon: Rocket,
                title: "Lightning Fast",
                description: "Optimised for speed — fast sites rank higher and convert better. We build lean, performance-focused websites."
              },
              {
                icon: SearchCheck,
                title: "SEO Ready",
                description: "On-page SEO setup included so Google can find and index your site from day one. No extra charge, no add-ons."
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
              Ready to Get a Website That Actually Works?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
              Let's build a website that looks great, loads fast, and turns visitors into paying customers. Get in touch for a free, no-obligation quote.
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
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <FAQ
        faqs={faq}
        title="Website Design — Frequently Asked Questions"
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
                { label: "eCommerce", path: "/services/ecommerce" },
                { label: "Website Redesign", path: "/services/website-redesign" },
                { label: "Pricing", path: "/pricing" },
                { label: "Our Work", path: "/portfolio" },
                { label: "Client Reviews", path: "/reviews" },
                { label: "Web Design Wollongong", path: "/web-design-wollongong" },
                { label: "Web Design Sydney", path: "/web-design-sydney" },
                { label: "How to Choose a Web Designer", path: "/blog/how-to-choose-web-designer-australia" },
                { label: "Benefits of a Professional Website", path: "/blog/benefits-business-website" },
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

export default ServiceWebDesign;
