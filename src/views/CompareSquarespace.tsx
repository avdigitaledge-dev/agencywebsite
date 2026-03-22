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
  { factor: "Monthly Cost", us: "From $1,200 one-off + $99/mo", them: "$16–$49/mo" },
  { factor: "Custom Design", us: "100% custom, conversion-focused", them: "Beautiful templates, limited flexibility" },
  { factor: "Local SEO", us: "Built-in, optimised for your area", them: "Basic built-in SEO tools" },
  { factor: "AEO & GEO", us: "Included", them: "Not available" },
  { factor: "Page Speed", us: "Optimised for Core Web Vitals", them: "Inconsistent, heavy page weight" },
  { factor: "Mobile Performance", us: "Mobile-first design", them: "Responsive but template-dependent" },
  { factor: "Lead Generation", us: "Conversion-optimised forms, CTAs & funnels", them: "Basic forms, no conversion strategy" },
  { factor: "Ongoing Support", us: "Dedicated support & updates", them: "Email support, self-service help centre" },
  { factor: "Ownership", us: "You own everything", them: "Locked to Squarespace platform" },
  { factor: "Google Ranking Potential", us: "High  — built for SEO", them: "Moderate  — limited technical SEO controls" },
];

const faqs = [
  {
    question: "Isn't Squarespace good enough for most businesses?",
    answer: "Squarespace produces visually appealing sites, especially for portfolios and creatives. But if your primary goal is generating leads, ranking locally on Google, or outperforming competitors in search, Squarespace's limited SEO controls, slower page speeds, and lack of conversion optimisation become real limitations. A professionally built website is designed around your business goals, not a template.",
  },
  {
    question: "Can I move my Squarespace site to a custom website?",
    answer: "Absolutely. We regularly migrate businesses from Squarespace. We'll transfer your content, set up proper 301 redirects so you don't lose any existing rankings, and rebuild the site with clean code, faster load times, and a local SEO strategy baked in from day one.",
  },
  {
    question: "Why is Squarespace cheaper than a professional website?",
    answer: "Squarespace is a self-service tool  — you're doing all the work yourself. A professional website includes competitor research, SEO strategy, conversion-focused copywriting, custom design, and ongoing support. The investment pays for itself through the leads and customers your site generates.",
  },
  {
    question: "Is Squarespace better than Wix?",
    answer: "Squarespace generally offers more polished design templates and a cleaner editing experience than Wix. However, both platforms share the same core limitations for businesses: locked-in hosting, limited SEO controls, no AEO/GEO optimisation, and template-based layouts that don't convert as well as custom-built pages.",
  },
];

const CompareSquarespace = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumb
        items={[
          { label: "Home", path: "/" },
          { label: "Compare" },
          { label: "Squarespace vs Professional Web Design" },
        ]}
      />

      {/* ═══ Hero ═══ */}
      <section className="gradient-hero-deep relative overflow-hidden section-divider-angle">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        <div className="container-tight px-4 py-16 md:py-24 relative z-10">
          <motion.div className="max-w-3xl" initial="hidden" animate="show" variants={staggerC}>
            <motion.h1 variants={fadeUpC} className="heading-display text-primary-foreground mb-4">
              Professional Web Design vs Squarespace — <span className="text-gradient">Which Delivers Results?</span>
            </motion.h1>
            <motion.p variants={fadeUpC} className="text-body-lg text-primary-foreground/75 max-w-2xl">
              Squarespace is known for beautiful templates and sleek designs. But when it comes to ranking on Google, generating leads, and growing a local business, looking good isn't enough.
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
                Squarespace excels at visual design and is a strong pick for portfolios, photographers, and creatives who need a polished online presence. But for local service businesses that rely on search traffic, phone calls, and enquiry forms, Squarespace's limited SEO controls and lack of conversion strategy leave significant revenue on the table.
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
              How a custom-built website from Digital Edge Studio compares with Squarespace.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal variant="C">
            <motion.div variants={fadeUpC} className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider border-b border-border">Factor</th>
                    <th className="text-left p-4 text-sm font-semibold text-accent uppercase tracking-wider border-b border-border">Digital Edge Studio</th>
                    <th className="text-left p-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider border-b border-border">Squarespace</th>
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

      {/* ═══ When Squarespace Makes Sense / When Professional Wins ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal variant="C">
              <motion.div variants={fadeUpC} className="bg-card rounded-2xl border border-border shadow-card p-8 h-full">
                <h2 className="heading-section text-foreground mb-6">When Squarespace Makes Sense</h2>
                <ul className="space-y-4">
                  {[
                    "You're a photographer, artist, or creative building an online portfolio",
                    "Visual design is your top priority and SEO is secondary",
                    "You don't rely on local search traffic for revenue",
                    "You're comfortable managing your own website and content",
                    "You need a simple brochure site with no lead-generation goals",
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
                    "Your business depends on phone calls, form submissions, and online enquiries",
                    "You want to dominate local search results and Google Maps",
                    "Page speed and Core Web Vitals matter to your ranking",
                    "You need AEO & GEO optimisation for AI-powered search",
                    "You want ongoing support, strategy, and a partner  — not just a tool",
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
              Ready for a Website That Actually Generates Leads?
            </motion.h2>
            <motion.p variants={fadeUpC} className="text-body-lg text-white/60 max-w-2xl mx-auto mb-10">
              Stop paying for pretty templates that don't convert. Get a free quote and see the difference a professional website makes.
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
      <FAQ faqs={faqs} title="Squarespace vs Professional Web Design — FAQ" />
    </>
  );
};

export default CompareSquarespace;
