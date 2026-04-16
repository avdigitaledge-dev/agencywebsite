"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  /** Optional headline — defaults to a generic lead-gen line */
  heading?: string;
  /** Optional supporting paragraph */
  subheading?: string;
  /** Context word inserted into the default heading e.g. "your Wollongong business" */
  location?: string;
  className?: string;
};

const BottomFunnelCTA = ({
  heading,
  subheading,
  location,
  className = "",
}: Props) => {
  const resolvedHeading =
    heading ??
    (location
      ? `Ready to get more leads for ${location}?`
      : "Ready to get more leads from your website?");

  const resolvedSub =
    subheading ??
    "Free 15-minute discovery call. Straight-talking advice, fixed-price quote, no lock-in contracts.";

  return (
    <section className={`bg-muted py-14 md:py-20 ${className}`}>
      <div className="container-tight px-4 text-center">
        <h2 className="heading-section text-foreground mb-4">{resolvedHeading}</h2>
        <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          {resolvedSub}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">
              Book a Free Discovery Call <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/pricing">See Our Pricing</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BottomFunnelCTA;
