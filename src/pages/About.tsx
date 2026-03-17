import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Heart, Target, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOMeta } from "@/components/SEOMeta";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import Layout from "@/components/Layout";

/* ── Animation helpers ─────────────────────────────────── */
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
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
      answer: "Digital Edge Studio has been building websites and running digital marketing campaigns for Australian small businesses since 2020. We've delivered over 100 websites across a wide range of industries."
    },
    {
      question: "Do you offer ongoing support after my website launches?",
      answer: "Yes — we offer ongoing maintenance plans from $99/month covering security, backups, updates, and minor content changes. We're also available by email for any questions after launch."
    },
    {
      question: "Why should I choose Digital Edge over a larger agency?",
      answer: "With us, you deal directly with the people doing the work — no account managers or overseas handoffs. We're small enough to care deeply about every project and experienced enough to deliver real results."
    }
  ];

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Digital Edge Studio",
    "description": "Web design and digital marketing agency for tradies and small businesses in Wollongong, Sydney & NSW",
    "areaServed": ["Sydney", "Wollongong", "NSW"],
    "url": "https://digitaledgestudio.com/about",
    "foundingDate": "2020",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "enquiries@digitaledgestudio.com"
    }
  };

  return (
    <Layout>
      <SEOMeta
        title="About | Web Design Agency Wollongong | Digital Edge Studio"
        description="Digital Edge Studio is a web design agency in Wollongong specialising in websites and digital marketing for tradies and small businesses. Australian owned & operated."
        keywords="web design agency wollongong, best web design agencies wollongong, digital marketing agency wollongong, website designer wollongong, small business web design"
        canonical="https://digitaledgestudio.com/about"
        ogTitle="About Digital Edge Studio | Web Design Agency Wollongong"
        ogDescription="Wollongong web design agency specialising in tradies and small businesses. Australian owned and based in NSW."
        orgSchema={aboutSchema}
      />

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'About' }
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
              About Digital Edge
            </motion.h1>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl">
              We're a small team of web designers and digital marketers passionate about helping Australian businesses grow online.
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

      {/* Mission */}
      <section className="section-padding bg-background">
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
                <p>
                  We've seen tradies, physiotherapists, plumbers, electricians, and dozens of other local businesses transform their lead generation by getting a website that actually works. Not a template. Not a DIY drag-and-drop site. A properly built, professionally designed website that ranks on Google and turns visitors into phone calls and enquiries.
                </p>
                <p>
                  We're based in NSW and work with businesses across Sydney, Wollongong, and the surrounding areas. We understand the local market because we're part of it.
                </p>
                <a
                  href="https://www.linkedin.com/company/digitaledgestudio-agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex mt-2"
                  aria-label="Connect with us on LinkedIn"
                >
                  <img src="/images/blog/linkedin-icon-dark.png" alt="LinkedIn" className="w-8 h-8 opacity-80 hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden min-h-[350px]">
              <img
                src="/images/blog/about-page-pic.jpg"
                alt="Digital Edge Studio team working on web design"
                className="w-full h-full object-cover min-h-[350px] hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight">
          <ScrollReveal className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">What We Stand For</motion.h2>
          </ScrollReveal>

          <ScrollReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "Results First", desc: "We measure success by the leads and customers we generate for your business, not just how a website looks." },
              { icon: Users, title: "Honest Communication", desc: "No jargon, no upselling. We explain everything in plain English and only recommend what you actually need." },
              { icon: Award, title: "Quality Work", desc: "We take pride in every project. Your website represents your business and we treat it with that level of care." },
              { icon: Heart, title: "Long-Term Partnerships", desc: "We don't disappear after launch. We're here for the long haul, helping your business grow month after month." },
            ].map((v) => (
              <motion.div key={v.title} variants={fadeUp} className="bg-card rounded-xl p-6 border border-border shadow-card text-center card-hover-lift">
                <div className="w-12 h-12 rounded-lg gradient-cta flex items-center justify-center mx-auto mb-4">
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

      {/* CTA */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        <div className="container-tight px-4 py-20 text-center relative z-10">
          <ScrollReveal>
            <motion.h2 variants={fadeUp} className="heading-section text-primary-foreground mb-4">Let's Have a Chat</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
              Whether you're ready to get started or just exploring your options, we'd love to hear from you.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get in Touch <ArrowRight className="w-5 h-5 ml-1" /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/free-website-review">Free Website Review</Link>
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
    </Layout>
  );
};

export default About;
