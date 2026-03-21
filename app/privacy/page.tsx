import type { Metadata } from "next";
import Privacy from "@/views/Privacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Digital Edge Studio — how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://digitaledgestudio.com/privacy" },
};

export default function PrivacyPage() {
  return <Privacy />;
}
