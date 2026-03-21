import type { Metadata } from "next";
import BlogCategory from "@/views/BlogCategory";

const categories = [
  { slug: "web-design", label: "Web Design" },
  { slug: "seo", label: "SEO" },
  { slug: "digital-marketing", label: "Digital Marketing" },
];

export async function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const cat = categories.find((c) => c.slug === params.category);
  const label = cat?.label || params.category;
  return {
    title: `${label} Articles | Digital Edge Studio Blog`,
    description: `Browse all ${label} articles from Digital Edge Studio — tips and guides for small businesses and tradies.`,
    alternates: { canonical: `https://digitaledgestudio.com/blog/category/${params.category}` },
  };
}

export default function BlogCategoryPage({ params }: { params: { category: string } }) {
  return <BlogCategory category={params.category} />;
}
