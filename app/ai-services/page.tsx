import type { Metadata } from "next";
import AiServices from "@/views/AiServices";

export const metadata: Metadata = {
  title: "AI Solutions — Chatbots & Voice Receptionists for Small Business | Digital Edge Studio",
  description:
    "AI-powered chatbots and voice receptionists for tradies, healthcare, and small businesses in Sydney & Wollongong. Automate enquiries, book appointments, and answer calls 24/7. Starting from $497/month.",
  alternates: { canonical: "https://digitaledgestudio.com/ai-services" },
  openGraph: {
    title: "AI Solutions — Chatbots & Voice Receptionists | Digital Edge Studio",
    description:
      "Smart AI chatbots and voice receptionists that handle enquiries, book appointments, and answer calls 24/7. Built for tradies, healthcare, and small businesses across Sydney & Wollongong.",
    url: "https://digitaledgestudio.com/ai-services",
    type: "website",
  },
};

export default function AiServicesPage() {
  return <AiServices />;
}
