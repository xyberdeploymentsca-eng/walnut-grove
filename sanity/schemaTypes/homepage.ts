/** @format */

import { defineField, defineType } from "sanity";

export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "metaData",
      title: "SEO Metadata",
      type: "object",
      fields: [
        defineField({
          name: "metaTitle",
          title: "Meta Title",
          type: "string",
          description:
            "The title displayed in search results and social media previews.",
        }),
        defineField({
          name: "metaDescription",
          title: "Meta Description",
          type: "text",
          description:
            "A short description (150-160 characters) for search engines and social media.",
        }),
        defineField({
          name: "metaImage",
          title: "Meta Image",
          type: "image",
          description:
            "An image for social media previews. For a Twitter Summary Card with Large Image, it should meet the following requirements:\n" +
            "- At least 300x157 pixels, ideally 1200x628 pixels (1.91:1 aspect ratio).\n" +
            "- Formats: JPEG, PNG, or WebP.\n" +
            "- File size under 1 MB.",
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: "canonical",
          title: "Canonical Url",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Name", type: "string" },
            { name: "service", title: "Service", type: "string" },
            { name: "message", title: "Message", type: "text" },
          ],
        },
      ],
    }),
  ],
});
