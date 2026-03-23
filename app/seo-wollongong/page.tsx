import type { Metadata } from "next";
import SeoWollongong from "@/views/SeoWollongong";

export const metadata: Metadata = {
  title: "SEO Services Wollongong | Local SEO & Google Rankings",
  description: "Expert SEO services in Wollongong. Local SEO, technical audits, content strategy, and Google Business optimisation. Get found on Google. Free SEO audit.",
  alternates: { canonical: "https://digitaledgestudio.com/seo-wollongong" },
};

export default function SeoWollongongPage() {
  return <SeoWollongong />;
}
