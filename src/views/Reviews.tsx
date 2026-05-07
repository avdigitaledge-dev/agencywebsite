"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { stagger, fadeUp } from "@/lib/animations";
import { ArrowRight, Star, MapPin, Quote, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import { portfolioProjects } from "@/data/portfolioProjects";
import { RATINGS } from "@/data/siteConfig";

const reviews = [
  {
    name: "Mark T.",
    business: "Volt Current Electrical",
    location: "Wollongong",
    rating: 5,
    text: "Aleks and the team built us a website that actually brings in leads. We went from getting zero enquiries online to 15+ a month. Best investment we've made for the business.",
    service: "Website Design",
    date: "2025-02-10",
  },
  {
    name: "Sarah K.",
    business: "Coastal Physiotherapy",
    location: "Wollongong",
    rating: 5,
    text: "The online booking integration was a game-changer. We were losing after-hours bookings for years and didn't even realise it. Now 73% of our bookings come through the website. Couldn't be happier.",
    service: "Website Design",
    date: "2025-06-18",
  },
  {
    name: "Chris M.",
    business: "Precision Plumbing Illawarra",
    location: "Dapto",
    rating: 5,
    text: "Our old Wix site was embarrassing — customers told us they almost didn't call because of it. Digital Edge rebuilt everything and the phone hasn't stopped ringing. We've had to hire another plumber.",
    service: "Website Redesign",
    date: "2025-04-22",
  },
  {
    name: "Jake H.",
    business: "NBG Landscapes",
    location: "Shellharbour",
    rating: 5,
    text: "Went from scrounging for weekend jobs on Gumtree to having a 3-week waitlist. The website and Google profile were the best investment I've made. Even hired my first employee.",
    service: "Website Design",
    date: "2025-08-05",
  },
  {
    name: "Tom W.",
    business: "Elysian Estate Builders",
    location: "Sydney",
    rating: 5,
    text: "The website completely changed how clients perceive us. People come to consultations already sold on our work because they've browsed our project gallery. The quality of enquiries has been incredible.",
    service: "Website Design",
    date: "2024-11-15",
  },
  {
    name: "Maria L.",
    business: "Bright & Clean Services",
    location: "Wollongong",
    rating: 5,
    text: "We were throwing money at Google Ads and getting nothing back. Digital Edge rebuilt our site and now we get more leads from organic search than we ever got from ads — at half the cost.",
    service: "SEO",
    date: "2025-03-28",
  },
  {
    name: "Dave R.",
    business: "Spark-It Electrical",
    location: "Figtree",
    rating: 5,
    text: "I was sceptical about needing a website — survived without one for years. Within weeks of launching, my phone started ringing with jobs I never would have got before. Absolute no-brainer.",
    service: "Website Design",
    date: "2024-09-12",
  },
  {
    name: "Lisa P.",
    business: "South Coast Cleaning Co.",
    location: "Nowra",
    rating: 5,
    text: "Aleks took the time to understand our business and the areas we service. The SEO work has us ranking for cleaning services across the entire South Coast. Enquiries have tripled.",
    service: "SEO",
    date: "2025-10-03",
  },
  {
    name: "James T.",
    business: "JT Plumbing Solutions",
    location: "Unanderra",
    rating: 5,
    text: "60% increase in phone calls within the first two months. The click-to-call feature and Google Maps ranking have been massive for us. Highly recommend Digital Edge.",
    service: "SEO",
    date: "2025-01-20",
  },
  {
    name: "Rachel B.",
    business: "Shire Beauty Lounge",
    location: "Sutherland Shire",
    rating: 5,
    text: "Our new website looks stunning and the online booking system works perfectly. We've seen a 40% increase in new client bookings since launching. Worth every cent.",
    service: "Website Design",
    date: "2026-01-14",
  },
  {
    name: "Steve G.",
    business: "Illawarra Roofing Pros",
    location: "Dapto",
    rating: 5,
    text: "Digital Edge set up our Google Ads and landing page properly. Our cost per lead dropped from over $100 to about $30. The difference a good agency makes is night and day.",
    service: "Google Ads",
    date: "2025-07-30",
  },
  {
    name: "Karen W.",
    business: "Wollongong Family Dental",
    location: "Wollongong",
    rating: 5,
    text: "We needed a website that built trust with families looking for a new dentist. Digital Edge delivered exactly that. New patient enquiries are up 80% and the site looks incredibly professional.",
    service: "Website Design",
    date: "2025-12-08",
  },
  {
    name: "Anthony D.",
    business: "AD Tiling & Waterproofing",
    location: "Shellharbour",
    rating: 5,
    text: "Best decision I made for my business this year. The website pays for itself every single month with the leads it generates. Aleks made the whole process easy and stress-free.",
    service: "Digital Marketing",
    date: "2025-05-19",
  },
  {
    name: "Priya N.",
    business: "Coastal Accounts",
    location: "Thirroul",
    rating: 5,
    text: "As accountants, we needed a site that looked credible and professional. Digital Edge nailed it. We're now ranking for 'accountant Wollongong' and getting consistent enquiries from Google.",
    service: "SEO",
    date: "2026-02-22",
  },
  {
    name: "Ben C.",
    business: "BC Outdoor Living",
    location: "Kiama",
    rating: 5,
    text: "We launched an eCommerce store for our outdoor furniture range and it's been incredible. Orders started coming in within the first week. The team really knows what they're doing.",
    service: "eCommerce",
    date: "2025-09-14",
  },
];

const REVIEW_COUNT = reviews.length;

const faq = [
  {
    question: "Are these real client reviews?",
    answer:
      "Yes, all reviews are from real businesses we've worked with across Wollongong, Illawarra, and NSW. Each review reflects genuine feedback from our clients about the services we provided.",
  },
  {
    question: "How can I leave a review for Digital Edge Studio?",
    answer:
      "We'd love to hear from you! You can leave a review on our Google Business Profile or contact us directly. We value all feedback and use it to continuously improve our services.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work with tradies, restaurants, healthcare, accountants, real estate agents, lawyers, NDIS providers, and many more. See our full list of industries on our Industries page.",
  },
  {
    question: "Do you guarantee results?",
    answer:
      "While we can't guarantee specific rankings, our track record speaks for itself. Every project is backed by data-driven strategy and transparent reporting. Our case studies show the real results we've delivered for businesses across NSW.",
  },
];

const featuredCaseStudies = portfolioProjects.slice(0, 6);

const ratingSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://digitaledgestudio.com/#business",
  "review": reviews.map((r) => ({
    "@type": "Review",
    "author": { "@type": "Person", "name": r.name },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": String(r.rating),
      "bestRating": "5"
    },
    "reviewBody": r.text,
    "datePublished": r.date
  }))
};

