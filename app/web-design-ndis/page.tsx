import type { Metadata } from "next";
import WebDesignNdis from "@/views/WebDesignNdis";

export const metadata: Metadata = {
  title: "NDIS Provider Website Design | Accessible & Compliant",
  description: "Website design for NDIS providers and disability service organisations. WCAG-accessible, trust-building websites that help participants find and choose your services.",
  alternates: { canonical: "https://digitaledgestudio.com/web-design-ndis" },
};

export default function WebDesignNdisPage() {
  return <WebDesignNdis />;
}
