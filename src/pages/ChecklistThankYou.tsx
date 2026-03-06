import { motion } from "framer-motion";
import { CheckCircle2, Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SEOMeta } from "@/components/SEOMeta";
import Layout from "@/components/Layout";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const ChecklistThankYou = () => {

  return (
    <Layout>
      <SEOMeta
        title="Your Free Checklist | Digital Edge Studio"
        description="Download your free 5-point website checklist for Wollongong tradies."
        canonical="https://digitaledgestudio.com/checklist-thank-you"
      />

      <section className="gradient-hero min-h-[60vh] flex items-center">
        <div className="container-tight px-4 py-16 md:py-24 text-center w-full">
          <motion.div className="max-w-2xl mx-auto" {...fadeUp}>
            <div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            <h1 className="heading-display text-primary-foreground mb-4">
              You're all set!
            </h1>
            <p className="text-body-lg text-primary-foreground/75 mb-8">
              Your free 5-point website checklist is ready to download. Use it to find out exactly what's holding your site back from ranking on Google.
            </p>

            <a
              href="/downloads/5-point-website-checklist.pdf"
              download
              onClick={() => {
                pushEvent("file_download", {
                  event_category: "Lead Magnet",
                  event_label: "5-Point Website Checklist PDF",
                });
              }}
            >
              <Button variant="hero" size="lg" className="gap-2">
                <Download className="w-5 h-5" />
                Download Your Free Checklist
              </Button>
            </a>

            <p className="text-primary-foreground/40 text-xs mt-4">
              PDF · Free · No expiry
            </p>
          </motion.div>
        </div>
      </section>

      {/* What's in the checklist */}
      <section className="section-padding bg-background">
        <div className="container-tight max-w-2xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <h2 className="heading-section text-foreground mb-4">
              What's inside the checklist
            </h2>
            <p className="text-muted-foreground mb-10">
              Five things every tradie website needs to turn Google visitors into phone calls.
            </p>
          </motion.div>

          <div className="space-y-4 text-left mb-12">
            {[
              "Is your Google Business Profile fully set up and verified?",
              "Does your homepage clearly state what you do and where you work?",
              "Is your site fast enough to pass Google's Core Web Vitals?",
              "Are you using local keywords that customers actually search for?",
              "Do you have a clear, easy way for visitors to contact you?",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-start gap-3 bg-card border border-border rounded-xl p-4"
              >
                <div className="w-6 h-6 rounded-full gradient-cta flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold text-accent-foreground">
                  {i + 1}
                </div>
                <p className="text-foreground text-sm leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/free-website-review">
              <Button variant="cta" size="lg" className="gap-2">
                Get a Free Website Review
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/blog">
              <Button variant="outline" size="lg">
                Read More Tips
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ChecklistThankYou;
