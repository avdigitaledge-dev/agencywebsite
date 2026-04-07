import type { Metadata } from "next";
import WebDesignSydney from "@/views/WebDesignSydney";

export const metadata: Metadata = {
  title: "Affordable Web Design Sydney | Websites from $1,200 — Digital Edge Studio",
  description: "Sydney web design from $1,200 — no lock-in contracts. Custom-built sites with 95+ PageSpeed scores, local SEO, and Google Business setup included. Free quote.",
  alternates: { canonical: "https://digitaledgestudio.com/web-design-sydney" },
};

export default function WebDesignSydneyPage() {
  return <WebDesignSydney />;
}
