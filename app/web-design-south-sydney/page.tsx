import type { Metadata } from "next";
import WebDesignSouthSydney from "@/views/WebDesignSouthSydney";

export const metadata: Metadata = {
  title: "Web Design South Sydney | Local Business Websites",
  description: "Website design for South Sydney businesses. Custom sites, local SEO, and digital marketing for Hurstville, Kogarah, Rockdale, and surrounds.",
  alternates: { canonical: "https://digitaledgestudio.com/web-design-south-sydney" },
};

export default function WebDesignSouthSydneyPage() {
  return <WebDesignSouthSydney />;
}
