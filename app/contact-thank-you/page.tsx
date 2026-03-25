import type { Metadata } from "next";
import ContactThankYou from "@/views/ContactThankYou";

export const metadata: Metadata = {
  title: "Thank You — We've Received Your Request",
  description: "Your quote request has been received. We'll get back to you within 24 hours. Book a free call while you wait.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://digitaledgestudio.com/contact-thank-you" },
};

export default function ContactThankYouPage() {
  return <ContactThankYou />;
}
