import type { Metadata } from "next";
import Pricing from "@/views/Pricing";

export const metadata: Metadata = {
  title: "Web Design Pricing Wollongong | Transparent Packages",
  description: "Transparent web design and digital marketing pricing for Wollongong small businesses. No hidden fees. Starter websites from $1,200, SEO from $1,000/mo.",
  alternates: { canonical: "https://digitaledgestudio.com/pricing" },
};

export default function PricingPage() {
  return <Pricing />;
}
