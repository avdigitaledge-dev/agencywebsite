"use client";

/**
 * GoogleAdsForGyms — vertical-specific landing page for gym / PT studio
 * owners who want Google Ads (search + Performance Max) managed by someone
 * who understands fitness conversion paths (trial bookings, call tracking).
 *
 * Structure mirrors /gym-marketing but focused entirely on paid search:
 * no GBP, no content marketing chatter — just ad-account problems, a
 * 4-week Google Ads rebuild, and a CPA-focused results table.
 *
 * Reuses CalendlyEmbed + scroll-depth + Formspree backup form pattern
 * from GymMarketing.tsx. No new tokens, components, or fonts.
 */

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Send,
  User,
  Phone,
  Building2,
  Globe,
  MessageSquare,
  Search,
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
        trackEvent("calendly_book", { location: "google_ads_for_gyms_lp" });
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
          trackEvent(`scroll_${m}`, { page: "google_ads_for_gyms_lp" });
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
};

const faqs = [
  {
    question: "Do you manage the ad spend, or do I pay Google directly?",
    answer:
      "You pay Google directly. We never mark up ad spend or take a percentage of it. The ad account stays in your name, with your card on file, and you can see every dollar in real-time inside Google Ads.",
  },
  {
    question: "What ad spend do I need to start?",
    answer:
      "Minimum $40/day ($1,200/month) for search ads to have enough data to optimise inside 30 days. Below that, the algorithm doesn't get enough conversion signals to learn, and you're paying for guesses. If you're not ready for $1,200/month in ad spend, organic and referral channels are a better fit first.",
  },
  {
    question: "How is this different from your generic Google Ads service?",
    answer:
      "Our general Google Ads service at /services/google-ads works for tradies, restaurants, and service businesses. This is built specifically for gyms — the conversion events (free trial, class pass, membership enquiry), the negative keyword lists (online coaching, home gym equipment), and the landing page patterns are all gym-specific.",
  },
  {
    question: "Will you also run Meta Ads (Facebook and Instagram)?",
    answer:
      "This specific service is Google Ads only. Most gyms we work with get better trial-cost-per-acquisition on Google than on Meta — because the intent on a \"gym near me\" search is higher than on a scrolling feed. If you want Meta added, we can scope it into the broader /gym-marketing retainer.",
  },
  {
    question: "How long before I see results?",
    answer:
      "Ad performance data inside the first 10–14 days. Meaningful conversion volume from day 21 onwards once the campaigns have enough conversion data to optimise. If enquiries haven't measurably increased by day 60, the next month is free while we fix the root cause.",
  },
  {
    question: "Can I stop at any time?",
    answer:
      "Yes — month-to-month after the first 30 days. The ad account, conversion tracking, and landing pages stay in your name. If you hire someone else later, they inherit a working setup instead of starting from scratch.",
  },
];

const problems: Array<{ headline: string; body: string }> = [
  {
    headline:
      "Your last agency optimised for clicks, not trial bookings.",
    body: "They reported CTR and impression share while you never saw the actual cost per booked trial. That's because nobody wired form fills, call tracking, or booking-page visits to Google Ads as conversion events.",
  },
  {
    headline: "Your ads are spending on branded searches and online coaches.",
    body: "Without tight match-type control and a 300-line negative keyword list (home gym, online coaching, gym equipment, \"free\"), you're paying $4–$9/click to show your ad to people who'll never walk through your door.",
  },
  {
    headline: "Ad clicks land on your homepage, not a trial-specific page.",
    body: "The headline someone clicked doesn't match what they see. They read your \"welcome to our family\" copy, can't find the trial offer, and bounce. Ad spend wasted at the last step of the funnel.",
  },
];

