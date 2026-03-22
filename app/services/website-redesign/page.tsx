import type { Metadata } from "next";
import ServiceWebsiteRedesign from "@/views/ServiceWebsiteRedesign";

export const metadata: Metadata = {
  title: "Website Redesign Services | Modernise Your Site | Digital Edge Studio",
  description: "Is your website outdated, slow, or not generating leads? Digital Edge Studio redesigns websites for Wollongong and Sydney businesses. Before & after results. Free audit.",
  alternates: { canonical: "https://digitaledgestudio.com/services/website-redesign" },
};

export default function WebsiteRedesignServicePage() {
  return <ServiceWebsiteRedesign />;
}
