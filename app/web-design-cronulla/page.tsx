import type { Metadata } from "next";
import WebDesignCronulla from "@/views/WebDesignCronulla";

export const metadata: Metadata = {
  title: "Web Design Cronulla | Websites for Shire Businesses | Digital Edge Studio",
  description: "Website design for Cronulla and Sutherland Shire businesses. Custom sites with local SEO and Google Ads. Fast, mobile-friendly, built to convert.",
  alternates: { canonical: "https://digitaledgestudio.com/web-design-cronulla" },
};

export default function WebDesignCronullaPage() {
  return <WebDesignCronulla />;
}
