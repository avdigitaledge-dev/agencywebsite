import type { Metadata } from "next";
import WebDesignThirroul from "@/views/WebDesignThirroul";

export const metadata: Metadata = {
  title: "Web Design Thirroul | Local Websites & SEO | Digital Edge Studio",
  description: "Website design for Thirroul businesses. Custom sites with local SEO from Digital Edge Studio, based just down the road in Wollongong.",
  alternates: { canonical: "https://digitaledgestudio.com/web-design-thirroul" },
};

export default function WebDesignThirroulPage() {
  return <WebDesignThirroul />;
}
