import type { Metadata } from "next";
import WebDesignLawyers from "@/views/WebDesignLawyers";

export const metadata: Metadata = {
  title: "Law Firm Website Design Sydney | Professional & Compliant",
  description: "Website design for law firms and solicitors in Sydney. Professional, trust-building websites with secure contact forms, practice area pages, and local SEO.",
  alternates: { canonical: "https://digitaledgestudio.com/web-design-lawyers" },
};

export default function WebDesignLawyersPage() {
  return <WebDesignLawyers />;
}
