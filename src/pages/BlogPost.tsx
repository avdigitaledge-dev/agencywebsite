import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Tag, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SEOMeta } from "@/components/SEOMeta";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
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
        ogImage={post.image}
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
        <div className="container-tight px-4 h-full flex items-end relative z-10">
          <motion.div className="pb-12 max-w-3xl" {...fadeUp}>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                <Tag className="w-4 h-4" />
                {post.category}
              </span>
            </div>
            <h1 className="heading-display text-white mb-4">
              {post.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Meta Info */}
      <section className="section-padding bg-background">
        <div className="container-tight max-w-3xl">
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm border-b border-border pb-8">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} min read</span>
            </div>
            <span>•</span>
            <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>•</span>
            <span>By {post.author}</span>
          </div>

          <p className="text-body-lg text-muted-foreground italic py-8">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-tight max-w-3xl">
          <motion.article
            className="prose prose-lg max-w-none space-y-6 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {post.content.split('\n\n').map((paragraph, index) => {
              if (!paragraph.trim()) return null;
              
              if (index === 0) {
                // First paragraph is treated as a heading
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

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-border">
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
                <div className="p-6 border border-border rounded-xl hover:border-accent transition-colors">
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
                <div className="p-6 border border-border rounded-xl hover:border-accent transition-colors text-right md:text-left">
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
            <h2 className="heading-section text-foreground mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link key={related.slug} to={`/blog/${related.slug}`} className="group">
                  <div className="bg-card rounded-xl border border-border overflow-hidden hover:border-accent transition-colors h-full flex flex-col">
                    {related.image && (
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-40 object-cover"
                        loading="lazy"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
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
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="gradient-hero">
        <div className="container-tight px-4 py-16 md:py-24 text-center">
          <motion.div className="max-w-2xl mx-auto" {...fadeUp}>
            <h2 className="heading-section text-primary-foreground mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-body-lg text-primary-foreground/75 mb-8">
              Get professional web design and digital marketing from Digital Edge Studio.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
          </motion.div>
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
