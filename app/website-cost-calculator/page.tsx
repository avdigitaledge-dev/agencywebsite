import type { Metadata } from "next";
import WebsiteCostCalculator from "@/views/WebsiteCostCalculator";

export const metadata: Metadata = {
  title: "Free Website Cost Calculator | Instant Estimate",
  description: "Find out how much a professional website costs for your business. Get an instant estimate tailored to your industry, features, and goals. Free, no obligation.",
  alternates: { canonical: "https://digitaledgestudio.com/website-cost-calculator" },
};

export default function WebsiteCostCalculatorPage() {
  return <WebsiteCostCalculator />;
}
