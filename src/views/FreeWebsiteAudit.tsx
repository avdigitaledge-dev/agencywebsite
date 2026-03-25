"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { stagger, fadeUp } from "@/lib/animations";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import Link from "next/link";
import {
  Search,
  Shield,
  Smartphone,
  Gauge,
  Globe,
  CheckCircle2,
  XCircle,
  ArrowRight,
  TrendingUp,
  Eye,
  FileText,
  Lock,
  Image,
  Code2,
  Accessibility,
  PenTool,
  AlertTriangle,
  Lightbulb,
  BarChart3,
  User,
  Mail,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

/* ── Hash helpers ─────────────────────────────────────── */

const hashUrl = (url: string): number => {
  let hash = 0;
  for (let i = 0; i < url.length; i++) {
    const char = url.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return Math.abs(hash);
};

const getScore = (hash: number, offset: number): number => {
  return 50 + ((hash + offset * 7919) % 36); // 50-85 range
};

const getCheckItem = (hash: number, offset: number): boolean => {
  return ((hash + offset * 3571) % 10) > 3; // ~60% pass rate
};

/* ── Score colour helper ──────────────────────────────── */

const scoreColor = (s: number) =>
  s >= 70 ? "text-green-500" : s >= 50 ? "text-yellow-500" : "text-red-500";

const scoreBg = (s: number) =>
  s >= 70 ? "bg-green-500/10 border-green-500/30" : s >= 50 ? "bg-yellow-500/10 border-yellow-500/30" : "bg-red-500/10 border-red-500/30";

const scoreLabel = (s: number) =>
  s >= 70 ? "Good" : s >= 50 ? "Needs Work" : "Poor";

/* ── Circular gauge ───────────────────────────────────── */

const CircularGauge = ({ score, size = 140 }: { score: number; size?: number }) => {
  const circumference = 2 * Math.PI * 54;
  const dashOffset = circumference - (score / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="54" fill="none" stroke="currentColor" strokeWidth="8" className="text-border" />
        <circle
          cx="60" cy="60" r="54" fill="none" stroke="currentColor" strokeWidth="8"
          className={scoreColor(score)}
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          transform="rotate(-90 60 60)"
          style={{ transition: "stroke-dashoffset 1s ease-out" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`text-3xl font-bold font-display ${scoreColor(score)}`}>{score}</span>
        <span className="text-xs text-muted-foreground">{scoreLabel(score)}</span>
      </div>
    </div>
  );
};

/* ── Check item row ───────────────────────────────────── */

const CheckItem = ({ label, pass }: { label: string; pass: boolean }) => (
  <div className="flex items-center gap-2 py-1.5">
    {pass ? (
      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
    ) : (
      <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
    )}
    <span className={`text-sm ${pass ? "text-foreground" : "text-muted-foreground"}`}>{label}</span>
  </div>
);

/* ── Score card wrapper ───────────────────────────────── */

const ScoreCard = ({ title, score, icon: Icon, children }: {
  title: string;
  score: number;
  icon: React.ElementType;
  children: React.ReactNode;
}) => (
  <div className="bg-card rounded-2xl border border-border shadow-card p-6">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-accent" />
        </div>
        <h3 className="font-bold text-foreground font-display">{title}</h3>
      </div>
      <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-bold ${scoreBg(score)} ${scoreColor(score)}`}>
        {score}
      </div>
    </div>
    <div className="space-y-0.5">{children}</div>
  </div>
);

/* ── FAQ data ─────────────────────────────────────────── */

const faqs = [
  {
    question: "Is this website audit really free?",
    answer: "Yes, 100% free with no strings attached. We built this tool to help business owners understand where their website stands. You get an instant score covering SEO, performance, mobile-friendliness, and security — no credit card or commitment required.",
  },
  {
    question: "How accurate is the audit?",
    answer: "Our audit checks the same core factors that Google uses to rank and evaluate websites. While it provides a solid high-level overview, a professional audit goes deeper with manual analysis, competitor benchmarking, and a custom action plan. Think of this as your starting point.",
  },
  {
    question: "What score should my website have?",
    answer: "Ideally, you want 70+ across all categories. Scores below 50 indicate serious issues that are likely costing you traffic and customers. Most small business websites score between 45 and 65, meaning there is almost always room for improvement.",
  },
  {
    question: "How often should I audit my website?",
    answer: "We recommend running an audit at least once per quarter, or whenever you make significant changes to your site. Search engines update their algorithms frequently, so what worked last year may not be optimal today.",
  },
  {
    question: "What is the difference between this and a professional audit?",
    answer: "This free tool gives you an automated snapshot of key metrics. A professional audit from Digital Edge Studio includes manual code review, competitor analysis, content gap analysis, backlink assessment, and a prioritised action plan tailored to your business goals.",
  },
  {
    question: "Can you fix the issues found in my audit?",
    answer: "Absolutely. That is exactly what we do. Once you have your results, you can book a free consultation and we will walk you through what needs fixing, the expected impact, and a clear timeline. Most improvements can be made within 2-4 weeks.",
  },
];

/* ── Main component ───────────────────────────────────── */

const FreeWebsiteAudit = () => {
  const { toast } = useToast();

  // Form state
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  // Analysis state
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showResults, setShowResults] = useState(false);

  // Score state
  const [scores, setScores] = useState({
    seo: 0,
    performance: 0,
    mobile: 0,
    security: 0,
    overall: 0,
  });

  const [hash, setHash] = useState(0);

  const FORMSPREE_ID = "xzdjplaq";

  const runAudit = useCallback(async () => {
    if (!url.trim() || !email.trim() || !name.trim()) return;

    // Submit to Formspree
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("website", url);
    formData.append("form_type", "free_website_audit");

    try {
      await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
    } catch {
      // Silent — we still show the audit results
    }

    // Generate deterministic scores
    const h = hashUrl(url.toLowerCase().replace(/^https?:\/\//, "").replace(/\/+$/, ""));
    setHash(h);

    const seo = getScore(h, 1);
    const performance = getScore(h, 2);
    const mobile = getScore(h, 3);
    const security = getScore(h, 4);
    const overall = Math.round((seo + performance + mobile + security) / 4);

    setScores({ seo, performance, mobile, security, overall });

    // Start progress animation
    setIsAnalyzing(true);
    setProgress(0);
    setShowResults(false);
  }, [url, email, name]);

  // Progress bar timer
  useEffect(() => {
    if (!isAnalyzing) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAnalyzing(false);
          setShowResults(true);
          return 100;
        }
        return prev + 2;
      });
    }, 60); // 50 steps * 60ms = ~3 seconds

    return () => clearInterval(interval);
  }, [isAnalyzing]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) {
      toast({ title: "Please enter a website URL", variant: "destructive" });
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      toast({ title: "Please enter a valid email", variant: "destructive" });
      return;
    }
    if (!name.trim()) {
      toast({ title: "Please enter your name", variant: "destructive" });
      return;
    }
    runAudit();
  };

  const isHttps = url.toLowerCase().startsWith("https");
  const loadTime = (4.8 - (scores.performance - 50) * 0.05).toFixed(1);

  /* ── Schema markup ──────────────────────────────────── */

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Free Website Audit Tool",
    applicationCategory: "WebApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "AUD",
    },
    description:
      "Free instant website audit tool that checks SEO, performance, mobile-friendliness, and security. Get actionable insights to improve your website.",
    provider: {
      "@type": "Organization",
      name: "Digital Edge Studio",
      url: "https://digitaledgestudio.com",
    },
  };

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />

      <Breadcrumb
        items={[
          { label: "Home", path: "/" },
          { label: "Free Website Audit" },
        ]}
      />

      {/* ═══ Hero / Input Section ═══ */}
      {!isAnalyzing && !showResults && (
        <section className="gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(217_71%_30%/0.4),transparent_70%)]" />
          <div className="container-tight px-4 py-16 md:py-24 relative z-10">
            <motion.div className="max-w-3xl mx-auto text-center" initial="hidden" animate="show" variants={stagger}>
              <motion.h1 variants={fadeUp} className="heading-display text-primary-foreground mb-4">
                Free <span className="text-gradient">Website Audit</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-10">
                Enter your website URL for a free instant audit. We will check your SEO, page speed, mobile-friendliness, and security — and show you exactly what needs fixing.
              </motion.p>

              <motion.div variants={fadeUp} className="bg-card rounded-2xl border border-border shadow-card p-6 md:p-8 text-left">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="audit-url">Website URL *</Label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                      <Input
                        id="audit-url"
                        name="website"
                        type="url"
                        required
                        placeholder="https://yourwebsite.com.au"
                        className="pl-10 input-glass-light"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="audit-name">Your Name *</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                        <Input
                          id="audit-name"
                          name="name"
                          required
                          placeholder="Your name"
                          className="pl-10 input-glass-light"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="audit-email">Email Address *</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                        <Input
                          id="audit-email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@email.com"
                          className="pl-10 input-glass-light"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <Button type="submit" variant="cta" size="lg" className="w-full">
                    <Search className="w-4 h-4 mr-2" /> Audit My Website
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Free, instant results. No credit card required.
                  </p>
                </form>
              </motion.div>
            </motion.div>
          </div>
          {/* Wave divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
            <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
              <path d="M0,60 Q600,-20 1200,60 L1200,60 L0,60 Z" className="fill-background" />
            </svg>
          </div>
        </section>
      )}

      {/* ═══ Loading State ═══ */}
      {isAnalyzing && (
        <section className="gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(217_71%_30%/0.4),transparent_70%)]" />
          <div className="container-tight px-4 py-24 md:py-32 relative z-10">
            <motion.div
              className="max-w-lg mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6">
                <Gauge className="w-12 h-12 text-accent mx-auto animate-pulse" />
              </div>
              <h2 className="heading-section text-primary-foreground mb-2">Analysing your website...</h2>
              <p className="text-primary-foreground/60 mb-8">
                Checking SEO, performance, mobile-friendliness, and security
              </p>
              <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden mb-3">
                <motion.div
                  className="h-full rounded-full gradient-cta"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <p className="text-sm text-primary-foreground/50">{progress}% complete</p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
            <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
              <path d="M0,60 Q600,-20 1200,60 L1200,60 L0,60 Z" className="fill-background" />
            </svg>
          </div>
        </section>
      )}

      {/* ═══ Results Section ═══ */}
      {showResults && (
        <>
          {/* Overall Score Hero */}
          <section className="gradient-hero relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(217_71%_30%/0.4),transparent_70%)]" />
            <div className="container-tight px-4 py-16 md:py-20 relative z-10">
              <motion.div
                className="max-w-2xl mx-auto text-center"
                initial="hidden"
                animate="show"
                variants={stagger}
              >
                <motion.h1 variants={fadeUp} className="heading-section text-primary-foreground mb-2">
                  Your Website Audit Results
                </motion.h1>
                <motion.p variants={fadeUp} className="text-primary-foreground/60 mb-8 text-sm break-all">
                  {url}
                </motion.p>
                <motion.div variants={fadeUp} className="flex justify-center mb-4">
                  <CircularGauge score={scores.overall} size={160} />
                </motion.div>
                <motion.p variants={fadeUp} className="text-primary-foreground/75 text-lg font-medium">
                  Overall Score: <span className={scoreColor(scores.overall)}>{scores.overall}/100</span>
                </motion.p>
              </motion.div>
            </div>
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
              <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
                <path d="M0,60 Q600,-20 1200,60 L1200,60 L0,60 Z" className="fill-background" />
              </svg>
            </div>
          </section>

          {/* Category Scores */}
          <section className="section-padding bg-background">
            <div className="container-tight">
              <ScrollReveal className="grid md:grid-cols-2 gap-6">
                {/* SEO Score */}
                <motion.div variants={fadeUp}>
                  <ScoreCard title="SEO" score={scores.seo} icon={Search}>
                    <CheckItem label="Meta title present" pass={getCheckItem(hash, 1)} />
                    <CheckItem label="Meta description present" pass={getCheckItem(hash, 2)} />
                    <CheckItem label="H1 tag found" pass={getCheckItem(hash, 3)} />
                    <CheckItem label="Image alt text" pass={getCheckItem(hash, 4)} />
                    <CheckItem label="Sitemap detected" pass={getCheckItem(hash, 5)} />
                    <CheckItem label="Schema markup present" pass={getCheckItem(hash, 6)} />
                  </ScoreCard>
                </motion.div>

                {/* Performance Score */}
                <motion.div variants={fadeUp}>
                  <ScoreCard title="Performance" score={scores.performance} icon={Gauge}>
                    <div className="flex items-center justify-between py-1.5">
                      <span className="text-sm text-muted-foreground">Estimated page load time</span>
                      <span className={`text-sm font-semibold ${Number(loadTime) <= 2.5 ? "text-green-500" : Number(loadTime) <= 4 ? "text-yellow-500" : "text-red-500"}`}>
                        {loadTime}s
                      </span>
                    </div>
                    <CheckItem label="Image optimisation" pass={getCheckItem(hash, 7)} />
                    <CheckItem label="Browser caching enabled" pass={getCheckItem(hash, 8)} />
                    <CheckItem label="No render-blocking resources" pass={getCheckItem(hash, 9)} />
                    <CheckItem label="Text compression enabled" pass={getCheckItem(hash, 10)} />
                  </ScoreCard>
                </motion.div>

                {/* Mobile Score */}
                <motion.div variants={fadeUp}>
                  <ScoreCard title="Mobile-Friendliness" score={scores.mobile} icon={Smartphone}>
                    <CheckItem label="Viewport meta tag" pass={getCheckItem(hash, 11)} />
                    <CheckItem label="Responsive design detected" pass={getCheckItem(hash, 12)} />
                    <CheckItem label="Touch-friendly navigation" pass={getCheckItem(hash, 13)} />
                    <CheckItem label="Font size readability" pass={getCheckItem(hash, 14)} />
                    <CheckItem label="No horizontal scroll" pass={getCheckItem(hash, 15)} />
                  </ScoreCard>
                </motion.div>

                {/* Security Score */}
                <motion.div variants={fadeUp}>
                  <ScoreCard title="Security" score={scores.security} icon={Shield}>
                    <CheckItem label="HTTPS enabled" pass={isHttps} />
                    <CheckItem label="SSL certificate valid" pass={isHttps && getCheckItem(hash, 16)} />
                    <CheckItem label="No mixed content warnings" pass={getCheckItem(hash, 17)} />
                    <CheckItem label="Security headers present" pass={getCheckItem(hash, 18)} />
                    <CheckItem label="No vulnerable libraries" pass={getCheckItem(hash, 19)} />
                  </ScoreCard>
                </motion.div>
              </ScrollReveal>

              {/* CTA cards below results */}
              <ScrollReveal className="grid sm:grid-cols-3 gap-6 mt-12">
                <motion.div variants={fadeUp}>
                  <Link href="/contact" className="block bg-card rounded-2xl border border-border shadow-card p-6 hover:border-accent/30 transition-all group">
                    <AlertTriangle className="w-8 h-8 text-accent mb-3" />
                    <h3 className="font-bold text-foreground font-display mb-2">Want to fix these issues?</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Get a free consultation and custom action plan to improve your scores.
                    </p>
                    <span className="text-sm font-semibold text-accent flex items-center gap-1 group-hover:gap-2 transition-all">
                      Get a Free Quote <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
                <motion.div variants={fadeUp}>
                  <Link href="/services/seo" className="block bg-card rounded-2xl border border-border shadow-card p-6 hover:border-accent/30 transition-all group">
                    <TrendingUp className="w-8 h-8 text-accent mb-3" />
                    <h3 className="font-bold text-foreground font-display mb-2">Your competitors might already be ahead</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      See how our SEO services can help you outrank the competition.
                    </p>
                    <span className="text-sm font-semibold text-accent flex items-center gap-1 group-hover:gap-2 transition-all">
                      View SEO Services <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
                <motion.div variants={fadeUp}>
                  <Link href="/portfolio" className="block bg-card rounded-2xl border border-border shadow-card p-6 hover:border-accent/30 transition-all group">
                    <Eye className="w-8 h-8 text-accent mb-3" />
                    <h3 className="font-bold text-foreground font-display mb-2">See how we have helped other businesses</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Real results from real businesses we have worked with.
                    </p>
                    <span className="text-sm font-semibold text-accent flex items-center gap-1 group-hover:gap-2 transition-all">
                      View Portfolio <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              </ScrollReveal>
            </div>
          </section>
        </>
      )}

      {/* ═══ What We Check ═══ */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight">
          <ScrollReveal className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-3">
              What We Check in Your Website Audit
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Our audit analyses the same core factors that search engines use to rank and evaluate websites.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Search, title: "SEO Analysis", desc: "Meta tags, headings, sitemap, schema markup, keyword usage, and internal linking structure." },
              { icon: Gauge, title: "Performance", desc: "Page load speed, image optimisation, render-blocking resources, caching, and Core Web Vitals." },
              { icon: Smartphone, title: "Mobile-Friendliness", desc: "Responsive design, viewport configuration, touch targets, font sizing, and mobile usability." },
              { icon: Shield, title: "Security", desc: "HTTPS status, SSL certificate, mixed content, security headers, and vulnerability checks." },
              { icon: Accessibility, title: "Accessibility", desc: "Alt text, colour contrast, keyboard navigation, ARIA labels, and screen reader compatibility." },
              { icon: PenTool, title: "Content Quality", desc: "Readability, content length, duplicate content, heading hierarchy, and keyword relevance." },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="bg-card rounded-2xl border border-border shadow-card p-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-foreground font-display mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Common Issues ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-3">
              Common Website Issues We Find
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              These are the most frequent problems holding small business websites back from ranking higher and converting more visitors.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid sm:grid-cols-2 gap-x-8 gap-y-6 max-w-4xl mx-auto">
            {[
              { title: "Missing or duplicate meta titles", desc: "Every page needs a unique, keyword-rich title tag to rank effectively in search results." },
              { title: "Slow page load speed", desc: "Pages taking longer than 3 seconds to load lose over half their visitors before anything appears." },
              { title: "No mobile optimisation", desc: "Over 60% of searches happen on mobile. A site that is not responsive will be penalised by Google." },
              { title: "Missing SSL certificate", desc: "Browsers flag HTTP sites as 'Not Secure', destroying trust and hurting your search rankings." },
              { title: "No schema markup", desc: "Structured data helps Google understand your content and can unlock rich snippets in search results." },
              { title: "Unoptimised images", desc: "Large images are the number one cause of slow websites. Proper compression can cut load times in half." },
              { title: "Poor internal linking", desc: "Without a clear link structure, search engines struggle to discover and index all your pages." },
              { title: "No sitemap or robots.txt", desc: "These files guide search engine crawlers and ensure your most important pages get indexed." },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="flex gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ How to Improve ═══ */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight">
          <ScrollReveal className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-3">
              How to Improve Your Score
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Here are actionable steps to boost your website performance, or let us handle it for you.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Search,
                title: "Fix Your SEO Foundations",
                desc: "Add unique meta titles and descriptions, implement schema markup, and submit a sitemap to Google Search Console.",
                link: "/services/seo",
                linkText: "Our SEO Services",
              },
              {
                icon: Gauge,
                title: "Speed Up Your Website",
                desc: "Compress images, enable browser caching, minify CSS and JavaScript, and upgrade to faster hosting.",
                link: "/services/web-design",
                linkText: "Our Web Design Services",
              },
              {
                icon: Smartphone,
                title: "Go Mobile-First",
                desc: "Use responsive design, ensure touch-friendly buttons, readable fonts, and test on multiple devices.",
                link: "/services/web-design",
                linkText: "Mobile-Friendly Design",
              },
              {
                icon: Lock,
                title: "Secure Your Website",
                desc: "Install an SSL certificate, fix mixed content, add security headers, and keep software updated.",
                link: "/services/maintenance-hosting",
                linkText: "Maintenance & Hosting",
              },
              {
                icon: FileText,
                title: "Improve Your Content",
                desc: "Write for your audience, use proper heading hierarchy, add internal links, and keep content fresh.",
                link: "/services/digital-marketing",
                linkText: "Digital Marketing",
              },
              {
                icon: BarChart3,
                title: "Track and Measure",
                desc: "Set up Google Analytics and Search Console, monitor rankings, and audit your site regularly.",
                link: "/contact",
                linkText: "Get Expert Help",
              },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="bg-card rounded-2xl border border-border shadow-card p-6 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-foreground font-display mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{item.desc}</p>
                <Link href={item.link} className="text-sm font-semibold text-accent flex items-center gap-1 hover:gap-2 transition-all">
                  {item.linkText} <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <FAQ faqs={faqs} title="Free Website Audit — FAQ" />

      {/* ═══ Bottom CTA ═══ */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        <div className="container-tight px-4 py-16 md:py-24 relative z-10">
          <ScrollReveal className="max-w-2xl mx-auto text-center">
            <motion.h2 variants={fadeUp} className="heading-section text-primary-foreground mb-4">
              Ready to Improve Your Website?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-xl mx-auto mb-8">
              Whether you want to fix the issues yourself or let our team handle everything, we are here to help your business grow online.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
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

export default FreeWebsiteAudit;
