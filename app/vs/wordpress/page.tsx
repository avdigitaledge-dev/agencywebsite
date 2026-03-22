import type { Metadata } from "next";
import CompareWordpress from "@/views/CompareWordpress";

export const metadata: Metadata = {
  title: "Professional Web Design vs WordPress DIY",
  description: "Comparing DIY WordPress with professional web design for Australian small businesses. See why a custom-built website outperforms a self-managed WordPress site in SEO, security, and conversions.",
  alternates: { canonical: "https://digitaledgestudio.com/vs/wordpress" },
};

export default function CompareWordpressPage() {
  return <CompareWordpress />;
}
