import type { Metadata } from "next";
import Portfolio from "@/views/Portfolio";

export const metadata: Metadata = {
  title: "Our Work | Web Design Case Studies | Digital Edge Studio",
  description: "Real results for real businesses. See how Digital Edge Studio helped tradies and small businesses across Wollongong, Sydney, and NSW grow online.",
  alternates: { canonical: "https://digitaledgestudio.com/portfolio" },
};

export default function PortfolioPage() {
  return <Portfolio />;
}
