import type { Metadata } from "next";
import CompareCheapDesigners from "@/views/CompareCheapDesigners";

export const metadata: Metadata = {
  title: "Professional Web Design vs Cheap Web Designers | Digital Edge Studio",
  description: "Why cheap websites cost more in the long run. Compare budget web designers with professional web design and discover the hidden costs of going cheap.",
  alternates: { canonical: "https://digitaledgestudio.com/vs/cheap-web-designers" },
};

export default function CompareCheapDesignersPage() {
  return <CompareCheapDesigners />;
}
