import type { Metadata } from "next";
import WebDesignCampbelltown from "@/views/WebDesignCampbelltown";

export const metadata: Metadata = {
  title: "Web Design Campbelltown | Affordable Website Designer",
  description: "Professional web design for Campbelltown businesses. Custom websites, local SEO, and digital marketing for small businesses and tradies in Campbelltown, Camden & Macarthur NSW.",
  alternates: { canonical: "https://digitaledgestudio.com/web-design-campbelltown" },
};

export default function WebDesignCampbelltownPage() {
  return <WebDesignCampbelltown />;
}
