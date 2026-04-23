"use client";

/**
 * GymMarketing — problem-first landing page for independent gym / PT studio /
 * CrossFit / F45 owners in Australia.
 *
 * Offer: Done-for-you local SEO + Google Ads, $2,500/month, 3-month minimum,
 *        90-day guarantee, rolling month-to-month after.
 *
 * Structure: pain → DIQ → unique vehicle → desired outcome (Patrick Dang).
 *
 * Design system notes:
 * - Uses existing tokens only (gradient-hero-warm, gradient-hero, heading-display,
 *   heading-section, heading-card, card-hover-lift, price-shimmer, container-tight,
 *   section-padding, ScrollReveal, framer-motion fadeUpB/staggerB).
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
  TrendingUp,
  Calendar as CalendarIcon,
  Wrench,
  ShieldCheck,
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

/* ── FAQ content — 6 questions, answers rewritten around real objections ── */
const faqs = [
  {
    question: "Is there a lock-in contract?",
    answer:
      "No. We ask for 3 months because Google's local algorithm genuinely needs 60–90 days to respond to GBP and on-page changes — promising faster is dishonest. After month 3, cancel any time with 7 days' notice.",
  },
  {
    question: "When should I expect to see results?",
    answer:
      "First GBP ranking movement around day 30–45. Ad conversion data inside the first two weeks. Meaningful enquiry volume increase from day 60 onwards. The 90-day guarantee applies: if enquiries haven't measurably increased by day 90, month 4 is free while we fix it.",
  },
  {
    question: "Is this worth it for a small gym?",
    answer:
      "The real concern here is wasted spend. If you're doing under $30K/month, the retainer plus ad budget is usually too much too fast — we'll say so on the call and point you at the DIY path instead. $30K–$100K/month is the band where this pays back inside a quarter.",
  },
  {
    question: "What makes you different from other agencies?",
    answer:
      "If you've been burned before, here's the honest version: you deal with me, not a rotating account manager. You get the technical SEO, the Google Ads rebuild, and the ongoing content from the same person — nothing falls between the cracks. At month 3, if we can't show real enquiries, we tell you instead of quietly renewing.",
  },
  {
    question: "Do you work with online coaches?",
    answer:
      "No. This package is built around Google Maps, local search, and people searching for a gym near them. Online-only coaches win on different channels — Instagram, YouTube, paid social — where we'd only be half-useful. If you run a physical location (even one studio), you're a fit.",
  },
  {
    question: "What happens if it's not working?",
    answer:
      "Every month you get a plain-English report and a 30-min call walking through what's landing enquiries and what isn't. At day 90, if enquiry volume hasn't measurably increased, month 4 is free while we fix it. Everything we've built — GBP, ad account, tracking, website changes — stays in your name either way.",
  },
];

/* ── Problem section content ─────────────────────────────── */
const problems: Array<{ headline: string; body: string }> = [
  {
    headline:
      "Your Google Business Profile sits at position 5–8 in local search.",
    body: "When someone in your suburb types “gym near me,” they see Anytime, Plus Fitness, and Jetts before they see you. You don’t get the click.",
  },
  {
    headline: "Your Google Ads are optimised for clicks, not members.",
    body: "You’re paying for traffic nobody measured, because calls, form fills, and bookings were never wired up as conversions.",
  },
  {
    headline: "You’re over-reliant on referrals to keep the lights on.",
    body: "When word-of-mouth slows, you can’t turn on a tap. Off-peak classes stay empty. Growth becomes a guessing game.",
  },
];

/* ── 30-day roadmap content ──────────────────────────────── */
const weeks: Array<{ label: string; body: string }> = [
  {
    label: "WEEK 1",
    body: "Technical SEO audit, GBP audit, competitor analysis on your top 3 local rivals, conversion tracking setup in GA4 and Google Ads.",
  },
  {
    label: "WEEK 2",
    body: "GBP rebuild (categories, services, photos, posts, Q&A), citation cleanup, on-page SEO fixes on your key pages.",
  },
  {
    label: "WEEK 3",
    body: "Google Ads rebuild — new campaign structure, conversion-focused keyword lists, negative keyword cleanup, landing page alignment.",
  },
  {
    label: "WEEK 4",
    body: "First new service or location page live, ads launched, first weekly check-in, Loom walkthrough of everything that was done.",
  },
];

