import type { Metadata } from "next";
import About from "@/views/About";

export const metadata: Metadata = {
  title: "About Digital Edge Studio | Wollongong Web Design Agency",
  description: "Meet the team behind Digital Edge Studio — a Wollongong web design agency helping tradies and small businesses grow online with professional websites and local SEO.",
  alternates: { canonical: "https://digitaledgestudio.com/about" },
};

export default function AboutPage() {
  return <About />;
}
