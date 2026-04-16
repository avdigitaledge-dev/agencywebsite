import type { Metadata } from "next";
import WebDesignWesternSydney from "@/views/WebDesignWesternSydney";

export const metadata: Metadata = {
  title: "Web Design Western Sydney | Reliable Business Websites",
  description: "Fixed-price web design for Western Sydney businesses. Custom-built, fast-loading sites with local SEO and Google Ads. Serving Parramatta, Penrith, Liverpool, and beyond.",
  alternates: { canonical: "https://digitaledgestudio.com/web-design-western-sydney" },
};

export default function WebDesignWesternSydneyPage() {
  return <WebDesignWesternSydney />;
}
