import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-border overflow-hidden"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-accent/5 transition-colors text-left"
              >
                <span className="font-semibold text-foreground">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-accent transition-transform ${
                    expandedIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {expandedIndex === index && (
                <div className="px-6 py-4 border-t border-border bg-background/50">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
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
