"use client";

import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface PopupContent {
  heading: string;
  description: string;
  bullets: string[];
  ctaText: string;
  ctaHref: string;
}

function getPopupContent(pathname: string): PopupContent {
  // Pricing page — they're comparing options, nudge toward a quote
  if (pathname === "/pricing") {
    return {
      heading: "Not Sure Which Package?",
      description: "Tell us about your business and we'll recommend the best option — no pressure, no obligation.",
      bullets: [
        "Personalised package recommendation",
        "Transparent pricing breakdown",
        "No lock-in contracts",
      ],
      ctaText: "Get a Free Quote",
      ctaHref: "/contact",
    };
  }

  // Services pages — they're evaluating what you offer
  if (pathname === "/services" || pathname.startsWith("/services/")) {
    return {
      heading: "Want to See What We'd Do for You?",
      description: "Get a free, personalised quote based on your business goals. We'll outline exactly what's included — no surprises.",
      bullets: [
        "Custom scope tailored to your business",
        "Fixed pricing with no hidden fees",
        "Free consultation call included",
      ],
      ctaText: "Get My Free Quote",
      ctaHref: "/contact",
    };
  }

  // Portfolio pages — they're looking at results, push toward getting similar
  if (pathname.startsWith("/portfolio")) {
    return {
      heading: "Want Results Like These?",
      description: "We'd love to do the same for your business. Get a free quote and we'll show you what's possible.",
      bullets: [
        "Strategy tailored to your industry",
        "Same hands-on approach for every client",
        "Real results, not just a pretty website",
      ],
      ctaText: "Get My Free Quote",
      ctaHref: "/contact",
    };
  }

  // Location pages — location-specific messaging
  if (pathname.startsWith("/web-design-")) {
    const area = pathname.includes("wollongong") ? "Wollongong"
      : pathname.includes("sydney") ? "Sydney"
      : pathname.includes("illawarra") ? "Illawarra"
      : pathname.includes("tradies") ? "tradies"
      : pathname.includes("healthcare") ? "healthcare"
      : "local";

    return {
      heading: `Get a Free ${area === "tradies" || area === "healthcare" ? area.charAt(0).toUpperCase() + area.slice(1) : area} Quote`,
      description: `We'll put together a no-obligation proposal for your ${area === "local" ? "" : area + " "}business — including pricing, timeline, and what's included.`,
      bullets: [
        "Custom quote for your business",
        "Local SEO strategy included",
        "No lock-in contracts",
      ],
      ctaText: "Get My Free Quote",
      ctaHref: "/contact",
    };
  }

  // Comparison pages — they're weighing alternatives
  if (pathname.startsWith("/vs/")) {
    return {
      heading: "See the Difference for Yourself",
      description: "Get a free website review and we'll show you exactly how a professionally built site compares to what you have now.",
      bullets: [
        "Side-by-side comparison with your current site",
        "Performance & SEO analysis",
        "No-obligation recommendation",
      ],
      ctaText: "Get My Free Review",
      ctaHref: "/free-website-review",
    };
  }

  // Blog pages — they're learning, offer educational value
  if (pathname.startsWith("/blog")) {
    return {
      heading: "Is Your Website Holding You Back?",
      description: "Get a free review of your website and find out what's working, what's not, and where you're losing potential customers.",
      bullets: [
        "SEO & Google ranking check",
        "Mobile performance review",
        "Actionable recommendations",
      ],
      ctaText: "Get My Free Review",
      ctaHref: "/free-website-review",
    };
  }

  // Default (homepage, about, etc.)
  return {
    heading: "Before You Go...",
    description: "Get a free, no-obligation review of your website. We'll show you exactly what's working, what's not, and how to get more leads.",
    bullets: [
      "SEO & Google ranking check",
      "Mobile performance review",
      "Conversion opportunities identified",
    ],
    ctaText: "Get My Free Review",
    ctaHref: "/free-website-review",
  };
}

const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);
  const maxScrollY = useRef(0);
  const pathname = usePathname();

  const content = useMemo(() => getPopupContent(pathname), [pathname]);

  // Don't show on contact or free-website-review pages (they're already converting).
  // /gym-marketing is a single-offer paid landing page — popup would compete with the inline Calendly CTA.
  const suppressPopup =
    pathname === "/contact" ||
    pathname === "/free-website-review" ||
    pathname === "/checklist-thank-you" ||
    pathname === "/gym-marketing";

  const triggerPopup = useCallback(() => {
    if (suppressPopup) return;
    if (!sessionStorage.getItem("exitIntentShown")) {
      setShow(true);
      sessionStorage.setItem("exitIntentShown", "true");
    }
  }, [suppressPopup]);

  // Desktop: mouseleave detection
  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= 0) triggerPopup();
  }, [triggerPopup]);

  // Mobile: scroll-up detection (user scrolls back up 30%+ of page height)
  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;
    if (currentY > maxScrollY.current) {
      maxScrollY.current = currentY;
    }
    const scrolledBack = maxScrollY.current - currentY;
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (pageHeight > 0 && scrolledBack / pageHeight >= 0.3) {
      triggerPopup();
    }
  }, [triggerPopup]);

  useEffect(() => {
    if (suppressPopup) return;

    const isMobile = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    // Only add listener after a 5-second delay to avoid showing on quick visits
    const timer = setTimeout(() => {
      if (isMobile) {
        window.addEventListener("scroll", handleScroll, { passive: true });
      } else {
        document.addEventListener("mouseleave", handleMouseLeave);
      }
    }, 5000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseLeave, handleScroll, suppressPopup]);

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
            onClick={() => setShow(false)}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[90vw] max-w-md"
          >
            <div className="bg-card rounded-2xl border border-border shadow-2xl overflow-hidden">
              {/* Close button */}
              <button
                onClick={() => setShow(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors z-10"
                aria-label="Close popup"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Top accent bar */}
              <div className="h-1.5 w-full gradient-cta" />

              <div className="p-8 text-center">
                <h3 className="heading-card text-foreground mb-2 font-display">
                  {content.heading}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {content.description}
                </p>

                <ul className="text-left space-y-2 mb-6">
                  {content.bullets.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button variant="cta" size="lg" className="w-full" asChild>
                  <Link href={content.ctaHref} onClick={() => setShow(false)}>
                    {content.ctaText}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>

                <button
                  onClick={() => setShow(false)}
                  className="text-xs text-muted-foreground hover:text-foreground mt-4 block mx-auto transition-colors"
                >
                  No thanks, I'm good
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
