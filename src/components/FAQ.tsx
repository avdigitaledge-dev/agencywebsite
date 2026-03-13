import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
  title?: string;
}

export const FAQ = ({ faqs, title = "Frequently Asked Questions" }: FAQProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-background">
      <div className="container-tight max-w-3xl">
        <h2 className="heading-section text-foreground mb-12 text-center">{title}</h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = expandedIndex === index;
            return (
              <div
                key={index}
                className={`bg-card rounded-xl border overflow-hidden transition-all duration-300 ${
                  isOpen ? "border-accent/30 shadow-md" : "border-border hover:border-accent/20"
                }`}
              >
                <button
                  onClick={() => setExpandedIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center gap-4 text-left group"
                >
                  <span className="text-accent/40 font-display font-bold text-sm tabular-nums w-6 flex-shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-semibold text-foreground flex-1">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-accent transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pl-16">
                        <div className="border-l-2 border-accent/20 pl-4">
                          <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* FAQ Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </div>
    </section>
  );
};
