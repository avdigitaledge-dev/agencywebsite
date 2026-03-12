import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Target, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOMeta } from "@/components/SEOMeta";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import Layout from "@/components/Layout";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
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
      <section className="gradient-hero">
        <div className="container-tight px-4 py-16 md:py-24">
          <motion.div className="max-w-3xl" {...fadeUp}>
            <h1 className="heading-display text-primary-foreground mb-4">
              About Digital Edge
            </h1>
            <p className="text-body-lg text-primary-foreground/75 max-w-2xl">
              We're a small team of web designers and digital marketers passionate about helping Australian businesses grow online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
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
            <div className="rounded-2xl overflow-hidden min-h-[350px]">
              <img
                src="/images/blog/about-page-pic.jpg"
                alt="Digital Edge Studio team working on web design"
                className="w-full h-full object-cover min-h-[350px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight">
          <motion.div className="text-center mb-14" {...fadeUp}>
            <h2 className="heading-section text-foreground mb-4">What We Stand For</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "Results First", desc: "We measure success by the leads and customers we generate for your business, not just how a website looks." },
              { icon: Users, title: "Honest Communication", desc: "No jargon, no upselling. We explain everything in plain English and only recommend what you actually need." },
              { icon: Award, title: "Quality Work", desc: "We take pride in every project. Your website represents your business and we treat it with that level of care." },
              { icon: Heart, title: "Long-Term Partnerships", desc: "We don't disappear after launch. We're here for the long haul, helping your business grow month after month." },
            ].map((v) => (
              <div key={v.title} className="bg-card rounded-xl p-6 border border-border shadow-card text-center">
                <div className="w-12 h-12 rounded-lg gradient-cta flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-bold text-foreground font-display mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ
        faqs={aboutFAQ}
        title="About Digital Edge Studio — Frequently Asked Questions"
      />

      {/* CTA */}
      <section className="gradient-hero">
        <div className="container-tight px-4 py-20 text-center">
          <h2 className="heading-section text-primary-foreground mb-4">Let's Have a Chat</h2>
          <p className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
            Whether you're ready to get started or just exploring your options, we'd love to hear from you.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Get in Touch <ArrowRight className="w-5 h-5 ml-1" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
