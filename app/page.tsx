import type { Metadata } from "next";
import Index from "@/views/Index";

export const metadata: Metadata = {
  title: "Digital Edge Studio | Web Design & Marketing Agency Wollongong",
  description: "Wollongong web design agency building fast, reliable websites for tradies and small businesses. Fixed-price packages, local SEO, and more leads guaranteed.",
  alternates: { canonical: "https://digitaledgestudio.com" },
};

export default function HomePage() {
  return <Index />;
}
