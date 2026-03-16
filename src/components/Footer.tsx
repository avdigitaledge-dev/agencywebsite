import { Link } from "react-router-dom";
import { MapPin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/utils";
import logoWhite from "@/assets/digitaledge-logo-white.svg";

const Footer = () => {
  return (
    <footer className="gradient-hero relative overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[hsl(217_76%_48%/0.06)] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[hsl(250_70%_50%/0.04)] rounded-full blur-[100px]" />
      </div>

      <div className="container-tight px-4 relative z-10">
        {/* CTA strip */}
        <div className="py-12 border-b border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white font-display tracking-tight">
                Ready to grow your business online?
              </h3>
              <p className="text-white/60 mt-1">Get a free, no-obligation quote today.</p>
            </div>
            <Button variant="hero" size="lg" asChild className="shrink-0">
              <Link to="/contact" onClick={() => trackEvent("cta_click", { button_text: "Get a Free Quote", location: "footer" })}>
                Get a Free Quote
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="space-y-5">
            <img src={logoWhite} alt="Digital Edge" className="h-10 w-auto" />
            <p className="text-white/55 text-sm leading-relaxed">
              Web design and digital marketing for tradies and small businesses in Wollongong, Sydney & NSW.
            </p>
            <a href="https://www.linkedin.com/company/digitaledgestudio-agency" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn" className="inline-block">
              <img src="/images/blog/linkedin-icon.png" alt="LinkedIn" className="w-8 h-8 opacity-50 hover:opacity-100 transition-opacity duration-200" />
            </a>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold font-display text-white text-sm uppercase tracking-wider">Services</h4>
            <nav className="flex flex-col gap-2.5">
              <Link to="/services" className="text-sm text-white/55 hover:text-white transition-colors duration-200 link-underline">Website Design & Development</Link>
              <Link to="/services#seo" className="text-sm text-white/55 hover:text-white transition-colors duration-200 link-underline">Local SEO</Link>
              <Link to="/services/aeo-geo" className="text-sm text-white/55 hover:text-white transition-colors duration-200 link-underline">AEO & GEO Optimisation</Link>
              <Link to="/services#marketing" className="text-sm text-white/55 hover:text-white transition-colors duration-200 link-underline">Google Ads Management</Link>
              <Link to="/pricing" className="text-sm text-white/55 hover:text-white transition-colors duration-200 link-underline">Pricing</Link>
            </nav>
          </div>

          {/* Locations */}
          <div className="space-y-4">
            <h4 className="font-semibold font-display text-white text-sm uppercase tracking-wider">Locations</h4>
            <nav className="flex flex-col gap-2.5">
              <Link to="/web-design-wollongong" className="text-sm text-white/55 hover:text-white transition-colors duration-200 link-underline">Web Design Wollongong</Link>
              <Link to="/web-design-sydney" className="text-sm text-white/55 hover:text-white transition-colors duration-200 link-underline">Web Design Sydney</Link>
              <Link to="/web-design-illawarra" className="text-sm text-white/55 hover:text-white transition-colors duration-200 link-underline">Web Design Illawarra</Link>
              <Link to="/web-design-tradies" className="text-sm text-white/55 hover:text-white transition-colors duration-200 link-underline">Web Design for Tradies</Link>
              <Link to="/web-design-healthcare" className="text-sm text-white/55 hover:text-white transition-colors duration-200 link-underline">Healthcare Web Design</Link>
            </nav>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold font-display text-white text-sm uppercase tracking-wider">Company</h4>
            <nav className="flex flex-col gap-2.5">
              <Link to="/about" className="text-sm text-white/55 hover:text-white transition-colors duration-200 link-underline">About Us</Link>
              <Link to="/portfolio" className="text-sm text-white/55 hover:text-white transition-colors duration-200 link-underline">Our Work</Link>
              <Link to="/blog" className="text-sm text-white/55 hover:text-white transition-colors duration-200 link-underline">Blog</Link>
              <Link to="/free-website-review" className="text-sm text-white/55 hover:text-white transition-colors duration-200 link-underline">Free Website Review</Link>
              <Link to="/contact" className="text-sm text-white/55 hover:text-white transition-colors duration-200 link-underline">Contact</Link>
              <Link to="/privacy" className="text-sm text-white/55 hover:text-white transition-colors duration-200 link-underline">Privacy Policy</Link>
            </nav>
            <h4 className="font-semibold font-display text-white text-sm uppercase tracking-wider pt-2">Compare</h4>
            <nav className="flex flex-col gap-2.5">
              <Link to="/vs/wix" className="text-sm text-white/55 hover:text-white transition-colors duration-200 link-underline">vs Wix</Link>
              <Link to="/vs/squarespace" className="text-sm text-white/55 hover:text-white transition-colors duration-200 link-underline">vs Squarespace</Link>
              <Link to="/vs/cheap-web-designers" className="text-sm text-white/55 hover:text-white transition-colors duration-200 link-underline">vs Cheap Designers</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold font-display text-white text-sm uppercase tracking-wider">Get in Touch</h4>
            <address className="not-italic flex flex-col gap-3.5 text-sm text-white/55">
              <a href="mailto:enquiries@digitaledgestudio.com" onClick={() => trackEvent("email_click", { location: "footer" })} className="flex items-center gap-2.5 hover:text-white transition-colors duration-200">
                <Mail className="w-4 h-4 shrink-0" />
                enquiries@digitaledgestudio.com
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  <span className="block font-medium text-white/70">Digital Edge Studio</span>
                  Wollongong, NSW, Australia
                </span>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} Digital Edge Studio. All rights reserved.</p>
          <Link to="/privacy" className="hover:text-white/60 transition-colors duration-200">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