const weeks: Array<{ label: string; body: string }> = [
  {
    label: "WEEK 1",
    body: "Full ad account audit (past 90 days), GA4 + GTM conversion tracking rebuild tied to trial form fills, phone calls, and booking-page visits. Loom walkthrough of what's broken and why.",
  },
  {
    label: "WEEK 2",
    body: "New campaign structure: Search (exact + phrase match on high-intent gym terms), branded defence, and a tightly-scoped Performance Max for fitness. Negative keyword list installed (~300 terms).",
  },
  {
    label: "WEEK 3",
    body: "Trial-specific landing page built (or existing page rebuilt) — one clear offer, one form, trust signals, mobile-first. Ad copy matches the landing page headline exactly.",
  },
  {
    label: "WEEK 4",
    body: "Campaigns launched at controlled daily budget, first optimisation pass on low-intent keywords and underperforming ad groups. Weekly scorecard report starts.",
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
    label: "Cost per enquiry",
    descriptor: "Ad spend ÷ tracked conversions",
    before: "$112",
    after: "$31",
    delta: "−72%",
  },
  {
    label: "Monthly booked trials",
    descriptor: "Actually scheduled, not just clicks",
    before: "7",
    after: "34",
    delta: "+386%",
  },
  {
    label: "Conversion rate",
    descriptor: "Click → trial booking",
    before: "1.4%",
    after: "6.2%",
    delta: "+343%",
  },
  {
    label: "Wasted spend",
    descriptor: "Clicks from irrelevant keywords",
    before: "$380/wk",
    after: "$24/wk",
    delta: "−94%",
  },
];

