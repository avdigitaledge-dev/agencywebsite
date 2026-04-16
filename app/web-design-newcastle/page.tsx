import type { Metadata } from "next";
import WebDesignNewcastle from "@/views/WebDesignNewcastle";

export const metadata: Metadata = {
  title: "Web Design Newcastle | Local Website Designer",
  description: "Fixed-price web design for Newcastle businesses. Custom websites, local SEO, and digital marketing for small businesses and tradies across Newcastle, Lake Macquarie & the Hunter Valley.",
  alternates: { canonical: "https://digitaledgestudio.com/web-design-newcastle" },
};

export default function WebDesignNewcastlePage() {
  return <WebDesignNewcastle />;
}
