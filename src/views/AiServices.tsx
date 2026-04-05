"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { stagger, fadeUp } from "@/lib/animations";
import {
  ArrowRight,
  CheckCircle2,
  Bot,
  Phone,
  Sparkles,
  MessageSquare,
  Clock,
  Calendar,
  Shield,
  Zap,
  Users,
  HeadphonesIcon,
  Stethoscope,
  Wrench,
  Building2,
  DollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/FAQ";
import { Breadcrumb } from "@/components/Breadcrumb";
import { useTilt } from "@/hooks/use-effects";

const PricingTiltCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, style } = useTilt(5);
  return (
    <motion.div variants={fadeUp} ref={ref} style={style} className={className}>
      {children}
    </motion.div>
  );
};

const AiServices = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Solutions — Chatbots & Voice Receptionists",
    "description":
      "AI-powered chatbot and voice receptionist solutions for tradies, healthcare providers, receptionists, and small businesses in Sydney & Wollongong. Automate customer service, bookings, and phone answering 24/7.",
    "provider": {
      "@type": "Organization",
      "name": "Digital Edge Studio",
      "url": "https://digitaledgestudio.com",
    },
    "areaServed": ["Wollongong", "Sydney", "NSW", "Australia"],
    "serviceType": "AI Solutions",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Chatbots & Assistants",
            "description":
              "AI-powered chatbots for websites that handle customer enquiries, bookings, quotes, and support 24/7 — trained on your business.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Voice Receptionists",
            "description":
              "AI phone answering that greets callers, books appointments, routes calls, and takes messages — so you never miss a lead.",
          },
        },
      ],
    },
  };

  const aiFAQs = [
    {
      question: "What is an AI chatbot and how does it work for my business?",
      answer:
        "An AI chatbot is a smart assistant that lives on your website and answers customer questions in real time, 24/7. We train it on your specific services, pricing, FAQs, and processes so it sounds like a knowledgeable member of your team. It can handle enquiries, capture leads, book appointments, and even provide quotes — all without you lifting a finger.",
    },
    {
      question: "What is an AI voice receptionist?",
      answer:
        "An AI voice receptionist is an intelligent phone system that answers your business calls with a natural-sounding voice. It can greet callers, answer common questions, book appointments into your calendar, route urgent calls to your mobile, and take messages — all without hiring extra staff. It works 24/7, including after hours and weekends.",
    },
    {
      question: "Will the AI sound robotic or generic?",
      answer:
        "Not at all. Modern AI voice and chat technology sounds remarkably natural. We customise the tone, personality, and knowledge base to match your brand. For voice receptionists, you can choose from a range of natural Australian-sounding voices. For chatbots, we match your brand voice and can even add personality touches that reflect your business culture.",
    },
    {
      question: "How long does it take to set up?",
      answer:
        "Most AI chatbots can be live on your website within 1–2 weeks. AI voice receptionists typically take 2–3 weeks to set up, test, and go live. This includes training the AI on your business, configuring integrations with your booking system or CRM, and thorough testing to make sure everything works perfectly before launch.",
    },
    {
      question: "Can the AI book appointments and take payments?",
      answer:
        "Yes. Both the chatbot and voice receptionist can integrate with popular booking and calendar tools like Calendly, Google Calendar, ServiceM8, and Cliniko. Payment collection can be set up through integrations with Stripe or Square, allowing customers to pay deposits or invoices directly through the chat or over the phone.",
    },
    {
      question: "What happens if the AI can't answer a question?",
      answer:
        "The AI is designed to gracefully hand off to a human when it encounters something it cannot handle. For chatbots, it can collect the customer's details and notify you instantly via email or SMS. For voice receptionists, it can transfer the call to your mobile or take a detailed message. You are always in control of when and how handoffs happen.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Breadcrumb
        items={[
          { label: "Home", path: "/" },
          { label: "Services", path: "/services" },
          { label: "AI Solutions" },
        ]}
      />

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
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-primary-foreground/90 text-sm font-semibold mb-6"
            >
              <Sparkles className="w-4 h-4" />
              AI-Powered Solutions
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="heading-display text-primary-foreground mb-4"
            >
              AI That Works <span className="text-gradient">While You Don't</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-body-lg text-primary-foreground/75 max-w-2xl mb-8"
            >
              Smart chatbots and AI voice receptionists that handle enquiries,
              book appointments, and answer calls 24/7 — so you can focus on the
              work that matters. Built for tradies, healthcare, and small
              businesses across Sydney &amp; Wollongong.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="hero" size="lg" asChild>
                <Link href="/contact">
                  Get Started <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#ai-chatbots">See How It Works</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
            className="w-full h-[40px] md:h-[60px]"
          >
            <path
              d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z"
              className="fill-background"
            />
          </svg>
        </div>
      </section>

      {/* ═══ AI Chatbots Section ═══ */}
      <section className="section-padding bg-background" id="ai-chatbots">
        <div className="container-tight">
          <ScrollReveal className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl gradient-cta flex items-center justify-center shrink-0">
                  <Bot className="w-7 h-7 text-accent-foreground" />
                </div>
                <div>
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                    Website AI
                  </span>
                  <h2 className="heading-section text-foreground mt-1">
                    AI Chatbots &amp; Assistants
                  </h2>
                </div>
              </div>
              <p className="text-foreground font-medium leading-relaxed mb-6 text-lg border-l-4 border-accent/30 pl-4">
                A smart assistant on your website that knows your business inside
                out — answering questions, capturing leads, and booking jobs
                around the clock.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Your customers don't wait until 9am to look for a plumber, a
                dentist, or a quote. With an AI chatbot trained specifically on{" "}
                <span className="text-foreground font-medium">
                  your services, pricing, and processes
                </span>
                , every visitor gets an instant, helpful response — whether it's
                3pm or 3am.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Unlike generic chat widgets, our AI chatbots are trained on your
                actual business data. They can answer detailed questions about
                your services, provide ballpark quotes, qualify leads, and book
                appointments directly into your calendar.
              </p>
              <ul className="space-y-3">
                {[
                  "Trained on your services, pricing & FAQs",
                  "Captures leads and sends them to your inbox instantly",
                  "Books appointments into your calendar automatically",
                  "Handles multiple conversations at once — no wait times",
                  "Works 24/7, including weekends and public holidays",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-foreground"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="bg-card rounded-2xl border border-border shadow-card p-8"
            >
              <h3 className="heading-card text-foreground mb-4">
                What Your AI Chatbot Can Do
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: MessageSquare,
                    title: "Answer Customer Questions",
                    description:
                      '"Do you service the Wollongong area?" "How much does a dental check-up cost?" — answered instantly.',
                  },
                  {
                    icon: Calendar,
                    title: "Book Appointments",
                    description:
                      "Integrates with Google Calendar, Calendly, ServiceM8, Cliniko, and more to book jobs on the spot.",
                  },
                  {
                    icon: DollarSign,
                    title: "Provide Quotes & Pricing",
                    description:
                      "Give ballpark estimates based on the criteria you set, qualifying leads before they reach you.",
                  },
                  {
                    icon: Zap,
                    title: "Instant Lead Capture",
                    description:
                      "Collects name, email, phone, and job details — sent straight to your inbox or CRM.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium mb-1">
                        {item.title}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ AI Voice Receptionists Section ═══ */}
      <section
        className="section-padding"
        style={{ background: "var(--surface-gradient)" }}
        id="ai-voice"
      >
        <div className="container-tight">
          <ScrollReveal className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              variants={fadeUp}
              className="order-2 lg:order-1 bg-card rounded-2xl border border-border shadow-card p-8"
            >
              <h3 className="heading-card text-foreground mb-4">
                How Your AI Receptionist Handles a Call
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-accent font-bold text-sm">1</span>
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-1">
                      Customer calls your business
                    </p>
                    <p className="text-muted-foreground text-sm">
                      "Hi, I need an emergency plumber in Wollongong — my
                      kitchen tap is leaking."
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-accent font-bold text-sm">2</span>
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-1">
                      AI greets and gathers details
                    </p>
                    <p className="text-muted-foreground text-sm">
                      "No worries! I can help with that. Can I grab your name
                      and address so we can get someone out to you?"
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-accent font-bold text-sm">3</span>
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-1">
                      Books the job or routes the call
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Books straight into your calendar, sends you an SMS with
                      the details, or transfers urgent calls to your mobile.
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-accent/5 border border-accent/10 mt-4">
                  <p className="text-accent font-bold text-lg mb-1">
                    Zero missed calls
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Every call is answered, every lead is captured — even at 2am
                    on a Sunday.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl gradient-cta flex items-center justify-center shrink-0">
                  <Phone className="w-7 h-7 text-accent-foreground" />
                </div>
                <div>
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                    AI Phone Answering
                  </span>
                  <h2 className="heading-section text-foreground mt-1">
                    AI Voice Receptionists
                  </h2>
                </div>
              </div>
              <p className="text-foreground font-medium leading-relaxed mb-6 text-lg border-l-4 border-accent/30 pl-4">
                An AI receptionist that answers your phone with a natural
                Australian voice — greeting callers, booking appointments, and
                routing urgent calls to you.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Every missed call is a missed job. For tradies on-site, medical
                practices with busy front desks, and small businesses without a
                dedicated receptionist, an AI voice agent means{" "}
                <span className="text-foreground font-medium">
                  never losing a customer to voicemail again
                </span>
                .
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our AI voice receptionists sound natural, not robotic. They're
                trained on your business, understand your services, and can
                handle everything from simple enquiries to booking complex
                appointments — all while you're out on a job or with a patient.
              </p>
              <ul className="space-y-3">
                {[
                  "Natural Australian-sounding voice — not a robot",
                  "Answers calls 24/7 including after hours & weekends",
                  "Books appointments directly into your calendar",
                  "Routes urgent calls to your mobile instantly",
                  "Sends you an SMS summary after every call",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-foreground"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ How It Works ═══ */}
      <section className="gradient-hero relative overflow-hidden noise-overlay">
        <div className="hero-orb hero-orb-1" style={{ opacity: 0.15 }} />
        <div className="hero-orb hero-orb-2" style={{ opacity: 0.1 }} />
        {/* Top wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 rotate-180">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,60 Q600,-20 1200,60 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
        <div className="container-tight section-padding relative z-10">
          <ScrollReveal className="text-center mb-16">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-semibold mb-4 backdrop-blur-md border border-white/10">
              <Zap className="w-3.5 h-3.5" />
              Simple Process
            </motion.span>
            <motion.h2 variants={fadeUp} className="heading-section text-white mb-4">How It <span className="text-gradient">Works</span></motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-white/60 max-w-2xl mx-auto">
              From first chat to live AI — we handle everything so you don't have to.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {[
              { step: "01", title: "Free Discovery Call", desc: "We learn about your business, how you handle calls and enquiries, and where AI can save you time and money." },
              { step: "02", title: "Custom Strategy", desc: "We map out exactly how your AI chatbot or voice receptionist will work — scripts, integrations, and workflows tailored to you." },
              { step: "03", title: "Build & Train", desc: "We build your AI solution, train it on your services, pricing, and FAQs, and test it thoroughly before launch." },
              { step: "04", title: "Launch & Optimise", desc: "Your AI goes live. We monitor performance, fine-tune responses, and send you monthly reports so it keeps getting better." },
            ].map((item, i) => (
              <motion.div key={item.step} variants={fadeUp} className="relative group">
                {i < 3 && (
                  <div className="hidden lg:block timeline-line" />
                )}
                <div className="relative z-10 text-center">
                  <motion.div
                    className="w-16 h-16 rounded-2xl card-glass flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300"
                    whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.4 } }}
                  >
                    <span className="text-white text-lg font-bold font-display">{item.step}</span>
                  </motion.div>
                  <h3 className="heading-card text-white mb-3">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* ═══ Who It's For ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="text-center mb-14">
            <motion.h2
              variants={fadeUp}
              className="heading-section text-foreground mb-4"
            >
              Built for Businesses Like Yours
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-body-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Our AI solutions are designed for busy people who can't afford to
              miss calls or lose leads — whether you're on a job site, with a
              patient, or running a growing business.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Wrench,
                title: "Tradies",
                description:
                  "Plumbers, electricians, builders — answer calls and book jobs while you're on-site. No more calling customers back at 7pm.",
                link: "/web-design-tradies",
              },
              {
                icon: Stethoscope,
                title: "Healthcare",
                description:
                  "Dentists, physios, GPs — reduce front-desk pressure with AI that books appointments and answers patient questions.",
                link: "/web-design-healthcare",
              },
              {
                icon: HeadphonesIcon,
                title: "Receptionists",
                description:
                  "Overwhelmed front desk? AI handles overflow calls and after-hours enquiries so your team can focus on in-person patients and clients.",
              },
              {
                icon: Building2,
                title: "Small Business",
                description:
                  "Cafes, salons, gyms, retail — get a 24/7 receptionist without the cost of hiring one. Capture every lead automatically.",
                link: "/web-design-wollongong",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="bg-card rounded-2xl border border-border shadow-card p-8 card-hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="heading-card text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {item.description}
                </p>
                {item.link && (
                  <Link
                    href={item.link}
                    className="text-accent text-sm font-semibold hover:text-accent/80 transition-colors inline-flex items-center gap-1"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Pricing Section ═══ */}
      <section
        className="section-padding"
        style={{ background: "var(--surface-gradient)" }}
        id="pricing"
      >
        <div className="container-tight">
          <ScrollReveal className="text-center mb-14">
            <motion.h2
              variants={fadeUp}
              className="heading-section text-foreground mb-4"
            >
              Simple, Transparent Pricing
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-body-lg text-muted-foreground max-w-2xl mx-auto"
            >
              No hidden fees, no lock-in contracts. Every solution is customised
              to your business — here's where pricing starts.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Bot,
                title: "AI Chatbot",
                price: "$497",
                period: "/month",
                setup: "$997 one-time setup",
                description:
                  "A smart website assistant trained on your business that handles enquiries, captures leads, and books appointments 24/7.",
                features: [
                  "Custom-trained on your business",
                  "Unlimited conversations",
                  "Lead capture & email/SMS notifications",
                  "Calendar & booking integration",
                  "Monthly performance reporting",
                  "Ongoing training & optimisation",
                ],
              },
              {
                icon: Phone,
                title: "AI Voice Receptionist",
                price: "$697",
                period: "/month",
                setup: "$1,497 one-time setup",
                description:
                  "An AI phone agent with a natural voice that answers calls, books jobs, routes urgent calls, and sends you summaries.",
                features: [
                  "Natural Australian-sounding voice",
                  "24/7 call answering",
                  "Appointment booking & calendar sync",
                  "Urgent call routing to your mobile",
                  "SMS call summaries after every call",
                  "Monthly call analytics & reporting",
                ],
              },
            ].map((plan) => (
              <PricingTiltCard
                key={plan.title}
                className="bg-card rounded-2xl border border-border shadow-card p-8 card-hover-lift flex flex-col"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl gradient-cta flex items-center justify-center shrink-0">
                    <plan.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="heading-card text-foreground">
                      {plan.title}
                    </h3>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold font-display price-shimmer">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-1">
                    + {plan.setup}
                  </p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8 flex-1 stagger-list">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-foreground text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="cta" size="lg" className="w-full" asChild>
                  <Link href="/contact">
                    Get Started <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </PricingTiltCard>
            ))}
          </ScrollReveal>

          <ScrollReveal className="text-center mt-8">
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground text-sm"
            >
              Need both? Ask us about bundled pricing. All plans include a
              14-day money-back guarantee.
            </motion.p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Why Choose Us ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="text-center mb-14">
            <motion.h2
              variants={fadeUp}
              className="heading-section text-foreground mb-4"
            >
              Why Choose Digital Edge for AI
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-body-lg text-muted-foreground max-w-2xl mx-auto"
            >
              We're not a faceless AI company overseas. We're a Sydney &amp;
              Wollongong digital agency that understands local business.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Built for Local Business",
                description:
                  "We understand tradies, healthcare, and small business in Sydney & Wollongong. Your AI is configured for how your customers actually talk and what they actually ask.",
              },
              {
                icon: Shield,
                title: "Australian Data & Privacy",
                description:
                  "Your data stays secure. We follow Australian privacy standards and ensure your customer information is handled responsibly and stored securely.",
              },
              {
                icon: Zap,
                title: "Set Up & Managed for You",
                description:
                  "We handle everything — setup, training, integration, and ongoing optimisation. You don't need to be tech-savvy. Just tell us about your business and we do the rest.",
              },
              {
                icon: Clock,
                title: "Live in 1–3 Weeks",
                description:
                  "No months-long projects. Most AI chatbots are live in 1–2 weeks, voice receptionists in 2–3 weeks. Fast setup, fast results.",
              },
              {
                icon: HeadphonesIcon,
                title: "Ongoing Support",
                description:
                  "We don't just set it and forget it. Monthly reporting, continuous training, and real human support whenever you need it.",
              },
              {
                icon: DollarSign,
                title: "Fraction of the Cost",
                description:
                  "A full-time receptionist costs $50K+ per year. Our AI voice receptionist starts from $697/month — and never takes a sick day.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="bg-card rounded-2xl border border-border shadow-card p-8 card-hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="heading-card text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
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
          <svg
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
            className="w-full h-[40px] md:h-[60px]"
          >
            <path
              d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z"
              className="fill-background"
            />
          </svg>
        </div>
        <div className="container-tight px-4 py-20 text-center relative z-10">
          <ScrollReveal>
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-primary-foreground/90 text-sm font-semibold mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Stop Missing Leads
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="heading-section text-primary-foreground mb-4"
            >
              Ready to Let AI Handle the Busy Work?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8"
            >
              Every missed call and unanswered website enquiry is money left on
              the table. Let's set up an AI assistant that works for your
              business 24/7 — so you don't have to.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Button variant="hero" size="lg" asChild>
                <Link href="/contact">
                  Get a Free Consultation{" "}
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link href="/pricing">See All Pricing</Link>
              </Button>
            </motion.div>
          </ScrollReveal>
        </div>
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
            className="w-full h-[40px] md:h-[60px]"
          >
            <path
              d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z"
              className="fill-background"
            />
          </svg>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <FAQ
        faqs={aiFAQs}
        title="AI Solutions — Frequently Asked Questions"
      />

      {/* ═══ Internal Links ═══ */}
      <section className="section-padding bg-background border-t border-border">
        <div className="container-tight">
          <ScrollReveal className="text-center">
            <motion.h2
              variants={fadeUp}
              className="heading-section text-foreground mb-8"
            >
              Explore More
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap justify-center gap-4"
            >
              {[
                { label: "All Services", path: "/services" },
                { label: "Pricing", path: "/pricing" },
                { label: "AEO & GEO Optimisation", path: "/services/aeo-geo" },
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

export default AiServices;
