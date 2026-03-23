import type { Metadata } from "next";
import SeoSydney from "@/views/SeoSydney";

export const metadata: Metadata = {
  title: "SEO Services Sydney | Local & Technical SEO | Digital Edge Studio",
  description: "Expert SEO services in Sydney. Local SEO, technical audits, content strategy, and Google Business optimisation to help Sydney businesses rank higher on Google.",
  alternates: { canonical: "https://digitaledgestudio.com/seo-sydney" },
};

export default function SeoSydneyPage() {
  return <SeoSydney />;
}
