"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Search, CheckCircle2, Send, ArrowRight, FileText, AlertTriangle, AlertCircle, Info, Star, Quote } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { trackEvent } from "@/lib/utils";
import { ScrollReveal } from "@/components/ScrollReveal";
import { stagger, fadeUp } from "@/lib/animations";

const FORMSPREE_ID = "xzdjplaq";

const WebsiteReview = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: new FormData(e.target as HTMLFormElement),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        trackEvent("generate_lead", { form_name: "free_website_review" });
        (e.target as HTMLFormElement).reset();
        router.push("/contact-thank-you");
        return;
      } else {
        throw new Error("Submit failed");
      }
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please email us at enquiries@digitaledgestudio.com",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        <div className="container-tight px-4 py-16 md:py-24 relative z-10">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            <motion.h1 variants={fadeUp} className="heading-display text-primary-foreground mb-4">
              Get Your Free Website Review
            </motion.h1>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl">
              We'll personally review your website and tell you exactly why you're not ranking on Google — and what it would take to fix it. No jargon. No sales pitch.
            </motion.p>
          </motion.div>
        </div>
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* What's included */}
      <section id="review-form" className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Form */}
            <motion.div variants={fadeUp}>
              <div className="bg-card rounded-2xl border border-border shadow-card p-8">
                <h2 className="heading-card text-foreground mb-2">Request Your Free Review</h2>
                <p className="text-muted-foreground text-sm mb-4">We'll get back to you within 1 business day.</p>

                {/* Step indicator */}
                <div className="flex items-center gap-2 mb-6">
                  <div className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${step >= 1 ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"}`}>1</div>
                  <div className={`h-0.5 flex-1 rounded ${step >= 2 ? "bg-accent" : "bg-border"}`} />
                  <div className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${step >= 2 ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"}`}>2</div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <input type="hidden" name="_subject" value="Free Website Review Request" />

                  {/* Step 1: Just email + website URL */}
                  <div className={step === 1 ? "space-y-5" : "hidden"}>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" required placeholder="you@yourbusiness.com.au" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Your Website URL *</Label>
                      <Input id="website" name="website" type="url" required placeholder="https://yourbusiness.com.au" />
                    </div>
                    <Button type="submit" variant="cta" size="lg" className="w-full">
                      Next — Almost Done <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>

                  {/* Step 2: Optional name + challenge */}
                  <div className={step === 2 ? "space-y-5" : "hidden"}>
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name <span className="text-muted-foreground font-normal">(optional)</span></Label>
                      <Input id="name" name="name" placeholder="Name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="challenge">What's your biggest challenge? <span className="text-muted-foreground font-normal">(optional)</span></Label>
                      <select
                        id="challenge"
                        name="challenge"
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select one...</option>
                        <option value="not-ranking-google">Not showing up on Google</option>
                        <option value="low-enquiries">Getting visitors but no enquiries</option>
                        <option value="outdated-site">Website looks outdated</option>
                        <option value="mobile-issues">Site doesn't work well on mobile</option>
                        <option value="slow-site">Site loads too slowly</option>
                        <option value="not-sure">Not sure — just want feedback</option>
                      </select>
                    </div>
                    <div className="flex gap-3">
                      <Button type="button" variant="outline" size="lg" onClick={() => setStep(1)} className="shrink-0">
                        Back
                      </Button>
                      <Button type="submit" variant="cta" size="lg" className="w-full" disabled={loading}>
                        {loading ? "Sending..." : <>Send My Website for Review <Send className="w-4 h-4 ml-2" /></>}
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground text-center">
                      You can skip these — we only need your URL to start the review.
                    </p>
                  </div>

                  <p className="text-xs text-muted-foreground text-center">
                    Free, no obligation. We respond within 1 business day.
                  </p>
                </form>
              </div>
            </motion.div>

            {/* Testimonials + What you get */}
            <motion.div variants={fadeUp} className="space-y-8">
              {/* Testimonials */}
              <div className="bg-card rounded-2xl border border-border shadow-card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Quote className="w-5 h-5 text-accent" />
                  <h3 className="font-bold text-foreground font-display">What Our Clients Say</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { name: "James T.", biz: "Plumber, Sydney", quote: "Since Digital Edge rebuilt our website, we've had a 60% increase in phone calls from Google." },
                    { name: "Mark L.", biz: "Electrician, NSW", quote: "The local SEO work has been a game changer. We're now showing up at the top of Google Maps." },
                  ].map((t) => (
                    <div key={t.name} className="border-l-2 border-accent/30 pl-4">
                      <p className="text-sm text-muted-foreground italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                      <div className="flex items-center gap-1 mt-1.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-xs text-foreground font-medium mt-1">{t.name} — <span className="text-muted-foreground">{t.biz}</span></p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4 text-center">Rated 4.8 stars on Google</p>
              </div>

              <div>
                <h2 className="heading-section text-foreground mb-4">What We'll Check</h2>
                <p className="text-muted-foreground mb-8">
                  Our review covers the 4 areas that directly affect how many leads your website generates.
                </p>
              </div>
              {[
                {
                  icon: Search,
                  title: "Google Rankings & Local SEO",
                  desc: "Are you showing up when customers search for your trade in your suburb? We'll check your rankings, Google Business Profile setup, and local citation consistency.",
                },
                {
                  icon: CheckCircle2,
                  title: "Mobile & Speed Performance",
                  desc: "Over 70% of tradie searches happen on mobile. We'll check load speed, mobile layout, and Core Web Vitals — the factors Google uses to rank sites.",
                },
                {
                  icon: ArrowRight,
                  title: "Conversion & Lead Generation",
                  desc: "Are visitors turning into calls and enquiries? We'll review your CTAs, contact form, trust signals, and any friction stopping people from reaching out.",
                },
                {
                  icon: CheckCircle2,
                  title: "Quick Wins You Can Act On",
                  desc: "Every review ends with 3–5 specific, prioritised actions you can take immediately — whether you work with us or not.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 rounded-xl p-3 -m-1 card-hover-lift">
                  <div className="w-10 h-10 rounded-lg gradient-cta flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground font-display mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Sample Report Preview ═══ */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight">
          <ScrollReveal className="text-center mb-10">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              <FileText className="w-4 h-4" />
              Sample Report
            </motion.div>
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-3">What Your Report Looks Like</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Here's a preview of the personalised report you'll receive — with real insights tailored to your website.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal>
            <motion.div variants={fadeUp} className="bg-card rounded-2xl border border-border shadow-card overflow-hidden max-w-2xl mx-auto">
              {/* Report header */}
              <div className="gradient-hero p-6">
                <p className="text-white font-display font-bold text-lg">Website Review Report</p>
                <p className="text-white/60 text-sm">Prepared for: yourbusiness.com.au</p>
              </div>

              {/* Score summary */}
              <div className="p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-b border-border">
                {[
                  { label: "SEO Score", score: "42", color: "text-red-500" },
                  { label: "Speed Score", score: "28", color: "text-red-500" },
                  { label: "Mobile Score", score: "65", color: "text-yellow-500" },
                  { label: "Overall Grade", score: "C+", color: "text-yellow-500" },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <p className={`text-2xl font-extrabold font-display ${item.color}`}>{item.score}{item.score !== "C+" && <span className="text-sm text-muted-foreground font-normal">/100</span>}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
                  </div>
                ))}
              </div>

              {/* Sample findings */}
              <div className="p-6 space-y-3 border-b border-border">
                <p className="text-sm font-semibold text-foreground font-display mb-3">Key Findings</p>
                {[
                  { severity: "high", icon: AlertTriangle, text: "Missing meta descriptions on 8 pages", color: "text-red-500 bg-red-500/10" },
                  { severity: "high", icon: AlertCircle, text: "Page load time 4.2s (should be under 2.5s)", color: "text-red-500 bg-red-500/10" },
                  { severity: "medium", icon: Info, text: "No Google Business Profile linked", color: "text-yellow-500 bg-yellow-500/10" },
                  { severity: "medium", icon: Info, text: "Mobile tap targets too small on 3 pages", color: "text-yellow-500 bg-yellow-500/10" },
                ].map((finding) => (
                  <div key={finding.text} className="flex items-center gap-3 text-sm">
                    <div className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 ${finding.color}`}>
                      <finding.icon className="w-4 h-4" />
                    </div>
                    <span className="text-foreground">{finding.text}</span>
                  </div>
                ))}
                <p className="text-xs text-muted-foreground pt-1">+ 3 more findings...</p>
              </div>

              {/* Blurred recommendations */}
              <div className="p-6 relative select-none" aria-hidden="true">
                <p className="text-sm font-semibold text-foreground font-display mb-3 blur-[2px]">Recommendations & Next Steps</p>
                <div className="space-y-2 blur-[4px] opacity-60">
                  <p className="text-sm text-muted-foreground">1. Add unique meta descriptions to all service pages to improve click-through rates from search...</p>
                  <p className="text-sm text-muted-foreground">2. Optimise images and enable browser caching to reduce page load time by approximately...</p>
                  <p className="text-sm text-muted-foreground">3. Set up and verify Google Business Profile to improve local search visibility in...</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-card/90 backdrop-blur-sm rounded-xl border border-border shadow-lg px-6 py-4 text-center">
                    <p className="text-sm font-semibold text-foreground mb-2">Get your full report free</p>
                    <Button variant="cta" size="sm" asChild>
                      <Link href="#review-form">
                        Get My Free Review
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default WebsiteReview;
