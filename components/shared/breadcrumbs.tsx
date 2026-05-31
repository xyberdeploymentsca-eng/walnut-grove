/** @format */

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "./jsonLd";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  const baseUrl = "https://walnutgroveanimalhospital.ca";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: `${baseUrl}${item.href}`,
      })),
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <nav
        aria-label="Breadcrumb"
        className="max-w-[1296px] mx-auto pt-[100px] lg:pt-[170px] px-6 lg:px-4 relative z-1"
      >
        <ol className="flex items-center flex-wrap gap-1 text-[13px] lg:text-[14px] font-nunito font-medium">
          <li>
            <Link
              href="/"
              className="text-primary-black/60 hover:text-primary-green transition-colors"
            >
              Home
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-1">
              <ChevronRight
                size={14}
                className="text-primary-black/40 flex-shrink-0"
              />
              {index === items.length - 1 ? (
                <span className="text-primary-green font-semibold">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-primary-black/60 hover:text-primary-green transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};
