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

export const preventativeCarePage = defineType({
  name: "preventativeCarePage",
  title: "Preventative Care Page",
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

export const vaccinesPage = defineType({
  name: "vaccinesPage",
  title: "Vaccines Page",
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

export const smallMammalPage = defineType({
  name: "smallMammalPage",
  title: "Small Mammal Page",
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

export const parasitePreventionPage = defineType({
  name: "parasitePreventionPage",
  title: "Parasite Prevention Page",
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

export const chronicPainPage = defineType({
  name: "chronicPainPage",
  title: "Chronic Pain Page",
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

export const puppyKittenPage = defineType({
  name: "puppyKittenPage",
  title: "Puppy & Kitten Page",
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

export const skinEarPage = defineType({
  name: "skinEarPage",
  title: "Skin & Ear Page",
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

export const microchippingPage = defineType({
  name: "microchippingPage",
  title: "Microchipping Page",
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

export const softTissuePage = defineType({
  name: "softTissuePage",
  title: "Soft Tissue Page",
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

export const anesthesiaPage = defineType({
  name: "anesthesiaPage",
  title: "Anesthesia Page",
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

export const bloodworkPage = defineType({
  name: "bloodworkPage",
  title: "Bloodwork Page",
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

export const petSurgeryPage = defineType({
  name: "petSurgeryPage",
  title: "Pet Surgery Page",
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

export const dogBreedingPage = defineType({
  name: "dogBreedingPage",
  title: "Dog Breeding Page",
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

export const petXRayPage = defineType({
  name: "petXRayPage",
  title: "Pet X-Ray Page",
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

export const poisonousPlantsPage = defineType({
  name: "poisonousPlantsPage",
  title: "Poisonous Plants Page",
  type: "document",
  fields: [
    defineField({
      name: "metaData",
      title: "SEO Metadata",
      type: "object",
      fields: metaDataFields,
    }),
  ],
});

export const privacyPolicyPage = defineType({
  name: "privacyPolicyPage",
  title: "Privacy Policy Page",
  type: "document",
  fields: [
    defineField({
      name: "metaData",
      title: "SEO Metadata",
      type: "object",
      fields: metaDataFields,
    }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Section Title", type: "string" },
            { name: "body", title: "Body Text", type: "text" },
            {
              name: "items",
              title: "List Items",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "label", title: "Item Text", type: "string" },
                    { name: "bold", title: "Bold?", type: "boolean" },
                  ],
                },
              ],
            },
            { name: "footer", title: "Footer Text", type: "text" },
          ],
        },
      ],
    }),
  ],
});

export const termsPage = defineType({
  name: "termsPage",
  title: "Terms & Conditions Page",
  type: "document",
  fields: [
    defineField({
      name: "metaData",
      title: "SEO Metadata",
      type: "object",
      fields: metaDataFields,
    }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Section Title", type: "string" },
            { name: "body", title: "Body Text", type: "text" },
            {
              name: "items",
              title: "List Items",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "label", title: "Item Text", type: "string" },
                    { name: "bold", title: "Bold?", type: "boolean" },
                  ],
                },
              ],
            },
            { name: "footer", title: "Footer Text", type: "text" },
          ],
        },
      ],
    }),
  ],
});

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    defineField({
      name: "metaData",
      title: "SEO Metadata",
      type: "object",
      fields: metaDataFields,
    }),
  ],
});

export const howToVideosPage = defineType({
  name: "howToVideosPage",
  title: "How-To Videos Page",
  type: "document",
  fields: [
    defineField({
      name: "metaData",
      title: "SEO Metadata",
      type: "object",
      fields: metaDataFields,
    }),
    defineField({
      name: "videos",
      title: "Videos",
      type: "array",
      description: "YouTube videos to display in the carousel.",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "youtubeId",
              title: "YouTube Video ID",
              type: "string",
              description: "The video ID from the YouTube URL (e.g. S-pYM4VVNaI).",
            },
            {
              name: "title",
              title: "Title",
              type: "string",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "helpfulResources",
      title: "Helpful Resources",
      type: "array",
      description: "External article and resource links.",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
            },
            {
              name: "href",
              title: "URL",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "text",
            },
          ],
        },
      ],
    }),
  ],
});
export const petFoodRecallsPage = defineType({
  name: "petFoodRecallsPage",
  title: "Pet Food Recalls Page",
  type: "document",
  fields: [
    defineField({
      name: "metaData",
      title: "SEO Metadata",
      type: "object",
      fields: metaDataFields,
    }),
  ],
});
