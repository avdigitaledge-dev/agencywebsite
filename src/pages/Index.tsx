import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, Globe, Search, Shield, CheckCircle2, Star, MapPin, TrendingUp, ChevronLeft, ChevronRight, Quote, Zap, BarChart3, ShoppingCart, Rocket, Download, Send, Sparkles } from "lucide-react";
import { portfolioProjects } from "@/data/portfolioProjects";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SEOMeta } from "@/components/SEOMeta";
import Layout from "@/components/Layout";
import { trackEvent } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useRef } from "react";

/* ── Animation helpers ─────────────────────────────────── */
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
};

/* ── Scroll-triggered section wrapper ──────────────────── */
const ScrollReveal = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ── Animated counter ──────────────────────────────────── */
const AnimatedStat = ({ value, label }: { value: string; label: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const numMatch = value.match(/(\d+)/);
    if (!numMatch) { setDisplay(value); return; }
    const target = parseInt(numMatch[1]);
    const prefix = value.slice(0, value.indexOf(numMatch[1]));
    const suffix = value.slice(value.indexOf(numMatch[1]) + numMatch[1].length);
    let current = 0;
    const step = Math.max(1, Math.floor(target / 40));
    const interval = setInterval(() => {
      current = Math.min(current + step, target);
      setDisplay(`${prefix}${current}${suffix}`);
      if (current >= target) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center p-4">
      <p className="text-3xl md:text-4xl font-extrabold text-accent font-display tracking-tight">{display}</p>
      <p className="text-sm text-muted-foreground mt-1.5 font-medium">{label}</p>
    </div>
  );
};

const FORMSPREE_ID = "xzdjplaq";

const Index = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
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
        navigate("/checklist-thank-you");
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

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Digital Edge Studio",
    "description": "Web design and digital marketing for tradies and small businesses in Wollongong, Sydney & NSW",
    "url": "https://digitaledgestudio.com",
    "email": "enquiries@digitaledgestudio.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Wollongong",
      "addressRegion": "NSW",
      "addressCountry": "AU"
    },
    "areaServed": [
      { "@type": "City", "name": "Sydney" },
      { "@type": "City", "name": "Wollongong" },
      { "@type": "State", "name": "NSW" }
    ],
    "priceRange": "$$",
    "serviceType": ["Web Design", "Digital Marketing", "Local SEO"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "5",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": testimonials.slice(0, 5).map(t => ({
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": t.name },
      "reviewBody": t.quote
    }))
  };

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

  return (
    <Layout>
      <SEOMeta
        title="Web Design & Digital Marketing for Australian Small Businesses | Digital Edge Studio"
        description="Wollongong web design agency building fast, professional websites for tradies and small businesses. Affordable packages, local SEO, and more leads guaranteed."
        keywords="web design wollongong, website designer wollongong, web development wollongong, digital marketing agency wollongong, wollongong web designer near me, seo services wollongong, affordable web design wollongong, web design for tradies, web design sydney, local seo wollongong"
        canonical="https://digitaledgestudio.com/"
        ogTitle="Web Design & Digital Marketing for Australian Small Businesses | Digital Edge Studio"
        ogDescription="Wollongong web design agency building fast, professional websites for tradies and small businesses. Affordable packages, local SEO, and more leads."
        ogImage="https://digitaledgestudio.com/images/blog/hero-banner.png"
        orgSchema={organizationSchema}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />

      {/* ═══ Hero ═══ */}
      <section className="gradient-hero relative overflow-hidden min-h-[85vh] flex items-center">
        {/* Background effects */}
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="absolute inset-0 hero-noise" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(hsl(0 0% 100% / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.4) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="container-tight px-4 py-20 md:py-28 relative z-10 w-full">
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
                <MapPin className="w-3.5 h-3.5" />
                #1 Choice for Tradies in Wollongong & Sydney
              </motion.span>
              <motion.h1 variants={fadeUp} className="heading-display text-white mb-6">
                Websites That Get Tradies{" "}
                <span className="text-gradient">More Jobs</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-body-lg text-white/65 mb-10 max-w-xl">
                We build fast, professional websites for electricians, plumbers, builders and local businesses — with local SEO that gets you ranking on Google and generating 40+ leads per month.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Get a Free Quote
                    <ArrowRight className="w-5 h-5 ml-1" />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <Link to="/free-website-review">Free Website Review</Link>
                </Button>
              </motion.div>
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
                  Built for tradies & local business
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
                <img
                  src="/images/blog/electrician-google-pic.webp"
                  alt="Electrician business ranking first on Google search results"
                  className="relative w-full max-w-[560px] object-contain"
                  style={{
                    maskImage: "radial-gradient(ellipse 90% 85% at 50% 50%, black 50%, transparent 100%)",
                    WebkitMaskImage: "radial-gradient(ellipse 90% 85% at 50% 50%, black 50%, transparent 100%)",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ Trust Bar ═══ */}
      <section className="gradient-hero relative -mt-1">
        <div className="container-tight px-4 py-10">
          <ScrollReveal className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-30">
            {[
              { val: "30+", label: "Websites Delivered (2025–2026)" },
              { val: "4.8", label: "Google Rating (Verified)" },
              { val: "40+", label: "Avg Leads/Month per Client*" },
              { val: "12x", label: "Average Client ROI*" },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className="card-glass rounded-xl p-5 text-center"
              >
                <p className="text-2xl font-extrabold text-white font-display stat-glow">{item.val}</p>
                <p className="text-xs text-white/60 mt-1 font-medium">{item.label}</p>
              </motion.div>
            ))}
          </ScrollReveal>
          <p className="text-xs text-white/40 text-center mt-3 relative z-30">
            *Based on <Link to="/portfolio/grovespark-electrical-wollongong" className="underline hover:text-white/60 transition-colors">GroveSpark Electrical, 2024–2025</Link>
          </p>
        </div>
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,60 Q600,-20 1200,60 L1200,60 L0,60 Z" className="fill-background" />
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

          <ScrollReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: "Websites That Convert", desc: "Every site we build is designed with one goal: turning your visitors into leads. Fast, mobile-friendly, and built to rank on Google." },
              { icon: Search, title: "Local SEO That Works", desc: "We optimise your Google Business Profile and website so local customers find you first when they search for your services." },
              { icon: BarChart3, title: "Google Ads & PPC", desc: "Targeted Google Ads campaigns that put your business in front of customers actively searching for your trade. Measurable ROI from day one." },
              { icon: Shield, title: "Ongoing Support & Hosting", desc: "We handle updates, security, and backups so you can focus on running your business. No tech headaches." },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="bg-card rounded-2xl p-8 border border-border card-premium group"
              >
                <div className="w-12 h-12 rounded-xl gradient-cta flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-glow transition-all duration-300">
                  <item.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="heading-card text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ AEO/GEO Differentiator ═══ */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="hero-orb hero-orb-1" style={{ opacity: 0.15 }} />
        <div className="hero-orb hero-orb-2" style={{ opacity: 0.1 }} />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(hsl(0 0% 100% / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.4) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
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
                <Link to="/services/aeo-geo">
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

          <ScrollReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: "Website Design & Development", desc: "Custom, mobile-responsive websites built to convert visitors into enquiries. Includes SEO setup, contact forms, and Google Analytics.", price: "From $1,200", link: "/services" },
              { icon: Search, title: "Local SEO", desc: "Get found on Google Maps and local search results. We optimise your Google Business Profile and target local keywords for your area.", price: "From $1,000/month", link: "/services#seo" },
              { icon: BarChart3, title: "Google Ads Management", desc: "Targeted Google Ads campaigns that put your business in front of customers actively searching for your services. Measurable ROI from day one.", price: "From $800/month", link: "/services#marketing" },
              { icon: ShoppingCart, title: "E-Commerce Solutions", desc: "Custom online stores built on Shopify or WooCommerce. Sell products 24/7 with secure payments, inventory management, and seamless checkout.", price: "From $3,000", link: "/services#ecommerce" },
              { icon: Rocket, title: "Growth Bundle", desc: "The full package — website build, Google Ads, and local SEO combined into one plan. Everything you need to launch and grow your online presence.", price: "From $2,800/month", link: "/pricing" },
              { icon: Shield, title: "Maintenance & Hosting", desc: "Keep your website fast, secure, and up to date. We handle updates, backups, and performance monitoring so you don't have to.", price: "$99/month", link: "/services#hosting" },
            ].map((service) => (
              <motion.div key={service.title} variants={fadeUp} className="bg-card rounded-2xl p-8 border border-border card-premium flex flex-col group">
                <div className="w-11 h-11 rounded-xl gradient-cta flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <service.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="heading-card text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-1 mb-6">{service.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="font-bold text-accent-warm font-display text-lg">{service.price}</span>
                  <Button variant="ghost" size="sm" asChild className="text-accent">
                    <Link to={service.link}>Learn More <ArrowRight className="w-4 h-4 ml-1" /></Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ How It Works ═══ */}
      <section className="gradient-hero relative overflow-hidden">
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

          <ScrollReveal className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Tell Us About Your Business", desc: "Fill out our quick form or give us a call. We'll learn about your business, goals, and what you need." },
              { step: "02", title: "We Build Your Solution", desc: "We design and develop your website or SEO strategy, keeping you in the loop every step of the way." },
              { step: "03", title: "Start Getting More Leads", desc: "Your new website goes live and starts working for you — bringing in calls, enquiries, and customers." },
            ].map((item, i) => (
              <motion.div key={item.step} variants={fadeUp} className="relative group">
                {/* Connector line */}
                {i < 2 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px border-t-2 border-dashed border-white/15" />
                )}
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 rounded-2xl card-glass flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                    <span className="text-white text-lg font-bold font-display">{item.step}</span>
                  </div>
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
      <section className="section-padding relative bg-background">
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-lg relative overflow-hidden"
              >
                {/* Decorative quote watermark */}
                <Quote className="absolute top-4 left-6 w-16 h-16 text-accent/[0.06]" />
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
              <motion.div
                key={project.id}
                variants={fadeUp}
                className="bg-card rounded-2xl border border-border card-premium overflow-hidden flex flex-col"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.clientName} case study`}
                    className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
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
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {project.results.slice(0, 2).map((result) => (
                      <div key={result.label} className="bg-muted/50 rounded-lg p-3">
                        <div className="flex items-center gap-1 mb-0.5">
                          <TrendingUp className="w-3 h-3 text-accent" />
                          <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{result.label}</span>
                        </div>
                        <p className="text-lg font-bold text-accent font-display">{result.value}</p>
                      </div>
                    ))}
                  </div>
                  {project.testimonial && (
                    <p className="text-xs text-muted-foreground italic leading-relaxed flex-1">
                      "{project.testimonial.quote.slice(0, 120)}..."
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground mt-2">— {project.testimonial?.name}</p>
                </div>
              </motion.div>
            ))}
          </ScrollReveal>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Button variant="outline" size="lg" asChild>
              <Link to="/portfolio">
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
              { label: "Web Design for Tradies", path: "/web-design-tradies" },
              { label: "Healthcare Web Design", path: "/web-design-healthcare" },
            ].map((area) => (
              <motion.div key={area.path} variants={fadeUp} className="h-full">
                <Link
                  to={area.path}
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

      {/* ═══ Final CTA ═══ */}
      <section className="gradient-hero relative overflow-hidden">
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
                <Link to="/contact">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/free-website-review">
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
    </Layout>
  );
};

export default Index;
