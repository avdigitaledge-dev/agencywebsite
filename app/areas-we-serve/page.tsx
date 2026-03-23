import type { Metadata } from "next";
import AreasWeServe from "@/views/AreasWeServe";

export const metadata: Metadata = {
  title: "Areas We Serve | Web Design & SEO Across NSW",
  description: "Digital Edge Studio serves Wollongong, Sydney, Illawarra, Shellharbour, Nowra, Sutherland Shire, and beyond. Local web design, SEO, and digital marketing across NSW.",
  alternates: { canonical: "https://digitaledgestudio.com/areas-we-serve" },
};

export default function AreasWeServePage() {
  return <AreasWeServe />;
}
