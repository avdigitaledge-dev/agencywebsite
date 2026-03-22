import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogPosts";
import { portfolioProjects } from "@/data/portfolioProjects";

const BASE_URL = "https://digitaledgestudio.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastUpdated = new Date("2026-03-22");

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: lastUpdated, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/services`, lastModified: lastUpdated, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/services/web-design`, lastModified: lastUpdated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/ecommerce`, lastModified: lastUpdated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/seo`, lastModified: lastUpdated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/aeo-geo`, lastModified: lastUpdated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/google-ads`, lastModified: lastUpdated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/maintenance-hosting`, lastModified: lastUpdated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/about`, lastModified: lastUpdated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: lastUpdated, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/contact`, lastModified: lastUpdated, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/pricing`, lastModified: lastUpdated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/portfolio`, lastModified: lastUpdated, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/free-website-review`, lastModified: lastUpdated, changeFrequency: "monthly", priority: 0.8 },
    // Location pages
    { url: `${BASE_URL}/web-design-wollongong`, lastModified: lastUpdated, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/web-design-sydney`, lastModified: lastUpdated, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/web-design-illawarra`, lastModified: lastUpdated, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/web-design-newcastle`, lastModified: lastUpdated, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/web-design-central-coast`, lastModified: lastUpdated, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/web-design-campbelltown`, lastModified: lastUpdated, changeFrequency: "monthly", priority: 0.9 },
    // Industry pages
    { url: `${BASE_URL}/web-design-tradies`, lastModified: lastUpdated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/web-design-healthcare`, lastModified: lastUpdated, changeFrequency: "monthly", priority: 0.8 },
    // Comparison pages
    { url: `${BASE_URL}/vs/wix`, lastModified: lastUpdated, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/vs/squarespace`, lastModified: lastUpdated, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/vs/cheap-web-designers`, lastModified: lastUpdated, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/vs/wordpress`, lastModified: lastUpdated, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/vs/godaddy`, lastModified: lastUpdated, changeFrequency: "monthly", priority: 0.7 },
    // Legal
    { url: `${BASE_URL}/privacy`, lastModified: new Date("2025-01-01"), changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE_URL}/terms`, lastModified: new Date("2025-01-01"), changeFrequency: "yearly", priority: 0.5 },
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
    lastModified: lastUpdated,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const portfolioPages: MetadataRoute.Sitemap = portfolioProjects.map((project) => ({
    url: `${BASE_URL}/portfolio/${project.slug}`,
    lastModified: lastUpdated,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages, ...blogCategories, ...portfolioPages];
}
