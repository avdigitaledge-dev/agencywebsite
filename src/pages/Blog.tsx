import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Tag, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SEOMeta } from "@/components/SEOMeta";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);



  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Blog" }
  ];

  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  const filteredPosts = selectedCategory
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts;

  return (
    <Layout>
      <SEOMeta
        title="Blog | Web Design & Digital Marketing Tips for Tradies"
        description="Read expert tips on web design, digital marketing, SEO, and lead generation strategies for tradies and small businesses in Wollongong & Sydney."
        keywords="blog, web design tips, digital marketing, seo, tradie marketing, small business"
        ogTitle="Digital Edge Studio Blog"
        ogDescription="Expert advice on web design, digital marketing, and SEO for tradies and small businesses"
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero */}
      <section className="gradient-hero">
        <div className="container-tight px-4 py-16 md:py-24">
          <motion.div className="max-w-3xl" {...fadeUp}>
            <h1 className="heading-display text-primary-foreground mb-4">
              Web Design & Marketing Blog
            </h1>
            <p className="text-body-lg text-primary-foreground/75 max-w-2xl">
              Tips, strategies, and insights for tradies and small businesses wanting to succeed online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === null
                  ? "bg-accent text-white"
                  : "bg-card border border-border text-foreground hover:border-accent"
              }`}
            >
              All Posts
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-accent text-white"
                    : "bg-card border border-border text-foreground hover:border-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link to={`/blog/${post.slug}`} className="group">
                  <div className="bg-card rounded-2xl border border-border shadow-card overflow-hidden hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                    {/* Image */}
                    <div className="h-48 bg-muted overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      {/* Category & Meta */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold">
                          <Tag className="w-3 h-3" />
                          {post.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="heading-card text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
                        {post.excerpt.replace(/\*\*(.*?)\*\*/g, '$1').replace(/\*\*/g, '').replace(/###/g, '').replace(/`/g, '').replace(/~/g, '')}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{post.readTime} min read</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No posts found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="gradient-hero">
        <div className="container-tight px-4 py-16 md:py-24 text-center">
          <motion.div className="max-w-2xl mx-auto" {...fadeUp}>
            <h2 className="heading-section text-primary-foreground mb-4">Get Digital Marketing Tips</h2>
            <p className="text-body-lg text-primary-foreground/75 mb-8">
              Subscribe to get new articles, strategies, and tips delivered to your inbox.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Blog Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Web Design & Digital Marketing Blog",
          "description": "Blog posts about web design, digital marketing, and SEO for tradies and small businesses",
          "url": "https://digitaledgestudio.com/blog",
          "mainEntity": filteredPosts.map(post => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "image": post.image,
            "datePublished": post.date,
            "author": {
              "@type": "Organization",
              "name": post.author
            }
          }))
        })}
      </script>
    </Layout>
  );
};

export default Blog;
