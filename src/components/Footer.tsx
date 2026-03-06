import { Link } from "react-router-dom";
import { MapPin, Mail, Calendar } from "lucide-react";
import logoWhite from "@/assets/digitaledge-logo-white.svg";

const Footer = () => {
  return (
    <footer className="gradient-hero text-primary-foreground">
      <div className="container-tight px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logoWhite} alt="Digital Edge" className="h-10 w-auto" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Web design and digital marketing for tradies and small businesses in Wollongong, Sydney & NSW. We build professional websites and run local SEO campaigns that get you more leads and customers.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold font-display">Services</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/services" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Website Design & Development</Link>
              <Link to="/services" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Local SEO</Link>
              <Link to="/services" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Website Maintenance & Hosting</Link>
              <Link to="/pricing" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Pricing</Link>
            </nav>
          </div>

          {/* Locations */}
          <div className="space-y-4">
            <h4 className="font-semibold font-display">Locations</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/web-design-wollongong" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Web Design Wollongong</Link>
              <Link to="/web-design-sydney" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Web Design Sydney</Link>
              <Link to="/web-design-illawarra" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Web Design Illawarra</Link>
              <Link to="/web-design-tradies" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Web Design for Tradies</Link>
              <Link to="/web-design-healthcare" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Healthcare Web Design</Link>
            </nav>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold font-display">Company</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/about" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">About Us</Link>
              <Link to="/blog" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Blog</Link>
              <Link to="/contact" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Contact</Link>
              <Link to="/privacy" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Privacy Policy</Link>
            </nav>
          </div>

          {/* Contact / NAP */}
          <div className="space-y-4">
            <h4 className="font-semibold font-display">Get in Touch</h4>
            <address className="not-italic flex flex-col gap-3 text-sm text-primary-foreground/70">
              <Link to="/contact" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Calendar className="w-4 h-4 shrink-0" />
                Book a Consultation
              </Link>
              <a href="mailto:enquiries@digitaledgestudio.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4 shrink-0" />
                enquiries@digitaledgestudio.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  <span className="block font-medium text-primary-foreground/80">Digital Edge Studio</span>
                  Wollongong, NSW, Australia
                </span>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Digital Edge. All rights reserved.</p>
          <Link to="/privacy" className="hover:text-primary-foreground/70 transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
