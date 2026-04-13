import type { Metadata } from "next";
import WebDesignWollongong from "@/views/WebDesignWollongong";

export const metadata: Metadata = {
  title: "Web Design Wollongong | Fast, Lead-Generating Websites",
  description: "Wollongong web designer building custom, mobile-first websites for tradies and small businesses. Fixed-price packages, fast turnaround, no lock-in. Get a free quote.",
  alternates: { canonical: "https://digitaledgestudio.com/web-design-wollongong" },
};

export default function WebDesignWollongongPage() {
  return <WebDesignWollongong />;
}
