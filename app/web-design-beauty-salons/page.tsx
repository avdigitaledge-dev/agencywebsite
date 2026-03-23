import type { Metadata } from "next";
import WebDesignBeautySalons from "@/views/WebDesignBeautySalons";

export const metadata: Metadata = {
  title: "Beauty Salon Website Design Wollongong | Bookings & Portfolio",
  description: "Website design for beauty salons, hairdressers, and spas in Wollongong. Online bookings, service menus, photo galleries, and local SEO to attract more clients.",
  alternates: { canonical: "https://digitaledgestudio.com/web-design-beauty-salons" },
};

export default function WebDesignBeautySalonsPage() {
  return <WebDesignBeautySalons />;
}
