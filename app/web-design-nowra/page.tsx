import type { Metadata } from "next";
import WebDesignNowra from "@/views/WebDesignNowra";

export const metadata: Metadata = {
  title: "Web Design Nowra | Shoalhaven Websites & Local SEO | Digital Edge Studio",
  description: "Website design for Nowra and Shoalhaven businesses. Fast, mobile-friendly sites with local SEO and Google Ads. Digital Edge Studio — serving the South Coast.",
  alternates: { canonical: "https://digitaledgestudio.com/web-design-nowra" },
};

export default function WebDesignNowraPage() {
  return <WebDesignNowra />;
}
