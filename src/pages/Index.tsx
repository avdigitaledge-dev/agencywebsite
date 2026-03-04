import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Search, Shield, CheckCircle2, Star, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOMeta } from "@/components/SEOMeta";
import Layout from "@/components/Layout";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const Index = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Digital Edge Studio",
    "description": "Web design and digital marketing for tradies and small businesses in Wollongong, Sydney & NSW",
    "url": "https://digitaledgestudio.com",
    "email": "enquiries@digitaledgestudio.com",
    "areaServed": [
      {
        "@type": "City",
        "name": "Sydney"
      },
      {
        "@type": "City",
        "name": "Wollongong"
      },
      {
        "@type": "State",
        "name": "NSW"
      }
    ],
    "priceRange": "$$",
    "serviceType": ["Web Design", "Digital Marketing", "Local SEO"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "3",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "author": { "@type": "Person", "name": "James T." },
        "reviewBody": "Since Digital Edge rebuilt our website, we've had a 60% increase in phone calls from Google. Best investment we've made."
      },
      {
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "author": { "@type": "Person", "name": "Sarah M." },
        "reviewBody": "They made the whole process easy and stress-free. Our new website looks incredible and we're getting more bookings than ever."
      },
      {
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "author": { "@type": "Person", "name": "Mark L." },
        "reviewBody": "The local SEO work has been a game changer. We're now showing up at the top of Google Maps in our area."
      }
    ]
  };

  return (
    <Layout>
      <SEOMeta
        title="Web Design for Tradies | Wollongong & Sydney | Digital Edge Studio"
        description="Expert web design and digital marketing for tradies and small businesses. Get more leads and customers with a website that works. Services in Sydney, Wollongong & NSW."
        keywords="web design wollongong, web design for tradies, digital marketing for small businesses, web design sydney, local seo"
        ogTitle="Web Design for Tradies | Wollongong & Sydney"
        ogDescription="Professional web design and digital marketing for tradies and small businesses across Sydney, Wollongong & NSW."
        orgSchema={organizationSchema}
      />
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        <div className="container-tight px-4 py-20 md:py-32 relative z-10">
          <motion.div className="max-w-3xl" {...fadeUp}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 text-white text-sm font-medium mb-6">
              <MapPin className="w-3.5 h-3.5" />
              Serving Sydney, Wollongong & NSW
            </span>
            <h1 className="heading-display text-primary-foreground mb-6">
              Get More Leads & Customers With a Website That Actually Works
            </h1>
            <p className="text-body-lg text-primary-foreground/75 mb-8 max-w-2xl">
              We build professional, fast-loading websites and run local SEO campaigns that help Australian small businesses get found online and turn visitors into paying customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/contact">Free Website Review</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-card border-b border-border">
        <div className="container-tight px-4 py-6 flex flex-wrap justify-center gap-8 md:gap-16 text-sm text-muted-foreground">
          <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> 100+ Websites Delivered</div>
          <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Australian Owned</div>
          <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> No Lock-In Contracts</div>
          <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Fast Turnaround</div>
        </div>
      </section>

      {/* Why Digital Edge */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <motion.div className="text-center mb-14" {...fadeUp}>
            <h2 className="heading-section text-foreground mb-4">Why Australian Businesses Choose Digital Edge</h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              We don't just build websites — we build tools that bring you more phone calls, enquiries, and customers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Websites That Convert",
                desc: "Every site we build is designed with one goal: turning your visitors into leads. Fast, mobile-friendly, and built to rank on Google.",
              },
              {
                icon: Search,
                title: "Local SEO That Works",
                desc: "We optimise your Google Business Profile and website so local customers find you first when they search for your services.",
              },
              {
                icon: Shield,
                title: "Ongoing Support & Hosting",
                desc: "We handle updates, security, and backups so you can focus on running your business. No tech headaches.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-shadow border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="w-12 h-12 rounded-lg gradient-cta flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="heading-card text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight">
          <motion.div className="text-center mb-14" {...fadeUp}>
            <h2 className="heading-section text-foreground mb-4">Our Services</h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to get your business found online and generating leads.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Website Design & Development",
                desc: "Custom, mobile-responsive websites built to convert visitors into enquiries. Includes SEO setup, contact forms, and Google Analytics.",
                price: "From $800",
              },
              {
                title: "Local SEO",
                desc: "Get found on Google Maps and local search results. We optimise your Google Business Profile and target local keywords for your area.",
                price: "From $400/month",
              },
              {
                title: "Maintenance & Hosting",
                desc: "Keep your website fast, secure, and up to date. We handle updates, backups, and performance monitoring so you don't have to.",
                price: "$99/month",
              },
            ].map((service) => (
              <div key={service.title} className="bg-card rounded-xl p-8 border border-border shadow-card hover:shadow-card-hover transition-shadow flex flex-col">
                <h3 className="heading-card text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-1 mb-4">{service.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-accent font-display">{service.price}</span>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="/services">Learn More <ArrowRight className="w-4 h-4 ml-1" /></Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <motion.div className="text-center mb-14" {...fadeUp}>
            <h2 className="heading-section text-foreground mb-4">How It Works</h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Getting started is simple. No jargon, no confusion — just results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Tell Us About Your Business", desc: "Fill out our quick form or give us a call. We'll learn about your business, goals, and what you need." },
              { step: "2", title: "We Build Your Solution", desc: "We design and develop your website or SEO strategy, keeping you in the loop every step of the way." },
              { step: "3", title: "Start Getting More Leads", desc: "Your new website goes live and starts working for you — bringing in calls, enquiries, and customers." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full gradient-hero flex items-center justify-center mx-auto mb-5">
                  <span className="text-primary-foreground text-xl font-bold font-display">{item.step}</span>
                </div>
                <h3 className="heading-card text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight">
          <motion.div className="text-center mb-14" {...fadeUp}>
            <h2 className="heading-section text-foreground mb-4">What Our Clients Say</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "James T.", biz: "Plumber, Sydney", quote: "Since Digital Edge rebuilt our website, we've had a 60% increase in phone calls from Google. Best investment we've made." },
              { name: "Sarah M.", biz: "Physiotherapist, Wollongong", quote: "They made the whole process easy and stress-free. Our new website looks incredible and we're getting more bookings than ever." },
              { name: "Mark L.", biz: "Electrician, NSW", quote: "The local SEO work has been a game changer. We're now showing up at the top of Google Maps in our area." },
            ].map((t) => (
              <div key={t.name} className="bg-card rounded-xl p-8 border border-border shadow-card">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.biz}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="gradient-hero relative">
        <div className="container-tight px-4 py-20 text-center relative z-10">
          <h2 className="heading-section text-primary-foreground mb-4">Ready to Grow Your Business Online?</h2>
          <p className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
            Get a free, no-obligation quote and find out how we can help you get more leads and customers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
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
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
