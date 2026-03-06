import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOMeta } from "@/components/SEOMeta";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import Layout from "@/components/Layout";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const Pricing = () => {
  const pricingFAQ = [
    {
      question: "How much does a website cost in Wollongong?",
      answer: "Our web design packages start from $800 for a Starter Website (up to 5 pages) and $1,700 for a Business Website (up to 10 pages). All prices are in AUD with no hidden fees."
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
        "price": "800",
        "priceCurrency": "AUD",
        "seller": { "@type": "Organization", "name": "Digital Edge Studio" }
      },
      {
        "@type": "Offer",
        "name": "Business Website",
        "description": "Up to 10 pages, conversion-focused design, on-page SEO for all pages, Google Analytics & Search Console, blog section, social media integration, 3 rounds of revisions, priority support during build.",
        "price": "1700",
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
        "description": "Google Business Profile management, local keyword targeting, on-page SEO optimisation, citation building, monthly performance reports, ongoing strategy adjustments.",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "550",
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
        description="Transparent web design pricing in Wollongong. Packages from $800 — no hidden fees, no lock-in contracts. Find out how much a website costs in Wollongong."
        keywords="web design pricing, affordable web design wollongong, wollongong web design packages pricing, how much does a website cost in wollongong, website redesign service wollongong, seo pricing wollongong, digital marketing rates"
        canonical="https://digitaledgestudio.com/pricing"
        ogTitle="Affordable Web Design Pricing Wollongong | Packages & Cost"
        ogDescription="Transparent pricing for web design and digital marketing in Wollongong. From $800 for a starter website — no hidden fees."
        serviceSchema={pricingSchema}
      />

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Pricing' }
      ]} />
      {/* Hero */}
      <section className="gradient-hero">
        <div className="container-tight px-4 py-16 md:py-24">
          <motion.div className="max-w-3xl" {...fadeUp}>
            <h1 className="heading-display text-primary-foreground mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-body-lg text-primary-foreground/75 max-w-2xl">
              No hidden fees. No lock-in contracts. Just honest pricing for Australian businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Website Packages */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <motion.div className="text-center mb-14" {...fadeUp}>
            <h2 className="heading-section text-foreground mb-4">Website Packages</h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Get a professional website that's built to generate leads for your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Starter */}
            <div className="bg-card rounded-2xl border border-border shadow-card p-8 flex flex-col">
              <h3 className="heading-card text-foreground mb-1">Starter Website</h3>
              <p className="text-muted-foreground text-sm mb-4">Perfect for tradies and small service businesses</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-foreground font-display">$800</span>
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
            </div>

            {/* Business */}
            <div className="bg-card rounded-2xl border-2 border-accent shadow-card relative p-8 flex flex-col">
              <div className="absolute -top-3 left-8 px-3 py-1 gradient-cta text-accent-foreground text-xs font-semibold rounded-full">
                Most Popular
              </div>
              <h3 className="heading-card text-foreground mb-1">Business Website</h3>
              <p className="text-muted-foreground text-sm mb-4">For businesses serious about growing online</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-foreground font-display">$1,700</span>
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
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <motion.div className="text-center mb-12" {...fadeUp}>
            <h2 className="heading-section text-foreground mb-4">How We Compare</h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Not sure whether to use an agency, freelancer, or DIY platform? Here's an honest comparison.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 pr-6 text-muted-foreground font-medium w-1/5">Factor</th>
                  <th className="py-4 px-4 text-center w-1/5">
                    <span className="inline-block px-3 py-1 gradient-cta text-accent-foreground rounded-full text-xs font-semibold">Digital Edge Studio</span>
                  </th>
                  <th className="py-4 px-4 text-center text-muted-foreground font-medium w-1/5">Large Agency</th>
                  <th className="py-4 px-4 text-center text-muted-foreground font-medium w-1/5">Freelancer</th>
                  <th className="py-4 px-4 text-center text-muted-foreground font-medium w-1/5">DIY (Wix/Squarespace)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { factor: "Starting Price", us: "From $800", agency: "$5,000–$30,000", freelancer: "$500–$2,000", diy: "$0–$500/yr" },
                  { factor: "Local SEO Included", us: "✅ Yes", agency: "⚠️ Extra cost", freelancer: "⚠️ Rarely", diy: "❌ No" },
                  { factor: "Wollongong / NSW Knowledge", us: "✅ Local team", agency: "❌ Sydney-centric", freelancer: "⚠️ Varies", diy: "❌ None" },
                  { factor: "You Deal With", us: "✅ The actual designer", agency: "❌ Account manager", freelancer: "✅ Direct", diy: "❌ DIY only" },
                  { factor: "Ongoing Support", us: "✅ From $99/mo", agency: "⚠️ Expensive retainer", freelancer: "❌ Often disappears", diy: "❌ Self-service" },
                  { factor: "Turnaround Time", us: "✅ 4–8 weeks", agency: "❌ 3–6 months", freelancer: "⚠️ Varies", diy: "⚠️ DIY pace" },
                  { factor: "No Lock-In Contract", us: "✅ Yes", agency: "❌ 12-month retainers", freelancer: "✅ Usually", diy: "✅ Cancel anytime" },
                ].map((row) => (
                  <tr key={row.factor} className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 pr-6 font-medium text-foreground">{row.factor}</td>
                    <td className="py-4 px-4 text-center font-semibold text-accent">{row.us}</td>
                    <td className="py-4 px-4 text-center text-muted-foreground">{row.agency}</td>
                    <td className="py-4 px-4 text-center text-muted-foreground">{row.freelancer}</td>
                    <td className="py-4 px-4 text-center text-muted-foreground">{row.diy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Monthly Services */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight">
          <motion.div className="text-center mb-14" {...fadeUp}>
            <h2 className="heading-section text-foreground mb-4">Monthly Services</h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Ongoing support to keep your website running and your business growing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Maintenance */}
            <div className="bg-card rounded-2xl border border-border shadow-card p-8 flex flex-col">
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
            </div>

            {/* Local SEO */}
            <div className="bg-card rounded-2xl border border-border shadow-card p-8 flex flex-col">
              <h3 className="heading-card text-foreground mb-1">Local SEO</h3>
              <p className="text-muted-foreground text-sm mb-4">Get found by more local customers</p>
              <div className="mb-6">
                <span className="text-sm text-muted-foreground">From</span>
                <span className="text-4xl font-extrabold text-foreground font-display ml-2">$550</span>
                <span className="text-muted-foreground ml-1">/month</span>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {[
                  "Google Business Profile management",
                  "Local keyword targeting",
                  "On-page SEO optimisation",
                  "Citation building",
                  "Monthly performance reports",
                  "Ongoing strategy adjustments",
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
            </div>

            {/* PPC */}
            <div className="bg-card rounded-2xl border border-border shadow-card p-8 flex flex-col">
              <h3 className="heading-card text-foreground mb-1">Google Ads Management</h3>
              <p className="text-muted-foreground text-sm mb-4">Targeted ads that bring instant leads</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-foreground font-display">15%</span>
                <span className="text-muted-foreground ml-1">of ad spend</span>
                <p className="text-xs text-muted-foreground mt-1">Min. $250/mo management fee · No lock-in contracts</p>
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
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            All prices in AUD. Custom quotes available for larger projects. No lock-in contracts.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero">
        <div className="container-tight px-4 py-20 text-center">
          <h2 className="heading-section text-primary-foreground mb-4">Need Something Custom?</h2>
          <p className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-4">
            Every business is different. Get in touch for a free, tailored quote based on exactly what you need.
          </p>
          <p className="text-primary-foreground/50 text-sm mb-8">
            We take on a limited number of new clients each month — get in touch to check availability.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Request a Free Quote <ArrowRight className="w-5 h-5 ml-1" /></Link>
          </Button>
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
