"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { stagger, fadeUp } from "@/lib/animations";
import {
  ShoppingCart,
  CheckCircle2,
  ArrowRight,
  CreditCard,
  Package,
  Truck,
  BarChart3,
  Shield,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/FAQ";
import { Breadcrumb } from "@/components/Breadcrumb";

const ServiceEcommerce = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "eCommerce Website Design",
    "description": "Custom eCommerce websites for Australian businesses. Full store setup with Shopify or WooCommerce, secure payments, shipping configuration, and SEO. Serving Wollongong, Sydney, and NSW.",
    "provider": {
      "@type": "Organization",
      "name": "Digital Edge Studio",
      "url": "https://digitaledgestudio.com"
    },
    "areaServed": ["Wollongong", "Sydney", "NSW", "Australia"],
    "serviceType": "eCommerce Website Design"
  };

  const ecommerceFAQ = [
    {
      question: "How much does an eCommerce website cost?",
      answer: "Our eCommerce websites start from $4,500 AUD. This includes full store setup, product catalogue, payment gateway, shipping configuration, and SEO setup."
    },
    {
      question: "What platform do you build eCommerce sites on?",
      answer: "We build on Shopify or WooCommerce depending on your needs. Both are proven platforms with excellent reliability and scalability."
    },
    {
      question: "Can I manage products and orders myself?",
      answer: "Yes. We provide full training on how to add products, manage inventory, process orders, and handle refunds. You'll have complete control over your store."
    },
    {
      question: "Do you handle payment gateway setup?",
      answer: "Yes. We set up secure payment processing through Stripe, PayPal, or other gateways. All transactions are encrypted and PCI-compliant."
    },
    {
      question: "Will my online store be found on Google?",
      answer: "Yes. We include SEO setup for all product and category pages, including meta tags, structured data, and image optimisation."
    }
  ];

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Services', path: '/services' },
        { label: 'eCommerce' }
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
              <ShoppingCart className="w-4 h-4" />
              Professional Online Stores
            </motion.div>
            <motion.h1 variants={fadeUp} className="heading-display text-primary-foreground mb-4">
              Sell Online With a Professional <span className="text-gradient">eCommerce Website</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl mb-8">
              We build fully managed online stores that make it easy for your customers to browse, buy, and come back for more. From product catalogues to secure checkout — we handle everything.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
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

      {/* ═══ What You Get ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden min-h-[300px] group image-hover-glow">
              <Image
                src="/images/blog/e-commerce-pic.webp"
                alt="eCommerce online store website design"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <span className="text-accent font-semibold text-base uppercase tracking-wider">eCommerce Website Design</span>
              <h2 className="heading-section text-foreground mt-2 mb-4">
                What You Get
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We build fully managed eCommerce websites that are designed to convert browsers into buyers. Whether you're selling physical products, digital goods, or services — we set up everything you need to start selling online with confidence.
              </p>
              <ul className="space-y-3 mb-8 stagger-list">
                {[
                  "Full online store setup with product catalogue",
                  "Secure payment gateway integration (Stripe, PayPal, etc.)",
                  "Shipping and tax configuration for Australia",
                  "Inventory management and stock tracking",
                  "Order notification emails for you and your customers",
                  "Mobile-optimised shopping experience",
                  "SEO setup for product and category pages",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="cta" asChild>
                <Link href="/contact">Get a Free Quote <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
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
              From planning to launch, we handle every step of building your online store.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Planning",
                icon: BarChart3,
                description: "We map out your store structure, categories, and payment flow."
              },
              {
                step: "02",
                title: "Design",
                icon: Package,
                description: "Custom storefront designed to match your brand and build trust."
              },
              {
                step: "03",
                title: "Build",
                icon: CreditCard,
                description: "Product upload, payment gateway, shipping rules, and testing."
              },
              {
                step: "04",
                title: "Launch",
                icon: ShoppingCart,
                description: "Go-live with full training on managing your store day-to-day."
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

      {/* ═══ Why Sell With Us ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">Why Sell With Us</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              We build eCommerce websites that are secure, fast, and designed for Australian businesses.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Secure Payments",
                description: "PCI-compliant payment integration with Stripe, PayPal, and more. Every transaction is encrypted and secure."
              },
              {
                icon: Truck,
                title: "Australian Shipping",
                description: "Shipping rules, flat rate, and calculated shipping for AU delivery. We configure everything for your business."
              },
              {
                icon: Smartphone,
                title: "Mobile Shopping",
                description: "Over 60% of online shopping happens on mobile — your store will be fully optimised and ready for every device."
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
              Ready to Start Selling Online?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
              Get a free quote for your eCommerce website. We'll discuss your products, your goals, and build a store that drives real sales.
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
        faqs={ecommerceFAQ}
        title="eCommerce Website Design — Frequently Asked Questions"
      />

      {/* ═══ Internal Links ═══ */}
      <section className="section-padding bg-background border-t border-border">
        <div className="container-tight">
          <ScrollReveal className="text-center">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-8">Explore More</motion.h2>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              {[
                { label: "All Services", path: "/services" },
                { label: "Web Design", path: "/services/web-design" },
                { label: "Local SEO", path: "/services/seo" },
                { label: "Pricing", path: "/pricing" },
                { label: "Portfolio", path: "/portfolio" },
                { label: "Client Reviews", path: "/reviews" },
                { label: "Web Design for Tradies", path: "/web-design-tradies" },
                { label: "Web Design Wollongong", path: "/web-design-wollongong" },
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

export default ServiceEcommerce;
