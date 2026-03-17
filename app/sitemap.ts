/** @format */

import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://walnutgroveanimalclinic.com";

  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/services",
    "/privacy-policy",
    "/terms-and-conditions",
    "/resources/how-to-videos",
    "/resources/poisonous-plants",
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

  return [...staticRoutes, ...serviceRoutes];
}
