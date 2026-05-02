import type { Metadata } from "next";
import Index from "@/views/Index";

export const metadata: Metadata = {
  title: "Web Design & Marketing Wollongong | Digital Edge Studio",
  description: "Wollongong web design and marketing for tradies and small businesses. Book a free 30-minute discovery call — fixed pricing, fast turnaround, and websites built to bring you more leads.",
  alternates: { canonical: "https://digitaledgestudio.com" },
};

export default function HomePage() {
  return <Index />;
}
