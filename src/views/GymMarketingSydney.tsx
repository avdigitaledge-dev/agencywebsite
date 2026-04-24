"use client";

/**
 * GymMarketingSydney — hyperlocal variant of /gym-marketing aimed at Sydney
 * gym / PT / CrossFit owners. Differs from the national page by emphasising:
 *   - suburb-level Local Pack rankings (Bondi, Parramatta, Inner West, etc.)
 *   - Sydney-specific ad cost pressure
 *   - Sydney franchise competition (F45, Anytime, Fitness First, Plus Fitness)
 *
 * Reuses CalendlyEmbed + scroll-depth + Formspree pattern from GymMarketing.tsx.
 */

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Calendar as CalendarIcon,
  Wrench,
  TrendingUp,
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

const CALENDLY_URL =
  "https://calendly.com/avdigitaledge/30min?hide_gdpr_banner=1&hide_event_type_details=1&hide_landing_page_details=1";

const CalendlyEmbed = ({ url }: { url: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    const handleMessage = (e: MessageEvent) => {
      if (
        typeof e.data === "object" &&
        e.data !== null &&
        "event" in e.data &&
        (e.data as { event: string }).event === "calendly.event_scheduled"
      ) {
        trackEvent("calendly_book", { location: "gym_marketing_sydney_lp" });
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

const scrollToBook = (source: string) => {
  trackEvent("cta_click", { location: source });
  const el = document.getElementById("book");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

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
          trackEvent(`scroll_${m}`, { page: "gym_marketing_sydney_lp" });
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
};

const faqs = [
  {
    question: "Do you work with gyms across all Sydney suburbs?",
    answer:
      "Yes. Sydney local SEO has to be done suburb-by-suburb because Google treats Bondi, Parramatta, and the Inner West as separate local markets. We build a dedicated page per key suburb you want to rank in, optimise your Google Business Profile around those suburbs, and run Sydney-suburb-targeted Google Ads.",
  },
  {
    question: "How do you compete with F45, Anytime Fitness, and Plus Fitness?",
    answer:
      "You don't outspend them — you out-specialise them. Franchise gyms run generic national campaigns. We run hyperlocal campaigns: \"strength training Bondi,\" \"women's gym Inner West,\" \"CrossFit Parramatta.\" The franchise always shows up in the 3-pack, but you take the paid spot above it and the second organic spot below it.",
  },
  {
    question: "Sydney CPCs are higher. Does the budget still work?",
    answer:
      "Sydney Google Ads CPCs for gym terms are roughly $4–$9 (vs $2–$5 in regional markets). The retainer absorbs that because we're not spending on broad national keywords — we're spending on suburb-qualified high-intent searches. $1,500–$2,500/month in ad spend gets a Sydney gym 25–40 tracked trial bookings a month once the account is rebuilt.",
  },
  {
    question: "Do you work with CrossFit boxes, PT studios, and F45-style HIIT?",
    answer:
      "Yes — they're actually the easiest fits. Boutique and specialty gyms (CrossFit, HYROX, reformer pilates, women-only strength, BJJ, Muay Thai) have clearer differentiation than general fitness, which makes ad copy and SEO cluster pages much tighter. Independent big-box gyms ($30K–$100K/month) are also a strong fit.",
  },
  {
    question: "I already have a generic marketing agency. Why switch?",
    answer:
      "Most agencies are generalists — they'll run ads for a tradie, a dentist, and a gym using the same playbook. You deal directly with me, the person doing the work. Everything's gym-specific: conversion events, negative keywords, landing page templates, and the Sydney suburb SEO cluster strategy.",
  },
  {
    question: "Is there a lock-in contract?",
    answer:
      "Three-month minimum (Google's local algorithm needs 60–90 days to respond to GBP and on-page changes), then month-to-month. If enquiry volume hasn't measurably increased by day 90, month 4 is free while we fix it.",
  },
];

const problems: Array<{ headline: string; body: string }> = [
  {
    headline:
      "Your Google Business Profile sits at position 5–8 in your suburb's 3-pack.",
    body: "F45, Anytime, Fitness First, and Plus Fitness take the top three slots in every Sydney suburb. When locals search \"gym in Bondi\" or \"gym in Parramatta,\" they see the franchises before they see you.",
  },
  {
    headline: "Sydney ad costs hit harder when spend isn't conversion-tracked.",
    body: "Gym-term CPCs in Sydney run $4–$9 (double regional markets). If trial form fills, calls, and booking-page visits aren't wired as conversions, you're paying double to guess what's working.",
  },
  {
    headline:
      "Bondi isn't the Inner West isn't Parramatta — but your SEO treats them the same.",
    body: "Sydney is 50+ distinct local markets stitched together. One generic \"gym in Sydney\" page doesn't rank in any suburb-level search. You need a page per suburb you actually want to pull members from.",
  },
];

const suburbs = [
  "Bondi & Eastern Suburbs",
  "Inner West (Newtown, Marrickville, Leichhardt)",
  "Northern Beaches",
  "North Shore (Chatswood, St Leonards)",
  "Sutherland Shire",
  "Parramatta & Western Sydney",
  "Sydney CBD",
  "Hills District",
  "South Sydney",
  "Hurstville & St George",
];

const weeks: Array<{ label: string; body: string }> = [
  {
    label: "WEEK 1",
    body: "Suburb-level keyword research for your catchment, technical SEO audit, GBP audit, Sydney competitor analysis (F45, Anytime, and your two closest independent rivals), conversion tracking setup.",
  },
  {
    label: "WEEK 2",
    body: "GBP rebuild (categories, Sydney-suburb services, photos, posts, Q&A), NSW citation cleanup, on-page SEO fixes on your main service pages.",
  },
  {
    label: "WEEK 3",
    body: "Google Ads rebuild — Sydney-suburb campaign structure, exact-match keyword lists around \"[service] + [suburb],\" Sydney-CPC-adjusted bidding, 300-line negative keyword list installed.",
  },
  {
    label: "WEEK 4",
    body: "First two Sydney suburb pages live (e.g. \"Women's strength training Bondi,\" \"CrossFit Parramatta\"), ads launched, first weekly check-in, Loom walkthrough.",
  },
];

const sampleRows: Array<{
  label: string;
  descriptor: string;
  before: string;
  after: string;
  delta: string;
}> = [
  {
    label: "Local pack position",
    descriptor: "\"gym in [suburb]\" (Sydney)",
    before: "#6",
    after: "#2",
    delta: "↑ 4",
  },
  {
    label: "Monthly booked trials",
    descriptor: "From paid + organic Sydney traffic",
    before: "9",
    after: "38",
    delta: "+322%",
  },
  {
    label: "New members from digital",
    descriptor: "Paying, not trials",
    before: "3",
    after: "16",
    delta: "+433%",
  },
  {
    label: "Cost per enquiry",
    descriptor: "Sydney-suburb campaigns",
    before: "$118",
    after: "$42",
    delta: "−64%",
  },
];

const GymMarketingSydney = () => {
  useScrollDepth();
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

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
          form_name: "gym_marketing_sydney_backup",
          location: "gym_marketing_sydney_lp",
        });
        trackEvent("generate_lead", {
          form_name: "gym_marketing_sydney_backup",
        });
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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Gym Marketing Sydney — Local SEO + Google Ads",
    description:
      "Sydney-specific local SEO and Google Ads management for independent gyms, PT studios, CrossFit boxes, and boutique fitness. Suburb-level 3-pack rankings, conversion-tracked Sydney ad campaigns, and trial-specific landing pages.",
    provider: {
      "@type": "Organization",
      name: "Digital Edge Studio",
      url: "https://digitaledgestudio.com",
    },
    areaServed: {
      "@type": "City",
      name: "Sydney",
      containedInPlace: {
        "@type": "State",
        name: "New South Wales",
        containedInPlace: {
          "@type": "Country",
          name: "Australia",
        },
      },
    },
    audience: {
      "@type": "Audience",
      audienceType: "Sydney gym owners and fitness business operators",
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
          { label: "Gym Marketing Sydney" },
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
              <MapPin className="w-4 h-4" />
              <span>For Independent Sydney Gyms &amp; PT Studios</span>
            </motion.div>

            <motion.h1
              variants={fadeUpB}
              className="heading-display text-primary-foreground mb-5"
            >
              Sydney gym marketing that actually gets locals through your door
              &mdash; suburb by suburb, not a generic &ldquo;gym in Sydney&rdquo;
              campaign.
            </motion.h1>

            <motion.p
              variants={fadeUpB}
              className="text-body-lg text-primary-foreground/75 max-w-2xl"
            >
              Local 3-pack rankings in your actual suburb, Google Ads rebuilt
              around Sydney CPCs and trial bookings, and one new suburb page
              every week. Built for independent gyms, CrossFit boxes, and
              boutique studios competing against the franchises.
            </motion.p>

            <motion.div variants={fadeUpB} className="mt-8">
              <Button
                variant="cta"
                size="lg"
                className="btn-shimmer"
                onClick={() => scrollToBook("hero")}
              >
                See How Many Enquiries Your Sydney Gym Is Missing
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
              <p className="text-primary-foreground/50 text-sm mt-3">
                Free. No obligation. Suburb-level audit before the call.
              </p>
            </motion.div>
          </motion.div>
        </div>
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

      {/* ═══ 2. The problems (Sydney-specific) ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight max-w-3xl">
          <ScrollReveal variant="B" className="text-center mb-10">
            <motion.h2
              variants={fadeUpB}
              className="heading-section text-foreground"
            >
              Three things killing Sydney gym growth right now
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

      {/* ═══ 3. Suburbs served ═══ */}
      <section className="section-padding bg-background dot-pattern border-t border-border">
        <div className="container-tight max-w-3xl">
          <ScrollReveal variant="B" className="text-center mb-8">
            <motion.h2
              variants={fadeUpB}
              className="heading-section text-foreground mb-4"
            >
              Sydney suburbs we rank gyms in
            </motion.h2>
            <motion.p
              variants={fadeUpB}
              className="text-muted-foreground text-base md:text-lg"
            >
              Most Sydney campaigns we run target 3&ndash;5 specific suburbs
              within a 6km radius of the gym. These are the ones we&rsquo;ve
              worked in directly.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal
            variant="B"
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {suburbs.map((s) => (
              <motion.div
                key={s}
                variants={fadeUpB}
                className="flex items-center gap-3 bg-card rounded-xl border border-border p-4 shadow-card"
              >
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm md:text-base text-foreground font-medium">
                  {s}
                </span>
              </motion.div>
            ))}
          </ScrollReveal>

          <ScrollReveal variant="B" className="text-center mt-6">
            <motion.p
              variants={fadeUpB}
              className="text-muted-foreground text-sm"
            >
              If your catchment suburb isn&rsquo;t listed, ask on the call
              &mdash; Sydney SEO works the same way everywhere, we just
              haven&rsquo;t had a client there yet.
            </motion.p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ 4. What we do — one-liner strip ═══ */}
      <section className="py-10 bg-muted border-y border-accent/20">
        <div className="container-tight text-center max-w-3xl">
          <p className="text-lg md:text-xl font-semibold text-foreground leading-snug">
            We rebuild your Sydney Google Business Profile, suburb-level SEO,
            and Google Ads as one system &mdash; measured in tracked member
            enquiries, not clicks.
          </p>
        </div>
      </section>

      {/* ═══ 5. How it works ═══ */}
      <section className="gradient-hero relative overflow-hidden noise-overlay">
        <div className="hero-orb hero-orb-1" style={{ opacity: 0.15 }} />
        <div className="hero-orb hero-orb-2" style={{ opacity: 0.1 }} />
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
              Three steps. No 30-page audit, no long sales cycle.
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
                title: "Free Sydney audit call",
                desc: "Before we talk, I pull your GBP, your top 3 Sydney competitors' GBPs, and your ad account data. On the call I show you exactly where enquiries are leaking in your catchment suburbs.",
              },
              {
                step: "02",
                icon: Wrench,
                title: "Month 1 build",
                desc: "Technical SEO fixes, GBP rebuild, Sydney suburb keyword clusters mapped, Google Ads rebuilt with Sydney-CPC-aware bidding and conversion tracking.",
              },
              {
                step: "03",
                icon: TrendingUp,
                title: "Ongoing growth",
                desc: "4 new Sydney suburb / service pages per month, week-to-week ad management, monthly report + 30-min strategy call.",
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

      {/* ═══ 6. First 30 days ═══ */}
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

      {/* ═══ 7. Sample result ═══ */}
      <section className="section-padding bg-primary">
        <div className="container-tight max-w-4xl">
          <ScrollReveal variant="B" className="mb-6">
            <motion.div variants={fadeUpB}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-semibold uppercase tracking-wider">
                Sample Sydney 90-day result
              </span>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal variant="B" className="mb-8">
            <motion.h2
              variants={fadeUpB}
              className="heading-section text-primary-foreground mb-4"
            >
              From position #6 to #2 in a Sydney suburb
            </motion.h2>
            <motion.p
              variants={fadeUpB}
              className="text-primary-foreground/70 text-base md:text-lg leading-relaxed max-w-2xl"
            >
              Illustrative numbers based on a single-location independent gym
              in a Sydney suburb, $2,000/month ad spend, 90 days of the
              system. Your exact numbers depend on your suburb&rsquo;s
              competition and starting point &mdash; we&rsquo;ll give you a
              realistic range on the audit call.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal variant="B">
            <motion.div
              variants={fadeUpB}
              className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.03] overflow-hidden"
            >
              <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 border-b border-primary-foreground/10 text-xs uppercase tracking-wider font-semibold text-primary-foreground/50">
                <div className="col-span-6">Metric</div>
                <div className="col-span-3 text-right">Before</div>
                <div className="col-span-3 text-right">After 90 days</div>
              </div>

              {sampleRows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 px-6 py-5 border-b border-primary-foreground/5 last:border-b-0 md:items-center"
                >
                  <div className="md:col-span-6">
                    <p className="text-primary-foreground font-semibold text-base md:text-lg">
                      {row.label}
                    </p>
                    <p className="text-primary-foreground/50 text-xs md:text-sm mt-1">
                      {row.descriptor}
                    </p>
                  </div>
                  <div className="md:col-span-3 flex items-center justify-between md:justify-end">
                    <span className="md:hidden text-xs uppercase tracking-wider text-primary-foreground/50">
                      Before
                    </span>
                    <span className="text-primary-foreground/70 text-lg tabular-nums">
                      {row.before}
                    </span>
                  </div>
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
        </div>
      </section>

      {/* ═══ 8. Guarantee ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight max-w-3xl">
          <ScrollReveal variant="B">
            <motion.div
              variants={fadeUpB}
              className="bg-card rounded-2xl border-2 border-accent/40 p-7 shadow-card"
            >
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-8 h-8 text-accent flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="heading-card text-foreground mb-2">
                    90-day Sydney guarantee
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    If your tracked enquiry volume from Sydney searches
                    hasn&rsquo;t measurably increased by day 90, month 4 is
                    free while we fix it. The GBP, ad account, and every page
                    we build stay in your name either way.
                  </p>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ 9. FAQ ═══ */}
      <FAQ faqs={faqs} title="Common Sydney Gym Questions" />

      {/* ═══ 10. Related resources ═══ */}
      <section className="section-padding bg-background border-t border-border">
        <div className="container-tight max-w-3xl">
          <ScrollReveal variant="B" className="text-center mb-8">
            <motion.h2
              variants={fadeUpB}
              className="heading-section text-foreground mb-4"
            >
              More for Sydney gym owners
            </motion.h2>
          </ScrollReveal>

          <ScrollReveal variant="B" className="grid sm:grid-cols-2 gap-4">
            {[
              {
                href: "/gym-marketing",
                label: "National /gym-marketing service page",
              },
              {
                href: "/google-ads-for-gyms",
                label: "Google Ads for Gyms (ad-account-only service)",
              },
              {
                href: "/web-design-sydney",
                label: "Web Design Sydney",
              },
              {
                href: "/web-design-gyms",
                label: "Gym & fitness website design",
              },
            ].map((r) => (
              <motion.div key={r.href} variants={fadeUpB}>
                <Link
                  href={r.href}
                  className="flex items-center justify-between gap-3 bg-card rounded-xl border border-border p-5 shadow-card hover:border-accent transition-colors group"
                >
                  <span className="text-sm md:text-base text-foreground font-medium">
                    {r.label}
                  </span>
                  <ArrowRight className="w-4 h-4 text-accent opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ 11. Booking ═══ */}
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
              Book a 30-min Sydney Gym Call
            </motion.h2>
            <motion.p
              variants={fadeUpB}
              className="text-body-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Pick a time that suits. If nothing works, use the form and
              we&rsquo;ll come back with two options.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal
            variant="B"
            className="grid lg:grid-cols-5 gap-8 items-start"
          >
            <motion.div variants={fadeUpB} className="lg:col-span-3">
              <CalendlyEmbed url={CALENDLY_URL} />
            </motion.div>

            <motion.div variants={fadeUpB} className="lg:col-span-2">
              <div className="bg-card rounded-2xl border border-accent/20 shadow-card p-7 gradient-mesh">
                <h3 className="heading-card text-foreground mb-2">
                  Prefer email?
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Tell us your gym and suburb &mdash; we&rsquo;ll reply within
                  24 hours.
                </p>
                <form onSubmit={handleBackupSubmit} className="space-y-4">
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Sydney gym marketing enquiry (/gym-marketing-sydney)"
                  />
                  <input
                    type="hidden"
                    name="source"
                    value="gym_marketing_sydney_lp"
                  />

                  <div className="space-y-2">
                    <Label htmlFor="gms-name">Your name *</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                      <Input
                        id="gms-name"
                        name="name"
                        required
                        placeholder="Full name"
                        className="pl-10 input-glass-light"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gms-business">
                      Gym / studio name *
                    </Label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                      <Input
                        id="gms-business"
                        name="business"
                        required
                        placeholder="e.g. Bondi Strength Co."
                        className="pl-10 input-glass-light"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gms-suburb">
                      Sydney suburb *
                    </Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                      <Input
                        id="gms-suburb"
                        name="suburb"
                        required
                        placeholder="e.g. Bondi, Parramatta, Inner West"
                        className="pl-10 input-glass-light"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gms-website">
                      Website{" "}
                      <span className="text-muted-foreground font-normal">
                        (optional)
                      </span>
                    </Label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                      <Input
                        id="gms-website"
                        name="website"
                        type="url"
                        placeholder="https://"
                        className="pl-10 input-glass-light"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gms-phone">Phone *</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                      <Input
                        id="gms-phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="04XX XXX XXX"
                        className="pl-10 input-glass-light"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gms-help">
                      What do you need help with?{" "}
                      <span className="text-muted-foreground font-normal">
                        (optional)
                      </span>
                    </Label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground z-10" />
                      <Textarea
                        id="gms-help"
                        name="message"
                        rows={4}
                        placeholder="Local 3-pack ranking, ads not converting, off-peak classes empty, etc."
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

export default GymMarketingSydney;
