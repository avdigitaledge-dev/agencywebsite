"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Stethoscope, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ScrollReveal } from "@/components/ScrollReveal";
import { staggerB, fadeUpB } from "@/lib/animations";

const WebDesignVeterinary = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Veterinary Website Design Sydney",
    "description": "Professional website design for veterinary clinics in Sydney. Appointment bookings, service pages, pet owner resources, and local SEO to grow your practice.",
    "provider": {
      "@type": "Organization",
      "name": "Digital Edge Studio",
      "url": "https://digitaledgestudio.com"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Veterinary Clinics and Pet Care Businesses"
    },
    "areaServed": ["Sydney", "Wollongong", "NSW"],
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
        "name": "How much does a vet website cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our veterinary website packages start from $1,500. This includes professional design, online booking, service pages, team profiles, and local SEO setup."
        }
      },
      {
        "@type": "Question",
        "name": "Can pet owners book appointments online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we integrate online booking systems so pet owners can schedule appointments directly from your website, 24/7."
        }
      },
      {
        "@type": "Question",
        "name": "Do you include emergency contact features?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We prominently display your emergency contact information, after-hours details, and urgent care instructions so pet owners can reach you quickly."
        }
      },
      {
        "@type": "Question",
        "name": "Can I add a pet owner resource section?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we build resource hubs with articles and guides on pet care, nutrition, and common health concerns that also boost your SEO."
        }
      },
      {
        "@type": "Question",
        "name": "Will my vet clinic rank on Google in Sydney?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We include local SEO setup and Google Business Profile optimisation in every project, helping your clinic rank for searches like 'vet Sydney' and 'veterinary clinic near me.'"
        }
      },
      {
        "@type": "Question",
        "name": "Can I update staff and service info myself?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — all our veterinary websites come with an easy-to-use content management system so you can update team bios, services, and information anytime."
        }
      }
    ]
  };

  const subNiches = [
    "Veterinary Clinics", "Emergency Vet Services", "Mobile Vets",
    "Specialist Animal Hospitals", "Pet Groomers", "Doggy Daycares"
  ];

  const features = [
    { title: "Online Appointment Booking", desc: "Let pet owners book appointments online 24/7 — reducing phone calls and admin workload." },
    { title: "Service & Treatment Pages", desc: "Dedicated pages for each service — vaccinations, desexing, dental, surgery, and more." },
    { title: "Emergency Contact Prominent Display", desc: "Your emergency contact details displayed prominently so pet owners can reach you in a crisis." },
    { title: "Pet Owner Resource Hub", desc: "Helpful articles and guides on pet care, nutrition, and common health concerns." },
    { title: "Team & Vet Profile Pages", desc: "Professional profiles for each vet and staff member with qualifications and specialties." },
    { title: "New Patient Registration Forms", desc: "Online registration forms for new patients that save time at the front desk." },
    { title: "Local SEO & Google Maps", desc: "Rank for searches like 'vet Sydney' or 'veterinary clinic near me' in your area." },
    { title: "Mobile-First Design", desc: "Pet owners search on their phones, often urgently. Your site will work perfectly on every device." },
  ];

  const testimonials = [
    { name: "Dr. Amanda K.", role: "Veterinarian, Sydney", quote: "Online bookings through our website have significantly reduced phone calls. Pet owners love the convenience of booking anytime." },
    { name: "Dr. Tom R.", role: "Vet Clinic Owner, Northern Beaches", quote: "Our new website ranks on the first page for local searches. We've seen a steady increase in new patient registrations." },
    { name: "Lisa M.", role: "Practice Manager, Inner West", quote: "The pet owner resource section has been wonderful for client education. Pet owners regularly tell us they found helpful information on our site." },
  ];

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Industries', path: '/industries' },
        { label: 'Veterinary Website Design' }
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
              <Stethoscope className="w-4 h-4" />
              <span>Built for Veterinary Practices</span>
            </motion.div>
            <motion.h1 variants={fadeUpB} className="heading-display text-primary-foreground mb-4">
              Veterinary Website Design Sydney
            </motion.h1>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/75 max-w-2xl mb-8">
              Help pet owners find and trust your practice with a professional veterinary website. We build patient-friendly sites for Sydney vet clinics with online bookings, service pages, and local SEO.
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
          <p className="text-center text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wide">Veterinary & Pet Businesses We Build Websites For</p>
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
              Everything a Veterinary Website Needs
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              We know what vet clinics need online. Here&apos;s what every veterinary website should include.
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
                Why Your Vet Clinic Needs a Professional Website
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Pet owners choose their vet online. When someone searches &quot;vet near me&quot; or &quot;emergency vet Sydney,&quot; they need to find your clinic quickly — and trust you with their pet&apos;s health based on what they see online.
                </p>
                <p>
                  A professional website with clear service information, vet profiles, and easy online booking gives pet owners confidence. It&apos;s the digital equivalent of a clean, welcoming reception area.
                </p>
                <p>
                  Emergency situations drive urgent searches. When your emergency contact is prominently displayed and your website loads fast on mobile, you capture those critical moments when pet owners need you most.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeUpB} className="space-y-4">
              <h3 className="font-bold text-foreground font-display text-lg mb-4">What Our Vet Clients Get:</h3>
              {[
                "More pet owners finding your clinic on Google",
                "A professional website that builds trust",
                "Google Maps ranking for your area",
                "Online booking that reduces admin workload",
                "Emergency contact prominently displayed",
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
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">What Vet Practices Say</motion.h2>
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
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">Veterinary Website FAQs</motion.h2>
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
              Real Results for Veterinary Practices
            </motion.h2>
            <motion.div variants={fadeUpB} className="grid md:grid-cols-1 gap-6 max-w-lg mx-auto">
              <Link href="/portfolio" className="group">
                <div className="bg-card rounded-xl border border-border p-6 hover:border-accent transition-colors card-hover-lift">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">Veterinary</span>
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mt-2 mb-2">Sydney Veterinary Clinic</h3>
                  <p className="text-sm text-muted-foreground mb-3">45% increase in new patient registrations</p>
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
              { name: "Dentists & Dental Clinics", href: "/web-design-dentists" },
              { name: "NDIS Providers", href: "/web-design-ndis" },
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
              Ready to Grow Your Veterinary Practice?
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
              Get a free quote for your veterinary website. We&apos;ll build a professional site that helps pet owners find, trust, and book your clinic.
            </motion.p>
            <motion.div variants={fadeUpB} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="btn-shimmer" asChild>
                <Link href="/contact">Get Your Free Vet Website Quote <ArrowRight className="w-5 h-5 ml-1" /></Link>
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

export default WebDesignVeterinary;
