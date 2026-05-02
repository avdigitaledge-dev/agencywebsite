"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Globe, Search, Shield, CheckCircle2, Star, MapPin, TrendingUp, ChevronLeft, ChevronRight, Quote, Zap, BarChart3, ShoppingCart, Rocket, Download, Send, Sparkles, AlertCircle, Calculator } from "lucide-react";
import { portfolioProjects } from "@/data/portfolioProjects";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { trackEvent } from "@/lib/utils";
import { subscribeToMailchimp } from "@/lib/subscribe";
import { useToast } from "@/hooks/use-toast";
import { useRef } from "react";
import { useTilt, useMagnetic, useSpotlight } from "@/hooks/use-effects";
import AnimatedStat from "@/components/AnimatedStat";
import { ScrollReveal } from "@/components/ScrollReveal";
import { stagger, fadeUp } from "@/lib/animations";
import { RATINGS } from "@/data/siteConfig";

/* ── Why cards with spotlight + tilt ───────────────────── */
const TiltCard = ({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) => {
  const { ref, style } = useTilt(6);
  return (
    <motion.div
      variants={fadeUp}
      ref={ref}
      style={style}
      data-spotlight
      className="relative bg-card rounded-2xl p-8 border border-border card-premium group overflow-hidden"
    >
      <div className="w-12 h-12 rounded-xl gradient-cta flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-glow transition-all duration-300">
        <Icon className="w-6 h-6 text-accent-foreground" />
      </div>
      <h3 className="heading-card text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{desc}</p>
    </motion.div>
  );
};

const WhyCards = () => {
  const spotlightRef = useSpotlight();
  return (
    <ScrollReveal>
      <div ref={spotlightRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: Globe, title: "Websites That Convert", desc: "Every site we build is designed with one goal: turning your visitors into leads. Fast, mobile-friendly, and built to rank on Google." },
          { icon: Search, title: "Local SEO That Works", desc: "We optimise your Google Business Profile and website so local customers find you first when they search for your services." },
          { icon: BarChart3, title: "Google Ads & PPC", desc: "Targeted Google Ads campaigns that put your business in front of customers actively searching for your trade. Measurable ROI from day one." },
          { icon: Shield, title: "Ongoing Support & Hosting", desc: "We handle updates, security, and backups so you can focus on running your business. No tech headaches." },
        ].map((item) => (
          <TiltCard key={item.title} {...item} />
        ))}
      </div>
    </ScrollReveal>
  );
};

/* ── Magnetic CTA button wrapper ──────────────────────── */
const MagneticButton = ({ children }: { children: React.ReactNode }) => {
  const ref = useMagnetic(0.25);
  return <div ref={ref as React.RefObject<HTMLDivElement>} className="inline-block">{children}</div>;
};

