/** @format */

import { client } from "../sanity/lib/client";
import { urlFor } from "../sanity/lib/image";

export const getPageData = async (type) => {
  const query = `*[_type == "${type}"][0]`;
  const data = await client.fetch(query);
  return data;
};

export const getProductMetaData = async (slug) => {
  const query = `*[_type == "product" && slug.current == $slug][0]{
    title,
    metaData {
      metaTitle,
      metaDescription,
      metaImage
    }
  }`;
  const data = await client.fetch(query, { slug });
  return data;
};

export function getMetadata(data, currentUrl = null) {
  const seo = data?.metaData;
  // Use provided URL or default to homepage
  const canonicalUrl = currentUrl || "https://walnutgroveanimalclinic.com/";

  const metadata = {
    title: "Walnut Grove Animal Hospital",
    description:
      "Your trusted partner for quality veterinary care, surgeries, and pet boarding in Langley, BC.",
    openGraph: { images: "/assets/logo.png" },
    twitter: {
      card: "summary_large_image",
      title: "Walnut Grove Animal Hospital",
      description:
        "Your trusted partner for quality veterinary care, surgeries, and pet boarding in Langley, BC.",
      image: "/assets/logo.png",
    },
    alternates: {
      languages: {
        "en-US": "https://walnutgroveanimalclinic.com/",
      },
      canonical: canonicalUrl,
    },
  };

  metadata.openGraph.title = metadata.title;
  metadata.openGraph.description = metadata.description;
  if (!seo) {
    return metadata;
  }

  if (seo.metaTitle) {
    metadata.title = seo.metaTitle;
    metadata.twitter.title = seo.metaTitle;
  }
  if (seo.metaDescription) {
    metadata.description = seo.metaDescription;
    metadata.twitter.description = seo.metaDescription;
  }
  if (seo.metaImage) {
    const imageUrl = urlFor(seo.metaImage).url() ?? "/assets/logo.png";
    metadata.openGraph = { images: imageUrl };
    metadata.twitter.image = seo.metaImage?.data?.attributes?.url;
  }

  if (seo.canonical) {
    metadata.alternates.canonical = seo.canonical;
  }

  metadata.openGraph.title = metadata.title;
  metadata.openGraph.description = metadata.description;
  return metadata;
}
