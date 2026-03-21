"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { trackEvent } from "@/lib/utils";

const WHATSAPP_URL =
  "https://wa.me/61401871071?text=Hi%2C%20I%20saw%20your%20website%20packages.%20Can%20I%20get%20a%20quote%20for%20web%20design%2C%20SEO%2C%20or%20PPC%20services%3F";

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  // Auto-open after 30s (once per session)
  useEffect(() => {
    if (sessionStorage.getItem("whatsappAutoShown")) return;
    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem("whatsappAutoShown", "true");
    }, 30000);
    return () => clearTimeout(timer);
  }, []);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const timer = setTimeout(() => document.addEventListener("mousedown", handleClick), 0);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mousedown", handleClick);
    };
  }, [isOpen]);

  const handleStartChat = () => {
    trackEvent("whatsapp_click", { location: "chat_widget" });
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50" ref={popupRef}>
      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
            style={{ transformOrigin: "bottom right" }}
            className="absolute bottom-16 right-0 w-[340px] max-w-[calc(100vw-3rem)] rounded-2xl shadow-2xl overflow-hidden border border-border"
          >
            {/* Header — site accent gradient */}
            <div className="gradient-hero px-5 py-4 flex items-center gap-3">
              <Image
                src="/images/blog/whatsapp-icon.png"
                alt="WhatsApp"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-contain"
              />
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-sm truncate">Digital Edge Studio</p>
                <p className="text-white/70 text-xs">Typically replies within an hour</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors p-1"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="px-4 py-5 min-h-[140px] bg-muted/50">
              {/* Message bubble */}
              <div className="relative bg-card rounded-lg rounded-tl-none shadow-sm px-3 py-2.5 max-w-[85%] border border-border">
                <p className="text-foreground text-sm leading-relaxed">
                  Hi there! Thanks for visiting Digital Edge Studio. How can we help you today?
                  Whether you need a new website, SEO, or just have a question — we're here to chat!
                </p>
                <p className="text-[10px] text-muted-foreground text-right mt-1">Digital Edge Studio</p>
              </div>
            </div>

            {/* Footer / CTA */}
            <div className="bg-card px-4 py-3 border-t border-border">
              <button
                onClick={handleStartChat}
                className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-sm"
              >
                <Image src="/images/blog/whatsapp-icon.png" alt="" width={20} height={20} className="w-5 h-5" />
                Start Chat
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Bubble */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative w-14 h-14 bg-accent hover:bg-accent/90 text-white rounded-full shadow-lg flex items-center justify-center transition-colors group"
        aria-label="Chat with us on WhatsApp"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-20 pointer-events-none" />
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6" />
            </motion.span>
          ) : (
            <motion.span
              key="wa"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Image src="/images/blog/whatsapp-icon.png" alt="WhatsApp" width={28} height={28} className="w-7 h-7" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
};

export { WHATSAPP_URL };
export default WhatsAppWidget;
