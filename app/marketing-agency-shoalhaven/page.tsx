import type { Metadata } from "next";
import MarketingAgencyShoalhaven from "@/views/MarketingAgencyShoalhaven";

export const metadata: Metadata = {
  title: "Digital Marketing Agency Shoalhaven | SEO & Google Ads | Digital Edge Studio",
  description: "Full-service digital marketing for Shoalhaven businesses. Local SEO, Google Ads, social media, and web design. Serving Nowra, Berry, and the South Coast.",
  alternates: { canonical: "https://digitaledgestudio.com/marketing-agency-shoalhaven" },
};

export default function MarketingAgencyShoalhavenPage() {
  return <MarketingAgencyShoalhaven />;
}
