import type { Metadata } from "next";
import WebDesignCentralCoast from "@/views/WebDesignCentralCoast";

export const metadata: Metadata = {
  title: "Web Design Central Coast | Local Website Designer",
  description: "Fixed-price web design for Central Coast businesses. Custom websites, local SEO, and digital marketing for small businesses and tradies in Gosford, Wyong & the Central Coast NSW.",
  alternates: { canonical: "https://digitaledgestudio.com/web-design-central-coast" },
};

export default function WebDesignCentralCoastPage() {
  return <WebDesignCentralCoast />;
}
