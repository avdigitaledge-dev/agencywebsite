"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ScrollReveal } from "@/components/ScrollReveal";
import { staggerB, fadeUpB } from "@/lib/animations";

const WebDesignBeautySalons = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Beauty Salon Website Design Wollongong",
    "description": "Professional website design for beauty salons, hairdressers, and spas in Wollongong. Online bookings, service menus, photo galleries, and local SEO to attract more clients.",
    "provider": {
      "@type": "Organization",
      "name": "Digital Edge Studio",
      "url": "https://digitaledgestudio.com"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Beauty Salons and Wellness Businesses"
    },
    "areaServed": ["Wollongong", "Sydney", "NSW"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a beauty salon website cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our beauty salon website packages start from $1,200. This includes online booking integration, service menu, photo gallery, and local SEO setup."
        }
      },
      {
        "@type": "Question",
        "name": "Can clients book appointments online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we integrate with popular salon booking platforms like Fresha, Timely, Square, or custom solutions so clients can book 24/7."
        }
      },
      {
        "@type": "Question",
        "name": "Can I sell gift vouchers through my website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We set up gift voucher functionality so you can sell vouchers online — a great revenue stream, especially during holidays and special occasions."
        }
      },
      {
        "@type": "Question",
        "name": "Do you include a portfolio or gallery section?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we build beautiful gallery sections for before/after photos, portfolio work, and venue images that showcase your salon's quality."
        }
      },
      {
        "@type": "Question",
        "name": "Will my salon appear on Google Maps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We set up and optimise your Google Business Profile as part of every salon website project, helping you rank in Google Maps for local searches."
        }
      },
      {
        "@type": "Question",
        "name": "Can I update prices and services myself?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — all our salon websites come with an easy-to-use content management system so you can update services, prices, and team information anytime."
        }
      }
    ]
  };

  const subNiches = [
    "Hair Salons", "Beauty Salons", "Day Spas", "Nail Salons",
    "Barber Shops", "Skin Clinics", "Lash & Brow Studios"
  ];

  const features = [
    { title: "Online Booking Integration", desc: "Let clients book appointments 24/7 with integrated booking systems like Fresha, Timely, or Square." },
    { title: "Service Menu with Pricing", desc: "Display all your services, treatments, and pricing in a clear, easy-to-browse format." },
    { title: "Before & After Photo Gallery", desc: "Showcase your best work with stunning before and after photos that inspire new clients." },
    { title: "Stylist & Therapist Profiles", desc: "Professional profiles for each team member with specialties, experience, and booking links." },
    { title: "Gift Voucher Functionality", desc: "Sell gift vouchers directly through your website — a revenue stream that works year-round." },
    { title: "Instagram & Social Feed Integration", desc: "Display your latest Instagram posts on your website to keep content fresh and engaging." },
    { title: "Google Business Profile & Local SEO", desc: "Rank for searches like 'hair salon Wollongong' or 'beauty salon near me' in your area." },
    { title: "Mobile-First Design", desc: "Most clients search on their phones. Your salon website will look gorgeous on every device." },
  ];

  const testimonials = [
    { name: "Emma J.", role: "Hair Salon Owner, Wollongong", quote: "Our online bookings have tripled since launching the new website. Clients love being able to book and browse services at any time." },
    { name: "Nicole P.", role: "Beauty Therapist, Illawarra", quote: "The before and after gallery has been incredible for attracting new clients. They see the results and book straight away." },
    { name: "Kate B.", role: "Day Spa Manager, Wollongong", quote: "Gift voucher sales through our website have become a significant revenue stream, especially around holidays." },
  ];

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Industries', path: '/industries' },
        { label: 'Beauty Salon Website Design' }
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
              <Sparkles className="w-4 h-4" />
              <span>Built for Beauty & Wellness</span>
            </motion.div>
            <motion.h1 variants={fadeUpB} className="heading-display text-primary-foreground mb-4">
              Beauty Salon Website Design Wollongong
            </motion.h1>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/75 max-w-2xl mb-8">
              Attract more clients and fill your appointment book with a stunning website. We build beautiful, mobile-friendly websites for Wollongong salons with online bookings, service menus, and local SEO.
            </motion.p>
            <motion.div variants={fadeUpB} className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link href="/contact">Get a Free Quote <ArrowRight className="w-5 h-5 ml-1" /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link href="/pricing">View Pricing</Link>
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

      {/* Sub-niches */}
      <section className="bg-muted py-10">
        <div className="container-tight px-4">
          <p className="text-center text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wide">Beauty & Wellness Businesses We Build Websites For</p>
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
              Everything a Beauty Salon Website Needs
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              We know what beauty businesses need online. Here&apos;s what every salon website should include.
            </motion.p>
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
                Why Your Salon Needs a Professional Website
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Your clients expect to book online. If they can&apos;t find your services, check availability, and book an appointment from their phone, they&apos;ll choose a competitor who makes it easy.
                </p>
                <p>
                  Social media is great, but it&apos;s not enough. You don&apos;t own your Instagram followers — and the algorithm decides who sees your posts. A professional website gives you a platform you control, optimised to rank on Google.
                </p>
                <p>
                  Visual impact drives bookings. A beautifully designed website with high-quality photos of your work, a clear service menu, and easy booking creates the premium experience your clients expect.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeUpB} className="space-y-4">
              <h3 className="font-bold text-foreground font-display text-lg mb-4">What Our Salon Clients Get:</h3>
              {[
                "More bookings from local Google searches",
                "A stunning website that reflects your brand",
                "Google Maps ranking for your area",
                "Online booking that fills your calendar 24/7",
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
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">What Salon Owners Say</motion.h2>
          </ScrollReveal>
          <ScrollReveal variant="B" className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={fadeUpB} className="bg-card rounded-xl p-6 border border-border shadow-card card-hover-lift">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent-warm text-accent-warm" />)}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">&quot;{t.quote}&quot;</p>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight max-w-3xl mx-auto">
          <ScrollReveal variant="B" className="text-center mb-10">
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">Beauty Salon Website FAQs</motion.h2>
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

      {/* Case Studies */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal variant="B">
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-8 text-center">
              Real Results for Beauty Businesses
            </motion.h2>
            <motion.div variants={fadeUpB} className="grid md:grid-cols-1 gap-6 max-w-lg mx-auto">
              <Link href="/portfolio" className="group">
                <div className="bg-card rounded-xl border border-border p-6 hover:border-accent transition-colors card-hover-lift">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">Beauty & Wellness</span>
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mt-2 mb-2">Wollongong Hair Salon</h3>
                  <p className="text-sm text-muted-foreground mb-3">3x increase in online bookings</p>
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
              { name: "Gyms & Fitness", href: "/web-design-gyms" },
              { name: "Restaurants & Hospitality", href: "/web-design-restaurants" },
              { name: "Healthcare & Allied Health", href: "/web-design-healthcare" },
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
              Ready to Fill Your Appointment Book?
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
              Get a free quote for your salon website. We&apos;ll build a stunning site that attracts new clients and keeps your calendar full.
            </motion.p>
            <motion.div variants={fadeUpB} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="btn-shimmer" asChild>
                <Link href="/contact">Get Your Free Salon Website Quote <ArrowRight className="w-5 h-5 ml-1" /></Link>
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

export default WebDesignBeautySalons;
