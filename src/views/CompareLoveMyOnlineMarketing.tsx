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
  { factor: "Pricing", us: "From $1,200 one-off + $99/mo", them: "Custom quote only (typically $3,500+)" },
  { factor: "AEO & GEO Optimisation", us: "Included in every build", them: "AI-ready mentioned, unclear scope" },
  { factor: "Pricing Transparency", us: "Published pricing on website", them: "No published pricing" },
  { factor: "Founder Access", us: "Work directly with the founder", them: "Team-based approach" },
  { factor: "Local SEO", us: "Built-in local SEO + Google Business Profile", them: "SEO services available" },
  { factor: "Lock-in Contracts", us: "No lock-in — cancel anytime", them: "Contract terms vary" },
  { factor: "Case Studies with Metrics", us: "11 case studies with ROI data", them: "Portfolio available" },
  { factor: "Turnaround Time", us: "2–4 weeks typical", them: "Timeline varies by project" },
  { factor: "AI Search Optimisation", us: "Schema, FAQ, structured data standard", them: "AI-ready features advertised" },
];

const faqs = [
  {
    question: "Is Love My Online Marketing a good agency?",
    answer: "Yes — Love My Online Marketing is an established, award-winning Wollongong agency with a solid reputation for web design and digital marketing. They've been serving the Illawarra region for years and have a strong portfolio. If you're looking for a specialist agency focused on tradies and local SMBs with transparent pricing and AEO/GEO included as standard, Digital Edge Studio may be a better fit.",
  },
  {
    question: "Why choose a smaller agency over a larger one?",
    answer: "A smaller, boutique agency like Digital Edge Studio offers direct access to the founder who designs and builds your site. There's no account manager acting as a go-between, which means faster communication, quicker turnaround, and a more personalised experience. Larger agencies bring more resources and broader teams, which can be valuable for complex, multi-channel campaigns.",
  },
  {
    question: "Do you offer the same services?",
    answer: "Both agencies offer web design and SEO services. Where Digital Edge Studio differs is in our focus: we specialise in websites for tradies and local businesses, with AEO & GEO optimisation, structured data, and AI search readiness included in every build as standard — not as add-ons. Our pricing is also published and transparent, so you know exactly what you're paying before you commit.",
  },
  {
    question: "What does AI-ready actually mean?",
    answer: "Many agencies use the term 'AI-ready' without clearly defining it. At Digital Edge Studio, AI search optimisation means your site includes structured data (schema markup), FAQ schema, an llms.txt file, and content structured to appear in AI-generated answers from tools like ChatGPT, Gemini, and Perplexity. This is called AEO (Answer Engine Optimisation) and GEO (Generative Engine Optimisation), and it's included in every build we deliver.",
  },
];

const CompareLoveMyOnlineMarketing = () => {
  return (
    <>

      <Breadcrumb
        items={[
          { label: "Home", path: "/" },
          { label: "Compare" },
          { label: "Digital Edge vs Love My Online Marketing" },
        ]}
      />

      {/* ═══ Hero ═══ */}
      <section className="gradient-hero-deep relative overflow-hidden section-divider-angle">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        <div className="container-tight px-4 py-16 md:py-24 relative z-10">
          <motion.div className="max-w-3xl" initial="hidden" animate="show" variants={staggerC}>
            <motion.h1 variants={fadeUpC} className="heading-display text-primary-foreground mb-4">
              Digital Edge Studio vs Love My Online Marketing — <span className="text-gradient">An Honest Comparison</span>
            </motion.h1>
            <motion.p variants={fadeUpC} className="text-body-lg text-primary-foreground/75 max-w-2xl">
              Both are Wollongong-based web design agencies with strong reputations. But they take different approaches. Here's a fair, side-by-side look to help you choose.
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
                Love My Online Marketing is an established, award-winning Wollongong agency with a strong reputation. Digital Edge Studio is a newer, specialist agency focused on tradies and local SMBs with transparent pricing, AEO/GEO included in every build, and direct access to the founder who builds your site.
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
              How Digital Edge Studio compares to Love My Online Marketing for web design in Wollongong.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal variant="C">
            <motion.div variants={fadeUpC} className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider border-b border-border">Factor</th>
                    <th className="text-left p-4 text-sm font-semibold text-accent uppercase tracking-wider border-b border-border">Digital Edge Studio</th>
                    <th className="text-left p-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider border-b border-border">Love My Online Marketing</th>
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

      {/* ═══ When LMOM Makes Sense / When Digital Edge Wins ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal variant="C">
              <motion.div variants={fadeUpC} className="bg-card rounded-2xl border border-border shadow-card p-8 h-full">
                <h2 className="heading-section text-foreground mb-6">When Love My Online Marketing Makes Sense</h2>
                <ul className="space-y-4">
                  {[
                    "You want an established agency with a long track record in the Illawarra",
                    "Your project requires a team-based approach with multiple specialists",
                    "You're looking for a broader range of digital marketing services",
                    "You prefer working with a well-known, award-winning brand",
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
                    "You're a tradie or local SMB that needs a site built to generate leads",
                    "You want published, transparent pricing with no lock-in contracts",
                    "You value direct access to the founder who designs and builds your site",
                    "You need AEO & GEO optimisation included as standard, not as an add-on",
                    "You want proven ROI — 11 case studies with specific performance metrics",
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
              Want to See the Difference?
            </motion.h2>
            <motion.p variants={fadeUpC} className="text-body-lg text-white/60 max-w-2xl mx-auto mb-10">
              Get a free, no-obligation quote and see how a specialist-built website can grow your business.
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
      <FAQ faqs={faqs} title="Digital Edge Studio vs Love My Online Marketing — FAQ" />
    </>
  );
};

export default CompareLoveMyOnlineMarketing;
