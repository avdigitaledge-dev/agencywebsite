"use client";

/**
 * GymMarketing — single-offer, single-CTA landing page for
 * independent gym / PT studio / CrossFit / F45 owners in Australia.
 *
 * Offer: Done-for-you local SEO + Google Ads for fitness businesses.
 *        $2,500/month, 3-month minimum, rolling after.
 *
 * Design system notes:
 * - Uses existing tokens only (gradient-hero-warm, heading-display, heading-section,
 *   card-hover-lift, price-shimmer, container-tight, section-padding, ScrollReveal,
 *   framer-motion fadeUpB).
 * - No new fonts, no new colour tokens, no new components.
 *
 * Global conflicts flagged in delivery notes:
 * - ExitIntentPopup and WhatsAppWidget are mounted globally in Layout.tsx.
 *   Both have been pathname-gated to suppress on /gym-marketing.
 */

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Dumbbell,
  MapPin,
  Megaphone,
  TrendingUp,
  Calendar as CalendarIcon,
  Wrench,
  Send,
  User,
  Phone,
  Building2,
  Globe,
  MessageSquare,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import { ScrollReveal } from "@/components/ScrollReveal";
import { staggerB, fadeUpB } from "@/lib/animations";
import { trackEvent } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

/* ── Calendly inline embed (pattern lifted from Contact.tsx) ── */
const CALENDLY_URL =
  "https://calendly.com/avdigitaledge/30min?hide_gdpr_banner=1&hide_event_type_details=1&hide_landing_page_details=1";

