import type { Metadata } from "next";
import CompareWix from "@/views/CompareWix";

export const metadata: Metadata = {
  title: "Professional Web Design vs Wix",
  description: "Comparing Wix with professional web design for Australian small businesses. See why a custom website delivers better SEO, speed, and conversions than a Wix template.",
  alternates: { canonical: "https://digitaledgestudio.com/vs/wix" },
};

export default function CompareWixPage() {
  return <CompareWix />;
}
