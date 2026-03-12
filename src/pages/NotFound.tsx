import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="gradient-hero relative overflow-hidden min-h-[60vh] flex items-center">
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
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
