import type { Metadata } from "next";
import Services from "@/views/Services";

export const metadata: Metadata = {
  title: "Web Design & Digital Marketing Services",
  description: "Professional web design, local SEO, Google Ads, and digital marketing services for tradies and small businesses in Wollongong, Sydney, and NSW.",
  alternates: { canonical: "https://digitaledgestudio.com/services" },
};

export default function ServicesPage() {
  return <Services />;
}
