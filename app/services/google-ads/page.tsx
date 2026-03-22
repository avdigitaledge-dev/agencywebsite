import type { Metadata } from "next";
import ServiceGoogleAds from "@/views/ServiceGoogleAds";

export const metadata: Metadata = {
  title: "Google Ads Management — Get Instant Leads",
  description: "Google Ads management for businesses in Wollongong, Sydney, and NSW. Transparent pricing at $800/month + 15% ad spend. No lock-in contracts.",
  alternates: { canonical: "https://digitaledgestudio.com/services/google-ads" },
};

export default function GoogleAdsServicePage() {
  return <ServiceGoogleAds />;
}