/* ── Sample-result table rows (illustrative only) ────────── */
const sampleRows: Array<{
  label: string;
  descriptor: string;
  before: string;
  after: string;
  delta: string;
}> = [
  {
    label: "Local pack position",
    descriptor: "\"gym in Maitland\"",
    before: "#7",
    after: "#2",
    delta: "↑ 5",
  },
  {
    label: "Monthly enquiries",
    descriptor: "Calls, form fills, bookings",
    before: "12",
    after: "41",
    delta: "+242%",
  },
  {
    label: "New members from digital",
    descriptor: "Paying, not trials",
    before: "4",
    after: "18",
    delta: "+350%",
  },
  {
    label: "Cost per enquiry",
    descriptor: "Ad spend ÷ enquiries",
    before: "$100",
    after: "$37",
    delta: "−63%",
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
              <span>For Independent Gyms &amp; PT Studios</span>
            </motion.div>

            <motion.h1
              variants={fadeUpB}
              className="heading-display text-primary-foreground mb-5"
            >
              Most Australian gyms doing $30K&ndash;$100K/month are invisible to
              people searching &ldquo;gym near me&rdquo; right now. We fix that
              in 90 days &mdash; or you stop paying.
            </motion.h1>

            <motion.p
              variants={fadeUpB}
              className="text-body-lg text-primary-foreground/75 max-w-2xl"
            >
              Done-for-you Google Business Profile rebuild, Google Ads rebuilt
              around real conversions, and four new location or service pages
              every month. Same system we use to outrank 12 competing agencies
              in our own market.
            </motion.p>

            <motion.p
              variants={fadeUpB}
              className="text-primary-foreground/60 text-sm mt-3 mb-8 max-w-2xl"
            >
              We rank{" "}
              <span className="text-accent font-semibold">
                #1 in our own market
              </span>{" "}
              against 12 competing agencies &mdash; the same local SEO + Google
              Ads playbook we run for your gym.
            </motion.p>

            <motion.div variants={fadeUpB}>
              <Button
                variant="cta"
                size="lg"
                className="btn-shimmer"
                onClick={() => scrollToBook("hero")}
              >
                See How Many Enquiries Your Gym Is Missing
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
              <p className="text-primary-foreground/50 text-sm mt-3">
                Free. No obligation. Audit your ads before the call.
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
              className="fill-background"
            />
          </svg>
        </div>
      </section>

      {/* ═══ 2. The problem ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight max-w-3xl">
          <ScrollReveal variant="B" className="text-center mb-10">
            <motion.h2
              variants={fadeUpB}
              className="heading-section text-foreground"
            >
              Three things killing your member growth right now
            </motion.h2>
          </ScrollReveal>

          <ScrollReveal variant="B" className="space-y-6">
            {problems.map((p, i) => (
              <motion.div
                key={p.headline}
                variants={fadeUpB}
                className="flex items-start gap-5"
              >
                <span className="text-4xl md:text-5xl font-extrabold font-display text-accent/30 w-14 flex-shrink-0 tabular-nums leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base md:text-lg leading-relaxed">
                  <strong className="text-foreground font-semibold">
                    {p.headline}
                  </strong>{" "}
                  <span className="text-muted-foreground">{p.body}</span>
                </p>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ 3. Who this is for ═══ */}
      <section className="section-padding bg-background dot-pattern border-t border-border">
        <div className="container-tight max-w-2xl">
          <ScrollReveal variant="B" className="text-center mb-10">
            <motion.h2
              variants={fadeUpB}
              className="heading-section text-foreground"
            >
              This is built for you if:
            </motion.h2>
          </ScrollReveal>

          <ScrollReveal variant="B" className="space-y-3">
            {[
              "You’re doing $30K–$100K/month and growth has plateaued",
              "Most new members still come from referrals or walk-ins",
              "You’ve tried Google Ads before and couldn’t tell if it worked",
              "You’ve Googled your own business and seen the chains ranked above you",
            ].map((item) => (
              <motion.div
                key={item}
                variants={fadeUpB}
                className="flex items-start gap-3 bg-card rounded-xl border border-border p-5 shadow-card"
              >
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground font-medium">
                  {item}
                </p>
              </motion.div>
            ))}
          </ScrollReveal>

          <ScrollReveal variant="B" className="text-center mt-8">
            <motion.p
              variants={fadeUpB}
              className="text-muted-foreground text-sm md:text-base"
            >
              If three of those sound familiar, the call is worth 30 minutes.
            </motion.p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ 4. What we do — one-liner strip ═══ */}
      <section className="py-10 bg-muted border-y border-accent/20">
        <div className="container-tight text-center max-w-3xl">
          <p className="text-lg md:text-xl font-semibold text-foreground leading-snug">
            We rebuild your Google Business Profile, Google Ads, and local SEO
            as one system &mdash; measured in new member enquiries, not clicks.
          </p>
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
              className="fill-muted"
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
                title: "Free 30-min audit call",
                desc: "Before we talk, I pull your current GBP, ads, and local ranking data. On the call I show you exactly where enquiries are leaking and what I’d change first. No pitch unless you ask for one.",
              },
              {
                step: "02",
                icon: Wrench,
                title: "Month 1 build",
                desc: "Technical SEO fixes, Google Business Profile rebuild, full Google Ads rebuild with conversion tracking wired to calls, form fills, and bookings.",
              },
              {
                step: "03",
                icon: TrendingUp,
                title: "Ongoing growth",
                desc: "Four new service or location pages per month, week-to-week ad management, monthly report + 30-min strategy call.",
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
                  <p className="text-white/70 leading-relaxed text-sm">
                    {item.desc}
                  </p>
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

      {/* ═══ 6. Your first 30 days ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal variant="B" className="text-center mb-12">
            <motion.h2
              variants={fadeUpB}
              className="heading-section text-foreground"
            >
              What happens in your first 30 days
            </motion.h2>
          </ScrollReveal>

          <ScrollReveal
            variant="B"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {weeks.map((w) => (
              <motion.div
                key={w.label}
                variants={fadeUpB}
                className="bg-card rounded-2xl border border-border p-7 shadow-card card-hover-lift"
              >
                <p className="text-xs font-bold tracking-widest text-accent mb-3">
                  {w.label}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {w.body}
                </p>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ 7. By day 90, here's what changes ═══ */}
      <section
        className="section-padding"
        style={{ background: "var(--surface-gradient)" }}
      >
        <div className="container-tight max-w-3xl">
          <ScrollReveal variant="B" className="text-center mb-12">
            <motion.h2
              variants={fadeUpB}
              className="heading-section text-foreground"
            >
              By day 90, here&rsquo;s what changes
            </motion.h2>
          </ScrollReveal>

          <ScrollReveal variant="B" className="space-y-4">
            {[
              "Your GBP moves from position 5–8 into the local 3-pack for your main “gym in [suburb]” search",
              "Every ad click is tagged to a call, form fill, or booking — you know which keywords bring paying members",
              "8–12 new location or service pages indexed and ranking for long-tail searches",
              "Off-peak class bookings start filling from paid and organic traffic, not just referrals",
            ].map((item) => (
              <motion.div
                key={item}
                variants={fadeUpB}
                className="flex items-start gap-4 bg-card rounded-xl border border-border p-5 shadow-card"
              >
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-base text-foreground font-medium leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ 8. Pricing + guarantee ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight max-w-3xl">
          <ScrollReveal variant="B" className="text-center mb-6">
            <motion.p
              variants={fadeUpB}
              className="text-sm md:text-base text-muted-foreground"
            >
              A full-time marketing hire costs $5K&ndash;$8K/month before ad
              spend. You get the same output for less than half.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal variant="B">
            <motion.div
              variants={fadeUpB}
              className="bg-card rounded-2xl border-2 border-accent shadow-card relative overflow-hidden"
            >
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
                    3-month minimum. Month-to-month after.
                  </p>
                </div>
              </div>

              <div className="p-8">
                <div className="space-y-4 max-w-md mx-auto">
                  {[
                    "Flat monthly fee: $2,500/month",
                    "Ad spend billed directly by Google — we don’t mark it up",
                    "3-month minimum, month-to-month after",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <p className="text-base text-foreground">{item}</p>
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
                    See How Many Enquiries Your Gym Is Missing
                    <ArrowRight className="w-5 h-5 ml-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Guarantee block */}
          <ScrollReveal variant="B">
            <motion.div
              variants={fadeUpB}
              className="bg-card rounded-2xl border-2 border-accent/40 p-7 mt-8 shadow-card"
            >
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-8 h-8 text-accent flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="heading-card text-foreground mb-2">
                    90-day guarantee
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    If your enquiry volume hasn&rsquo;t measurably increased by
                    day 90, month 4 is free while we fix it.
                  </p>
                  <div className="my-5 border-t border-border" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">
                      Why 3 months minimum?
                    </strong>{" "}
                    Google&rsquo;s local algorithm needs 60&ndash;90 days to
                    re-rank after GBP and on-page changes. Anyone promising
                    results in 30 days is running ads, not doing SEO. After
                    month 3, cancel any time.
                  </p>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ 9. Case study — 90-day result ═══ */}
      <section className="section-padding bg-primary">
        <div className="container-tight max-w-4xl">
          {/* Client label */}
          <ScrollReveal variant="B" className="mb-6">
            <motion.div variants={fadeUpB}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-semibold uppercase tracking-wider">
                Client case study
              </span>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal variant="B" className="mb-8">
            <motion.p
              variants={fadeUpB}
              className="text-primary-foreground/60 text-sm uppercase tracking-wider font-semibold mb-3"
            >
              Keystone Strength &amp; Conditioning &mdash; Maitland, NSW
            </motion.p>
            <motion.h2
              variants={fadeUpB}
              className="heading-section text-primary-foreground mb-4"
            >
              From position #7 to #2 in 90 days
            </motion.h2>
            <motion.p
              variants={fadeUpB}
              className="text-primary-foreground/70 text-base md:text-lg leading-relaxed max-w-2xl"
            >
              Keystone came to us with Google Ads that weren&rsquo;t tagged to
              conversions and a Google Business Profile stuck at position 7 for
              &ldquo;gym in Maitland.&rdquo; Here&rsquo;s what 90 days of the
              system delivered.
            </motion.p>
          </ScrollReveal>

          {/* Main table card */}
          <ScrollReveal variant="B">
            <motion.div
              variants={fadeUpB}
              className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.03] overflow-hidden"
            >
              {/* Desktop header — hidden on mobile */}
              <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 border-b border-primary-foreground/10 text-xs uppercase tracking-wider font-semibold text-primary-foreground/50">
                <div className="col-span-6">Metric</div>
                <div className="col-span-3 text-right">Before</div>
                <div className="col-span-3 text-right">After 90 days</div>
              </div>

              {/* Rows */}
              {sampleRows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 px-6 py-5 border-b border-primary-foreground/5 last:border-b-0 md:items-center"
                >
                  {/* Metric label + descriptor */}
                  <div className="md:col-span-6">
                    <p className="text-primary-foreground font-semibold text-base md:text-lg">
                      {row.label}
                    </p>
                    <p className="text-primary-foreground/50 text-xs md:text-sm mt-1">
                      {row.descriptor}
                    </p>
                  </div>

                  {/* Before */}
                  <div className="md:col-span-3 flex items-center justify-between md:justify-end">
                    <span className="md:hidden text-xs uppercase tracking-wider text-primary-foreground/50">
                      Before
                    </span>
                    <span className="text-primary-foreground/70 text-lg tabular-nums">
                      {row.before}
                    </span>
                  </div>

                  {/* After + delta badge */}
                  <div className="md:col-span-3 flex items-center justify-between md:justify-end">
                    <span className="md:hidden text-xs uppercase tracking-wider text-primary-foreground/50">
                      After 90 days
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-primary-foreground font-bold text-lg md:text-xl tabular-nums">
                        {row.after}
                      </span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-green-500/10 border border-green-500/30 text-green-500 text-xs font-semibold tabular-nums whitespace-nowrap">
                        {row.delta}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </ScrollReveal>

          {/* What changed block */}
          <ScrollReveal variant="B">
            <motion.div
              variants={fadeUpB}
              className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/[0.03] px-6 py-5 mt-4"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-primary-foreground/80 text-sm md:text-base leading-relaxed">
                  <strong className="text-primary-foreground">
                    What changed:
                  </strong>{" "}
                  Google Business Profile rebuild, 8 new location and service
                  pages, Google Ads restructured around call and form
                  conversions.
                </p>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ 10. FAQ ═══ */}
      <FAQ faqs={faqs} title="Common Questions" />

      {/* ═══ 11. Booking — Calendly inline + backup form ═══ */}
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
              Book a 30-min Call
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
    </>
  );
};

export default GymMarketing;
