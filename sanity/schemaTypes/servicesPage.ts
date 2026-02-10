/** @format */

import { defineField, defineType } from "sanity";

export const servicesPage = defineType({
  name: "servicesPage",
  title: "Services Page",
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
          description: "Title for search results.",
        }),
        defineField({
          name: "metaDescription",
          title: "Meta Description",
          type: "text",
          description: "Short description for search engines.",
        }),
        defineField({
          name: "metaImage",
          title: "Meta Image",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({
          name: "canonical",
          title: "Canonical Url",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "question", title: "Question", type: "string" },
            { name: "answer", title: "Answer", type: "text" },
          ],
        },
      ],
    }),
  ],
});
