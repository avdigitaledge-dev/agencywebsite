import type { Metadata } from "next";
import AiServiceLeadResponseEngine from "@/views/AiServiceLeadResponseEngine";

export const metadata: Metadata = {
  title: "AI Lead Response Engine for Tradies | Digital Edge Studio",
  description:
    "AI lead response for Illawarra and Sydney trades. Replies in under 60 seconds, qualifies the job, and books it into your calendar 24/7. Free audit available.",
  alternates: {
    canonical: "https://digitaledgestudio.com/ai-services/lead-response-engine",
  },
  openGraph: {
    title: "AI Lead Response Engine for Tradies | Digital Edge Studio",
    description:
      "Stop losing jobs to slow replies. Our AI replies in under 60 seconds, qualifies the job, and books it into your calendar — 24/7. Built for Illawarra and Sydney trades.",
    url: "https://digitaledgestudio.com/ai-services/lead-response-engine",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Lead Response Engine for Tradies | Digital Edge Studio",
    description:
      "Stop losing jobs to slow replies. AI replies in under 60 seconds and books jobs 24/7. Built for Illawarra and Sydney trades.",
  },
};

export default function LeadResponseEnginePage() {
  return <AiServiceLeadResponseEngine />;
}
