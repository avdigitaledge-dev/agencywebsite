"use client";

import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav aria-label="breadcrumb" className="container-tight px-4 py-4">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {item.path ? (
              <Link href={item.path} className="text-accent hover:text-accent/80 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium">{item.label}</span>
            )}
            {index < items.length - 1 && <span className="text-muted-foreground">/</span>}
          </li>
        ))}
      </ol>

      {/* Breadcrumb Schema Markup */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": items
              .filter((item, i) => item.path || i === items.length - 1)
              .map((item, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": item.label,
                ...(item.path && { "item": `https://digitaledgestudio.com${item.path}` })
              }))
          })
        }}
      />
    </nav>
  );
};
