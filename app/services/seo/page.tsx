import type { Metadata } from "next";
import ServiceSEO from "@/views/ServiceSEO";

export const metadata: Metadata = {
  title: "Local SEO Services Wollongong | Rank Higher on Google | Digital Edge Studio",
  description: "Local SEO services in Wollongong, Sydney, and NSW. Google Business Profile optimisation, keyword targeting, and monthly reporting. From $1,000/month. Free audit.",
  alternates: { canonical: "https://digitaledgestudio.com/services/seo" },
};

export default function SEOServicePage() {
  return <ServiceSEO />;
}
