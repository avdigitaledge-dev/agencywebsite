import type { Metadata } from "next";
import WebDesignIllawarra from "@/views/WebDesignIllawarra";

export const metadata: Metadata = {
  title: "Web Design Illawarra | Shellharbour, Kiama, Dapto & Nowra",
  description: "Web design across the wider Illawarra — Shellharbour, Kiama, Dapto, Thirroul, Nowra and beyond. Same Wollongong-based team, local to your suburb.",
  alternates: { canonical: "https://digitaledgestudio.com/web-design-illawarra" },
};

export default function WebDesignIllawarraPage() {
  return <WebDesignIllawarra />;
}
