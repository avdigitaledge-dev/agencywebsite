import type { Metadata } from "next";
import Index from "@/views/Index";

export const metadata: Metadata = {
  title: "Web Design & Digital Marketing Wollongong | Digital Edge Studio",
  description: "Wollongong web design agency building fast, professional websites for tradies and small businesses. Affordable packages, local SEO, and more leads guaranteed.",
  alternates: { canonical: "https://digitaledgestudio.com" },
};

export default function HomePage() {
  return <Index />;
}
