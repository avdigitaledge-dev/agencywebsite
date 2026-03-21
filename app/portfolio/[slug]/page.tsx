import type { Metadata } from "next";
import { portfolioProjects } from "@/data/portfolioProjects";
import PortfolioProject from "@/views/PortfolioProject";

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = portfolioProjects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Case Study Not Found" };
  return {
    title: project.title,
    description: project.excerpt,
    alternates: { canonical: `https://digitaledgestudio.com/portfolio/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.excerpt,
      images: project.image ? [project.image] : undefined,
    },
  };
}

export default function PortfolioProjectPage({ params }: { params: { slug: string } }) {
  return <PortfolioProject slug={params.slug} />;
}
