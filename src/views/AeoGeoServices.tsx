"use client";


import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { stagger, fadeUp } from "@/lib/animations";
import { ArrowRight, CheckCircle2, Bot, Cpu, Sparkles, Search, BarChart3, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/FAQ";
import { Breadcrumb } from "@/components/Breadcrumb";

const AeoGeoServices = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AEO & GEO — AI Search Optimisation",
    "description": "Answer Engine Optimisation (AEO) and Generative Engine Optimisation (GEO) services that help businesses get found by AI search tools like Google AI Overviews, ChatGPT, Siri, and Google Assistant. Serving Wollongong, Sydney, and NSW.",
    "provider": {
      "@type": "Organization",
      "name": "Digital Edge Studio",
      "url": "https://digitaledgestudio.com"
    },
    "areaServed": ["Wollongong", "Sydney", "NSW", "Australia"],
    "serviceType": "AI Search Optimisation",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AEO & GEO Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Answer Engine Optimisation (AEO)",
            "description": "Optimise your website so AI assistants like Siri, Google Assistant, Alexa, and ChatGPT recommend your business as the direct answer to customer queries."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Generative Engine Optimisation (GEO)",
            "description": "Optimise your website to appear in Google AI Overviews and other AI-generated search summaries, gaining prominent visibility above traditional search results."
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is AEO (Answer Engine Optimisation)?",
        "acceptedAnswer": { "@type": "Answer", "text": "AEO stands for Answer Engine Optimisation. It is the practice of structuring your website content so AI-powered assistants like Siri, Google Assistant, Alexa, and ChatGPT can extract and present your business as a direct answer to user queries. Instead of showing a list of links, these AI tools give a single spoken or written answer — and AEO ensures that answer is your business." }
      },
      {
        "@type": "Question",
        "name": "What is GEO (Generative Engine Optimisation)?",
        "acceptedAnswer": { "@type": "Answer", "text": "GEO stands for Generative Engine Optimisation. It focuses on optimising your website so that AI-generated search summaries — such as Google AI Overviews — feature your content prominently. These AI summaries now appear at the top of roughly 45% of Google searches, making GEO essential for maintaining visibility as search evolves." }
      },
      {
        "@type": "Question",
        "name": "How is AEO different from traditional SEO?",
        "acceptedAnswer": { "@type": "Answer", "text": "Traditional SEO focuses on ranking your website in a list of search results. AEO goes further by structuring your content so AI assistants can extract it as a direct, definitive answer. While SEO gets you onto the list, AEO gets you chosen as the answer — which is increasingly how people find businesses through voice search and AI tools." }
      },
      {
        "@type": "Question",
        "name": "Do I need AEO and GEO if I already do SEO?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. SEO remains important, but AI is rapidly changing how people search. Google AI Overviews can reduce clicks to traditional results by up to 58%. Without AEO and GEO, your competitors who optimise for AI search will capture the visibility you are missing. AEO and GEO complement your existing SEO strategy." }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see results from AEO/GEO?",
        "acceptedAnswer": { "@type": "Answer", "text": "Most businesses begin seeing improvements within 4 to 8 weeks as search engines re-crawl and re-index optimised content. However, the full impact builds over 3 to 6 months as AI systems learn to trust and cite your content more frequently. Early adopters see the fastest gains because there is less competition in AI search results right now." }
      },
      {
        "@type": "Question",
        "name": "Is AEO/GEO included in your SEO packages?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Both AEO and GEO are included in our Local SEO package at no extra cost. We believe AI search optimisation should be a standard part of any modern SEO strategy, not an expensive add-on. Every client who signs up for Local SEO gets full AEO and GEO optimisation included." }
      }
    ]
  };

  const aeoGeoFAQ = [
    {
      question: "What is AEO (Answer Engine Optimisation)?",
      answer: "AEO stands for Answer Engine Optimisation. It is the practice of structuring your website content so AI-powered assistants like Siri, Google Assistant, Alexa, and ChatGPT can extract and present your business as a direct answer to user queries. Instead of showing a list of links, these AI tools give a single spoken or written answer — and AEO ensures that answer is your business."
    },
    {
      question: "What is GEO (Generative Engine Optimisation)?",
      answer: "GEO stands for Generative Engine Optimisation. It focuses on optimising your website so that AI-generated search summaries — such as Google AI Overviews — feature your content prominently. These AI summaries now appear at the top of roughly 45% of Google searches, making GEO essential for maintaining visibility as search evolves."
    },
    {
      question: "How is AEO different from traditional SEO?",
      answer: "Traditional SEO focuses on ranking your website in a list of search results. AEO goes further by structuring your content so AI assistants can extract it as a direct, definitive answer. While SEO gets you onto the list, AEO gets you chosen as the answer — which is increasingly how people find businesses through voice search and AI tools."
    },
    {
      question: "Do I need AEO and GEO if I already do SEO?",
      answer: "Yes. SEO remains important, but AI is rapidly changing how people search. Google AI Overviews can reduce clicks to traditional results by up to 58%. Without AEO and GEO, your competitors who optimise for AI search will capture the visibility you are missing. AEO and GEO complement your existing SEO strategy."
    },
    {
      question: "How long does it take to see results from AEO/GEO?",
      answer: "Most businesses begin seeing improvements within 4 to 8 weeks as search engines re-crawl and re-index optimised content. However, the full impact builds over 3 to 6 months as AI systems learn to trust and cite your content more frequently. Early adopters see the fastest gains because there is less competition in AI search results right now."
    },
    {
      question: "Is AEO/GEO included in your SEO packages?",
      answer: "Yes. Both AEO and GEO are included in our Local SEO package at no extra cost. We believe AI search optimisation should be a standard part of any modern SEO strategy, not an expensive add-on. Every client who signs up for Local SEO gets full AEO and GEO optimisation included."
    }
  ];

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Services', path: '/services' },
        { label: 'AEO & GEO' }
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
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-primary-foreground/90 text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              AI Search Optimisation
            </motion.div>
            <motion.h1 variants={fadeUp} className="heading-display text-primary-foreground mb-4">
              Get Found by <span className="text-gradient">AI Search</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl mb-8">
              Most businesses haven't heard of AEO or GEO yet. That means the window to get ahead of your competitors is wide open. We make sure AI recommends your business — not theirs.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link href="/contact">Get Started <ArrowRight className="w-5 h-5 ml-1" /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#what-is-aeo">Learn More</a>
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

      {/* ═══ What is AEO ═══ */}
      <section className="section-padding bg-background" id="what-is-aeo">
        <div className="container-tight">
          <ScrollReveal className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl gradient-cta flex items-center justify-center shrink-0">
                  <Bot className="w-7 h-7 text-accent-foreground" />
                </div>
                <div>
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">Answer Engine Optimisation</span>
                  <h2 className="heading-section text-foreground mt-1">What is AEO?</h2>
                </div>
              </div>
              <p className="text-foreground font-medium leading-relaxed mb-6 text-lg border-l-4 border-accent/30 pl-4">
                Answer Engine Optimisation (AEO) is the practice of structuring website content so AI-powered assistants can extract and present it as a direct answer to user queries — replacing traditional link-based results with a single, definitive response.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                When someone asks Siri, Google Assistant, Alexa, or ChatGPT a question like <em>"who's the best electrician in Wollongong"</em>, the AI doesn't show a list of ten blue links. It gives one direct answer. AEO is how we make sure that answer is <span className="text-foreground font-medium">your business</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                According to research from Princeton University (KDD 2024), content optimised for AI citation receives up to <span className="text-foreground font-medium">40% more visibility</span> than non-optimised content. This isn't a future trend — it's happening right now, and most of your competitors haven't started.
              </p>
              <ul className="space-y-3">
                {[
                  "FAQ and Q&A formatting that AI assistants can easily read",
                  "Schema markup so search engines understand your content",
                  "Content structured around the exact questions your customers ask",
                  "Optimised for Google Assistant, Siri, Alexa & ChatGPT",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-card rounded-2xl border border-border shadow-card p-8">
              <h3 className="heading-card text-foreground mb-4">How AEO Works in Practice</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-accent font-bold text-sm">1</span>
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-1">Customer asks a question</p>
                    <p className="text-muted-foreground text-sm">"Hey Siri, who's the best plumber in Wollongong?"</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-accent font-bold text-sm">2</span>
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-1">AI scans the web for the best answer</p>
                    <p className="text-muted-foreground text-sm">It looks for well-structured, authoritative content that directly answers the question.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-accent font-bold text-sm">3</span>
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-1">Your business is the answer</p>
                    <p className="text-muted-foreground text-sm">Because your content is AEO-optimised, the AI recommends your business directly.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ What is GEO ═══ */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }} id="what-is-geo">
        <div className="container-tight">
          <ScrollReveal className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div variants={fadeUp} className="order-2 lg:order-1 bg-card rounded-2xl border border-border shadow-card p-8">
              <h3 className="heading-card text-foreground mb-4">The Shift in Search Behaviour</h3>
              <div className="space-y-5">
                <div className="p-4 rounded-xl bg-accent/5 border border-accent/10">
                  <p className="text-accent font-bold text-2xl mb-1">45%</p>
                  <p className="text-muted-foreground text-sm">of Google searches now show an AI-generated summary at the top of results.</p>
                </div>
                <div className="p-4 rounded-xl bg-accent/5 border border-accent/10">
                  <p className="text-accent font-bold text-2xl mb-1">58%</p>
                  <p className="text-muted-foreground text-sm">reduction in clicks to traditional search results when an AI Overview is present.</p>
                </div>
                <div className="p-4 rounded-xl bg-accent/5 border border-accent/10">
                  <p className="text-accent font-bold text-2xl mb-1">+40%</p>
                  <p className="text-muted-foreground text-sm">more visibility for content optimised for AI citation (Princeton University, KDD 2024).</p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl gradient-cta flex items-center justify-center shrink-0">
                  <Cpu className="w-7 h-7 text-accent-foreground" />
                </div>
                <div>
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">Generative Engine Optimisation</span>
                  <h2 className="heading-section text-foreground mt-1">What is GEO?</h2>
                </div>
              </div>
              <p className="text-foreground font-medium leading-relaxed mb-6 text-lg border-l-4 border-accent/30 pl-4">
                Generative Engine Optimisation (GEO) is the practice of optimising website content to appear in AI-generated search summaries — such as Google AI Overviews — that are displayed above traditional search results.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                You may have noticed Google now shows an AI-generated summary box at the very top of search results — above all the website links. That's called an <span className="text-foreground font-medium">AI Overview</span>. These summaries now appear in roughly 45% of Google searches and can reduce clicks to traditional results by up to 58%.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                GEO means optimising your website so Google's AI pulls <span className="text-foreground font-medium">your content</span> into that summary box. Traditional SEO gets you into the list. GEO gets you <span className="text-foreground font-medium">above the list</span>. It's like getting a free advertisement at the very top of Google — before anyone even scrolls.
              </p>
              <ul className="space-y-3">
                {[
                  "Content structured so Google's AI can easily summarise it",
                  "Builds your website's authority and trustworthiness",
                  "Topical depth — covering your services comprehensively",
                  "Targets the AI Overview box on high-value local searches",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Our Process ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">How We Do It</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Our four-step process ensures your business is optimised for both AI assistants and AI-generated search results.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Audit",
                description: "We analyse your current website, content structure, and schema markup to identify gaps in AI search readiness."
              },
              {
                step: "02",
                title: "Structure",
                description: "We restructure your content with FAQ formatting, Q&A patterns, and schema markup that AI assistants can easily parse."
              },
              {
                step: "03",
                title: "Optimise",
                description: "We create and refine content around the exact questions your customers ask, building topical authority in your field."
              },
              {
                step: "04",
                title: "Monitor",
                description: "We track your AI search visibility, monitor competitor activity, and continuously refine your strategy based on real data."
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

      {/* ═══ Who It's For ═══ */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight">
          <ScrollReveal className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">Who It's For</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              AI search optimisation benefits any business that relies on customers finding them online. Here are some of the industries we work with.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Tradies",
                description: "Plumbers, electricians, builders, and contractors who want to be the answer when someone asks \"who's the best tradie near me\".",
                link: "/web-design-tradies"
              },
              {
                title: "Healthcare",
                description: "Dentists, physios, chiropractors, and medical practices looking to attract patients through AI search and voice queries.",
                link: "/web-design-healthcare"
              },
              {
                title: "Small Business",
                description: "Cafes, retail shops, gyms, and local services that need to stand out in an increasingly AI-driven search landscape.",
                link: "/web-design-wollongong"
              },
              {
                title: "Professional Services",
                description: "Accountants, lawyers, consultants, and agencies who want to be the trusted expert AI recommends.",
                link: "/web-design-sydney"
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="bg-card rounded-2xl border border-border shadow-card p-8 card-hover-lift"
              >
                <h3 className="heading-card text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{item.description}</p>
                <Link href={item.link} className="text-accent text-sm font-semibold hover:text-accent/80 transition-colors inline-flex items-center gap-1">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Results / Stats ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-4">Why AEO & GEO Matter</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              The numbers speak for themselves. AI search is not a future trend — it's already here and reshaping how customers find businesses.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: TrendingUp,
                stat: "+40%",
                label: "AI Visibility",
                description: "Content optimised for AI citation receives up to 40% more visibility (Princeton University, KDD 2024)."
              },
              {
                icon: Search,
                stat: "45%",
                label: "of Searches",
                description: "Nearly half of all Google searches now display an AI-generated overview at the top of results."
              },
              {
                icon: Award,
                stat: "First Mover",
                label: "Advantage",
                description: "Most businesses haven't started. The earlier you optimise, the more competitive advantage you gain."
              },
              {
                icon: Sparkles,
                stat: "Included",
                label: "in SEO Package",
                description: "AEO and GEO are included in our Local SEO package at no extra cost. No expensive add-ons required."
              },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className="bg-card rounded-2xl border border-border shadow-card p-8 card-hover-lift text-center"
              >
                <div className="w-12 h-12 rounded-xl gradient-cta flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <p className="text-accent font-display font-bold text-3xl mb-1">{item.stat}</p>
                <p className="text-foreground font-semibold mb-2">{item.label}</p>
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
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-primary-foreground/90 text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Included at No Extra Cost
            </motion.div>
            <motion.h2 variants={fadeUp} className="heading-section text-primary-foreground mb-4">
              AEO & GEO Are Included in Our Local SEO Package
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
              We don't charge extra for AI search optimisation. It's built into our Local SEO service because we believe every business deserves to be found — whether someone is searching on Google, asking Siri, or using ChatGPT.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link href="/pricing">See Pricing <ArrowRight className="w-5 h-5 ml-1" /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link href="/contact">Talk to Us</Link>
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
        faqs={aeoGeoFAQ}
        title="AEO & GEO — Frequently Asked Questions"
      />

      {/* ═══ Internal Links ═══ */}
      <section className="section-padding bg-background border-t border-border">
        <div className="container-tight">
          <ScrollReveal className="text-center">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-8">Explore More</motion.h2>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              {[
                { label: "All Services", path: "/services" },
                { label: "Pricing", path: "/pricing" },
                { label: "AEO & GEO Blog Post", path: "/blog/aeo-geo-future-of-marketing" },
                { label: "Portfolio", path: "/portfolio" },
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

export default AeoGeoServices;
