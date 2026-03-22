"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShoppingCart, Globe, Search, Shield, BarChart3, Users, Star, Sparkles, Bot, Cpu } from "lucide-react";
const serviceWebdesign = "/images/blog/webdesign-pic.jpg";
const serviceSeo = "/images/blog/seo-pic.jpg";
const serviceMarketing = "/images/blog/google-ads-pic.jpg";
const serviceMaintenance = "/images/blog/webhosting-pic.jpg";
const serviceEcommerce = "/images/blog/e-commerce-pic.png";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/FAQ";
import { Breadcrumb } from "@/components/Breadcrumb";
import AnimatedStat from "@/components/AnimatedStat";
import { ScrollReveal } from "@/components/ScrollReveal";
import { stagger, fadeUp } from "@/lib/animations";

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

  const servicesFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What's the difference between your web design and other options?",
        "acceptedAnswer": { "@type": "Answer", "text": "We build custom websites specifically designed to convert visitors into leads and customers. Unlike templates or DIY solutions, our sites are fast, mobile-optimized, SEO-friendly, and include everything you need to succeed online. We don't just build it and disappear — we're here for ongoing support." }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a website?",
        "acceptedAnswer": { "@type": "Answer", "text": "Typical website projects take 4-8 weeks depending on complexity and your location (Sydney, Wollongong, or NSW). We work with you throughout the process to ensure everything is perfect before launch." }
      },
      {
        "@type": "Question",
        "name": "Do you offer services for tradies specifically?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes! We specialize in web design for tradies including plumbers, electricians, builders, cleaners, and contractors. We understand your business model and create websites that attract local customers and qualified leads." }
      },
      {
        "@type": "Question",
        "name": "What's included in your web design packages?",
        "acceptedAnswer": { "@type": "Answer", "text": "Our packages include custom design, mobile responsiveness, fast loading, SEO setup, contact forms, Google Analytics integration, and ongoing support. See our pricing page for complete details." }
      },
      {
        "@type": "Question",
        "name": "Can you help with local SEO for my Wollongong business?",
        "acceptedAnswer": { "@type": "Answer", "text": "Absolutely! We specialize in local SEO for Wollongong, Sydney, and throughout NSW. We optimize your Google Business Profile, target local keywords, and help you rank higher in local search results." }
      },
      {
        "@type": "Question",
        "name": "Do you manage Google Ads campaigns?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes! We manage Google Ads with transparent pricing: $800/month management fee plus 15% of your ad spend. No lock-in contracts, no hidden fees. You only pay for results." }
      },
      {
        "@type": "Question",
        "name": "Can you build an eCommerce website?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes! We build fully managed eCommerce websites from $4,500 AUD. This includes online store setup, product catalogue, secure payment gateway, shipping configuration, inventory management, and full SEO setup." }
      },
      {
        "@type": "Question",
        "name": "What is AEO and why does my business need it?",
        "acceptedAnswer": { "@type": "Answer", "text": "AEO stands for Answer Engine Optimisation. When someone asks Siri, Google Assistant, Alexa, or ChatGPT a question like 'who's the best plumber in Wollongong', the AI gives a direct spoken or written answer — not a list of links. AEO means formatting your website content so your business is the answer those AI tools give. It involves writing content around the exact questions your customers ask, adding FAQ formatting, and using schema markup. It's included in our Local SEO package." }
      },
      {
        "@type": "Question",
        "name": "What is GEO and how is it different from normal SEO?",
        "acceptedAnswer": { "@type": "Answer", "text": "GEO stands for Generative Engine Optimisation. You may have noticed Google now shows an AI-generated summary box at the very top of search results — above all the website links. That's called an AI Overview. GEO means optimising your website so Google's AI pulls your content into that summary box, giving your business prominent exposure before anyone even scrolls down to the traditional results. Traditional SEO gets you into the list. GEO gets you above it." }
      }
    ]
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
      question: "What's included in your web design packages?",
      answer: "Our packages include custom design, mobile responsiveness, fast loading, SEO setup, contact forms, Google Analytics integration, and ongoing support. See our pricing page for complete details."
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
      answer: "AEO stands for Answer Engine Optimisation. When someone asks Siri, Google Assistant, Alexa, or ChatGPT a question like 'who's the best plumber in Wollongong', the AI gives a direct spoken or written answer — not a list of links. AEO means formatting your website content so your business is the answer those AI tools give. It involves writing content around the exact questions your customers ask, adding FAQ formatting, and using schema markup so AI can understand your site. It's included in our Local SEO package at no extra cost."
    },
    {
      question: "What is GEO and how is it different from normal SEO?",
      answer: "GEO stands for Generative Engine Optimisation. You may have noticed Google now shows an AI-generated summary box at the very top of search results — above all the website links. That's called an AI Overview. GEO means optimising your website so Google's AI pulls your content into that summary box, giving your business prominent exposure before anyone even scrolls down to the traditional results. Traditional SEO gets you into the list. GEO gets you above it. Both AEO and GEO are included in our Local SEO package."
    }
  ];

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesFaqSchema) }} />

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

      {/* ═══ Services Overview Grid ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">What We Do</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to get found online and turn visitors into customers.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Globe, label: "Website Design", anchor: "#websites" },
              { icon: ShoppingCart, label: "eCommerce", anchor: "#ecommerce" },
              { icon: Search, label: "Local SEO", anchor: "#seo" },
              { icon: Sparkles, label: "AI Search (AEO & GEO)", anchor: "#ai-search" },
              { icon: BarChart3, label: "Google Ads", anchor: "#marketing" },
              { icon: Shield, label: "Maintenance", anchor: "#maintenance" },
            ].map((item) => (
              <motion.a
                key={item.label}
                variants={fadeUp}
                href={item.anchor}
                className="flex flex-col items-center gap-3 p-6 bg-card rounded-2xl border border-border shadow-card card-premium text-center group"
              >
                <div className="w-12 h-12 rounded-lg gradient-cta flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <span className="font-semibold text-foreground text-sm">{item.label}</span>
              </motion.a>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Website Design & Development ═══ */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }} id="websites">
        <div className="container-tight">
          <ScrollReveal className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp}>
              <span className="text-accent font-semibold text-base uppercase tracking-wider">Website Design & Development</span>
              <h2 className="heading-section text-foreground mt-2 mb-4">
                A Website That Works as Hard as You Do
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Your website is often the first impression a potential customer has of your business. We build professional, fast-loading, mobile-friendly websites that are designed to turn visitors into paying customers — not just look pretty.
              </p>
              <ul className="space-y-3 mb-8 stagger-list">
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
              <Button variant="cta" asChild>
                <Link href="/pricing">See Pricing <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden min-h-[300px] group image-hover-glow">
              <Image src={serviceWebdesign} alt="Professional web design on laptop and mobile devices" width={600} height={400} className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105" />
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ eCommerce Website Design ═══ */}
      <section className="section-padding bg-background" id="ecommerce">
        <div className="container-tight">
          <ScrollReveal className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} className="order-2 lg:order-1 rounded-2xl overflow-hidden min-h-[300px] group image-hover-glow">
              <Image src={serviceEcommerce} alt="eCommerce online store website design" width={600} height={400} className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105" />
            </motion.div>
            <motion.div variants={fadeUp} className="order-1 lg:order-2">
              <span className="text-accent font-semibold text-base uppercase tracking-wider">eCommerce Website Design</span>
              <h2 className="heading-section text-foreground mt-2 mb-4">
                Sell Products Online With a Professional Store
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ready to sell online? We build fully managed eCommerce websites that make it easy for your customers to browse, buy, and come back for more. From product catalogues to secure checkout — we handle everything.
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
                <Link href="/pricing">See eCommerce Pricing <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
            </motion.div>
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

      {/* ═══ Local SEO ═══ */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }} id="seo">
        <div className="container-tight">
          <ScrollReveal className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} className="order-2 lg:order-1 rounded-2xl overflow-hidden min-h-[300px] group image-hover-glow">
              <Image src={serviceSeo} alt="Local SEO and Google Maps search results" width={600} height={400} className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105" />
            </motion.div>
            <motion.div variants={fadeUp} className="order-1 lg:order-2">
              <span className="text-accent font-semibold text-base uppercase tracking-wider">Local SEO</span>
              <h2 className="heading-section text-foreground mt-2 mb-4">
                Get Found by Customers in Your Area
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                When someone in Sydney or Wollongong searches for your type of business, you want to be the first result they see. Our local SEO services help you rank higher on Google Search and Google Maps so more local customers find and contact you.
              </p>
              <ul className="space-y-3 mb-8 stagger-list">
                {[
                  "Google Business Profile setup and optimisation",
                  "Local keyword research and targeting",
                  "On-page SEO (title tags, meta descriptions, content)",
                  "Citation building and directory listings",
                  "Monthly reporting so you can see the results",
                  "Ongoing strategy adjustments based on data",
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
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ AEO & GEO ═══ */}
      <section className="section-padding gradient-hero relative overflow-hidden noise-overlay" id="ai-search">
        {/* Radial accent glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,hsl(217_76%_48%/0.15),transparent_70%)]" />
        {/* Top wave divider */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>

        <div className="container-tight relative z-10">
          <ScrollReveal className="text-center mb-14">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-4 border border-accent/20">
              <Sparkles className="w-4 h-4" />
              New Service
            </motion.div>
            <motion.h2 variants={fadeUp} className="heading-section text-primary-foreground mb-4">
              Get Found in AI Search Results
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/70 max-w-2xl mx-auto">
              Google and AI assistants are changing how people find businesses. We make sure yours gets recommended — not just ranked.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid lg:grid-cols-2 gap-8 mb-12">

            {/* AEO card */}
            <motion.div variants={fadeUp} className="rounded-2xl backdrop-blur-sm p-8 card-hover-lift card-gradient-border">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl gradient-cta flex items-center justify-center shrink-0">
                  <Bot className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="heading-card text-primary-foreground">AEO — Answer Engine Optimisation</h3>
                  <p className="text-accent text-xs font-semibold uppercase tracking-wider mt-0.5">For AI Assistants & Voice Search</p>
                </div>
              </div>
              <p className="text-primary-foreground/70 leading-relaxed mb-5">
                <span className="text-primary-foreground font-medium">Answer Engine Optimisation (AEO)</span> is the practice of structuring website content so AI-powered assistants like Siri, Google Assistant, Alexa, and ChatGPT can extract and present it as a direct answer to user queries. According to research from Princeton University (KDD 2024), content optimised for AI citation receives up to 40% more visibility than non-optimised content.
              </p>
              <p className="text-primary-foreground/70 leading-relaxed mb-5">
                We format your content so AI assistants and voice searches pull your business as the direct answer when someone asks things like <em>"who's the best electrician in Wollongong"</em> or <em>"how much does a plumber cost near me"</em>.
              </p>
              <ul className="space-y-3">
                {[
                  "FAQ and Q&A formatting that AI assistants can easily read",
                  "Schema markup so search engines understand your content",
                  "Content written around the exact questions your customers ask",
                  "Optimised for Google Assistant, Siri, Alexa & ChatGPT",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-primary-foreground text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* GEO card */}
            <motion.div variants={fadeUp} className="rounded-2xl backdrop-blur-sm p-8 card-hover-lift card-gradient-border">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl gradient-cta flex items-center justify-center shrink-0">
                  <Cpu className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="heading-card text-primary-foreground">GEO — Generative Engine Optimisation</h3>
                  <p className="text-accent text-xs font-semibold uppercase tracking-wider mt-0.5">For Google AI Overviews</p>
                </div>
              </div>
              <p className="text-primary-foreground/70 leading-relaxed mb-5">
                <span className="text-primary-foreground font-medium">Generative Engine Optimisation (GEO)</span> is the practice of optimising website content to appear in AI-generated search summaries, such as Google AI Overviews. These AI summaries now appear in roughly 45% of Google searches and can reduce clicks to traditional results by up to 58%, making GEO essential for maintaining organic visibility.
              </p>
              <p className="text-primary-foreground/70 leading-relaxed mb-5">
                We optimise your website so Google's AI picks your content to feature in those summaries. It's like getting a free advertisement at the very top of Google — above everyone else.
              </p>
              <ul className="space-y-3">
                {[
                  "Content structured so Google's AI can easily summarise it",
                  "Builds your website's authority and trustworthiness in your field",
                  "Topical depth — covering your services comprehensively",
                  "Targets the AI Overview box on high-value local searches",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-primary-foreground text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal>
            <motion.div variants={fadeUp} className="rounded-2xl backdrop-blur-sm p-8 text-center card-gradient-border">
              <Sparkles className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="heading-card text-primary-foreground mb-3">Why Does This Matter Right Now?</h3>
              <p className="text-primary-foreground/70 leading-relaxed max-w-2xl mx-auto mb-6">
                Most businesses in Wollongong and Sydney haven't heard of AEO or GEO yet — which means the window to get ahead of your competitors is still wide open. Traditional SEO gets you onto Google's list. AEO and GEO get you <span className="text-primary-foreground font-medium">above the list</span>. Both are included in our Local SEO package at no extra cost.
              </p>
              <Button variant="cta" asChild>
                <Link href="/contact">Talk to Us About AI Search <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Bottom wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-[hsl(220_16%_96%)]" />
          </svg>
        </div>
      </section>

      {/* ═══ Google Ads & PPC ═══ */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }} id="marketing">
        <div className="container-tight">
          <ScrollReveal className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp}>
              <span className="text-accent font-semibold text-base uppercase tracking-wider">Google Ads & PPC</span>
              <h2 className="heading-section text-foreground mt-2 mb-4">
                Get Instant Leads With Google Ads
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
              <Image src={serviceMarketing} alt="Digital marketing analytics dashboard" width={600} height={400} className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105" />
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Maintenance & Hosting ═══ */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }} id="maintenance">
        <div className="container-tight">
          <ScrollReveal className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} className="order-2 lg:order-1 rounded-2xl overflow-hidden min-h-[300px] group image-hover-glow">
              <Image src={serviceMaintenance} alt="Server security and website maintenance" width={600} height={400} className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105" />
            </motion.div>
            <motion.div variants={fadeUp} className="order-1 lg:order-2">
              <span className="text-accent font-semibold text-base uppercase tracking-wider">Maintenance & Hosting</span>
              <h2 className="heading-section text-foreground mt-2 mb-4">
                Keep Your Website Fast, Secure, and Up to Date
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A website isn't a "set and forget" tool. It needs regular updates, security monitoring, and performance checks. We take care of all of that so you can focus on what you do best — running your business.
              </p>
              <ul className="space-y-3 mb-8 stagger-list">
                {[
                  "Fast, reliable Australian hosting",
                  "Regular security updates and patches",
                  "Daily backups with easy restoration",
                  "Uptime monitoring and performance checks",
                  "Content updates and minor changes included",
                  "Priority email and phone support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="cta" asChild>
                <Link href="/pricing">See Plans <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
            </motion.div>
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
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-[hsl(210_15%_94%)]" />
          </svg>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        faqs={servicesFAQ}
        title="Web Design & Digital Marketing for Tradies - Frequently Asked Questions"
      />
    </>
  );
};

export default Services;
