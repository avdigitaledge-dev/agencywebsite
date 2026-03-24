import type { Metadata } from "next";
import CompareNatiive from "@/views/CompareNatiive";

export const metadata: Metadata = {
  title: "Digital Edge Studio vs natiive — Wollongong Web Design Comparison",
  description: "Comparing Digital Edge Studio and natiive for web design in Wollongong. See pricing, services, turnaround times, and which agency suits your business.",
  alternates: { canonical: "https://digitaledgestudio.com/vs/natiive" },
};

export default function CompareNatiivePage() {
  return <CompareNatiive />;
}
