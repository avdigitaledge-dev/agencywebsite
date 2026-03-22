"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart, Globe, Search, Shield, BarChart3, Users, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/FAQ";
import { Breadcrumb } from "@/components/Breadcrumb";
import AnimatedStat from "@/components/AnimatedStat";
import { ScrollReveal } from "@/components/ScrollReveal";
import { stagger, fadeUp } from "@/lib/animations";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "Custom, mobile-responsive websites built to convert visitors into enquiries. Includes SEO setup, contact forms, and Google Analytics.",
    image: "/images/blog/webdesign-pic.jpg",
    alt: "Professional web design on laptop and mobile devices",
    href: "/services/web-design",
    price: "From $1,200",
  },
  {
    icon: ShoppingCart,
    title: "eCommerce Website Design",
    description: "Fully managed online stores with product catalogues, secure payments, shipping configuration, and inventory management.",
    image: "/images/blog/e-commerce-pic.png",
    alt: "eCommerce online store website design",
    href: "/services/ecommerce",
    price: "From $4,500",
  },
  {
    icon: Search,
    title: "Local SEO",
    description: "Get found on Google Maps and local search results. We optimise your Google Business Profile and target local keywords for your area.",
    image: "/images/blog/seo-pic.jpg",
    alt: "Local SEO and Google Maps search results",
    href: "/services/seo",
    price: "From $1,000/month",
  },
  {
    icon: Sparkles,
    title: "AI Search (AEO & GEO)",
    description: "Get recommended by AI assistants and appear in Google AI Overviews. Included in our Local SEO package at no extra cost.",
    image: null,
    alt: "",
    href: "/services/aeo-geo",
    price: "Included with SEO",
  },
  {
    icon: BarChart3,
    title: "Google Ads & PPC",
    description: "Targeted Google Ads campaigns that put your business in front of customers actively searching for your services. Measurable ROI from day one.",
    image: "/images/blog/google-ads-pic.jpg",
    alt: "Digital marketing analytics dashboard",
    href: "/services/google-ads",
    price: "From $800/month",
  },
  {
    icon: Shield,
    title: "Maintenance & Hosting",
    description: "Keep your website fast, secure, and up to date. We handle updates, backups, and performance monitoring so you don't have to.",
    image: "/images/blog/webhosting-pic.jpg",
    alt: "Server security and website maintenance",
    href: "/services/maintenance-hosting",
    price: "From $99/month",
  },
];

const Services = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Design & Digital Marketing for Tradies",
    "description": "Professional web design, eCommerce, local SEO, and digital marketing services for tradies and small businesses in Wollongong and Sydney",
    "provider": {
      "@type": "Organization",
      "name": "Digital Edge Studio"
    },
    "areaServed": ["Sydney", "Wollongong", "NSW"]
  };

  const servicesFAQ = [
    {
      question: "What's the difference between your web design and other options?",
      answer: "We build custom websites specifically designed to convert visitors into leads and customers. Unlike templates or DIY solutions, our sites are fast, mobile-optimized, SEO-friendly, and include everything you need to succeed online. We don't just build it and disappear — we're here for ongoing support."
    },
    {
      question: "How long does it take to build a website?",
      answer: "Typical website projects take 4-8 weeks depending on complexity and your location (Sydney, Wollongong, or NSW). We work with you throughout the process to ensure everything is perfect before launch."
    },
    {
      question: "Do you offer services for tradies specifically?",
      answer: "Yes! We specialize in web design for tradies including plumbers, electricians, builders, cleaners, and contractors. We understand your business model and create websites that attract local customers and qualified leads."
    },
    {
      question: "Can you help with local SEO for my Wollongong business?",
      answer: "Absolutely! We specialize in local SEO for Wollongong, Sydney, and throughout NSW. We optimize your Google Business Profile, target local keywords, and help you rank higher in local search results."
    },
    {
      question: "Do you manage Google Ads campaigns?",
      answer: "Yes! We manage Google Ads with transparent pricing: $800/month management fee plus 15% of your ad spend. No lock-in contracts, no hidden fees. You only pay for results."
    },
    {
      question: "Can you build an eCommerce website?",
      answer: "Yes! We build fully managed eCommerce websites from $4,500 AUD. This includes online store setup, product catalogue, secure payment gateway integration, shipping and tax configuration, inventory management, and full SEO setup."
    },
    {
      question: "What is AEO and why does my business need it?",
      answer: "AEO stands for Answer Engine Optimisation. When someone asks Siri, Google Assistant, Alexa, or ChatGPT a question like 'who's the best plumber in Wollongong', the AI gives a direct spoken or written answer — not a list of links. AEO means formatting your website content so your business is the answer those AI tools give. It's included in our Local SEO package at no extra cost."
    },
    {
      question: "What is GEO and how is it different from normal SEO?",
      answer: "GEO stands for Generative Engine Optimisation. You may have noticed Google now shows an AI-generated summary box at the very top of search results — above all the website links. That's called an AI Overview. GEO means optimising your website so Google's AI pulls your content into that summary box, giving your business prominent exposure before anyone even scrolls down to the traditional results. Traditional SEO gets you into the list. GEO gets you above it. Both AEO and GEO are included in our Local SEO package."
    }
  ];

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Services' }
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
              Services That Bring You More <span className="text-gradient">Customers</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl">
              From professional websites to local SEO and ongoing support — everything your business needs to succeed online.
            </motion.p>
          </motion.div>
        </div>
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* ═══ Service Cards Grid ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">What We Do</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to get found online and turn visitors into customers.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <motion.div key={service.title} variants={fadeUp}>
                <Link
                  href={service.href}
                  className="group flex flex-col h-full bg-card rounded-2xl border border-border shadow-card card-premium overflow-hidden"
                >
                  {service.image && (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  {!service.image && (
                    <div className="h-48 gradient-hero relative flex items-center justify-center">
                      <service.icon className="w-12 h-12 text-primary-foreground/30" />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg gradient-cta flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-accent-warm font-display text-sm price-shimmer">{service.price}</span>
                      <span className="text-accent text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Trust Bar ═══ */}
      <section className="bg-card border-y border-border">
        <div className="container-tight px-4 py-6">
          <ScrollReveal className="flex flex-wrap justify-center gap-10 md:gap-20">
            {[
              { icon: Users, val: "30+", label: "Websites Delivered" },
              { icon: Star, val: "4.8", label: "Google Rating" },
              { icon: Shield, val: "0", label: "Lock-In Contracts" },
            ].map((item) => (
              <motion.div key={item.label} variants={fadeUp} className="flex flex-col items-center text-center">
                <item.icon className="w-5 h-5 text-accent mb-2" />
                <AnimatedStat value={item.val} label={item.label} />
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Final CTA ═══ */}
      <section className="gradient-hero relative overflow-hidden noise-overlay">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        <div className="container-tight px-4 py-20 text-center relative z-10">
          <ScrollReveal>
            <motion.h2 variants={fadeUp} className="heading-section text-primary-foreground mb-4">Not Sure What You Need?</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
              No worries. Get in touch and we'll have a no-pressure chat about what would work best for your business.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="hero" size="lg" className="btn-shimmer" asChild>
                <Link href="/contact">Get a Free Quote <ArrowRight className="w-5 h-5 ml-1" /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link href="/free-website-review">Free Website Review</Link>
              </Button>
            </motion.div>
          </ScrollReveal>
        </div>
        {/* Top wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 rotate-180">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        faqs={servicesFAQ}
        title="Web Design & Digital Marketing — Frequently Asked Questions"
      />
    </>
  );
};

export default Services;
