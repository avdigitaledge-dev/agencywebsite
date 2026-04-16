"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import { ScrollReveal } from "@/components/ScrollReveal";
import { staggerC, fadeUpC } from "@/lib/animations";

/* ── Comparison data ───────────────────────────────────── */
const comparisonRows = [
  { factor: "Technology", us: "Custom Next.js — 95+ PageSpeed, built from scratch", them: "Wix templates (confirmed Wix Marketplace partner)" },
  { factor: "Year 1 Cost", us: "$1,200 one-off + $99/mo maintenance = $2,388", them: "$599 setup + $99/mo subscription = $1,787" },
  { factor: "3-Year Total Cost", us: "~$4,776 — and you own the site outright", them: "~$4,163 — tied to Wix, leave and you start over" },
  { factor: "Site Ownership", us: "You own everything — host anywhere, migrate anytime", them: "Locked to Wix platform — no portability" },
  { factor: "AEO & GEO Optimisation", us: "Included — schema, FAQ markup, llms.txt, AI search ready", them: "Not offered" },
  { factor: "Tradie Specialisation", us: "Purpose-built for tradies and local service businesses", them: "General small business — no trade-specific focus" },
  { factor: "Page Speed", us: "95+ PageSpeed scores, custom lightweight code", them: "Wix template bloat — limited speed control" },
  { factor: "Local SEO", us: "Suburb-level optimisation, LocalBusiness schema, GBP setup", them: "Basic Wix SEO tools" },
  { factor: "Pricing Transparency", us: "Full pricing published on our website — no surprises", them: "Partially visible — $599 setup + $99/mo" },
];

const faqs = [
  {
    question: "Is MadWeb a good web design agency?",
    answer: "Yes — MadWeb is a Wollongong-based web design agency offering reliable websites with fast turnaround. Their $599 setup fee makes them accessible for businesses on a tight budget. The trade-off is that their sites are built on Wix, which limits page speed, SEO flexibility, and long-term ownership. If you want a custom-coded site you own outright — with AEO/GEO and tradie-specific design included — Digital Edge Studio is the better fit.",
  },
  {
    question: "Why is Digital Edge Studio more expensive upfront than MadWeb?",
    answer: "MadWeb's $599 setup is lower, but it locks you into a Wix subscription you don't own. Over three years, MadWeb costs roughly $4,163 and you cannot take your site with you. Digital Edge costs roughly $4,776 over three years, but you get a custom Next.js site with 95+ PageSpeed scores, AEO/GEO optimisation, and full ownership. The difference is about $600 for a significantly better long-term asset.",
  },
  {
    question: "What is wrong with Wix for a business website?",
    answer: "Wix works for basic brochure sites, but it has well-documented limitations for business performance: bloated code that hurts page speed, limited technical SEO controls, restricted schema markup options, and no ability to take your site elsewhere if you leave. For a tradie or small business competing in local search, these limitations cost real leads over time.",
  },
  {
    question: "Can you migrate my site from Wix or MadWeb?",
    answer: "Absolutely. We handle full migrations including content, images, SEO redirects, and Google Business Profile updates. Many of our clients have come from Wix-based sites and seen immediate improvements in PageSpeed scores and search rankings after migrating to a custom-coded build.",
  },
];

