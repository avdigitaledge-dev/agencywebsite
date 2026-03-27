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
  { factor: "Setup Cost", us: "From $1,200 one-off", them: "$0–$200 + hours of your time" },
  { factor: "Design Quality", us: "100% custom, conversion-focused", them: "Theme-dependent, often generic" },
  { factor: "Local SEO", us: "Built-in, optimised for your area", them: "Requires plugins and SEO knowledge" },
  { factor: "AEO & GEO", us: "Included", them: "Not available without expert setup" },
  { factor: "Security", us: "Fully managed, always patched", them: "You manage updates, plugins, backups" },
  { factor: "Page Speed", us: "Optimised for Core Web Vitals", them: "Plugin bloat often kills performance" },
  { factor: "Mobile Performance", us: "Mobile-first design", them: "Theme-dependent" },
  { factor: "Ongoing Maintenance", us: "Handled for you", them: "You handle updates, backups, security" },
  { factor: "Time Investment", us: "We do the work", them: "40–100+ hours to learn and build" },
];

const faqs = [
  {
    question: "Is WordPress really free?",
    answer: "WordPress.org is free but hosting, themes, plugins, security, and your time add up. A professional build is often cheaper when you factor in your hourly rate.",
  },
  {
    question: "Can I rank on Google with a DIY WordPress site?",
    answer: "Possible but requires SEO expertise, proper plugin configuration, and ongoing optimisation. Most DIY WordPress sites lack the technical SEO that drives real rankings.",
  },
  {
    question: "What if I already have a WordPress site?",
    answer: "We can audit it for free, improve its performance and SEO, or migrate it to a professionally built solution if it makes sense.",
  },
  {
    question: "Why not just hire someone on Fiverr to build my WordPress site?",
    answer: "Cheap WordPress builds often use bloated themes, too many plugins, and skip SEO setup. You end up with a slow site that doesn't rank and needs constant maintenance.",
  },
];

const CompareWordpress = () => {
  return (
    <>

      <Breadcrumb
        items={[
          { label: "Home", path: "/" },
          { label: "Compare", path: "/" },
          { label: "WordPress DIY vs Professional Web Design" },
        ]}
      />

      {/* ═══ Hero ═══ */}
      <section className="gradient-hero-deep relative overflow-hidden section-divider-angle">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        <div className="container-tight px-4 py-16 md:py-24 relative z-10">
          <motion.div className="max-w-3xl" initial="hidden" animate="show" variants={staggerC}>
            <motion.h1 variants={fadeUpC} className="heading-display text-primary-foreground mb-4">
              Professional Web Design vs WordPress DIY — <span className="text-gradient">Which Is Right for Your Business?</span>
            </motion.h1>
            <motion.p variants={fadeUpC} className="text-body-lg text-primary-foreground/75 max-w-2xl">
              WordPress powers millions of websites, but self-managing one demands technical knowledge, constant maintenance, and SEO expertise most small business owners simply don't have time for.
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
                WordPress is powerful but self-managing it requires technical knowledge, ongoing maintenance, and SEO expertise most small business owners don't have time for. A professionally built site delivers better results with zero hassle.
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
              How a custom-built website from Digital Edge Studio stacks up against a DIY WordPress site.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal variant="C">
            <motion.div variants={fadeUpC} className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider border-b border-border">Factor</th>
                    <th className="text-left p-4 text-sm font-semibold text-accent uppercase tracking-wider border-b border-border">Digital Edge Studio</th>
                    <th className="text-left p-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider border-b border-border">WordPress DIY</th>
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

      {/* ═══ When WordPress DIY Makes Sense / When Professional Wins ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal variant="C">
              <motion.div variants={fadeUpC} className="bg-card rounded-2xl border border-border shadow-card p-8 h-full">
                <h2 className="heading-section text-foreground mb-6">When WordPress DIY Makes Sense</h2>
                <ul className="space-y-4">
                  {[
                    "You enjoy building websites and have IT skills",
                    "You have time to learn WordPress, themes, and plugins",
                    "Your budget is extremely tight",
                    "You have time to maintain and update regularly",
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
                <h2 className="heading-section text-foreground mb-6">When Professional Web Design Wins</h2>
                <ul className="space-y-4">
                  {[
                    "Your business depends on generating leads and phone calls online",
                    "You want to rank in local Google search and Google Maps",
                    "You need a site that loads fast and converts on mobile",
                    "You want AEO & GEO optimisation to appear in AI-generated answers",
                    "You'd rather not deal with plugin updates, security patches, and broken themes",
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
              Ready to Skip the WordPress Headaches?
            </motion.h2>
            <motion.p variants={fadeUpC} className="text-body-lg text-white/60 max-w-2xl mx-auto mb-10">
              Get a free, no-obligation quote and see what a professional website can do for your business.
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
      <FAQ faqs={faqs} title="WordPress DIY vs Professional Web Design — FAQ" />
    </>
  );
};

export default CompareWordpress;
