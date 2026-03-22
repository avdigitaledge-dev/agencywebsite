import type { Metadata } from "next";
import ServiceWebDesign from "@/views/ServiceWebDesign";

export const metadata: Metadata = {
  title: "Website Design & Development — Custom Sites That Convert",
  description: "Professional website design for tradies and small businesses in Wollongong, Sydney, and NSW. Custom, mobile-responsive sites built to generate leads. From $1,200 AUD.",
  alternates: { canonical: "https://digitaledgestudio.com/services/web-design" },
};

export default function WebDesignServicePage() {
  return <ServiceWebDesign />;
}
