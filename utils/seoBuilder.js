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
  const canonicalUrl = currentUrl || "https://www.zapdtf.com/";

  const metadata = {
    title: "Print Sign",
    description:
      "Your trusted partner for quality printing and signage solutions.",
    openGraph: { images: "/logo_print_sign.svg" },
    twitter: {
      card: "summary_large_image",
      title: "Print Sign",
      description:
        "Your trusted partner for quality printing and signage solutions.",
      image: "/logo_print_sign.svg",
    },
    alternates: {
      languages: {
        "en-US": "https://www.zapdtf.com/",
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
    const imageUrl = urlFor(seo.metaImage).url() ?? "/logo_SSB_wings.svg";
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
