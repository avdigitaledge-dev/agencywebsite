import type { Metadata } from "next";
import SeoWollongong from "@/views/SeoWollongong";

export const metadata: Metadata = {
  title: "SEO Wollongong | Rank Higher on Google (Local SEO Specialist)",
  description: "Wollongong SEO services for tradies and small businesses. Local SEO, Google Business Profile optimisation, technical audits. Get found when customers search near you.",
  alternates: { canonical: "https://digitaledgestudio.com/seo-wollongong" },
};

export default function SeoWollongongPage() {
  return <SeoWollongong />;
}
