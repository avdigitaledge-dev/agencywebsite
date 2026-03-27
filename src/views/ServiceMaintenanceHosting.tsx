"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { stagger, fadeUp } from "@/lib/animations";
import { Shield, CheckCircle2, ArrowRight, Server, RefreshCw, Clock, Lock, HardDrive, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/FAQ";
import { Breadcrumb } from "@/components/Breadcrumb";

const ServiceMaintenanceHosting = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Website Maintenance & Hosting",
    "description": "Professional website maintenance and Australian hosting services including security updates, daily backups, uptime monitoring, and priority support for businesses in Wollongong, Sydney, and NSW.",
    "provider": {
      "@type": "Organization",
      "name": "Digital Edge Studio",
      "url": "https://digitaledgestudio.com"
    },
    "areaServed": ["Wollongong", "Sydney", "NSW", "Australia"]
  };

  const maintenanceFAQ = [
    {
      question: "How much does website maintenance cost?",
      answer: "Our maintenance and hosting packages start from $99/month. This includes Australian hosting, security updates, daily backups, uptime monitoring, and priority support."
    },
    {
      question: "What if I need changes made to my website?",
      answer: "Minor content updates and changes are included in your maintenance plan. For larger updates or new features, we'll provide a quote before any work begins."
    },
    {
      question: "Where is my website hosted?",
      answer: "We use fast, reliable Australian hosting servers. This means faster load times for your Australian visitors and better SEO performance for local searches."
    },
    {
      question: "What happens if my website goes down?",
      answer: "We monitor your site 24/7. If an issue is detected, we're alerted immediately and work to resolve it as quickly as possible. Most issues are fixed before you even notice."
    },
    {
      question: "Can I cancel my maintenance plan?",
      answer: "Yes. There are no lock-in contracts. You can cancel with 30 days' written notice. We believe in earning your business every month."
    }
  ];

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Services', path: '/services' },
        { label: 'Maintenance & Hosting' }
      ]} />

      {/* ═══ Hero ═══ */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        <div className="container-tight px-4 py-16 md:py-24 relative z-10">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            <motion.h1 variants={fadeUp} className="heading-display text-primary-foreground mb-4">
              Keep Your Website <span className="text-gradient">Fast, Secure, and Up to Date</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl mb-8">
              Your website isn't a set-and-forget tool. We handle updates, security, backups, and performance so you can focus on running your business.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="btn-shimmer" asChild>
                <Link href="/contact">Get Started <ArrowRight className="w-5 h-5 ml-1" /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link href="/pricing">See Plans</Link>
              </Button>
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

      {/* ═══ What's Included ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden min-h-[300px] group image-hover-glow">
              <Image src="/images/blog/webhosting-pic.webp" alt="Server security and website maintenance" width={600} height={400} className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105" />
            </motion.div>
            <motion.div variants={fadeUp}>
              <span className="text-accent font-semibold text-base uppercase tracking-wider">What's Included</span>
              <h2 className="heading-section text-foreground mt-2 mb-4">
                Website Maintenance & Australian Hosting
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Your website needs regular attention to stay fast, secure, and working properly. We take care of all the technical details — hosting, updates, backups, and monitoring — so you never have to worry about it. Our hosting is based in Australia for faster load times and better local SEO performance.
              </p>
              <ul className="space-y-3 mb-8 stagger-list">
                {[
                  "Fast, reliable Australian hosting",
                  "Regular security updates and patches",
                  "Daily backups with easy restoration",
                  "Uptime monitoring and performance checks",
                  "Content updates and minor changes included",
                  "Priority email and phone support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="cta" asChild>
                <Link href="/pricing">See Plans <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ What We Take Care Of ═══ */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight">
          <ScrollReveal className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">What We Take Care Of</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Everything your website needs to stay fast, secure, and running smoothly — handled by us.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                icon: Server,
                title: "Hosting",
                description: "Fast, reliable Australian hosting with 99.9% uptime guarantee."
              },
              {
                step: "02",
                icon: Shield,
                title: "Security",
                description: "Regular updates, SSL certificates, malware scanning, and firewall protection."
              },
              {
                step: "03",
                icon: HardDrive,
                title: "Backups",
                description: "Daily automated backups stored securely, with easy one-click restoration."
              },
              {
                step: "04",
                icon: Headphones,
                title: "Support",
                description: "Priority email and phone support for any issues or content changes."
              },
            ].map((item) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                className="bg-card rounded-2xl border border-border shadow-card p-8 card-hover-lift text-center"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <span className="text-accent font-display font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="heading-card text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Why It Matters ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">Why It Matters</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              A well-maintained website protects your business, keeps customers happy, and helps you rank higher on Google.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Lock,
                title: "Peace of Mind",
                description: "Know your website is secure, backed up, and monitored 24/7 without lifting a finger."
              },
              {
                icon: RefreshCw,
                title: "Always Up to Date",
                description: "Regular updates keep your site fast, compatible, and protected against vulnerabilities."
              },
              {
                icon: Headphones,
                title: "Priority Support",
                description: "Need a change or have an issue? We respond quickly with dedicated support."
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="bg-card rounded-2xl border border-border shadow-card p-8 card-hover-lift text-center"
              >
                <div className="w-12 h-12 rounded-xl gradient-cta flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="heading-card text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ CTA Section ═══ */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        {/* Top wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 rotate-180">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
        <div className="container-tight px-4 py-20 text-center relative z-10">
          <ScrollReveal>
            <motion.h2 variants={fadeUp} className="heading-section text-primary-foreground mb-4">
              Stop Worrying About Your Website
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
              Let us handle the technical stuff while you focus on what you do best.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="hero" size="lg" className="btn-shimmer" asChild>
                <Link href="/contact">Get Started <ArrowRight className="w-5 h-5 ml-1" /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link href="/pricing">See Plans</Link>
              </Button>
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

      {/* ═══ FAQ ═══ */}
      <FAQ
        faqs={maintenanceFAQ}
        title="Maintenance & Hosting — Frequently Asked Questions"
      />

      {/* ═══ Internal Links ═══ */}
      <section className="section-padding bg-background border-t border-border">
        <div className="container-tight">
          <ScrollReveal className="text-center">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-8">Explore More</motion.h2>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              {[
                { label: "All Services", path: "/services" },
                { label: "Web Design", path: "/services/web-design" },
                { label: "Local SEO", path: "/services/seo" },
                { label: "Pricing", path: "/pricing" },
                { label: "Our Work", path: "/portfolio" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <Button key={link.path} variant="outline" asChild>
                  <Link href={link.path}>{link.label}</Link>
                </Button>
              ))}
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default ServiceMaintenanceHosting;
