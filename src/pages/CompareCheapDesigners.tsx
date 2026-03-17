import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, X, ArrowRight, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOMeta } from "@/components/SEOMeta";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import Layout from "@/components/Layout";

/* ── Animation helpers ─────────────────────────────────── */
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ── Scroll-triggered section wrapper ──────────────────── */
const ScrollReveal = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ── Comparison data ───────────────────────────────────── */
const comparisonRows = [
  { factor: "Typical Price", us: "From $1,200 (transparent, all-inclusive)", them: "$200–$500 (hidden extras)" },
  { factor: "Design Quality", us: "Custom, brand-aligned, conversion-focused", them: "Generic templates, minimal customisation" },
  { factor: "SEO Setup", us: "Full on-page SEO, schema markup, local optimisation", them: "Little to none  — often skipped entirely" },
  { factor: "Ongoing Support", us: "Dedicated support, updates & monitoring", them: "Disappearing developers, no ongoing plan" },
  { factor: "Revisions", us: "Structured revision rounds included", them: "Endless back-and-forth or extra charges" },
  { factor: "Page Speed", us: "Optimised for Core Web Vitals", them: "Slow, unoptimised, heavy images" },
  { factor: "Security", us: "SSL, backups, malware monitoring included", them: "Often neglected  — no updates after launch" },
  { factor: "Mobile Responsiveness", us: "Mobile-first, tested across devices", them: "May look broken on phones and tablets" },
  { factor: "Results & ROI", us: "Built to generate leads and rank on Google", them: "A website that exists but doesn't perform" },
];

const cheapDesignerProblems = [
  {
    title: "No Mobile Responsiveness",
    desc: "Over 60% of web traffic comes from mobile. A cheap website that looks broken on phones turns away more customers than it attracts.",
  },
  {
    title: "Zero SEO Foundation",
    desc: "Without proper title tags, meta descriptions, schema markup, and site structure, your site is invisible to Google  — no matter how good it looks.",
  },
  {
    title: "Disappearing Developers",
    desc: "Many budget freelancers move on after delivery. When something breaks or you need an update, there's no one to call. You're left starting from scratch.",
  },
  {
    title: "Hidden Costs Stack Up",
    desc: "That $500 quote quickly becomes $1,500+ when you factor in stock photos, hosting, domain, email, SSL, revisions, and the second developer you hire to fix everything.",
  },
  {
    title: "No Conversion Strategy",
    desc: "A cheap site gets built to 'look nice' but nobody plans how visitors will become customers. No clear CTAs, no lead capture, no phone number in the header.",
  },
  {
    title: "Outdated & Insecure",
    desc: "Without maintenance, plugins go out of date, security vulnerabilities pile up, and your site becomes a liability rather than an asset.",
  },
];

const faqs = [
  {
    question: "Why shouldn't I just hire someone on Fiverr for $300?",
    answer: "Fiverr and similar platforms can work for simple tasks, but a business website requires strategy  — not just assembly. A $300 website won't include SEO, conversion planning, mobile optimisation, or ongoing support. Most businesses that go this route end up paying a professional to rebuild it within 6–12 months, spending more overall.",
  },
  {
    question: "What's the real cost difference between cheap and professional?",
    answer: "A cheap website might cost $200–$500 upfront, but hidden extras (hosting, revisions, stock images, fixes) often push the total past $1,000. A professional website from Digital Edge starts at $1,200 and includes everything: custom design, SEO setup, mobile optimisation, Google Analytics, and ongoing support from $99/mo. The real difference is ROI  — a professional site pays for itself through leads it generates.",
  },
  {
    question: "How do I know if my current website is costing me business?",
    answer: "We offer a free website review that analyses your site's speed, SEO, mobile performance, and conversion potential. Most businesses with cheap websites are shocked to discover how much traffic and revenue they're leaving on the table. Request yours at digitaledgestudio.com/free-website-review.",
  },
  {
    question: "Can you fix a poorly built website or do I need a complete rebuild?",
    answer: "It depends on the foundation. Sometimes we can salvage the content and structure while rebuilding the technical side. Other times, starting fresh is faster and more cost-effective. We'll give you an honest assessment during your free consultation  — we won't recommend a rebuild unless it's genuinely the best option.",
  },
];

