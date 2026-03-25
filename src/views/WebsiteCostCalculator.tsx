"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Calculator,
  Layers,
  Settings,
  FileText,
  DollarSign,
  Send,
  Globe,
  ShoppingCart,
  PenTool,
  MessageSquare,
  MapPin,
  Zap,
  Camera,
  Search,
  Share2,
  Sparkles,
  Languages,
  Users,
  Target,
  Megaphone,
  Wrench,
  Palette,
  Type,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import { ScrollReveal } from "@/components/ScrollReveal";
import { stagger, fadeUp } from "@/lib/animations";
import { useToast } from "@/hooks/use-toast";
import { trackEvent } from "@/lib/utils";

/* ── Constants ───────────────────────────────────────────── */

const FORMSPREE_ID = "xzdjplaq";

const businessTypes = [
  { value: "tradie", label: "Tradie / Contractor", icon: Wrench },
  { value: "restaurant", label: "Restaurant / Hospitality", icon: Users },
  { value: "healthcare", label: "Healthcare / Medical", icon: Target },
  { value: "professional", label: "Professional Services", icon: FileText },
  { value: "retail", label: "Retail / E-Commerce", icon: ShoppingCart },
  { value: "ndis", label: "NDIS Provider", icon: CheckCircle2 },
  { value: "gym", label: "Gym / Fitness", icon: Zap },
  { value: "other", label: "Other", icon: Globe },
];

const websiteTypes = [
  { value: "new", label: "Brand new website", description: "Starting from scratch", icon: Sparkles },
  { value: "redesign", label: "Redesign existing", description: "Refresh your current site", icon: Palette },
  { value: "add-features", label: "Add features to current", description: "Enhance what you have", icon: Settings },
];

const pageSizes = [
  { value: "simple", label: "Simple", description: "1\u20135 pages", icon: FileText },
  { value: "standard", label: "Standard", description: "6\u201310 pages", icon: Layers },
  { value: "large", label: "Large", description: "11\u201320 pages", icon: Globe },
  { value: "enterprise", label: "Enterprise", description: "20+ pages", icon: Target },
];

const featureOptions = [
  { value: "booking", label: "Online Booking", price: 600, icon: Calculator },
  { value: "ecommerce", label: "E-commerce", price: 800, icon: ShoppingCart },
  { value: "blog", label: "Blog / CMS", price: 300, icon: PenTool },
  { value: "contact-forms", label: "Contact Forms", price: 200, icon: MessageSquare },
  { value: "google-maps", label: "Google Maps", price: 200, icon: MapPin },
  { value: "live-chat", label: "Live Chat", price: 300, icon: MessageSquare },
  { value: "gallery", label: "Photo Gallery", price: 400, icon: Camera },
  { value: "seo", label: "SEO Setup", price: 500, icon: Search },
  { value: "social", label: "Social Media Integration", price: 200, icon: Share2 },
  { value: "animations", label: "Custom Animations", price: 600, icon: Sparkles },
  { value: "multilang", label: "Multi-language", price: 700, icon: Languages },
  { value: "portal", label: "Client Portal", price: 800, icon: Users },
];

const serviceOptions = [
  { value: "local-seo", label: "Local SEO & GBP", price: 800, icon: MapPin },
  { value: "ppc", label: "Google Ads / PPC", price: 600, icon: Megaphone },
  { value: "maintenance", label: "Maintenance & Hosting", price: 400, icon: Wrench },
  { value: "branding", label: "Logo & Brand Design", price: 1200, icon: Palette },
  { value: "copywriting", label: "Copywriting", price: 600, icon: Type },
  { value: "photography", label: "Photography", price: 800, icon: Camera },
];

const basePrices: Record<string, number> = {
  new: 1200,
  redesign: 800,
  "add-features": 600,
};

const pageMultipliers: Record<string, number> = {
  simple: 1,
  standard: 1.5,
  large: 2.2,
  enterprise: 3,
};

const stepLabels = ["Industry", "Website Type", "Pages", "Features", "Services", "Your Quote"];

