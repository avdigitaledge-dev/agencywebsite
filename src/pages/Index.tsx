import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, Globe, Search, Shield, CheckCircle2, Star, Calendar, MapPin, TrendingUp, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { portfolioProjects } from "@/data/portfolioProjects";
import { Button } from "@/components/ui/button";
import { SEOMeta } from "@/components/SEOMeta";
import Layout from "@/components/Layout";
import { useRef } from "react";

/* ── Animation helpers ─────────────────────────────────── */
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
};

/* ── Scroll-triggered section wrapper ──────────────────── */
const ScrollReveal = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ── Animated counter ──────────────────────────────────── */
const AnimatedStat = ({ value, label }: { value: string; label: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const numMatch = value.match(/(\d+)/);
    if (!numMatch) { setDisplay(value); return; }
    const target = parseInt(numMatch[1]);
    const prefix = value.slice(0, value.indexOf(numMatch[1]));
    const suffix = value.slice(value.indexOf(numMatch[1]) + numMatch[1].length);
    let current = 0;
    const step = Math.max(1, Math.floor(target / 40));
    const interval = setInterval(() => {
      current = Math.min(current + step, target);
      setDisplay(`${prefix}${current}${suffix}`);
      if (current >= target) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-2xl md:text-3xl font-bold text-accent font-display stat-glow">{display}</p>
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </div>
  );
};

const Index = () => {
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const testimonials = [
    { name: "James T.", biz: "Plumber, Sydney", quote: "Since Digital Edge rebuilt our website, we've had a 60% increase in phone calls from Google. Best investment we've made." },
    { name: "Sarah M.", biz: "Physiotherapist, Wollongong", quote: "They made the whole process easy and stress-free. Our new website looks incredible and we're getting more bookings than ever." },
    { name: "Mark L.", biz: "Electrician, NSW", quote: "The local SEO work has been a game changer. We're now showing up at the top of Google Maps in our area." },
    { name: "David K.", biz: "Builder, Sydney", quote: "Professional, fast, and very easy to work with. Our new website has dramatically improved our online presence." },
    { name: "Lisa P.", biz: "Cleaning Business, Wollongong", quote: "They really understood our business and built exactly what we needed. Highly recommend Digital Edge Studio to any small business." },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIdx((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Digital Edge Studio",
    "description": "Web design and digital marketing for tradies and small businesses in Wollongong, Sydney & NSW",
    "url": "https://digitaledgestudio.com",
    "email": "enquiries@digitaledgestudio.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Wollongong",
      "addressRegion": "NSW",
      "addressCountry": "AU"
    },
    "areaServed": [
      { "@type": "City", "name": "Sydney" },
      { "@type": "City", "name": "Wollongong" },
      { "@type": "State", "name": "NSW" }
    ],
    "priceRange": "$$",
    "serviceType": ["Web Design", "Digital Marketing", "Local SEO"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "5",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": testimonials.slice(0, 5).map(t => ({
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": t.name },
      "reviewBody": t.quote
    }))
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Digital Edge Studio",
    "url": "https://digitaledgestudio.com",
    "description": "Web design and digital marketing for tradies and small businesses in Wollongong, Sydney & NSW",
    "potentialAction": {
      "@type": "SearchAction",
      "target": { "@type": "EntryPoint", "urlTemplate": "https://digitaledgestudio.com/blog?q={search_term_string}" },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Layout>
      <SEOMeta
        title="Web Design Wollongong | Website Designer | Digital Edge Studio"
        description="Wollongong web design agency building fast, professional websites for tradies and small businesses. Affordable packages, local SEO, and more leads guaranteed."
        keywords="web design wollongong, website designer wollongong, web development wollongong, digital marketing agency wollongong, wollongong web designer near me, seo services wollongong, affordable web design wollongong, web design for tradies, web design sydney, local seo wollongong"
        canonical="https://digitaledgestudio.com/"
        ogTitle="Web Design Wollongong | Website Designer | Digital Edge Studio"
        ogDescription="Wollongong web design agency building fast, professional websites for tradies and small businesses. Affordable packages, local SEO, and more leads."
        ogImage="https://digitaledgestudio.com/images/blog/hero-banner.png"
        orgSchema={organizationSchema}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />

      {/* ═══ Hero ═══ */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        <div className="container-tight px-4 py-20 md:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
            >
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent-foreground/90 text-sm font-medium mb-6 backdrop-blur-sm border border-white/10"
              >
                <MapPin className="w-3.5 h-3.5" />
                Serving Sydney, Wollongong & NSW
              </motion.span>
              <motion.h1 variants={fadeUp} className="heading-display text-primary-foreground mb-6">
                Web Design Wollongong — Get More Leads With a Website That Actually Works
              </motion.h1>
              <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/70 mb-8 max-w-2xl">
                We build professional, fast-loading websites and run local SEO campaigns that help Australian small businesses get found online and turn visitors into paying customers.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Get a Free Quote
                    <ArrowRight className="w-5 h-5 ml-1" />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <Link to="/free-website-review">Free Website Review</Link>
                </Button>
              </motion.div>
              <motion.p variants={fadeUp} className="text-primary-foreground/50 text-sm mt-4">
                We take on a limited number of new clients each month — get in touch to check availability.
              </motion.p>
            </motion.div>
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            >
              <img
                src="/images/blog/electrician-google-pic.webp"
                alt="Electrician checking Google reviews on smartphone"
                className="rounded-2xl w-full object-cover max-h-[480px] shadow-lg"
              />
            </motion.div>
          </div>
        </div>
        {/* Wave divider into trust bar */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-card" />
          </svg>
        </div>
      </section>

      {/* ═══ Trust Bar ═══ */}
      <section className="bg-card border-b border-border">
        <div className="container-tight px-4 py-6">
          <ScrollReveal className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm text-muted-foreground">
            {[
              "100+ Websites Delivered",
              "Australian Owned",
              "No Lock-In Contracts",
              "Fast Turnaround",
            ].map((item) => (
              <motion.div key={item} variants={fadeUp} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" /> {item}
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Why Digital Edge ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">Why Australian Businesses Choose Digital Edge</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              We don't just build websites — we build tools that bring you more phone calls, enquiries, and customers.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: "Websites That Convert", desc: "Every site we build is designed with one goal: turning your visitors into leads. Fast, mobile-friendly, and built to rank on Google." },
              { icon: Search, title: "Local SEO That Works", desc: "We optimise your Google Business Profile and website so local customers find you first when they search for your services." },
              { icon: Shield, title: "Ongoing Support & Hosting", desc: "We handle updates, security, and backups so you can focus on running your business. No tech headaches." },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="bg-card rounded-xl p-8 shadow-card border border-border card-hover-lift group"
              >
                <div className="w-12 h-12 rounded-lg gradient-cta flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="heading-card text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Services Overview ═══ */}
      <section className="section-padding relative" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight">
          <ScrollReveal className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">Our Services</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to get your business found online and generating leads.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Website Design & Development", desc: "Custom, mobile-responsive websites built to convert visitors into enquiries. Includes SEO setup, contact forms, and Google Analytics.", price: "From $995" },
              { title: "Local SEO", desc: "Get found on Google Maps and local search results. We optimise your Google Business Profile and target local keywords for your area.", price: "From $1,000/month" },
              { title: "Maintenance & Hosting", desc: "Keep your website fast, secure, and up to date. We handle updates, backups, and performance monitoring so you don't have to.", price: "$99/month" },
            ].map((service) => (
              <motion.div key={service.title} variants={fadeUp} className="bg-card rounded-xl p-8 border border-border shadow-card card-hover-lift flex flex-col">
                <h3 className="heading-card text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-1 mb-4">{service.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-accent font-display">{service.price}</span>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="/services">Learn More <ArrowRight className="w-4 h-4 ml-1" /></Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ How It Works ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">How It Works</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Getting started is simple. No jargon, no confusion — just results.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Tell Us About Your Business", desc: "Fill out our quick form or give us a call. We'll learn about your business, goals, and what you need." },
              { step: "2", title: "We Build Your Solution", desc: "We design and develop your website or SEO strategy, keeping you in the loop every step of the way." },
              { step: "3", title: "Start Getting More Leads", desc: "Your new website goes live and starts working for you — bringing in calls, enquiries, and customers." },
            ].map((item) => (
              <motion.div key={item.step} variants={fadeUp} className="text-center group">
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-cta">
                  <span className="text-accent-foreground text-xl font-bold font-display">{item.step}</span>
                </div>
                <h3 className="heading-card text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Testimonials — Carousel ═══ */}
      <section className="section-padding relative" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight">
          <ScrollReveal className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">What Our Clients Say</motion.h2>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIdx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-lg text-center relative"
              >
                <Quote className="w-10 h-10 text-accent/20 mx-auto mb-6" />
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
                  "{testimonials[testimonialIdx].quote}"
                </p>
                <div>
                  <p className="font-bold text-foreground text-lg">{testimonials[testimonialIdx].name}</p>
                  <p className="text-muted-foreground">{testimonials[testimonialIdx].biz}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Nav arrows */}
            <div className="flex justify-center gap-3 mt-6">
              <button
                onClick={() => setTestimonialIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-10 h-10 rounded-full border border-border bg-card hover:border-accent hover:text-accent flex items-center justify-center transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTestimonialIdx(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === testimonialIdx ? "bg-accent w-6" : "bg-border hover:bg-muted-foreground"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setTestimonialIdx((prev) => (prev + 1) % testimonials.length)}
                className="w-10 h-10 rounded-full border border-border bg-card hover:border-accent hover:text-accent flex items-center justify-center transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Case Studies / Portfolio ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">Real Results for Local Businesses</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it — here's what we've achieved for tradies and small businesses like yours.
            </motion.p>
          </ScrollReveal>

          {/* Stats bar */}
          <ScrollReveal className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
            <AnimatedStat value="100+" label="Websites Delivered" />
            <AnimatedStat value="40+" label="Avg. Leads/Month" />
            <AnimatedStat value="Top 3" label="Google Rankings" />
            <AnimatedStat value="12x" label="Average Client ROI" />
          </ScrollReveal>

          <ScrollReveal className="grid md:grid-cols-3 gap-8">
            {portfolioProjects.filter(p => p.featured).map((project) => (
              <motion.div
                key={project.id}
                variants={fadeUp}
                className="bg-card rounded-xl border border-border shadow-card card-hover-lift overflow-hidden flex flex-col"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.clientName} case study`}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent px-2.5 py-0.5 rounded-full text-xs font-semibold">
                      {project.industry}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {project.location}
                    </span>
                  </div>
                  <h3 className="font-bold text-foreground font-display mb-3 leading-snug text-sm">
                    {project.clientName}
                  </h3>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {project.results.slice(0, 2).map((result) => (
                      <div key={result.label} className="bg-muted/50 rounded-lg p-3">
                        <div className="flex items-center gap-1 mb-0.5">
                          <TrendingUp className="w-3 h-3 text-accent" />
                          <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{result.label}</span>
                        </div>
                        <p className="text-lg font-bold text-accent font-display">{result.value}</p>
                      </div>
                    ))}
                  </div>
                  {project.testimonial && (
                    <p className="text-xs text-muted-foreground italic leading-relaxed flex-1">
                      "{project.testimonial.quote.slice(0, 120)}..."
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground mt-2">— {project.testimonial?.name}</p>
                </div>
              </motion.div>
            ))}
          </ScrollReveal>

          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Button variant="outline" size="lg" asChild>
              <Link to="/portfolio">
                View All Case Studies
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ═══ Areas We Serve ═══ */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight">
          <ScrollReveal className="text-center mb-10">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">Areas We Serve</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Based in NSW, we build websites and run digital marketing for businesses across the Illawarra region, Wollongong, Sydney, and beyond.
            </motion.p>
          </ScrollReveal>
          <ScrollReveal className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: "Web Design Wollongong", path: "/web-design-wollongong" },
              { label: "Web Design Sydney", path: "/web-design-sydney" },
              { label: "Web Design Illawarra", path: "/web-design-illawarra" },
              { label: "Web Design for Tradies", path: "/web-design-tradies" },
              { label: "Healthcare Web Design", path: "/web-design-healthcare" },
            ].map((area) => (
              <motion.div key={area.path} variants={fadeUp}>
                <Link
                  to={area.path}
                  className="flex items-center justify-center gap-2 p-4 bg-card rounded-xl border border-border text-sm font-medium text-foreground hover:border-accent hover:text-accent hover:shadow-md transition-all duration-200 text-center"
                >
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  {area.label}
                </Link>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Final CTA ═══ */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="container-tight px-4 py-20 text-center relative z-10">
          <ScrollReveal>
            <motion.h2 variants={fadeUp} className="heading-section text-primary-foreground mb-4">Ready to Grow Your Business Online?</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/70 max-w-2xl mx-auto mb-8">
              Get a free, no-obligation quote and find out how we can help you get more leads and customers.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/contact">
                  <Calendar className="w-5 h-5 mr-1" />
                  Book a Free Consultation
                </Link>
              </Button>
            </motion.div>
          </ScrollReveal>
        </div>
        {/* Top wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 rotate-180">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-[hsl(210_15%_94%)]" />
          </svg>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
