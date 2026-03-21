import type { Metadata } from "next";
import Blog from "@/views/Blog";

export const metadata: Metadata = {
  title: "Web Design & SEO Blog | Tips for Wollongong Small Businesses",
  description: "Web design, SEO, and digital marketing tips for small businesses and tradies in Wollongong and NSW. Expert advice from Digital Edge Studio.",
  alternates: { canonical: "https://digitaledgestudio.com/blog" },
};

export default function BlogPage() {
  return <Blog />;
}
