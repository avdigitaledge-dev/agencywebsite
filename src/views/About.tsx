"use client";


import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { stagger, fadeUp } from "@/lib/animations";
import { ArrowRight, Heart, Target, Users, Award, Globe, Star, Calendar } from "lucide-react";
import AnimatedStat from "@/components/AnimatedStat";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";

const About = () => {
  const aboutFAQ = [
    {
      question: "Where is Digital Edge Studio based?",
      answer: "We're based in NSW, Australia, and serve businesses across Wollongong, Sydney, the Illawarra region, and beyond. We work remotely with clients across all states."
    },
    {
      question: "What types of businesses do you work with?",
      answer: "We specialise in tradies and service businesses — plumbers, electricians, builders, cleaners, landscapers — as well as healthcare providers, hospitality, retail, and any local small business that wants to grow online."
    },
    {
      question: "How long have you been in business?",
      answer: "Digital Edge Studio has been building websites and running digital marketing campaigns for Australian small businesses since 2025. We've delivered over 30 websites across a wide range of industries."
    },
    {
      question: "Do you offer ongoing support after my website launches?",
      answer: "Yes — we offer ongoing maintenance plans from $99/month covering security, backups, updates, and minor content changes. We're also available by email for any questions after launch."
    },
    {
      question: "Why should I choose Digital Edge over a larger agency?",
      answer: "With us, you deal directly with Aleks — the person managing, designing, and overseeing every project. No account managers, no runaround. We're small enough to care deeply about every project and experienced enough to deliver real results."
    }
  ];

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Digital Edge Studio",
    "description": "Web design and digital marketing agency for tradies and small businesses in Wollongong, Sydney & NSW",
    "areaServed": ["Sydney", "Wollongong", "NSW"],
    "url": "https://digitaledgestudio.com/about",
    "foundingDate": "2025",
    "founder": {
      "@type": "Person",
      "name": "Aleksandar Savevski",
      "jobTitle": "Founder & Marketer"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "enquiries@digitaledgestudio.com"
    }
  };

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'About' }
      ]} />

      {/* ═══ Hero ═══ */}
      <section className="gradient-hero relative overflow-hidden min-h-[50vh] flex items-center">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="absolute inset-0 hero-noise" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        <div className="container-tight px-4 py-20 md:py-28 relative z-10 w-full">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            <motion.h1 variants={fadeUp} className="heading-display text-primary-foreground mb-4">
              About <span className="text-gradient">Digital Edge</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl mb-10">
              Founded by Aleksandar Savevski, we're a team of web designers and digital marketers passionate about helping Australian businesses grow online.
            </motion.p>
            <motion.div variants={fadeUp} className="grid grid-cols-3 gap-4 max-w-lg">
              {[
                { icon: Globe, val: "30+", label: "Websites Delivered" },
                { icon: Star, val: "5.0", label: "Google Rating" },
                { icon: Calendar, val: "2025", label: "Founded" },
              ].map((stat) => (
                <div key={stat.label} className="card-glass rounded-xl p-4 text-center">
                  <stat.icon className="w-4 h-4 text-accent mx-auto mb-1.5" />
                  <AnimatedStat value={stat.val} label={stat.label} white />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* ═══ Mission ═══ */}
      <section className="section-padding bg-background gradient-mesh">
        <div className="container-tight">
          <ScrollReveal className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp}>
              <h2 className="heading-section text-foreground mb-6">
                We Believe Every Local Business Deserves a Great Website
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Digital Edge was started with a simple idea: too many Australian small businesses are missing out on customers because their website doesn't work properly — or they don't have one at all.
                </p>
                <p className="border-l-4 border-accent pl-4">
                  We've seen tradies, physiotherapists, plumbers, electricians, and dozens of other local businesses transform their lead generation by getting a website that actually works. Not a template. Not a DIY drag-and-drop site. A properly built, professionally designed website that ranks on Google and turns visitors into phone calls and enquiries.
                </p>
                <p>
                  We&apos;re based in the Illawarra and work with businesses across <Link href="/web-design-sydney" className="text-accent hover:underline">Sydney</Link>, <Link href="/web-design-wollongong" className="text-accent hover:underline">Wollongong</Link>, and the surrounding areas. We understand the local market because we&apos;re part of it.
                </p>
              </div>
              <a
                href="https://www.linkedin.com/company/digitaledgestudio-agency"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-sm text-accent hover:text-accent/80 transition-colors"
                aria-label="Connect with us on LinkedIn"
              >
                <Image src="/images/blog/linkedin-icon-dark.webp" alt="LinkedIn" width={24} height={24} className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity" />
                Follow us on LinkedIn
              </a>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden border border-border shadow-lg">
              <Image
                src="/images/blog/about-page-pic.webp"
                alt="Digital Edge Studio team working on web design"
                width={800}
                height={500}
                className="w-full h-full object-cover min-h-[350px] hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Meet the Founder — Dark Section ═══ */}
      <section className="gradient-hero relative overflow-hidden noise-overlay">
        <div className="hero-orb hero-orb-1" style={{ opacity: 0.12 }} />
        <div className="hero-orb hero-orb-2" style={{ opacity: 0.08 }} />
        {/* Top wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 rotate-180">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,60 Q600,-20 1200,60 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
        <div className="container-tight section-padding relative z-10">
          <ScrollReveal className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} className="order-2 lg:order-1">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-semibold mb-4 backdrop-blur-md border border-white/10">
                Meet the Founder
              </span>
              <h2 className="heading-section text-white mb-2">Aleksandar Savevski</h2>
              <p className="text-accent font-medium mb-6">Founder & Marketer</p>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Before starting Digital Edge Studio, I spent years working for digital agencies across Australia. I saw the same problem over and over — small businesses and tradies were being overcharged for average work, locked into long contracts, and handed off to junior staff the moment they signed.
                </p>
                <p>
                  I started Digital Edge to do things differently. When you work with us, you deal directly with me — the person designing, building, and optimising your website. No account managers, no runaround, no surprises.
                </p>
                <p>
                  I also work with a small, trusted team of developers I've hand-picked and worked with for years. This lets us deliver agency-quality work faster and at a fraction of the price — while I stay hands-on with every project and make sure it's built for the Australian market.
                </p>
              </div>
              <a
                href="https://www.linkedin.com/in/aleksandar-savevski-b9b907142"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-sm text-accent hover:text-accent/80 transition-colors"
                aria-label="Connect with Aleksandar on LinkedIn"
              >
                <Image src="/images/blog/linkedin-icon-dark.webp" alt="LinkedIn" width={24} height={24} className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity invert" />
                Connect on LinkedIn
              </a>
            </motion.div>
            <motion.div variants={fadeUp} className="order-1 lg:order-2 flex justify-center">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden card-glass shadow-lg">
                <Image
                  src="/images/blog/founder-pic.webp"
                  alt="Aleksandar Savevski — Founder of Digital Edge Studio"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* ═══ Values ═══ */}
      <section className="section-padding bg-background relative">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="container-tight relative z-10">
          <ScrollReveal className="text-center mb-14">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Our Values
            </motion.span>
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">What We Stand For</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every project we take on and every relationship we build.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "Results First", desc: "We measure success by the leads and customers we generate for your business, not just how a website looks." },
              { icon: Users, title: "Honest Communication", desc: "No jargon, no upselling. We explain everything in plain English and only recommend what you actually need." },
              { icon: Award, title: "Quality Work", desc: "We take pride in every project. Your website represents your business and we treat it with that level of care." },
              { icon: Heart, title: "Long-Term Partnerships", desc: "We don't disappear after launch. We're here for the long haul, helping your business grow month after month." },
            ].map((v) => (
              <motion.div key={v.title} variants={fadeUp} className="bg-card rounded-2xl p-8 border border-border card-premium text-center group">
                <div className="w-12 h-12 rounded-xl gradient-cta flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-glow transition-all duration-300">
                  <v.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-bold text-foreground font-display mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <FAQ
        faqs={aboutFAQ}
        title="About Digital Edge Studio — Frequently Asked Questions"
      />

      {/* ═══ CTA ═══ */}
      <section className="gradient-hero relative overflow-hidden noise-overlay">
        <div className="hero-orb hero-orb-1" style={{ opacity: 0.2 }} />
        <div className="hero-orb hero-orb-2" style={{ opacity: 0.15 }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        <div className="container-tight px-4 py-24 text-center relative z-10">
          <ScrollReveal>
            <motion.h2 variants={fadeUp} className="heading-section text-primary-foreground mb-4">Let's Have a Chat</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
              Whether you're ready to get started or just exploring your options, we'd love to hear from you.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="hero" size="lg" className="btn-shimmer" asChild>
                <Link href="/contact">Get in Touch <ArrowRight className="w-5 h-5 ml-1" /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link href="/free-website-review">Free Website Review</Link>
              </Button>
            </motion.div>
          </ScrollReveal>
        </div>
        {/* Top wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 rotate-180">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
      </section>
    </>
  );
};

export default About;
