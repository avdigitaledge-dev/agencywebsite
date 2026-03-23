import Reviews from "@/views/Reviews";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Reviews & Testimonials | Web Design Wollongong",
  description:
    "See what our clients say about Digital Edge Studio. Read real reviews and testimonials from Wollongong and NSW businesses we've helped grow online.",
  alternates: {
    canonical: "https://digitaledgestudio.com/reviews",
  },
};

export default function ReviewsPage() {
  return <Reviews />;
}