const GoogleAdsForGyms = () => {
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
          form_name: "google_ads_for_gyms_backup",
          location: "google_ads_for_gyms_lp",
        });
        trackEvent("generate_lead", {
          form_name: "google_ads_for_gyms_backup",
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
    name: "Google Ads Management for Gyms & Fitness Businesses",
    description:
      "Google Ads management built specifically for Australian gyms, PT studios, CrossFit boxes, and F45 operators. Conversion-tracked trials, trial-specific landing pages, no mark-up on ad spend. Month-to-month after initial 30 days.",
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
          { label: "Google Ads for Gyms" },
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
              <Search className="w-4 h-4" />
              <span>Google Ads &mdash; Australian Gyms Only</span>
            </motion.div>

            <motion.h1
              variants={fadeUpB}
              className="heading-display text-primary-foreground mb-5"
            >
              Google Ads for gyms that actually fill trial slots &mdash; not
              just inflate your click count.
            </motion.h1>

            <motion.p
              variants={fadeUpB}
              className="text-body-lg text-primary-foreground/75 max-w-2xl"
            >
              Conversion-tracked search + Performance Max, trial-specific
              landing pages, and a negative keyword list that actually stops
              you paying for online coaches and home gym equipment clicks. You
              pay Google directly &mdash; we never mark up ad spend.
            </motion.p>

            <motion.div variants={fadeUpB} className="mt-8">
              <Button
                variant="cta"
                size="lg"
                className="btn-shimmer"
                onClick={() => scrollToBook("hero")}
              >
                Book a Free Ad Account Audit
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
              <p className="text-primary-foreground/50 text-sm mt-3">
                Free 30-min call. Audit delivered before we speak.
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

      {/* ═══ 2. The three problems ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight max-w-3xl">
          <ScrollReveal variant="B" className="text-center mb-10">
            <motion.h2
              variants={fadeUpB}
              className="heading-section text-foreground"
            >
              Why most gym Google Ads quietly bleed money
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

      {/* ═══ 3. What we do — one-liner strip ═══ */}
      <section className="py-10 bg-muted border-y border-accent/20">
        <div className="container-tight text-center max-w-3xl">
          <p className="text-lg md:text-xl font-semibold text-foreground leading-snug">
            We rebuild your Google Ads account, conversion tracking, and
            landing page as one system &mdash; measured in booked trials, not
            clicks.
          </p>
        </div>
      </section>

      {/* ═══ 4. First 30 days ═══ */}
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

      {/* ═══ 5. Sample result table ═══ */}
      <section className="section-padding bg-primary">
        <div className="container-tight max-w-4xl">
          <ScrollReveal variant="B" className="mb-6">
            <motion.div variants={fadeUpB}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-semibold uppercase tracking-wider">
                Sample 60-day result
              </span>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal variant="B" className="mb-8">
            <motion.h2
              variants={fadeUpB}
              className="heading-section text-primary-foreground mb-4"
            >
              From $112 CPA to $31 CPA in 60 days
            </motion.h2>
            <motion.p
              variants={fadeUpB}
              className="text-primary-foreground/70 text-base md:text-lg leading-relaxed max-w-2xl"
            >
              Illustrative from a single-location gym running $2,000/month ad
              spend. Below is what changed in the account once conversion
              tracking, negative keywords, and a trial-specific landing page
              were wired up properly.
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
                <div className="col-span-3 text-right">After 60 days</div>
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
                      After 60 days
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

      {/* ═══ 6. Soft pitch to /gym-marketing retainer ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight max-w-3xl">
          <ScrollReveal variant="B" className="text-center mb-6">
            <motion.h2
              variants={fadeUpB}
              className="heading-section text-foreground mb-4"
            >
              Just want Google Ads? Or the full system?
            </motion.h2>
            <motion.p
              variants={fadeUpB}
              className="text-body-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Some gym owners just want the ad account rebuilt and handed back.
              Others want Local SEO, Google Business Profile, and ongoing
              content sitting alongside the ads. Both are fine &mdash; pick the
              one that fits where you are right now.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal variant="B" className="grid md:grid-cols-2 gap-6 mt-10">
            <motion.div
              variants={fadeUpB}
              className="bg-card rounded-2xl border border-border p-7 shadow-card"
            >
              <p className="text-xs font-bold tracking-widest text-accent mb-3">
                GOOGLE ADS ONLY
              </p>
              <h3 className="heading-card text-foreground mb-3">
                This page &mdash; Google Ads for Gyms
              </h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                Account rebuild, conversion tracking, trial landing page,
                ongoing weekly optimisation. Best if you already rank well
                locally and just want more paid trial bookings.
              </p>
              <Button
                variant="default"
                size="default"
                onClick={() => scrollToBook("google_ads_only_card")}
              >
                Book Google Ads audit
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUpB}
              className="bg-card rounded-2xl border-2 border-accent p-7 shadow-card"
            >
              <p className="text-xs font-bold tracking-widest text-accent mb-3">
                FULL SYSTEM
              </p>
              <h3 className="heading-card text-foreground mb-3">
                Local SEO + Google Ads retainer
              </h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                Everything on this page plus Google Business Profile rebuild,
                4 new location/service pages per month, and ongoing SEO. Best
                if you&rsquo;re stuck at position 5&ndash;8 in the local
                3-pack.
              </p>
              <Button variant="cta" size="default" asChild>
                <Link href="/gym-marketing">
                  See the full /gym-marketing service
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ 7. FAQ ═══ */}
      <FAQ faqs={faqs} title="Common Questions" />

      {/* ═══ 8. Booking ═══ */}
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
              Book a Free 30-min Ad Audit
            </motion.h2>
            <motion.p
              variants={fadeUpB}
              className="text-body-lg text-muted-foreground max-w-2xl mx-auto"
            >
              I&rsquo;ll pull your last 90 days of Google Ads data before the
              call and walk you through exactly where spend is leaking. No
              pitch unless you ask for one.
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
                  Tell us a bit about your gym and we&rsquo;ll reply within 24
                  hours with a time.
                </p>
                <form onSubmit={handleBackupSubmit} className="space-y-4">
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Google Ads for Gyms enquiry (/google-ads-for-gyms)"
                  />
                  <input
                    type="hidden"
                    name="source"
                    value="google_ads_for_gyms_lp"
                  />

                  <div className="space-y-2">
                    <Label htmlFor="ga-name">Your name *</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                      <Input
                        id="ga-name"
                        name="name"
                        required
                        placeholder="Full name"
                        className="pl-10 input-glass-light"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ga-business">Business name *</Label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                      <Input
                        id="ga-business"
                        name="business"
                        required
                        placeholder="Gym / studio name"
                        className="pl-10 input-glass-light"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ga-website">
                      Website{" "}
                      <span className="text-muted-foreground font-normal">
                        (optional)
                      </span>
                    </Label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                      <Input
                        id="ga-website"
                        name="website"
                        type="url"
                        placeholder="https://"
                        className="pl-10 input-glass-light"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ga-phone">Phone *</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                      <Input
                        id="ga-phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="04XX XXX XXX"
                        className="pl-10 input-glass-light"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ga-help">
                      Current monthly ad spend &amp; issue{" "}
                      <span className="text-muted-foreground font-normal">
                        (optional)
                      </span>
                    </Label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground z-10" />
                      <Textarea
                        id="ga-help"
                        name="message"
                        rows={4}
                        placeholder="e.g. $2,500/mo on Google Ads, can't tell how many trials we're booking from it"
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

export default GoogleAdsForGyms;
