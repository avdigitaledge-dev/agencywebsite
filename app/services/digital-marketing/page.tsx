import type { Metadata } from "next";
import ServiceDigitalMarketing from "@/views/ServiceDigitalMarketing";

export const metadata: Metadata = {
  title: "Digital Marketing Services | SEO, Ads & Social Media",
  description: "Full-service digital marketing for tradies and small businesses. SEO, Google Ads, social media marketing, and content strategy. Transparent pricing, no lock-ins.",
  alternates: { canonical: "https://digitaledgestudio.com/services/digital-marketing" },
};

export default function DigitalMarketingServicePage() {
  return <ServiceDigitalMarketing />;
}
