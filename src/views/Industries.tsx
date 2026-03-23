"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Wrench, UtensilsCrossed, Heart, Calculator, Home, Scale, Smile, Shield, Dumbbell, Sparkles, Stethoscope, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ScrollReveal } from "@/components/ScrollReveal";
import { staggerB, fadeUpB } from "@/lib/animations";

const industries = [
  { name: "Tradies & Contractors", href: "/web-design-tradies", icon: Wrench, desc: "Websites that generate leads and phone calls for plumbers, electricians, builders, and all trades." },
  { name: "Restaurants & Hospitality", href: "/web-design-restaurants", icon: UtensilsCrossed, desc: "Online menus, table bookings, and local SEO to fill more seats at your restaurant or café." },
  { name: "Healthcare & Allied Health", href: "/web-design-healthcare", icon: Heart, desc: "Trust-building websites for GPs, physiotherapists, psychologists, and allied health providers." },
  { name: "Accountants & Financial Services", href: "/web-design-accountants", icon: Calculator, desc: "Professional websites with client portals and booking systems for accounting firms." },
  { name: "Real Estate Agents", href: "/web-design-real-estate", icon: Home, desc: "Property listings, lead capture, and suburb pages to generate vendor and buyer enquiries." },
  { name: "Law Firms & Legal", href: "/web-design-lawyers", icon: Scale, desc: "Professional, trust-building websites with practice area pages and secure contact forms." },
  { name: "Dentists & Dental Clinics", href: "/web-design-dentists", icon: Smile, desc: "Patient-friendly websites with online bookings, treatment pages, and before/after galleries." },
  { name: "NDIS Providers", href: "/web-design-ndis", icon: Shield, desc: "WCAG-accessible, compliant websites that help participants find and choose your services." },
  { name: "Gyms & Fitness", href: "/web-design-gyms", icon: Dumbbell, desc: "Class timetables, membership signups, and online bookings for gyms and fitness studios." },
  { name: "Beauty Salons & Spas", href: "/web-design-beauty-salons", icon: Sparkles, desc: "Online bookings, service menus, and photo galleries for salons, spas, and beauty businesses." },
  { name: "Veterinary Clinics", href: "/web-design-veterinary", icon: Stethoscope, desc: "Appointment bookings, service pages, and pet owner resources for vet clinics." },
  { name: "Startups", href: "/web-design-startups", icon: Rocket, desc: "Launch fast with conversion-focused landing pages, MVP sites, and scalable web apps." },
];

const Industries = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://digitaledgestudio.com/" },
      { "@type": "ListItem", "position": 2, "name": "Industries" }
    ]
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Industries We Serve",
    "itemListElement": industries.map((ind, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": ind.name,
      "url": `https://digitaledgestudio.com${ind.href}`
    }))
  };

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Industries' }
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
              <Rocket className="w-4 h-4" />
              <span>Industry Solutions</span>
            </motion.div>
            <motion.h1 variants={fadeUpB} className="heading-display text-primary-foreground mb-4">
              Industries We Serve
            </motion.h1>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/75 max-w-2xl mb-8">
              Every industry has unique needs. We build websites tailored to how your customers search, compare, and buy — so your site works as hard as you do.
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

      {/* Industry Cards Grid */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal variant="B" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <motion.div key={ind.name} variants={fadeUpB}>
                <Link href={ind.href} className="group block h-full">
                  <div className="bg-card rounded-xl p-6 border border-border shadow-card card-hover-lift h-full">
                    <ind.icon className="w-6 h-6 text-accent mb-4" />
                    <h2 className="font-bold text-foreground font-display mb-2 group-hover:text-accent transition-colors">{ind.name}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{ind.desc}</p>
                    <span className="text-sm text-accent font-medium">Learn More →</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Why Industry-Specific */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight">
          <ScrollReveal variant="B" className="max-w-3xl mx-auto text-center">
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-6">
              Why Industry-Specific Web Design Matters
            </motion.h2>
            <motion.div variants={fadeUpB} className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Generic websites don't convert as well as industry-tailored ones. Your customers have specific expectations when they land on your site — a restaurant visitor wants to see a menu and book a table, while a tradie's customer wants to call immediately or request a quote.
              </p>
              <p>
                We research how customers in your industry search, compare, and make decisions online. Then we build every element of your website — from the layout to the calls-to-action to the SEO — around those behaviours.
              </p>
              <p>
                The result? A website that speaks your customers' language, ranks for the searches that matter, and converts visitors into paying clients.
              </p>
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
              Not Sure What You Need?
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
              Tell us about your business and we'll recommend the best website solution for your industry. Free quote, no obligation.
            </motion.p>
            <motion.div variants={fadeUpB} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="btn-shimmer" asChild>
                <Link href="/contact">Get a Free Quote <ArrowRight className="w-5 h-5 ml-1" /></Link>
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

export default Industries;
