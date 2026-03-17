export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  lastUpdated?: string;
  category: string;
  image: string;
  readTime: number;
  keywords: string[];
  metaDescription: string;
}