const CompareCheapDesigners = () => {
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
    <Layout>
      <SEOMeta
        title="Professional Web Design vs Cheap Web Designers | Digital Edge Studio"
        description="Why cheap websites cost more in the long run. Compare budget web designers with professional web design and discover the hidden costs of going cheap."
        canonical="https://digitaledgestudio.com/vs/cheap-web-designers"
        keywords="cheap web design vs professional, cheap website problems, hidden costs cheap website, budget web designer australia, why cheap websites fail, web design investment"
        ogTitle="Professional Web Design vs Cheap Web Designers | Digital Edge Studio"
        ogDescription="A cheap $300-$500 website could be the most expensive mistake your business makes. Here's why."
        faqSchema={faqSchema}
      />

      <Breadcrumb
        items={[
          { label: "Home", path: "/" },
          { label: "Compare" },
          { label: "Cheap Web Design vs Professional" },
        ]}
      />

      {/* ═══ Hero ═══ */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        <div className="container-tight px-4 py-16 md:py-24 relative z-10">
          <motion.div className="max-w-3xl" initial="hidden" animate="show" variants={stagger}>
            <motion.h1 variants={fadeUp} className="heading-display text-primary-foreground mb-4">
              Professional Web Design vs Cheap Web Designers — <span className="text-gradient">What's the Real Cost?</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl">
              A $300–$500 website might seem like a bargain. But when it doesn't rank, doesn't convert, and the developer disappears, you end up paying twice. Here's what separates a smart investment from a costly shortcut.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,60 Q600,-20 1200,60 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* ═══ Hidden Costs Section ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">
              The Hidden Costs of <span className="text-gradient">Cheap Websites</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              That budget quote rarely tells the full story. Here's what actually happens when you cut corners on your business website.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cheapDesignerProblems.map((problem) => (
              <motion.div
                key={problem.title}
                variants={fadeUp}
                className="bg-card rounded-2xl border border-border shadow-card p-6 card-hover-lift"
              >
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="font-bold text-foreground font-display mb-2">{problem.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{problem.desc}</p>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ What You Get: $500 vs $1,200-2500 ═══ */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight">
          <ScrollReveal className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">
              What You Get for <span className="text-gradient">$500 vs From $1,200</span>
            </motion.h2>
          </ScrollReveal>

          <ScrollReveal className="grid md:grid-cols-2 gap-8">
            {/* Cheap */}
            <motion.div variants={fadeUp} className="bg-card rounded-2xl border border-border shadow-card p-8">
              <div className="text-center mb-6">
                <span className="text-2xl font-bold text-muted-foreground font-display">~$300–$500</span>
                <p className="text-sm text-muted-foreground mt-1">Budget Web Designer</p>
              </div>
              <ul className="space-y-3">
                {[
                  "Template with your logo dropped in",
                  "Stock photos from free image sites",
                  "No SEO setup or keyword research",
                  "Basic contact form, maybe working",
                  "No mobile testing or speed optimisation",
                  "Delivered and forgotten  — no ongoing support",
                  "No analytics, no tracking, no strategy",
                  "Your site looks like 1,000 others",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground text-sm">
                    <X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Professional */}
            <motion.div variants={fadeUp} className="bg-card rounded-2xl border border-accent/20 shadow-card p-8">
              <div className="text-center mb-6">
                <span className="text-2xl font-bold text-accent font-display">From $1,200</span>
                <p className="text-sm text-muted-foreground mt-1">Digital Edge Studio</p>
              </div>
              <ul className="space-y-3">
                {[
                  "100% custom design matched to your brand",
                  "Professional copywriting focused on conversions",
                  "Full on-page SEO with local keyword targeting",
                  "Conversion-optimised forms, CTAs, and layout",
                  "Mobile-first design tested across all devices",
                  "Ongoing support, hosting & maintenance from $99/mo",
                  "Google Analytics, Search Console & tracking setup",
                  "A website built to generate leads and revenue",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Comparison Table ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">
              Full <span className="text-gradient">Comparison</span>
            </motion.h2>
          </ScrollReveal>

          <ScrollReveal>
            <motion.div variants={fadeUp} className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider border-b border-border">Factor</th>
                    <th className="text-left p-4 text-sm font-semibold text-accent uppercase tracking-wider border-b border-border">Digital Edge Studio</th>
                    <th className="text-left p-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider border-b border-border">Cheap Web Designer</th>
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

      {/* ═══ Positive Framing ═══ */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight max-w-3xl">
          <ScrollReveal>
            <motion.div variants={fadeUp} className="bg-card rounded-2xl border border-accent/20 shadow-card p-8 text-center">
              <h2 className="heading-section text-foreground mb-4">Your Website Is an Investment, Not an Expense</h2>
              <p className="text-body-lg text-muted-foreground mb-6">
                The right website doesn't cost you money  — it makes you money. Our clients typically see their investment returned within the first few months through new leads and customers they wouldn't have reached otherwise. When your website ranks on Google, loads fast, and guides visitors to take action, it becomes the hardest-working member of your team.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="cta" size="lg" asChild>
                  <Link to="/portfolio">
                    See Real Results
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/pricing">View Transparent Pricing</Link>
                </Button>
              </div>
            </motion.div>
          </ScrollReveal>
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
          <ScrollReveal>
            <motion.h2 variants={fadeUp} className="heading-section text-white mb-5">
              Done With Websites That Don't Work?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-white/60 max-w-2xl mx-auto mb-10">
              Get a free quote and find out what a website built for results actually looks like.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/free-website-review">Free Website Review</Link>
              </Button>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-6 mt-8">
              <Link to="/pricing" className="text-white/70 hover:text-white text-sm underline underline-offset-4 transition-colors">View Pricing</Link>
              <Link to="/portfolio" className="text-white/70 hover:text-white text-sm underline underline-offset-4 transition-colors">See Our Work</Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <FAQ faqs={faqs} title="Cheap vs Professional Web Design — FAQ" />
    </Layout>
  );
};

export default CompareCheapDesigners;
