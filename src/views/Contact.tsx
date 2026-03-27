"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { trackEvent } from "@/lib/utils";
import { subscribeToMailchimp } from "@/lib/subscribe";
import { Mail, MapPin, Clock, Send, Calendar, User, Phone, Building2, MessageSquare, ArrowRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import { useToast } from "@/hooks/use-toast";
import { ScrollReveal } from "@/components/ScrollReveal";
import { stagger, fadeUp } from "@/lib/animations";

/* ── Calendly inline embed ────────────────────────────── */
const CalendlyEmbed = ({ url }: { url: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget"
      data-url={url}
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
};

const Contact = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [nameVal, setNameVal] = useState("");
  const [emailVal, setEmailVal] = useState("");

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Digital Edge Studio",
    "url": "https://digitaledgestudio.com/contact",
    "email": "enquiries@digitaledgestudio.com",
    "telephone": "+61419807321",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "telephone": "+61419807321",
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
        subscribeToMailchimp(emailVal, nameVal);
        (e.target as HTMLFormElement).reset();
        router.push("/contact-thank-you");
        return;
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
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

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
              <div className="bg-card rounded-2xl border border-border shadow-card p-8 card-premium bg-accent/[0.02] gradient-mesh">
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="heading-card text-foreground">Request a Free Quote</h2>
                  <span className="text-xs text-muted-foreground ml-auto">Step {step} of 2</span>
                </div>
                {/* Progress bar */}
                <div className="h-1 rounded-full bg-muted mb-6 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full gradient-cta"
                    initial={{ width: "50%" }}
                    animate={{ width: step === 1 ? "50%" : "100%" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Step 1: Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                        <Input id="name" name="name" required placeholder="Name" className="pl-10 input-glass-light" value={nameVal} onChange={(e) => setNameVal(e.target.value)} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                        <Input id="email" name="email" type="email" required placeholder="Email" className="pl-10 input-glass-light" value={emailVal} onChange={(e) => setEmailVal(e.target.value)} />
                      </div>
                    </div>
                  </div>

                  {step === 1 ? (
                    <div>
                      <Button
                        type="button"
                        variant="cta"
                        size="lg"
                        className="w-full"
                        disabled={!nameVal.trim() || !emailVal.trim() || !emailVal.includes("@")}
                        onClick={() => setStep(2)}
                      >
                        Continue <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                      <p className="text-xs text-muted-foreground text-center mt-3">
                        Just two more optional fields after this.
                      </p>
                    </div>
                  ) : (
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="space-y-5 overflow-hidden"
                      >
                        {/* Step 2: Phone, Business, Message */}
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                              <Input id="phone" name="phone" type="tel" placeholder="04XX XXX XXX" className="pl-10 input-glass-light" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="business">Business Name</Label>
                            <div className="relative">
                              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                              <Input id="business" name="business" placeholder="Your Business Name" className="pl-10 input-glass-light" />
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">How Can We Help? *</Label>
                          <div className="relative">
                            <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground z-10" />
                            <Textarea
                              id="message"
                              name="message"
                              required
                              rows={5}
                              placeholder="Tell us about your business and what you're looking for — new website, SEO, maintenance, or something else."
                              className="pl-10 input-glass-light"
                            />
                          </div>
                        </div>
                        <Button type="submit" variant="cta" size="lg" className="w-full" disabled={loading}>
                          {loading ? "Sending..." : <>Request a Free Quote <Send className="w-4 h-4 ml-2" /></>}
                        </Button>
                        <p className="text-xs text-muted-foreground text-center">
                          No spam. No obligation. We'll respond within 24 hours.
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={fadeUp} className="lg:col-span-2 space-y-6">
              <div className="bg-card rounded-2xl border border-border shadow-card p-6 card-hover-lift">
                <h3 className="font-bold text-foreground font-display mb-4">Contact Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-foreground contact-item">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center contact-icon-wrap">
                      <Calendar className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Consultation</p>
                      <a href="https://calendly.com/avdigitaledge/30min?hide_gdpr_banner=1" target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:underline">Book a Free Call</a>
                    </div>
                  </div>
                  <a href="tel:+61419807321" onClick={() => trackEvent("phone_click", { location: "contact_page" })} className="flex items-center gap-3 text-foreground hover:text-accent transition-colors contact-item">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center contact-icon-wrap">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">0419 807 321</p>
                    </div>
                  </a>
                  <a href="mailto:enquiries@digitaledgestudio.com" onClick={() => trackEvent("email_click", { location: "contact_page" })} className="flex items-center gap-3 text-foreground hover:text-accent transition-colors contact-item">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center contact-icon-wrap">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">enquiries@digitaledgestudio.com</p>
                    </div>
                  </a>
                  <a href="https://wa.me/61419807321?text=Hi%20Digital%20Edge%20Studio%2C%20I%27m%20interested%20in%20your%20web%20design%20services." target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("whatsapp_click", { location: "contact_page" })} className="flex items-center gap-3 text-foreground hover:text-accent transition-colors contact-item">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center contact-icon-wrap">
                      <svg viewBox="0 0 24 24" fill="#25D366" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">WhatsApp</p>
                      <p className="font-medium">Chat with us</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 text-foreground contact-item">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center contact-icon-wrap">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">Sydney, Wollongong & NSW</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-foreground contact-item">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center contact-icon-wrap">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Response Time</p>
                      <p className="font-medium">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonials */}
              <div className="bg-card rounded-2xl border border-border shadow-card p-6 card-hover-lift">
                <div className="flex items-center gap-2 mb-4">
                  <Quote className="w-5 h-5 text-accent" />
                  <h3 className="font-bold text-foreground font-display">What Our Clients Say</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { name: "James T.", biz: "Plumber, Sydney", quote: "Since Digital Edge rebuilt our website, we've had a 60% increase in phone calls from Google." },
                    { name: "Sarah M.", biz: "Physiotherapist, Wollongong", quote: "They made the whole process easy and stress-free. Our new website looks incredible." },
                    { name: "Mark L.", biz: "Electrician, NSW", quote: "The local SEO work has been a game changer. We're now showing up at the top of Google Maps." },
                  ].map((t) => (
                    <div key={t.name} className="border-l-2 border-accent/30 pl-4">
                      <p className="text-sm text-muted-foreground italic leading-relaxed">"{t.quote}"</p>
                      <div className="flex items-center gap-1 mt-1.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-xs text-foreground font-medium mt-1">{t.name} — <span className="text-muted-foreground">{t.biz}</span></p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4 text-center">Rated 4.8 stars on Google</p>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Calendly Booking Widget ═══ */}
      <section className="section-padding" style={{ background: "var(--surface-gradient)" }}>
        <div className="container-tight">
          <ScrollReveal className="text-center mb-10">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-3">Book a Free 15-Minute Consultation</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Pick a time that suits you — no obligation, no pressure. We'll discuss your goals and how we can help.
            </motion.p>
          </ScrollReveal>
          <ScrollReveal>
            <motion.div variants={fadeUp} className="bg-card rounded-2xl border border-border shadow-card overflow-hidden">
              <CalendlyEmbed url="https://calendly.com/avdigitaledge/30min?hide_gdpr_banner=1&hide_event_type_details=1&hide_landing_page_details=1" />
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Service Area Map ═══ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal className="text-center mb-8">
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-3">Our Service Area</motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Based in Wollongong, serving businesses across the Illawarra, South Coast, and Greater Sydney.
            </motion.p>
          </ScrollReveal>
          <ScrollReveal>
            <motion.div variants={fadeUp} className="w-full rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52862.22518420498!2d150.85!3d-34.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b131a67e0a1c5f1%3A0x5017d681632c890!2sWollongong%20NSW%202500!5e0!3m2!1sen!2sau!4v1"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Digital Edge Studio - Wollongong Web Design Agency Service Area"
              />
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        faqs={contactFAQ}
        title="Contact Us - Frequently Asked Questions"
      />
    </>
  );
};

export default Contact;
