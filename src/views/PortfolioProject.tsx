"use client";


import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { stagger, fadeUp } from "@/lib/animations";
import { ArrowRight, TrendingUp, MapPin, ChevronLeft, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { portfolioProjects } from "@/data/portfolioProjects";

const PortfolioProject = ({ slug }: { slug: string }) => {
  const project = portfolioProjects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="container-tight px-4 py-20 text-center">
        <h1 className="heading-display mb-4">Case study not found</h1>
        <Button asChild>
          <Link href="/portfolio">Back to Our Work</Link>
        </Button>
      </div>
    );
  }

  // Find other projects for "More Case Studies" section
  const otherProjects = portfolioProjects.filter(p => p.slug !== slug).slice(0, 3);

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": project.title,
    "description": project.excerpt,
    "image": project.image.startsWith("http") ? project.image : `https://digitaledgestudio.com${project.image}`,
    "author": {
      "@type": "Person",
      "name": "Aleksandar Savevski",
      "jobTitle": "Founder & Web Designer",
      "worksFor": {
        "@type": "Organization",
        "name": "Digital Edge Studio"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Digital Edge Studio",
      "url": "https://digitaledgestudio.com"
    },
    "datePublished": "2025-03-01",
    "dateModified": "2026-03-24",
    "mainEntityOfPage": `https://digitaledgestudio.com/portfolio/${project.slug}`
  };

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }} />

      <Breadcrumb items={[
        { label: "Home", path: "/" },
        { label: "Our Work", path: "/portfolio" },
        { label: project.clientName },
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
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                {project.industry}
              </span>
              <span className="inline-flex items-center gap-1 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4" />
                {project.location}
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="heading-display text-primary-foreground mb-4">
              {project.title}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl">
              {project.excerpt}
            </motion.p>
          </motion.div>
        </div>
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* Results Grid */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal>
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-8 text-center">
              The Results
            </motion.h2>
            <motion.div variants={fadeUp} className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {project.results.map((result) => (
                <div key={result.label} className="bg-card rounded-xl p-5 md:p-6 border border-border card-hover-lift text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{result.label}</span>
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-accent font-display">{result.value}</p>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{result.description}</p>
                </div>
              ))}
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Project Image */}
      <section className="bg-background pb-8">
        <div className="container-tight">
          <div className="rounded-2xl overflow-hidden">
            <img
              src={project.image}
              alt={`${project.clientName} website project`}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="section-padding bg-background">
        <div className="container-tight max-w-3xl">
          <ScrollReveal className="space-y-12">
            <motion.div variants={fadeUp}>
              <h2 className="heading-section text-foreground mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{project.challenge}</p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="heading-section text-foreground mb-4">Our Solution</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{project.solution}</p>
            </motion.div>

            {/* Services Used */}
            <motion.div variants={fadeUp}>
              <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider mb-3">Services Delivered</h3>
              <div className="flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <span key={service} className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                    {service}
                  </span>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
          <div className="container-tight max-w-3xl">
            <ScrollReveal>
              <motion.div variants={fadeUp} className="relative">
                <Quote className="w-12 h-12 text-accent/20 absolute -top-2 -left-2" />
                <blockquote className="pl-8">
                  <p className="text-xl md:text-2xl text-foreground italic leading-relaxed mb-6">
                    "{project.testimonial.quote}"
                  </p>
                  <cite className="text-muted-foreground not-italic font-medium">
                    — {project.testimonial.name}, {project.testimonial.role}
                  </cite>
                </blockquote>
              </motion.div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Related Services Links */}
      <section className="bg-background py-8">
        <div className="container-tight max-w-3xl">
          <div className="bg-accent/5 rounded-xl p-6">
            <h3 className="font-semibold text-foreground font-display mb-3">Related Services</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/services" className="text-sm text-accent hover:underline">Our Services</Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/web-design-wollongong" className="text-sm text-accent hover:underline">Web Design Wollongong</Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/web-design-tradies" className="text-sm text-accent hover:underline">Web Design for Tradies</Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/pricing" className="text-sm text-accent hover:underline">Pricing</Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/blog" className="text-sm text-accent hover:underline">Blog</Link>
            </div>
          </div>
        </div>
      </section>

      {/* More Case Studies */}
      {otherProjects.length > 0 && (
        <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
          <div className="container-tight">
            <ScrollReveal>
              <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-8">More Case Studies</motion.h2>
              <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-6">
                {otherProjects.map((other) => (
                  <Link key={other.slug} href={`/portfolio/${other.slug}`} className="group">
                    <div className="bg-card rounded-xl border border-border overflow-hidden hover:border-accent transition-colors h-full flex flex-col card-hover-lift">
                      <div className="overflow-hidden">
                        <img
                          src={other.image}
                          alt={`${other.clientName} website project`}
                          width={400}
                          height={160}
                          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-semibold text-accent uppercase tracking-wider">{other.industry}</span>
                          <span className="text-xs text-muted-foreground">• {other.location}</span>
                        </div>
                        <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors leading-snug flex-1 line-clamp-2">
                          {other.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </motion.div>
              <motion.div variants={fadeUp} className="text-center mt-8">
                <Button variant="outline" asChild>
                  <Link href="/portfolio">
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    View All Case Studies
                  </Link>
                </Button>
              </motion.div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 rotate-180">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,60 Q600,-20 1200,60 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
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
      </section>

    </>
  );
};

export default PortfolioProject;