const CalendlyEmbed = ({ url }: { url: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Calendly booking confirmation → GA4 calendly_book event
    const handleMessage = (e: MessageEvent) => {
      if (
        typeof e.data === "object" &&
        e.data !== null &&
        "event" in e.data &&
        (e.data as { event: string }).event === "calendly.event_scheduled"
      ) {
        trackEvent("calendly_book", { location: "gym_marketing_lp" });
      }
    };
    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
      try {
        document.body.removeChild(script);
      } catch {
        /* script may already be detached on route change */
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget rounded-xl overflow-hidden border border-border bg-card"
      data-url={url}
      style={{ minWidth: "320px", height: "720px" }}
    />
  );
};

/* ── Smooth scroll helper — single CTA target ─────────────── */
const scrollToBook = (source: string) => {
  trackEvent("cta_click", { location: source });
  const el = document.getElementById("book");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

/* ── Scroll-depth tracking: 50 / 75 / 100 ─────────────────── */
const useScrollDepth = () => {
  useEffect(() => {
    const fired = new Set<number>();
    const milestones = [50, 75, 100];

    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      if (total <= 0) return;
      const pct = Math.round((window.scrollY / total) * 100);
      for (const m of milestones) {
        if (pct >= m && !fired.has(m)) {
          fired.add(m);
          trackEvent(`scroll_${m}`, { page: "gym_marketing_lp" });
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
};

/* ── FAQ content — 6 questions ─────────────────────────── */
const faqs = [
  {
    question: "Is there a lock-in contract?",
    answer:
      "Three-month minimum, then month-to-month. The 3 months cover the Month 1 build and two months of data so we can actually see what's working. After that you can cancel any time with 30 days' notice — no exit fees, no penalties.",
  },
  {
    question: "When should I expect to see results?",
    answer:
      "Google Ads leads usually start coming in inside 2–3 weeks once the rebuild and conversion tracking go live. Local SEO and Google Maps ranking gains are slower — expect meaningful movement from months 2–4. If you need leads this week, ads do the heavy lifting; SEO compounds over the longer period.",
  },
  {
    question: "Is this worth it for a small gym?",
    answer:
      "If you're doing $30K–$100K/month and most of your growth still comes from referrals, yes. Under $30K/month, the ad budget on top of the $2,500/month can be too much too fast — tell us your numbers on the call and we'll say so honestly. We're not interested in signing you up if it won't work.",
  },
  {
    question: "What makes you different from other agencies?",
    answer:
      "Three things. One, you deal with me — not an account manager reading a script. Two, you get the technical SEO, the Google Ads rebuild, and the ongoing content from the same person, so nothing falls between the cracks. Three, if it's not working after month 3, we tell you instead of renewing.",
  },
  {
    question: "Do you work with online coaches?",
    answer:
      "No. This package is built around Google Maps, local search, and people searching for a gym near them. Online-only coaches win on different channels — usually Instagram, YouTube, or paid social — and we'd only be half-useful to you. If you run a physical location (even one studio), you're a fit.",
  },
  {
    question: "What happens if it's not working?",
    answer:
      "Every month you get a plain-English report and a 30-minute call where we walk through what's actually landing leads and what isn't. If month 3 comes and we can't show you real leads and a clear path to more, we'll say so and part ways. You keep everything we've built — Google Business Profile, ad account, website changes, tracking — it's all in your name.",
  },
];

const GymMarketing = () => {
  useScrollDepth();
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  // Existing project Formspree endpoint (same one Contact.tsx posts to).
  // A dedicated gym form ID can be swapped in later for clean segmentation.
  const FORMSPREE_ID = "xzdjplaq";

  const handleBackupSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formEl = e.target as HTMLFormElement;
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: new FormData(formEl),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        trackEvent("form_submit", {
          form_name: "gym_marketing_backup",
          location: "gym_marketing_lp",
        });
        trackEvent("generate_lead", { form_name: "gym_marketing_backup" });
        formEl.reset();
        router.push("/contact-thank-you");
        return;
      }
      throw new Error("Submit failed");
    } catch {
      toast({
        title: "Something went wrong",
        description:
          "Please email enquiries@digitaledgestudio.com or call 0419 807 321 and we'll get you booked in.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  /* ── Structured data ─────────────────────────────────── */
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Local SEO + Google Ads for Gyms & Fitness Businesses",
    description:
      "Done-for-you local SEO and Google Ads management for independent gyms, PT studios, CrossFit boxes, and F45 operators in Australia. $2,500/month, 3-month minimum.",
    provider: {
      "@type": "Organization",
      name: "Digital Edge Studio",
      url: "https://digitaledgestudio.com",
    },
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Gym owners and fitness business operators",
    },
    offers: {
      "@type": "Offer",
      price: "2500",
      priceCurrency: "AUD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "2500",
        priceCurrency: "AUD",
        billingDuration: "P1M",
        unitText: "MONTH",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Breadcrumb
        items={[
          { label: "Home", path: "/" },
          { label: "Gym Marketing" },
        ]}
      />

      {/* ═══ 1. Hero ═══ */}
      <section className="gradient-hero-warm relative overflow-hidden noise-overlay">
        <div className="hero-orb hero-orb-1" style={{ opacity: 0.2 }} />
        <div className="hero-orb hero-orb-2" style={{ opacity: 0.12 }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        <div className="container-tight px-4 py-16 md:py-24 relative z-10">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="show"
            variants={staggerB}
          >
            <motion.div
              variants={fadeUpB}
              className="flex items-center gap-2 text-primary-foreground/70 text-sm mb-4"
            >
              <Dumbbell className="w-4 h-4" />
              <span>For Independent Gyms & PT Studios</span>
            </motion.div>

            <motion.h1
              variants={fadeUpB}
              className="heading-display text-primary-foreground mb-5"
            >
              More Members for Your Gym — Without Guessing at Marketing
            </motion.h1>

            <motion.p
              variants={fadeUpB}
              className="text-body-lg text-primary-foreground/75 max-w-2xl mb-8"
            >
              Done-for-you local SEO and Google Ads for fitness businesses doing
              $30K–$100K a month. Google Business Profile in the local 3-pack,
              ads rebuilt around real conversions, and a clear pipeline of new
              member enquiries — while you focus on running the floor.
            </motion.p>

            <motion.div variants={fadeUpB}>
              <Button
                variant="cta"
                size="lg"
                className="btn-shimmer"
                onClick={() => scrollToBook("hero")}
              >
                Book a 15-min Call
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
              <p className="text-primary-foreground/50 text-sm mt-3">
                Free. No obligation. I review your ads before the call.
              </p>
            </motion.div>
          </motion.div>
        </div>
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
            className="w-full h-[40px] md:h-[60px]"
          >
            <path
              d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z"
              className="fill-muted"
            />
          </svg>
        </div>
      </section>

      {/* ═══ 2. Proof bar ═══ */}
      <section className="bg-muted py-8 border-t-2 border-accent/30 shadow-[0_-4px_20px_hsl(217_76%_48%/0.08)]">
        <div className="container-tight px-4">
          <p className="text-center text-sm md:text-base font-semibold text-foreground">
            We rank <span className="text-accent">#1 in our own market</span>{" "}
            against 12 competing agencies — the same local SEO + Google Ads
            playbook we run for your gym.
          </p>
          {/* TODO: replace with gym-specific case study stat once the first result lands. */}
        </div>
      </section>

      {/* ═══ 3. Who this is for ═══ */}
      <section className="section-padding bg-background dot-pattern">
        <div className="container-tight">
          <ScrollReveal variant="B" className="text-center mb-12">
            <motion.h2
              variants={fadeUpB}
              className="heading-section text-foreground mb-4"
            >
              Who This Is For
            </motion.h2>
            <motion.p
              variants={fadeUpB}
              className="text-body-lg text-muted-foreground max-w-2xl mx-auto"
            >
              If your off-peak classes are empty and most growth still comes
              from word-of-mouth, you&apos;re in the right place.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal
            variant="B"
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
          >
            {[
              "Independent 24/7 and full-service gyms",
              "PT studios and small-group training",
              "CrossFit and F45 franchises",
              "Boutique yoga, pilates, and boxing studios",
            ].map((item, i) => (
              <motion.div
                key={item}
                variants={fadeUpB}
                transition={{ delay: i * 0.1 }}
                className="group bg-card rounded-xl border border-border p-5 shadow-card card-hover-lift flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-sm text-foreground font-medium">{item}</p>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ 4. What you get ═══ */}
      <section
        className="section-padding"
        style={{ background: "var(--surface-gradient)" }}
      >
        <div className="container-tight">
          <ScrollReveal variant="B" className="text-center mb-12">
            <motion.h2
              variants={fadeUpB}
              className="heading-section text-foreground mb-4"
            >
              What You Get
            </motion.h2>
            <motion.p
              variants={fadeUpB}
              className="text-body-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Outcomes, not a feature list. Here&apos;s what changes in your
              business.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal
            variant="B"
            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {[
              {
                icon: MapPin,
                title: "You stop being invisible on Google Maps",
                desc: "When someone searches &quot;gym near me&quot; in your suburb, your business shows up before the chains. Your GBP, website, and local SEO all work together instead of against each other.",
              },
              {
                icon: Megaphone,
                title: "Your ad spend actually brings in members",
                desc: "We rebuild your Google Ads around real conversion tracking — calls, form fills, bookings — so you can see which keywords bring paying members, not just clicks.",
              },
              {
                icon: TrendingUp,
                title: "Off-peak classes start filling up",
                desc: "Fresh service and location pages, ongoing campaign tuning, and a monthly report so you know what&apos;s working. Over-reliance on referrals becomes a backup, not the plan.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUpB}
                className="group bg-card rounded-2xl border border-border p-7 shadow-card card-hover-lift card-premium"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="heading-card text-foreground mb-3">
                  {item.title}
                </h3>
                <p
                  className="text-sm text-muted-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                />
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ 5. How it works ═══ */}
      <section className="gradient-hero relative overflow-hidden noise-overlay">
        <div className="hero-orb hero-orb-1" style={{ opacity: 0.15 }} />
        <div className="hero-orb hero-orb-2" style={{ opacity: 0.1 }} />
        {/* Top wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 rotate-180">
          <svg
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
            className="w-full h-[40px] md:h-[60px]"
          >
            <path
              d="M0,60 Q600,-20 1200,60 L1200,60 L0,60 Z"
              className="fill-background"
            />
          </svg>
        </div>

        <div className="container-tight section-padding relative z-10">
          <ScrollReveal variant="B" className="text-center mb-14">
            <motion.h2
              variants={fadeUpB}
              className="heading-section text-white mb-4"
            >
              How It Works
            </motion.h2>
            <motion.p
              variants={fadeUpB}
              className="text-body-lg text-white/60 max-w-2xl mx-auto"
            >
              Three steps. No long sales cycle, no 30-page audit.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal
            variant="B"
            className="grid md:grid-cols-3 gap-8 relative max-w-5xl mx-auto"
          >
            {[
              {
                step: "01",
                icon: CalendarIcon,
                title: "Free 15-min diagnostic",
                desc: "Book the call. I look at your current ads, Google Business Profile, and website before we talk so we don&apos;t waste the 15 minutes on basics.",
              },
              {
                step: "02",
                icon: Wrench,
                title: "Month 1 build",
                desc: "Technical SEO audit and fixes, Google Business Profile rebuild, and a full Google Ads rebuild with conversion tracking wired to calls, form fills, and bookings.",
              },
              {
                step: "03",
                icon: TrendingUp,
                title: "Ongoing growth",
                desc: "Four new service or location pages a month, ads managed week-to-week, plus a monthly report and a 30-min strategy call so you always know what&apos;s working.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                variants={fadeUpB}
                className="relative group"
              >
                {i < 2 && <div className="hidden md:block timeline-line" />}
                <div className="relative z-10 text-center">
                  <motion.div
                    className="w-16 h-16 rounded-2xl card-glass flex items-center justify-center mx-auto mb-6"
                    whileHover={{
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.4 },
                    }}
                  >
                    <item.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <div className="text-white/40 text-xs font-bold font-display tracking-widest mb-2">
                    STEP {item.step}
                  </div>
                  <h3 className="heading-card text-white mb-3">{item.title}</h3>
                  <p
                    className="text-white/70 leading-relaxed text-sm"
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                  />
                </div>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
            className="w-full h-[40px] md:h-[60px]"
          >
            <path
              d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z"
              className="fill-background"
            />
          </svg>
        </div>
      </section>

      {/* ═══ 6. Price block ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight max-w-3xl">
          <ScrollReveal variant="B" className="text-center mb-6">
            <motion.p
              variants={fadeUpB}
              className="text-sm text-muted-foreground"
            >
              A full-time marketing hire costs $5K–$8K/month before ad spend.
              You get the same output for less than half — without the overhead.
            </motion.p>
          </ScrollReveal>
          <ScrollReveal variant="B">
            <motion.div
              variants={fadeUpB}
              className="bg-card rounded-2xl card-gradient-border shadow-glow relative overflow-hidden"
            >
              {/* Floating badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
                <span className="gradient-cta text-white text-xs font-bold uppercase tracking-wider px-5 py-1.5 rounded-full shadow-md whitespace-nowrap">
                  One Plan. Everything Included.
                </span>
              </div>
              <div className="gradient-hero relative px-8 py-10 text-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(217_71%_30%/0.4),transparent_70%)]" />
                <div className="relative z-10">
                  <p className="text-primary-foreground/70 text-sm mb-2 uppercase tracking-wider font-semibold">
                    Flat monthly fee
                  </p>
                  <div className="flex items-baseline justify-center gap-2 mb-3">
                    <span className="text-5xl md:text-6xl font-extrabold text-primary-foreground font-display price-shimmer">
                      $2,500
                    </span>
                    <span className="text-primary-foreground/70 text-lg">
                      /month
                    </span>
                  </div>
                  <p className="text-primary-foreground/80 text-base">
                    3-month minimum. Cancel anytime after.
                  </p>
                </div>
              </div>

              <div className="p-8">
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    "Technical SEO audit + fixes (Month 1)",
                    "Google Business Profile rebuild (Month 1)",
                    "Google Ads rebuild with conversion tracking (Month 1)",
                    "4 new service / location pages per month",
                    "Ongoing Google Ads management",
                    "Monthly report + 30-min strategy call",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <Button
                    variant="cta"
                    size="lg"
                    className="btn-shimmer"
                    onClick={() => scrollToBook("price_block")}
                  >
                    Book a 15-min Call
                    <ArrowRight className="w-5 h-5 ml-1" />
                  </Button>
                  <p className="text-xs text-muted-foreground mt-4">
                    Ad spend billed separately by Google — we don&apos;t mark it
                    up.
                  </p>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ 7. FAQ ═══ */}
      <FAQ faqs={faqs} title="Common Questions" />

      {/* ═══ 8. Final CTA — Calendly inline + backup form ═══ */}
      <section
        id="book"
        className="section-padding"
        style={{ background: "var(--surface-gradient)" }}
      >
        <div className="container-tight">
          <ScrollReveal variant="B" className="text-center mb-10">
            <motion.h2
              variants={fadeUpB}
              className="heading-section text-foreground mb-4"
            >
              Book a 15-min Call
            </motion.h2>
            <motion.p
              variants={fadeUpB}
              className="text-body-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Pick a time that suits. If nothing works, use the form and
              we&apos;ll come back to you with two options.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal
            variant="B"
            className="grid lg:grid-cols-5 gap-8 items-start"
          >
            {/* Calendly inline embed */}
            <motion.div variants={fadeUpB} className="lg:col-span-3">
              <CalendlyEmbed url={CALENDLY_URL} />
            </motion.div>

            {/* Backup form */}
            <motion.div variants={fadeUpB} className="lg:col-span-2">
              <div className="bg-card rounded-2xl border border-accent/20 shadow-card p-7 gradient-mesh">
                <h3 className="heading-card text-foreground mb-2">
                  Prefer email?
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Tell us a bit about your gym and we&apos;ll reply within 24
                  hours with a time.
                </p>
                <form onSubmit={handleBackupSubmit} className="space-y-4">
                  <input
                    type="hidden"
                    name="_subject"
                    value="New gym marketing enquiry (/gym-marketing)"
                  />
                  <input
                    type="hidden"
                    name="source"
                    value="gym_marketing_lp"
                  />

                  <div className="space-y-2">
                    <Label htmlFor="gm-name">Your name *</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                      <Input
                        id="gm-name"
                        name="name"
                        required
                        placeholder="Full name"
                        className="pl-10 input-glass-light"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gm-business">Business name *</Label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                      <Input
                        id="gm-business"
                        name="business"
                        required
                        placeholder="Gym / studio name"
                        className="pl-10 input-glass-light"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gm-website">Website <span className="text-muted-foreground font-normal">(optional)</span></Label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                      <Input
                        id="gm-website"
                        name="website"
                        type="url"
                        placeholder="https://"
                        className="pl-10 input-glass-light"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gm-phone">Phone *</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                      <Input
                        id="gm-phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="04XX XXX XXX"
                        className="pl-10 input-glass-light"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gm-help">What do you need help with? <span className="text-muted-foreground font-normal">(optional)</span></Label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground z-10" />
                      <Textarea
                        id="gm-help"
                        name="message"
                        rows={4}
                        placeholder="More members, off-peak classes, Google Ads not working, etc."
                        className="pl-10 input-glass-light"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="cta"
                    size="lg"
                    className="w-full"
                    disabled={loading}
                  >
                    {loading ? (
                      "Sending..."
                    ) : (
                      <>
                        Send enquiry
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    No spam. No obligation. 24-hour reply.
                  </p>
                </form>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/*
      ═══ 9. Testimonial section ═══
      Commented out until we have real gym/PT studio testimonials with
      name, business, and a verifiable result. Keep the markup ready so
      we can drop in quotes without touching layout.

      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal variant="B" className="text-center mb-10">
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">
              What gym owners say
            </motion.h2>
          </ScrollReveal>
          <ScrollReveal variant="B" className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[].map((t: { name: string; role: string; quote: string }) => (
              <motion.div
                key={t.name}
                variants={fadeUpB}
                className="bg-card rounded-xl p-6 border border-border shadow-card card-hover-lift"
              >
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>
      */}
    </>
  );
};

export default GymMarketing;
