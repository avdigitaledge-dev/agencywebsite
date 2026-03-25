import type { Metadata } from "next";
import CompareLoveMyOnlineMarketing from "@/views/CompareLoveMyOnlineMarketing";

export const metadata: Metadata = {
  title: "Professional Web Design vs Love My Online Marketing — Wollongong Comparison",
  description: "Honest comparison of Digital Edge Studio and Love My Online Marketing for web design in Wollongong. Pricing, services, and which is right for your business.",
  alternates: { canonical: "https://digitaledgestudio.com/vs/love-my-online-marketing" },
};

export default function CompareLoveMyOnlineMarketingPage() {
  return <CompareLoveMyOnlineMarketing />;
}
