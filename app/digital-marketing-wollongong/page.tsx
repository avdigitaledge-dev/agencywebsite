import type { Metadata } from "next";
import DigitalMarketingWollongong from "@/views/DigitalMarketingWollongong";

export const metadata: Metadata = {
  title: "Digital Marketing Wollongong | SEO, Google Ads & Social Media",
  description: "Full-service digital marketing in Wollongong. SEO, Google Ads, social media, and content marketing by Digital Edge Studio. Free strategy session.",
  alternates: { canonical: "https://digitaledgestudio.com/digital-marketing-wollongong" },
};

export default function DigitalMarketingWollongongPage() {
  return <DigitalMarketingWollongong />;
}
