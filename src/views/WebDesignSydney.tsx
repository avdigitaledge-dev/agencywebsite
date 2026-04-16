"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MapPin, Star, Zap, Shield, Search, Code2, BarChart3, Globe, Phone, X, Check, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ScrollReveal } from "@/components/ScrollReveal";
import { staggerB, fadeUpB } from "@/lib/animations";
import { useEffect, useState } from "react";

/* ── Animated circular PageSpeed gauge ─────────────────── */
const PageSpeedGauge = ({ score, label, color }: { score: number; label: string; color: "red" | "green" }) => {
  const [animated, setAnimated] = useState(false);
  useEffect(() => { const t = setTimeout(() => setAnimated(true), 400); return () => clearTimeout(t); }, []);
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const progress = animated ? (score / 100) * circumference : 0;
  const strokeColor = color === "green" ? "hsl(142 71% 45%)" : "hsl(0 84% 60%)";
  const glowColor = color === "green" ? "hsl(142 71% 45% / 0.3)" : "hsl(0 84% 60% / 0.15)";
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-32 h-32">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r={radius} fill="none" stroke="hsl(0 0% 100% / 0.08)" strokeWidth="8" />
          <circle
            cx="60" cy="60" r={radius} fill="none"
            stroke={strokeColor}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            style={{ transition: "stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)", filter: `drop-shadow(0 0 8px ${glowColor})` }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-bold font-display" style={{ color: strokeColor }}>{animated ? score : 0}</span>
        </div>
      </div>
      <span className="text-xs text-white/50 font-medium">{label}</span>
    </div>
  );
};

