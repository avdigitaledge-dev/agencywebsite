import type { Metadata } from "next";
import WebDesignSouthCoast from "@/views/WebDesignSouthCoast";

export const metadata: Metadata = {
  title: "Web Design South Coast NSW | Shoalhaven & Beyond",
  description: "Website design for South Coast NSW businesses. Serving Nowra, Berry, Shoalhaven, Ulladulla, and beyond. Local SEO, Google Ads, and custom web design.",
  alternates: { canonical: "https://digitaledgestudio.com/web-design-south-coast" },
};

export default function WebDesignSouthCoastPage() {
  return <WebDesignSouthCoast />;
}
