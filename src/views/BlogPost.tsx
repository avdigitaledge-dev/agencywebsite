"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Tag, ChevronLeft, ChevronRight, ArrowRight, Calendar, Linkedin, User } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import { ScrollReveal } from "@/components/ScrollReveal";
import { stagger, fadeUp } from "@/lib/animations";

const BlogPost = ({ slug }: { slug: string }) => {
  const post = blogPosts.find(p => p.slug === slug);
  const postIndex = blogPosts.findIndex(p => p.slug === slug);
  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;
  const relatedPosts = post
    ? (post.relatedSlugs
        ? post.relatedSlugs.map(s => blogPosts.find(p => p.slug === s)).filter(Boolean) as typeof blogPosts
        : blogPosts.filter(p => p.slug !== slug && p.category === post.category).slice(0, 3))
    : [];

  if (!post) {
    return (
      <div className="container-tight px-4 py-20 text-center">
        <h1 className="heading-display mb-4">Post not found</h1>
        <Button asChild>
          <Link href="/blog">Back to blog</Link>
        </Button>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Blog", path: "/blog" },
    { label: post.title }
  ];

  const postSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://digitaledgestudio.com/blog/${post.slug}`
    },
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "datePublished": post.date,
    ...(post.lastUpdated && { "dateModified": post.lastUpdated }),
    "author": {
      "@type": "Person",
      "name": "Aleksandar Savevski",
      "jobTitle": "Founder & Web Designer",
      "url": "https://www.linkedin.com/in/aleksandar-savevski-b9b907142",
      "worksFor": {
        "@type": "Organization",
        "name": "Digital Edge Studio"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Digital Edge Studio",
      "url": "https://digitaledgestudio.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://digitaledgestudio.com/assets/digitaledge-logo-main.svg"
      }
    },
    "articleBody": post.content
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://digitaledgestudio.com/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://digitaledgestudio.com/blog" },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://digitaledgestudio.com/blog/${post.slug}` }
    ]
  };

  const faqSchema = post.faqs && post.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(postSchema) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero with Image */}
      <section className="gradient-hero relative overflow-hidden h-96">
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={384}
            className="absolute inset-0 w-full h-full object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(217_71%_30%/0.3),transparent_70%)]" />
        <div className="container-tight px-4 h-full flex items-end relative z-10">
          <motion.div
            className="pb-12 max-w-3xl"
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                <Tag className="w-4 h-4" />
                {post.category}
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="heading-display text-white mb-4">
              {post.title}
            </motion.h1>
          </motion.div>
        </div>
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* Meta Info */}
      <section className="section-padding bg-background">
        <div className="container-tight max-w-3xl">
          <ScrollReveal>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm border-b border-border pb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} min read</span>
              </div>
              <span>•</span>
              <span>Published {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              {post.lastUpdated && post.lastUpdated !== post.date && (
                <>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Updated {new Date(post.lastUpdated).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                </>
              )}
              <span>•</span>
              <span>By Aleksandar Savevski</span>
            </motion.div>

            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground italic py-8">
              {post.excerpt}
            </motion.p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-tight max-w-3xl">
          <ScrollReveal>
            <motion.article
              variants={fadeUp}
              className="prose prose-lg max-w-none space-y-6 text-foreground"
            >
              {(() => {
                let paragraphCount = 0;
                const isNowraPost = post.slug.includes("nowra") || post.slug.includes("shoalhaven");
                const inlineCta = isNowraPost ? {
                  text: "Need a website that gets your Nowra business found on Google? We build fast, SEO-ready sites for Shoalhaven businesses.",
                  ctaText: "See Our Nowra Web Design Packages",
                  href: "/web-design-nowra",
                } : post.category === "SEO" ? {
                  text: "Want to see how your site ranks? Get a free website review and find out where you stand.",
                  ctaText: "Get My Free Review",
                  href: "/free-website-review",
                } : {
                  text: "Need a website that actually gets you leads? We build sites that rank and convert — no lock-in contracts.",
                  ctaText: "Get a Free Quote",
                  href: "/contact",
                };

                return post.content.split('\n\n').flatMap((paragraph, index) => {
                  if (!paragraph.trim()) return [];

                  const isHeading = !paragraph.includes('\n')
                    && paragraph.length < 80
                    && !paragraph.endsWith('.')
                    && !paragraph.startsWith('- ')
                    && !paragraph.match(/^\d+\./)
                    && paragraph.trim().length > 0;

                  const elements: React.ReactNode[] = [];

                  if (isHeading) {
                    elements.push(
                      <h2 key={index} className="heading-section text-foreground mt-8 mb-4">
                        {paragraph}
                      </h2>
                    );
                  } else if (paragraph.startsWith('- ')) {
                    elements.push(
                      <ul key={index} className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
                        {paragraph.split('\n').filter(line => line.startsWith('- ')).map((item, i) => (
                          <li key={i}>{item.replace(/^-\s*/, '')}</li>
                        ))}
                      </ul>
                    );
                  } else if (paragraph.startsWith('1. ') || paragraph.match(/^\d+\./)) {
                    elements.push(
                      <ol key={index} className="list-decimal list-inside space-y-2 text-muted-foreground leading-relaxed">
                        {paragraph.split('\n').filter(line => line.match(/^\d+\./)).map((item, i) => (
                          <li key={i}>{item.replace(/^\d+\.\s*/, '')}</li>
                        ))}
                      </ol>
                    );
                  } else {
                    paragraphCount++;
                    elements.push(
                      <p key={index} className="text-muted-foreground leading-relaxed">{paragraph}</p>
                    );
                  }

                  if (paragraphCount === 3) {
                    paragraphCount = -999; // Only inject once
                    elements.push(
                      <div key="inline-cta" className="bg-accent/5 rounded-xl border border-accent/20 p-6 my-8 text-center">
                        <p className="text-foreground font-medium mb-3">{inlineCta.text}</p>
                        <Button variant="cta" size="sm" asChild>
                          <Link href={inlineCta.href}>
                            {inlineCta.ctaText}
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </Button>
                      </div>
                    );
                  }

                  return elements;
                });
              })()}
            </motion.article>

            {/* Tool CTA */}
            <div className="my-8 p-6 rounded-2xl border border-accent/20 bg-accent/5">
              <p className="font-semibold text-foreground mb-2">Want to check your website's health?</p>
              <p className="text-sm text-muted-foreground mb-3">Use our free tools to get instant insights — no obligation.</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/website-cost-calculator" className="text-accent text-sm font-semibold hover:underline">Website Cost Calculator →</Link>
                <Link href="/free-website-audit" className="text-accent text-sm font-semibold hover:underline">Free Website Audit →</Link>
              </div>
            </div>

            {/* FAQ Section */}
            {post.faqs && post.faqs.length > 0 && (
              <div className="mt-12">
                <h2 className="heading-section text-foreground mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {post.faqs.map((faq, i) => (
                    <div key={i} className="border border-border rounded-xl p-6 bg-card">
                      <h3 className="font-semibold text-foreground font-display text-lg mb-3">{faq.question}</h3>
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </ScrollReveal>

          {/* Internal Links */}
          <div className="mt-12 pt-8 border-t border-border bg-accent/5 rounded-xl p-6">
            <h3 className="font-semibold text-foreground font-display mb-3">Related Services</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/web-design-wollongong" className="text-sm text-accent hover:underline">Web Design Wollongong</Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/web-design-nowra" className="text-sm text-accent hover:underline">Web Design Nowra</Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/web-design-tradies" className="text-sm text-accent hover:underline">Web Design for Tradies</Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/services" className="text-sm text-accent hover:underline">Our Services</Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/portfolio" className="text-sm text-accent hover:underline">Case Studies</Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/free-website-review" className="text-sm text-accent hover:underline">Free Website Review</Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/pricing" className="text-sm text-accent hover:underline">Pricing</Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/contact" className="text-sm text-accent hover:underline">Get a Free Quote</Link>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-8 pt-8 border-t border-border">
            <h4 className="font-semibold text-foreground mb-4">Topics covered:</h4>
            <div className="flex flex-wrap gap-2">
              {post.keywords.map(keyword => (
                <span
                  key={keyword}
                  className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-10 p-6 bg-card rounded-2xl border border-border shadow-card">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <User className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground font-display">Aleksandar Savevski</h4>
                <p className="text-sm text-accent font-medium">Founder & Web Designer at Digital Edge Studio</p>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Aleksandar has been building websites and running digital marketing campaigns for tradies and small businesses across Wollongong, Sydney, and NSW since 2025. He specialises in local SEO, AEO, and conversion-focused web design.
                </p>
                <a
                  href="https://www.linkedin.com/company/digitaledgestudio-agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 transition-colors mt-2"
                >
                  <Linkedin className="w-4 h-4" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-16 pt-12 border-t border-border grid md:grid-cols-2 gap-6">
            {prevPost ? (
              <Link href={`/blog/${prevPost.slug}`} className="group">
                <div className="p-6 border border-border rounded-xl hover:border-accent transition-colors card-hover-lift">
                  <div className="flex items-center gap-2 text-accent font-semibold mb-3">
                    <ChevronLeft className="w-4 h-4" />
                    Previous Post
                  </div>
                  <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                    {prevPost.title}
                  </h4>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextPost ? (
              <Link href={`/blog/${nextPost.slug}`} className="group">
                <div className="p-6 border border-border rounded-xl hover:border-accent transition-colors text-right md:text-left card-hover-lift">
                  <div className="flex items-center justify-end md:justify-start gap-2 text-accent font-semibold mb-3">
                    Next Post
                    <ChevronRight className="w-4 h-4" />
                  </div>
                  <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                    {nextPost.title}
                  </h4>
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
          <div className="container-tight">
            <ScrollReveal>
              <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-8">Related Articles</motion.h2>
              <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((related) => (
                  <Link key={related.slug} href={`/blog/${related.slug}`} className="group">
                    <div className="bg-card rounded-xl border border-border overflow-hidden hover:border-accent transition-colors h-full flex flex-col card-hover-lift">
                      {related.image && (
                        <div className="overflow-hidden">
                          <img
                            src={related.image}
                            alt={related.title}
                            width={400}
                            height={160}
                            className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                          />
                        </div>
                      )}
                      <div className="p-5 flex flex-col flex-1">
                        <span className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">{related.category}</span>
                        <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors leading-snug flex-1">
                          {related.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-3">{related.readTime} min read</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </motion.div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        {/* Top wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 rotate-180">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-[hsl(210_15%_94%)]" />
          </svg>
        </div>
        <div className="container-tight px-4 py-16 md:py-24 text-center relative z-10">
          <ScrollReveal>
            <motion.h2 variants={fadeUp} className="heading-section text-primary-foreground mb-4">
              Ready to Grow Your Business?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 mb-8 max-w-2xl mx-auto">
              Get professional web design and digital marketing from Digital Edge Studio.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button variant="hero" size="lg" asChild>
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

    </>
  );
};

export default BlogPost;
