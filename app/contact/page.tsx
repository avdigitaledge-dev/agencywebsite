import type { Metadata } from "next";
import Contact from "@/views/Contact";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Quote",
  description: "Get in touch with Digital Edge Studio for a free website quote or consultation. Based in Wollongong, serving businesses across NSW.",
  alternates: { canonical: "https://digitaledgestudio.com/contact" },
};

export default function ContactPage() {
  return <Contact />;
}
