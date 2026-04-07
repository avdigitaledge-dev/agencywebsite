"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MapPin, Star, BarChart3, Target, TrendingUp, Globe, Search, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ScrollReveal } from "@/components/ScrollReveal";
import { staggerB, fadeUpB } from "@/lib/animations";

const DigitalMarketingWollongong = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does a digital marketing agency do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A digital marketing agency manages your online presence across multiple channels — SEO, Google Ads, social media, content marketing, and email. At Digital Edge Studio, we create integrated strategies that drive qualified leads and measurable revenue for Wollongong businesses."
        }
      },
      {
        "@type": "Question",
        "name": "How much does digital marketing cost in Wollongong?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our digital marketing packages start from $1,000/month for individual services like SEO or Google Ads. Bundled packages offering multiple services start from $2,800/month. We offer transparent pricing with no hidden fees or lock-in contracts."
        }
      },
      {
        "@type": "Question",
        "name": "How long before I see results from digital marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Google Ads can generate leads within days. SEO typically shows results in 3–6 months. Social media builds brand awareness over time. We provide monthly reporting so you can track progress from day one."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer social media marketing in Wollongong?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we manage social media marketing for Wollongong businesses across Facebook, Instagram, and LinkedIn. This includes content creation, scheduling, community management, and paid social advertising."
        }
      },
      {
        "@type": "Question",
        "name": "What's included in your digital marketing packages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our packages include strategy development, campaign setup and management, content creation, monthly reporting, and ongoing optimisation. Every package is tailored to your business goals and budget."
        }
      },
      {
        "@type": "Question",
        "name": "Can you manage Google Ads and SEO together?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Running Google Ads and SEO together is the most effective approach — Ads deliver immediate leads while SEO builds long-term organic traffic. We manage both to maximise your ROI."
        }
      }
    ]
  };

  const services = [
    { title: "SEO & Local SEO", desc: "Rank higher in Google for Wollongong-specific keywords. We optimise your site and Google Business Profile to drive organic traffic and local leads.", link: "/services/seo" },
    { title: "Google Ads & PPC", desc: "Targeted pay-per-click campaigns that put your business at the top of Google instantly. Only pay when someone clicks through to your site.", link: "/services/google-ads" },
    { title: "Social Media Marketing", desc: "Build your brand on Facebook, Instagram, and LinkedIn. We handle content creation, scheduling, community management, and paid social campaigns." },
    { title: "Content Marketing", desc: "Strategic blog posts, landing pages, and website copy that attracts your ideal customers and positions your business as a local authority." },
    { title: "Email Marketing", desc: "Nurture leads and retain customers with automated email sequences, newsletters, and targeted campaigns that drive repeat business." },
    { title: "Conversion Rate Optimisation", desc: "Turn more website visitors into paying customers. We analyse user behaviour and optimise your site for maximum conversions." },
  ];

  const testimonials = [
    { name: "James T.", role: "Plumber, Wollongong", quote: "Since Digital Edge rebuilt our website, we've had a 60% increase in phone calls from Google. Best investment we've made." },
    { name: "Sarah M.", role: "Small Business Owner, Wollongong", quote: "They made the whole process easy and stress-free. Our new website looks incredible and we're getting more bookings than ever." },
    { name: "Mark L.", role: "Tradie, Illawarra", quote: "The local SEO work has been a game changer. We're now showing up at the top of Google Maps in our area." },
  ];

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Digital Marketing Wollongong | SEO, Google Ads & Social Media",
    "description": "Full-service digital marketing in Wollongong. SEO, Google Ads, social media, and content marketing by Digital Edge Studio. Free strategy session.",
    "url": "https://digitaledgestudio.com/digital-marketing-wollongong",
    "mainEntity": {
      "@type": "Service",
      "name": "Digital Marketing in Wollongong",
      "provider": { "@id": "https://digitaledgestudio.com/#business" },
      "areaServed": {
        "@type": "City",
        "name": "Wollongong",
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
        { label: 'Digital Marketing Wollongong' }
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
              Digital Marketing Agency in Wollongong
            </motion.h1>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/75 max-w-2xl mb-8">
              Grow your Wollongong business with integrated digital marketing — SEO, Google Ads, social media, and content strategy that drives qualified leads and measurable revenue.
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
            {["Local Wollongong Agency", "No Lock-In Contracts", "Measurable ROI", "Free Strategy Session", "Data-Driven Campaigns"].map((item) => (
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
              Digital Marketing Services in Wollongong
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Everything your Wollongong business needs to attract more customers, generate qualified leads, and grow revenue online.
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
                Why Choose a Local Wollongong Digital Marketing Agency?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  When you partner with a local Wollongong digital marketing agency, you get more than campaigns — you get a team that understands your market, your competitors, and what it takes to win customers in the Illawarra region.
                </p>
                <p>
                  We know the local landscape, the seasonal trends, and the search behaviour of Wollongong consumers. That insight shapes every campaign we run, from the keywords we target to the ad copy we write.
                </p>
                <p>
                  Unlike faceless agencies or overseas teams, you deal directly with the people managing your campaigns — and we're accountable for every dollar you spend.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/contact">Talk to a Wollongong Marketing Expert <ArrowRight className="w-4 h-4 ml-1" /></Link>
                </Button>
              </div>
            </motion.div>
            <motion.div variants={fadeUpB} className="space-y-4">
              {[
                { title: "Local Market Knowledge", desc: "We understand Wollongong's business landscape and what local customers search for." },
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
              What Wollongong Businesses Say
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
              Real Digital Marketing Results in Wollongong
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
              Digital Marketing Wollongong — Frequently Asked Questions
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
              Based in the Illawarra, we deliver digital marketing services for businesses across NSW.
            </motion.p>
          </ScrollReveal>
          <ScrollReveal variant="B" className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <motion.div variants={fadeUpB}>
              <Link href="/web-design-sydney" className="group flex gap-4 p-6 bg-card rounded-xl border border-border shadow-card card-hover-lift">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-foreground font-display group-hover:text-accent transition-colors mb-1">Web Design Sydney</h3>
                  <p className="text-sm text-muted-foreground">Affordable web design for businesses across all Sydney regions — CBD, Western Sydney, Sutherland Shire & more.</p>
                  <span className="text-sm text-accent font-medium mt-2 inline-flex items-center gap-1">Learn more <ArrowRight className="w-3 h-3" /></span>
                </div>
              </Link>
            </motion.div>
            <motion.div variants={fadeUpB}>
              <Link href="/web-design-illawarra" className="group flex gap-4 p-6 bg-card rounded-xl border border-border shadow-card card-hover-lift">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-foreground font-display group-hover:text-accent transition-colors mb-1">Web Design Illawarra</h3>
                  <p className="text-sm text-muted-foreground">Serving Shellharbour, Nowra, Kiama, Dapto, and the wider Illawarra region with local web design & SEO.</p>
                  <span className="text-sm text-accent font-medium mt-2 inline-flex items-center gap-1">Learn more <ArrowRight className="w-3 h-3" /></span>
                </div>
              </Link>
            </motion.div>
            <motion.div variants={fadeUpB}>
              <Link href="/seo-wollongong" className="group flex gap-4 p-6 bg-card rounded-xl border border-border shadow-card card-hover-lift">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-foreground font-display group-hover:text-accent transition-colors mb-1">SEO Wollongong</h3>
                  <p className="text-sm text-muted-foreground">Dedicated SEO services for Wollongong businesses — local SEO, technical SEO, and content strategy to grow organic traffic.</p>
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
        {/* Top wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 rotate-180">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
        <div className="container-tight px-4 py-20 text-center relative z-10">
          <ScrollReveal variant="B">
            <motion.h2 variants={fadeUpB} className="heading-section text-primary-foreground mb-4">
              Ready to Grow Your Wollongong Business Online?
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
              Book a free strategy session and discover how integrated digital marketing can drive more leads and revenue for your Wollongong business.
            </motion.p>
            <motion.div variants={fadeUpB} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="btn-shimmer" asChild>
                <Link href="/contact">Book Your Free Strategy Session <ArrowRight className="w-5 h-5 ml-1" /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link href="/services">View Our Services</Link>
              </Button>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingWollongong;
