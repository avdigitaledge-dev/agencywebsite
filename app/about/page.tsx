import type { Metadata } from "next";
import About from "@/views/About";

export const metadata: Metadata = {
  title: "About Us | Meet the Founder — Digital Edge Studio",
  description: "Meet Aleksandar, founder of Digital Edge Studio. Learn how a passion for helping tradies and small businesses grow online became a Wollongong web design agency.",
  alternates: { canonical: "https://digitaledgestudio.com/about" },
};

export default function AboutPage() {
  return <About />;
}
