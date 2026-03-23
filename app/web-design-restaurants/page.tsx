import type { Metadata } from "next";
import WebDesignRestaurants from "@/views/WebDesignRestaurants";

export const metadata: Metadata = {
  title: "Restaurant Website Design Wollongong | Menus, Bookings & SEO",
  description: "Professional website design for restaurants, cafés, and bars in Wollongong. Online menus, table bookings, Google Maps visibility, and local SEO to fill more seats.",
  alternates: { canonical: "https://digitaledgestudio.com/web-design-restaurants" },
};

export default function WebDesignRestaurantsPage() {
  return <WebDesignRestaurants />;
}
