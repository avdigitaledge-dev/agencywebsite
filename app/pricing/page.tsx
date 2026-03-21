import type { Metadata } from "next";
import Pricing from "@/views/Pricing";

export const metadata: Metadata = {
  title: "Web Design Pricing Wollongong | Transparent Packages | Digital Edge Studio",
  description: "Transparent web design and digital marketing pricing for Wollongong small businesses. No hidden fees. Starter websites from $1,200, SEO from $499/mo.",
  alternates: { canonical: "https://digitaledgestudio.com/pricing" },
};

export default function PricingPage() {
  return <Pricing />;
}
