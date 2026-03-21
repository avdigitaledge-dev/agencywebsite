import type { Metadata } from "next";
import WebDesignWollongong from "@/views/WebDesignWollongong";

export const metadata: Metadata = {
  title: "Web Design Wollongong | Website Designer & Local SEO | Digital Edge Studio",
  description: "Professional web design in Wollongong. Affordable, custom websites for tradies and small businesses. Local SEO, Google Ads, and website maintenance. Get a free quote today.",
  alternates: { canonical: "https://digitaledgestudio.com/web-design-wollongong" },
};

export default function WebDesignWollongongPage() {
  return <WebDesignWollongong />;
}
