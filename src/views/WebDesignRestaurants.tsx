"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, UtensilsCrossed, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ScrollReveal } from "@/components/ScrollReveal";
import { staggerB, fadeUpB } from "@/lib/animations";


const WebDesignRestaurants = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Restaurant Website Design Wollongong",
    "description": "Professional website design for restaurants, cafés, and hospitality businesses in Wollongong, Sydney and NSW. Custom sites built to fill tables and drive bookings.",
    "provider": {
      "@type": "Organization",
      "name": "Digital Edge Studio",
      "url": "https://digitaledgestudio.com"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Restaurants and Hospitality Businesses"
    },
    "areaServed": ["Wollongong", "Sydney", "NSW"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "16",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a restaurant website cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our restaurant website packages start from $1,200. This includes menu integration, booking system setup, Google Business Profile optimisation, and mobile-responsive design."
        }
      },
      {
        "@type": "Question",
        "name": "Can you add online booking to my restaurant website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we integrate popular booking platforms like ResDiary, Quandoo, OpenTable, or a custom solution so customers can reserve a table directly from your website."
        }
      },
      {
        "@type": "Question",
        "name": "Do you include online ordering or delivery integration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We can integrate online ordering systems for takeaway and delivery, connecting with platforms like Square, Mr Yum, or custom solutions."
        }
      },
      {
        "@type": "Question",
        "name": "Will my restaurant show up on Google Maps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We set up and optimise your Google Business Profile as part of every restaurant website project, helping you rank in Google Maps for local searches."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a restaurant website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most restaurant websites are completed within 2–4 weeks, depending on the complexity of features like online ordering, booking systems, and menu integration."
        }
      },
      {
        "@type": "Question",
        "name": "Can I update the menu myself?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we build all our restaurant websites with an easy-to-use content management system so you can update your menu, prices, and specials anytime."
        }
      }
    ]
  };

  const subNiches = [
    "Restaurants", "Cafés", "Bars & Pubs", "Takeaway & Delivery", "Catering Companies", "Food Trucks"
  ];

  const features = [
    { title: "Online Menu Display", desc: "Beautiful, mobile-friendly menus that are easy to browse and update — no PDF downloads needed." },
    { title: "Table Booking Integration", desc: "Let customers book tables directly from your website with integrated booking systems." },
    { title: "Google Maps & Local SEO", desc: "Show up when people search 'restaurants near me' in Wollongong and surrounding areas." },
    { title: "Mobile-First Design", desc: "Most diners search on their phones. Your site will look perfect on every device." },
    { title: "Photo Gallery", desc: "Showcase your dishes, venue, and atmosphere with a stunning photo gallery." },
    { title: "Social Media Integration", desc: "Connect your Instagram, Facebook, and TikTok to keep your website fresh." },
    { title: "Online Ordering Integration", desc: "Accept takeaway and delivery orders directly through your website." },
    { title: "Google Business Profile Setup", desc: "We set up and optimise your Google Business Profile for maximum local visibility." },
  ];

  const testimonials = [
    { name: "Sarah M.", role: "Restaurant Owner, Wollongong", quote: "Since launching our new website, online bookings have increased by 45%. The menu integration is seamless and our customers love it." },
    { name: "Tony R.", role: "Café Owner, Illawarra", quote: "We went from barely showing up on Google to being one of the top results in our area. The ROI has been incredible." },
    { name: "Lisa K.", role: "Bar Manager, Wollongong", quote: "The website perfectly captures our venue's atmosphere. We've seen a noticeable increase in event enquiries since it went live." },
  ];

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Industries', path: '/industries' },
        { label: 'Restaurant Website Design' }
      ]} />

      {/* Hero */}
      <section className="gradient-hero-warm relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        <div className="container-tight px-4 py-16 md:py-24 relative z-10">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="show"
            variants={staggerB}
          >
            <motion.div variants={fadeUpB} className="flex items-center gap-2 text-primary-foreground/70 text-sm mb-4">
              <UtensilsCrossed className="w-4 h-4" />
              <span>Built for Hospitality</span>
            </motion.div>
            <motion.h1 variants={fadeUpB} className="heading-display text-primary-foreground mb-4">
              Restaurant Website Design Wollongong
            </motion.h1>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/75 max-w-2xl mb-8">
              Your restaurant's website should do more than look good — it should fill tables. We build fast, mobile-friendly websites for Wollongong restaurants, cafés, and bars with built-in menus, booking systems, and local SEO.
            </motion.p>
            <motion.div variants={fadeUpB} className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link href="/contact">Get a Free Quote <ArrowRight className="w-5 h-5 ml-1" /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link href="/free-website-review">Free Website Review</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-muted" />
          </svg>
        </div>
      </section>

      {/* Sub-niches Strip */}
      <section className="bg-muted py-10">
        <div className="container-tight px-4">
          <p className="text-center text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wide">Hospitality Businesses We Build Websites For</p>
          <div className="flex flex-wrap justify-center gap-3">
            {subNiches.map((niche) => (
              <span key={niche} className="bg-card border border-border rounded-full px-4 py-2 text-sm font-medium text-foreground">
                {niche}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal variant="B" className="text-center mb-14">
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">
              Everything a Restaurant Website Needs
            </motion.h2>
          </ScrollReveal>
          <ScrollReveal variant="B" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <motion.div key={f.title} variants={fadeUpB} className="bg-card rounded-xl p-6 border border-border shadow-card card-hover-lift">
                <CheckCircle2 className="w-5 h-5 text-accent mb-3" />
                <h3 className="font-bold text-foreground font-display text-sm mb-2">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight">
          <ScrollReveal variant="B" className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUpB}>
              <h2 className="heading-section text-foreground mb-6">
                Why Your Restaurant Needs a Professional Website
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  90% of diners research restaurants online before visiting. If your website is outdated, slow, or hard to find on Google, you're losing customers to competitors every day.
                </p>
                <p>
                  Google Maps visibility drives foot traffic. When someone searches 'best restaurant Wollongong' or 'café near me,' your website and Google Business Profile need to work together to get you found.
                </p>
                <p>
                  Mobile ordering is no longer a nice-to-have — it's expected. We build restaurant websites that make it easy for customers to browse your menu, book a table, or order takeaway from their phone.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeUpB} className="space-y-4">
              <h3 className="font-bold text-foreground font-display text-lg mb-4">What Our Restaurant Clients Get:</h3>
              {[
                "More bookings from local Google searches",
                "A stunning website that showcases your food and venue",
                "Google Maps ranking for your area",
                "Online ordering and table booking built in",
                "A fast site that loads on any device",
                "Ongoing support so you're never stuck",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border card-hover-lift">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <p className="text-sm text-foreground">{item}</p>
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
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">What Hospitality Clients Say</motion.h2>
          </ScrollReveal>
          <ScrollReveal variant="B" className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={fadeUpB} className="bg-card rounded-xl p-6 border border-border shadow-card card-hover-lift">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent-warm text-accent-warm" />)}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </ScrollReveal>
          <div className="text-center mt-8">
            <Link href="/reviews" className="text-accent hover:underline inline-flex items-center gap-1 mt-4">
              Read our client reviews <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight max-w-3xl mx-auto">
          <ScrollReveal variant="B" className="text-center mb-10">
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">Restaurant Website Design — Frequently Asked Questions</motion.h2>
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

      {/* Local Case Studies */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal variant="B">
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-8 text-center">
              Real Results for Hospitality Businesses
            </motion.h2>
            <motion.div variants={fadeUpB} className="grid md:grid-cols-1 max-w-lg mx-auto gap-6">
              <Link href="/portfolio/finer-pizza-restaurant" className="group">
                <div className="bg-card rounded-xl border border-border p-6 hover:border-accent transition-colors card-hover-lift">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">Restaurant</span>
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mt-2 mb-2">Finer Pizza — Melbourne, VIC</h3>
                  <p className="text-sm text-muted-foreground mb-3">65% increase in online orders and $4,200/mo saved in delivery app commissions</p>
                  <span className="text-sm text-accent font-medium">View Case Study →</span>
                </div>
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Industries */}
      <section className="section-padding bg-muted">
        <div className="container-tight">
          <ScrollReveal variant="B" className="text-center mb-8">
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">More Industries We Serve</motion.h2>
          </ScrollReveal>
          <ScrollReveal variant="B" className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Tradies & Contractors", href: "/web-design-tradies" },
              { name: "Beauty Salons & Spas", href: "/web-design-beauty-salons" },
              { name: "Gyms & Fitness", href: "/web-design-gyms" },
            ].map((ind) => (
              <motion.div key={ind.name} variants={fadeUpB}>
                <Link href={ind.href} className="group block">
                  <div className="bg-card rounded-xl p-6 border border-border shadow-card card-hover-lift text-center">
                    <h3 className="font-bold text-foreground font-display group-hover:text-accent transition-colors">{ind.name}</h3>
                    <span className="text-sm text-accent font-medium mt-2 inline-block">Learn More →</span>
                  </div>
                </Link>
              </motion.div>
            ))}
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
              Ready to Fill More Tables?
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
              Get a free quote for your restaurant website. We'll discuss your venue, your goals, and build a site that brings in more customers.
            </motion.p>
            <motion.div variants={fadeUpB} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="btn-shimmer" asChild>
                <Link href="/contact">Get Your Free Restaurant Website Quote <ArrowRight className="w-5 h-5 ml-1" /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link href="/pricing">See Pricing</Link>
              </Button>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default WebDesignRestaurants;
