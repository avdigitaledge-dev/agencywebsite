import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOMeta } from "@/components/SEOMeta";
import { Breadcrumb } from "@/components/Breadcrumb";
import Layout from "@/components/Layout";
import { portfolioProjects } from "@/data/portfolioProjects";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const Portfolio = () => {
  return (
    <Layout>
      <SEOMeta
        title="Our Work | Web Design Case Studies Wollongong | Digital Edge Studio"
        description="See real results from our web design and SEO projects. Case studies from tradies and small businesses in Wollongong, Sydney, and the Illawarra region."
        keywords="web design portfolio wollongong, web design case studies, tradie website examples, small business website results, seo results wollongong"
        canonical="https://digitaledgestudio.com/portfolio"
        ogTitle="Our Work — Real Results for Real Businesses | Digital Edge Studio"
        ogDescription="See how we've helped tradies and small businesses across Wollongong and NSW grow with professional websites and local SEO."
      />

      <Breadcrumb items={[
        { label: "Home", path: "/" },
        { label: "Our Work" },
      ]} />

      {/* Hero */}
      <section className="gradient-hero">
        <div className="container-tight px-4 py-16 md:py-24">
          <motion.div className="max-w-3xl" {...fadeUp}>
            <h1 className="heading-display text-primary-foreground mb-4">
              Real Results for Real Businesses
            </h1>
            <p className="text-body-lg text-primary-foreground/75 max-w-2xl">
              We don't just build websites — we build lead-generation machines. Here's what we've done for tradies and small businesses across Wollongong, Sydney, and NSW.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-card border-b border-border">
        <div className="container-tight px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "100+", label: "Websites Delivered" },
            { value: "40+", label: "Avg. Leads/Month for Clients" },
            { value: "Top 3", label: "Google Rankings Achieved" },
            { value: "12x", label: "Average Client ROI" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl md:text-3xl font-bold text-accent font-display">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <div className="space-y-20">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="grid lg:grid-cols-2 gap-10 items-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Image + Results */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="rounded-2xl overflow-hidden mb-6">
                    <img
                      src={project.image}
                      alt={`${project.clientName} website project`}
                      className="w-full h-64 md:h-80 object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {project.results.map((result) => (
                      <div key={result.label} className="bg-card rounded-xl p-4 border border-border">
                        <div className="flex items-center gap-2 mb-1">
                          <TrendingUp className="w-4 h-4 text-accent" />
                          <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{result.label}</span>
                        </div>
                        <p className="text-2xl font-bold text-accent font-display">{result.value}</p>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{result.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                      {project.industry}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {project.location}
                    </span>
                  </div>

                  <h2 className="heading-section text-foreground mb-4 leading-tight">
                    {project.title}
                  </h2>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider mb-2">The Challenge</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{project.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider mb-2">Our Solution</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{project.solution}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.services.map((service) => (
                      <span key={service} className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-medium">
                        {service}
                      </span>
                    ))}
                  </div>

                  {project.testimonial && (
                    <blockquote className="border-l-4 border-accent pl-4 py-2">
                      <p className="text-foreground italic text-sm leading-relaxed mb-2">
                        "{project.testimonial.quote}"
                      </p>
                      <cite className="text-xs text-muted-foreground not-italic">
                        — {project.testimonial.name}, {project.testimonial.role}
                      </cite>
                    </blockquote>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero">
        <div className="container-tight px-4 py-20 text-center">
          <motion.div className="max-w-2xl mx-auto" {...fadeUp}>
            <h2 className="heading-section text-primary-foreground mb-4">
              Want Results Like These?
            </h2>
            <p className="text-body-lg text-primary-foreground/75 mb-8">
              Every project starts with a free consultation. Let's talk about how we can grow your business online.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/free-website-review">Free Website Review</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
