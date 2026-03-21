import type { Metadata } from "next";
import WebDesignTradies from "@/views/WebDesignTradies";

export const metadata: Metadata = {
  title: "Tradie Website Design Wollongong | Web Design for Tradies",
  description: "Professional website design for tradies in Wollongong and Sydney. We build websites for plumbers, electricians, builders, and all trades that generate real leads and phone calls.",
  alternates: { canonical: "https://digitaledgestudio.com/web-design-tradies" },
};

export default function WebDesignTradiesPage() {
  return <WebDesignTradies />;
}
