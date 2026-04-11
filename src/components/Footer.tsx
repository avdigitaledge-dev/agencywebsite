"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/utils";

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
            <Button variant="hero" size="lg" asChild className="shrink-0 transition-all duration-300 hover:shadow-[0_0_30px_hsl(35_92%_55%/0.3)] hover:scale-105">
              <Link href="/contact" onClick={() => trackEvent("cta_click", { button_text: "Get a Free Quote", location: "footer" })}>
                Get a Free Quote
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="space-y-5">
            <Image src="/assets/digitaledge-logo-white.svg" alt="Digital Edge" width={160} height={40} className="h-10 w-auto" />
            <p className="text-white/70 text-sm leading-relaxed">
              Web design and digital marketing for tradies and small businesses in Wollongong, Sydney & NSW.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/company/digitaledgestudio-agency" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn" className="inline-block">
                <Image src="/images/blog/linkedin-icon.webp" alt="LinkedIn" width={32} height={32} className="w-8 h-8 opacity-50 hover:opacity-100 transition-opacity duration-200" />
              </a>
              <a href="https://www.facebook.com/digitaledgestudioau" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" className="inline-block">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white/50 hover:text-white transition-colors duration-200"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/digitaledgestudio.au/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="inline-block">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white/50 hover:text-white transition-colors duration-200"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold font-display text-white text-sm uppercase tracking-wider">Services</h4>
            <nav className="flex flex-col gap-2.5">
              <Link href="/services/web-design" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">Website Design</Link>
              <Link href="/services/ecommerce" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">eCommerce</Link>
              <Link href="/services/seo" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">Local SEO</Link>
              <Link href="/services/aeo-geo" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">AEO & GEO Optimisation</Link>
              <Link href="/ai-services" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">AI Solutions</Link>
              <Link href="/ai-services/lead-response-engine" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">AI Lead Response Engine</Link>
              <Link href="/services/google-ads" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">Google Ads</Link>
              <Link href="/services/digital-marketing" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">Digital Marketing</Link>
              <Link href="/services/website-redesign" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">Website Redesign</Link>
              <Link href="/services/maintenance-hosting" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">Maintenance & Hosting</Link>
              <Link href="/pricing" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">Pricing</Link>
            </nav>
          </div>

          {/* Locations */}
          <div className="space-y-4">
            <h4 className="font-semibold font-display text-white text-sm uppercase tracking-wider">Locations</h4>
            <nav className="flex flex-col gap-2.5">
              <Link href="/web-design-wollongong" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">Web Design Wollongong</Link>
              <Link href="/web-design-sydney" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">Web Design Sydney</Link>
              <Link href="/web-design-illawarra" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">Web Design Illawarra</Link>
              <Link href="/web-design-shellharbour" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">Web Design Shellharbour</Link>
              <Link href="/web-design-nowra" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">Web Design Nowra</Link>
              <Link href="/web-design-sutherland-shire" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">Web Design Sutherland Shire</Link>
              <Link href="/seo-sydney" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">SEO Sydney</Link>
              <Link href="/digital-marketing-sydney" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">Digital Marketing Sydney</Link>
              <Link href="/areas-we-serve" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline font-medium">View All Areas →</Link>
            </nav>
          </div>

          {/* Industries */}
          <div className="space-y-4">
            <h4 className="font-semibold font-display text-white text-sm uppercase tracking-wider">Industries</h4>
            <nav className="flex flex-col gap-2.5">
              <Link href="/web-design-tradies" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">Tradies</Link>
              <Link href="/web-design-restaurants" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">Restaurants</Link>
              <Link href="/web-design-healthcare" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">Healthcare</Link>
              <Link href="/web-design-accountants" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">Accountants</Link>
              <Link href="/web-design-real-estate" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">Real Estate</Link>
              <Link href="/web-design-lawyers" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">Lawyers</Link>
              <Link href="/web-design-dentists" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">Dentists</Link>
              <Link href="/web-design-ndis" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">NDIS Providers</Link>
              <Link href="/web-design-gyms" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">Gyms & Fitness</Link>
              <Link href="/web-design-beauty-salons" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">Beauty Salons</Link>
              <Link href="/web-design-veterinary" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">Veterinary</Link>
              <Link href="/web-design-startups" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">Startups</Link>
              <Link href="/industries" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline font-medium">View All Industries →</Link>
            </nav>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold font-display text-white text-sm uppercase tracking-wider">Company</h4>
            <nav className="flex flex-col gap-2.5">
              <Link href="/about" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">About Us</Link>
              <Link href="/portfolio" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">Our Work</Link>
              <Link href="/reviews" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">Client Reviews</Link>
              <Link href="/blog" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">Blog</Link>
              <Link href="/free-website-review" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">Free Website Review</Link>
              <Link href="/contact" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">Contact</Link>
            </nav>
            <h4 className="font-semibold font-display text-white text-sm uppercase tracking-wider pt-2">Free Tools</h4>
            <nav className="flex flex-col gap-2.5">
              <Link href="/website-cost-calculator" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">Website Cost Calculator</Link>
              <Link href="/free-website-audit" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">Free Website Audit</Link>
              <Link href="/privacy" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">Terms of Service</Link>
            </nav>
            <h4 className="font-semibold font-display text-white text-sm uppercase tracking-wider pt-2">Compare</h4>
            <nav className="flex flex-col gap-2.5">
              <Link href="/vs/wix" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">vs Wix</Link>
              <Link href="/vs/squarespace" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">vs Squarespace</Link>
              <Link href="/vs/wordpress" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">vs WordPress DIY</Link>
              <Link href="/vs/godaddy" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">vs GoDaddy</Link>
              <Link href="/vs/cheap-web-designers" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">vs Cheap Designers</Link>
              <Link href="/vs/natiive" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">vs natiive</Link>
              <Link href="/vs/love-my-online-marketing" className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-underline">vs Love My Online Marketing</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold font-display text-white text-sm uppercase tracking-wider">Get in Touch</h4>
            <address className="not-italic flex flex-col gap-3.5 text-sm text-white/70" itemScope itemType="https://schema.org/LocalBusiness">
              <meta itemProp="name" content="Digital Edge Studio" />
              <meta itemProp="telephone" content="+61419807321" />
              <meta itemProp="email" content="enquiries@digitaledgestudio.com" />
              <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="hidden">
                <meta itemProp="addressLocality" content="Wollongong" />
                <meta itemProp="addressRegion" content="NSW" />
                <meta itemProp="addressCountry" content="AU" />
              </div>
              <a href="tel:+61419807321" onClick={() => trackEvent("phone_click", { location: "footer" })} className="flex items-center gap-2.5 hover:text-white transition-colors duration-200">
                <Phone className="w-4 h-4 shrink-0" />
                0419 807 321
              </a>
              <a href="mailto:enquiries@digitaledgestudio.com" onClick={() => trackEvent("email_click", { location: "footer" })} className="flex items-center gap-2.5 hover:text-white transition-colors duration-200">
                <Mail className="w-4 h-4 shrink-0" />
                enquiries@digitaledgestudio.com
              </a>
              <a href="https://wa.me/61419807321?text=Hi%20Digital%20Edge%20Studio%2C%20I%27m%20interested%20in%20your%20web%20design%20services." target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("whatsapp_click", { location: "footer" })} className="flex items-center gap-2.5 hover:text-white transition-colors duration-200">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chat on WhatsApp
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
          <Link href="/privacy" className="hover:text-white/60 transition-colors duration-200">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
