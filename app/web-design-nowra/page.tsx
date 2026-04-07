import type { Metadata } from "next";
import WebDesignNowra from "@/views/WebDesignNowra";

export const metadata: Metadata = {
  title: "Web Design Nowra | Fast Websites & Local SEO — Digital Edge Studio",
  description: "Custom web design for Nowra & Shoalhaven businesses. Ultra-fast sites that outperform WordPress, built for Google rankings and real leads. Free quote — no lock-in contracts.",
  alternates: { canonical: "https://digitaledgestudio.com/web-design-nowra" },
};

export default function WebDesignNowraPage() {
  return <WebDesignNowra />;
}
