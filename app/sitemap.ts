/** @format */

import { MetadataRoute } from "next";
import { getAllBlogSlugs, sampleBlogs } from "@/utils/blogData";
import { clinicPosts } from "@/utils/clinicPosts";

// rebuilt every hour, so blog posts published in the CMS after a deploy are listed too
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.walnutgroveanimalclinic.com";

  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/faq",
    "/services",
    "/blog",
    "/privacy-policy",
    "/terms-and-conditions",
    "/resources/how-to-videos",
    "/resources/poisonous-plants",
    "/resources/pet-food-recalls",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const serviceRoutes = [
    "anesthesia",
    "bloodwork",
    "chronic-pain-management",
    "dental-services",
    "dog-breeding",
    "euthanasia",
    "lab-services",
    "microchipping",
    "parasite-prevention",
    "pet-boarding-services",
    "pet-surgery",
    "pet-x-ray",
    "preventative-care",
    "puppy-kitten-care",
    "skin-ear-infections",
    "small-mammal-medicine",
    "soft-tissue-eye-ear",
    "spay-neuter",
    "ultrasound-services",
    "vaccines",
  ].map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // CMS posts plus the built-in articles (they are live pages too, served when the CMS has no post with that slug)
  const blogSlugs = Array.from(new Set([...(await getAllBlogSlugs()), ...sampleBlogs.map((b) => b.slug), ...clinicPosts.map((b) => b.slug)]));
  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
