import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= 0 && !sessionStorage.getItem("exitIntentShown")) {
      setShow(true);
      sessionStorage.setItem("exitIntentShown", "true");
    }
  }, []);

  useEffect(() => {
    // Only add listener after a 5-second delay to avoid showing on quick visits
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseLeave]);

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
                  Before You Go...
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Get a free, no-obligation review of your website. We'll show you exactly what's working, what's not, and how to get more leads.
                </p>

                <ul className="text-left space-y-2 mb-6">
                  {[
                    "SEO & Google ranking check",
                    "Mobile performance review",
                    "Conversion opportunities identified",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button variant="cta" size="lg" className="w-full" asChild>
                  <Link to="/free-website-review" onClick={() => setShow(false)}>
                    Get My Free Review
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
