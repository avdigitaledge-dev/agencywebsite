import type { Metadata } from "next";
import AiServiceLeadResponseEngine from "@/views/AiServiceLeadResponseEngine";

export const metadata: Metadata = {
  title: "AI Lead Response Engine Wollongong | Digital Edge Studio",
  description:
    "AI Lead Response Engine for Wollongong and Sydney tradies. Replies in under 60 seconds, qualifies the job, and books it into your calendar 24/7.",
  alternates: {
    canonical: "https://digitaledgestudio.com/ai-services/lead-response-engine",
  },
  openGraph: {
    title: "AI Lead Response Engine Wollongong | Digital Edge Studio",
    description:
      "AI Lead Response Engine for Wollongong and Sydney tradies. Replies in under 60 seconds, qualifies the job, and books it into your calendar 24/7.",
    url: "https://digitaledgestudio.com/ai-services/lead-response-engine",
    type: "website",
    images: [
      {
        url: "https://digitaledgestudio.com/images/ai-services/lead-response-engine-hero.png",
        width: 560,
        height: 840,
        alt: "AI Lead Response Engine phone mockup showing an SMS conversation qualifying a tradie job in under 60 seconds.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Lead Response Engine Wollongong | Digital Edge Studio",
    description:
      "AI Lead Response Engine for Wollongong and Sydney tradies. Replies in under 60 seconds, qualifies the job, and books it into your calendar 24/7.",
    images: [
      "https://digitaledgestudio.com/images/ai-services/lead-response-engine-hero.png",
    ],
  },
};

export default function LeadResponseEnginePage() {
  return <AiServiceLeadResponseEngine />;
}
