import { useState } from "react";
import { motion } from "framer-motion";
import { Search, CheckCircle2, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SEOMeta } from "@/components/SEOMeta";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const FORMSPREE_ID = "xzdjplaq";

const WebsiteReview = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: new FormData(e.target as HTMLFormElement),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        toast({
          title: "Review request received!",
          description: "We'll send your free website review within 1 business day.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Submit failed");
      }
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please email us at enquiries@digitaledgestudio.com",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <SEOMeta
        title="Free Website Review | Web Design Wollongong | Digital Edge Studio"
        description="Get a free website review from Digital Edge Studio. We'll check your SEO, mobile performance, and conversion rate — and tell you exactly what's holding you back."
        canonical="https://digitaledgestudio.com/free-website-review"
        keywords="free website review wollongong, website audit wollongong, seo audit wollongong, free website check"
      />

      {/* Hero */}
      <section className="gradient-hero">
        <div className="container-tight px-4 py-16 md:py-24">
          <motion.div className="max-w-3xl" {...fadeUp}>
            <h1 className="heading-display text-primary-foreground mb-4">
              Get Your Free Website Review
            </h1>
            <p className="text-body-lg text-primary-foreground/75 max-w-2xl">
              We'll personally review your website and tell you exactly why you're not ranking on Google — and what it would take to fix it. No jargon. No sales pitch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What's included */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Form */}
            <motion.div {...fadeUp}>
              <div className="bg-card rounded-2xl border border-border shadow-card p-8">
                <h2 className="heading-card text-foreground mb-2">Request Your Free Review</h2>
                <p className="text-muted-foreground text-sm mb-6">We'll get back to you within 1 business day.</p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input type="hidden" name="_subject" value="Free Website Review Request" />
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input id="name" name="name" required placeholder="John Smith" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" required placeholder="john@example.com.au" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Your Website URL *</Label>
                    <Input id="website" name="website" type="url" required placeholder="https://yourbusiness.com.au" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="challenge">What's your biggest challenge? *</Label>
                    <select
                      id="challenge"
                      name="challenge"
                      required
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select one...</option>
                      <option value="not-ranking-google">Not showing up on Google</option>
                      <option value="low-enquiries">Getting visitors but no enquiries</option>
                      <option value="outdated-site">Website looks outdated</option>
                      <option value="mobile-issues">Site doesn't work well on mobile</option>
                      <option value="slow-site">Site loads too slowly</option>
                      <option value="not-sure">Not sure — just want feedback</option>
                    </select>
                  </div>
                  <Button type="submit" variant="cta" size="lg" className="w-full" disabled={loading}>
                    {loading ? "Sending..." : <>Send My Website for Review <Send className="w-4 h-4 ml-2" /></>}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Free, no obligation. We respond within 1 business day.
                  </p>
                </form>
              </div>
            </motion.div>

            {/* What you get */}
            <motion.div {...fadeUp} className="space-y-8">
              <div>
                <h2 className="heading-section text-foreground mb-4">What We'll Check</h2>
                <p className="text-muted-foreground mb-8">
                  Our review covers the 4 areas that directly affect how many leads your website generates.
                </p>
              </div>
              {[
                {
                  icon: Search,
                  title: "Google Rankings & Local SEO",
                  desc: "Are you showing up when customers search for your trade in your suburb? We'll check your rankings, Google Business Profile setup, and local citation consistency.",
                },
                {
                  icon: CheckCircle2,
                  title: "Mobile & Speed Performance",
                  desc: "Over 70% of tradie searches happen on mobile. We'll check load speed, mobile layout, and Core Web Vitals — the factors Google uses to rank sites.",
                },
                {
                  icon: ArrowRight,
                  title: "Conversion & Lead Generation",
                  desc: "Are visitors turning into calls and enquiries? We'll review your CTAs, contact form, trust signals, and any friction stopping people from reaching out.",
                },
                {
                  icon: CheckCircle2,
                  title: "Quick Wins You Can Act On",
                  desc: "Every review ends with 3–5 specific, prioritised actions you can take immediately — whether you work with us or not.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-cta flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground font-display mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WebsiteReview;
