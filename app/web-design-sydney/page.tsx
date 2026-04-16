import type { Metadata } from "next";
import WebDesignSydney from "@/views/WebDesignSydney";

export const metadata: Metadata = {
  title: "Web Design Sydney | Reliable Sites for Tradies & Small Business — Digital Edge Studio",
  description: "Sydney web design for tradies and small businesses. Fixed-price builds from $1,200, 95+ PageSpeed, local SEO and Google Business setup included. No lock-in. Free quote.",
  alternates: { canonical: "https://digitaledgestudio.com/web-design-sydney" },
};

export default function WebDesignSydneyPage() {
  return <WebDesignSydney />;
}
