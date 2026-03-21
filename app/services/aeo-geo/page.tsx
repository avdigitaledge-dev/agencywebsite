import type { Metadata } from "next";
import AeoGeoServices from "@/views/AeoGeoServices";

export const metadata: Metadata = {
  title: "AEO & GEO Services — AI Search Optimisation",
  description: "Get found by AI search with Answer Engine Optimisation (AEO) and Generative Engine Optimisation (GEO). We optimise your website for Google AI Overviews, ChatGPT, Siri, and voice search.",
  alternates: { canonical: "https://digitaledgestudio.com/services/aeo-geo" },
};

export default function AeoGeoPage() {
  return <AeoGeoServices />;
}
