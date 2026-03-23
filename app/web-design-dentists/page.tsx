import type { Metadata } from "next";
import WebDesignDentists from "@/views/WebDesignDentists";

export const metadata: Metadata = {
  title: "Dentist Website Design Sydney | Online Bookings & Patient Growth",
  description: "Website design for dental clinics in Sydney. Patient-friendly design with online bookings, treatment pages, before/after galleries, and local SEO to attract new patients.",
  alternates: { canonical: "https://digitaledgestudio.com/web-design-dentists" },
};

export default function WebDesignDentistsPage() {
  return <WebDesignDentists />;
}
