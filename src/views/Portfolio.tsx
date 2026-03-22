"use client";


import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { stagger, fadeUp } from "@/lib/animations";
import { ArrowRight, TrendingUp, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { portfolioProjects } from "@/data/portfolioProjects";

const Portfolio = () => {
  return (
    <>
      <Breadcrumb items={[
        { label: "Home", path: "/" },
        { label: "Our Work" },
      ]} />

      {/* Hero */}
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
              <span className="text-gradient">Real Results</span> for Real Businesses
            </motion.h1>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl">
              We don't just build websites — we build lead-generation machines. Here's what we've done for tradies and small businesses across Wollongong, Sydney, and NSW.
            </motion.p>
          </motion.div>
        </div>
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-card" />
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-card border-b border-border">
        <div className="container-tight px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "30+", label: "Websites Delivered" },
            { value: "40+", label: "Avg. Leads/Month for Clients*" },
            { value: "Top 3", label: "Google Rankings Achieved" },
            { value: "12x", label: "Average Client ROI*" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl md:text-3xl font-bold text-accent font-display">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
          <p className="text-xs text-muted-foreground text-center mt-3 col-span-2 md:col-span-4">
            *Based on <Link href="/portfolio/grovespark-electrical-wollongong" className="underline hover:text-accent transition-colors">GroveSpark Electrical, 2024–2025</Link>
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <div className="space-y-20">
            {portfolioProjects.map((project, index) => (
              <ScrollReveal key={project.id} className="grid lg:grid-cols-2 gap-10 items-start">
                {/* Image + Results */}
                <motion.div variants={fadeUp} className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="rounded-2xl overflow-hidden mb-6">
                    <img
                      src={project.image}
                      alt={`${project.clientName} website project`}
                      width={800}
                      height={320}
                      className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {project.results.map((result) => (
                      <div key={result.label} className="bg-card rounded-xl p-4 border border-border card-hover-lift">
                        <div className="flex items-center gap-2 mb-1">
                          <TrendingUp className="w-4 h-4 text-accent" />
                          <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{result.label}</span>
                        </div>
                        <p className="text-2xl font-bold text-accent font-display">{result.value}</p>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{result.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div variants={fadeUp} className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                      {project.industry}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {project.location}
                    </span>
                  </div>

                  <Link href={`/portfolio/${project.slug}`} className="hover:text-accent transition-colors">
                    <h2 className="heading-section text-foreground mb-4 leading-tight hover:text-accent transition-colors">
                      {project.title}
                    </h2>
                  </Link>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider mb-2">The Challenge</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{project.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider mb-2">Our Solution</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{project.solution}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.services.map((service) => (
                      <span key={service} className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-medium">
                        {service}
                      </span>
                    ))}
                  </div>

                  {project.testimonial && (
                    <blockquote className="border-l-4 border-accent pl-4 py-2">
                      <p className="text-foreground italic text-sm leading-relaxed mb-2">
                        "{project.testimonial.quote}"
                      </p>
                      <cite className="text-xs text-muted-foreground not-italic">
                        — {project.testimonial.name}, {project.testimonial.role}
                      </cite>
                    </blockquote>
                  )}

                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm mt-4 hover:gap-2.5 transition-all"
                  >
                    View Full Case Study
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        <div className="container-tight px-4 py-20 text-center relative z-10">
          <ScrollReveal>
            <motion.h2 variants={fadeUp} className="heading-section text-primary-foreground mb-4">
              Want Results Like These?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 mb-8 max-w-2xl mx-auto">
              Every project starts with a free consultation. Let's talk about how we can grow your business online.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
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
            <path d="M0,60 Q600,-20 1200,60 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
