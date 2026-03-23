import type { Metadata } from "next";
import WebDesignStartups from "@/views/WebDesignStartups";

export const metadata: Metadata = {
  title: "Startup Website Design Sydney | MVP Sites & Landing Pages",
  description: "Website design for startups in Sydney. Launch fast with conversion-focused landing pages, MVP sites, and scalable web apps. From pitch to product. From $1,200.",
  alternates: { canonical: "https://digitaledgestudio.com/web-design-startups" },
};

export default function WebDesignStartupsPage() {
  return <WebDesignStartups />;
}