const WebDesignSydney = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does web design cost in Sydney?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Sydney web design packages start from $1,200 for a Starter Website (ideal for tradies and solo operators) and $1,850 for a full Business Website with up to 10 pages, blog, and advanced SEO. Most Sydney agencies charge $5,000-$20,000 for comparable work. We offer transparent, fixed pricing with no hidden fees and no lock-in contracts."
        }
      },
      {
        "@type": "Question",
        "name": "Can you build websites for Western Sydney businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we work with businesses across all Sydney regions including Western Sydney (Parramatta, Penrith, Liverpool, Blacktown), Sutherland Shire (Cronulla, Miranda, Caringbah), South Sydney, Inner West, Northern Beaches, Eastern Suburbs, and the Hills District. We target location-specific SEO keywords for your suburb so local customers find you first."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer SEO and digital marketing for Sydney businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — beyond web design, we offer local SEO, Google Ads management, Google Business Profile optimisation, and ongoing digital marketing strategy for Sydney businesses. We optimise for suburb-specific keywords like 'plumber Parramatta' or 'cafe Cronulla' so your business shows up when local customers search. Our goal is consistent lead generation, not just a pretty website."
        }
      },
      {
        "@type": "Question",
        "name": "What makes you different from other Sydney web design agencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Three things: price, speed, and results. We're significantly more competitive than most Sydney agencies ($1,200 vs $5,000-$20,000), our sites load in under 2 seconds with 90+ Google PageSpeed scores (most WordPress sites score 40-65), and we focus on generating leads — not just building pretty websites. No lock-in contracts, no account managers, no inflated fees. You deal directly with the person building your site."
        }
      },
      {
        "@type": "Question",
        "name": "Why don't you build websites on WordPress?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most Sydney web designers use WordPress because it's the default — not because it's the best option. WordPress sites rely on dozens of plugins that slow things down, need constant updates, and are frequent targets for hackers. We build on Next.js, a modern framework used by Netflix and Nike, which produces sites that load in under 2 seconds, score 90+ on Google PageSpeed, and don't have the security vulnerabilities that come with WordPress. Faster sites rank higher on Google — that's a direct advantage for your business."
        }
      },
      {
        "@type": "Question",
        "name": "What's included in the price?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every website includes custom design (no templates), mobile-responsive layout, contact form with click-to-call, Google Analytics setup, on-page SEO, Google Business Profile setup, and fast-loading pages scoring 90+ on PageSpeed. The Business Website package adds up to 10 pages, blog setup, Google Ads readiness, advanced local SEO, priority support, and monthly performance reports. There are no hidden fees — the price we quote is the price you pay."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a website for a Sydney business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most Sydney website projects are completed in 4-8 weeks. A simple 5-page tradie site can be done in 3-4 weeks, while larger business sites with more pages and custom features take 6-8 weeks. We keep you updated throughout and won't launch until you're 100% happy with the result."
        }
      }
    ]
  };

  const services = [
    { icon: Globe, title: "Custom Website Design", desc: "Professionally designed websites built to convert visitors into enquiries for your Sydney business. No templates — every site is built from scratch to match your brand and goals." },
    { icon: Search, title: "Local SEO Sydney", desc: "Rank higher in Google Maps and organic search for Sydney-specific keywords. We optimise your site, Google Business Profile, and content so local customers find you first." },
    { icon: Phone, title: "Mobile-First Web Design", desc: "Over 70% of Sydney searches happen on mobile. Your website will be designed mobile-first, so it loads fast and looks perfect on every phone, tablet, and desktop." },
    { icon: BarChart3, title: "Google Ads Management", desc: "Targeted Google Ads campaigns for Sydney businesses. We set up, manage, and optimise your ads so you only pay when someone clicks through to your site." },
    { icon: Code2, title: "Ecommerce Web Design", desc: "Online stores built to sell products to Sydney and Australia-wide. Fast-loading product pages, secure checkout, and inventory management included." },
    { icon: Shield, title: "Website Maintenance & Support", desc: "Monthly plans to keep your Sydney website fast, secure, and up to date. Includes performance monitoring, security updates, and content changes. From $99/month." },
  ];

  const testimonials = [
    { name: "David R.", role: "Builder, Western Sydney", quote: "Digital Edge built us a website that's brought in over $2.4M in project enquiries. Best marketing investment we've ever made — and at a fraction of what Sydney agencies quoted us." },
    { name: "Lisa K.", role: "Café Owner, Inner West", quote: "Our old WordPress site was painfully slow and never showed up on Google. The new site loads instantly and we're getting bookings from Google we never got before." },
    { name: "Tom W.", role: "Electrician, Sutherland Shire", quote: "I was quoted $8,000 by two other Sydney agencies. Digital Edge built a better site for a fraction of the price and I'm now getting 30+ calls a month from Google." },
  ];

  const processSteps = [
    { step: "1", title: "Free Consultation", desc: "We chat about your business, your goals, and what you need from your website. No jargon, no pressure — just a straight conversation about what'll work for your Sydney business." },
    { step: "2", title: "Design & Content", desc: "We create a custom design based on your brand and write content that speaks to your Sydney customers. You review everything before we build." },
    { step: "3", title: "Build & Optimise", desc: "We build your site on our fast, secure framework — optimised for Google, mobile devices, and speed. We set up analytics, schema markup, and your Google Business Profile." },
    { step: "4", title: "Launch & Grow", desc: "Your site goes live. We handle the technical launch, submit to Google, and make sure everything's running smoothly. Then we help you grow with ongoing SEO and support." },
  ];

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Web Design Sydney | Reliable Sites for Tradies & Small Business",
    "description": "Sydney web design from $1,200 — no lock-in contracts. Custom-built sites with 95+ PageSpeed scores, local SEO, and Google Business setup included.",
    "url": "https://digitaledgestudio.com/web-design-sydney",
    "mainEntity": {
      "@type": "Service",
      "name": "Web Design in Sydney",
      "description": "Fixed-price custom website design, local SEO, and digital marketing services for businesses across Sydney, Western Sydney, Sutherland Shire, and all Sydney regions.",
      "provider": {
        "@id": "https://digitaledgestudio.com/#business"
      },
      "areaServed": [
        { "@type": "City", "name": "Sydney" },
        { "@type": "AdministrativeArea", "name": "Western Sydney" },
        { "@type": "AdministrativeArea", "name": "Sutherland Shire" },
        { "@type": "AdministrativeArea", "name": "Inner West" },
        { "@type": "AdministrativeArea", "name": "New South Wales" }
      ],
      "serviceType": ["Web Design", "Local SEO", "Google Ads Management", "Ecommerce Web Design", "Website Maintenance", "Digital Marketing"],
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "1200",
        "highPrice": "5000",
        "priceCurrency": "AUD"
      }
    }
  };

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Web Design Sydney' }
      ]} />

      {/* Hero */}
      <section className="gradient-hero-mesh relative overflow-hidden section-divider-wave section-divider-wave-muted">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_70%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(217_71%_45%/0.2),transparent_50%)]" />
        <div className="hero-orb absolute top-20 right-[15%] w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
        <div className="hero-orb absolute bottom-10 left-[10%] w-48 h-48 rounded-full bg-accent-warm/10 blur-3xl" style={{ animationDelay: "-4s" }} />
        <div className="container-tight px-4 py-20 md:py-32 relative z-10">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="show"
            variants={staggerB}
          >
            <motion.div variants={fadeUpB} className="inline-flex items-center gap-2 text-primary-foreground/80 text-sm mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <MapPin className="w-4 h-4 text-accent" />
              <span>Serving All Sydney Regions &amp; NSW</span>
            </motion.div>
            <motion.h1 variants={fadeUpB} className="heading-display text-primary-foreground mb-6">
              Reliable Web Design <span className="text-gradient">Sydney</span>
            </motion.h1>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/70 max-w-2xl mb-10 leading-relaxed">
              Sydney agencies charge $5,000&ndash;$20,000. We build custom websites from $1,200 that load faster, rank higher on Google, and generate more leads &mdash; without the inflated fees or lock-in contracts.
            </motion.p>
            <motion.div variants={fadeUpB} className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="btn-shimmer" asChild>
                <Link href="/contact">Get a Free Quote <ArrowRight className="w-5 h-5 ml-1" /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="tel:+61419807321"><Phone className="w-4 h-4 mr-2" /> 0419 807 321</a>
              </Button>
            </motion.div>

            {/* Hero stats */}
            <motion.div variants={fadeUpB} className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { value: "90+", label: "PageSpeed Score" },
                { value: "<2s", label: "Load Time" },
                { value: "5.0\u2605", label: "Client Rating" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold font-display text-primary-foreground stat-glow">{stat.value}</p>
                  <p className="text-xs text-primary-foreground/50 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-muted/50 py-8 border-b border-border/50">
        <div className="container-tight px-4">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm text-muted-foreground">
            {["Serving All Sydney Regions", "No Lock-In Contracts", "Websites from $1,200", "Free Quote & Consultation", "Google Business Profile Setup Included"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(217_76%_48%/0.03),transparent_60%)]" />
        <div className="container-tight relative z-10">
          <ScrollReveal variant="B" className="text-center mb-16">
            <motion.p variants={fadeUpB} className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">What We Do</motion.p>
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">
              Web Design &amp; Digital Marketing for Sydney Businesses
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              From the CBD to Western Sydney and the Sutherland Shire &mdash; we build websites that make Sydney businesses stand out online and generate real leads.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal variant="B" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <motion.div key={s.title} variants={fadeUpB} className="group bg-card rounded-2xl p-7 border border-border shadow-card card-premium relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <s.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-bold text-foreground font-display text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Why Sydney Businesses Need a Better Website */}
      <section className="section-padding relative overflow-hidden" style={{ background: "var(--surface-gradient)" }}>
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[30px] md:h-[50px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
        <div className="container-tight relative z-10">
          <ScrollReveal variant="B" className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div variants={fadeUpB}>
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Why It Matters</p>
              <h2 className="heading-section text-foreground mb-6">
                Why Sydney Businesses Need a Website That Actually Works
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Sydney is one of the most competitive business markets in Australia &mdash; over 5 million people, hundreds of thousands of businesses, all competing for the same local customers. If your website is slow, outdated, or invisible on Google, you&apos;re handing leads to competitors who&apos;ve invested in their online presence.
                </p>
                <p>
                  The problem is that most Sydney web design agencies charge $5,000&ndash;$20,000 for websites that don&apos;t perform any better than what we build for $1,200&ndash;$1,850. You end up overpaying for a WordPress site that scores 40 on Google PageSpeed, loads in 5+ seconds, and needs constant plugin updates.
                </p>
                <p>
                  We take a different approach. Our sites are built on the same technology used by Netflix, Nike, and Uber &mdash; but sized and priced for Sydney small businesses. They load in under 2 seconds, score 90+ on PageSpeed, and are optimised for the exact suburbs and keywords your customers search.
                </p>
                <p>
                  Whether you&apos;re a tradie in Western Sydney, a café in the Inner West, or a professional services firm in the CBD &mdash; we build websites that rank on Google and turn visitors into phone calls and enquiries.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild className="btn-shimmer">
                  <Link href="/contact">Get a Free Sydney Web Design Quote <ArrowRight className="w-4 h-4 ml-1" /></Link>
                </Button>
              </div>
            </motion.div>
            <motion.div variants={fadeUpB} className="space-y-4">
              {[
                { title: "Sydney-Wide Coverage", desc: "We serve every Sydney region — CBD, Western Sydney, Sutherland Shire, Inner West, Northern Beaches, Eastern Suburbs, Hills District, and everywhere in between." },
                { title: "Fraction of the Agency Price", desc: "Sydney agencies charge $5K-$20K. Our websites start at $1,200 with no lock-in contracts. Same quality, dramatically less cost." },
                { title: "Suburb-Specific SEO", desc: "We optimise for the exact terms Sydney customers search — 'plumber Parramatta', 'dentist Cronulla', 'builder Penrith' — not generic national keywords." },
                { title: "Personal, Direct Service", desc: "No account managers, no call centres, no being passed around. You deal with the person designing and building your site." },
              ].map((item, i) => (
                <div key={item.title} className="group flex gap-4 p-5 bg-card/80 backdrop-blur-sm rounded-xl border border-border/80 card-hover-lift">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-accent font-display">{i + 1}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">{item.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* WordPress vs Next.js */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(217_76%_48%/0.04),transparent_50%)]" />
        <div className="container-tight relative z-10">
          <ScrollReveal variant="B" className="text-center mb-16">
            <motion.p variants={fadeUpB} className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">The Technical Edge</motion.p>
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">
              Why We Don&apos;t Build WordPress Websites for Sydney Businesses
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Most Sydney web designers build on WordPress. We use a modern framework that produces faster, more secure sites that rank better on Google.
            </motion.p>
          </ScrollReveal>

          {/* PageSpeed Gauges */}
          <ScrollReveal variant="B" className="mb-14">
            <motion.div variants={fadeUpB} className="rounded-2xl bg-[hsl(222_24%_10%)] p-8 md:p-12 max-w-3xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16">
                <PageSpeedGauge score={48} label="Typical WordPress Site" color="red" />
                <div className="hidden sm:flex flex-col items-center gap-1">
                  <span className="text-white/30 text-xs uppercase tracking-wider font-semibold">vs</span>
                </div>
                <PageSpeedGauge score={95} label="Digital Edge Studio Site" color="green" />
              </div>
              <p className="text-center text-white/40 text-xs mt-6">Google PageSpeed Insights scores &mdash; higher is better</p>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal variant="B" className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div variants={fadeUpB} className="bg-card rounded-2xl p-8 border border-border/60 relative">
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-muted-foreground/20" />
              <h3 className="font-bold text-muted-foreground font-display text-lg mb-8">Typical WordPress Site</h3>
              <ul className="space-y-5">
                {[
                  { label: "Speed", value: "3\u20138 second load times" },
                  { label: "Security", value: "Database + plugins = frequent targets" },
                  { label: "Maintenance", value: "Constant plugin and core updates" },
                  { label: "Google PageSpeed", value: "Typically scores 40\u201365" },
                  { label: "Hosting", value: "Shared servers, variable performance" },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <X className="w-4 h-4 text-red-400/70 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-medium text-foreground block">{item.label}</span>
                      <span className="text-sm text-muted-foreground">{item.value}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeUpB} className="bg-card rounded-2xl p-8 border-2 border-accent/50 relative shadow-[0_0_40px_-12px_hsl(217_76%_48%/0.15)]">
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-accent to-accent/50" />
              <div className="flex items-center gap-3 mb-8">
                <h3 className="font-bold text-foreground font-display text-lg">Digital Edge Studio Site</h3>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-accent/10 text-accent">Recommended</span>
              </div>
              <ul className="space-y-5">
                {[
                  { label: "Speed", value: "Under 2 seconds \u2014 often under 1" },
                  { label: "Security", value: "No database, no plugins to exploit" },
                  { label: "Maintenance", value: "Minimal \u2014 no plugin updates needed" },
                  { label: "Google PageSpeed", value: "90+ score out of the box" },
                  { label: "Hosting", value: "Edge network \u2014 fast everywhere" },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-medium text-foreground block">{item.label}</span>
                      <span className="text-sm text-accent/80">{item.value}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal variant="B" className="mt-10 max-w-3xl mx-auto">
            <motion.p variants={fadeUpB} className="text-center text-muted-foreground leading-relaxed">
              Google has confirmed that page speed is a ranking factor. In a market as competitive as Sydney, a faster site gives you a direct ranking advantage over the thousands of slow WordPress sites your competitors are running.
            </motion.p>
          </ScrollReveal>
        </div>
      </section>

      {/* How It Works */}
      <section className="gradient-hero relative overflow-hidden noise-overlay">
        <div className="hero-orb hero-orb-1" style={{ opacity: 0.15 }} />
        <div className="hero-orb hero-orb-2" style={{ opacity: 0.1 }} />
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 rotate-180">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,60 Q600,-20 1200,60 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
        <div className="container-tight section-padding relative z-10">
          <ScrollReveal variant="B" className="text-center mb-16">
            <motion.span variants={fadeUpB} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-semibold mb-4 backdrop-blur-md border border-white/10">
              <Zap className="w-3.5 h-3.5" />
              Simple Process
            </motion.span>
            <motion.h2 variants={fadeUpB} className="heading-section text-white mb-4">How We Build Your <span className="text-gradient">Sydney Website</span></motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-white/60 max-w-2xl mx-auto">
              A simple, transparent process from first chat to launch day. No surprises, no scope creep, no disappearing act.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal variant="B" className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {processSteps.map((s, i) => (
              <motion.div key={s.step} variants={fadeUpB} className="relative group">
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block timeline-line" />
                )}
                <div className="relative z-10 text-center">
                  <motion.div
                    className="w-16 h-16 rounded-2xl card-glass flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300"
                    whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.4 } }}
                  >
                    <span className="text-white text-lg font-bold font-display">0{s.step}</span>
                  </motion.div>
                  <h3 className="heading-card text-white mb-3">{s.title}</h3>
                  <p className="text-white/70 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* SEO Sydney Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,hsl(217_76%_48%/0.03),transparent_50%)]" />
        <div className="container-tight relative z-10">
          <ScrollReveal variant="B" className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div variants={fadeUpB}>
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Local SEO</p>
              <h2 className="heading-section text-foreground mb-6">
                SEO &amp; Digital Marketing Services for Sydney Businesses
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A great-looking website is useless if nobody can find it. That&apos;s where local SEO and digital marketing come in. We make sure your Sydney business shows up when people search for what you do &mdash; whether that&apos;s on Google Maps, in organic search results, or in the local pack.
                </p>
                <p>
                  Sydney is massive, so generic SEO won&apos;t cut it. We build suburb-specific strategies &mdash; targeting searches like &ldquo;plumber Parramatta&rdquo;, &ldquo;dentist Cronulla&rdquo;, &ldquo;builder Penrith&rdquo;, or &ldquo;accountant CBD&rdquo;. We optimise your Google Business Profile, build local content, and handle the technical SEO that gives your site an edge over competitors.
                </p>
                <p>
                  We track your rankings, report on progress, and adjust the strategy based on what&apos;s actually working &mdash; not vanity metrics, but real leads and phone calls.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild className="btn-shimmer">
                  <Link href="/contact">Get a Free SEO Audit <ArrowRight className="w-4 h-4 ml-1" /></Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/services/seo">Learn About Our SEO Services</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div variants={fadeUpB} className="space-y-4">
              {[
                { icon: Search, title: "Google Business Profile Optimisation", desc: "Get your Sydney business showing up in Google Maps results and the local 3-pack for your suburb." },
                { icon: BarChart3, title: "Keyword Research & On-Page SEO", desc: "We find the exact terms Sydney customers search for and optimise your pages to rank for them." },
                { icon: Zap, title: "Technical SEO & Site Speed", desc: "Our sites score 90+ on Google PageSpeed — a direct ranking advantage over slower WordPress competitors." },
                { icon: Globe, title: "Content & Authority Building", desc: "Blog posts, service pages, and local content that positions your business as the go-to in your Sydney area." },
              ].map((item) => (
                <div key={item.title} className="group flex gap-4 p-5 bg-card rounded-xl border border-border card-hover-lift relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 relative z-10">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="relative z-10">
                    <p className="font-semibold text-foreground text-sm mb-1">{item.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding relative overflow-hidden" style={{ background: "var(--surface-gradient)" }}>
        <div className="absolute inset-0 gradient-mesh opacity-50" />
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[30px] md:h-[50px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
        <div className="container-tight relative z-10">
          <ScrollReveal variant="B" className="text-center mb-16">
            <motion.p variants={fadeUpB} className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Testimonials</motion.p>
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">
              What Sydney Businesses Say
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-muted-foreground max-w-xl mx-auto">
              We work with tradies, hospitality operators, and small businesses across Sydney and NSW.
            </motion.p>
          </ScrollReveal>
          <ScrollReveal variant="B" className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={fadeUpB} className="bg-card/80 backdrop-blur-sm rounded-2xl p-7 border border-border/80 shadow-card card-hover-lift">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent-warm text-accent-warm" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-accent">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Local Case Studies */}
      <section className="section-padding bg-background relative">
        <div className="container-tight">
          <ScrollReveal variant="B" className="text-center mb-16">
            <motion.p variants={fadeUpB} className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Case Studies</motion.p>
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">
              Real Results for Sydney &amp; NSW Businesses
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              We&apos;ve helped trades, healthcare, and service businesses across Sydney and NSW get more leads through better websites and local SEO.
            </motion.p>
          </ScrollReveal>
          <ScrollReveal variant="B">
            <motion.div variants={fadeUpB} className="grid md:grid-cols-3 gap-6">
              {[
                { href: "/portfolio/elysian-estate-builders-sydney", category: "Builder", name: "Elysian Estate Builders", stat: "$2.4M", statLabel: "in projects", desc: "from website enquiries" },
                { href: "/portfolio/volt-current-electrical-wollongong", category: "Electrician", name: "Volt Current Electrical", stat: "40+", statLabel: "leads/month", desc: "from zero online presence" },
                { href: "/portfolio/coastal-physio-wollongong", category: "Healthcare", name: "Coastal Physiotherapy", stat: "165%", statLabel: "increase", desc: "in new patient bookings" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="group">
                  <div className="bg-card rounded-2xl border border-border p-7 hover:border-accent/50 transition-all duration-300 card-hover-lift relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <span className="text-[10px] font-bold text-accent uppercase tracking-wider">{item.category}</span>
                      <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mt-2 mb-4 font-display">{item.name}</h3>
                      <p className="text-3xl font-bold font-display text-foreground stat-glow mb-0.5">{item.stat}</p>
                      <p className="text-sm text-muted-foreground">{item.statLabel} {item.desc}</p>
                      <span className="text-sm text-accent font-medium mt-4 inline-flex items-center gap-1 group-hover:gap-2 transition-all">View Case Study <ArrowRight className="w-3 h-3" /></span>
                    </div>
                  </div>
                </Link>
              ))}
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding relative overflow-hidden" style={{ background: "var(--surface-gradient)" }}>
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[30px] md:h-[50px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
        <div className="container-tight relative z-10">
          <ScrollReveal variant="B" className="text-center mb-12">
            <motion.p variants={fadeUpB} className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Pricing</motion.p>
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">
              Sydney Web Design Packages
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              Transparent pricing, no lock-in contracts, no hidden fees. Every package includes mobile-responsive design, SEO setup, and a Google Business Profile.
            </motion.p>
            <motion.div variants={fadeUpB} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-warm/10 border border-accent-warm/20">
              <Clock className="w-4 h-4 text-accent-warm" />
              <span className="text-sm font-medium text-accent-warm">Currently taking on 3 new Sydney clients for {new Date().toLocaleString('en-AU', { month: 'long' })}</span>
            </motion.div>
          </ScrollReveal>
          <ScrollReveal variant="B" className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div variants={fadeUpB} className="bg-card rounded-2xl p-8 border border-border shadow-card card-hover-lift">
              <h3 className="font-bold text-foreground font-display text-xl mb-2">Starter Website</h3>
              <p className="text-3xl font-bold font-display mb-1"><span className="price-shimmer">From $1,200</span></p>
              <p className="text-sm text-muted-foreground mb-8">Perfect for Sydney tradies and service businesses getting started online</p>
              <ul className="space-y-3 mb-8">
                {["Custom design \u2014 no templates", "Mobile responsive", "Contact form + click-to-call", "Google Analytics setup", "On-page SEO", "Google Business Profile setup", "Fast-loading (90+ PageSpeed)"].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full" size="lg">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <p className="text-center text-xs text-muted-foreground mt-3">Free, no-obligation quote in 24 hours</p>
            </motion.div>
            <motion.div variants={fadeUpB} className="bg-card rounded-2xl p-8 border-2 border-accent/50 shadow-[0_0_50px_-12px_hsl(217_76%_48%/0.15)] card-hover-lift relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent-warm" />
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-bold text-foreground font-display text-xl">Business Website</h3>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent/10 text-accent">Popular</span>
              </div>
              <p className="text-3xl font-bold font-display mb-1"><span className="price-shimmer">From $1,850</span></p>
              <p className="text-sm text-muted-foreground mb-8">Full-featured site for established Sydney businesses ready to grow</p>
              <ul className="space-y-3 mb-8">
                {["Everything in Starter", "Up to 10 pages", "Blog setup", "Google Ads ready", "Advanced local SEO", "Priority support", "Monthly performance reports"].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full btn-shimmer" size="lg">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <p className="text-center text-xs text-muted-foreground mt-3">Free, no-obligation quote in 24 hours</p>
            </motion.div>
          </ScrollReveal>
          <p className="text-center text-sm text-muted-foreground mt-8">
            Not sure which package is right for you? <Link href="/pricing" className="text-accent underline underline-offset-4 hover:text-accent/80 transition-colors">See full pricing details &rarr;</Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,hsl(217_76%_48%/0.03),transparent_50%)]" />
        <div className="container-tight max-w-3xl mx-auto relative z-10">
          <ScrollReveal variant="B" className="text-center mb-12">
            <motion.p variants={fadeUpB} className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">FAQ</motion.p>
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">
              Sydney Web Design &mdash; Frequently Asked Questions
            </motion.h2>
          </ScrollReveal>
          <ScrollReveal variant="B" className="space-y-4">
            {faqSchema.mainEntity.map((q) => (
              <motion.div key={q.name} variants={fadeUpB} className="bg-card rounded-xl p-6 border border-border card-hover-lift">
                <h3 className="font-semibold text-foreground mb-3">{q.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{q.acceptedAnswer.text}</p>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Google Map + Sydney Suburbs */}
      <section className="section-padding relative overflow-hidden" style={{ background: "var(--surface-gradient)" }}>
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[30px] md:h-[50px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
        <div className="container-tight relative z-10">
          <ScrollReveal variant="B" className="text-center mb-12">
            <motion.p variants={fadeUpB} className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Service Area</motion.p>
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">
              Web Design Across All Sydney Regions
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              We build websites for businesses in every corner of Greater Sydney and beyond.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal variant="B" className="mb-10">
            <motion.div variants={fadeUpB} className="w-full rounded-2xl overflow-hidden shadow-lg border border-border/50">
              <iframe
                src="https://maps.google.com/maps?q=Sydney+NSW+Australia&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Digital Edge Studio — Web Design Sydney Service Area"
              />
            </motion.div>
          </ScrollReveal>

          <ScrollReveal variant="B">
            <motion.div variants={fadeUpB} className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
              {["Sydney CBD", "Parramatta", "Penrith", "Liverpool", "Blacktown", "Campbelltown", "Bankstown", "Cronulla", "Sutherland", "Miranda", "Caringbah", "Hurstville", "Kogarah", "Marrickville", "Newtown", "Surry Hills", "Bondi", "Manly", "Dee Why", "Chatswood", "North Sydney", "Ryde", "Castle Hill", "Hornsby", "Strathfield", "Burwood", "Ashfield", "Canterbury", "Fairfield", "Auburn"].map((suburb) => (
                <span key={suburb} className="px-3 py-1.5 bg-card rounded-full text-sm text-muted-foreground border border-border hover:border-accent/30 hover:text-foreground transition-colors cursor-default">
                  {suburb}
                </span>
              ))}
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Blog Posts */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal variant="B" className="text-center mb-12">
            <motion.p variants={fadeUpB} className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Resources</motion.p>
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">
              Sydney Web Design Resources
            </motion.h2>
          </ScrollReveal>
          <ScrollReveal variant="B" className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              { href: "/blog/how-to-choose-web-designer-australia", title: "How to Choose a Web Designer in Australia: The Complete 2026 Guide" },
              { href: "/blog/small-business-website-features", title: "Small Business Website Design: 10 Essential Features" },
              { href: "/blog/website-not-ranking-google", title: "11 Reasons Your Website Isn't Ranking on Google (+ Fixes)" },
            ].map((post) => (
              <motion.div key={post.href} variants={fadeUpB}>
                <Link href={post.href} className="group flex gap-3 p-5 bg-card rounded-xl border border-border card-hover-lift">
                  <ArrowRight className="w-4 h-4 text-accent flex-shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                  <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">{post.title}</span>
                </Link>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Also Serving Nearby Areas */}
      <section className="section-padding relative overflow-hidden" style={{ background: "var(--surface-gradient)" }}>
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[30px] md:h-[50px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
        <div className="container-tight relative z-10">
          <ScrollReveal variant="B" className="text-center mb-12">
            <motion.p variants={fadeUpB} className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Nearby</motion.p>
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">
              Also Serving Nearby Areas
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              We work with businesses across NSW &mdash; not just Sydney.
            </motion.p>
          </ScrollReveal>
          <ScrollReveal variant="B" className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { href: "/web-design-western-sydney", title: "Web Design Western Sydney", desc: "Reliable web design for Parramatta, Penrith, Liverpool, Blacktown, and the greater Western Sydney region." },
              { href: "/web-design-south-sydney", title: "Web Design South Sydney", desc: "Professional web design for Sutherland Shire, Hurstville, Kogarah, and South Sydney businesses." },
              { href: "/web-design-wollongong", title: "Web Design Wollongong", desc: "Our home base — expert web design and SEO for Wollongong and the Illawarra region." },
              { href: "/web-design-illawarra", title: "Web Design Illawarra", desc: "Serving Shellharbour, Nowra, Kiama, Dapto, and the wider Illawarra region with local web design & SEO." },
            ].map((area) => (
              <motion.div key={area.href} variants={fadeUpB}>
                <Link href={area.href} className="group flex gap-4 p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-border/80 shadow-card card-hover-lift">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-foreground font-display group-hover:text-accent transition-colors mb-1">{area.title}</h3>
                    <p className="text-sm text-muted-foreground">{area.desc}</p>
                    <span className="text-sm text-accent font-medium mt-2 inline-flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <ArrowRight className="w-3 h-3" /></span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(35_92%_55%/0.08),transparent_50%)]" />
        <div className="hero-orb absolute top-10 right-[20%] w-48 h-48 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 rotate-180">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
        <div className="container-tight px-4 py-24 text-center relative z-10">
          <ScrollReveal variant="B">
            <motion.h2 variants={fadeUpB} className="heading-section text-primary-foreground mb-4">
              Ready to Grow Your Sydney Business Online?
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/70 max-w-2xl mx-auto mb-10">
              Get a free, no-obligation quote for your Sydney website. We&apos;ll chat about your goals and recommend the best solution for your business &mdash; no jargon, no pressure, no inflated agency fees.
            </motion.p>
            <motion.div variants={fadeUpB} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="btn-shimmer" asChild>
                <Link href="/contact">Get Your Free Quote <ArrowRight className="w-5 h-5 ml-1" /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="tel:+61419807321"><Phone className="w-4 h-4 mr-2" /> 0419 807 321</a>
              </Button>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Sticky Mobile CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border/50 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
        <div className="flex gap-3">
          <Button asChild className="flex-1 btn-shimmer" size="lg">
            <Link href="/contact">Free Quote</Link>
          </Button>
          <Button variant="outline" asChild className="flex-1" size="lg">
            <a href="tel:+61419807321"><Phone className="w-4 h-4 mr-2" /> Call Now</a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default WebDesignSydney;
