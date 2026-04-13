import type { Metadata } from "next";
import DigitalMarketingWollongong from "@/views/DigitalMarketingWollongong";

export const metadata: Metadata = {
  title: "Digital Marketing Wollongong | Google Ads, Social & Content",
  description: "Full-service digital marketing agency in Wollongong — Google Ads, Facebook & Instagram ads, social content, and email campaigns. Free strategy call.",
  alternates: { canonical: "https://digitaledgestudio.com/digital-marketing-wollongong" },
};

export default function DigitalMarketingWollongongPage() {
  return <DigitalMarketingWollongong />;
}
