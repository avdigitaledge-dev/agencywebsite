import type { Metadata } from "next";
import WebDesignWesternSydney from "@/views/WebDesignWesternSydney";

export const metadata: Metadata = {
  title: "Web Design Western Sydney | Affordable Business Websites",
  description: "Website design for Western Sydney businesses. Custom, affordable websites with local SEO and Google Ads. Serving Parramatta, Penrith, Liverpool, and beyond.",
  alternates: { canonical: "https://digitaledgestudio.com/web-design-western-sydney" },
};

export default function WebDesignWesternSydneyPage() {
  return <WebDesignWesternSydney />;
}
