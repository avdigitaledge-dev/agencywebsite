import type { Metadata } from "next";
import WebDesignSydney from "@/views/WebDesignSydney";

export const metadata: Metadata = {
  title: "Web Design Sydney | Affordable Website Designer | Digital Edge Studio",
  description: "Professional web design for Sydney businesses. Custom websites, local SEO, and Google Ads for small businesses and tradies across Sydney, Western Sydney & Sutherland Shire.",
  alternates: { canonical: "https://digitaledgestudio.com/web-design-sydney" },
};

export default function WebDesignSydneyPage() {
  return <WebDesignSydney />;
}
