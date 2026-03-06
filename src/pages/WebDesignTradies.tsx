import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Wrench, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOMeta } from "@/components/SEOMeta";
import { Breadcrumb } from "@/components/Breadcrumb";
import Layout from "@/components/Layout";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const WebDesignTradies = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Tradie Website Design Wollongong",
    "description": "Professional website design for tradies and contractors in Wollongong, Sydney and NSW. Custom sites built to generate leads and phone calls.",
    "provider": {
      "@type": "Organization",
      "name": "Digital Edge Studio",
      "url": "https://digitaledgestudio.com"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Tradies and Contractors"
    },
    "areaServed": ["Wollongong", "Sydney", "NSW"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you build websites for tradies in Wollongong?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — tradie website design is our specialty. We build websites for plumbers, electricians, builders, cleaners, painters, and all types of contractors in Wollongong, Sydney, and across NSW."
        }
      },
      {
        "@type": "Question",
        "name": "What makes a good tradie website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A great tradie website is fast, mobile-friendly, shows up in local Google searches, has your phone number prominently displayed, and makes it easy for customers to request a quote. We build all of this in."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a tradie website cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our tradie website packages start from $800. We keep it simple and affordable so tradies can get a professional website without breaking the bank."
        }
      },
      {
        "@type": "Question",
        "name": "Will my tradie website rank on Google?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We include SEO setup in all our tradie websites — including keyword optimisation, Google Business Profile setup, and local SEO targeting for your service area (Wollongong, Sydney, or wherever you operate)."
        }
      },
      {
        "@type": "Question",
        "name": "Can you build websites for specific trades like plumbers or electricians?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We build industry-specific websites for plumbers, electricians, builders, cleaners, painters, landscapers, HVAC technicians, and more — each tailored to attract the right customers for that trade."
        }
      }
    ]
  };

  const trades = [
    "Plumbers", "Electricians", "Builders & Carpenters", "Cleaners", "Painters",
    "Landscapers", "HVAC & Air Con", "Concreters", "Tilers", "Roofers",
    "Fencers", "Pest Control"
  ];

  const features = [
    { title: "Click-to-Call Phone Number", desc: "Your number front and centre on every page — one tap and customers are calling you." },
    { title: "Get a Quote Forms", desc: "Simple enquiry forms that capture leads and send them straight to your inbox." },
    { title: "Local SEO Built-In", desc: "Optimised for Wollongong, Sydney, and your specific service area from day one." },
    { title: "Google Business Profile Setup", desc: "We set up and optimise your GMB so you show up in Google Maps." },
    { title: "Mobile-First Design", desc: "Most tradie searches happen on phones — your site will look perfect on all devices." },
    { title: "Before & After Gallery", desc: "Show off your work with photo galleries that build trust and convert visitors." },
    { title: "Fast Loading Speed", desc: "Nobody waits for slow sites. We build fast-loading sites that Google loves." },
    { title: "Reviews & Testimonials", desc: "Display your customer reviews to build credibility and convert more visitors." },
  ];

  const testimonials = [
    { name: "James T.", role: "Plumber, Wollongong", quote: "Since Digital Edge rebuilt our website, we've had a 60% increase in phone calls from Google. Best investment we've made." },
    { name: "Mark L.", role: "Electrician, Illawarra", quote: "The local SEO work has been a game changer. We're now showing up at the top of Google Maps in our area." },
    { name: "Dave B.", role: "Builder, Sydney", quote: "We went from zero online presence to ranking on page one for local searches within 3 months. Incredible results." },
  ];

  return (
    <Layout>
      <SEOMeta
        title="Tradie Website Design Wollongong | Web Design for Tradies | Digital Edge"
        description="Professional website design for tradies in Wollongong and Sydney. We build websites for plumbers, electricians, builders, and all trades that generate real leads and phone calls."
        keywords="tradie website design wollongong, web design for tradies, plumber website design, electrician website design, builder website design, mobile friendly website design wollongong, wordpress website developer wollongong, tradie marketing wollongong"
        canonical="https://digitaledgestudio.com/web-design-tradies"
        ogTitle="Tradie Website Design Wollongong | Digital Edge Studio"
        ogDescription="Websites built specifically for tradies in Wollongong and Sydney. Get more phone calls, more leads, and more customers online."
        serviceSchema={serviceSchema}
        faqSchema={faqSchema}
      />

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Web Design for Tradies' }
      ]} />

      {/* Hero */}
      <section className="gradient-hero">
        <div className="container-tight px-4 py-16 md:py-24">
          <motion.div className="max-w-3xl" {...fadeUp}>
            <div className="flex items-center gap-2 text-primary-foreground/70 text-sm mb-4">
              <Wrench className="w-4 h-4" />
              <span>Built Specifically for Tradies & Contractors</span>
            </div>
            <h1 className="heading-display text-primary-foreground mb-4">
              Tradie Website Design Wollongong
            </h1>
            <p className="text-body-lg text-primary-foreground/75 max-w-2xl mb-8">
              We build websites that get tradies more phone calls and more jobs. Fast, mobile-friendly, and optimised to rank locally — so customers in Wollongong and Sydney find you before your competitors.
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

      {/* Trades We Serve */}
      <section className="bg-muted py-10">
        <div className="container-tight px-4">
          <p className="text-center text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wide">Trades We Build Websites For</p>
          <div className="flex flex-wrap justify-center gap-3">
            {trades.map((trade) => (
              <span key={trade} className="bg-card border border-border rounded-full px-4 py-2 text-sm font-medium text-foreground">
                {trade}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <motion.div className="text-center mb-14" {...fadeUp}>
            <h2 className="heading-section text-foreground mb-4">
              Everything a Tradie Website Needs to Generate Leads
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              We've built websites for dozens of tradies and know exactly what works. Here's what every tradie website needs.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <motion.div key={f.title} className="bg-card rounded-xl p-6 border border-border shadow-card" {...fadeUp}>
                <CheckCircle2 className="w-5 h-5 text-accent mb-3" />
                <h3 className="font-bold text-foreground font-display text-sm mb-2">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <h2 className="heading-section text-foreground mb-6">
                Why Most Tradie Websites Don't Work (And How We Fix That)
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Most tradie websites are either a DIY mess that looks unprofessional, a cheap template that doesn't rank on Google, or an overpriced agency site that just sits there doing nothing.
                </p>
                <p>
                  We build tradie websites differently. Every element is designed to generate leads — from the phone number on the homepage to the SEO that gets you found for searches like "plumber Wollongong" or "electrician near me."
                </p>
                <p>
                  We understand tradies are busy. That's why we handle everything — you just show up, we take care of the rest.
                </p>
              </div>
            </motion.div>
            <div className="space-y-4">
              <h3 className="font-bold text-foreground font-display text-lg mb-4">What Our Tradie Clients Get:</h3>
              {[
                "More phone calls from local Google searches",
                "A professional website that builds customer trust",
                "Google Maps ranking for your service area",
                "A quote form that captures leads 24/7",
                "A fast site that loads on any device",
                "Ongoing support so you're never stuck",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <p className="text-sm text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <motion.div className="text-center mb-14" {...fadeUp}>
            <h2 className="heading-section text-foreground mb-4">What Tradies Say</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <motion.div key={t.name} className="bg-card rounded-xl p-6 border border-border shadow-card" {...fadeUp}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight max-w-3xl mx-auto">
          <motion.div className="text-center mb-10" {...fadeUp}>
            <h2 className="heading-section text-foreground mb-4">Tradie Website FAQs</h2>
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
            Ready to Get More Jobs from Your Website?
          </h2>
          <p className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
            Get a free quote for your tradie website. We'll discuss your trade, your service area, and build a site that generates real leads.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Your Free Tradie Website Quote <ArrowRight className="w-5 h-5 ml-1" /></Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/pricing">See Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WebDesignTradies;
