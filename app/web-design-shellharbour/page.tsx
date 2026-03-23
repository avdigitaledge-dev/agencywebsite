import type { Metadata } from "next";
import WebDesignShellharbour from "@/views/WebDesignShellharbour";

export const metadata: Metadata = {
  title: "Web Design Shellharbour | Local Websites That Convert | Digital Edge Studio",
  description: "Professional web design for Shellharbour businesses. Custom websites, local SEO, and Google Ads by Digital Edge Studio. Based nearby in Wollongong. Free quote.",
  alternates: { canonical: "https://digitaledgestudio.com/web-design-shellharbour" },
};

export default function WebDesignShellharbourPage() {
  return <WebDesignShellharbour />;
}
