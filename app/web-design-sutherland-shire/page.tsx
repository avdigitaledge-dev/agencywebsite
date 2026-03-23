import type { Metadata } from "next";
import WebDesignSutherlandShire from "@/views/WebDesignSutherlandShire";

export const metadata: Metadata = {
  title: "Web Design Sutherland Shire | Local Business Websites",
  description: "Professional web design for Sutherland Shire businesses. Custom websites, local SEO, and digital marketing. Serving Cronulla, Miranda, Caringbah, and surrounds.",
  alternates: { canonical: "https://digitaledgestudio.com/web-design-sutherland-shire" },
};

export default function WebDesignSutherlandShirePage() {
  return <WebDesignSutherlandShire />;
}
