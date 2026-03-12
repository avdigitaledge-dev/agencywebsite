import { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { Clock, Tag, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SEOMeta } from "@/components/SEOMeta";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";

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

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);
  const postIndex = blogPosts.findIndex(p => p.slug === slug);
  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;
  const relatedPosts = post
    ? blogPosts.filter(p => p.slug !== slug && p.category === post.category).slice(0, 3)
    : [];

  if (!post) {
    return (
      <Layout>
        <div className="container-tight px-4 py-20 text-center">
          <h1 className="heading-display mb-4">Post not found</h1>
          <Button asChild>
            <Link to="/blog">Back to blog</Link>
          </Button>
        </div>
      </Layout>
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
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": post.author
    },
    "articleBody": post.content
  };

  return (
    <Layout>
      <SEOMeta
        title={`${post.title} | Digital Edge Studio Blog`}
        description={post.metaDescription}
        keywords={post.keywords.join(", ")}
        canonical={`https://digitaledgestudio.com/blog/${post.slug}`}
        ogTitle={post.title}
        ogDescription={post.excerpt}
        ogImage={post.image.startsWith('http') ? post.image : `https://digitaledgestudio.com${post.image}`}
        ogType="article"
        articlePublishedTime={post.date}
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero with Image */}
      <section className="gradient-hero relative overflow-hidden h-96">
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
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
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span>•</span>
              <span>By {post.author}</span>
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
              {post.content.split('\n\n').map((paragraph, index) => {
                if (!paragraph.trim()) return null;

                const isHeading = !paragraph.includes('\n')
                  && paragraph.length < 80
                  && !paragraph.endsWith('.')
                  && !paragraph.startsWith('- ')
                  && !paragraph.match(/^\d+\./)
                  && paragraph.trim().length > 0;

                if (isHeading) {
                  return (
                    <h2 key={index} className="heading-section text-foreground mt-8 mb-4">
                      {paragraph}
                    </h2>
                  );
                } else if (paragraph.startsWith('- ')) {
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
                      {paragraph.split('\n').filter(line => line.startsWith('- ')).map((item, i) => (
                        <li key={i}>{item.replace(/^-\s*/, '')}</li>
                      ))}
                    </ul>
                  );
                } else if (paragraph.startsWith('1. ') || paragraph.match(/^\d+\./)) {
                  return (
                    <ol key={index} className="list-decimal list-inside space-y-2 text-muted-foreground leading-relaxed">
                      {paragraph.split('\n').filter(line => line.match(/^\d+\./)).map((item, i) => (
                        <li key={i}>{item.replace(/^\d+\.\s*/, '')}</li>
                      ))}
                    </ol>
                  );
                } else {
                  return (
                    <p key={index} className="text-muted-foreground leading-relaxed">{paragraph}</p>
                  );
                }
              })}
            </motion.article>
          </ScrollReveal>

          {/* Internal Links */}
          <div className="mt-12 pt-8 border-t border-border bg-accent/5 rounded-xl p-6">
            <h3 className="font-semibold text-foreground font-display mb-3">Related Services</h3>
            <div className="flex flex-wrap gap-3">
              <Link to="/web-design-wollongong" className="text-sm text-accent hover:underline">Web Design Wollongong</Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/web-design-tradies" className="text-sm text-accent hover:underline">Web Design for Tradies</Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/services" className="text-sm text-accent hover:underline">Our Services</Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/free-website-review" className="text-sm text-accent hover:underline">Free Website Review</Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/pricing" className="text-sm text-accent hover:underline">Pricing</Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/contact" className="text-sm text-accent hover:underline">Get a Free Quote</Link>
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

          {/* Navigation */}
          <div className="mt-16 pt-12 border-t border-border grid md:grid-cols-2 gap-6">
            {prevPost ? (
              <Link to={`/blog/${prevPost.slug}`} className="group">
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
              <Link to={`/blog/${nextPost.slug}`} className="group">
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
                  <Link key={related.slug} to={`/blog/${related.slug}`} className="group">
                    <div className="bg-card rounded-xl border border-border overflow-hidden hover:border-accent transition-colors h-full flex flex-col card-hover-lift">
                      {related.image && (
                        <div className="overflow-hidden">
                          <img
                            src={related.image}
                            alt={related.title}
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
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(postSchema)}
      </script>
    </Layout>
  );
};

export default BlogPost;
