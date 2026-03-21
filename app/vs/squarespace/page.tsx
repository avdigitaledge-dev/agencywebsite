import type { Metadata } from "next";
import CompareSquarespace from "@/views/CompareSquarespace";

export const metadata: Metadata = {
  title: "Professional Web Design vs Squarespace",
  description: "Comparing Squarespace with professional web design for Australian small businesses. Discover why a custom website delivers better SEO, lead generation, and results.",
  alternates: { canonical: "https://digitaledgestudio.com/vs/squarespace" },
};

export default function CompareSquarespacePage() {
  return <CompareSquarespace />;
}
