"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Smile, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ScrollReveal } from "@/components/ScrollReveal";
import { staggerB, fadeUpB } from "@/lib/animations";


const WebDesignDentists = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Dentist Website Design Sydney",
    "description": "Professional website design for dentists and dental clinics in Sydney, Wollongong and NSW. Custom sites built to attract patients with online bookings, treatment pages, and local SEO.",
    "provider": {
      "@type": "Organization",
      "name": "Digital Edge Studio",
      "url": "https://digitaledgestudio.com"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Dentists and Dental Clinics"
    },
    "areaServed": ["Sydney", "Wollongong", "NSW"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "5",
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
        "name": "How much does a dental website cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our dental website packages start from $1,500. This includes professional design, online booking integration, treatment pages, before/after gallery, and local SEO setup."
        }
      },
      {
        "@type": "Question",
        "name": "Can patients book appointments online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we integrate with popular dental booking platforms like HotDoc, Cliniko, or custom solutions so patients can book appointments directly from your website."
        }
      },
      {
        "@type": "Question",
        "name": "Do you include before and after photo galleries?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We build professional before/after galleries that showcase your work and help potential patients visualise their results."
        }
      },
      {
        "@type": "Question",
        "name": "Can I update treatment information myself?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — all our dental websites come with an easy-to-use content management system so you can update treatment descriptions, pricing, and team information anytime."
        }
      },
      {
        "@type": "Question",
        "name": "Will my dental clinic appear in Google Maps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We set up and optimise your Google Business Profile as part of every dental website project, helping your clinic appear in Google Maps for local searches."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with dental practice management software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We can integrate your website with popular dental software and booking systems to streamline your patient acquisition workflow."
        }
      }
    ]
  };

  const niches = [
    "General Dentists", "Cosmetic Dentists", "Orthodontists", "Paediatric Dentists", "Emergency Dental",
    "Dental Specialists"
  ];

  const features = [
    { title: "Online Booking Integration", desc: "Let patients book appointments online 24/7 with integrated booking systems like HotDoc or Cliniko." },
    { title: "Treatment & Service Pages", desc: "Dedicated pages for each treatment — teeth whitening, implants, Invisalign, and more — boosting your SEO." },
    { title: "Before & After Gallery", desc: "Showcase your results with professional before and after photo galleries that build patient confidence." },
    { title: "Patient Testimonials", desc: "Display patient reviews and success stories to build trust with potential new patients." },
    { title: "New Patient Forms", desc: "Online patient registration and medical history forms that save time at the front desk." },
    { title: "Insurance & Payment Info", desc: "Clear pages explaining accepted insurers, payment options, and health fund claims." },
    { title: "Local SEO for Suburb Targeting", desc: "Rank for searches like 'dentist Sydney' or 'dental clinic near me' in your key suburbs." },
    { title: "Mobile-First Design", desc: "Most patients search on their phones. Your dental website will look perfect on every device." },
  ];

  const testimonials = [
    { name: "Dr. Sarah K.", role: "Dentist, Sydney", quote: "Online bookings through our website have increased by 60% since the redesign. Patients love how easy it is to find information about treatments." },
    { name: "Dr. Michael P.", role: "Cosmetic Dentist, North Shore", quote: "The before and after gallery has been fantastic for our cosmetic services. Patients come in already confident about what we can achieve." },
    { name: "Dr. Emma L.", role: "Practice Owner, Inner West", quote: "We now rank on the first page for 'dentist Inner West Sydney.' The website has been the best marketing investment we've made." },
  ];

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Industries', path: '/industries' },
        { label: 'Dentist Website Design' }
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
              <Smile className="w-4 h-4" />
              <span>Built for Dental Practices</span>
            </motion.div>
            <motion.h1 variants={fadeUpB} className="heading-display text-primary-foreground mb-4">
              Dentist Website Design Sydney
            </motion.h1>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/75 max-w-2xl mb-8">
              Attract more patients with a professional dental website. We build patient-friendly websites for Sydney dental clinics with online bookings, treatment pages, before/after galleries, and local SEO.
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

      {/* Sub-niches Strip */}
      <section className="bg-muted py-10">
        <div className="container-tight px-4">
          <p className="text-center text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wide">Dental Professionals We Build Websites For</p>
          <div className="flex flex-wrap justify-center gap-3">
            {niches.map((niche) => (
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
              Everything a Dental Website Needs
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              We've built websites for dental practices and know exactly what works. Here's what every dental website needs.
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
                Why Your Dental Clinic Needs a Professional Website
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Patients choose dentists online. When someone searches 'dentist near me' or 'teeth whitening Sydney,' they're comparing multiple clinics — your website is your chance to stand out and win that new patient.
                </p>
                <p>
                  A professional dental website with treatment information, before/after photos, and easy online booking removes the friction that stops potential patients from contacting you. Make it easy, and they'll choose you.
                </p>
                <p>
                  Local SEO is critical for dental practices. Most patients search for a dentist within their local area. We optimise your website and Google Business Profile to ensure you show up in those crucial local searches.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeUpB} className="space-y-4">
              <h3 className="font-bold text-foreground font-display text-lg mb-4">What Our Dental Clients Get:</h3>
              {[
                "More new patient bookings from Google searches",
                "A professional website that builds patient trust",
                "Google Maps ranking for your suburb",
                "Online booking that works 24/7",
                "Treatment pages that rank for dental keywords",
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
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">What Dentists Say</motion.h2>
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
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight max-w-3xl mx-auto">
          <ScrollReveal variant="B" className="text-center mb-10">
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">Dentist Website FAQs</motion.h2>
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
              Real Results for Dental Practices
            </motion.h2>
            <motion.div variants={fadeUpB} className="grid md:grid-cols-1 max-w-lg mx-auto gap-6">
              <Link href="/portfolio" className="group">
                <div className="bg-card rounded-xl border border-border p-6 hover:border-accent transition-colors card-hover-lift">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">Dental</span>
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mt-2 mb-2">Sydney Dental Clinic</h3>
                  <p className="text-sm text-muted-foreground mb-3">60% increase in online patient bookings</p>
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
              { name: "Healthcare & Allied Health", href: "/web-design-healthcare" },
              { name: "NDIS Providers", href: "/web-design-ndis" },
              { name: "Beauty Salons & Spas", href: "/web-design-beauty-salons" },
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
              Ready to Attract More Patients?
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
              Get a free quote for your dental website. We'll design a professional site that makes it easy for patients to find you, trust you, and book an appointment.
            </motion.p>
            <motion.div variants={fadeUpB} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="btn-shimmer" asChild>
                <Link href="/contact">Get Your Free Dental Website Quote <ArrowRight className="w-5 h-5 ml-1" /></Link>
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

export default WebDesignDentists;
