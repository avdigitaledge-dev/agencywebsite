"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/utils";

const servicesDropdown = [
  { label: "All Services", href: "/services", description: "Website design, SEO & marketing" },
  { label: "Website Design", href: "/services/web-design", description: "Custom sites that convert" },
  { label: "eCommerce", href: "/services/ecommerce", description: "Professional online stores" },
  { label: "Local SEO", href: "/services/seo", description: "Rank higher on Google" },
  { label: "AEO & GEO Optimisation", href: "/services/aeo-geo", description: "Get found in AI search results" },
  { label: "AI Solutions", href: "/ai-services", description: "AI chatbots & voice receptionists" },
  { label: "Google Ads", href: "/services/google-ads", description: "Instant leads from Google" },
  { label: "Digital Marketing", href: "/services/digital-marketing", description: "SEO, ads & social media" },
  { label: "Maintenance & Hosting", href: "/services/maintenance-hosting", description: "Keep your site secure" },
  { label: "Industries We Serve", href: "/industries", description: "Web design by industry" },
  { label: "Free Website Review", href: "/free-website-review", description: "Get a free audit of your site" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Pricing", href: "/pricing" },
  { label: "Our Work", href: "/portfolio" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
  { label: "Free Tools", href: "/free-tools" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
  };

  const isServicesActive = pathname === "/services" ||
    pathname.startsWith("/web-design-") ||
    pathname === "/free-website-review" ||
    pathname.startsWith("/services/") ||
    pathname === "/ai-services";

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-card/95 backdrop-blur-xl border-b ${
        scrolled ? "border-border shadow-sm" : "border-border/50"
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>
      <div className="container-tight flex items-center justify-between h-16 md:h-[72px] px-4">
        <Link href="/" className="flex items-center relative z-10">
          <Image
            src="/assets/digitaledge-logo-main.svg"
            alt="Digital Edge"
            width={180}
            height={44}
            className="h-9 md:h-11 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            link.hasDropdown ? (
              <div
                key={link.href}
                ref={dropdownRef}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={link.href}
                  className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 inline-flex items-center gap-1 ${
                    isServicesActive
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                  {isServicesActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 bg-accent/10 rounded-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                </Link>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-64 bg-card border border-border rounded-xl shadow-lg overflow-hidden z-50"
                    >
                      <div className="py-2">
                        {servicesDropdown.map((item, i) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`flex flex-col px-4 py-2.5 text-sm transition-colors ${
                              pathname === item.href
                                ? "text-accent bg-accent/5"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted"
                            } ${i === 1 ? "border-b border-border mb-1 pb-3" : ""}`}
                          >
                            <span className="font-medium">{item.label}</span>
                            {item.description && (
                              <span className="text-xs text-muted-foreground mt-0.5">{item.description}</span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 bg-accent/10 rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </Link>
            )
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="cta" size="default" asChild>
            <Link href="/contact" onClick={() => trackEvent("cta_click", { button_text: "Get a Free Quote", location: "header" })}>
              Get a Free Quote
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg text-foreground transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-card border-b border-border overflow-hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-3">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  {link.hasDropdown ? (
                    <>
                      <div className="flex items-center">
                        <Link
                          href={link.href}
                          className={`flex-1 flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                            isServicesActive
                              ? "text-accent bg-accent/10"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted"
                          }`}
                        >
                          {link.label}
                        </Link>
                        <button
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className="p-3 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="Toggle services submenu"
                        >
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                        </button>
                      </div>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-6 py-1 space-y-0.5">
                              {servicesDropdown.slice(1).map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className={`flex items-center px-4 py-2.5 rounded-lg text-sm transition-colors ${
                                    pathname === item.href
                                      ? "text-accent bg-accent/5"
                                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                  }`}
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        pathname === link.href
                          ? "text-accent bg-accent/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>
            <div className="px-4 pb-4">
              <Button variant="cta" className="w-full" asChild>
                <Link href="/contact" onClick={() => trackEvent("cta_click", { button_text: "Get a Free Quote", location: "header_mobile" })}>
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
