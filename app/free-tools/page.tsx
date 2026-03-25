import type { Metadata } from "next";
import FreeTools from "@/views/FreeTools";

export const metadata: Metadata = {
  title: "Free Website Tools | Cost Calculator & SEO Audit",
  description: "Free tools for Australian businesses. Calculate your website cost instantly or audit your site's SEO, speed, and security. No signup required.",
  alternates: { canonical: "https://digitaledgestudio.com/free-tools" },
};

export default function FreeToolsPage() {
  return <FreeTools />;
}
