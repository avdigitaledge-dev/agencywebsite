import type { Metadata } from "next";
import WebDesignAccountants from "@/views/WebDesignAccountants";

export const metadata: Metadata = {
  title: "Accountant Website Design Wollongong | Professional & Trustworthy",
  description: "Website design for accountants and financial advisors in Wollongong. Professional, trust-building websites with client portals, booking forms, and local SEO. From $1,200.",
  alternates: { canonical: "https://digitaledgestudio.com/web-design-accountants" },
};

export default function WebDesignAccountantsPage() {
  return <WebDesignAccountants />;
}
