"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calculator, Search, ArrowRight, Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import { ScrollReveal } from "@/components/ScrollReveal";
import { stagger, fadeUp } from "@/lib/animations";

const toolsSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://digitaledgestudio.com" },
    { "@type": "ListItem", "position": 2, "name": "Free Tools", "item": "https://digitaledgestudio.com/free-tools" },
  ],
};

const faqs = [
  {
    question: "Are these tools really free?",
    answer: "Yes, completely free with no hidden catches. We built them to help Australian business owners make informed decisions about their websites. You don't need to sign up or provide payment details to use them.",
  },
  {
    question: "Do I need to create an account to use the tools?",
    answer: "No account needed. You can use the Website Cost Calculator without providing any details at all. The Website Audit asks for your email so we can send you the full report, but the instant results are shown immediately.",
  },
  {
    question: "How accurate is the cost calculator?",
    answer: "The calculator provides a realistic estimate based on current Australian web design market rates. Your actual quote may vary depending on specific requirements, but it gives you a solid ballpark figure to work with.",
  },
  {
    question: "Can I use these tools for my clients?",
    answer: "Absolutely. If you're a marketing consultant, business advisor, or agency, feel free to use these tools with your clients. The website audit is particularly useful for identifying quick wins during client consultations.",
  },
];

const FreeTools = () => {
  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(toolsSchema) }} />

      <Breadcrumb items={[{ label: "Home", path: "/" }, { label: "Free Tools" }]} />

      {/* ═══ Hero ═══ */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        <div className="container-tight px-4 py-16 md:py-24 relative z-10">
          <motion.div className="max-w-3xl" initial="hidden" animate="show" variants={stagger}>
            <motion.h1 variants={fadeUp} className="heading-display text-primary-foreground mb-4">
              Free Tools for <span className="text-gradient">Your Business</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl">
              Get instant insights about your website. No signup required, no sales pitch — just useful data to help you make better decisions.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* ═══ Tool Cards ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="grid md:grid-cols-2 gap-8">
            {/* Calculator Card */}
            <motion.div variants={fadeUp}>
              <Link href="/website-cost-calculator" className="block group">
                <div className="bg-card rounded-2xl border border-border shadow-card p-8 h-full card-hover-lift">
                  <div className="w-14 h-14 rounded-xl gradient-cta flex items-center justify-center mb-6">
                    <Calculator className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <h2 className="heading-section text-foreground mb-3">Website Cost Calculator</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Find out how much a professional website costs for your business. Answer a few quick questions about your industry, features, and goals — get an instant estimate.
                  </p>
                  <ul className="space-y-2 mb-6">
                    {["Tailored to your industry", "Includes feature pricing", "Instant results — no waiting"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="text-accent font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Calculate Now <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Audit Card */}
            <motion.div variants={fadeUp}>
              <Link href="/free-website-audit" className="block group">
                <div className="bg-card rounded-2xl border border-border shadow-card p-8 h-full card-hover-lift">
                  <div className="w-14 h-14 rounded-xl gradient-cta flex items-center justify-center mb-6">
                    <Search className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <h2 className="heading-section text-foreground mb-3">Free Website Audit</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Check your site's SEO score, page speed, mobile-friendliness, and security. See exactly what's holding your website back — with specific fixes.
                  </p>
                  <ul className="space-y-2 mb-6">
                    {["SEO, speed & mobile checks", "Security assessment", "Actionable fix recommendations"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="text-accent font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Audit My Website <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Why We Built These ═══ */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight max-w-3xl">
          <ScrollReveal className="text-center">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">Why We Built These Tools</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground leading-relaxed">
              Most business owners have no idea what a website should cost or how theirs actually performs. We built these tools to give you real answers — not vague marketing speak. Whether you end up working with us or not, you'll walk away with useful information.
            </motion.p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Trust ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight max-w-3xl text-center">
          <ScrollReveal>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </motion.div>
            <motion.p variants={fadeUp} className="text-muted-foreground mb-4">
              Rated 5.0/5 on Google — trusted by 30+ local businesses across Wollongong and Sydney
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button variant="outline" asChild>
                <Link href="/reviews">
                  See What Our Clients Say <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <FAQ faqs={faqs} title="Free Tools — FAQ" />

      {/* ═══ Bottom CTA ═══ */}
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
          <ScrollReveal>
            <motion.h2 variants={fadeUp} className="heading-section text-white mb-5">
              Ready to Take the Next Step?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-white/60 max-w-2xl mx-auto mb-10">
              Used the tools and want to discuss the results? Get a free, no-obligation quote.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link href="/contact">
                  Get a Free Quote <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link href="/free-website-review">Free Website Review</Link>
              </Button>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default FreeTools;