const CompareMadweb = () => {
  return (
    <>

      <Breadcrumb
        items={[
          { label: "Home", path: "/" },
          { label: "Compare" },
          { label: "Digital Edge vs MadWeb" },
        ]}
      />

      {/* ═══ Hero ═══ */}
      <section className="gradient-hero-deep relative overflow-hidden section-divider-angle">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        <div className="container-tight px-4 py-16 md:py-24 relative z-10">
          <motion.div className="max-w-3xl" initial="hidden" animate="show" variants={staggerC}>
            <motion.h1 variants={fadeUpC} className="heading-display text-primary-foreground mb-4">
              Digital Edge Studio vs MadWeb — <span className="text-gradient">Custom Code vs Wix Templates</span>
            </motion.h1>
            <motion.p variants={fadeUpC} className="text-body-lg text-primary-foreground/75 max-w-2xl">
              Both are Wollongong web designers targeting small businesses. But the technology, pricing model, and long-term value are very different. Here&apos;s an honest side-by-side.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══ Quick Verdict ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight max-w-3xl">
          <ScrollReveal variant="C">
            <motion.div variants={fadeUpC} className="bg-card rounded-2xl border border-accent/20 shadow-card p-8 card-premium gradient-mesh">
              <h2 className="heading-section text-foreground mb-4">The Quick Verdict</h2>
              <p className="text-body-lg text-muted-foreground">
                MadWeb offers a low entry point with fast turnaround on Wix — a reasonable choice if upfront budget is the only factor. Digital Edge Studio builds custom Next.js sites you actually own, with 95+ PageSpeed scores, tradie specialisation, and AEO/GEO included. MadWeb is cheaper in year one; Digital Edge is the better three-year investment.
              </p>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Comparison Table ═══ */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight">
          <ScrollReveal variant="C" className="text-center mb-12">
            <motion.h2 variants={fadeUpC} className="heading-section text-foreground mb-4">
              Side-by-Side <span className="text-gradient">Comparison</span>
            </motion.h2>
            <motion.p variants={fadeUpC} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              How Digital Edge Studio compares to MadWeb for web design in Wollongong.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal variant="C">
            <motion.div variants={fadeUpC} className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider border-b border-border">Factor</th>
                    <th className="text-left p-4 text-sm font-semibold text-accent uppercase tracking-wider border-b border-border">Digital Edge Studio</th>
                    <th className="text-left p-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider border-b border-border">MadWeb</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.factor} className={i % 2 === 0 ? "bg-card" : "bg-background"}>
                      <td className="p-4 font-medium text-foreground border-b border-border">{row.factor}</td>
                      <td className="p-4 border-b border-border">
                        <span className="flex items-start gap-2 text-foreground">
                          <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          {row.us}
                        </span>
                      </td>
                      <td className="p-4 border-b border-border">
                        <span className="flex items-start gap-2 text-muted-foreground">
                          <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                          {row.them}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ When MadWeb Makes Sense / When Digital Edge Wins ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal variant="C">
              <motion.div variants={fadeUpC} className="bg-card rounded-2xl border border-border shadow-card p-8 h-full">
                <h2 className="heading-section text-foreground mb-6">When MadWeb Makes Sense</h2>
                <ul className="space-y-4">
                  {[
                    "You need a basic site up fast and upfront budget is very tight",
                    "You're comfortable with a Wix-hosted site you don't own outright",
                    "You don't need tradie-specific design or AI search optimisation",
                    "A lower setup cost matters more than long-term performance or ownership",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal variant="C">
              <motion.div variants={fadeUpC} className="bg-card rounded-2xl border border-accent/20 shadow-card p-8 h-full">
                <h2 className="heading-section text-foreground mb-6">When Digital Edge Studio Wins</h2>
                <ul className="space-y-4">
                  {[
                    "You want a custom-coded site scoring 95+ on Google PageSpeed",
                    "You want to own your website — not rent it on a platform",
                    "You're a tradie or local service business and need a site built to generate leads",
                    "You need AEO and GEO so AI tools like ChatGPT recommend your business",
                    "You want transparent one-time pricing with no platform lock-in",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-foreground">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="hero-orb hero-orb-1" style={{ opacity: 0.3 }} />
          <div className="hero-orb hero-orb-2" style={{ opacity: 0.2 }} />
        </div>
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 rotate-180">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,60 Q600,-20 1200,60 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
        <div className="container-tight px-4 py-24 text-center relative z-10">
          <ScrollReveal variant="C">
            <motion.h2 variants={fadeUpC} className="heading-section text-white mb-5">
              Ready to See What We Can Do?
            </motion.h2>
            <motion.p variants={fadeUpC} className="text-body-lg text-white/60 max-w-2xl mx-auto mb-10">
              Get a free, no-obligation quote and see how a purpose-built website can grow your business.
            </motion.p>
            <motion.div variants={fadeUpC} className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="hero" size="lg" className="btn-shimmer" asChild>
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link href="/free-website-review">Free Website Review</Link>
              </Button>
            </motion.div>
            <motion.div variants={fadeUpC} className="flex flex-wrap justify-center gap-6 mt-8">
              <Link href="/pricing" className="text-white/70 hover:text-white text-sm underline underline-offset-4 transition-colors">View Pricing</Link>
              <Link href="/portfolio" className="text-white/70 hover:text-white text-sm underline underline-offset-4 transition-colors">See Our Work</Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <FAQ faqs={faqs} title="Digital Edge Studio vs MadWeb — FAQ" />
    </>
  );
};

export default CompareMadweb;
