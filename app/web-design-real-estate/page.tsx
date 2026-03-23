import type { Metadata } from "next";
import WebDesignRealEstate from "@/views/WebDesignRealEstate";

export const metadata: Metadata = {
  title: "Real Estate Website Design Sydney | Listings, IDX & Lead Generation",
  description: "Professional website design for real estate agents in Sydney. Property listings, lead capture, IDX integration, and local SEO to generate more vendor and buyer enquiries.",
  alternates: { canonical: "https://digitaledgestudio.com/web-design-real-estate" },
};

export default function WebDesignRealEstatePage() {
  return <WebDesignRealEstate />;
}
