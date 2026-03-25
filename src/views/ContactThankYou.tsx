"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Calendar, Clock, Mail, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { stagger, fadeUp } from "@/lib/animations";
import { portfolioProjects } from "@/data/portfolioProjects";

/* ── Calendly inline embed ────────────────────────────── */
const CalendlyEmbed = ({ url }: { url: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget"
      data-url={url}
      style={{ minWidth: "320px", height: "630px" }}
    />
  );
};

const featuredProjects = portfolioProjects.filter(p => p.featured).slice(0, 3);

const ContactThankYou = () => {
  return (
    <>
      {/* ═══ Confirmation Hero ═══ */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        <div className="container-tight px-4 py-16 md:py-24 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-accent" />
            </motion.div>
            <motion.h1 variants={fadeUp} className="heading-display text-primary-foreground mb-4">
              We've Got Your Request!
            </motion.h1>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto">
              Your quote request has been received. Aleksandar will personally review it and get back to you within 24 hours.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* ═══ What Happens Next ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight max-w-3xl">
          <ScrollReveal className="text-center mb-10">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">Here's What Happens Next</motion.h2>
          </ScrollReveal>
          <ScrollReveal>
            <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Mail,
                  step: "1",
                  title: "We Review Your Request",
                  desc: "Aleksandar personally reads every enquiry — no bots, no auto-replies.",
                  time: "Within a few hours",
                },
                {
                  icon: Phone,
                  step: "2",
                  title: "We Get in Touch",
                  desc: "We'll reach out by email or phone to discuss your goals and answer questions.",
                  time: "Within 24 hours",
                },
                {
                  icon: Calendar,
                  step: "3",
                  title: "You Get a Custom Proposal",
                  desc: "A tailored quote with pricing, timeline, and exactly what's included — no surprises.",
                  time: "Within 48 hours",
                },
              ].map((item) => (
                <div key={item.step} className="bg-card rounded-2xl border border-border shadow-card p-6 text-center">
                  <div className="w-10 h-10 rounded-full gradient-cta flex items-center justify-center mx-auto mb-4">
                    <span className="text-accent-foreground font-bold text-sm">{item.step}</span>
                  </div>
                  <h3 className="font-bold text-foreground font-display mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{item.desc}</p>
                  <div className="flex items-center justify-center gap-1.5 text-xs text-accent font-medium">
                    <Clock className="w-3 h-3" />
                    {item.time}
                  </div>
                </div>
              ))}
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Book a Call (Calendly) ═══ */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight max-w-3xl">
          <ScrollReveal className="text-center mb-8">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-3">
              Want to Skip the Wait?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-xl mx-auto">
              Book a free 30-minute call and we'll discuss your project live — no obligation.
            </motion.p>
          </ScrollReveal>
          <ScrollReveal>
            <motion.div variants={fadeUp} className="bg-card rounded-2xl border border-border shadow-card overflow-hidden">
              <CalendlyEmbed url="https://calendly.com/avdigitaledge/30min?hide_gdpr_banner=1" />
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Case Studies ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="text-center mb-10">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-3">
              While You Wait — See What We've Built
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Here are a few recent projects for businesses like yours.
            </motion.p>
          </ScrollReveal>
          <ScrollReveal className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Link key={project.id} href={`/portfolio/${project.slug}`} className="block group">
                <motion.div
                  variants={fadeUp}
                  className="bg-card rounded-2xl border border-border shadow-card overflow-hidden h-full"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.clientName} case study`}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-5">
                    <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent px-2.5 py-0.5 rounded-full text-xs font-semibold mb-2">
                      {project.industry}
                    </span>
                    <h3 className="font-bold text-foreground font-display text-sm mb-2">{project.clientName}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.results.slice(0, 2).map((r) => (
                        <span key={r.label} className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground">
                          {r.label}: <span className="font-semibold text-foreground">{r.value}</span>
                        </span>
                      ))}
                    </div>
                    <span className="text-accent text-xs font-semibold inline-flex items-center gap-1">
                      View Case Study <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Trust Footer ═══ */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 rotate-180">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,60 Q600,-20 1200,60 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
        <div className="container-tight px-4 py-16 text-center relative z-10">
          <ScrollReveal>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </motion.div>
            <motion.p variants={fadeUp} className="text-white/70 text-sm mb-6">
              Rated 4.8/5 on Google — trusted by 30+ local businesses
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link href="/portfolio">
                  Browse All Case Studies
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link href="/">Back to Homepage</Link>
              </Button>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default ContactThankYou;
