import type { Metadata } from "next";
import GymMarketingSydney from "@/views/GymMarketingSydney";

export const metadata: Metadata = {
  title:
    "Gym Marketing Sydney | Local SEO + Google Ads for Sydney Gyms | Digital Edge Studio",
  description:
    "Sydney gym marketing that fills trial slots. Local Pack rankings, Google Ads built for Sydney suburbs, and landing pages that convert. No lock-in. Book a free audit.",
  alternates: {
    canonical: "https://digitaledgestudio.com/gym-marketing-sydney",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Gym Marketing Sydney — Local SEO + Google Ads for Sydney Gyms",
    description:
      "More members for your Sydney gym or PT studio. Local 3-pack rankings, conversion-tracked Google Ads, and landing pages that convert cold traffic.",
    url: "https://digitaledgestudio.com/gym-marketing-sydney",
    type: "website",
  },
};

export default function GymMarketingSydneyPage() {
  return <GymMarketingSydney />;
}