const faqs = [
  {
    question: "How much does a website cost in Wollongong?",
    answer:
      "Website costs in Wollongong typically range from $1,200 for a simple 5-page site to $15,000+ for a full e-commerce store or custom web application. Our calculator gives you an instant estimate based on your exact requirements. For a more accurate quote, get in touch and we\u2019ll scope it out for free.",
  },
  {
    question: "What\u2019s included in the website cost?",
    answer:
      "Every website we build includes custom design, mobile responsiveness, on-page SEO setup, contact forms, Google Analytics integration, and Google Search Console setup. Additional features like e-commerce, booking systems, and blog functionality are priced separately so you only pay for what you need.",
  },
  {
    question: "Do I need to pay for hosting separately?",
    answer:
      "Hosting is a separate ongoing cost, typically $20\u2013$80/month depending on your site\u2019s needs. We offer a Maintenance & Hosting package for $400 that covers your first year. We\u2019ll recommend the best hosting solution for your budget and traffic levels.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Most websites are completed within 4\u20138 weeks, depending on the complexity and how quickly you provide content and feedback. Simple sites can be done in 2\u20133 weeks, while larger e-commerce or custom projects may take 8\u201312 weeks. We\u2019ll give you a clear timeline before we start.",
  },
  {
    question: "Can I update the website myself after it\u2019s built?",
    answer:
      "Yes. We build all websites with a user-friendly content management system (CMS) so you can update text, images, and blog posts yourself. We also provide a walkthrough session after launch so you\u2019re confident managing your site. If you\u2019d prefer us to handle updates, our maintenance plans cover that.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Absolutely. We offer flexible payment plans to suit your budget. Typically we require a 40% deposit to begin work, with the balance split across milestones or due on completion. Get in touch and we\u2019ll work out a plan that suits your business.",
  },
];

/* ── Helper: round to nearest $100 ──────────────────────── */
const roundTo100 = (n: number) => Math.round(n / 100) * 100;

/* ── Slide animation variants ────────────────────────────── */
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction < 0 ? 80 : -80,
    opacity: 0,
  }),
};

