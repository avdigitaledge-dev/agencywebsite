import type { Metadata } from "next";
import Terms from "@/views/Terms";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Digital Edge Studio — the terms that govern use of our services.",
  alternates: { canonical: "https://digitaledgestudio.com/terms" },
};

export default function TermsPage() {
  return <Terms />;
}
