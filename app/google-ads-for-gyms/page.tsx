import type { Metadata } from "next";
import GoogleAdsForGyms from "@/views/GoogleAdsForGyms";

export const metadata: Metadata = {
  title:
    "Google Ads for Gyms | Fill Trial Slots, Not Just Clicks | Digital Edge Studio",
  description:
    "Google Ads management built for independent Australian gyms. Conversion-tracked trials, landing pages that convert cold traffic, no lock-in. Book a free audit.",
  alternates: {
    canonical: "https://digitaledgestudio.com/google-ads-for-gyms",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Google Ads for Gyms — Fill Trial Slots, Not Just Clicks",
    description:
      "Conversion-tracked Google Ads for Australian gyms. No lock-in. Book a free 30-min audit.",
    url: "https://digitaledgestudio.com/google-ads-for-gyms",
    type: "website",
  },
};

export default function GoogleAdsForGymsPage() {
  return <GoogleAdsForGyms />;
}
