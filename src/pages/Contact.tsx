import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Send, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SEOMeta } from "@/components/SEOMeta";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
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
        title="Contact Web Designer Wollongong | Free Quote | Digital Edge Studio"
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
      <section className="gradient-hero">
        <div className="container-tight px-4 py-16 md:py-24">
          <motion.div className="max-w-3xl" {...fadeUp}>
            <h1 className="heading-display text-primary-foreground mb-4">
              Get Your Free Quote
            </h1>
            <p className="text-body-lg text-primary-foreground/75 max-w-2xl">
              Tell us about your business and what you're looking for. We'll get back to you within 24 hours with a tailored recommendation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-tight">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div className="lg:col-span-3" {...fadeUp}>
              <div className="bg-card rounded-2xl border border-border shadow-card p-8">
                <h2 className="heading-card text-foreground mb-6">Request a Free Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input id="name" name="name" required placeholder="John Smith" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" required placeholder="john@example.com.au" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="04XX XXX XXX" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="business">Business Name</Label>
                      <Input id="business" name="business" placeholder="Your Business Name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">How Can We Help? *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your business and what you're looking for — new website, SEO, maintenance, or something else."
                    />
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
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-card rounded-2xl border border-border shadow-card p-6">
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
                  <a href="mailto:enquiries@digitaledgestudio.com" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">enquiries@digitaledgestudio.com</p>
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

            </div>
          </div>
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