/* ── Service cards with spotlight + staggered reveal ───── */
const ServiceCards = () => {
  const spotlightRef = useSpotlight();
  return (
    <ScrollReveal>
      <div ref={spotlightRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: Globe, title: "Website Design & Development", desc: "Custom, mobile-responsive websites built to convert visitors into enquiries. Includes SEO setup, contact forms, and Google Analytics.", price: "From $1,200", link: "/services" },
          { icon: Search, title: "Local SEO", desc: "Get found on Google Maps and local search results. We optimise your Google Business Profile and target local keywords for your area.", price: "From $1,000/month", link: "/services/seo" },
          { icon: BarChart3, title: "Google Ads Management", desc: "Targeted Google Ads campaigns that put your business in front of customers actively searching for your services. Measurable ROI from day one.", price: "From $800/month", link: "/services/google-ads" },
          { icon: ShoppingCart, title: "E-Commerce Solutions", desc: "Custom online stores built on Shopify or WooCommerce. Sell products 24/7 with secure payments, inventory management, and seamless checkout.", price: "From $3,000", link: "/services/ecommerce" },
          { icon: Rocket, title: "Growth Bundle", desc: "The full package — website build, Google Ads, and local SEO combined into one plan. Everything you need to launch and grow your online presence.", price: "From $2,800/month", link: "/pricing" },
          { icon: Shield, title: "Maintenance & Hosting", desc: "Keep your website fast, secure, and up to date. We handle updates, backups, and performance monitoring so you don't have to.", price: "$99/month", link: "/services/maintenance-hosting" },
        ].map((service, i) => (
          <motion.div
            key={service.title}
            variants={fadeUp}
            custom={i}
            data-spotlight
            className="relative bg-card rounded-2xl p-8 border border-border card-premium flex flex-col group overflow-hidden"
          >
            <div className="w-11 h-11 rounded-xl gradient-cta flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <service.icon className="w-5 h-5 text-white" />
            </div>
            <h3 className="heading-card text-foreground mb-3">{service.title}</h3>
            <p className="text-muted-foreground leading-relaxed flex-1 mb-6">{service.desc}</p>
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <span className="font-bold text-accent-warm font-display text-lg price-shimmer">{service.price}</span>
              <Button variant="ghost" size="sm" asChild className="text-accent">
                <Link href={service.link}>Learn More <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </ScrollReveal>
  );
};

const FORMSPREE_ID = "xzdjplaq";

const Index = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [checklistLoading, setChecklistLoading] = useState(false);

  const handleChecklistSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setChecklistLoading(true);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: new FormData(e.target as HTMLFormElement),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        trackEvent("generate_lead", { form_name: "checklist_download" });
        const formData = new FormData(e.target as HTMLFormElement);
        subscribeToMailchimp(formData.get("email") as string);
        router.push("/checklist-thank-you");
      } else throw new Error();
    } catch {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
    } finally {
      setChecklistLoading(false);
    }
  };

  const testimonials = [
    { name: "James T.", biz: "Plumber, Sydney", quote: "Since Digital Edge rebuilt our website, we've had a 60% increase in phone calls from Google. Best investment we've made." },
    { name: "Sarah M.", biz: "Physiotherapist, Wollongong", quote: "They made the whole process easy and stress-free. Our new website looks incredible and we're getting more bookings than ever." },
    { name: "Mark L.", biz: "Electrician, NSW", quote: "The local SEO work has been a game changer. We're now showing up at the top of Google Maps in our area." },
    { name: "David K.", biz: "Builder, Sydney", quote: "Professional, fast, and very easy to work with. Our new website has dramatically improved our online presence." },
    { name: "Lisa P.", biz: "Cleaning Business, Wollongong", quote: "They really understood our business and built exactly what we needed. Highly recommend Digital Edge Studio to any small business." },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIdx((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  /* Parallax for hero section */
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Digital Edge Studio",
    "url": "https://digitaledgestudio.com",
    "description": "Web design and digital marketing for tradies and small businesses in Wollongong, Sydney & NSW",
    "potentialAction": {
      "@type": "SearchAction",
      "target": { "@type": "EntryPoint", "urlTemplate": "https://digitaledgestudio.com/blog?q={search_term_string}" },
      "query-input": "required name=search_term_string"
    }
  };

  const ratingSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://digitaledgestudio.com/#business",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": RATINGS.value,
      "reviewCount": RATINGS.count,
      "bestRating": RATINGS.best
    }
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Get a Website That Brings You More Customers",
    "description": "Getting started is simple. No jargon, no confusion — just results.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Tell Us About Your Business",
        "text": "Fill out our quick form or give us a call. We'll learn about your business, goals, and what you need."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "We Build Your Solution",
        "text": "We design and develop your website or SEO strategy, keeping you in the loop every step of the way."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Start Getting More Leads",
        "text": "Your new website goes live and starts working for you — bringing in calls, enquiries, and customers."
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      {/* ═══ Hero ═══ */}
      <section ref={heroRef} className="gradient-hero relative overflow-hidden min-h-[85vh] flex items-center noise-overlay">
        {/* Background effects */}
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="absolute inset-0 hero-noise" />


        <motion.div className="container-tight px-4 py-20 md:py-28 relative z-10 w-full" style={{ y: heroY, opacity: heroOpacity }}>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
            >
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-8 backdrop-blur-md border border-white/10"
              >
                <Star className="w-3.5 h-3.5" />
                Trusted by 30+ Local Businesses
              </motion.span>
              <motion.h1 variants={fadeUp} className="heading-display text-white mb-6">
                Websites That Get Local Businesses{" "}
                <span className="text-gradient">More Customers</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-body-lg text-white/65 mb-10 max-w-xl">
                We build fast, professional websites for tradies, small businesses, and local services across Wollongong — with local SEO that gets you ranking on Google and generating 40+ leads per month.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <MagneticButton>
                  <Button variant="hero" size="lg" asChild>
                    <Link href="/contact">
                      Get a Free Quote
                      <ArrowRight className="w-5 h-5 ml-1" />
                    </Link>
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button variant="hero-outline" size="lg" asChild>
                    <Link href="/free-website-review">Free Website Review</Link>
                  </Button>
                </MagneticButton>
              </motion.div>
              <p className="text-xs text-white/50 mt-3">Free, no obligation — get a response within 24 hours</p>
              <motion.div variants={fadeUp} className="flex items-center gap-6 mt-10 text-white/70 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  No lock-in contracts
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Free consultation
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Built for local businesses across Wollongong
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              className="hidden lg:flex items-center justify-center"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="relative">
                <Image
                  src="/images/blog/electrician-google-pic.webp"
                  alt="Electrician business ranking first on Google search results"
                  width={560}
                  height={400}
                  priority
                  className="relative w-full max-w-[560px] object-contain"
                  style={{
                    maskImage: "radial-gradient(ellipse 90% 85% at 50% 50%, black 50%, transparent 100%)",
                    WebkitMaskImage: "radial-gradient(ellipse 90% 85% at 50% 50%, black 50%, transparent 100%)",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ═══ Trust Bar ═══ */}
      <section className="gradient-hero relative -mt-1">
        <div className="container-tight px-4 py-10">
          <ScrollReveal className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-30">
            {[
              { val: "30+", label: "Websites Delivered (2025–2026)" },
              { val: "5.0", label: "Google Rating (Verified)" },
              { val: "40+", label: "Avg Leads/Month per Client*" },
              { val: "12x", label: "Average Client ROI*" },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className="card-glass rounded-xl p-5"
              >
                <AnimatedStat value={item.val} label={item.label} white />
              </motion.div>
            ))}
          </ScrollReveal>
          <p className="text-xs text-white/40 text-center mt-3 relative z-30">
            *Based on <Link href="/portfolio/volt-current-electrical-wollongong" className="underline hover:text-white/60 transition-colors">Volt Current Electrical, 2024–2025</Link>
          </p>
        </div>
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,60 Q600,-20 1200,60 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* ═══ Pain-Point Agitation ═══ */}
      <section className="relative overflow-hidden">
        {/* Dark background with texture */}
        <div className="absolute inset-0 bg-[hsl(222_24%_6%)]" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(0_84%_60%/0.06),transparent_70%)]" />
        {/* Top wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
        <div className="container-tight max-w-3xl section-padding relative z-10">
          <ScrollReveal className="text-center">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 text-red-400 text-sm font-semibold mb-6 backdrop-blur-md border border-red-500/20">
              <AlertCircle className="w-3.5 h-3.5" />
              The Problem
            </motion.span>
            <motion.h2 variants={fadeUp} className="heading-section text-white mb-10">Sound Familiar?</motion.h2>
            <motion.div variants={fadeUp} className="space-y-4 text-left">
              {[
                "You paid thousands for a website that sits there doing nothing — no calls, no enquiries, no leads.",
                "Your competitors show up on Google first, even though you've been in business longer.",
                "You're getting visitors but nobody's picking up the phone or filling out the form.",
                "Your website looks outdated on mobile and takes forever to load.",
              ].map((pain, i) => (
                <motion.div
                  key={pain}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="group flex items-start gap-4 rounded-2xl border border-red-500/10 bg-white/[0.03] backdrop-blur-sm p-5 hover:border-red-500/25 hover:bg-white/[0.05] transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <AlertCircle className="w-4 h-4 text-red-400" />
                  </div>
                  <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">{pain}</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} className="mt-12 space-y-3">
              <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
                You&apos;re not alone — and it&apos;s not your fault. Most web designers build pretty sites, not ones that actually generate business.
              </p>
              <p className="text-accent font-semibold text-lg">
                That&apos;s exactly what we fix.
              </p>
            </motion.div>
          </ScrollReveal>
        </div>
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* ═══ Why Digital Edge ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="text-center mb-16">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Why Choose Us
            </motion.span>
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">Why Australian Businesses Choose Digital Edge</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              We don't just build websites — we build tools that bring you more phone calls, enquiries, and customers.
            </motion.p>
          </ScrollReveal>

          <WhyCards />
        </div>
      </section>

      {/* ═══ AEO/GEO Differentiator ═══ */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="hero-orb hero-orb-1" style={{ opacity: 0.15 }} />
        <div className="hero-orb hero-orb-2" style={{ opacity: 0.1 }} />
        {/* Grid pattern */}

        {/* Top wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 rotate-180">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,60 Q600,-20 1200,60 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
        <div className="container-tight section-padding relative z-10">
          <ScrollReveal className="text-center mb-14">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-semibold mb-4 backdrop-blur-md border border-white/10">
              <Sparkles className="w-3.5 h-3.5" />
              AI-Powered SEO
            </motion.span>
            <motion.h2 variants={fadeUp} className="heading-section text-white mb-4">The Only Wollongong Agency Optimising for <span className="text-gradient">AI Search</span></motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-white/60 max-w-2xl mx-auto">
              45% of Google searches now show an AI-generated summary above traditional results. Most agencies aren't prepared — we are.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid md:grid-cols-2 gap-6 mb-10">
            <motion.div variants={fadeUp} className="rounded-2xl p-8 group card-gradient-border">
              <div className="w-12 h-12 rounded-xl gradient-cta flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-glow transition-all duration-300">
                <Sparkles className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="heading-card text-white mb-3">Answer Engine Optimisation (AEO)</h3>
              <p className="text-white/70 leading-relaxed">
                When a customer asks ChatGPT, Siri, or Alexa "who's the best electrician in Wollongong?" — we make sure your business is the answer they get.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-2xl p-8 group card-gradient-border">
              <div className="w-12 h-12 rounded-xl gradient-cta flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-glow transition-all duration-300">
                <Search className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="heading-card text-white mb-3">Generative Engine Optimisation (GEO)</h3>
              <p className="text-white/70 leading-relaxed">
                Google AI Overviews appear above traditional results and can reduce clicks to other sites by 58%. We structure your content to appear in those summaries — not below them.
              </p>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal className="text-center">
            <motion.p variants={fadeUp} className="text-white/60 mb-6">Included in every Local SEO package — no extra cost.</motion.p>
            <motion.div variants={fadeUp}>
              <Button variant="hero" size="lg" asChild>
                <Link href="/services/aeo-geo">
                  Learn More About AI Search
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
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

      {/* ═══ Services Overview ═══ */}
      <section className="section-padding relative" style={{ background: "var(--surface-gradient)" }}>
        <div className="absolute inset-0 dot-pattern opacity-50" />
        {/* Morphing blobs */}
        <div className="blob-morph w-[400px] h-[400px] bg-accent/40 top-[5%] left-[0%]" />
        <div className="blob-morph w-[350px] h-[350px] bg-purple-500/30 bottom-[5%] right-[0%]" style={{ animationDelay: "-6s" }} />
        <div className="container-tight relative z-10">
          <ScrollReveal className="text-center mb-16">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              What We Offer
            </motion.span>
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">Our Services</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to get your business found online and generating leads.
            </motion.p>
          </ScrollReveal>

          <ServiceCards />

          {/* ── Flagship AI Service callout ───────────── */}
          <ScrollReveal className="mt-10">
            <motion.div
              variants={fadeUp}
              className="relative bg-card rounded-2xl border border-accent/30 shadow-card p-8 md:p-10 max-w-4xl mx-auto overflow-hidden card-hover-lift"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
              <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-14 h-14 rounded-xl gradient-cta flex items-center justify-center shrink-0">
                  <Zap className="w-7 h-7 text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full gradient-cta text-accent-foreground text-xs font-bold uppercase tracking-wider mb-3">
                    New
                  </span>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-2">
                    AI Lead Response Engine for Wollongong &amp; Sydney Tradies
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    Reply to every lead in under 60 seconds, qualify the job,
                    and book it straight into your calendar — 24/7.
                  </p>
                </div>
                <Button variant="cta" size="lg" asChild className="shrink-0">
                  <Link href="/ai-services/lead-response-engine">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ How It Works ═══ */}
      <section className="gradient-hero relative overflow-hidden noise-overlay">
        <div className="hero-orb hero-orb-1" style={{ opacity: 0.15 }} />
        <div className="hero-orb hero-orb-2" style={{ opacity: 0.1 }} />
        {/* Top wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 rotate-180">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,60 Q600,-20 1200,60 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
        <div className="container-tight section-padding relative z-10">
          <ScrollReveal className="text-center mb-16">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-semibold mb-4 backdrop-blur-md border border-white/10">
              <Zap className="w-3.5 h-3.5" />
              Simple Process
            </motion.span>
            <motion.h2 variants={fadeUp} className="heading-section text-white mb-4">How It <span className="text-gradient">Works</span></motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-white/60 max-w-2xl mx-auto">
              Getting started is simple. No jargon, no confusion — just results.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid md:grid-cols-3 gap-8 relative">
            {[
              { step: "01", title: "Tell Us About Your Business", desc: "Fill out our quick form or give us a call. We'll learn about your business, goals, and what you need." },
              { step: "02", title: "We Build Your Solution", desc: "We design and develop your website or SEO strategy, keeping you in the loop every step of the way." },
              { step: "03", title: "Start Getting More Leads", desc: "Your new website goes live and starts working for you — bringing in calls, enquiries, and customers." },
            ].map((item, i) => (
              <motion.div key={item.step} variants={fadeUp} className="relative group">
                {/* Animated timeline connector */}
                {i < 2 && (
                  <div className="hidden md:block timeline-line" />
                )}
                <div className="relative z-10 text-center">
                  <motion.div
                    className="w-16 h-16 rounded-2xl card-glass flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300"
                    whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.4 } }}
                  >
                    <span className="text-white text-lg font-bold font-display">{item.step}</span>
                  </motion.div>
                  <h3 className="heading-card text-white mb-3">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* ═══ Testimonials — Carousel ═══ */}
      <section className="section-padding relative bg-background gradient-mesh">
        <div className="container-tight relative z-10">
          <ScrollReveal className="text-center mb-14">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-warm/10 text-accent-warm text-sm font-semibold mb-4">
              <Star className="w-3.5 h-3.5 fill-accent-warm" />
              5-Star Reviews
            </motion.span>
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">What Our <span className="text-gradient">Clients Say</span></motion.h2>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIdx}
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.97 }}
                transition={{ duration: 0.4 }}
                className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-lg relative overflow-hidden"
              >
                {/* Decorative quote with gradient glow */}
                <div className="absolute top-4 left-6 w-20 h-20">
                  <Quote className="w-16 h-16 text-accent/[0.1]" />
                  <div className="absolute inset-0 bg-accent/[0.03] rounded-full blur-xl" />
                </div>
                {/* Accent left bar */}
                <div className="absolute left-0 top-6 bottom-6 w-1 rounded-full gradient-cta" />
                <div className="pl-4">
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent-warm text-accent-warm" />
                    ))}
                  </div>
                  <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 font-medium text-center">
                    "{testimonials[testimonialIdx].quote}"
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    {/* Initials avatar */}
                    <div className="w-12 h-12 rounded-full gradient-cta flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold font-display text-lg">{testimonials[testimonialIdx].name.charAt(0)}</span>
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-foreground text-lg">{testimonials[testimonialIdx].name}</p>
                      <p className="text-muted-foreground text-sm">{testimonials[testimonialIdx].biz}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Nav */}
            <div className="flex justify-center gap-3 mt-8">
              <button
                onClick={() => setTestimonialIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-10 h-10 rounded-xl border border-border bg-card hover:border-accent hover:text-accent flex items-center justify-center transition-all duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTestimonialIdx(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === testimonialIdx ? "bg-accent w-8" : "bg-border hover:bg-muted-foreground w-2"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setTestimonialIdx((prev) => (prev + 1) % testimonials.length)}
                className="w-10 h-10 rounded-xl border border-border bg-card hover:border-accent hover:text-accent flex items-center justify-center transition-all duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="text-center mt-6">
              <Link href="/reviews" className="text-accent hover:underline inline-flex items-center gap-1">
                See All Reviews <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Case Studies / Portfolio ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="text-center mb-16">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              <TrendingUp className="w-3.5 h-3.5" />
              Real Results
            </motion.span>
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">Real Results for Local Businesses</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it — here's what we've achieved for tradies and small businesses like yours.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid md:grid-cols-3 gap-6">
            {portfolioProjects.filter(p => p.featured).map((project) => (
              <Link key={project.id} href={`/portfolio/${project.slug}`} className="block">
              <motion.div
                variants={fadeUp}
                className="bg-card rounded-2xl border border-border card-premium overflow-hidden flex flex-col group h-full"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.clientName} case study`}
                    width={600}
                    height={208}
                    className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Gradient overlay that intensifies on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Results that slide up on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <div className="grid grid-cols-2 gap-2">
                      {project.results.slice(0, 2).map((result) => (
                        <div key={result.label} className="bg-black/40 backdrop-blur-sm rounded-lg p-2.5 border border-white/10">
                          <span className="text-[10px] text-white/70 uppercase tracking-wider">{result.label}</span>
                          <p className="text-lg font-bold text-white font-display">{result.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent px-2.5 py-0.5 rounded-full text-xs font-semibold">
                      {project.industry}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {project.location}
                    </span>
                  </div>
                  <h3 className="font-bold text-foreground font-display mb-3 leading-snug text-sm">
                    {project.clientName}
                  </h3>
                  {project.testimonial && (
                    <p className="text-xs text-muted-foreground italic leading-relaxed flex-1">
                      "{project.testimonial.quote.slice(0, 120)}..."
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground mt-2">— {project.testimonial?.name}</p>
                  <span className="text-accent text-xs font-semibold mt-3 inline-flex items-center gap-1">
                    View Case Study <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </motion.div>
              </Link>
            ))}
          </ScrollReveal>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Button variant="outline" size="lg" asChild>
              <Link href="/portfolio">
                View All Case Studies
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ═══ Areas We Serve ═══ */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight">
          <ScrollReveal className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">Areas We Serve</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Based in NSW, we build websites and run digital marketing for businesses across the Illawarra region, Wollongong, Sydney, and beyond.
            </motion.p>
          </ScrollReveal>
          <ScrollReveal className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: "Web Design Wollongong", path: "/web-design-wollongong" },
              { label: "Web Design Sydney", path: "/web-design-sydney" },
              { label: "Web Design Illawarra", path: "/web-design-illawarra" },
              { label: "WordPress Developer Nowra", path: "/blog/wordpress-developer-nowra-shoalhaven" },
              { label: "Web Design for Tradies", path: "/web-design-tradies" },
              { label: "Healthcare Web Design", path: "/web-design-healthcare" },
            ].map((area) => (
              <motion.div key={area.path} variants={fadeUp} className="h-full">
                <Link
                  href={area.path}
                  className="flex items-center justify-center gap-2 p-5 h-full min-h-[64px] bg-card rounded-xl border border-border text-sm font-medium text-foreground hover:border-accent hover:text-accent hover:shadow-md transition-all duration-200 text-center"
                >
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  {area.label}
                </Link>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Industries We Serve ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">Industries We Serve</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              We build industry-specific websites tailored to how your customers search, compare, and buy.
            </motion.p>
          </ScrollReveal>
          <ScrollReveal className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { label: "Tradies & Contractors", path: "/web-design-tradies" },
              { label: "Restaurants & Hospitality", path: "/web-design-restaurants" },
              { label: "Healthcare", path: "/web-design-healthcare" },
              { label: "Accountants", path: "/web-design-accountants" },
              { label: "Real Estate", path: "/web-design-real-estate" },
              { label: "Law Firms", path: "/web-design-lawyers" },
              { label: "Dentists", path: "/web-design-dentists" },
              { label: "NDIS Providers", path: "/web-design-ndis" },
            ].map((ind) => (
              <motion.div key={ind.path} variants={fadeUp} className="h-full">
                <Link
                  href={ind.path}
                  className="flex items-center justify-center gap-2 p-5 h-full min-h-[64px] bg-card rounded-xl border border-border text-sm font-medium text-foreground hover:border-accent hover:text-accent hover:shadow-md transition-all duration-200 text-center"
                >
                  {ind.label}
                </Link>
              </motion.div>
            ))}
          </ScrollReveal>
          <ScrollReveal className="text-center mt-6">
            <motion.div variants={fadeUp}>
              <Link href="/industries" className="text-sm text-accent font-medium hover:underline">
                View All Industries →
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Lead Magnet ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal>
            <motion.div variants={fadeUp} className="bg-card rounded-2xl border border-border shadow-card p-8 md:p-12 text-center max-w-2xl mx-auto">
              <div className="w-14 h-14 rounded-xl gradient-cta flex items-center justify-center mx-auto mb-5">
                <Download className="w-7 h-7 text-accent-foreground" />
              </div>
              <h2 className="heading-card text-foreground mb-2">Free: 5-Point Website Checklist for Tradies</h2>
              <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
                Find out if your website is costing you jobs. Enter your email and we'll send you the checklist instantly.
              </p>
              <form onSubmit={handleChecklistSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input type="hidden" name="_subject" value="Website Checklist Download Request" />
                <input type="hidden" name="type" value="lead-magnet" />
                <Input
                  name="email"
                  type="email"
                  required
                  placeholder="Your email address"
                />
                <Button type="submit" variant="cta" disabled={checklistLoading} className="shrink-0">
                  {checklistLoading ? "Sending..." : <>Get the Checklist <Send className="w-4 h-4 ml-1" /></>}
                </Button>
              </form>
              <p className="text-xs text-muted-foreground mt-3">PDF · Free · No spam, ever.</p>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Free Tools ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="text-center mb-12">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Free Tools
            </motion.span>
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">Free Tools to Help You Get Started</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Not ready to chat yet? Use our free tools to get instant insights about your website.
            </motion.p>
          </ScrollReveal>
          <ScrollReveal className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <motion.div variants={fadeUp}>
              <Link href="/website-cost-calculator" className="block group">
                <div className="bg-card rounded-2xl border border-border shadow-card p-6 card-hover-lift h-full">
                  <Calculator className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-bold text-foreground font-display mb-2">Website Cost Calculator</h3>
                  <p className="text-sm text-muted-foreground mb-3">Get an instant estimate tailored to your business.</p>
                  <span className="text-accent text-sm font-semibold inline-flex items-center gap-1">Calculate Now <ArrowRight className="w-3 h-3" /></span>
                </div>
              </Link>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Link href="/free-website-audit" className="block group">
                <div className="bg-card rounded-2xl border border-border shadow-card p-6 card-hover-lift h-full">
                  <BarChart3 className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-bold text-foreground font-display mb-2">Free Website Audit</h3>
                  <p className="text-sm text-muted-foreground mb-3">Check your SEO, speed, mobile, and security scores.</p>
                  <span className="text-accent text-sm font-semibold inline-flex items-center gap-1">Audit My Site <ArrowRight className="w-3 h-3" /></span>
                </div>
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Final CTA ═══ */}
      <section className="gradient-hero relative overflow-hidden noise-overlay">
        <div className="absolute inset-0">
          <div className="hero-orb hero-orb-1" style={{ opacity: 0.3 }} />
          <div className="hero-orb hero-orb-2" style={{ opacity: 0.2 }} />
        </div>
        <div className="container-tight px-4 py-24 text-center relative z-10">
          <ScrollReveal>
            <motion.h2 variants={fadeUp} className="heading-section text-white mb-5">Ready to Grow Your Business Online?</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-white/60 max-w-2xl mx-auto mb-10">
              Get a free, no-obligation quote and find out how we can help you get more leads and customers.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link href="/free-website-review">
                  Free Website Review
                </Link>
              </Button>
            </motion.div>
          </ScrollReveal>
        </div>
        {/* Angled divider */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 rotate-180">
          <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-[50px] md:h-[80px]">
            <path d="M0,80 L1200,0 L1200,80 Z" className="fill-background" />
          </svg>
        </div>
      </section>
    </>
  );
};

export default Index;