const Reviews = () => {
  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }} />
      <Breadcrumb
        items={[
          { label: "Home", path: "/" },
          { label: "Reviews" },
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
              <Star className="w-4 h-4 fill-accent-warm text-accent-warm" />
              Client Reviews
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="heading-display text-primary-foreground mb-4"
            >
              What Our Clients Say About{" "}
              <span className="text-gradient">Digital Edge Studio</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-body-lg text-primary-foreground/75 max-w-2xl"
            >
              Real reviews from real businesses across Wollongong, Illawarra,
              and NSW. See why local businesses trust us with their websites and
              digital marketing.
            </motion.p>
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

      {/* ═══ Aggregate Rating Summary ═══ */}
      <section className="bg-background">
        <div className="container-tight px-4 py-10">
          <div className="bg-card rounded-2xl border border-border shadow-card p-8 md:p-10 text-center">
            <div className="flex justify-center gap-1.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-8 h-8 fill-accent-warm text-accent-warm"
                />
              ))}
            </div>
            <p className="text-2xl md:text-3xl font-bold text-foreground font-display mb-2">
              5.0 out of 5
            </p>
            <p className="text-muted-foreground">
              Based on{" "}
              <span className="font-semibold text-foreground">
                {REVIEW_COUNT} reviews
              </span>{" "}
              from verified clients
            </p>
          </div>
        </div>
      </section>

      {/* ═══ Review Cards Grid ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="text-center mb-14">
            <motion.h2
              variants={fadeUp}
              className="heading-section text-foreground mb-4"
            >
              Client Reviews
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-body-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Here&apos;s what businesses across NSW have to say about working
              with us.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <motion.div
                key={review.name}
                variants={fadeUp}
                className="bg-card rounded-xl p-6 border border-border shadow-card card-hover-lift flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-accent-warm text-accent-warm"
                    />
                  ))}
                </div>

                {/* Review text */}
                <div className="relative flex-1 mb-4">
                  <Quote className="w-8 h-8 text-accent/[0.08] absolute -top-1 -left-1" />
                  <p className="text-sm text-muted-foreground leading-relaxed pl-2">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>

                {/* Author info */}
                <div className="border-t border-border pt-4 mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full gradient-cta flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold font-display text-sm">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground text-sm">
                        {review.name}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {review.business}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {review.location}
                    </span>
                    <span className="bg-accent/10 text-accent px-2 py-0.5 rounded-full font-medium">
                      {review.service}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Featured Case Studies ═══ */}
      <section
        className="section-padding relative"
        style={{ background: "var(--surface-gradient)" }}
      >
        <div className="container-tight">
          <ScrollReveal className="text-center mb-14">
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4"
            >
              <TrendingUp className="w-3.5 h-3.5" />
              Real Results
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="heading-section text-foreground mb-4"
            >
              Featured Case Studies
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-body-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Dive deeper into the results we&apos;ve delivered for local
              businesses.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCaseStudies.map((project) => (
              <motion.div key={project.slug} variants={fadeUp}>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group block"
                >
                  <div className="bg-card rounded-xl border border-border overflow-hidden hover:border-accent transition-colors h-full flex flex-col card-hover-lift">
                    <div className="overflow-hidden">
                      <img
                        src={project.image}
                        alt={`${project.clientName} website project`}
                        width={400}
                        height={160}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                          {project.industry}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          &bull; {project.location}
                        </span>
                      </div>
                      <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors leading-snug mb-2">
                        {project.clientName}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-3 flex-1">
                        {project.services.join(" · ")}
                      </p>
                      {project.results[0] && (
                        <div className="flex items-center gap-2 bg-accent/5 rounded-lg px-3 py-2">
                          <TrendingUp className="w-3.5 h-3.5 text-accent" />
                          <span className="text-sm font-semibold text-accent">
                            {project.results[0].value}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {project.results[0].label}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </ScrollReveal>

          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link href="/portfolio">
                View All Case Studies
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(217_71%_30%/0.4),transparent_70%)]" />
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
            <motion.h2
              variants={fadeUp}
              className="heading-section text-primary-foreground mb-4"
            >
              Ready to Become Our Next Success Story?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-body-lg text-primary-foreground/75 mb-8 max-w-2xl mx-auto"
            >
              Every project starts with a free consultation. Let&apos;s talk
              about how we can grow your business online.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Button variant="hero" size="lg" className="btn-shimmer" asChild>
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </motion.div>
          </ScrollReveal>
        </div>
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
        faqs={faq}
        title="Reviews — Frequently Asked Questions"
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
                { label: "Our Work", path: "/portfolio" },
                { label: "All Services", path: "/services" },
                { label: "Website Design", path: "/services/web-design" },
                { label: "Local SEO", path: "/services/seo" },
                { label: "Pricing", path: "/pricing" },
                { label: "Web Design Wollongong", path: "/web-design-wollongong" },
                { label: "Web Design for Tradies", path: "/web-design-tradies" },
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

export default Reviews;
