import type { Metadata } from "next";
import WebsiteReview from "@/views/WebsiteReview";

export const metadata: Metadata = {
  title: "Free Website Review Wollongong | Digital Edge Studio",
  description: "Get a free website review from Digital Edge Studio. We'll check your SEO, mobile performance, and conversion rate — and tell you exactly what's holding you back.",
  alternates: { canonical: "https://digitaledgestudio.com/free-website-review" },
};

export default function FreeWebsiteReviewPage() {
  return <WebsiteReview />;
}
