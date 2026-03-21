import type { Metadata } from "next";
import WebDesignIllawarra from "@/views/WebDesignIllawarra";

export const metadata: Metadata = {
  title: "Web Design Illawarra | Wollongong, Shellharbour & Nowra",
  description: "Professional web design for Illawarra businesses — Wollongong, Shellharbour, Nowra, Kiama and surrounding areas. Local SEO and digital marketing. Get a free quote.",
  alternates: { canonical: "https://digitaledgestudio.com/web-design-illawarra" },
};

export default function WebDesignIllawarraPage() {
  return <WebDesignIllawarra />;
}