/* ── Component ───────────────────────────────────────────── */
const WebsiteCostCalculator = () => {
  const router = useRouter();
  const { toast } = useToast();

  /* Step state */
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);

  /* Calculator selections */
  const [businessType, setBusinessType] = useState("");
  const [websiteType, setWebsiteType] = useState("");
  const [pageSize, setPageSize] = useState("");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  /* Form state */
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  /* Navigation */
  const canProceed = () => {
    if (step === 1) return businessType !== "";
    if (step === 2) return websiteType !== "";
    if (step === 3) return pageSize !== "";
    return true;
  };

  const goNext = () => {
    if (!canProceed()) return;
    setDirection(1);
    setStep((s) => Math.min(s + 1, 6));
  };

  const goBack = () => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 1));
  };

  /* Multi-select toggle */
  const toggleFeature = (value: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const toggleService = (value: string) => {
    setSelectedServices((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  /* Calculate price */
  const calculatePrice = () => {
    const base = basePrices[websiteType] || 1200;
    const multiplier = pageMultipliers[pageSize] || 1;
    const featuresTotal = selectedFeatures.reduce((sum, f) => {
      const feat = featureOptions.find((o) => o.value === f);
      return sum + (feat?.price || 0);
    }, 0);
    const servicesTotal = selectedServices.reduce((sum, s) => {
      const svc = serviceOptions.find((o) => o.value === s);
      return sum + (svc?.price || 0);
    }, 0);

    const total = base * multiplier + featuresTotal + servicesTotal;
    const low = roundTo100(total * 0.75);
    const high = roundTo100(total * 1.25);
    return { low, high, total: roundTo100(total) };
  };

  /* Form submission */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const { low, high } = calculatePrice();
    const formData = new FormData();
    formData.append("name", formName);
    formData.append("email", formEmail);
    if (formPhone) formData.append("phone", formPhone);
    formData.append("business_type", businessType);
    formData.append("website_type", websiteType);
    formData.append("page_size", pageSize);
    formData.append("features", selectedFeatures.join(", "));
    formData.append("services", selectedServices.join(", "));
    formData.append("estimated_range", `$${low.toLocaleString()} \u2013 $${high.toLocaleString()}`);
    formData.append("_subject", `Website Cost Calculator — ${formName}`);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        trackEvent("generate_lead", { form_name: "website_cost_calculator" });
        setSubmitted(true);
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

  /* Price data for step 6 */
  const { low, high } = calculatePrice();

  /* ── Schema markup ─────────────────────────────────────── */
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Website Cost Calculator",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "AUD",
    },
    provider: {
      "@type": "Organization",
      name: "Digital Edge Studio",
      url: "https://digitaledgestudio.com",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://digitaledgestudio.com" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Website Cost Calculator",
        item: "https://digitaledgestudio.com/website-cost-calculator",
      },
    ],
  };

  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        <div className="container-tight px-4 py-16 md:py-24 relative z-10">
          <motion.div className="max-w-3xl" initial="hidden" animate="show" variants={stagger}>
            <motion.h1 variants={fadeUp} className="heading-display text-primary-foreground mb-4">
              Free Website Cost Calculator
            </motion.h1>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75 max-w-2xl">
              Get an instant estimate for your professional website. Answer a few quick questions
              about your business, and we&apos;ll show you a tailored price range — no obligation, no
              sales pitch.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path
              d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z"
              className="fill-background"
            />
          </svg>
        </div>
      </section>

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", path: "/" },
          { label: "Website Cost Calculator" },
        ]}
      />

      {/* ── Calculator Section ───────────────────────────────── */}
      <section className="section-padding bg-background">
        <div className="container-tight max-w-3xl">
          {/* Progress bar */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-3">
              {stepLabels.map((label, i) => (
                <button
                  key={label}
                  onClick={() => {
                    if (i + 1 < step) {
                      setDirection(-1);
                      setStep(i + 1);
                    }
                  }}
                  className={`text-xs font-medium transition-colors hidden sm:block ${
                    i + 1 <= step ? "text-accent" : "text-muted-foreground"
                  } ${i + 1 < step ? "cursor-pointer hover:text-accent/80" : "cursor-default"}`}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-accent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(step / 6) * 100}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2 sm:hidden">
              Step {step} of 6 — {stepLabels[step - 1]}
            </p>
          </div>

          {/* Step content */}
          <div className="relative min-h-[420px]">
            <AnimatePresence mode="wait" custom={direction}>
              {/* ── Step 1: Business Type ────────────────────── */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <h2 className="heading-section text-foreground mb-2">What type of business are you?</h2>
                  <p className="text-muted-foreground mb-8">
                    This helps us tailor the estimate to your industry.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {businessTypes.map((option) => {
                      const Icon = option.icon;
                      return (
                        <div
                          key={option.value}
                          onClick={() => setBusinessType(option.value)}
                          className={`p-4 rounded-xl border-2 cursor-pointer transition-all text-center ${
                            businessType === option.value
                              ? "border-accent bg-accent/10"
                              : "border-border hover:border-accent/50"
                          }`}
                        >
                          <Icon
                            className={`w-6 h-6 mx-auto mb-2 ${
                              businessType === option.value ? "text-accent" : "text-muted-foreground"
                            }`}
                          />
                          <span className="text-sm font-medium text-foreground">{option.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* ── Step 2: Website Type ─────────────────────── */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <h2 className="heading-section text-foreground mb-2">What do you need?</h2>
                  <p className="text-muted-foreground mb-8">
                    Tell us whether this is a new build, a redesign, or enhancements to your current
                    site.
                  </p>
                  <div className="grid gap-4">
                    {websiteTypes.map((option) => {
                      const Icon = option.icon;
                      return (
                        <div
                          key={option.value}
                          onClick={() => setWebsiteType(option.value)}
                          className={`p-5 rounded-xl border-2 cursor-pointer transition-all flex items-center gap-4 ${
                            websiteType === option.value
                              ? "border-accent bg-accent/10"
                              : "border-border hover:border-accent/50"
                          }`}
                        >
                          <Icon
                            className={`w-7 h-7 flex-shrink-0 ${
                              websiteType === option.value ? "text-accent" : "text-muted-foreground"
                            }`}
                          />
                          <div>
                            <p className="font-semibold text-foreground">{option.label}</p>
                            <p className="text-sm text-muted-foreground">{option.description}</p>
                          </div>
                          {websiteType === option.value && (
                            <CheckCircle2 className="w-5 h-5 text-accent ml-auto flex-shrink-0" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* ── Step 3: Pages Needed ─────────────────────── */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <h2 className="heading-section text-foreground mb-2">How many pages do you need?</h2>
                  <p className="text-muted-foreground mb-8">
                    Don&apos;t worry if you&apos;re not sure — we can help you plan this later.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {pageSizes.map((option) => {
                      const Icon = option.icon;
                      return (
                        <div
                          key={option.value}
                          onClick={() => setPageSize(option.value)}
                          className={`p-5 rounded-xl border-2 cursor-pointer transition-all text-center ${
                            pageSize === option.value
                              ? "border-accent bg-accent/10"
                              : "border-border hover:border-accent/50"
                          }`}
                        >
                          <Icon
                            className={`w-6 h-6 mx-auto mb-2 ${
                              pageSize === option.value ? "text-accent" : "text-muted-foreground"
                            }`}
                          />
                          <p className="font-semibold text-foreground">{option.label}</p>
                          <p className="text-sm text-muted-foreground">{option.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* ── Step 4: Features ─────────────────────────── */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <h2 className="heading-section text-foreground mb-2">
                    What features do you need?
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Select all that apply. You can skip this step if you&apos;re unsure.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {featureOptions.map((option) => {
                      const Icon = option.icon;
                      const isSelected = selectedFeatures.includes(option.value);
                      return (
                        <div
                          key={option.value}
                          onClick={() => toggleFeature(option.value)}
                          className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            isSelected
                              ? "border-accent bg-accent/10"
                              : "border-border hover:border-accent/50"
                          }`}
                        >
                          <div className="flex items-start gap-2">
                            <Icon
                              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                                isSelected ? "text-accent" : "text-muted-foreground"
                              }`}
                            />
                            <div className="min-w-0">
                              <p className="text-sm font-medium text-foreground leading-tight">
                                {option.label}
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">
                                +${option.price.toLocaleString()}
                              </p>
                            </div>
                          </div>
                          {isSelected && (
                            <CheckCircle2 className="w-4 h-4 text-accent mt-2 ml-auto" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* ── Step 5: Additional Services ──────────────── */}
              {step === 5 && (
                <motion.div
                  key="step5"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <h2 className="heading-section text-foreground mb-2">
                    Any additional services?
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    These are optional extras that can boost your online presence.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {serviceOptions.map((option) => {
                      const Icon = option.icon;
                      const isSelected = selectedServices.includes(option.value);
                      return (
                        <div
                          key={option.value}
                          onClick={() => toggleService(option.value)}
                          className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            isSelected
                              ? "border-accent bg-accent/10"
                              : "border-border hover:border-accent/50"
                          }`}
                        >
                          <div className="flex items-start gap-2">
                            <Icon
                              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                                isSelected ? "text-accent" : "text-muted-foreground"
                              }`}
                            />
                            <div className="min-w-0">
                              <p className="text-sm font-medium text-foreground leading-tight">
                                {option.label}
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">
                                +${option.price.toLocaleString()}
                              </p>
                            </div>
                          </div>
                          {isSelected && (
                            <CheckCircle2 className="w-4 h-4 text-accent mt-2 ml-auto" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* ── Step 6: Results + Email Capture ──────────── */}
              {step === 6 && (
                <motion.div
                  key="step6"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <h2 className="heading-section text-foreground mb-2 text-center">
                    Your Estimated Website Cost
                  </h2>
                  <p className="text-muted-foreground mb-8 text-center">
                    Based on your selections, here&apos;s your tailored estimate.
                  </p>

                  {/* Price display */}
                  <div className="bg-card rounded-2xl border border-border shadow-card p-8 text-center mb-8">
                    <DollarSign className="w-10 h-10 text-accent mx-auto mb-3" />
                    <p className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                      ${low.toLocaleString()} &ndash; ${high.toLocaleString()}
                    </p>
                    <p className="text-sm text-muted-foreground">AUD (excl. GST)</p>
                  </div>

                  {/* Breakdown */}
                  <div className="bg-card rounded-2xl border border-border shadow-card p-6 mb-8">
                    <h3 className="font-semibold text-foreground mb-4">What&apos;s included:</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>
                          {websiteTypes.find((w) => w.value === websiteType)?.label || "Website"} &mdash;{" "}
                          {pageSizes.find((p) => p.value === pageSize)?.description || ""} (
                          {pageSizes.find((p) => p.value === pageSize)?.label || ""})
                        </span>
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>
                          Industry:{" "}
                          {businessTypes.find((b) => b.value === businessType)?.label || "N/A"}
                        </span>
                      </li>
                      {selectedFeatures.length > 0 && (
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span>
                            Features:{" "}
                            {selectedFeatures
                              .map((f) => featureOptions.find((o) => o.value === f)?.label)
                              .join(", ")}
                          </span>
                        </li>
                      )}
                      {selectedServices.length > 0 && (
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span>
                            Services:{" "}
                            {selectedServices
                              .map((s) => serviceOptions.find((o) => o.value === s)?.label)
                              .join(", ")}
                          </span>
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Email capture */}
                  {!submitted ? (
                    <div className="bg-card rounded-2xl border border-border shadow-card p-6">
                      <h3 className="font-semibold text-foreground mb-1">
                        Get your detailed quote emailed to you
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        No spam, no obligation. We&apos;ll send your personalised breakdown and be in
                        touch to answer any questions.
                      </p>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <Label htmlFor="calc-name">Name *</Label>
                          <Input
                            id="calc-name"
                            required
                            value={formName}
                            onChange={(e) => setFormName(e.target.value)}
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="calc-email">Email *</Label>
                          <Input
                            id="calc-email"
                            type="email"
                            required
                            value={formEmail}
                            onChange={(e) => setFormEmail(e.target.value)}
                            placeholder="you@example.com"
                          />
                        </div>
                        <div>
                          <Label htmlFor="calc-phone">Phone (optional)</Label>
                          <Input
                            id="calc-phone"
                            type="tel"
                            value={formPhone}
                            onChange={(e) => setFormPhone(e.target.value)}
                            placeholder="04XX XXX XXX"
                          />
                        </div>
                        <Button type="submit" className="w-full" disabled={loading}>
                          {loading ? (
                            "Sending..."
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-2" />
                              Send My Free Quote
                            </>
                          )}
                        </Button>
                      </form>
                    </div>
                  ) : (
                    <div className="bg-card rounded-2xl border border-accent/30 shadow-card p-8 text-center">
                      <CheckCircle2 className="w-12 h-12 text-accent mx-auto mb-3" />
                      <h3 className="font-semibold text-foreground text-lg mb-1">
                        Quote sent!
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Check your inbox — we&apos;ll be in touch within 24 hours.
                      </p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-between mt-10">
            <Button
              variant="outline"
              onClick={goBack}
              disabled={step === 1}
              className={step === 1 ? "invisible" : ""}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            {step < 6 && (
              <Button onClick={goNext} disabled={!canProceed()}>
                {step === 5 ? "See My Estimate" : "Next"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* ── What Affects Website Cost? ────────────────────────── */}
      <section className="section-padding bg-muted/30">
        <div className="container-tight">
          <ScrollReveal>
            <motion.h2 variants={fadeUp} className="heading-section text-foreground text-center mb-12">
              What Affects Website Cost?
            </motion.h2>
          </ScrollReveal>
          <ScrollReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Layers,
                title: "Complexity",
                desc: "The number of pages, custom layouts, and unique design elements all impact the total cost. A simple brochure site costs far less than a multi-section web application.",
              },
              {
                icon: Settings,
                title: "Features",
                desc: "Functionality like e-commerce, booking systems, client portals, and CMS integration require additional development time and testing.",
              },
              {
                icon: FileText,
                title: "Content",
                desc: "Professional copywriting, photography, and brand assets can be included or supplied by you. Quality content drives conversions and SEO performance.",
              },
              {
                icon: Wrench,
                title: "Ongoing Services",
                desc: "Hosting, maintenance, SEO, and digital marketing are recurring investments that keep your site secure, fast, and visible in search results.",
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                className="bg-card rounded-2xl border border-border shadow-card p-6"
              >
                <card.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ── Average Website Costs in Australia ────────────────── */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal>
            <motion.h2 variants={fadeUp} className="heading-section text-foreground text-center mb-4">
              Average Website Costs in Australia
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground text-center max-w-2xl mx-auto mb-12"
            >
              Here&apos;s how pricing typically compares across different approaches. Professional agency
              pricing includes strategy, custom design, and ongoing support.
            </motion.p>
          </ScrollReveal>
          <ScrollReveal>
            <motion.div variants={fadeUp} className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-semibold text-foreground">Website Type</th>
                    <th className="text-left py-4 px-4 font-semibold text-foreground">
                      DIY (Wix/Squarespace)
                    </th>
                    <th className="text-left py-4 px-4 font-semibold text-foreground">Freelancer</th>
                    <th className="text-left py-4 px-4 font-semibold text-accent">
                      Professional Agency
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      type: "Basic 5-page site",
                      diy: "$300\u2013$600",
                      freelancer: "$800\u2013$2,000",
                      agency: "$1,500\u2013$4,000",
                    },
                    {
                      type: "Business site (10+ pages)",
                      diy: "$600\u2013$1,200",
                      freelancer: "$2,000\u2013$5,000",
                      agency: "$3,000\u2013$8,000",
                    },
                    {
                      type: "E-commerce store",
                      diy: "$500\u2013$1,500",
                      freelancer: "$3,000\u2013$8,000",
                      agency: "$5,000\u2013$15,000+",
                    },
                    {
                      type: "Custom web application",
                      diy: "N/A",
                      freelancer: "$5,000\u2013$15,000",
                      agency: "$10,000\u2013$50,000+",
                    },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                      <td className="py-4 px-4 font-medium text-foreground">{row.type}</td>
                      <td className="py-4 px-4 text-muted-foreground">{row.diy}</td>
                      <td className="py-4 px-4 text-muted-foreground">{row.freelancer}</td>
                      <td className="py-4 px-4 text-accent font-medium">{row.agency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Why Choose Digital Edge Studio? ───────────────────── */}
      <section className="section-padding bg-muted/30">
        <div className="container-tight max-w-3xl">
          <ScrollReveal>
            <motion.h2 variants={fadeUp} className="heading-section text-foreground text-center mb-12">
              Why Choose Digital Edge Studio?
            </motion.h2>
          </ScrollReveal>
          <ScrollReveal className="space-y-4">
            {[
              "Custom-designed websites — no templates, no cookie-cutter layouts",
              "Conversion-focused design backed by data and local market expertise",
              "Full SEO setup included with every build — so Google can find you from day one",
              "Australian-owned, Wollongong-based — we understand local business",
              "Transparent pricing with no hidden fees or surprise charges",
              "Ongoing support and maintenance plans to keep your site running smoothly",
              "5-star reviews from real local businesses across the Illawarra and Sydney",
            ].map((item) => (
              <motion.div key={item} variants={fadeUp} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">{item}</p>
              </motion.div>
            ))}
            <motion.div variants={fadeUp} className="pt-4">
              <Link
                href="/reviews"
                className="text-accent font-medium hover:text-accent/80 transition-colors inline-flex items-center gap-1"
              >
                Read what our clients say
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <FAQ faqs={faqs} title={"Website Cost Calculator — FAQ"} />

      {/* ── Bottom CTA ────────────────────────────────────────── */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        <div className="container-tight px-4 py-20 md:py-28 relative z-10 text-center">
          <ScrollReveal>
            <motion.h2
              variants={fadeUp}
              className="heading-section text-primary-foreground mb-4"
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-body-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8"
            >
              Whether you&apos;re building from scratch or upgrading your current site, we&apos;ll
              help you get a website that actually grows your business.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link href="/free-website-review">Free Website Review</Link>
              </Button>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default WebsiteCostCalculator;
