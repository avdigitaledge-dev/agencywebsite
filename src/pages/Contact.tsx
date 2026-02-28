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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Quote request sent!",
        description: "We'll get back to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Layout>
      <SEOMeta
        title="Contact Digital Edge Studio | Web Design & Digital Marketing Wollongong"
        description="Get a free web design and digital marketing consultation for your tradie business in Wollongong, Sydney & NSW. Contact Digital Edge Studio today."
        keywords="contact web designer wollongong, digital marketing consultation, free website quote"
        ogTitle="Contact Digital Edge Studio"
        ogDescription="Free consultation for web design and digital marketing in Wollongong, Sydney & NSW. Get your free quote today."
        orgSchema={contactSchema}
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
                      <Input id="name" required placeholder="John Smith" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" required placeholder="john@example.com.au" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="04XX XXX XXX" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="business">Business Name</Label>
                      <Input id="business" placeholder="Your Business Name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">How Can We Help? *</Label>
                    <Textarea
                      id="message"
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

              <div className="bg-primary/5 rounded-2xl border border-primary/10 p-6">
                <h3 className="font-bold text-foreground font-display mb-2">Prefer to Schedule a Meeting?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Fill out the form and we'll send you a link to book a time that suits you best.
                </p>
                <Button variant="default" size="default" className="w-full" asChild>
                  <a href="#" onClick={(e) => { e.preventDefault(); document.getElementById('name')?.focus(); }}>
                    <Calendar className="w-4 h-4 mr-2" />
                    Fill Out the Form
                  </a>
                </Button>
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
