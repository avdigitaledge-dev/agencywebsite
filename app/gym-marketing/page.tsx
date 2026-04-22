import type { Metadata } from "next";
import GymMarketing from "@/views/GymMarketing";

export const metadata: Metadata = {
  title:
    "Gym Marketing — Local SEO + Google Ads for Australian Gyms | Digital Edge Studio",
  description:
    "Done-for-you local SEO and Google Ads for independent gyms, PT studios, CrossFit and F45 in Australia. $2,500/month, 3-month minimum. Book a 30-min call.",
  alternates: { canonical: "https://digitaledgestudio.com/gym-marketing" },
  robots: { index: true, follow: true },
  openGraph: {
    title:
      "Gym Marketing — Local SEO + Google Ads for Australian Gyms",
    description:
      "More members for your gym, without guessing at marketing. $2,500/month, 3-month minimum.",
    url: "https://digitaledgestudio.com/gym-marketing",
    type: "website",
  },
};

export default function GymMarketingPage() {
  return <GymMarketing />;
}
