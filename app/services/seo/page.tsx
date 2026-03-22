import type { Metadata } from "next";
import ServiceSEO from "@/views/ServiceSEO";

export const metadata: Metadata = {
  title: "Local SEO Services — Rank Higher on Google",
  description: "Local SEO services for businesses in Wollongong, Sydney, and NSW. Google Business Profile optimisation, keyword targeting, and monthly reporting. From $1,000/month.",
  alternates: { canonical: "https://digitaledgestudio.com/services/seo" },
};

export default function SEOServicePage() {
  return <ServiceSEO />;
}
