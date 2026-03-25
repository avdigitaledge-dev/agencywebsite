import type { Metadata } from "next";
import FreeWebsiteAudit from "@/views/FreeWebsiteAudit";

export const metadata: Metadata = {
  title: "Free Website Audit | Check Your Site's SEO & Performance",
  description: "Get a free instant website audit. Check your site's SEO score, page speed, mobile-friendliness, and security. See exactly what's holding your site back.",
  alternates: { canonical: "https://digitaledgestudio.com/free-website-audit" },
};

export default function FreeWebsiteAuditPage() {
  return <FreeWebsiteAudit />;
}
