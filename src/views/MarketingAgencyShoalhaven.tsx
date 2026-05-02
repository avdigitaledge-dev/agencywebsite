"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MapPin, Star, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ScrollReveal } from "@/components/ScrollReveal";
import { staggerB, fadeUpB } from "@/lib/animations";

const MarketingAgencyShoalhaven = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you offer digital marketing in the Shoalhaven?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we provide full-service digital marketing for businesses across the Shoalhaven region including Nowra, Berry, Huskisson, Jervis Bay, and the wider South Coast. We're based in nearby Wollongong and understand the local market."
        }
      },
      {
        "@type": "Question",
        "name": "How much does digital marketing cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our digital marketing packages start from $1,000/month for individual services like SEO or Google Ads. Bundled packages offering multiple services start from $2,800/month. We offer transparent pricing with no hidden fees or lock-in contracts."
        }
      },
      {
        "@type": "Question",
        "name": "Can you help a tourism business in the Shoalhaven?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely — the Shoalhaven is one of NSW's top tourism destinations, and we specialise in helping tourism and hospitality businesses attract more visitors through SEO, Google Ads, social media, and content marketing. From accommodation to tour operators, we know what works."
        }
      },
      {
        "@type": "Question",
        "name": "Do you manage Google Ads for Shoalhaven businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we manage targeted Google Ads campaigns for Shoalhaven businesses. We focus on high-intent local keywords and tourism-related searches to drive qualified leads and bookings to your business."
        }
      },
      {
        "@type": "Question",
        "name": "What digital marketing services do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer a full suite of digital marketing services: SEO and local SEO, Google Ads management, social media marketing, content marketing, email marketing, and conversion rate optimisation. Every service is tailored to your business goals."
        }
      }
    ]
  };

  const services = [
    { title: "SEO & Local SEO", desc: "Rank higher in Google for Shoalhaven-specific keywords. We optimise your site and Google Business Profile to drive organic traffic and local leads.", link: "/services/seo" },
    { title: "Google Ads & PPC", desc: "Targeted pay-per-click campaigns that put your Shoalhaven business at the top of Google instantly. Only pay when someone clicks through to your site.", link: "/services/google-ads" },
    { title: "Social Media Marketing", desc: "Build your brand on Facebook, Instagram, and LinkedIn. We handle content creation, scheduling, community management, and paid social campaigns." },
    { title: "Content Marketing", desc: "Strategic blog posts, landing pages, and website copy that attract visitors and position your Shoalhaven business as a local authority." },
    { title: "Email Marketing", desc: "Nurture leads and retain customers with automated email sequences, newsletters, and targeted campaigns that drive repeat business and bookings." },
    { title: "Conversion Rate Optimisation", desc: "Turn more website visitors into paying customers. We analyse user behaviour and optimise your site for maximum conversions and bookings." },
    { title: "WordPress & Custom Web Development", desc: "WordPress sites, custom builds, and migrations for Shoalhaven businesses. See our full guide for Nowra and Shoalhaven WordPress projects.", link: "/blog/wordpress-developer-nowra-shoalhaven" },
  ];

  const testimonials = [
    { name: "James T.", role: "Plumber, Wollongong", quote: "Since Digital Edge rebuilt our website, we've had a 60% increase in phone calls from Google. Best investment we've made." },
    { name: "Sarah M.", role: "Small Business Owner, Wollongong", quote: "They made the whole process easy and stress-free. Our new website looks incredible and we're getting more bookings than ever." },
    { name: "Mark L.", role: "Tradie, Illawarra", quote: "The local SEO work has been a game changer. We're now showing up at the top of Google Maps in our area." },
  ];

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Digital Marketing Agency Shoalhaven | SEO & Google Ads",
    "description": "Full-service digital marketing for Shoalhaven businesses. Local SEO, Google Ads, social media, and web design. Serving Nowra, Berry, and the South Coast.",
    "url": "https://digitaledgestudio.com/marketing-agency-shoalhaven",
    "mainEntity": {
      "@type": "Service",
      "name": "Marketing in Shoalhaven",
      "provider": { "@id": "https://digitaledgestudio.com/#business" },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Shoalhaven",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "New South Wales"
        }
      }
    }
  };

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Digital Marketing Shoalhaven' }
      ]} />

      {/* Hero */}
      <section className="gradient-hero-mesh relative overflow-hidden section-divider-wave section-divider-wave-muted">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_70%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        <div className="container-tight px-4 py-16 md:py-24 relative z-10">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="show"
            variants={staggerB}
          >
            <motion.div variants={fadeUpB} className="flex items-center gap-2 text-primary-foreground/70 text-sm mb-4">
              <BarChart3 className="w-4 h-4" />
              <span>Digital Marketing Services</span>
            </motion.div>
            <motion.h1 variants={fadeUpB} className="heading-display text-primary-foreground mb-4">
              Digital Marketing Agency Shoalhaven
            </motion.h1>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/75 max-w-2xl mb-8">
              Grow your Shoalhaven business with integrated digital marketing — SEO, Google Ads, social media, and content strategy tailored for the South Coast's tourism, hospitality, and local business community.
            </motion.p>
            <motion.div variants={fadeUpB} className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link href="/contact">Book Your Free Strategy Session <ArrowRight className="w-5 h-5 ml-1" /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link href="/free-website-review">Free Website Review</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-muted py-8">
        <div className="container-tight px-4">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            {["Serving the Shoalhaven Region", "No Lock-In Contracts", "Measurable ROI", "Free Strategy Session", "Data-Driven Campaigns"].map((item) => (
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
          <ScrollReveal variant="B" className="text-center mb-14">
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">
              Digital Marketing Services in the Shoalhaven
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Everything your Shoalhaven business needs to attract more customers, generate qualified leads, and grow revenue online.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal variant="B" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <motion.div key={s.title} variants={fadeUpB} className="bg-card rounded-2xl p-6 border border-border shadow-card card-premium">
                <CheckCircle2 className="w-6 h-6 text-accent mb-3" />
                <h3 className="font-bold text-foreground font-display mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{s.desc}</p>
                {s.link && (
                  <Link href={s.link} className="text-sm text-accent font-medium inline-flex items-center gap-1 hover:underline">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </Link>
                )}
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding relative" style={{ background: "var(--surface-gradient)" }}>
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="container-tight relative z-10">
          <ScrollReveal variant="B" className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUpB}>
              <h2 className="heading-section text-foreground mb-6">
                Why Choose a Nearby Digital Marketing Agency for the Shoalhaven?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The Shoalhaven is one of NSW's most dynamic regions — from the thriving businesses of Nowra and Berry to the tourism-driven economy of Jervis Bay and Huskisson. Your digital marketing partner needs to understand this unique market.
                </p>
                <p>
                  At Digital Edge Studio, we're based in nearby Wollongong and understand the South Coast's seasonal trends, tourism patterns, and local business landscape. That insight shapes every campaign we run.
                </p>
                <p>
                  Unlike faceless agencies or overseas teams, you deal directly with the people managing your campaigns — and we're accountable for every dollar you spend.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/contact">Talk to a Marketing Expert <ArrowRight className="w-4 h-4 ml-1" /></Link>
                </Button>
              </div>
            </motion.div>
            <motion.div variants={fadeUpB} className="space-y-4">
              {[
                { title: "Shoalhaven Market Knowledge", desc: "We understand the Shoalhaven's business landscape, tourism economy, and what local customers search for." },
                { title: "Integrated Strategy", desc: "SEO, Ads, social, and content working together — not siloed campaigns that compete with each other." },
                { title: "Transparent Reporting", desc: "Monthly reports showing exactly where your budget goes and the results it delivers." },
                { title: "No Lock-In Contracts", desc: "We earn your business every month. Stay because it works, not because you're locked in." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-4 bg-card rounded-xl border border-border card-hover-lift">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background relative">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="container-tight relative z-10">
          <ScrollReveal variant="B" className="text-center mb-14">
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">
              What Local Businesses Say
            </motion.h2>
          </ScrollReveal>
          <ScrollReveal variant="B" className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={fadeUpB} className="bg-card rounded-xl p-6 border border-border shadow-card card-hover-lift">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent-warm text-accent-warm" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal variant="B">
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-8 text-center">
              Real Digital Marketing Results
            </motion.h2>
            <motion.div variants={fadeUpB} className="grid md:grid-cols-3 gap-6">
              <Link href="/portfolio/volt-current-electrical-wollongong" className="group">
                <div className="bg-card rounded-xl border border-border p-6 hover:border-accent transition-colors card-hover-lift">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">Electrician</span>
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mt-2 mb-2">Volt Current Electrical</h3>
                  <p className="text-sm text-muted-foreground mb-3">40+ leads/month from zero online presence</p>
                  <span className="text-sm text-accent font-medium">View Case Study →</span>
                </div>
              </Link>
              <Link href="/portfolio/coastal-physio-wollongong" className="group">
                <div className="bg-card rounded-xl border border-border p-6 hover:border-accent transition-colors card-hover-lift">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">Healthcare</span>
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mt-2 mb-2">Coastal Physiotherapy</h3>
                  <p className="text-sm text-muted-foreground mb-3">165% increase in new patient bookings</p>
                  <span className="text-sm text-accent font-medium">View Case Study →</span>
                </div>
              </Link>
              <Link href="/portfolio/bright-clean-services" className="group">
                <div className="bg-card rounded-xl border border-border p-6 hover:border-accent transition-colors card-hover-lift">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">Cleaning</span>
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mt-2 mb-2">Bright & Clean</h3>
                  <p className="text-sm text-muted-foreground mb-3">210% increase in organic leads</p>
                  <span className="text-sm text-accent font-medium">View Case Study →</span>
                </div>
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-tight max-w-3xl mx-auto">
          <ScrollReveal variant="B" className="text-center mb-10">
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">
              Digital Marketing Shoalhaven — Frequently Asked Questions
            </motion.h2>
          </ScrollReveal>
          <ScrollReveal variant="B" className="space-y-4">
            {faqSchema.mainEntity.map((q) => (
              <motion.div key={q.name} variants={fadeUpB} className="bg-card rounded-xl p-6 border border-border card-hover-lift">
                <h3 className="font-semibold text-foreground mb-2">{q.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{q.acceptedAnswer.text}</p>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Also Serving Nearby Areas */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight">
          <ScrollReveal variant="B" className="text-center mb-10">
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">
              Also Serving Nearby Areas
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Based in Wollongong, we deliver digital marketing services for businesses across the South Coast and NSW.
            </motion.p>
          </ScrollReveal>
          <ScrollReveal variant="B" className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <motion.div variants={fadeUpB}>
              <Link href="/web-design-nowra" className="group flex gap-4 p-6 bg-card rounded-xl border border-border shadow-card card-hover-lift">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-foreground font-display group-hover:text-accent transition-colors mb-1">Web Design Nowra</h3>
                  <p className="text-sm text-muted-foreground">Professional web design for Nowra, Bomaderry, and Shoalhaven businesses.</p>
                  <span className="text-sm text-accent font-medium mt-2 inline-flex items-center gap-1">Learn more <ArrowRight className="w-3 h-3" /></span>
                </div>
              </Link>
            </motion.div>
            <motion.div variants={fadeUpB}>
              <Link href="/web-design-south-coast" className="group flex gap-4 p-6 bg-card rounded-xl border border-border shadow-card card-hover-lift">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-foreground font-display group-hover:text-accent transition-colors mb-1">Web Design South Coast</h3>
                  <p className="text-sm text-muted-foreground">Serving Berry, Huskisson, Jervis Bay, Ulladulla, Milton, and the wider South Coast.</p>
                  <span className="text-sm text-accent font-medium mt-2 inline-flex items-center gap-1">Learn more <ArrowRight className="w-3 h-3" /></span>
                </div>
              </Link>
            </motion.div>
            <motion.div variants={fadeUpB}>
              <Link href="/web-design-wollongong" className="group flex gap-4 p-6 bg-card rounded-xl border border-border shadow-card card-hover-lift">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-foreground font-display group-hover:text-accent transition-colors mb-1">Web Design Wollongong</h3>
                  <p className="text-sm text-muted-foreground">Professional, reliable web design for Wollongong businesses — custom websites that rank and convert.</p>
                  <span className="text-sm text-accent font-medium mt-2 inline-flex items-center gap-1">Learn more <ArrowRight className="w-3 h-3" /></span>
                </div>
              </Link>
            </motion.div>
            <motion.div variants={fadeUpB}>
              <Link href="/web-design-kiama" className="group flex gap-4 p-6 bg-card rounded-xl border border-border shadow-card card-hover-lift">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-foreground font-display group-hover:text-accent transition-colors mb-1">Web Design Kiama</h3>
                  <p className="text-sm text-muted-foreground">Websites for Kiama, Gerringong, Jamberoo, and Minnamurra businesses.</p>
                  <span className="text-sm text-accent font-medium mt-2 inline-flex items-center gap-1">Learn more <ArrowRight className="w-3 h-3" /></span>
                </div>
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 rotate-180">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
        <div className="container-tight px-4 py-20 text-center relative z-10">
          <ScrollReveal variant="B">
            <motion.h2 variants={fadeUpB} className="heading-section text-primary-foreground mb-4">
              Ready to Grow Your Shoalhaven Business Online?
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
              Book a free strategy session and discover how integrated digital marketing can drive more leads and revenue for your Shoalhaven business.
            </motion.p>
            <motion.div variants={fadeUpB} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="btn-shimmer" asChild>
                <Link href="/contact">Book Your Free Strategy Session <ArrowRight className="w-5 h-5 ml-1" /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link href="/pricing">See Our Pricing</Link>
              </Button>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default MarketingAgencyShoalhaven;
