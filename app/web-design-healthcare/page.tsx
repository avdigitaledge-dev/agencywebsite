import type { Metadata } from "next";
import WebDesignHealthcare from "@/views/WebDesignHealthcare";

export const metadata: Metadata = {
  title: "Healthcare Website Design Sydney | Dentist, Physio & NDIS | Digital Edge",
  description: "Professional website design for healthcare providers in Sydney — dentists, physiotherapists, GPs, psychologists, and NDIS providers. Trust-building websites that attract new patients.",
  alternates: { canonical: "https://digitaledgestudio.com/web-design-healthcare" },
};

export default function WebDesignHealthcarePage() {
  return <WebDesignHealthcare />;
}
