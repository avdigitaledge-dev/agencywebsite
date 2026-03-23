import type { Metadata } from "next";
import WebDesignGyms from "@/views/WebDesignGyms";

export const metadata: Metadata = {
  title: "Gym Website Design Wollongong | Memberships & Class Bookings",
  description: "Website design for gyms, personal trainers, and fitness studios in Wollongong. Membership signups, class timetables, online bookings, and local SEO.",
  alternates: { canonical: "https://digitaledgestudio.com/web-design-gyms" },
};

export default function WebDesignGymsPage() {
  return <WebDesignGyms />;
}
