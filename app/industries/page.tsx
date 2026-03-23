import type { Metadata } from "next";
import Industries from "@/views/Industries";

export const metadata: Metadata = {
  title: "Industries We Serve | Web Design by Industry",
  description: "Digital Edge Studio builds websites for tradies, restaurants, healthcare, accountants, real estate agents, lawyers, NDIS providers, and more. See our industry-specific solutions.",
  alternates: { canonical: "https://digitaledgestudio.com/industries" },
};

export default function IndustriesPage() {
  return <Industries />;
}
