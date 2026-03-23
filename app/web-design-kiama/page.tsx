import type { Metadata } from "next";
import WebDesignKiama from "@/views/WebDesignKiama";

export const metadata: Metadata = {
  title: "Web Design Kiama | Websites for Local Businesses",
  description: "Website design for Kiama businesses. Custom, mobile-friendly websites with local SEO by Digital Edge Studio. Serving Kiama, Gerringong, and the South Coast.",
  alternates: { canonical: "https://digitaledgestudio.com/web-design-kiama" },
};

export default function WebDesignKiamaPage() {
  return <WebDesignKiama />;
}
