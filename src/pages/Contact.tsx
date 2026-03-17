import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { trackEvent } from "@/lib/utils";
import { Mail, MapPin, Clock, Send, Calendar, User, Phone, Building2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SEOMeta } from "@/components/SEOMeta";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

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

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Digital Edge Studio",
    "url": "https://digitaledgestudio.com/contact",
    "email": "enquiries@digitaledgestudio.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "enquiries@digitaledgestudio.com",
      "areaServed": ["Sydney", "Wollongong", "NSW"]
    }
  };

  const contactFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How quickly will Digital Edge respond to my inquiry?",
        "acceptedAnswer": { "@type": "Answer", "text": "We typically respond to all inquiries within 24 hours during business days. We understand that timing is important for your business, so we prioritize getting back to you quickly with a preliminary assessment and next steps." }
      },
      {
        "@type": "Question",
        "name": "Is the initial consultation really free?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, absolutely! Our initial consultation is completely free and with no obligation. We'll discuss your business goals, what you're hoping to achieve, and what a partnership with Digital Edge could look like for you." }
      },
      {
        "@type": "Question",
        "name": "Do you service areas outside Sydney and Wollongong?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes! We provide web design and digital marketing services for businesses across Sydney, Wollongong, and throughout NSW. We also work with businesses in other states. Get in touch to discuss your needs." }
      },
      {
        "@type": "Question",
        "name": "What information should I have ready for our consultation?",
        "acceptedAnswer": { "@type": "Answer", "text": "It's helpful to have: your current website (if you have one), your main business goals, your target customers, your competitor websites you like, and any specific features or services you want. But don't worry if you don't have all this — we'll guide you through it." }
      },
      {
        "@type": "Question",
        "name": "Can I speak to a real person or is it all digital?",
        "acceptedAnswer": { "@type": "Answer", "text": "You'll speak to a real person! We're a small team, so you'll work directly with experienced web designers and digital marketers. We're happy to meet via phone, video call, or in person depending on what works best for you." }
      },
      {
        "@type": "Question",
        "name": "What if I need ongoing support after my website launches?",
        "acceptedAnswer": { "@type": "Answer", "text": "We offer ongoing maintenance and support packages starting at $99/month. This includes updates, security, performance monitoring, and any minor changes you need. You're never left on your own." }
      }
    ]
  };

  const contactFAQ = [
    {
      question: "How quickly will Digital Edge respond to my inquiry?",
      answer: "We typically respond to all inquiries within 24 hours during business days. We understand that timing is important for your business, so we prioritize getting back to you quickly with a preliminary assessment and next steps."
    },
    {
      question: "Is the initial consultation really free?",
      answer: "Yes, absolutely! Our initial consultation is completely free and with no obligation. We'll discuss your business goals, what you're hoping to achieve, and what a partnership with Digital Edge could look like for you."
    },
    {
      question: "Do you service areas outside Sydney and Wollongong?",
      answer: "Yes! We provide web design and digital marketing services for businesses across Sydney, Wollongong, and throughout NSW. We also work with businesses in other states. Get in touch to discuss your needs."
    },
    {
      question: "What information should I have ready for our consultation?",
      answer: "It's helpful to have: your current website (if you have one), your main business goals, your target customers, your competitor websites you like, and any specific features or services you want. But don't worry if you don't have all this — we'll guide you through it."
    },
    {
      question: "Can I speak to a real person or is it all digital?",
      answer: "You'll speak to a real person! We're a small team, so you'll work directly with experienced web designers and digital marketers. We're happy to meet via phone, video call, or in person depending on what works best for you."
    },
    {
      question: "What if I need ongoing support after my website launches?",
      answer: "We offer ongoing maintenance and support packages starting at $99/month. This includes updates, security, performance monitoring, and any minor changes you need. You're never left on your own."
    }
  ];

  // Sign up free at formspree.io → New Form → copy the form ID below
  const FORMSPREE_ID = "xzdjplaq";

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
        trackEvent("generate_lead", { form_name: "contact_form" });
        toast({
          title: "Quote request sent!",
          description: "We'll get back to you within 24 hours.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Submit failed");
      }
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please email us directly at enquiries@digitaledgestudio.com",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <SEOMeta
        title="Contact Us | Free Quote | Digital Edge Studio"
        description="Get a free quote from your local web designer in Wollongong. Digital Edge Studio specialises in web design and digital marketing for small businesses across Wollongong, Sydney & NSW."
        canonical="https://digitaledgestudio.com/contact"
        keywords="contact web designer wollongong, web designer near me wollongong, hire a web designer in wollongong, digital marketing consultation, free website quote, web design near me wollongong"
        ogTitle="Contact Web Designer Wollongong | Free Quote"
        ogDescription="Get a free web design consultation in Wollongong. Contact Digital Edge Studio for a no-obligation quote."
        orgSchema={contactSchema}
        faqSchema={contactFaqSchema}
      />

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Contact' }
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
              Get Your <span className="text-gradient">Free Quote</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl">
              Tell us about your business and what you're looking for. We'll get back to you within 24 hours with a tailored recommendation.
            </motion.p>
          </motion.div>
        </div>
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,60 Q600,-20 1200,60 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div variants={fadeUp} className="lg:col-span-3">
              <div className="bg-card rounded-2xl border border-border shadow-card p-8 card-premium bg-accent/[0.02]">
                <h2 className="heading-card text-foreground mb-6">Request a Free Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input id="name" name="name" required placeholder="Name" className="pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input id="email" name="email" type="email" required placeholder="Email" className="pl-10" />
                      </div>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input id="phone" name="phone" type="tel" placeholder="04XX XXX XXX" className="pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="business">Business Name</Label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input id="business" name="business" placeholder="Your Business Name" className="pl-10" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">How Can We Help? *</Label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground" />
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us about your business and what you're looking for — new website, SEO, maintenance, or something else."
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <Button type="submit" variant="cta" size="lg" className="w-full" disabled={loading}>
                    {loading ? "Sending..." : <>Request a Free Quote <Send className="w-4 h-4 ml-2" /></>}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    No spam. No obligation. We'll respond within 24 hours.
                  </p>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={fadeUp} className="lg:col-span-2 space-y-6">
              <div className="bg-card rounded-2xl border border-border shadow-card p-6 card-hover-lift">
                <h3 className="font-bold text-foreground font-display mb-4">Contact Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-foreground">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Consultation</p>
                      <p className="font-medium">Book online via form</p>
                    </div>
                  </div>
                  <a href="mailto:enquiries@digitaledgestudio.com" onClick={() => trackEvent("email_click", { location: "contact_page" })} className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">enquiries@digitaledgestudio.com</p>
                    </div>
                  </a>
                  <a href="https://wa.me/61401871071?text=Hi%2C%20I%20saw%20your%20website%20packages.%20Can%20I%20get%20a%20quote%20for%20web%20design%2C%20SEO%2C%20or%20PPC%20services%3F" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("whatsapp_click", { location: "contact_page" })} className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="#25D366" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">WhatsApp</p>
                      <p className="font-medium">Chat with us</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 text-foreground">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">Sydney, Wollongong & NSW</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Response Time</p>
                      <p className="font-medium">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        faqs={contactFAQ}
        title="Contact Us - Frequently Asked Questions"
      />
    </Layout>
  );
};

export default Contact;
