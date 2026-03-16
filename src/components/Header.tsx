import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/utils";
import logoMain from "@/assets/digitaledge-logo-main.svg";

const servicesDropdown = [
  { label: "All Services", to: "/services", description: "Website design, SEO & marketing" },
  { label: "Free Website Review", to: "/free-website-review", description: "Get a free audit of your site" },
  { label: "AEO & GEO Optimisation", to: "/services/aeo-geo", description: "Get found in AI search results" },
  { label: "Web Design Wollongong", to: "/web-design-wollongong" },
  { label: "Web Design Sydney", to: "/web-design-sydney" },
  { label: "Web Design Illawarra", to: "/web-design-illawarra" },
  { label: "Web Design for Tradies", to: "/web-design-tradies" },
  { label: "Healthcare Web Design", to: "/web-design-healthcare" },
];

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services", hasDropdown: true },
  { label: "Pricing", to: "/pricing" },
  { label: "Our Work", to: "/portfolio" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
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
  }, [location.pathname]);

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

  const isServicesActive = location.pathname === "/services" ||
    location.pathname.startsWith("/web-design-") ||
    location.pathname === "/free-website-review" ||
    location.pathname.startsWith("/services/");

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-card/95 backdrop-blur-xl border-b ${
        scrolled ? "border-border shadow-sm" : "border-border/50"
      }`}
    >
      <div className="container-tight flex items-center justify-between h-16 md:h-[72px] px-4">
        <Link to="/" className="flex items-center relative z-10">
          <img
            src={logoMain}
            alt="Digital Edge"
            className="h-9 md:h-11 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            link.hasDropdown ? (
              <div
                key={link.to}
                ref={dropdownRef}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={link.to}
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
                            key={item.to}
                            to={item.to}
                            className={`flex flex-col px-4 py-2.5 text-sm transition-colors ${
                              location.pathname === item.to
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
                key={link.to}
                to={link.to}
                className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.to
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {location.pathname === link.to && (
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
            <Link to="/contact" onClick={() => trackEvent("cta_click", { button_text: "Get a Free Quote", location: "header" })}>
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
                  key={link.to}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  {link.hasDropdown ? (
                    <>
                      <div className="flex items-center">
                        <Link
                          to={link.to}
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
                                /* includes Free Website Review + all location/industry pages */
                                <Link
                                  key={item.to}
                                  to={item.to}
                                  className={`flex items-center px-4 py-2.5 rounded-lg text-sm transition-colors ${
                                    location.pathname === item.to
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
                      to={link.to}
                      className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        location.pathname === link.to
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
                <Link to="/contact" onClick={() => trackEvent("cta_click", { button_text: "Get a Free Quote", location: "header_mobile" })}>
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
