import type { Metadata } from "next";
import Index from "@/views/Index";

export const metadata: Metadata = {
  title: "Web Design & Marketing Wollongong | Digital Edge Studio",
  description: "Wollongong web design and marketing for tradies and small businesses. Fixed pricing, fast turnaround, websites built to win more leads. Book a free call.",
  alternates: { canonical: "https://digitaledgestudio.com" },
};

export default function HomePage() {
  return <Index />;
}
