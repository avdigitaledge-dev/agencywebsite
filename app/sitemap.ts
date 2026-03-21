import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogPosts";
import { portfolioProjects } from "@/data/portfolioProjects";

const BASE_URL = "https://digitaledgestudio.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/services/aeo-geo`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/pricing`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/portfolio`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/free-website-review`, changeFrequency: "monthly", priority: 0.8 },
    // Location pages
    { url: `${BASE_URL}/web-design-wollongong`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/web-design-sydney`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/web-design-illawarra`, changeFrequency: "monthly", priority: 0.9 },
    // Industry pages
    { url: `${BASE_URL}/web-design-tradies`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/web-design-healthcare`, changeFrequency: "monthly", priority: 0.8 },
    // Comparison pages
    { url: `${BASE_URL}/vs/wix`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/vs/squarespace`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/vs/cheap-web-designers`, changeFrequency: "monthly", priority: 0.7 },
    // Legal
    { url: `${BASE_URL}/privacy`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE_URL}/terms`, changeFrequency: "yearly", priority: 0.5 },
  ];

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.lastUpdated || post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogCategories: MetadataRoute.Sitemap = [
    "web-design",
    "seo",
    "digital-marketing",
  ].map((category) => ({
    url: `${BASE_URL}/blog/category/${category}`,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const portfolioPages: MetadataRoute.Sitemap = portfolioProjects.map((project) => ({
    url: `${BASE_URL}/portfolio/${project.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages, ...blogCategories, ...portfolioPages];
}
