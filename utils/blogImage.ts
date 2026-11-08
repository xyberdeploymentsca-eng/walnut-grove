/** @format */

import { urlFor } from "@/sanity/lib/image";

// Kept apart from utils/blogData (which loads the CMS client and its server-only token) so the blog's
// browser components can use it without bundling the client.

// Image URL Resolver Helper
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getBlogImageUrl = (imageSource: any): string => {
  if (!imageSource) return "/assets/preventionCare.png";
  if (typeof imageSource === "string") return imageSource;
  if (imageSource?.asset?._ref || imageSource?.asset?._id) {
    try {
      return urlFor(imageSource).url();
    } catch {
      return "/assets/preventionCare.png";
    }
  }
  return "/assets/preventionCare.png";
};
