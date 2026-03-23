import type { Metadata } from "next";
import WebDesignVeterinary from "@/views/WebDesignVeterinary";

export const metadata: Metadata = {
  title: "Veterinary Website Design Sydney | Pet-Friendly & Professional",
  description: "Website design for veterinary clinics in Sydney. Appointment bookings, service pages, pet owner resources, and local SEO to grow your practice.",
  alternates: { canonical: "https://digitaledgestudio.com/web-design-veterinary" },
};

export default function WebDesignVeterinaryPage() {
  return <WebDesignVeterinary />;
}
