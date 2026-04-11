"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { stagger, fadeUp } from "@/lib/animations";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  PhoneOff,
  TrendingDown,
  UserX,
  MessageSquare,
  Calendar,
  ClipboardCheck,
  Hammer,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/FAQ";
import { Breadcrumb } from "@/components/Breadcrumb";
import { useTilt } from "@/hooks/use-effects";

// TODO: Swap the href below with the real Cal.com Lead Leak Audit booking URL once it's live.
const BOOKING_HREF = "/contact";

const PricingTiltCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { ref, style } = useTilt(5);
  return (
    <motion.div variants={fadeUp} ref={ref} style={style} className={className}>
      {children}
    </motion.div>
  );
};

const AiServiceLeadResponseEngine = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Lead Response Engine",
    description:
      "AI lead response service for home-service tradies. Replies to inbound leads in under 60 seconds via SMS and WhatsApp, qualifies the job, and books it straight into your calendar — 24/7.",
    provider: {
      "@type": "Organization",
      name: "Digital Edge Studio",
      url: "https://digitaledgestudio.com",
    },
    areaServed: ["Illawarra", "Wollongong", "Sydney", "NSW", "Australia"],
    serviceType: "AI Lead Response & Booking Automation",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Lead Response Engine — Plans",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Starter",
          priceCurrency: "AUD",
          price: "990",
          itemOffered: {
            "@type": "Service",
            name: "Lead Response Engine — Starter",
            description:
              "AI SMS responder with calendar booking for up to 200 leads per month. One-time setup $1,500 + GST.",
          },
        },
        {
          "@type": "Offer",
          name: "Growth",
          priceCurrency: "AUD",
          price: "1990",
          itemOffered: {
            "@type": "Service",
            name: "Lead Response Engine — Growth",
            description:
              "AI responder across SMS, WhatsApp and email with Google Ads management, custom landing page, and up to 500 leads per month. One-time setup $2,500 + GST.",
          },
        },
        {
          "@type": "Offer",
          name: "Scale",
          priceCurrency: "AUD",
          price: "3490",
          itemOffered: {
            "@type": "Service",
            name: "Lead Response Engine — Scale",
            description:
              "Full-stack lead engine with Meta Ads management, call tracking, monthly reporting, unlimited leads, and a dedicated account manager. One-time setup $3,500 + GST.",
          },
        },
      ],
    },
  };

  const faqs = [
    {
      question: "How is this different from just hiring a receptionist?",
      answer:
        "A receptionist costs $4,500+ a month, clocks off at 5pm, takes sick days, and can only handle one call at a time. The Lead Response Engine replies in under 60 seconds 24/7 — weekends, after hours, and public holidays — for a fraction of the cost, and it never misses a lead.",
    },
    {
      question: "What if the AI gets something wrong?",
      answer:
        "The AI is trained on your services, pricing, and service area, and it's set up to stay inside a tight lane — quote ranges, job qualification, and booking only. Anything it can't handle gets flagged to your phone straight away so you can jump in. We also review conversations weekly for the first month and tighten anything that needs work.",
    },
    {
      question: "Do I need to already be running ads?",
      answer:
        "No. The Starter plan works with whatever leads you already get — website forms, Google Business Profile, missed calls, referrals. If you want to turn the tap on harder, the Growth and Scale plans include Google Ads and Meta Ads management so we can drive more leads into the system.",
    },
    {
      question: "How long does setup take?",
      answer:
        "Five to seven business days. We learn your services, pricing, and service area, plug into your calendar and lead sources, write the conversation flow, and test everything on a real phone before it goes live.",
    },
    {
      question: "Can I try it on my own business first?",
      answer:
        "Yes — the free Lead Leak Audit is exactly that. We look at your current enquiry flow, measure how many leads are going cold, and show you what the system would look like plugged into your business. No pitch, no pressure.",
    },
    {
      question: "What if I already use GoHighLevel, ServiceM8, or Tradify?",
      answer:
        "Perfect — we plug straight into them. The Lead Response Engine sits in front of your existing tools, qualifies the job, and pushes the booking into ServiceM8, Tradify, GoHighLevel, Google Calendar, or whatever you already use. No rip-and-replace.",
    },
  ];

  const problems = [
    {
      icon: PhoneOff,
      title: "Leads go cold after 5pm",
      body:
        "A homeowner fills out your quote form at 8pm Tuesday. By the time you see it Wednesday morning, they've already called two competitors.",
    },
    {
      icon: TrendingDown,
      title: "Ad spend leaks out the bottom",
      body:
        "You're paying $2,000+/month on Google Ads, but 70% of those leads never turn into quotes because nobody replies fast enough.",
    },
    {
      icon: UserX,
      title: "Receptionists are expensive",
      body:
        "Hiring someone costs $4,500+/month and they still clock off at 5pm — missing every after-hours lead that comes in.",
    },
  ];

  const steps = [
    {
      step: "01",
      icon: MessageSquare,
      title: "Lead comes in",
      desc: "Form, Facebook ad, or missed call — it all funnels into one place.",
    },
    {
      step: "02",
      icon: Zap,
      title: "AI replies in under 60 seconds",
      desc: "Via SMS and WhatsApp, 24/7 — no sleep, no smoko, no days off.",
    },
    {
      step: "03",
      icon: ClipboardCheck,
      title: "The job gets qualified",
      desc: "Service type, location, urgency, budget — all sorted before you see it.",
    },
    {
      step: "04",
      icon: Calendar,
      title: "It books into your calendar",
      desc: "No back-and-forth, no sticky notes — straight into the diary.",
    },
    {
      step: "05",
      icon: Hammer,
      title: "You show up ready",
      desc: "Full job brief waiting on your phone when you rock up to the site.",
    },
  ];

  const plans = [
    {
      name: "Starter",
      setup: "$1,500 + GST",
      monthly: "$990",
      description: "Get your missed leads handled without the fuss.",
      features: [
        "AI responder (SMS only)",
        "Calendar booking integration",
        "Up to 200 leads/month",
        "Email support",
      ],
      featured: false,
    },
    {
      name: "Growth",
      setup: "$2,500 + GST",
      monthly: "$1,990",
      description: "The sweet spot for busy trades ready to book more work.",
      features: [
        "Everything in Starter",
        "SMS + WhatsApp + email",
        "Google Ads management",
        "Custom landing page",
        "Up to 500 leads/month",
        "Priority support",
      ],
      featured: true,
    },
    {
      name: "Scale",
      setup: "$3,500 + GST",
      monthly: "$3,490",
      description: "Full-stack lead engine for trades scaling past solo.",
      features: [
        "Everything in Growth",
        "Meta Ads management",
        "Call tracking",
        "Monthly performance reporting",
        "Unlimited leads",
        "Dedicated account manager (that's me)",
      ],
      featured: false,
    },
  ];

  const mathRows = [
    { label: "Average trade business", value: "20 leads / week" },
    { label: "Current conversion rate", value: "~30% = 6 jobs / week" },
    { label: "With Lead Response Engine", value: "~50% = 10 jobs / week" },
    { label: "Extra jobs", value: "4 / week" },
    {
      label: "Extra revenue (4 × $800 avg)",
      value: "$3,200 / week",
      highlight: true,
    },
    { label: "Cost of the system", value: "$1,990 / month" },
  ];

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
          { label: "AI Services", path: "/ai-services" },
          { label: "Lead Response Engine" },
        ]}
      />

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
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-primary-foreground/90 text-sm font-semibold mb-6"
            >
              <Zap className="w-4 h-4" />
              Flagship AI Service
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="heading-display text-primary-foreground mb-4"
            >
              Stop Losing Jobs to Slow Replies.{" "}
              <span className="text-gradient">
                Book More Trade Work on Autopilot.
              </span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-body-lg text-primary-foreground/75 max-w-2xl mb-8"
            >
              The average Illawarra tradie misses 7 out of 10 leads because they
              can't answer the phone on the tools. Our AI Lead Response Engine
              replies in under 60 seconds, qualifies the job, and books it
              straight into your calendar — 24 hours a day, 7 days a week.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* TODO: Swap href for the real Cal.com Lead Leak Audit booking URL once live. */}
              <Button variant="hero" size="lg" asChild>
                <Link href={BOOKING_HREF}>
                  Book a Free Lead Leak Audit{" "}
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#how-it-works">See How It Works</a>
              </Button>
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

      {/* ═══ Problem ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="text-center mb-14">
            <motion.h2
              variants={fadeUp}
              className="heading-section text-foreground mb-4"
            >
              The Problem Most Tradies Don't Realise They Have
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-body-lg text-muted-foreground max-w-2xl mx-auto"
            >
              You're not losing work because you're no good. You're losing it
              because you can't get to the phone in time.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
            {problems.map((p) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                className="bg-card rounded-2xl border border-border shadow-card p-8 card-hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <p.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="heading-card text-foreground mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {p.body}
                </p>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ How It Works ═══ */}
      <section
        className="gradient-hero relative overflow-hidden noise-overlay"
        id="how-it-works"
      >
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
          <ScrollReveal className="text-center mb-16">
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-semibold mb-4 backdrop-blur-md border border-white/10"
            >
              <Zap className="w-3.5 h-3.5" />
              How the Engine Works
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="heading-section text-white mb-4"
            >
              From Missed Lead to <span className="text-gradient">Booked Job</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-body-lg text-white/60 max-w-2xl mx-auto"
            >
              Five steps. No back-and-forth, no sticky notes, no leads going
              cold overnight.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 relative">
            {steps.map((item, i) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                className="relative group"
              >
                {i < steps.length - 1 && (
                  <div className="hidden lg:block timeline-line" />
                )}
                <div className="relative z-10 text-center">
                  <motion.div
                    className="w-16 h-16 rounded-2xl card-glass flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300"
                    whileHover={{
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.4 },
                    }}
                  >
                    <span className="text-white text-lg font-bold font-display">
                      {item.step}
                    </span>
                  </motion.div>
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

      {/* ═══ Pricing ═══ */}
      <section
        className="section-padding"
        style={{ background: "var(--surface-gradient)" }}
        id="pricing"
      >
        <div className="container-tight">
          <ScrollReveal className="text-center mb-14">
            <motion.h2
              variants={fadeUp}
              className="heading-section text-foreground mb-4"
            >
              Simple Pricing. Real Results.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-body-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Three plans. Pick the one that fits where your business is right
              now — you can always move up later.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {plans.map((plan) => (
              <PricingTiltCard
                key={plan.name}
                className={`relative bg-card rounded-2xl border shadow-card p-8 card-hover-lift flex flex-col ${
                  plan.featured
                    ? "border-accent ring-2 ring-accent md:-translate-y-2"
                    : "border-border"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full gradient-cta text-accent-foreground text-xs font-bold uppercase tracking-wider shadow-md whitespace-nowrap">
                      <Sparkles className="w-3.5 h-3.5" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="heading-card text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold font-display price-shimmer">
                      {plan.monthly}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      /month + GST
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-1">
                    Setup: {plan.setup}
                  </p>
                </div>
                <ul className="space-y-3 mb-8 flex-1 stagger-list">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-foreground text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {/* TODO: Swap href for the real Cal.com Lead Leak Audit booking URL once live. */}
                <Button
                  variant={plan.featured ? "cta" : "outline"}
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <Link href={BOOKING_HREF}>
                    Book My Free Audit{" "}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </PricingTiltCard>
            ))}
          </ScrollReveal>

          <ScrollReveal className="text-center mt-10">
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground text-sm"
            >
              All prices in AUD + GST. Ad spend billed separately at cost.
            </motion.p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ The Math ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="text-center mb-14">
            <motion.h2
              variants={fadeUp}
              className="heading-section text-foreground mb-4"
            >
              The Math
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-body-lg text-muted-foreground max-w-2xl mx-auto"
            >
              No fluff. Here's what an extra 20% conversion rate looks like on a
              typical Illawarra trade business.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal>
            <motion.div
              variants={fadeUp}
              className="max-w-2xl mx-auto bg-card rounded-2xl border border-border shadow-card p-8 md:p-10"
            >
              <ul className="divide-y divide-border">
                {mathRows.map((row) => (
                  <li
                    key={row.label}
                    className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
                  >
                    <span
                      className={`text-sm md:text-base ${
                        row.highlight
                          ? "text-foreground font-semibold"
                          : "text-muted-foreground"
                      }`}
                    >
                      {row.label}
                    </span>
                    <span
                      className={`text-base md:text-lg font-bold font-display tabular-nums text-right ${
                        row.highlight ? "text-accent" : "text-foreground"
                      }`}
                    >
                      {row.value}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground mt-6 leading-relaxed">
                Results vary. Numbers based on industry benchmarks for
                Illawarra trade businesses.
              </p>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Testimonials placeholder ═══ */}
      {/* TODO: Real case studies — awaiting client permission. Do not populate with fake reviews. */}
      <section className="section-padding bg-background border-t border-border">
        <div className="container-tight">
          <ScrollReveal className="text-center max-w-2xl mx-auto">
            <motion.h2
              variants={fadeUp}
              className="heading-section text-foreground mb-4"
            >
              Real Results, Real Tradies
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground"
            >
              Case studies coming soon. We're collecting permission from the
              first round of trade clients running the Lead Response Engine —
              real numbers, real names, no fluff.
            </motion.p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <FAQ faqs={faqs} title="Lead Response Engine — FAQ" />

      {/* ═══ Final CTA ═══ */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        {/* Top wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 rotate-180">
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
        <div className="container-tight px-4 py-20 text-center relative z-10">
          <ScrollReveal>
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-primary-foreground/90 text-sm font-semibold mb-6"
            >
              <Zap className="w-4 h-4" />
              Free Lead Leak Audit
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="heading-section text-primary-foreground mb-4"
            >
              Ready to Stop Leaking Jobs?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8"
            >
              Book a free 15-minute Lead Leak Audit. I'll show you exactly how
              many jobs you're losing each month and what it's costing you.
            </motion.p>
            <motion.div variants={fadeUp} className="flex justify-center">
              {/* TODO: Swap href for the real Cal.com Lead Leak Audit booking URL once live. */}
              <Button variant="hero" size="lg" asChild>
                <Link href={BOOKING_HREF}>
                  Book My Free Audit{" "}
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="text-primary-foreground/60 text-sm mt-5"
            >
              No pitch, no pressure. If it's not a fit, I'll tell you.
            </motion.p>
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
    </>
  );
};

export default AiServiceLeadResponseEngine;
