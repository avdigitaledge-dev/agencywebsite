"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ScrollReveal } from "@/components/ScrollReveal";
import { staggerB, fadeUpB } from "@/lib/animations";

const regions = [
  {
    heading: "Wollongong & Illawarra",
    locations: [
      { name: "Wollongong", href: "/web-design-wollongong", desc: "Our home base. Custom web design, local SEO, and digital marketing for Wollongong businesses." },
      { name: "Illawarra", href: "/web-design-illawarra", desc: "Serving the wider Illawarra region \u2014 Dapto, Figtree, Unanderra, and surrounding suburbs." },
      { name: "Shellharbour", href: "/web-design-shellharbour", desc: "Web design for Shellharbour, Warilla, Barrack Heights, Oak Flats, and Albion Park businesses." },
      { name: "Kiama", href: "/web-design-kiama", desc: "Websites for Kiama, Gerringong, Jamberoo, and Minnamurra businesses." },
      { name: "Thirroul", href: "/web-design-thirroul", desc: "Local web design for Thirroul Village, Austinmer, Bulli, and the northern suburbs." },
    ],
  },
  {
    heading: "South Coast",
    locations: [
      { name: "Nowra", href: "/web-design-nowra", desc: "Website design for Nowra, Bomaderry, and Shoalhaven businesses." },
      { name: "South Coast / Shoalhaven", href: "/web-design-south-coast", desc: "Serving Berry, Huskisson, Jervis Bay, Ulladulla, Milton, and the wider South Coast." },
      { name: "Marketing Agency Shoalhaven", href: "/marketing-agency-shoalhaven", desc: "SEO, Google Ads, and digital marketing for Shoalhaven businesses \u2014 integrated strategy for Nowra, Berry, and beyond." },
    ],
  },
  {
    heading: "Sydney & Surrounds",
    locations: [
      { name: "Sydney", href: "/web-design-sydney", desc: "Reliable web design for businesses across all Sydney regions." },
      { name: "Sutherland Shire", href: "/web-design-sutherland-shire", desc: "Web design for Cronulla, Miranda, Caringbah, Sutherland, and surrounds." },
      { name: "Cronulla", href: "/web-design-cronulla", desc: "Websites for Cronulla\u2019s beachside businesses \u2014 caf\u00e9s, retail, and services." },
      { name: "South Sydney", href: "/web-design-south-sydney", desc: "Serving Hurstville, Kogarah, Rockdale, and the St George area." },
      { name: "Western Sydney", href: "/web-design-western-sydney", desc: "Web design for Parramatta, Penrith, Liverpool, Blacktown, and beyond." },
      { name: "Campbelltown", href: "/web-design-campbelltown", desc: "Local web design and SEO for Campbelltown and Macarthur businesses." },
    ],
  },
  {
    heading: "Other NSW",
    locations: [
      { name: "Newcastle", href: "/web-design-newcastle", desc: "Professional web design for Newcastle and Hunter Valley businesses." },
      { name: "Central Coast", href: "/web-design-central-coast", desc: "Websites for Central Coast businesses \u2014 Gosford, Terrigal, and surrounds." },
    ],
  },
];

const AreasWeServe = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://digitaledgestudio.com/" },
      { "@type": "ListItem", "position": 2, "name": "Areas We Serve", "item": "https://digitaledgestudio.com/areas-we-serve" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Areas We Serve' },
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
              <MapPin className="w-4 h-4" />
              <span>Serving All of NSW</span>
            </motion.div>
            <motion.h1 variants={fadeUpB} className="heading-display text-primary-foreground mb-4">
              Areas We Serve
            </motion.h1>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/75 max-w-2xl mb-8">
              Based in Wollongong, we build websites and run digital marketing campaigns for businesses across the Illawarra, Sydney, South Coast, and beyond.
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
      </section>

      {/* Location Cards */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          {regions.map((region) => (
            <div key={region.heading} className="mb-10">
              <h2 className="text-lg font-bold text-foreground font-display mb-4">
                {region.heading}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {region.locations.map((loc) => (
                  <Link key={loc.name} href={loc.href} className="group block p-6 bg-card rounded-xl border border-border shadow-card card-hover-lift">
                    <div className="flex gap-4">
                      <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-foreground font-display group-hover:text-accent transition-colors mb-1">{loc.name}</h3>
                        <p className="text-sm text-muted-foreground">{loc.desc}</p>
                        <span className="text-sm text-accent font-medium mt-2 inline-flex items-center gap-1">Learn more <ArrowRight className="w-3 h-3" /></span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services We Offer Everywhere */}
      <section className="section-padding relative" style={{ background: "var(--surface-gradient)" }}>
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="container-tight relative z-10">
          <ScrollReveal variant="B" className="text-center mb-10">
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-4">
              What We Offer at Every Location
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              At every location, we offer web design, local SEO, Google Ads, and digital marketing.
            </motion.p>
          </ScrollReveal>
          <ScrollReveal variant="B" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { title: "Web Design", desc: "Custom, mobile-responsive websites that convert visitors into customers." },
              { title: "Local SEO", desc: "Rank higher on Google Maps and local search results in your area." },
              { title: "Google Ads", desc: "Targeted pay-per-click campaigns that deliver measurable ROI." },
              { title: "Digital Marketing", desc: "Full-service strategies including content, social media, and email." },
            ].map((s) => (
              <motion.div key={s.title} variants={fadeUpB} className="bg-card rounded-2xl p-6 border border-border shadow-card card-premium">
                <CheckCircle2 className="w-6 h-6 text-accent mb-3" />
                <h3 className="font-bold text-foreground font-display mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </ScrollReveal>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/services">View All Services <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/pricing">See Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* ═══ Service Area Map ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal variant="B">
            <motion.h2 variants={fadeUpB} className="heading-section text-foreground mb-3 text-center">Our Service Area</motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-center">
              Based in Wollongong, serving businesses across NSW — from the Illawarra to Sydney and beyond.
            </motion.p>
            <motion.div variants={fadeUpB} className="w-full rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52862.22518420498!2d150.85!3d-34.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b131a67e0a1c5f1%3A0x5017d681632c890!2sWollongong%20NSW%202500!5e0!3m2!1sen!2sau!4v1"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Digital Edge Studio - Wollongong Web Design Agency Service Area"
              />
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

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
              Serving Your Area?
            </motion.h2>
            <motion.p variants={fadeUpB} className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
              No matter where you are in NSW, we can help your business grow online. Get in touch for a free, no-obligation quote.
            </motion.p>
            <motion.div variants={fadeUpB} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="btn-shimmer" asChild>
                <Link href="/contact">Get a Free Quote <ArrowRight className="w-5 h-5 ml-1" /></Link>
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

export default AreasWeServe;
