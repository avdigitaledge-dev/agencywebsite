import { useLocation, Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Globe, Search, FileText, Star, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

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

const suggestedPages = [
  { icon: Globe, label: "Our Services", description: "Web design, SEO & marketing", to: "/services" },
  { icon: Star, label: "Our Work", description: "Case studies & results", to: "/portfolio" },
  { icon: Search, label: "Free Website Review", description: "Get a free site audit", to: "/free-website-review" },
  { icon: FileText, label: "Blog", description: "Tips & guides", to: "/blog" },
  { icon: DollarSign, label: "Pricing", description: "Transparent packages", to: "/pricing" },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        <div className="container-tight px-4 py-20 text-center relative z-10 w-full">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="max-w-2xl mx-auto"
          >
            <motion.p variants={fadeUp} className="text-7xl md:text-9xl font-bold text-primary-foreground/20 font-display mb-4">404</motion.p>
            <motion.h1 variants={fadeUp} className="heading-display text-primary-foreground mb-4">Page Not Found</motion.h1>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 mb-8">
              Sorry, the page you're looking for doesn't exist or has been moved.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/">Back to Home <ArrowRight className="w-5 h-5 ml-1" /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* Suggested Pages */}
      <section className="section-padding bg-background">
        <div className="container-tight max-w-3xl">
          <ScrollReveal>
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-8 text-center">
              Maybe you were looking for...
            </motion.h2>
            <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-4">
              {suggestedPages.map((page) => (
                <Link
                  key={page.to}
                  to={page.to}
                  className="group flex items-center gap-4 p-5 bg-card rounded-xl border border-border hover:border-accent transition-colors card-hover-lift"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <page.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-accent transition-colors">{page.label}</p>
                    <p className="text-xs text-muted-foreground">{page.description}</p>
                  </div>
                </Link>
              ))}
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
