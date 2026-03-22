import type { Metadata } from "next";
import ServiceEcommerce from "@/views/ServiceEcommerce";

export const metadata: Metadata = {
  title: "eCommerce Website Design — Professional Online Stores",
  description: "Custom eCommerce websites for Australian businesses. Full store setup with Shopify or WooCommerce, secure payments, shipping, and SEO. From $4,500 AUD.",
  alternates: { canonical: "https://digitaledgestudio.com/services/ecommerce" },
};

export default function EcommerceServicePage() {
  return <ServiceEcommerce />;
}
