"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Clock, Tag, ArrowRight, Mail } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { trackEvent } from "@/lib/utils";
import { ScrollReveal } from "@/components/ScrollReveal";
import { stagger, fadeUp } from "@/lib/animations";

const FORMSPREE_ID = "xzdjplaq";

const Blog = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [emailLoading, setEmailLoading] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailLoading(true);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: new FormData(e.target as HTMLFormElement),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        trackEvent("generate_lead", { form_name: "checklist_download" });
        router.push("/checklist-thank-you");
      } else throw new Error();
    } catch {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
    } finally {
      setEmailLoading(false);
    }
  };

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Blog" }
  ];

  const categoryToSlug: Record<string, string> = {
    "Web Design": "web-design",
    "SEO": "seo",
    "Digital Marketing": "digital-marketing",
  };
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Web Design & SEO Blog",
    "description": "Tips, strategies, and insights for tradies and small businesses wanting to succeed online.",
    "url": "https://digitaledgestudio.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Digital Edge Studio"
    },
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": blogPosts.length,
      "itemListElement": blogPosts.map((post, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "url": `https://digitaledgestudio.com/blog/${post.slug}`,
        "name": post.title
      }))
    }
  };

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <Breadcrumb items={breadcrumbItems} />

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
              Web Design & Marketing <span className="text-gradient">Blog</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl">
              Tips, strategies, and insights for tradies and small businesses wanting to succeed online.
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

      {/* Category Filter */}
      <section className="section-padding bg-background relative">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="container-tight relative z-10">
          <ScrollReveal className="flex flex-wrap gap-3 justify-center mb-12">
            <motion.div variants={fadeUp}>
              <Link
                href="/blog"
                className="inline-block px-6 py-2 rounded-full font-medium transition-colors bg-accent text-white"
              >
                All Posts
              </Link>
            </motion.div>
            {categories.map(category => (
              <motion.div key={category} variants={fadeUp}>
                <Link
                  href={`/blog/category/${categoryToSlug[category] || category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-block px-6 py-2 rounded-full font-medium transition-colors bg-card border border-border text-foreground hover:border-accent"
                >
                  {category}
                </Link>
              </motion.div>
            ))}
          </ScrollReveal>

          {/* Blog Posts Grid */}
          <ScrollReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <motion.div key={post.id} variants={fadeUp}>
                <Link href={`/blog/${post.slug}`} className="group">
                  <div className="bg-card rounded-2xl border border-border shadow-card overflow-hidden hover:shadow-card-hover transition-all duration-300 h-full flex flex-col card-hover-lift relative">
                    {/* Category color top bar */}
                    <div className={`h-1 w-full ${
                      post.category === "SEO" ? "bg-accent" :
                      post.category === "Web Design" ? "bg-emerald-500" :
                      post.category === "Marketing" ? "bg-purple-500" :
                      post.category === "E-Commerce" ? "bg-accent-warm" :
                      "bg-accent"
                    }`} />
                    {/* Image */}
                    <div className="h-48 bg-muted overflow-hidden relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        width={600}
                        height={192}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {/* Read time badge on image */}
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium flex items-center gap-1.5">
                        <Clock className="w-3 h-3" />
                        {post.readTime} min
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                          post.category === "SEO" ? "bg-accent/10 text-accent" :
                          post.category === "Web Design" ? "bg-emerald-500/10 text-emerald-600" :
                          post.category === "Marketing" ? "bg-purple-500/10 text-purple-600" :
                          post.category === "E-Commerce" ? "bg-accent-warm/10 text-accent-warm" :
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

          {blogPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No posts found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Email Capture */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        {/* Top wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 rotate-180">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
        <div className="container-tight px-4 py-16 md:py-20 text-center relative z-10">
          <ScrollReveal>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 text-white text-sm font-medium mb-4">
              <Mail className="w-3.5 h-3.5" />
              Free Download
            </motion.div>
            <motion.h2 variants={fadeUp} className="heading-section text-primary-foreground mb-3">
              The 5-Point Website Checklist for Wollongong Tradies
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 mb-8 max-w-2xl mx-auto">
              Find out if your website is missing the 5 things every tradie site needs to rank on Google and turn visitors into calls. We'll email it straight to you.
            </motion.p>
            <motion.form variants={fadeUp} onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="hidden" name="_subject" value="Website Checklist Download Request" />
              <input type="hidden" name="type" value="lead-magnet" />
              <Input
                name="email"
                type="email"
                required
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/15"
              />
              <Button type="submit" variant="hero" disabled={emailLoading} className="shrink-0">
                {emailLoading ? "Sending..." : "Send Me the Checklist"}
              </Button>
            </motion.form>
            <motion.p variants={fadeUp} className="text-primary-foreground/40 text-xs mt-3">No spam. Unsubscribe anytime.</motion.p>
          </ScrollReveal>
        </div>
      </section>

    </>
  );
};

export default Blog;
