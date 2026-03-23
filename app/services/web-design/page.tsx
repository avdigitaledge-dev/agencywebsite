import type { Metadata } from "next";
import ServiceWebDesign from "@/views/ServiceWebDesign";

export const metadata: Metadata = {
  title: "Web Design Wollongong | Custom Websites That Convert",
  description: "Professional web design in Wollongong for tradies and small businesses. Custom, mobile-responsive websites built to generate leads. From $1,200 AUD. Free quote.",
  alternates: { canonical: "https://digitaledgestudio.com/services/web-design" },
};

export default function WebDesignServicePage() {
  return <ServiceWebDesign />;
}
