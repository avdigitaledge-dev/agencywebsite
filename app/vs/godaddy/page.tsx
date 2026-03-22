import type { Metadata } from "next";
import CompareGodaddy from "@/views/CompareGodaddy";

export const metadata: Metadata = {
  title: "Professional Web Design vs GoDaddy Website Builder",
  description: "Comparing GoDaddy Website Builder with professional web design for Australian small businesses. See why a custom website outperforms GoDaddy's builder in SEO, speed, and lead generation.",
  alternates: { canonical: "https://digitaledgestudio.com/vs/godaddy" },
};

export default function CompareGodaddyPage() {
  return <CompareGodaddy />;
}
