import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOMeta } from "@/components/SEOMeta";
import { Breadcrumb } from "@/components/Breadcrumb";
import Layout from "@/components/Layout";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const WebDesignSydney = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Digital Edge Studio",
    "description": "Web design agency serving Sydney businesses — custom websites, local SEO, and digital marketing for small businesses and tradies across Sydney NSW",
    "url": "https://digitaledgestudio.com/web-design-sydney",
    "email": "enquiries@digitaledgestudio.com",
    "areaServed": [
      { "@type": "City", "name": "Sydney" },
      { "@type": "AdministrativeArea", "name": "Western Sydney" },
      { "@type": "AdministrativeArea", "name": "Sutherland Shire" },
      { "@type": "AdministrativeArea", "name": "South Sydney" },
      { "@type": "State", "name": "NSW" }
    ],
    "priceRange": "$$",
    "serviceType": ["Web Design", "Local SEO", "Digital Marketing", "Google Ads"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does web design cost in Sydney?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Sydney web design packages start from $800 for a Starter Website and $1,700 for a Business Website. We offer transparent, fixed pricing with no hidden fees — far more affordable than most Sydney agencies."
        }
      },
      {
        "@type": "Question",
        "name": "Can you build websites for Western Sydney businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we work with businesses across all Sydney regions including Western Sydney, Sutherland Shire, South Sydney, and the Inner West. We target location-specific SEO keywords for your suburb."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer SEO services for Sydney businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We provide local SEO, Google Business Profile optimisation, and content strategies to help Sydney businesses rank higher in local search results."
        }
      },
      {
        "@type": "Question",
        "name": "What makes you different from other Sydney web design agencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We focus exclusively on results — more leads, more phone calls, more customers. We're more affordable than most Sydney agencies, with no lock-in contracts and transparent pricing. You get a real partner, not a faceless agency."
        }
      }
    ]
  };

  const services = [
    { title: "Web Design Sydney", desc: "Custom, conversion-focused websites for Sydney businesses. We don't use generic templates — every site is built for your specific goals." },
    { title: "Local SEO Sydney", desc: "Rank higher in Sydney local search results. We target suburb-specific keywords so the right customers find you first." },
    { title: "Google Ads Sydney", desc: "Managed Google Ads campaigns for Sydney businesses. Pay only for clicks from real potential customers in your area." },
    { title: "Ecommerce Web Design", desc: "Shopify and WooCommerce stores for Sydney retailers wanting to sell online to customers across Australia." },
    { title: "Small Business Websites", desc: "Affordable web design for Sydney small businesses. Professional results without the big-agency price tag." },
    { title: "Website Redesign", desc: "Transform your outdated Sydney website into a modern, fast-loading site that converts visitors into customers." },
  ];

  return (
    <Layout>
      <SEOMeta
        title="Web Design Sydney | Affordable Website Designer | Digital Edge Studio"
        description="Professional web design for Sydney businesses. Custom websites, local SEO, and Google Ads for small businesses and tradies across Sydney, Western Sydney & Sutherland Shire."
        keywords="web design sydney, website designer sydney, web design agency sydney, affordable web design sydney, small business website design sydney, website design western sydney, web design sutherland shire, local seo sydney, ecommerce website designer sydney"
        ogTitle="Web Design Sydney | Digital Edge Studio"
        ogDescription="Professional, affordable web design for Sydney businesses. Custom websites, local SEO, and digital marketing for small businesses and tradies across Sydney NSW."
        orgSchema={localBusinessSchema}
        faqSchema={faqSchema}
      />

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Web Design Sydney' }
      ]} />

      {/* Hero */}
      <section className="gradient-hero">
        <div className="container-tight px-4 py-16 md:py-24">
          <motion.div className="max-w-3xl" {...fadeUp}>
            <div className="flex items-center gap-2 text-primary-foreground/70 text-sm mb-4">
              <MapPin className="w-4 h-4" />
              <span>Serving All Sydney Regions & NSW</span>
            </div>
            <h1 className="heading-display text-primary-foreground mb-4">
              Web Design Sydney
            </h1>
            <p className="text-body-lg text-primary-foreground/75 max-w-2xl mb-8">
              Affordable, professional web design for Sydney businesses. Custom websites that rank on Google, generate leads, and grow your business — without the inflated agency fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get a Free Quote <ArrowRight className="w-5 h-5 ml-1" /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-muted py-8">
        <div className="container-tight px-4">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            {["Serving All Sydney Regions", "No Lock-In Contracts", "From $800", "Free Consultation", "Local SEO Included"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <motion.div className="text-center mb-14" {...fadeUp}>
            <h2 className="heading-section text-foreground mb-4">
              Web Design & Digital Marketing for Sydney Businesses
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              From the CBD to Western Sydney and the Sutherland Shire — we build websites that make Sydney businesses stand out online.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <motion.div key={s.title} className="bg-card rounded-xl p-6 border border-border shadow-card" {...fadeUp}>
                <CheckCircle2 className="w-6 h-6 text-accent mb-3" />
                <h3 className="font-bold text-foreground font-display mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <h2 className="heading-section text-foreground mb-6">
                Affordable Sydney Web Design Without Compromise
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Sydney web design agencies often charge $5,000–$20,000 for websites that don't perform any better than ours. We cut through the inflated pricing to deliver real value for Sydney small businesses.
                </p>
                <p>
                  Whether you're in the Inner West, Northern Beaches, Western Sydney, or the Sutherland Shire — we build websites specifically optimised for your local area, targeting the keywords your customers actually search.
                </p>
                <p>
                  No lock-in contracts, no hidden fees. Just a professional website that works.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link to="/contact">Get a Free Sydney Web Design Quote <ArrowRight className="w-4 h-4 ml-1" /></Link>
                </Button>
              </div>
            </motion.div>
            <div className="space-y-4">
              {[
                { title: "Sydney Areas We Serve", desc: "Inner West, Western Sydney, Northern Beaches, Sutherland Shire, South Sydney, Eastern Suburbs, Hills District." },
                { title: "Transparent Sydney Pricing", desc: "Websites from $800. No surprise invoices, no ongoing lock-in — just honest pricing upfront." },
                { title: "Sydney-Specific SEO", desc: "We optimise for the suburbs and keywords your Sydney customers actually search." },
                { title: "Fast Turnaround", desc: "Most Sydney website projects completed in 4–8 weeks, not months." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-4 bg-card rounded-xl border border-border">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-tight max-w-3xl mx-auto">
          <motion.div className="text-center mb-10" {...fadeUp}>
            <h2 className="heading-section text-foreground mb-4">
              Sydney Web Design — Frequently Asked Questions
            </h2>
          </motion.div>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((q) => (
              <motion.div key={q.name} className="bg-card rounded-xl p-6 border border-border" {...fadeUp}>
                <h3 className="font-semibold text-foreground mb-2">{q.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{q.acceptedAnswer.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero">
        <div className="container-tight px-4 py-20 text-center">
          <h2 className="heading-section text-primary-foreground mb-4">
            Ready to Grow Your Sydney Business Online?
          </h2>
          <p className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
            Get a free, no-obligation quote for your Sydney website. We'll discuss your goals and build a solution that fits your budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Your Free Quote <ArrowRight className="w-5 h-5 ml-1" /></Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WebDesignSydney;
