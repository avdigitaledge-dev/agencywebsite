import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOMeta } from "@/components/SEOMeta";
import { Breadcrumb } from "@/components/Breadcrumb";
import Layout from "@/components/Layout";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const Pricing = () => {
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
          "price": "400",
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
        title="Web Design & Digital Marketing Pricing | Digital Edge Studio"
        description="Transparent pricing for web design, digital marketing, and SEO services for tradies and small businesses. No hidden fees or lock-in contracts."
        keywords="web design pricing, seo pricing wollongong, digital marketing rates"
        ogTitle="Pricing | Digital Edge Studio"
        ogDescription="Honest, transparent pricing for web design and digital marketing services. See our packages and rates."
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
              <Button variant="outline" size="lg" className="w-full" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
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
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
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
              <Button variant="outline" size="lg" className="w-full" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Local SEO */}
            <div className="bg-card rounded-2xl border border-border shadow-card p-8 flex flex-col">
              <h3 className="heading-card text-foreground mb-1">Local SEO</h3>
              <p className="text-muted-foreground text-sm mb-4">Get found by more local customers</p>
              <div className="mb-6">
                <span className="text-sm text-muted-foreground">From</span>
                <span className="text-4xl font-extrabold text-foreground font-display ml-2">$400</span>
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
          <p className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
            Every business is different. Get in touch for a free, tailored quote based on exactly what you need.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Request a Free Quote <ArrowRight className="w-5 h-5 ml-1" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
