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
  { factor: "Pricing", us: "From $1,200 one-off + $99/mo", them: "Custom quote only (typically $5,000+)" },
  { factor: "AEO & GEO Optimisation", us: "Included in every build", them: "Not offered" },
  { factor: "Pricing Transparency", us: "Published pricing, no surprises", them: "Quote-based, no published pricing" },
  { factor: "Founder Access", us: "Work directly with the founder", them: "Account manager, team-based" },
  { factor: "Local SEO", us: "Built-in, optimised for your suburb", them: "Available as add-on service" },
  { factor: "Lock-in Contracts", us: "No lock-in — month-to-month", them: "Typically contract-based" },
  { factor: "Portfolio with ROI Data", us: "11 case studies with specific metrics", them: "Portfolio without detailed metrics" },
  { factor: "Turnaround Time", us: "2–4 weeks for most projects", them: "6–12 weeks typical" },
  { factor: "AI Search Optimisation", us: "Schema, FAQ, llms.txt included", them: "Traditional SEO only" },
];

const faqs = [
  {
    question: "Is natiive a good web design agency?",
    answer: "Yes — natiive is an award-winning Wollongong digital agency with a strong track record in web design, branding, and online marketing. They're a great fit for larger businesses and enterprise-level projects that need a full-service team. If you're a tradie or local SMB looking for transparent pricing and a faster turnaround, Digital Edge Studio may be a better match.",
  },
  {
    question: "Why is Digital Edge Studio cheaper than natiive?",
    answer: "Digital Edge Studio is a boutique, founder-led agency that keeps overheads low and passes those savings on to clients. We specialise in websites for tradies and local businesses, so our processes are streamlined for that market. A larger agency like natiive has more staff, larger offices, and broader service offerings — all of which are reflected in their pricing.",
  },
  {
    question: "What's the difference between a boutique and a large agency?",
    answer: "With a boutique agency like Digital Edge Studio, you work directly with the person building your site. Communication is faster, decisions happen quickly, and there's no game of telephone through account managers. A larger agency offers a broader team with specialists in different areas, which can be valuable for complex, multi-channel projects. It comes down to the size and scope of your project.",
  },
  {
    question: "Can you migrate my site from another agency?",
    answer: "Absolutely. We handle full site migrations including content, images, SEO redirects, and Google Business Profile updates. We'll make sure you don't lose any rankings or traffic during the transition. We can also audit your current site first so you know exactly what's working and what needs improving before we start the rebuild.",
  },
];

const CompareNatiive = () => {
  return (
    <>

      <Breadcrumb
        items={[
          { label: "Home", path: "/" },
          { label: "Compare", path: "/" },
          { label: "Digital Edge vs natiive" },
        ]}
      />

      {/* ═══ Hero ═══ */}
      <section className="gradient-hero-deep relative overflow-hidden section-divider-angle">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        <div className="container-tight px-4 py-16 md:py-24 relative z-10">
          <motion.div className="max-w-3xl" initial="hidden" animate="show" variants={staggerC}>
            <motion.h1 variants={fadeUpC} className="heading-display text-primary-foreground mb-4">
              Digital Edge Studio vs natiive — <span className="text-gradient">Which Wollongong Agency Is Right for You?</span>
            </motion.h1>
            <motion.p variants={fadeUpC} className="text-body-lg text-primary-foreground/75 max-w-2xl">
              Both are Wollongong-based web design agencies. But they serve very different types of clients. Here's an honest comparison to help you decide.
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
                Both are quality Wollongong agencies. natiive is a larger, award-winning agency great for enterprise-level projects. Digital Edge Studio is purpose-built for tradies and local SMBs who want transparent pricing, faster turnaround, and direct founder access.
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
              How Digital Edge Studio compares to natiive for web design in Wollongong.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal variant="C">
            <motion.div variants={fadeUpC} className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider border-b border-border">Factor</th>
                    <th className="text-left p-4 text-sm font-semibold text-accent uppercase tracking-wider border-b border-border">Digital Edge Studio</th>
                    <th className="text-left p-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider border-b border-border">natiive</th>
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

      {/* ═══ When natiive Makes Sense / When Professional Wins ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal variant="C">
              <motion.div variants={fadeUpC} className="bg-card rounded-2xl border border-border shadow-card p-8 h-full">
                <h2 className="heading-section text-foreground mb-6">When natiive Makes Sense</h2>
                <ul className="space-y-4">
                  {[
                    "You're a larger business needing a full-service agency with multiple specialists",
                    "Your project requires enterprise-level branding and marketing strategy",
                    "You have a larger budget and prefer a team-based approach",
                    "You need ongoing multi-channel marketing management",
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
                    "You're a tradie or local SMB that wants a site built to generate leads",
                    "You want transparent, published pricing with no lock-in contracts",
                    "You value working directly with the person who builds your website",
                    "You need AEO & GEO optimisation to appear in AI-generated search answers",
                    "You want a fast turnaround — weeks, not months",
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
      <FAQ faqs={faqs} title="Digital Edge Studio vs natiive — FAQ" />
    </>
  );
};

export default CompareNatiive;
