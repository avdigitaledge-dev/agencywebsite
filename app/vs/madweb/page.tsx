import type { Metadata } from "next";
import CompareMadweb from "@/views/CompareMadweb";

export const metadata: Metadata = {
  title: "Custom Web Design vs MadWeb Wollongong — Honest Comparison",
  description: "Comparing Digital Edge Studio and MadWeb for web design in Wollongong. Custom Next.js sites vs Wix templates — pricing, performance, and ownership compared.",
  alternates: { canonical: "https://digitaledgestudio.com/vs/madweb" },
};

export default function CompareMadwebPage() {
  return <CompareMadweb />;
}
