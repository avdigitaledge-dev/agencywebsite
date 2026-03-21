import type { Metadata } from "next";
import ChecklistThankYou from "@/views/ChecklistThankYou";

export const metadata: Metadata = {
  title: "Your Free Checklist | Digital Edge Studio",
  description: "Download your free 5-point website checklist for Wollongong tradies.",
  alternates: { canonical: "https://digitaledgestudio.com/checklist-thank-you" },
};

export default function ChecklistThankYouPage() {
  return <ChecklistThankYou />;
}
