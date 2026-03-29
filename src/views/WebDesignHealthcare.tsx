"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ScrollReveal } from "@/components/ScrollReveal";
import { staggerB, fadeUpB } from "@/lib/animations";

const WebDesignHealthcare = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Healthcare Website Design Sydney",
    "description": "Professional website design for healthcare providers in Sydney and NSW — doctors, dentists, physiotherapists, allied health, and NDIS providers.",
    "provider": {
      "@type": "Organization",
      "name": "Digital Edge Studio",
      "url": "https://digitaledgestudio.com"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Healthcare and Allied Health Providers"
    },
    "areaServed": ["Sydney", "Wollongong", "NSW"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you build websites for healthcare providers in Sydney?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we specialise in healthcare website design for practices across Sydney and NSW, including GPs, dentists, physiotherapists, psychologists, chiropractors, and allied health providers."
        }
      },
      {
        "@type": "Question",
        "name": "Can you build NDIS provider websites?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We build professional websites for NDIS providers that explain your services clearly, meet accessibility standards, and help participants and families find you online."
        }
      },
      {
        "@type": "Question",
        "name": "Do healthcare websites need to meet any special requirements?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Healthcare websites benefit from WCAG accessibility compliance, HTTPS security, clear privacy policies, and trust signals like qualifications and registrations. We build all of this in as standard."
        }
      },
      {
        "@type": "Question",
        "name": "Can you integrate online booking systems for healthcare practices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we can integrate popular booking systems like HotDoc, Cliniko, Nookal, or custom solutions so patients can book appointments directly from your website."
        }
      }
    ]
  };

  const healthcareTypes = [
    { title: "General Practice (GPs)", desc: "Patient-friendly practice websites with appointment booking and health information." },
    { title: "Dentists & Dental Clinics", desc: "Build patient trust with professional dental websites that explain treatments and enable online bookings." },
    { title: "Physiotherapists", desc: "Showcase your treatment approach, team, and patient success stories to attract new patients." },
    { title: "Psychologists & Counsellors", desc: "Sensitive, professional websites that create a safe first impression for people seeking mental health support." },
    { title: "Chiropractors", desc: "Highlight your technique, specialties, and patient reviews to grow your chiropractic practice." },
    { title: "NDIS Providers", desc: "Accessible, compliant websites for NDIS providers that help participants and families understand your services." },
  ];

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Healthcare Web Design' }
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
              <Heart className="w-4 h-4" />
              <span>Websites for Healthcare & Allied Health Providers</span>
            </motion.div>
            <motion.h1 variants={fadeUpB} className="heading-display text-primary-foreground mb-4">
              Healthcare Website Design Sydney
            </motion.h1>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/75 max-w-2xl mb-8">
              Professional, trust-building websites for healthcare providers across Sydney and NSW. We design sites that attract new patients, integrate online booking, and reflect the care and professionalism of your practice.
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

      {/* Healthcare Types */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal variant="B" className="text-center mb-14">
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">
              Healthcare & Allied Health Providers We Work With
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              From solo practitioners to multi-location clinics — we build websites for all types of healthcare providers across Sydney and NSW.
            </motion.p>
          </ScrollReveal>
          <ScrollReveal variant="B" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthcareTypes.map((type) => (
              <motion.div key={type.title} variants={fadeUpB} className="bg-card rounded-xl p-6 border border-border shadow-card card-hover-lift">
                <Heart className="w-5 h-5 text-accent mb-3" />
                <h3 className="font-bold text-foreground font-display mb-2">{type.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{type.desc}</p>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight">
          <ScrollReveal variant="B" className="text-center mb-14">
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">
              What's Included in a Healthcare Website
            </motion.h2>
          </ScrollReveal>
          <ScrollReveal variant="B" className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { title: "Online Booking Integration", desc: "Connect HotDoc, Cliniko, Nookal, or a custom solution so patients can book online 24/7." },
              { title: "Patient Trust Signals", desc: "Display qualifications, registrations (AHPRA), awards, and patient testimonials to build confidence." },
              { title: "WCAG Accessibility", desc: "Built to web accessibility standards so all patients — including those with disabilities — can use your site." },
              { title: "Local SEO for Practitioners", desc: "Rank for searches like 'dentist Sydney' or 'physiotherapist near me' in your specific suburb." },
              { title: "HTTPS Security", desc: "All healthcare websites are secured with SSL — protecting patient data and building trust." },
              { title: "Mobile-First Design", desc: "Most patients search on mobile. Your site will look and work perfectly on phones and tablets." },
            ].map((f) => (
              <motion.div key={f.title} variants={fadeUpB} className="flex gap-4 p-5 bg-card rounded-xl border border-border shadow-card card-hover-lift">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-foreground font-display text-sm mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-tight max-w-3xl mx-auto">
          <ScrollReveal variant="B" className="text-center mb-10">
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">Healthcare Website FAQs</motion.h2>
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
              Real Results in Healthcare
            </motion.h2>
            <motion.div variants={fadeUpB} className="grid md:grid-cols-1 gap-6 max-w-lg mx-auto">
              <Link href="/portfolio/coastal-physio-wollongong" className="group">
                <div className="bg-card rounded-xl border border-border p-6 hover:border-accent transition-colors card-hover-lift">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">Healthcare</span>
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mt-2 mb-2">Coastal Physiotherapy</h3>
                  <p className="text-sm text-muted-foreground mb-3">165% increase in new patient bookings</p>
                  <span className="text-sm text-accent font-medium">View Case Study →</span>
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
              Ready to Attract More Patients Online?
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
              Get a free, no-obligation website quote for your healthcare practice. We'll design a site that reflects the quality of your care.
            </motion.p>
            <motion.div variants={fadeUpB}>
              <Button variant="hero" size="lg" className="btn-shimmer" asChild>
                <Link href="/contact">Get Your Free Healthcare Website Quote <ArrowRight className="w-5 h-5 ml-1" /></Link>
              </Button>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default WebDesignHealthcare;
