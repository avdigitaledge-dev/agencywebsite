import type { Metadata } from "next";
import DigitalMarketingSydney from "@/views/DigitalMarketingSydney";

export const metadata: Metadata = {
  title: "Digital Marketing Agency Sydney | SEO, Ads & Social Media",
  description: "Full-service digital marketing agency in Sydney. SEO, Google Ads, social media, and content marketing. Transparent pricing, no lock-in contracts. Free strategy session.",
  alternates: { canonical: "https://digitaledgestudio.com/digital-marketing-sydney" },
};

export default function DigitalMarketingSydneyPage() {
  return <DigitalMarketingSydney />;
}
