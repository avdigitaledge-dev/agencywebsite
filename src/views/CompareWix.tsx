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
  { factor: "Monthly Cost", us: "From $1,200 one-off + $99/mo", them: "$17–$159/mo" },
  { factor: "Custom Design", us: "100% custom, conversion-focused", them: "Template-based, limited customisation" },
  { factor: "Local SEO", us: "Built-in, optimised for your area", them: "Basic, plugin-dependent" },
  { factor: "AEO & GEO", us: "Included", them: "Not available" },
  { factor: "Page Speed", us: "Optimised for Core Web Vitals", them: "Often slow, bloated code" },
  { factor: "Mobile Performance", us: "Mobile-first design", them: "Responsive but not optimised" },
  { factor: "Ongoing Support", us: "Dedicated support & updates", them: "Self-service, community forums" },
  { factor: "Ownership", us: "You own everything", them: "Locked to Wix platform" },
  { factor: "Google Ranking Potential", us: "High  — built for SEO", them: "Limited  — template constraints" },
];

const faqs = [
  {
    question: "Is Wix really free to use?",
    answer: "Wix offers a free tier, but it places Wix branding on your site, gives you a Wix subdomain, and limits features. To run a serious business website you'll need a paid plan ($17–$159/mo), plus premium apps, a custom domain, and potentially an email provider. The costs add up quickly and you still won't get the SEO or conversion optimisation a professional build includes.",
  },
  {
    question: "Can I rank on Google with a Wix website?",
    answer: "It's possible to rank for very low-competition keywords, but Wix sites generally struggle with page speed, bloated code, and limited technical SEO controls. A professionally built website gives you clean code, fast load times, schema markup, and a local SEO strategy  — all of which Google rewards with higher rankings.",
  },
  {
    question: "What if I've already built a Wix site?",
    answer: "No problem. We can audit your existing Wix site for free and show you exactly where it's losing traffic and leads. If a migration makes sense, we'll handle the entire process  — content, redirects, SEO  — so you don't lose any rankings you've already earned.",
  },
  {
    question: "Why is a professional website more expensive than Wix?",
    answer: "With Wix you're paying for a tool. With a professional web designer you're paying for a strategy. We research your competitors, plan your site architecture for SEO, write conversion-focused copy, and build a site engineered to generate leads. The ROI from a professional site typically pays for itself within the first few months through new customers.",
  },
];

const CompareWix = () => {
  return (
    <>

      <Breadcrumb
        items={[
          { label: "Home", path: "/" },
          { label: "Compare", path: "/" },
          { label: "Wix vs Professional Web Design" },
        ]}
      />

      {/* ═══ Hero ═══ */}
      <section className="gradient-hero-deep relative overflow-hidden section-divider-angle">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        <div className="container-tight px-4 py-16 md:py-24 relative z-10">
          <motion.div className="max-w-3xl" initial="hidden" animate="show" variants={staggerC}>
            <motion.h1 variants={fadeUpC} className="heading-display text-primary-foreground mb-4">
              Professional Web Design vs Wix — <span className="text-gradient">Which Is Right for Your Business?</span>
            </motion.h1>
            <motion.p variants={fadeUpC} className="text-body-lg text-primary-foreground/75 max-w-2xl">
              Wix lets anyone drag-and-drop a website together in an afternoon. But when your livelihood depends on being found on Google and converting visitors into paying customers, a template builder may cost you more than it saves.
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
                Wix is a solid choice for hobby sites, personal blogs, or quick event pages. But if you're a local business that needs to rank on Google, convert visitors into leads, and stand out from competitors, a professionally built website will outperform a Wix template in every metric that matters — speed, SEO, and revenue.
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
              How a custom-built website from Digital Edge Studio stacks up against a Wix site.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal variant="C">
            <motion.div variants={fadeUpC} className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider border-b border-border">Factor</th>
                    <th className="text-left p-4 text-sm font-semibold text-accent uppercase tracking-wider border-b border-border">Digital Edge Studio</th>
                    <th className="text-left p-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider border-b border-border">Wix</th>
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

      {/* ═══ When Wix Makes Sense ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal variant="C">
              <motion.div variants={fadeUpC} className="bg-card rounded-2xl border border-border shadow-card p-8 h-full">
                <h2 className="heading-section text-foreground mb-6">When Wix Makes Sense</h2>
                <ul className="space-y-4">
                  {[
                    "You're building a personal hobby site or blog with no commercial goals",
                    "You need a quick event page or temporary landing page",
                    "Your budget is extremely tight and you don't rely on online leads",
                    "You enjoy building websites yourself and have time to learn",
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
                    "You'd rather focus on your business than fighting with a website builder",
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
              Ready to Outgrow Wix?
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
      <FAQ faqs={faqs} title="Wix vs Professional Web Design — FAQ" />
    </>
  );
};

export default CompareWix;
