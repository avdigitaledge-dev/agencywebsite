import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, ArrowRight, Shield, Star, Users, Rocket, Target, Search, Globe } from "lucide-react";
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

const Pricing = () => {
  const pricingFAQ = [
    {
      question: "How much does a website cost in Wollongong?",
      answer: "Our web design packages start from $995 for a Starter Website (up to 5 pages), $1,850 for a Business Website (up to 10 pages), and $4,500 for an eCommerce Website (up to 20 pages). All prices are in AUD with no hidden fees."
    },
    {
      question: "What's included in the web design price?",
      answer: "Every website we build includes custom design, mobile responsiveness, on-page SEO setup, contact form, Google Analytics integration, and Google Search Console setup. The Business package also includes a blog section, social media integration, and priority support during the build."
    },
    {
      question: "Are there any ongoing costs after the website is built?",
      answer: "Ongoing costs are optional. We offer a Website Maintenance plan at $99/month covering security updates, daily backups, uptime monitoring, and minor content changes. Hosting costs are separate and vary by provider. We'll advise you on the best option for your budget."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes — we can discuss a payment plan that works for your business. Typically we require a deposit to begin work, with the balance due on completion. Get in touch to find out what's available for your project."
    },
    {
      question: "How long does it take to build my website?",
      answer: "Most websites are completed within 4–8 weeks, depending on the package and how quickly you provide content and feedback. We'll give you a clear timeline when we start your project."
    },
    {
      question: "Can I upgrade my package later?",
      answer: "Absolutely. Many clients start with the Starter package and add pages or upgrade to monthly SEO as their business grows. We're here for the long term and will grow with you."
    },
    {
      question: "What is AEO (Answer Engine Optimisation)?",
      answer: "AEO stands for Answer Engine Optimisation. As more people use AI assistants like ChatGPT, Siri, Google Assistant, and Alexa to ask questions, the results they get come from structured, authoritative web content — not just traditional search rankings. AEO means formatting your content so it directly answers the specific questions your customers are asking. This includes FAQ schema markup, clear question-and-answer formatting, and content structured around natural language queries. If someone asks an AI 'who is the best plumber in Wollongong', AEO helps make sure your business is the answer it gives."
    },
    {
      question: "What is GEO (Generative Engine Optimisation)?",
      answer: "GEO stands for Generative Engine Optimisation — optimising your website to appear as a cited source in AI-generated responses, particularly Google's AI Overviews (formerly Search Generative Experience). When Google uses AI to summarise answers at the top of search results, it pulls from pages it deems authoritative, well-structured, and relevant. GEO involves structured data markup, E-E-A-T signals (Experience, Expertise, Authoritativeness, Trustworthiness), clear topical authority, and content formatting that AI models can easily parse and cite. The goal is to have your business featured inside these AI-generated summaries, not just ranked below them."
    },
    {
      question: "What's included in the Growth Bundle?",
      answer: "The Growth Bundle ($2,500/month excl. ad spend) is our all-in-one growth package. Phase 1 (The Foundation) is a conversion-focused business website build — up to 10 pages, mobile-responsive, SEO-ready with lead capture built in. Phase 2 (Lead Accelerator) covers Google Search Ads with full campaign build, weekly optimisation, and conversion page audits. Phase 3 (Authority Engine) covers Google Business Profile optimisation, on-page SEO for your top 5 pages, 1 SEO-optimised article per month, and monthly technical health monitoring. It's everything you need — a website that converts, immediate leads from ads, and long-term organic rankings."
    }
  ];

  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Web Design & Digital Marketing Pricing",
    "url": "https://digitaledgestudio.com/pricing",
    "offers": [
      {
        "@type": "Offer",
        "name": "Starter Website",
        "description": "Up to 5 pages, mobile responsive design, contact form, basic on-page SEO setup, Google Analytics setup, 2 rounds of revisions.",
        "price": "995",
        "priceCurrency": "AUD",
        "seller": { "@type": "Organization", "name": "Digital Edge Studio" }
      },
      {
        "@type": "Offer",
        "name": "Business Website",
        "description": "Up to 10 pages, conversion-focused design, on-page SEO for all pages, Google Analytics & Search Console, blog section, social media integration, 3 rounds of revisions, priority support during build.",
        "price": "1850",
        "priceCurrency": "AUD",
        "seller": { "@type": "Organization", "name": "Digital Edge Studio" }
      },
      {
        "@type": "Offer",
        "name": "eCommerce Website",
        "description": "Up to 20 pages, full online store setup, product catalogue & categories, secure payment gateway, shipping & tax configuration, inventory management, order notification emails, on-page SEO, Google Analytics & Search Console, 4 rounds of revisions.",
        "price": "4500",
        "priceCurrency": "AUD",
        "seller": { "@type": "Organization", "name": "Digital Edge Studio" }
      },
      {
        "@type": "Offer",
        "name": "Website Maintenance",
        "description": "Security updates & patches, daily backups, uptime monitoring, minor content updates, performance optimisation, email & phone support.",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "99",
          "priceCurrency": "AUD",
          "unitCode": "MON"
        },
        "seller": { "@type": "Organization", "name": "Digital Edge Studio" }
      },
      {
        "@type": "Offer",
        "name": "Local SEO",
        "description": "Google Business Profile optimisation, local keyword research & targeting, on-page SEO for all key pages, local citation building, Google Maps ranking strategy, AEO (Answer Engine Optimisation) for AI assistants, GEO (Generative Engine Optimisation) for Google AI Overviews, competitor analysis, 1 SEO blog article per month, monthly performance reports & strategy call, ongoing technical SEO health monitoring.",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "1000",
          "priceCurrency": "AUD",
          "unitCode": "MON"
        },
        "seller": { "@type": "Organization", "name": "Digital Edge Studio" }
      },
      {
        "@type": "Offer",
        "name": "Google Ads Management",
        "description": "Full Google Ads campaign setup & management, keyword research & smart bid strategy, ad copywriting & A/B testing, landing page recommendations, Google Analytics & conversion tracking, competitor analysis, weekly optimisation & bid adjustments, transparent monthly reporting.",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "800",
          "priceCurrency": "AUD",
          "unitCode": "MON"
        },
        "seller": { "@type": "Organization", "name": "Digital Edge Studio" }
      },
      {
        "@type": "Offer",
        "name": "Growth Bundle — Website + PPC + SEO",
        "description": "Complete growth package including a conversion-focused business website (up to 10 pages), Google Ads management with full PPC campaign build, weekly bid optimisation, A/B ad copy testing, plus Local SEO with Google Business Profile optimisation, on-page SEO for top 5 pages, and 1 SEO-optimised article per month.",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "2500",
          "priceCurrency": "AUD",
          "unitCode": "MON"
        },
        "seller": { "@type": "Organization", "name": "Digital Edge Studio" }
      }
    ]
  };

  return (
    <Layout>
      <SEOMeta
        title="Affordable Web Design Pricing Wollongong | Packages & Cost"
        description="Transparent web design pricing in Wollongong. Packages from $995 — no hidden fees, no lock-in contracts. Find out how much a website costs in Wollongong."
        keywords="web design pricing, affordable web design wollongong, wollongong web design packages pricing, how much does a website cost in wollongong, website redesign service wollongong, seo pricing wollongong, digital marketing rates"
        canonical="https://digitaledgestudio.com/pricing"
        ogTitle="Affordable Web Design Pricing Wollongong | Packages & Cost"
        ogDescription="Transparent pricing for web design and digital marketing in Wollongong. From $995 for a starter website — no hidden fees."
        serviceSchema={pricingSchema}
      />

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Pricing' }
      ]} />

      {/* ═══ Hero ═══ */}
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
              Simple, Transparent Pricing
            </motion.h1>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl">
              No hidden fees. No lock-in contracts. Just honest pricing for Australian businesses.
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

      {/* ═══ Website Packages ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">Website Packages</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Get a professional website that's built to generate leads for your business.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter */}
            <motion.div variants={fadeUp} className="bg-card rounded-2xl border border-border shadow-card p-8 flex flex-col card-hover-lift">
              <h3 className="heading-card text-foreground mb-1">Starter Website</h3>
              <p className="text-muted-foreground text-sm mb-4">Perfect for tradies and small service businesses</p>
              <div className="mb-6">
                <p className="text-sm text-muted-foreground line-through mb-1">Typical agency price: $3,000–$5,000</p>
                <span className="text-4xl font-extrabold text-foreground font-display">$995</span>
                <span className="text-muted-foreground ml-1">AUD</span>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {[
                  "Up to 5 pages",
                  "Mobile responsive design",
                  "Contact form",
                  "Basic on-page SEO setup",
                  "Google Analytics setup",
                  "2 rounds of revisions",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-foreground text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button variant="cta" size="lg" className="w-full" asChild>
                <Link to="/contact">Get a Quote — Starter Website</Link>
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-3">Payment plans available — ask us how</p>
            </motion.div>

            {/* Business */}
            <motion.div variants={fadeUp} className="bg-card rounded-2xl border-2 border-accent shadow-card relative p-8 flex flex-col card-hover-lift">
              <motion.div
                className="absolute -top-3 left-8 px-3 py-1 gradient-cta text-accent-foreground text-xs font-semibold rounded-full shadow-cta"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                Most Popular
              </motion.div>
              <h3 className="heading-card text-foreground mb-1">Business Website</h3>
              <p className="text-muted-foreground text-sm mb-4">For businesses serious about growing online</p>
              <div className="mb-6">
                <p className="text-sm text-muted-foreground line-through mb-1">Typical agency price: $5,000–$10,000</p>
                <span className="text-4xl font-extrabold text-foreground font-display">$1,850</span>
                <span className="text-muted-foreground ml-1">AUD</span>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {[
                  "Up to 10 pages",
                  "Conversion-focused design",
                  "On-page SEO for all pages",
                  "Google Analytics & Search Console",
                  "Blog or news section",
                  "Social media integration",
                  "3 rounds of revisions",
                  "Priority support during build",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-foreground text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button variant="cta" size="lg" className="w-full" asChild>
                <Link to="/contact">Talk to Us About the Business Package</Link>
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-3">Payment plans available — ask us how</p>
            </motion.div>

            {/* eCommerce */}
            <motion.div variants={fadeUp} className="bg-card rounded-2xl border border-border shadow-card p-8 flex flex-col card-hover-lift">
              <h3 className="heading-card text-foreground mb-1">eCommerce Website</h3>
              <p className="text-muted-foreground text-sm mb-4">Sell products online with a fully managed store</p>
              <div className="mb-6">
                <p className="text-sm text-muted-foreground line-through mb-1">Typical agency price: $10,000–$20,000</p>
                <span className="text-4xl font-extrabold text-foreground font-display">$4,500</span>
                <span className="text-muted-foreground ml-1">AUD</span>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {[
                  "Up to 20 pages",
                  "Full online store setup",
                  "Product catalogue & categories",
                  "Secure payment gateway integration",
                  "Shipping & tax configuration",
                  "Inventory management",
                  "Order notification emails",
                  "On-page SEO for all pages",
                  "Google Analytics & Search Console",
                  "4 rounds of revisions",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-foreground text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button variant="cta" size="lg" className="w-full" asChild>
                <Link to="/contact">Get a Quote — eCommerce Website</Link>
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-3">Payment plans available — ask us how</p>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Trust Bar ═══ */}
      <section className="bg-card border-y border-border">
        <div className="container-tight px-4 py-6">
          <ScrollReveal className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm text-muted-foreground">
            {[
              { icon: Users, text: "100+ Websites Delivered" },
              { icon: Star, text: "5-Star Google Reviews" },
              { icon: Shield, text: "No Lock-In Contracts" },
            ].map((item) => (
              <motion.div key={item.text} variants={fadeUp} className="flex items-center gap-2">
                <item.icon className="w-4 h-4 text-accent" /> {item.text}
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Comparison Table ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">How We Compare</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Not sure whether to use an agency, freelancer, or DIY platform? Here's an honest comparison.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal>
            <motion.div variants={fadeUp} className="overflow-x-auto rounded-xl border border-border shadow-card">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left py-4 pl-6 pr-4 text-muted-foreground font-medium w-1/5">Factor</th>
                    <th className="py-4 px-4 text-center w-1/5 bg-accent/5">
                      <span className="inline-block px-3 py-1 gradient-cta text-accent-foreground rounded-full text-xs font-semibold shadow-cta">Digital Edge Studio</span>
                    </th>
                    <th className="py-4 px-4 text-center text-muted-foreground font-medium w-1/5">Large Agency</th>
                    <th className="py-4 px-4 text-center text-muted-foreground font-medium w-1/5">Freelancer</th>
                    <th className="py-4 px-4 text-center text-muted-foreground font-medium w-1/5 pr-6">DIY (Wix/Squarespace)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { factor: "Starting Price", us: "From $995", agency: "$5,000-$30,000", freelancer: "$500-$2,000", diy: "$0-$500/yr" },
                    { factor: "Local SEO Included", us: "Yes", agency: "Extra cost", freelancer: "Rarely", diy: "No" },
                    { factor: "Wollongong / NSW Knowledge", us: "Local team", agency: "Sydney-centric", freelancer: "Varies", diy: "None" },
                    { factor: "You Deal With", us: "The actual designer", agency: "Account manager", freelancer: "Direct", diy: "DIY only" },
                    { factor: "Ongoing Support", us: "From $99/mo", agency: "Expensive retainer", freelancer: "Often disappears", diy: "Self-service" },
                    { factor: "Turnaround Time", us: "4-8 weeks", agency: "3-6 months", freelancer: "Varies", diy: "DIY pace" },
                    { factor: "No Lock-In Contract", us: "Yes", agency: "12-month retainers", freelancer: "Usually", diy: "Cancel anytime" },
                  ].map((row, idx) => (
                    <tr key={row.factor} className={`border-b border-border transition-colors hover:bg-muted/20 ${idx % 2 === 1 ? "bg-muted/10" : ""}`}>
                      <td className="py-4 pl-6 pr-4 font-medium text-foreground">{row.factor}</td>
                      <td className="py-4 px-4 text-center font-semibold text-accent bg-accent/5">
                        <span className="inline-flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                          {row.us}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-center text-muted-foreground">{row.agency}</td>
                      <td className="py-4 px-4 text-center text-muted-foreground">{row.freelancer}</td>
                      <td className="py-4 px-4 text-center text-muted-foreground pr-6">{row.diy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Monthly Services ═══ */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight">
          <ScrollReveal className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">Monthly Services</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Ongoing support to keep your website running and your business growing.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Maintenance */}
            <motion.div variants={fadeUp} className="bg-card rounded-2xl border border-border shadow-card p-8 flex flex-col card-hover-lift">
              <h3 className="heading-card text-foreground mb-1">Website Maintenance</h3>
              <p className="text-muted-foreground text-sm mb-4">Keep your site fast, secure, and updated</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-foreground font-display">$99</span>
                <span className="text-muted-foreground ml-1">/month</span>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {[
                  "Security updates & patches",
                  "Daily backups",
                  "Uptime monitoring",
                  "Minor content updates",
                  "Performance optimisation",
                  "Email & phone support",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-foreground text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button variant="cta" size="lg" className="w-full" asChild>
                <Link to="/contact">Get Started with Maintenance</Link>
              </Button>
            </motion.div>

            {/* Local SEO — highlighted */}
            <motion.div variants={fadeUp} className="bg-card rounded-2xl border-2 border-accent shadow-card relative p-8 flex flex-col card-hover-lift">
              <motion.div
                className="absolute -top-3 left-8 px-3 py-1 gradient-cta text-accent-foreground text-xs font-semibold rounded-full shadow-cta"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                Best Value
              </motion.div>
              <h3 className="heading-card text-foreground mb-1">Local SEO</h3>
              <p className="text-muted-foreground text-sm mb-4">Dominate local search & Google Maps in your area</p>
              <div className="mb-6">
                <span className="text-sm text-muted-foreground">From</span>
                <span className="text-4xl font-extrabold text-foreground font-display ml-2">$1,000</span>
                <span className="text-muted-foreground ml-1">/month</span>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {[
                  "Google Business Profile setup & ongoing optimisation",
                  "Local keyword research & targeting strategy",
                  "On-page SEO for all key service pages",
                  "Local citation building & NAP consistency",
                  "Google Maps / 3-Pack ranking strategy",
                  "AEO — optimised for AI-generated answers (ChatGPT, Siri, Alexa)",
                  "GEO — structured content to appear in Google AI Overviews",
                  "Competitor analysis & gap identification",
                  "1× SEO blog article per month",
                  "Monthly performance reports & strategy call",
                  "Ongoing technical SEO health monitoring",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-foreground text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button variant="cta" size="lg" className="w-full" asChild>
                <Link to="/contact">Get a Custom Quote</Link>
              </Button>
            </motion.div>

            {/* PPC */}
            <motion.div variants={fadeUp} className="bg-card rounded-2xl border border-border shadow-card p-8 flex flex-col card-hover-lift">
              <h3 className="heading-card text-foreground mb-1">Google Ads Management</h3>
              <p className="text-muted-foreground text-sm mb-4">Targeted ads that bring instant leads</p>
              <div className="mb-6">
                <span className="text-sm text-muted-foreground">From</span>
                <span className="text-4xl font-extrabold text-foreground font-display ml-2">$800</span>
                <span className="text-muted-foreground ml-1">/month</span>
                <p className="text-xs text-muted-foreground mt-1">+ 15% of ad spend · No lock-in contracts</p>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {[
                  "Full Google Ads campaign setup & management",
                  "Keyword research & smart bid strategy",
                  "Ad copywriting & ongoing A/B testing",
                  "Landing page recommendations",
                  "Google Analytics & conversion tracking",
                  "Competitor analysis & benchmarking",
                  "Weekly optimisation & bid adjustments",
                  "Transparent monthly reporting — no hidden fees",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-foreground text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button variant="cta" size="lg" className="w-full" asChild>
                <Link to="/contact">Get a Custom Quote</Link>
              </Button>
            </motion.div>
          </ScrollReveal>

          <motion.p
            className="text-center text-sm text-muted-foreground mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            All prices in AUD. Custom quotes available for larger projects. No lock-in contracts.
          </motion.p>
        </div>
      </section>

      {/* ═══ Growth Bundle ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight max-w-5xl">
          <ScrollReveal className="text-center mb-14">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              <Rocket className="w-4 h-4" />
              Website + PPC + SEO
            </motion.div>
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">Growth Bundle</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              A conversion-focused website, instant leads from Google Ads, and long-term organic dominance — all managed for you.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal>
            <motion.div variants={fadeUp} className="bg-card rounded-2xl border-2 border-accent shadow-card relative overflow-hidden">
              {/* Price header */}
              <div className="gradient-hero relative px-8 py-8 text-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(217_71%_30%/0.4),transparent_70%)]" />
                <div className="relative z-10">
                  <motion.div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold mb-4"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Rocket className="w-3.5 h-3.5" />
                    Maximum Growth
                  </motion.div>
                  <p className="text-primary-foreground/70 text-sm mb-1">Investment</p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-extrabold text-primary-foreground font-display">$2,500</span>
                    <span className="text-primary-foreground/70">/month</span>
                  </div>
                  <p className="text-primary-foreground/50 text-sm mt-2">Excl. ad spend · No lock-in contracts</p>
                </div>
              </div>

              {/* Three phases */}
              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Phase 1: Website */}
                  <div className="space-y-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg gradient-cta flex items-center justify-center">
                        <Globe className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground font-display">Phase 1: The Foundation</h3>
                        <p className="text-xs text-accent font-semibold uppercase tracking-wider">Website Build</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Conversion-focused business website (up to 10 pages)",
                        "Mobile-responsive, fast-loading design",
                        "SEO-ready structure & on-page optimisation",
                        "Contact forms, click-to-call & lead capture",
                        "Google Analytics & Search Console setup",
                      ].map((f) => (
                        <li key={f} className="flex items-start gap-3 text-foreground text-sm">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Phase 2: PPC */}
                  <div className="space-y-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg gradient-cta flex items-center justify-center">
                        <Target className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground font-display">Phase 2: Lead Accelerator</h3>
                        <p className="text-xs text-accent font-semibold uppercase tracking-wider">Google Ads (PPC)</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Google Search Ads targeting high-intent local searches",
                        "Complete campaign build, keyword targeting & negative keyword scrubbing",
                        "Weekly bid adjustments & A/B ad copy testing to lower CPL",
                        "Conversion page audit — ensure ad traffic actually converts",
                      ].map((f) => (
                        <li key={f} className="flex items-start gap-3 text-foreground text-sm">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Phase 3: SEO */}
                  <div className="space-y-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg gradient-cta flex items-center justify-center">
                        <Search className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground font-display">Phase 3: Authority Engine</h3>
                        <p className="text-xs text-accent font-semibold uppercase tracking-wider">Local SEO</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Google Business Profile optimisation — dominate the Wollongong 3-Pack",
                        "Technical on-page SEO for your top 5 revenue-generating pages",
                        "1× SEO-optimised \"Local Authority\" article per month",
                        "Monthly site speed & mobile performance monitoring",
                      ].map((f) => (
                        <li key={f} className="flex items-start gap-3 text-foreground text-sm">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-8 border-t border-border text-center">
                  <p className="text-muted-foreground text-sm mb-4">
                    A brand-new website, immediate leads from ads, and unstoppable organic rankings. Everything you need to grow.
                  </p>
                  <Button variant="cta" size="lg" asChild>
                    <Link to="/contact">Get Started with the Growth Bundle <ArrowRight className="w-5 h-5 ml-1" /></Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Final CTA ═══ */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        <div className="container-tight px-4 py-20 text-center relative z-10">
          <ScrollReveal>
            <motion.h2 variants={fadeUp} className="heading-section text-primary-foreground mb-4">Need Something Custom?</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-4">
              Every business is different. Get in touch for a free, tailored quote based on exactly what you need.
            </motion.p>
            <motion.p variants={fadeUp} className="text-primary-foreground/50 text-sm mb-8">
              We take on a limited number of new clients each month — get in touch to check availability.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Request a Free Quote <ArrowRight className="w-5 h-5 ml-1" /></Link>
              </Button>
            </motion.div>
          </ScrollReveal>
        </div>
        {/* Top wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 rotate-180">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-[hsl(210_15%_94%)]" />
          </svg>
        </div>
      </section>

      <FAQ
        faqs={pricingFAQ}
        title="Web Design Pricing — Frequently Asked Questions"
      />
    </Layout>
  );
};

export default Pricing;
