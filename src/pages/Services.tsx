import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import serviceWebdesign from "@/assets/service-webdesign.jpg";
import serviceSeo from "@/assets/service-seo.jpg";
import serviceMarketing from "@/assets/service-marketing.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";
import { Button } from "@/components/ui/button";
import { SEOMeta } from "@/components/SEOMeta";
import { FAQ } from "@/components/FAQ";
import { Breadcrumb } from "@/components/Breadcrumb";
import Layout from "@/components/Layout";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const Services = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Design & Digital Marketing for Tradies",
    "description": "Professional web design, local SEO, and digital marketing services for tradies and small businesses in Wollongong and Sydney",
    "provider": {
      "@type": "Organization",
      "name": "Digital Edge Studio"
    },
    "areaServed": ["Sydney", "Wollongong", "NSW"]
  };

  const servicesFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What's the difference between your web design and other options?",
        "acceptedAnswer": { "@type": "Answer", "text": "We build custom websites specifically designed to convert visitors into leads and customers. Unlike templates or DIY solutions, our sites are fast, mobile-optimized, SEO-friendly, and include everything you need to succeed online. We don't just build it and disappear — we're here for ongoing support." }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a website?",
        "acceptedAnswer": { "@type": "Answer", "text": "Typical website projects take 4-8 weeks depending on complexity and your location (Sydney, Wollongong, or NSW). We work with you throughout the process to ensure everything is perfect before launch." }
      },
      {
        "@type": "Question",
        "name": "Do you offer services for tradies specifically?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes! We specialize in web design for tradies including plumbers, electricians, builders, cleaners, and contractors. We understand your business model and create websites that attract local customers and qualified leads." }
      },
      {
        "@type": "Question",
        "name": "What's included in your web design packages?",
        "acceptedAnswer": { "@type": "Answer", "text": "Our packages include custom design, mobile responsiveness, fast loading, SEO setup, contact forms, Google Analytics integration, and ongoing support. See our pricing page for complete details." }
      },
      {
        "@type": "Question",
        "name": "Can you help with local SEO for my Wollongong business?",
        "acceptedAnswer": { "@type": "Answer", "text": "Absolutely! We specialize in local SEO for Wollongong, Sydney, and throughout NSW. We optimize your Google Business Profile, target local keywords, and help you rank higher in local search results." }
      },
      {
        "@type": "Question",
        "name": "Do you manage Google Ads campaigns?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes! We manage Google Ads with transparent pricing: 15% of your ad spend with a minimum $250/month management fee. No lock-in contracts, no hidden fees. You only pay for results." }
      }
    ]
  };

  const servicesFAQ = [
    {
      question: "What's the difference between your web design and other options?",
      answer: "We build custom websites specifically designed to convert visitors into leads and customers. Unlike templates or DIY solutions, our sites are fast, mobile-optimized, SEO-friendly, and include everything you need to succeed online. We don't just build it and disappear — we're here for ongoing support."
    },
    {
      question: "How long does it take to build a website?",
      answer: "Typical website projects take 4-8 weeks depending on complexity and your location (Sydney, Wollongong, or NSW). We work with you throughout the process to ensure everything is perfect before launch."
    },
    {
      question: "Do you offer services for tradies specifically?",
      answer: "Yes! We specialize in web design for tradies including plumbers, electricians, builders, cleaners, and contractors. We understand your business model and create websites that attract local customers and qualified leads."
    },
    {
      question: "What's included in your web design packages?",
      answer: "Our packages include custom design, mobile responsiveness, fast loading, SEO setup, contact forms, Google Analytics integration, and ongoing support. See our pricing page for complete details."
    },
    {
      question: "Can you help with local SEO for my Wollongong business?",
      answer: "Absolutely! We specialize in local SEO for Wollongong, Sydney, and throughout NSW. We optimize your Google Business Profile, target local keywords, and help you rank higher in local search results."
    },
    {
      question: "Do you manage Google Ads campaigns?",
      answer: "Yes! We manage Google Ads with transparent pricing: 15% of your ad spend with a minimum $250/month management fee. No lock-in contracts, no hidden fees. You only pay for results."
    }
  ];

  return (
    <Layout>
      <SEOMeta
        title="Web Design & SEO Services Wollongong | Digital Edge Studio"
        description="Custom web design, local SEO, Google Ads management and digital marketing for tradies and small businesses in Wollongong and Sydney. Get more leads today."
        keywords="web design for tradies, seo services wollongong, local seo wollongong, seo agency wollongong, google ads management wollongong, digital marketing agency wollongong, website maintenance wollongong, web design services wollongong"
        ogTitle="Web Design & SEO Services Wollongong | Digital Edge Studio"
        ogDescription="Professional web design, local SEO, and digital marketing services for tradies and small businesses in Wollongong and Sydney."
        orgSchema={serviceSchema}
        faqSchema={servicesFaqSchema}
      />
      
      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Services' }
      ]} />
      {/* Hero */}
      <section className="gradient-hero">
        <div className="container-tight px-4 py-16 md:py-24">
          <motion.div className="max-w-3xl" {...fadeUp}>
            <h1 className="heading-display text-primary-foreground mb-4">
              Services That Bring You More Customers
            </h1>
            <p className="text-body-lg text-primary-foreground/75 max-w-2xl">
              From professional websites to local SEO and ongoing support — everything your business needs to succeed online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Website Design & Development */}
      <section className="section-padding bg-background" id="websites">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Website Design & Development</span>
              <h2 className="heading-section text-foreground mt-2 mb-4">
                A Website That Works as Hard as You Do
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Your website is often the first impression a potential customer has of your business. We build professional, fast-loading, mobile-friendly websites that are designed to turn visitors into paying customers — not just look pretty.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Custom design tailored to your brand and industry",
                  "Mobile-responsive — looks great on phones, tablets, and desktops",
                  "Fast load times for better user experience and SEO",
                  "Built-in SEO foundations so Google can find you",
                  "Contact forms, click-to-call, and clear calls to action",
                  "Google Analytics and Search Console setup included",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="cta" asChild>
                <Link to="/pricing">See Pricing <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
            </motion.div>
            <div className="rounded-2xl overflow-hidden min-h-[300px]">
              <img src={serviceWebdesign} alt="Professional web design on laptop and mobile devices" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }} id="seo">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden min-h-[300px]">
              <img src={serviceSeo} alt="Local SEO and Google Maps search results" className="w-full h-full object-cover rounded-2xl" />
            </div>
            <motion.div className="order-1 lg:order-2" {...fadeUp}>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Local SEO</span>
              <h2 className="heading-section text-foreground mt-2 mb-4">
                Get Found by Customers in Your Area
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                When someone in Sydney or Wollongong searches for your type of business, you want to be the first result they see. Our local SEO services help you rank higher on Google Search and Google Maps so more local customers find and contact you.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Google Business Profile setup and optimisation",
                  "Local keyword research and targeting",
                  "On-page SEO (title tags, meta descriptions, content)",
                  "Citation building and directory listings",
                  "Monthly reporting so you can see the results",
                  "Ongoing strategy adjustments based on data",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="cta" asChild>
                <Link to="/contact">Get Started <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Digital Marketing */}
      <section className="section-padding bg-background" id="marketing">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Google Ads & PPC</span>
              <h2 className="heading-section text-foreground mt-2 mb-4">
                Get Instant Leads With Google Ads
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Stop wasting money on ads that don't convert. We manage your Google Ads campaigns with a transparent pricing model — just 15% of your ad spend (min. $250/mo management fee). No lock-in contracts, no hidden fees, and you only pay for results.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Full Google Ads setup & ongoing management",
                  "Keyword research & smart bid strategy",
                  "Ad copywriting & continuous A/B testing",
                  "Competitor analysis & benchmarking",
                  "Google Analytics & conversion tracking",
                  "Weekly optimisation & transparent monthly reports",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="cta" asChild>
                <Link to="/contact">Discuss Your Strategy <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
            </motion.div>
            <div className="rounded-2xl overflow-hidden min-h-[300px]">
              <img src={serviceMarketing} alt="Digital marketing analytics dashboard" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance & Hosting */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }} id="maintenance">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden min-h-[300px]">
              <img src={serviceMaintenance} alt="Server security and website maintenance" className="w-full h-full object-cover rounded-2xl" />
            </div>
            <motion.div className="order-1 lg:order-2" {...fadeUp}>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Maintenance & Hosting</span>
              <h2 className="heading-section text-foreground mt-2 mb-4">
                Keep Your Website Fast, Secure, and Up to Date
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A website isn't a "set and forget" tool. It needs regular updates, security monitoring, and performance checks. We take care of all of that so you can focus on what you do best — running your business.
              </p>
              <ul className="space-y-3 mb-8">
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
                <Link to="/pricing">See Plans <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero">
        <div className="container-tight px-4 py-20 text-center">
          <h2 className="heading-section text-primary-foreground mb-4">Not Sure What You Need?</h2>
          <p className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
            No worries. Get in touch and we'll have a no-pressure chat about what would work best for your business.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Get a Free Quote <ArrowRight className="w-5 h-5 ml-1" /></Link>
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <FAQ 
        faqs={servicesFAQ} 
        title="Web Design & Digital Marketing for Tradies - Frequently Asked Questions" 
      />
    </Layout>
  );
};

export default Services;
