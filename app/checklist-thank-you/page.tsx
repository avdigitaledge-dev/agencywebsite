import type { Metadata } from "next";
import ChecklistThankYou from "@/views/ChecklistThankYou";

export const metadata: Metadata = {
  title: "Your Free Checklist",
  description: "Download your free 5-point website checklist for Wollongong tradies.",
  robots: { index: false, follow: false },
};

export default function ChecklistThankYouPage() {
  return <ChecklistThankYou />;
}
