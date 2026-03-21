"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Clock, Tag, ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
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

const categoryMeta: Record<string, { title: string; description: string; keywords: string }> = {
  "web-design": {
    title: "Web Design Articles | Digital Edge Studio Blog",
    description: "Expert web design tips, trends, and guides for tradies and small businesses in Wollongong, Sydney, and NSW. Learn how to build websites that convert visitors into customers.",
    keywords: "web design tips, website design wollongong, small business website, tradie website design",
  },
  "seo": {
    title: "SEO Articles | Digital Edge Studio Blog",
    description: "Local SEO strategies, Google ranking tips, and search engine optimisation guides for tradies and small businesses in Wollongong and Sydney.",
    keywords: "local seo tips, seo wollongong, google ranking tips, small business seo, tradie seo",
  },
  "digital-marketing": {
    title: "Digital Marketing Articles | Digital Edge Studio Blog",
    description: "Digital marketing strategies, online advertising tips, and growth guides for tradies and small businesses in Wollongong, Sydney, and NSW.",
    keywords: "digital marketing tips, online marketing wollongong, small business marketing, tradie marketing",
  },
};

// Map URL slugs to actual category names used in data
const slugToCategory: Record<string, string> = {
  "web-design": "Web Design",
  "seo": "SEO",
  "digital-marketing": "Digital Marketing",
};

const BlogCategory = ({ category: categorySlug }: { category: string }) => {
  const categoryName = categorySlug ? slugToCategory[categorySlug] : undefined;
  const meta = categorySlug ? categoryMeta[categorySlug] : undefined;

  const filteredPosts = categoryName
    ? blogPosts.filter(p => p.category === categoryName)
    : [];

  const allCategories = Object.entries(slugToCategory);

  if (!categoryName || !meta) {
    return (
      <div className="container-tight px-4 py-20 text-center">
        <h1 className="heading-display mb-4">Category not found</h1>
        <Button asChild>
          <Link href="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      <Breadcrumb items={[
        { label: "Home", path: "/" },
        { label: "Blog", path: "/blog" },
        { label: categoryName },
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
              <span className="text-gradient">{categoryName}</span> Articles
            </motion.h1>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} on {categoryName.toLowerCase()} for tradies and small businesses.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding bg-background relative">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="container-tight relative z-10">
          <ScrollReveal className="flex flex-wrap gap-3 justify-center mb-12">
            <motion.div variants={fadeUp}>
              <Link
                href="/blog"
                className="px-6 py-2 rounded-full font-medium transition-colors bg-card border border-border text-foreground hover:border-accent inline-block"
              >
                All Posts
              </Link>
            </motion.div>
            {allCategories.map(([slug, name]) => (
              <motion.div key={slug} variants={fadeUp}>
                <Link
                  href={`/blog/category/${slug}`}
                  className={`px-6 py-2 rounded-full font-medium transition-colors inline-block ${
                    slug === categorySlug
                      ? "bg-accent text-white"
                      : "bg-card border border-border text-foreground hover:border-accent"
                  }`}
                >
                  {name}
                </Link>
              </motion.div>
            ))}
          </ScrollReveal>

          {/* Posts Grid */}
          <ScrollReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <motion.div key={post.id} variants={fadeUp}>
                <Link href={`/blog/${post.slug}`} className="group">
                  <div className="bg-card rounded-2xl border border-border shadow-card overflow-hidden hover:shadow-card-hover transition-all duration-300 h-full flex flex-col card-hover-lift relative">
                    <div className={`h-1 w-full ${
                      post.category === "SEO" ? "bg-accent" :
                      post.category === "Web Design" ? "bg-emerald-500" :
                      post.category === "Digital Marketing" ? "bg-purple-500" :
                      "bg-accent"
                    }`} />
                    <div className="h-48 bg-muted overflow-hidden relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        width={600}
                        height={192}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium flex items-center gap-1.5">
                        <Clock className="w-3 h-3" />
                        {post.readTime} min
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                          post.category === "SEO" ? "bg-accent/10 text-accent" :
                          post.category === "Web Design" ? "bg-emerald-500/10 text-emerald-600" :
                          post.category === "Digital Marketing" ? "bg-purple-500/10 text-purple-600" :
                          "bg-accent/10 text-accent"
                        }`}>
                          <Tag className="w-3 h-3" />
                          {post.category}
                        </span>
                      </div>
                      <h3 className="heading-card text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                        <ArrowRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 rotate-180">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,60 Q600,-20 1200,60 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
        <div className="container-tight px-4 py-20 text-center relative z-10">
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

export default BlogCategory;
