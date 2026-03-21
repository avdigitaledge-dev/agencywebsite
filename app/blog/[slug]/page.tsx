import type { Metadata } from "next";
import { blogPosts } from "@/data/blogPosts";
import BlogPost from "@/views/BlogPost";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Blog Post Not Found" };
  return {
    title: post.title,
    description: post.metaDescription || post.excerpt,
    alternates: { canonical: `https://digitaledgestudio.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDescription || post.excerpt,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <BlogPost slug={params.slug} />;
}
