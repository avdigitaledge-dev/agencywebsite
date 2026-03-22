import type { Metadata } from "next";
import ServiceMaintenanceHosting from "@/views/ServiceMaintenanceHosting";

export const metadata: Metadata = {
  title: "Website Maintenance & Hosting — Keep Your Site Secure",
  description: "Website maintenance and Australian hosting from $99/month. Security updates, daily backups, uptime monitoring, and priority support. No lock-in contracts.",
  alternates: { canonical: "https://digitaledgestudio.com/services/maintenance-hosting" },
};

export default function MaintenanceHostingServicePage() {
  return <ServiceMaintenanceHosting />;
}
