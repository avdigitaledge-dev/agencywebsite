"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Dumbbell, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ScrollReveal } from "@/components/ScrollReveal";
import { staggerB, fadeUpB } from "@/lib/animations";

const WebDesignGyms = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Gym & Fitness Website Design Wollongong",
    "description": "Professional website design for gyms, personal trainers, and fitness studios in Wollongong. Membership signups, class timetables, online bookings, and local SEO.",
    "provider": {
      "@type": "Organization",
      "name": "Digital Edge Studio",
      "url": "https://digitaledgestudio.com"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Gyms and Fitness Businesses"
    },
    "areaServed": ["Wollongong", "Sydney", "NSW"],
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
        "name": "How much does a gym website cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our gym website packages start from $1,200. This includes class timetable display, membership signup functionality, trainer profiles, and local SEO setup."
        }
      },
      {
        "@type": "Question",
        "name": "Can members book classes online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we integrate online class booking systems so members can reserve their spot directly from your website or mobile phone."
        }
      },
      {
        "@type": "Question",
        "name": "Do you integrate with gym management software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We can integrate with popular gym management platforms like Mindbody, Glofox, or Wodify to sync memberships, bookings, and schedules."
        }
      },
      {
        "@type": "Question",
        "name": "Can I display a class timetable on my website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We build interactive class timetables that members can filter by class type, instructor, or day — and book directly."
        }
      },
      {
        "@type": "Question",
        "name": "Will my gym show up in local Google searches?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We include local SEO setup and Google Business Profile optimisation in every project, helping your gym rank for searches like 'gym Wollongong' and 'fitness centre near me.'"
        }
      },
      {
        "@type": "Question",
        "name": "Can personal trainers get their own profile pages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we create professional trainer profile pages with bios, qualifications, specialties, and direct contact or booking options."
        }
      }
    ]
  };

  const subNiches = [
    "Gyms & Fitness Centres", "Personal Trainers", "Yoga Studios",
    "Pilates Studios", "CrossFit Boxes", "Martial Arts Studios", "Dance Studios"
  ];

  const features = [
    { title: "Class Timetable & Schedule Display", desc: "Interactive class schedules that members can browse and filter by type, instructor, or time." },
    { title: "Online Membership Signup", desc: "Let new members sign up and pay for memberships directly through your website." },
    { title: "Class Booking Integration", desc: "Members can book into classes online, reducing admin and no-shows." },
    { title: "Trainer Profile Pages", desc: "Showcase your trainers with professional profiles, qualifications, and specialties." },
    { title: "Photo & Video Gallery", desc: "Show off your facility, classes, and community with engaging visual content." },
    { title: "Google Business Profile & Local SEO", desc: "Rank for searches like 'gym Wollongong' or 'personal trainer near me' in your area." },
    { title: "Social Media Integration", desc: "Connect your Instagram, Facebook, and YouTube to keep your website content fresh." },
    { title: "Mobile-First Design", desc: "Most people search for gyms on their phones. Your site will look perfect on every device." },
  ];

  const testimonials = [
    { name: "Chris M.", role: "Gym Owner, Wollongong", quote: "Since launching our new website, online membership signups have increased by 40%. The class timetable feature is a huge hit with members." },
    { name: "Jade R.", role: "Yoga Studio Owner, Illawarra", quote: "The booking integration has reduced our admin workload significantly. Members love being able to book classes from their phones." },
    { name: "Sam T.", role: "Personal Trainer, Wollongong", quote: "My professional website has helped me stand out from other trainers in the area. I'm now fully booked weeks in advance." },
  ];

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Industries', path: '/industries' },
        { label: 'Gym & Fitness Website Design' }
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
              <Dumbbell className="w-4 h-4" />
              <span>Built for Fitness Businesses</span>
            </motion.div>
            <motion.h1 variants={fadeUpB} className="heading-display text-primary-foreground mb-4">
              Gym & Fitness Website Design Wollongong
            </motion.h1>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/75 max-w-2xl mb-8">
              Get more members through your doors with a website that works as hard as you do. We build fast, mobile-friendly websites for Wollongong gyms with class bookings, membership signups, and local SEO.
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
          <p className="text-center text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wide">Fitness Businesses We Build Websites For</p>
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
              Everything a Gym Website Needs
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              We know what fitness businesses need online. Here's what every gym website should include.
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
                Why Your Gym Needs a Professional Website
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  When someone searches &quot;gym near me&quot; or &quot;yoga studio Wollongong,&quot; they&apos;re ready to join. If your website is outdated, slow, or missing key information like class schedules and pricing, they&apos;ll move on to the next option.
                </p>
                <p>
                  Your website is your 24/7 salesperson. It should make it effortless for potential members to see your classes, check your timetable, and sign up — without needing to call or visit first.
                </p>
                <p>
                  Social proof drives gym memberships. A professional website with member testimonials, trainer profiles, and a gallery of your facility builds the confidence people need to walk through your doors.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeUpB} className="space-y-4">
              <h3 className="font-bold text-foreground font-display text-lg mb-4">What Our Fitness Clients Get:</h3>
              {[
                "More membership signups from Google searches",
                "A dynamic website that showcases your facility",
                "Google Maps ranking for your area",
                "Online class booking and membership signup",
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
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">What Fitness Businesses Say</motion.h2>
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
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">Gym Website FAQs</motion.h2>
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
              Real Results for Fitness Businesses
            </motion.h2>
            <motion.div variants={fadeUpB} className="grid md:grid-cols-1 gap-6 max-w-lg mx-auto">
              <Link href="/portfolio/k1n1-australia-gym" className="group">
                <div className="bg-card rounded-xl border border-border p-6 hover:border-accent transition-colors card-hover-lift">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">Fitness</span>
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mt-2 mb-2">K1N1 Australia 24/7 Gym</h3>
                  <p className="text-sm text-muted-foreground mb-3">60% increase in membership sign-ups with online tour booking and premium design</p>
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
              { name: "Beauty Salons & Spas", href: "/web-design-beauty-salons" },
              { name: "Tradies & Contractors", href: "/web-design-tradies" },
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
              Ready to Get More Members?
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
              Get a free quote for your gym website. We&apos;ll build a site that fills classes and drives memberships.
            </motion.p>
            <motion.div variants={fadeUpB} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="btn-shimmer" asChild>
                <Link href="/contact">Get Your Free Gym Website Quote <ArrowRight className="w-5 h-5 ml-1" /></Link>
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

export default WebDesignGyms;
