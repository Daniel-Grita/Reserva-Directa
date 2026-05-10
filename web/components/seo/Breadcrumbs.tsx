import { safeJsonLd } from "@/lib/jsonLd";

type Crumb = { name: string; url: string };

const BASE = "https://reservadireta.pt";
const HOME: Crumb = { name: "Início", url: "/" };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail = [HOME, ...items];
  const jsonLd = safeJsonLd({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url.startsWith("http") ? c.url : `${BASE}${c.url}`,
    })),
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
}
