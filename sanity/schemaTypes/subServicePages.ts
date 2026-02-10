/** @format */

import { defineField, defineType } from "sanity";

const metaDataFields = [
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
];

const faqField = defineField({
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
});

export const laboratoryPage = defineType({
  name: "laboratoryPage",
  title: "Laboratory Page",
  type: "document",
  fields: [
    defineField({
      name: "metaData",
      title: "SEO Metadata",
      type: "object",
      fields: metaDataFields,
    }),
    faqField,
  ],
});

export const ultrasoundPage = defineType({
  name: "ultrasoundPage",
  title: "Ultrasound Page",
  type: "document",
  fields: [
    defineField({
      name: "metaData",
      title: "SEO Metadata",
      type: "object",
      fields: metaDataFields,
    }),
    faqField,
  ],
});

export const dentalPage = defineType({
  name: "dentalPage",
  title: "Dental Page",
  type: "document",
  fields: [
    defineField({
      name: "metaData",
      title: "SEO Metadata",
      type: "object",
      fields: metaDataFields,
    }),
    faqField,
  ],
});

export const spayNeuterPage = defineType({
  name: "spayNeuterPage",
  title: "Spay & Neuter Page",
  type: "document",
  fields: [
    defineField({
      name: "metaData",
      title: "SEO Metadata",
      type: "object",
      fields: metaDataFields,
    }),
    faqField,
  ],
});

export const petBoardingPage = defineType({
  name: "petBoardingPage",
  title: "Pet Boarding Page",
  type: "document",
  fields: [
    defineField({
      name: "metaData",
      title: "SEO Metadata",
      type: "object",
      fields: metaDataFields,
    }),
    faqField,
  ],
});
